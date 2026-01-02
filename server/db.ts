import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function createUser(user: InsertUser) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(users).values(user);
  return result;
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserLastSignedIn(userId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update user: database not available");
    return;
  }

  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, userId));
}

// TODO: Add feature queries here as your schema grows.

// ============================================
// MATCHES PROCEDURES
// ============================================

export async function syncMatches(matchesData: any[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { matches } = await import("../drizzle/schema");
  
  for (const match of matchesData) {
    await db.insert(matches).values({
      apiMatchId: match.id,
      name: match.name,
      matchType: match.matchType,
      status: match.status,
      venue: match.venue,
      matchDate: new Date(match.dateTimeGMT),
      teams: JSON.stringify(match.teams),
      seriesId: match.series_id,
      fantasyEnabled: match.fantasyEnabled,
      score: match.score ? JSON.stringify(match.score) : null,
    }).onDuplicateKeyUpdate({
      set: {
        status: match.status,
        score: match.score ? JSON.stringify(match.score) : null,
      }
    });
  }
}

export async function getUpcomingMatches() {
  const db = await getDb();
  if (!db) return [];

  const { matches } = await import("../drizzle/schema");
  
  const result = await db
    .select()
    .from(matches)
    .where(eq(matches.fantasyEnabled, true))
    .orderBy(matches.matchDate)
    .limit(20);
  
  return result;
}

export async function getMatchById(matchId: number) {
  const db = await getDb();
  if (!db) return null;

  const { matches } = await import("../drizzle/schema");
  
  const result = await db
    .select()
    .from(matches)
    .where(eq(matches.id, matchId))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}

export async function getMatchByApiId(apiMatchId: string) {
  const db = await getDb();
  if (!db) return null;

  const { matches } = await import("../drizzle/schema");
  
  const result = await db
    .select()
    .from(matches)
    .where(eq(matches.apiMatchId, apiMatchId))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}

// ============================================
// PLAYERS PROCEDURES
// ============================================

export async function syncPlayers(playersData: any[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { players } = await import("../drizzle/schema");
  
  for (const player of playersData) {
    await db.insert(players).values({
      apiPlayerId: player.id,
      name: player.name,
      country: player.country,
      role: player.role || 'All-rounder',
      credits: player.credits || 9.0,
    }).onDuplicateKeyUpdate({
      set: {
        name: player.name,
        country: player.country,
      }
    });
  }
}

export async function getPlayersByMatch(matchId: number) {
  const db = await getDb();
  if (!db) return [];

  const { players } = await import("../drizzle/schema");
  
  // For now, return all players. In production, filter by match teams
  const result = await db
    .select()
    .from(players)
    .limit(100);
  
  return result;
}

export async function getPlayerById(playerId: number) {
  const db = await getDb();
  if (!db) return null;

  const { players } = await import("../drizzle/schema");
  
  const result = await db
    .select()
    .from(players)
    .where(eq(players.id, playerId))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}

// ============================================
// TEAMS PROCEDURES
// ============================================

export async function createTeam(teamData: {
  userId: number;
  matchId: number;
  teamName: string;
  captainId: string;
  viceCaptainId: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { teams } = await import("../drizzle/schema");
  
  const result = await db.insert(teams).values({
    userId: teamData.userId,
    matchId: teamData.matchId,
    teamName: teamData.teamName,
    captainApiId: teamData.captainId,
    viceCaptainApiId: teamData.viceCaptainId,
    totalPoints: 0,
  });
  
  return Number(result[0].insertId);
}

export async function addPlayerToTeam(teamId: number, playerApiId: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { teamPlayers } = await import("../drizzle/schema");
  
  await db.insert(teamPlayers).values({
    teamId,
    playerApiId,
  });
}

export async function getUserTeams(userId: number) {
  const db = await getDb();
  if (!db) return [];

  const { teams, matches } = await import("../drizzle/schema");
  
  // Get teams with match information
  const result = await db
    .select({
      id: teams.id,
      name: teams.teamName,
      captainApiId: teams.captainApiId,
      viceCaptainApiId: teams.viceCaptainApiId,
      totalPoints: teams.totalPoints,
      createdAt: teams.createdAt,
      match: {
        id: matches.id,
        apiMatchId: matches.apiMatchId,
        name: matches.name,
        matchType: matches.matchType,
        status: matches.status,
        venue: matches.venue,
        dateTimeGMT: matches.matchDate,
      },
    })
    .from(teams)
    .leftJoin(matches, eq(teams.matchId, matches.id))
    .where(eq(teams.userId, userId))
    .orderBy(desc(teams.createdAt));
  
  return result;
}

export async function getTeamById(teamId: number) {
  const db = await getDb();
  if (!db) return null;

  const { teams } = await import("../drizzle/schema");
  
  const result = await db
    .select()
    .from(teams)
    .where(eq(teams.id, teamId))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}

export async function getTeamPlayers(teamId: number) {
  const db = await getDb();
  if (!db) return [];

  const { teamPlayers, players } = await import("../drizzle/schema");
  
  // Get team players with their API IDs
  const teamPlayerRecords = await db
    .select()
    .from(teamPlayers)
    .where(eq(teamPlayers.teamId, teamId));
  
  // For each team player, fetch the player details by API ID
  const playerDetails = [];
  for (const tp of teamPlayerRecords) {
    if (tp.playerApiId) {
      const player = await db
        .select()
        .from(players)
        .where(eq(players.apiPlayerId, tp.playerApiId))
        .limit(1);
      
      if (player.length > 0) {
        playerDetails.push({
          ...player[0],
          pointsEarned: tp.pointsEarned,
        });
      }
    }
  }
  
  return playerDetails;
}

// ============================================
// LEADERBOARD PROCEDURES
// ============================================

export async function getLeaderboardByMatch(matchId: number, limit: number = 100) {
  const db = await getDb();
  if (!db) return [];

  const { teams, users } = await import("../drizzle/schema");
  
  // Get teams for this match, ordered by points
  const result = await db
    .select({
      team: teams,
      user: users,
    })
    .from(teams)
    .innerJoin(users, eq(teams.userId, users.id))
    .where(eq(teams.matchId, matchId))
    .orderBy(desc(teams.totalPoints))
    .limit(limit);
  
  return result;
}

export async function getGlobalLeaderboard(limit: number = 100) {
  const db = await getDb();
  if (!db) return [];

  const { users } = await import("../drizzle/schema");
  
  const result = await db
    .select()
    .from(users)
    .orderBy(desc(users.totalPoints))
    .limit(limit);
  
  return result;
}


// Get teams by match ID
export async function getTeamsByMatchId(matchId: number) {
  const db = await getDb();
  if (!db) return [];

  const { teams } = await import("../drizzle/schema");
  
  const result = await db
    .select()
    .from(teams)
    .where(eq(teams.matchId, matchId));
  
  return result;
}

// Update team total points
export async function updateTeamPoints(teamId: number, totalPoints: number) {
  const db = await getDb();
  if (!db) return;

  const { teams } = await import("../drizzle/schema");
  
  await db
    .update(teams)
    .set({ totalPoints })
    .where(eq(teams.id, teamId));
}

// Update team player points
export async function updateTeamPlayerPoints(teamPlayerId: number, points: number) {
  const db = await getDb();
  if (!db) return;

  const { teamPlayers } = await import("../drizzle/schema");
  
  await db
    .update(teamPlayers)
    .set({ pointsEarned: points })
    .where(eq(teamPlayers.id, teamPlayerId));
}
