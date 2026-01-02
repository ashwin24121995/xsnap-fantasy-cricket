import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, index } from "drizzle-orm/mysql-core";

/**
 * XSNAP Fantasy Cricket Database Schema
 * Free-to-play fantasy cricket platform with custom authentication
 */

// Users table with custom authentication (no Manus OAuth)
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  
  // Compliance fields
  age: int("age").notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  isAgeVerified: boolean("isAgeVerified").default(false).notNull(),
  acceptedTerms: boolean("acceptedTerms").default(false).notNull(),
  
  // User preferences
  language: mysqlEnum("language", ["en", "hi", "ta", "te", "mr"]).default("en").notNull(),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  
  // Profile
  profilePicture: text("profilePicture"),
  phone: varchar("phone", { length: 20 }),
  
  // Stats
  totalPoints: int("totalPoints").default(0).notNull(),
  totalTeams: int("totalTeams").default(0).notNull(),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
  emailVerified: boolean("emailVerified").default(false).notNull(),
}, (table) => ({
  emailIdx: index("email_idx").on(table.email),
}));

// Password reset tokens
export const passwordResetTokens = mysqlTable("passwordResetTokens", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  token: varchar("token", { length: 255 }).notNull().unique(),
  expiresAt: timestamp("expiresAt").notNull(),
  used: boolean("used").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  tokenIdx: index("token_idx").on(table.token),
  userIdx: index("user_idx").on(table.userId),
}));

// Matches table - stores cricket match information from API
export const matches = mysqlTable("matches", {
  id: int("id").autoincrement().primaryKey(),
  apiMatchId: varchar("apiMatchId", { length: 100 }).notNull().unique(),
  
  // Match details
  name: varchar("name", { length: 500 }).notNull(),
  matchType: varchar("matchType", { length: 50 }).notNull(), // test, odi, t20
  venue: varchar("venue", { length: 255 }).notNull(),
  
  // Timing
  matchDate: timestamp("matchDate").notNull(),
  
  // Status
  status: text("status").notNull(), // Match in progress, Match not started, etc
  
  // Teams (JSON array)
  teams: text("teams").notNull(), // JSON: ["India", "Australia"]
  
  // Score (JSON)
  score: text("score"), // JSON: [{r: 250, w: 5, o: 50, inning: "India Inning 1"}]
  
  // Series
  seriesId: varchar("seriesId", { length: 100 }),
  
  // Fantasy
  fantasyEnabled: boolean("fantasyEnabled").default(false).notNull(),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  apiMatchIdIdx: index("api_match_id_idx").on(table.apiMatchId),
  matchDateIdx: index("match_date_idx").on(table.matchDate),
  fantasyEnabledIdx: index("fantasy_enabled_idx").on(table.fantasyEnabled),
}));

// Players table - stores cricket player information
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  apiPlayerId: varchar("apiPlayerId", { length: 100 }).notNull().unique(),
  
  // Player details
  name: varchar("name", { length: 255 }).notNull(),
  country: varchar("country", { length: 100 }).notNull(),
  role: varchar("role", { length: 50 }).default("All-rounder").notNull(),
  
  // Profile
  image: text("image"),
  
  // Fantasy stats
  credits: decimal("credits", { precision: 10, scale: 1 }).default("9.0").notNull(), // Credits (5-15)
  points: int("points").default(0).notNull(),
  
  // Performance stats
  matchesPlayed: int("matchesPlayed").default(0).notNull(),
  runs: int("runs").default(0).notNull(),
  wickets: int("wickets").default(0).notNull(),
  catches: int("catches").default(0).notNull(),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  apiPlayerIdIdx: index("api_player_id_idx").on(table.apiPlayerId),
  countryIdx: index("country_idx").on(table.country),
}));

// Teams table - user created fantasy teams
export const teams = mysqlTable("teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: int("matchId").notNull(),
  
  // Team details
  teamName: varchar("teamName", { length: 255 }).notNull(),
  captainId: int("captainId"),
  viceCaptainId: int("viceCaptainId"),
  captainApiId: varchar("captainApiId", { length: 100 }),
  viceCaptainApiId: varchar("viceCaptainApiId", { length: 100 }),
  
  // Budget
  totalCredits: decimal("totalCredits", { precision: 10, scale: 2 }).default("100.00").notNull(),
  usedCredits: decimal("usedCredits", { precision: 10, scale: 2 }).default("0.00").notNull(),
  
  // Stats
  totalPoints: int("totalPoints").default(0).notNull(),
  rank: int("rank"),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  userIdx: index("user_idx").on(table.userId),
  matchIdx: index("match_idx").on(table.matchId),
  rankIdx: index("rank_idx").on(table.rank),
}));

// Team Players junction table
export const teamPlayers = mysqlTable("teamPlayers", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull(),
  playerId: int("playerId"),
  playerApiId: varchar("playerApiId", { length: 100 }),
  
  // Player earned points in this team
  pointsEarned: int("pointsEarned").default(0).notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  teamIdx: index("team_idx").on(table.teamId),
  playerIdx: index("player_idx").on(table.playerId),
}));



// Blog posts
export const blogPosts = mysqlTable("blogPosts", {
  id: int("id").autoincrement().primaryKey(),
  
  // Content
  title: varchar("title", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 500 }).notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  
  // Media
  featuredImage: text("featuredImage"),
  
  // Metadata
  authorId: int("authorId").notNull(),
  category: varchar("category", { length: 100 }),
  tags: text("tags"), // JSON array of tags
  
  // Status
  published: boolean("published").default(false).notNull(),
  
  // Timestamps
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  slugIdx: index("slug_idx").on(table.slug),
  authorIdx: index("author_idx").on(table.authorId),
  publishedIdx: index("published_idx").on(table.published),
}));

// Contact form submissions
export const contactSubmissions = mysqlTable("contactSubmissions", {
  id: int("id").autoincrement().primaryKey(),
  
  // Contact details
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  subject: varchar("subject", { length: 500 }).notNull(),
  message: text("message").notNull(),
  
  // Status
  status: mysqlEnum("status", ["new", "read", "responded"]).default("new").notNull(),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  statusIdx: index("status_idx").on(table.status),
  emailIdx: index("email_idx").on(table.email),
}));

// Type exports
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type PasswordResetToken = typeof passwordResetTokens.$inferSelect;
export type InsertPasswordResetToken = typeof passwordResetTokens.$inferInsert;

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

export type Team = typeof teams.$inferSelect;
export type InsertTeam = typeof teams.$inferInsert;

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

export type Leaderboard = typeof leaderboards.$inferSelect;
export type InsertLeaderboard = typeof leaderboards.$inferInsert;

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;
