import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { ENV } from "./_core/env";

const JWT_SECRET = new TextEncoder().encode(ENV.cookieSecret);
const JWT_ALG = "HS256";

/**
 * Hash a plain text password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Verify a plain text password against a hashed password
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * Generate a JWT token for a user
 */
export async function generateToken(userId: number, email: string): Promise<string> {
  const token = await new SignJWT({ userId, email })
    .setProtectedHeader({ alg: JWT_ALG })
    .setIssuedAt()
    .setExpirationTime("7d") // Token expires in 7 days
    .sign(JWT_SECRET);

  return token;
}

/**
 * Verify and decode a JWT token
 */
export async function verifyToken(token: string): Promise<{ userId: number; email: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      userId: payload.userId as number,
      email: payload.email as string,
    };
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

/**
 * Generate a random token for password reset
 */
export function generateResetToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 * - At least 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 */
export function isValidPassword(password: string): boolean {
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}

/**
 * Restricted states in India where fantasy cricket is not allowed
 */
export const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana",
];

/**
 * Check if a state is restricted
 */
export function isRestrictedState(state: string): boolean {
  return RESTRICTED_STATES.includes(state);
}

/**
 * Validate age (must be 18+)
 */
export function isValidAge(age: number): boolean {
  return age >= 18;
}
