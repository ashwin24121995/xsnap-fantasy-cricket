import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import * as db from "./db";
import * as cricketApi from "./_core/cricketApi";

/**
 * Fantasy Cricket Routers
 * Handles matches, players, teams, and leaderboards
 */

// ============================================
// MATCHES ROUTER
// ============================================

export const matchesRouter = router({
  // Get upcoming matches
  getUpcoming: publicProcedure.query(async () => {
    // First, sync latest matches from Cricket API
    const apiMatches = await cricketApi.getCurrentMatches();
    if (apiMatches.length > 0) {
      await db.syncMatches(apiMatches);
    }
    
    // Return matches from database
    return await db.getUpcomingMatches();
  }),

  // Get match by ID
  getById: publicProcedure
    .input(z.object({ matchId: z.number() }))
    .query(async ({ input }) => {
      return await db.getMatchById(input.matchId);
    }),

  // Sync matches from API (admin only)
  syncFromApi: protectedProcedure.mutation(async () => {
    const apiMatches = await cricketApi.getCurrentMatches();
    await db.syncMatches(apiMatches);
    return { success: true, count: apiMatches.length };
  }),
});

// ============================================
// PLAYERS ROUTER
// ============================================

export const playersRouter = router({
  // Get players for a match
  getByMatch: publicProcedure
    .input(z.object({ matchId: z.number() }))
    .query(async ({ input }) => {
      return await db.getPlayersByMatch(input.matchId);
    }),

  // Get player by ID
  getById: publicProcedure
    .input(z.object({ playerId: z.number() }))
    .query(async ({ input }) => {
      return await db.getPlayerById(input.playerId);
    }),

  // Sync players from API (admin only)
  syncFromApi: protectedProcedure.mutation(async () => {
    const apiPlayers = await cricketApi.getAllPlayers();
    await db.syncPlayers(apiPlayers);
    return { success: true, count: apiPlayers.length };
  }),
});

// ============================================
// TEAMS ROUTER
// ============================================

export const teamsRouter = router({
  // Create a new team
  create: protectedProcedure
    .input(
      z.object({
        matchId: z.number(),
        teamName: z.string().min(1).max(255),
        captainId: z.number(),
        viceCaptainId: z.number(),
        playerIds: z.array(z.number()).min(11).max(11),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Create team
      const teamId = await db.createTeam({
        userId: ctx.user.id,
        matchId: input.matchId,
        teamName: input.teamName,
        captainId: input.captainId,
        viceCaptainId: input.viceCaptainId,
      });

      // Add players to team
      for (const playerId of input.playerIds) {
        await db.addPlayerToTeam(teamId, playerId);
      }

      return { teamId, success: true };
    }),

  // Get user's teams
  getMyTeams: protectedProcedure.query(async ({ ctx }) => {
    return await db.getUserTeams(ctx.user.id);
  }),

  // Get team by ID with players
  getById: protectedProcedure
    .input(z.object({ teamId: z.number() }))
    .query(async ({ input }) => {
      const team = await db.getTeamById(input.teamId);
      if (!team) return null;

      const players = await db.getTeamPlayers(input.teamId);
      return { ...team, players };
    }),
});

// ============================================
// LEADERBOARD ROUTER
// ============================================

export const leaderboardRouter = router({
  // Get leaderboard for a match
  getByMatch: publicProcedure
    .input(z.object({ matchId: z.number(), limit: z.number().optional() }))
    .query(async ({ input }) => {
      return await db.getLeaderboardByMatch(input.matchId, input.limit);
    }),

  // Get global leaderboard
  getGlobal: publicProcedure
    .input(z.object({ limit: z.number().optional() }))
    .query(async ({ input }) => {
      return await db.getGlobalLeaderboard(input.limit);
    }),
});
