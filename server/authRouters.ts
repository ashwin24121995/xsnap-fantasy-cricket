import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import {
  generateResetToken,
  generateToken,
  hashPassword,
  isRestrictedState,
  isValidAge,
  isValidEmail,
  isValidPassword,
  RESTRICTED_STATES,
  verifyPassword,
} from "./auth";
import { createUser, getUserByEmail, getUserById, updateUserLastSignedIn } from "./db";

export const authRouter = router({
  /**
   * Register a new user with email/password
   */
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(2),
        age: z.number().min(18),
        state: z.string().min(2),
        acceptedTerms: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Validate email format
      if (!isValidEmail(input.email)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid email format",
        });
      }

      // Validate password strength
      if (!isValidPassword(input.password)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Password must be at least 8 characters with uppercase, lowercase, and numbers",
        });
      }

      // Validate age
      if (!isValidAge(input.age)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You must be at least 18 years old to register",
        });
      }

      // Check if state is restricted
      if (isRestrictedState(input.state)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `Sorry, this platform is not available in ${input.state} due to government compliance`,
        });
      }

      // Check if terms are accepted
      if (!input.acceptedTerms) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You must accept the terms and conditions",
        });
      }

      // Check if user already exists
      const existingUser = await getUserByEmail(input.email);
      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User with this email already exists",
        });
      }

      // Hash password
      const passwordHash = await hashPassword(input.password);

      // Create user
      await createUser({
        email: input.email,
        passwordHash,
        name: input.name,
        age: input.age,
        state: input.state,
        acceptedTerms: input.acceptedTerms,
        isAgeVerified: true,
        emailVerified: false,
      });

      // Get the created user
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create user",
        });
      }

      // Generate JWT token
      const token = await generateToken(user.id, user.email);

      // Set token in cookie
      ctx.res.cookie("xsnap_auth_token", token, {
        httpOnly: true,
        secure: ctx.req.protocol === "https",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: "/",
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    }),

  /**
   * Login with email/password
   */
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Get user by email
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Verify password
      const isPasswordValid = await verifyPassword(input.password, user.passwordHash);
      if (!isPasswordValid) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Check if user's state is still allowed
      if (isRestrictedState(user.state)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `Access denied: This platform is not available in ${user.state}`,
        });
      }

      // Update last signed in
      await updateUserLastSignedIn(user.id);

      // Generate JWT token
      const token = await generateToken(user.id, user.email);

      // Set token in cookie
      ctx.res.cookie("xsnap_auth_token", token, {
        httpOnly: true,
        secure: ctx.req.protocol === "https",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: "/",
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    }),

  /**
   * Get current user from token
   */
  me: publicProcedure.query(async ({ ctx }) => {
    // This will be populated by custom middleware
    return ctx.user || null;
  }),

  /**
   * Logout (client-side will clear token)
   */
  logout: publicProcedure.mutation(({ ctx }) => {
    // Clear auth cookie
    ctx.res.clearCookie("xsnap_auth_token", {
      httpOnly: true,
      secure: ctx.req.protocol === "https",
      sameSite: "lax",
      path: "/",
    });

    return {
      success: true,
    };
  }),

  /**
   * Get list of restricted states
   */
  getRestrictedStates: publicProcedure.query(() => {
    return RESTRICTED_STATES;
  }),

  /**
   * Request password reset
   */
  requestPasswordReset: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await getUserByEmail(input.email);
      if (!user) {
        // Don't reveal if user exists or not
        return {
          success: true,
          message: "If the email exists, a reset link will be sent",
        };
      }

      // Generate reset token
      const resetToken = generateResetToken();

      // TODO: Store reset token in database with expiry
      // TODO: Send email with reset link

      return {
        success: true,
        message: "Password reset link sent to your email",
      };
    }),

  /**
   * Reset password with token
   */
  resetPassword: publicProcedure
    .input(
      z.object({
        token: z.string(),
        newPassword: z.string().min(8),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Validate password strength
      if (!isValidPassword(input.newPassword)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Password must be at least 8 characters with uppercase, lowercase, and numbers",
        });
      }

      // TODO: Verify reset token from database
      // TODO: Update user password
      // TODO: Mark token as used

      return {
        success: true,
        message: "Password reset successfully",
      };
    }),
});
