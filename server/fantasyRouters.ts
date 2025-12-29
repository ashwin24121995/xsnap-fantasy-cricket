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
  // Get upcoming matches (today + future only, no completed)
  getUpcoming: publicProcedure.query(async () => {
    // Get matches from active series (Big Bash, ILT20, SA20)
    const seriesMatches = await cricketApi.getUpcomingMatchesFromSeries();
    
    // Also get today's matches
    const currentMatches = await cricketApi.getCurrentMatches();
    
    // Combine and deduplicate
    const allMatches = [...currentMatches, ...seriesMatches];
    const uniqueMatches = Array.from(
      new Map(allMatches.map(m => [m.id, m])).values()
    );
    
    // Filter to show only upcoming matches (today + future, not completed)
    const upcomingMatches = cricketApi.filterUpcomingMatches(uniqueMatches);
    
    // Sort by date (earliest first)
    upcomingMatches.sort((a, b) => 
      new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime()
    );
    
    // Sync to database
    if (upcomingMatches.length > 0) {
      await db.syncMatches(upcomingMatches);
    }
    
    return upcomingMatches;
  }),

  // Get live matches (currently in progress)
  getLive: publicProcedure.query(async () => {
    const apiMatches = await cricketApi.getCurrentMatches();
    const liveMatches = cricketApi.filterLiveMatches(apiMatches);
    return liveMatches;
  }),

  // Get completed matches
  getCompleted: publicProcedure.query(async () => {
    const apiMatches = await cricketApi.getCurrentMatches();
    const completedMatches = cricketApi.filterCompletedMatches(apiMatches);
    return completedMatches;
  }),

  // Get detailed match information
  getMatchInfo: publicProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      return await cricketApi.getMatchInfo(input.matchId);
    }),

  // Get match squad (player lists)
  getMatchSquad: publicProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      return await cricketApi.getMatchSquad(input.matchId);
    }),

  // Get live score for a specific match (for real-time updates)
  getLiveScore: publicProcedure
    .input(z.object({ matchApiId: z.string() }))
    .query(async ({ input }) => {
      // Get detailed match info from Cricket API
      const matchInfo = await cricketApi.getMatchInfo(input.matchApiId);
      return matchInfo;
    }),

  // Get match by ID
  getById: publicProcedure
    .input(z.object({ matchId: z.number() }))
    .query(async ({ input }) => {
      return await db.getMatchById(input.matchId);
    }),

  // Get fantasy match points (for completed matches)
  getMatchPoints: publicProcedure
    .input(z.object({ matchApiId: z.string() }))
    .query(async ({ input }) => {
      // Get fantasy points from Cricket API
      const matchPoints = await cricketApi.getFantasyMatchPoints(input.matchApiId);
      return matchPoints;
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
  // Get players for a match from Fantasy Squad API (real-time)
  getByMatch: publicProcedure
    .input(z.object({ matchApiId: z.string() }))
    .query(async ({ input }) => {
      // Get real-time fantasy squad from Cricket API
      const fantasySquad = await cricketApi.getFantasySquad(input.matchApiId);
      return fantasySquad;
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
