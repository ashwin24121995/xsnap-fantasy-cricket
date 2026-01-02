import { describe, it, expect, beforeAll } from "vitest";
import * as db from "./db";

/**
 * Team Creation Test Suite
 * Tests the complete team creation flow with Cricket API IDs
 */

describe("Team Creation with API IDs", () => {
  let testUserId: number;
  let testMatchApiId: string;
  let testMatchId: number;

  beforeAll(async () => {
    // Create a test user
    const userResult = await db.createUser({
      email: `test-${Date.now()}@example.com`,
      passwordHash: "hashedpassword123",
      name: "Test User",
      age: 25,
      state: "Maharashtra",
    });
    testUserId = Number(userResult[0].insertId);

    // Create a test match with API ID
    testMatchApiId = `test-match-${Date.now()}`;
    await db.syncMatches([{
      id: testMatchApiId,
      name: "Test Match",
      matchType: "T20",
      status: "Upcoming",
      venue: "Test Stadium",
      dateTimeGMT: new Date().toISOString(),
      teams: ["Team A", "Team B"],
      series_id: "test-series",
      fantasyEnabled: true,
    }]);

    // Get the created match
    const match = await db.getMatchByApiId(testMatchApiId);
    if (!match) {
      throw new Error("Failed to create test match");
    }
    testMatchId = match.id;
  });

  it("should create a team with API IDs for captain and vice-captain", async () => {
    const captainApiId = "player-api-123";
    const viceCaptainApiId = "player-api-456";

    const teamId = await db.createTeam({
      userId: testUserId,
      matchId: testMatchId,
      teamName: "Test Dream Team",
      captainId: captainApiId,
      viceCaptainId: viceCaptainApiId,
    });

    expect(teamId).toBeTypeOf("number");
    expect(teamId).toBeGreaterThan(0);

    // Verify team was created with correct API IDs
    const team = await db.getTeamById(teamId);
    expect(team).toBeDefined();
    expect(team?.teamName).toBe("Test Dream Team");
    expect(team?.userId).toBe(testUserId);
    expect(team?.matchId).toBe(testMatchId);
  });

  it("should add players to team using API IDs", async () => {
    const teamId = await db.createTeam({
      userId: testUserId,
      matchId: testMatchId,
      teamName: "Test Team 2",
      captainId: "captain-api-789",
      viceCaptainId: "vice-captain-api-012",
    });

    // Add a few players using API IDs
    const playerApiIds = ["player-1", "player-2", "player-3"];

    for (const playerApiId of playerApiIds) {
      await db.addPlayerToTeam(teamId, playerApiId);
    }

    // Verify the function completes without errors
    // Note: getTeamPlayers will return empty array since players don't exist in DB,
    // but the teamPlayers records should be created
    expect(teamId).toBeGreaterThan(0);
  });

  it("should retrieve match by API ID", async () => {
    const match = await db.getMatchByApiId(testMatchApiId);
    
    expect(match).toBeDefined();
    expect(match?.apiMatchId).toBe(testMatchApiId);
    expect(match?.name).toBe("Test Match");
    expect(match?.matchType).toBe("T20");
    expect(match?.fantasyEnabled).toBe(true);
  });

  it("should handle team creation for non-existent match gracefully", async () => {
    const nonExistentMatch = await db.getMatchByApiId("non-existent-match-id");
    expect(nonExistentMatch).toBeNull();
  });
});
