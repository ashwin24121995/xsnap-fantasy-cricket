/**
 * Cricket API Integration
 * API Documentation: https://cricketdata.org/how-to-use-cricket-data-api.aspx
 */

const CRICKET_API_BASE_URL = 'https://api.cricapi.com/v1';
// Paid API Key - CricketData U (expires Jan 18, 2026)
const CRICKET_API_KEY = process.env.CRICKET_API_KEY || '1a822521-d7e0-46ff-98d3-3e51020863f3';

interface CricketApiResponse<T> {
  apikey: string;
  status: 'success' | 'failure';
  data: T;
  info: {
    hitsToday: number;
    hitsLimit: number;
    credits?: number;
    server: number;
    offsetRows: number;
    totalRows: number;
    queryTime: number;
  };
}

export interface Match {
  id: string;
  name: string;
  matchType: 'test' | 'odi' | 't20';
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  score?: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  series_id: string;
  fantasyEnabled: boolean;
}

export interface Player {
  id: string;
  name: string;
  role?: string;
  battingStyle?: string;
  bowlingStyle?: string;
  country: string;
  playerImg?: string;
}

export interface MatchInfo {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo?: Array<{
    name: string;
    shortname: string;
    img: string;
  }>;
  score?: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  tossWinner?: string;
  tossChoice?: string;
  matchWinner?: string;
  series_id: string;
  fantasyEnabled: boolean;
  hasSquad: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

export interface MatchSquad {
  [teamName: string]: Player[];
}

export interface Series {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  odi: number;
  t20: number;
  test: number;
  squads: number;
  matches: number;
}

async function fetchCricketApi<T>(endpoint: string, params: Record<string, string> = {}): Promise<CricketApiResponse<T>> {
  const url = new URL(`${CRICKET_API_BASE_URL}/${endpoint}`);
  url.searchParams.append('apikey', CRICKET_API_KEY);
  url.searchParams.append('offset', '0');
  
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`Cricket API error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get current matches (live and upcoming)
 */
export async function getCurrentMatches(): Promise<Match[]> {
  try {
    const response = await fetchCricketApi<Match[]>('currentMatches');
    return response.status === 'success' ? response.data : [];
  } catch (error) {
    console.error('Error fetching current matches:', error);
    return [];
  }
}

/**
 * Get upcoming matches from active series
 * Fetches matches from Big Bash League and other ongoing series
 */
export async function getUpcomingMatchesFromSeries(): Promise<Match[]> {
  try {
    // Big Bash League 2024-25 (active series with matches Dec 29 onwards)
    const seriesIds = [
      '107c2a65-2778-4235-b31d-bbc29346cd94', // Big Bash League 2024-25
      '35c5209a-781b-48f9-8675-0f57be850b4a', // ILT20 2024-25
      '02cafabf-ce3e-4b47-9910-c75dfd8d1515', // SA20 2024-25
    ];

    const allMatches: Match[] = [];

    for (const seriesId of seriesIds) {
      try {
        const response = await fetchCricketApi<any>('series_info', { id: seriesId });
        if (response.status === 'success' && response.data?.matchList) {
          const matches = response.data.matchList as Match[];
          allMatches.push(...matches);
        }
      } catch (err) {
        console.error(`Error fetching series ${seriesId}:`, err);
      }
    }

    return allMatches;
  } catch (error) {
    console.error('Error fetching upcoming matches from series:', error);
    return [];
  }
}

/**
 * Get all matches
 */
export async function getAllMatches(): Promise<Match[]> {
  try {
    const response = await fetchCricketApi<Match[]>('matches');
    return response.status === 'success' ? response.data : [];
  } catch (error) {
    console.error('Error fetching all matches:', error);
    return [];
  }
}

/**
 * Get detailed match information
 * Returns complete match details including scores, toss, winner
 */
export async function getMatchInfo(matchId: string): Promise<MatchInfo | null> {
  try {
    const response = await fetchCricketApi<MatchInfo>('match_info', { id: matchId });
    return response.status === 'success' && response.data ? response.data : null;
  } catch (error) {
    console.error('Error fetching match info:', error);
    return null;
  }
}

/**
 * Get all players
 */
export async function getAllPlayers(): Promise<Player[]> {
  try {
    const response = await fetchCricketApi<Player[]>('players');
    return response.status === 'success' ? response.data : [];
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
}

/**
 * Get player details by ID
 */
export async function getPlayerInfo(playerId: string): Promise<Player | null> {
  try {
    const response = await fetchCricketApi<Player>('players_info', { id: playerId });
    return response.status === 'success' ? response.data : null;
  } catch (error) {
    console.error('Error fetching player info:', error);
    return null;
  }
}

/**
 * Get series list
 */
export async function getAllSeries(): Promise<Series[]> {
  try {
    const response = await fetchCricketApi<Series[]>('series');
    return response.status === 'success' ? response.data : [];
  } catch (error) {
    console.error('Error fetching series:', error);
    return [];
  }
}

/**
 * Search series by name
 */
export async function searchSeries(searchTerm: string): Promise<Series[]> {
  try {
    const response = await fetchCricketApi<Series[]>('series', { search: searchTerm });
    return response.status === 'success' ? response.data : [];
  } catch (error) {
    console.error('Error searching series:', error);
    return [];
  }
}


/**
 * Fantasy Cricket APIs (Paid Subscription Required)
 */

export interface FantasyPlayer {
  id: string;
  name: string;
  role: 'wk' | 'bat' | 'all' | 'bowl';
  credits: number;
  battingStyle?: string;
  bowlingStyle?: string;
  team: string;
  imageUrl?: string;
}

export interface FantasySquad {
  matchId: string;
  players: FantasyPlayer[];
  teams: {
    name: string;
    players: FantasyPlayer[];
  }[];
}

export interface FantasyMatchPoints {
  matchId: string;
  players: Array<{
    id: string;
    name: string;
    points: number;
    batting: {
      runs: number;
      balls: number;
      fours: number;
      sixes: number;
    };
    bowling: {
      wickets: number;
      overs: number;
      maidens: number;
      runs: number;
    };
    fielding: {
      catches: number;
      stumpings: number;
      runOuts: number;
    };
  }>;
}

/**
 * Get fantasy squad for a match
 * Returns players with roles, credits, and team info
 */
export async function getFantasySquad(matchId: string): Promise<FantasySquad | null> {
  try {
    const response = await fetchCricketApi<any>('fantasy_squad', { id: matchId });
    if (response.status === 'success' && response.data) {
      return {
        matchId,
        players: response.data.players || [],
        teams: response.data.teams || []
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching fantasy squad:', error);
    return null;
  }
}

/**
 * Get fantasy match points
 * Returns fantasy points for each player after match completion
 */
export async function getFantasyMatchPoints(matchId: string, ruleset: number = 0): Promise<FantasyMatchPoints | null> {
  try {
    const response = await fetchCricketApi<any>('match_points', { 
      id: matchId,
      ruleset: ruleset.toString()
    });
    if (response.status === 'success' && response.data) {
      return {
        matchId,
        players: response.data.players || []
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching fantasy match points:', error);
    return null;
  }
}

/**
 * Get series squads
 * Returns all players in a series
 */
export async function getSeriesSquads(seriesId: string): Promise<FantasyPlayer[]> {
  try {
    const response = await fetchCricketApi<any>('series_squad', { id: seriesId });
    return response.status === 'success' && response.data ? response.data.players || [] : [];
  } catch (error) {
    console.error('Error fetching series squads:', error);
    return [];
  }
}

/**
 * Filter upcoming matches (today + future only)
 * Excludes completed matches
 */
export function filterUpcomingMatches(matches: Match[]): Match[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  return matches.filter(match => {
    // Check if match has ended
    if (match.status && (
      match.status.includes('won by') ||
      match.status.includes('Match tied') ||
      match.status.includes('No result')
    )) {
      return false;
    }
    
    // Check if match date is today or future
    const matchDate = new Date(match.date);
    return matchDate >= today;
  });
}

/**
 * Filter live matches
 * Returns only matches that are currently in progress
 */
export function filterLiveMatches(matches: Match[]): Match[] {
  return matches.filter(match => {
    if (!match.fantasyEnabled) return false;
    
    // Check if match is live (has score but not completed)
    const isLive = match.score && match.score.length > 0 && 
                   !match.status.includes('won by') &&
                   !match.status.includes('Match tied') &&
                   !match.status.includes('No result');
    
    return isLive;
  });
}

/**
 * Filter completed matches
 * Returns only matches that have finished
 */
export function filterCompletedMatches(matches: Match[]): Match[] {
  return matches.filter(match => {
    // Check if match has ended
    return match.status && (
      match.status.includes('won by') ||
      match.status.includes('Match tied') ||
      match.status.includes('No result')
    );
  });
}

/**
 * Check if match has started
 * Used to prevent team creation after match begins
 */
export function hasMatchStarted(match: Match): boolean {
  // If match has score data, it has started
  if (match.score && match.score.length > 0) return true;
  
  // Check if match time has passed
  const matchTime = new Date(match.dateTimeGMT);
  const now = new Date();
  return now >= matchTime;
}

/**
 * Get match squad (player lists for both teams)
 * Returns complete player rosters with images and details
 */
export async function getMatchSquad(matchId: string): Promise<MatchSquad | null> {
  try {
    const response = await fetchCricketApi<MatchSquad>('match_squad', { id: matchId });
    return response.status === 'success' && response.data ? response.data : null;
  } catch (error) {
    console.error('Error fetching match squad:', error);
    return null;
  }
}
