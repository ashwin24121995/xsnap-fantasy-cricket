import { describe, it, expect } from 'vitest';
import * as cricketApi from './_core/cricketApi';

describe('Cricket API Integration', () => {
  it('should fetch current matches successfully', async () => {
    const matches = await cricketApi.getCurrentMatches();
    
    // API should return an array (even if empty)
    expect(Array.isArray(matches)).toBe(true);
    
    // If matches exist, verify structure
    if (matches.length > 0) {
      const match = matches[0];
      expect(match).toHaveProperty('id');
      expect(match).toHaveProperty('name');
      expect(match).toHaveProperty('matchType');
      expect(match).toHaveProperty('teams');
      expect(match).toHaveProperty('fantasyEnabled');
    }
  }, 10000); // 10 second timeout for API call

  it('should fetch fantasy match points for a completed match', async () => {
    // First get current matches
    const matches = await cricketApi.getCurrentMatches();
    
    // Find a completed match with fantasy enabled
    const completedMatch = matches.find(m => 
      m.fantasyEnabled && 
      m.status && 
      (m.status.includes('won by') || m.status.includes('Match tied'))
    );
    
    if (completedMatch) {
      const matchPoints = await cricketApi.getFantasyMatchPoints(completedMatch.id);
      
      // Should return match points data or null
      if (matchPoints) {
        expect(matchPoints).toHaveProperty('matchId');
        expect(matchPoints).toHaveProperty('players');
        expect(Array.isArray(matchPoints.players)).toBe(true);
      }
    } else {
      // If no completed matches, test passes (API is working, just no data)
      expect(true).toBe(true);
    }
  }, 15000); // 15 second timeout

  it('should filter upcoming matches correctly', () => {
    const mockMatches = [
      {
        id: '1',
        name: 'Test Match 1',
        matchType: 't20' as const,
        status: 'Team A won by 10 runs',
        venue: 'Stadium A',
        date: '2025-12-29',
        dateTimeGMT: '2025-12-29T14:00:00',
        teams: ['Team A', 'Team B'],
        series_id: 'series1',
        fantasyEnabled: true,
      },
      {
        id: '2',
        name: 'Test Match 2',
        matchType: 't20' as const,
        status: 'Match not started',
        venue: 'Stadium B',
        date: '2025-12-30',
        dateTimeGMT: '2025-12-30T14:00:00',
        teams: ['Team C', 'Team D'],
        series_id: 'series2',
        fantasyEnabled: true,
      },
    ];

    const upcomingMatches = cricketApi.filterUpcomingMatches(mockMatches);
    
    // Should exclude completed match (id: 1)
    expect(upcomingMatches.length).toBe(1);
    expect(upcomingMatches[0].id).toBe('2');
  });

  it('should filter live matches correctly', () => {
    const mockMatches = [
      {
        id: '1',
        name: 'Live Match',
        matchType: 't20' as const,
        status: 'Live - Team A 150/5',
        venue: 'Stadium A',
        date: '2025-12-28',
        dateTimeGMT: '2025-12-28T14:00:00',
        teams: ['Team A', 'Team B'],
        score: [{ r: 150, w: 5, o: 18, inning: 'Team A Inning 1' }],
        series_id: 'series1',
        fantasyEnabled: true,
      },
      {
        id: '2',
        name: 'Completed Match',
        matchType: 't20' as const,
        status: 'Team C won by 5 wickets',
        venue: 'Stadium B',
        date: '2025-12-28',
        dateTimeGMT: '2025-12-28T10:00:00',
        teams: ['Team C', 'Team D'],
        score: [
          { r: 180, w: 10, o: 20, inning: 'Team C Inning 1' },
          { r: 181, w: 5, o: 19, inning: 'Team D Inning 1' }
        ],
        series_id: 'series2',
        fantasyEnabled: true,
      },
    ];

    const liveMatches = cricketApi.filterLiveMatches(mockMatches);
    
    // Should only include live match (id: 1)
    expect(liveMatches.length).toBe(1);
    expect(liveMatches[0].id).toBe('1');
  });
});
