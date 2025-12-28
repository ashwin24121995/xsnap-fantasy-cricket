import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import cookie from "cookie";
import { verifyToken } from "./auth";
import { getUserById } from "./db";
import type { User } from "../drizzle/schema";

export const CUSTOM_AUTH_COOKIE = "xsnap_auth_token";

export type CustomContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

/**
 * Create custom context with JWT-based authentication
 * This replaces the Manus OAuth context
 */
export async function createCustomContext(opts: CreateExpressContextOptions): Promise<CustomContext> {
  const { req, res } = opts;

  // Try to get token from cookie
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies[CUSTOM_AUTH_COOKIE];

  let user: User | null = null;

  if (token) {
    try {
      // Verify JWT token
      const payload = await verifyToken(token);
      if (payload) {
        // Get user from database
        const dbUser = await getUserById(payload.userId);
        if (dbUser) {
          user = dbUser;
        }
      }
    } catch (error) {
      console.error("[Auth] Token verification failed:", error);
      // Clear invalid cookie
      res.clearCookie(CUSTOM_AUTH_COOKIE);
    }
  }

  return {
    req,
    res,
    user,
  };
}
