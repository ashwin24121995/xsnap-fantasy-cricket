/**
 * Fantasy Points Calculation Service
 * Calculates fantasy points for teams based on player performances
 * with captain (2x) and vice-captain (1.5x) multipliers
 */

import * as db from "./db";
import * as cricketApi from "./_core/cricketApi";

/**
 * Update fantasy points for all teams in a completed match
 */
export async function updateMatchPoints(matchApiId: string) {
  try {
    // Get match from database
    const match = await db.getMatchByApiId(matchApiId);
    if (!match) {
      console.log(`Match ${matchApiId} not found in database`);
      return { success: false, error: "Match not found" };
    }

    // Get fantasy points from Cricket API
    const fantasyPointsData = await cricketApi.getFantasyMatchPoints(matchApiId);
    if (!fantasyPointsData || !fantasyPointsData.players || fantasyPointsData.players.length === 0) {
      console.log(`No fantasy points available for match ${matchApiId}`);
      return { success: false, error: "No fantasy points available" };
    }

    const fantasyPoints = fantasyPointsData.players;

    // Get all teams for this match
    const teams = await db.getTeamsByMatchId(match.id);
    console.log(`Found ${teams.length} teams for match ${matchApiId}`);

    let updatedCount = 0;

    // Calculate points for each team
    for (const team of teams) {
      try {
        const totalPoints = await calculateTeamPoints(
          team.id,
          fantasyPoints,
          team.captainApiId,
          team.viceCaptainApiId
        );

        // Update team total points
        await db.updateTeamPoints(team.id, totalPoints);
        updatedCount++;

        console.log(`Updated team ${team.id} with ${totalPoints} points`);
      } catch (error) {
        console.error(`Error updating team ${team.id}:`, error);
      }
    }

    return {
      success: true,
      matchId: matchApiId,
      teamsUpdated: updatedCount,
    };
  } catch (error) {
    console.error(`Error updating match points for ${matchApiId}:`, error);
    return { success: false, error: String(error) };
  }
}

/**
 * Calculate total fantasy points for a team
 * Applies captain (2x) and vice-captain (1.5x) multipliers
 */
async function calculateTeamPoints(
  teamId: number,
  fantasyPoints: Array<{ id: string; name: string; points: number }>,
  captainApiId: string | null,
  viceCaptainApiId: string | null
): Promise<number> {
  // Get team players
  const teamPlayers = await db.getTeamPlayers(teamId);

  let totalPoints = 0;

  // Calculate points for each player
  for (const teamPlayer of teamPlayers) {
    const playerApiId = teamPlayer.apiPlayerId;
    if (!playerApiId) continue;

    // Find player's fantasy points
    const playerPoints = fantasyPoints.find(
      (fp) => fp.id === playerApiId
    );

    if (!playerPoints) {
      console.log(`No fantasy points found for player ${playerApiId}`);
      continue;
    }

    // Base points from API
    let points = playerPoints.points || 0;

    // Apply multipliers
    if (playerApiId === captainApiId) {
      points *= 2; // Captain gets 2x points
      console.log(`Captain ${playerApiId}: ${points / 2} -> ${points} (2x)`);
    } else if (playerApiId === viceCaptainApiId) {
      points *= 1.5; // Vice-captain gets 1.5x points
      console.log(
        `Vice-Captain ${playerApiId}: ${points / 1.5} -> ${points} (1.5x)`
      );
    }

    // Update individual player points in teamPlayers table
    await db.updateTeamPlayerPoints(teamPlayer.id, Math.round(points));

    totalPoints += Math.round(points);
  }

  return totalPoints;
}

/**
 * Update points for all completed matches
 * Can be called periodically via cron job
 */
export async function updateAllCompletedMatches() {
  try {
    // Get completed matches from API
    const apiMatches = await cricketApi.getCurrentMatches();
    const completedMatches = cricketApi.filterCompletedMatches(apiMatches);

    console.log(`Found ${completedMatches.length} completed matches`);

    let updatedCount = 0;
    const results = [];

    for (const match of completedMatches) {
      const result = await updateMatchPoints(match.id);
      results.push({ matchId: match.id, ...result });
      if (result.success) updatedCount++;
    }

    return {
      success: true,
      totalMatches: completedMatches.length,
      updated: updatedCount,
      results,
    };
  } catch (error) {
    console.error("Error updating all completed matches:", error);
    return { success: false, error: String(error) };
  }
}
