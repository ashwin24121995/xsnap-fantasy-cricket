/**
 * Cricket API Integration
 * API Documentation: https://cricketdata.org/how-to-use-cricket-data-api.aspx
 */

const CRICKET_API_BASE_URL = 'https://api.cricapi.com/v1';
const CRICKET_API_KEY = process.env.CRICKET_API_KEY || 'YOUR_API_KEY_HERE';

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
  country: string;
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
 * Get match details by ID
 */
export async function getMatchInfo(matchId: string): Promise<Match | null> {
  try {
    const response = await fetchCricketApi<Match>('match_info', { id: matchId });
    return response.status === 'success' ? response.data : null;
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
