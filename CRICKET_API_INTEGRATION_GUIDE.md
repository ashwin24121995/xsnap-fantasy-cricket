# XSNAP Fantasy Cricket - API Integration & Implementation Guide

**Author:** Manus AI  
**Last Updated:** January 2, 2026  
**Version:** 1.0

---

## Table of Contents

1. [Overview](#overview)
2. [Cricket API Integration](#cricket-api-integration)
3. [Data Fetching Patterns](#data-fetching-patterns)
4. [CTA Button Workflows](#cta-button-workflows)
5. [Backend Architecture](#backend-architecture)
6. [Frontend Components](#frontend-components)
7. [Database Schema](#database-schema)
8. [Points Calculation System](#points-calculation-system)
9. [Implementation Checklist](#implementation-checklist)

---

## Overview

XSNAP Fantasy Cricket is built on a modern tech stack integrating the Cricket API for real-time match data, with a tRPC-based backend and React frontend. This document explains how all the pieces work together.

### Tech Stack

The application uses the following technologies:

- **Frontend:** React 19 + Tailwind CSS 4 + Wouter (routing) + tRPC client
- **Backend:** Express 4 + tRPC 11 + Drizzle ORM
- **Database:** MySQL (Railway)
- **External API:** Cricket API (cricketdata.org)
- **Authentication:** Manus OAuth

### Architecture Flow

```
User → Frontend (React) → tRPC Client → Backend (Express + tRPC) → Cricket API / Database
                                                                    ↓
                                                            MySQL (Teams, Players, Scores)
```

---

## Cricket API Integration

### API Configuration

The Cricket API is configured in `server/_core/cricketApi.ts` with the following setup:

**Base URL:** `https://api.cricapi.com/v1/`  
**API Key:** Stored in environment variable `CRICKET_API_KEY`  
**Authentication:** API key passed as query parameter `?apikey=YOUR_KEY`

### Available Endpoints

The following Cricket API endpoints are currently integrated:

| Endpoint | Purpose | Response Data |
|----------|---------|---------------|
| `/currentMatches` | Get live and upcoming matches | Match list with status, teams, venue, date |
| `/match_info` | Get detailed match information | Full match details including squads |
| `/match_scorecard` | Get live scorecard | Ball-by-ball scores, player stats |
| `/fantasySummary` | Get fantasy points for players | Player-wise fantasy points breakdown |

### API Response Structure

#### Current Matches Response

```typescript
interface CricketMatch {
  id: string;                    // Unique match ID (UUID)
  name: string;                  // Match name (e.g., "India vs Australia")
  matchType: string;             // "t20" | "odi" | "test"
  status: string;                // "Match not started" | "Live" | "Completed"
  venue: string;                 // Stadium name and location
  date: string;                  // ISO date string
  dateTimeGMT: string;          // GMT timestamp
  teams: string[];              // Array of 2 team names
  teamInfo: Array<{             // Team details
    name: string;
    img: string;                // Team logo URL
    shortname: string;          // 3-letter code (e.g., "IND")
  }>;
  score: Array<{                // Live scores (only for live matches)
    r: number;                  // Runs
    w: number;                  // Wickets
    o: number;                  // Overs
    inning: string;             // "Inning 1" | "Inning 2"
  }>;
  matchStatus: string;          // Live status text (e.g., "India 150/5 (18.2 ov)")
}
```

#### Fantasy Points Response

```typescript
interface FantasyMatchPoints {
  matchId: string;
  players: Array<{
    playerId: string;
    name: string;
    points: number;             // Total fantasy points
    batting: {
      runs: number;
      fours: number;
      sixes: number;
      strikeRate: number;
    };
    bowling: {
      wickets: number;
      economy: number;
      maidens: number;
    };
    fielding: {
      catches: number;
      runOuts: number;
    };
  }>;
}
```

### Backend API Functions

Located in `server/_core/cricketApi.ts`:

```typescript
// Get all current matches (live + upcoming)
export async function getCurrentMatches(): Promise<CricketMatch[]>

// Get live matches only
export async function getLiveMatches(): Promise<CricketMatch[]>

// Get upcoming matches only
export async function getUpcomingMatches(): Promise<CricketMatch[]>

// Get completed matches
export async function getCompletedMatches(): Promise<CricketMatch[]>

// Get match details by ID
export async function getMatchInfo(matchId: string): Promise<CricketMatch>

// Get match scorecard
export async function getMatchScorecard(matchId: string): Promise<any>

// Get fantasy points for a match
export async function getFantasyMatchPoints(matchId: string): Promise<FantasyMatchPoints>
```

---

## Data Fetching Patterns

### Frontend Data Fetching with tRPC

All data fetching in the frontend uses tRPC hooks that automatically handle loading states, errors, and caching.

#### Basic Query Pattern

```typescript
import { trpc } from "@/lib/trpc";

function MyComponent() {
  const { data, isLoading, error } = trpc.matches.getUpcoming.useQuery();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{/* Render data */}</div>;
}
```

#### Auto-Refresh Pattern (Live Data)

For live matches that need real-time updates:

```typescript
const { data: liveMatches } = trpc.matches.getLive.useQuery(
  undefined,
  {
    refetchInterval: 30 * 1000,      // Refresh every 30 seconds
    refetchOnWindowFocus: true,       // Refresh when user returns to tab
  }
);
```

#### Mutation Pattern (Create/Update Data)

```typescript
const createTeam = trpc.teams.create.useMutation({
  onSuccess: () => {
    // Invalidate cache to refresh data
    trpc.useUtils().teams.getMyTeams.invalidate();
  },
  onError: (error) => {
    toast.error(error.message);
  },
});

// Usage
createTeam.mutate({
  matchId: "abc123",
  teamName: "My Dream Team",
  captainApiId: "player1",
  viceCaptainApiId: "player2",
  playerApiIds: ["player1", "player2", ...],
});
```

### Backend tRPC Routers

Located in `server/fantasyRouters.ts` and `server/routers.ts`:

#### Matches Router

```typescript
matches: router({
  // Get all current matches (live + upcoming)
  getCurrent: publicProcedure.query(async () => {
    return await getCurrentMatches();
  }),
  
  // Get live matches only
  getLive: publicProcedure.query(async () => {
    return await getLiveMatches();
  }),
  
  // Get upcoming matches only
  getUpcoming: publicProcedure.query(async () => {
    return await getUpcomingMatches();
  }),
  
  // Get completed matches
  getCompleted: publicProcedure.query(async () => {
    return await getCompletedMatches();
  }),
  
  // Get match by API ID
  getByApiId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await getMatchInfo(input.id);
    }),
  
  // Update match points after completion
  updateMatchPoints: protectedProcedure
    .input(z.object({ matchId: z.string() }))
    .mutation(async ({ input }) => {
      return await updateMatchPoints(input.matchId);
    }),
});
```

#### Teams Router

```typescript
teams: router({
  // Create a new fantasy team
  create: protectedProcedure
    .input(z.object({
      matchId: z.string(),
      teamName: z.string(),
      captainApiId: z.string(),
      viceCaptainApiId: z.string(),
      playerApiIds: z.array(z.string()),
    }))
    .mutation(async ({ ctx, input }) => {
      const team = await createTeam({
        userId: ctx.user.id,
        matchId: input.matchId,
        teamName: input.teamName,
        captainApiId: input.captainApiId,
        viceCaptainApiId: input.viceCaptainApiId,
      });
      
      // Add players to team
      for (const playerId of input.playerApiIds) {
        await addPlayerToTeam(team.id, playerId);
      }
      
      return team;
    }),
  
  // Get user's teams
  getMyTeams: protectedProcedure.query(async ({ ctx }) => {
    return await getUserTeams(ctx.user.id);
  }),
  
  // Get team by ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await getTeamById(input.id);
    }),
});
```

#### Users Router

```typescript
users: router({
  // Get user statistics
  getStats: protectedProcedure.query(async ({ ctx }) => {
    return await getUserStats(ctx.user.id);
  }),
});
```

---

## CTA Button Workflows

### Homepage CTA Buttons

The homepage has dynamic CTA buttons that change based on authentication state:

#### Logged Out State

| Button Text | Action | Destination |
|------------|--------|-------------|
| "Start Playing Free" | Navigate to registration | `/register` |
| "Get Started Now" | Navigate to registration | `/register` |
| "Create Free Account" | Navigate to registration | `/register` |
| "How It Works" | Navigate to guide | `/how-to-play` |

#### Logged In State

| Button Text | Action | Destination |
|------------|--------|-------------|
| "Browse Matches" | Navigate to matches page | `/matches` |
| "Create Your Team" | Navigate to team builder | `/team-builder` |
| "View My Teams" | Navigate to user's teams | `/my-teams` |
| "How It Works" | Navigate to guide | `/how-to-play` |

### Implementation

Located in `client/src/pages/Home.tsx`:

```typescript
import { useAuth } from "@/hooks/useAuth";

function Home() {
  const { user, isLoading } = useAuth();
  const [, navigate] = useLocation();
  
  return (
    <>
      {/* Hero Section */}
      <Button onClick={() => navigate(user ? "/matches" : "/register")}>
        {user ? "Browse Matches" : "Start Playing Free"}
      </Button>
      
      {/* Features Section */}
      <Button onClick={() => navigate(user ? "/team-builder" : "/register")}>
        {user ? "Create Your Team" : "Get Started Now"}
      </Button>
      
      {/* Footer CTA */}
      <Button onClick={() => navigate(user ? "/my-teams" : "/register")}>
        {user ? "View My Teams" : "Create Free Account"}
      </Button>
    </>
  );
}
```

### Match Card CTA Buttons

Match cards have different buttons based on match status:

#### Upcoming Matches

| Button | Action | Destination |
|--------|--------|-------------|
| "View Squad" | Open squad dialog | Modal with player list |
| "Create Team" | Navigate to team builder | `/team-builder?matchId={id}` |

#### Live Matches

| Button | Action | Destination |
|--------|--------|-------------|
| "View Details" | Navigate to match summary | `/match-summary/{id}` |
| "Create Team" | Navigate to team builder | `/team-builder?matchId={id}` |

#### Completed Matches

| Button | Action | Destination |
|--------|--------|-------------|
| "View Full Scorecard" | Navigate to match summary | `/match-summary/{id}` |
| "View Leaderboard" | Navigate to leaderboard | `/leaderboard?matchId={id}` |

---

## Backend Architecture

### Database Functions

Located in `server/db.ts`:

#### Match Functions

```typescript
// Store match in database
export async function createMatch(match: CricketMatch) {
  return await db.insert(matches).values({
    apiMatchId: match.id,
    name: match.name,
    matchType: match.matchType,
    status: match.status,
    venue: match.venue,
    date: new Date(match.date),
    teams: match.teams,
  });
}

// Get match by API ID
export async function getMatchByApiId(apiMatchId: string) {
  return await db.query.matches.findFirst({
    where: eq(matches.apiMatchId, apiMatchId),
  });
}
```

#### Team Functions

```typescript
// Create a new team
export async function createTeam(data: {
  userId: number;
  matchId: string;
  teamName: string;
  captainApiId: string;
  viceCaptainApiId: string;
}) {
  return await db.insert(teams).values({
    userId: data.userId,
    matchApiId: data.matchId,
    teamName: data.teamName,
    captainApiId: data.captainApiId,
    viceCaptainApiId: data.viceCaptainApiId,
    totalPoints: 0,
  });
}

// Add player to team
export async function addPlayerToTeam(teamId: number, playerApiId: string) {
  return await db.insert(teamPlayers).values({
    teamId,
    playerApiId,
    pointsEarned: 0,
  });
}

// Get user's teams
export async function getUserTeams(userId: number) {
  return await db.query.teams.findMany({
    where: eq(teams.userId, userId),
    with: {
      match: true,  // Include match details
    },
    orderBy: [desc(teams.createdAt)],
  });
}

// Get team with players
export async function getTeamPlayers(teamId: number) {
  return await db.query.teamPlayers.findMany({
    where: eq(teamPlayers.teamId, teamId),
  });
}
```

#### User Stats Functions

```typescript
// Get user statistics
export async function getUserStats(userId: number) {
  const userTeams = await getUserTeams(userId);
  
  const totalTeams = userTeams.length;
  const completedMatches = userTeams.filter(t => 
    t.match?.status === "Completed"
  ).length;
  
  const totalPoints = userTeams.reduce((sum, t) => sum + t.totalPoints, 0);
  const avgPoints = completedMatches > 0 ? totalPoints / completedMatches : 0;
  
  const bestScore = Math.max(...userTeams.map(t => t.totalPoints), 0);
  
  return {
    totalTeams,
    completedMatches,
    avgPoints: Math.round(avgPoints),
    bestScore,
  };
}
```

---

## Frontend Components

### Authentication Hook

Located in `client/src/hooks/useAuth.ts`:

```typescript
import { trpc } from "@/lib/trpc";

export function useAuth() {
  const { data: user, isLoading } = trpc.auth.me.useQuery();
  
  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}
```

### Live Matches Section

Located in `client/src/pages/Home.tsx`:

```typescript
function LiveMatchesSection() {
  const [, navigate] = useLocation();
  
  // Auto-refresh every 30 seconds
  const { data: matches, isLoading } = trpc.matches.getLive.useQuery(
    undefined,
    {
      refetchInterval: 30 * 1000,
      refetchOnWindowFocus: true,
    }
  );
  
  if (isLoading || !matches || matches.length === 0) {
    return null;  // Don't show section if no live matches
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <Badge className="bg-red-500 text-white animate-pulse">
          🔴 Live Now
        </Badge>
        <h2>Live Matches</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {matches.slice(0, 4).map((match) => (
            <Card key={match.id}>
              {/* Team 1 */}
              <div>
                <img src={match.teamInfo[0]?.img} alt={match.teamInfo[0]?.name} />
                <p>{match.teamInfo[0]?.shortname}</p>
                {match.score && match.score[0] && (
                  <p className="text-red-600 font-bold">
                    {match.score[0].r}/{match.score[0].w} ({match.score[0].o})
                  </p>
                )}
              </div>
              
              <span>vs</span>
              
              {/* Team 2 */}
              <div>
                <img src={match.teamInfo[1]?.img} alt={match.teamInfo[1]?.name} />
                <p>{match.teamInfo[1]?.shortname}</p>
                {match.score && match.score[1] && (
                  <p className="text-red-600 font-bold">
                    {match.score[1].r}/{match.score[1].w} ({match.score[1].o})
                  </p>
                )}
              </div>
              
              {/* Match Status */}
              {match.matchStatus && (
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <p className="text-red-800">{match.matchStatus}</p>
                </div>
              )}
              
              {/* Actions */}
              <Button onClick={() => navigate(`/match-summary/${match.id}`)}>
                View Details
              </Button>
              <Button onClick={() => navigate(`/team-builder?matchId=${match.id}`)}>
                Create Team
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Upcoming Matches Section

Similar structure but uses `trpc.matches.getUpcoming.useQuery()` and doesn't show scores.

### My Teams Page

Located in `client/src/pages/MyTeams.tsx`:

```typescript
function MyTeams() {
  const { data: teams, isLoading } = trpc.teams.getMyTeams.useQuery();
  
  if (isLoading) return <div>Loading...</div>;
  
  // Group teams by status
  const upcomingTeams = teams?.filter(t => t.match?.status === "Match not started");
  const liveTeams = teams?.filter(t => t.match?.status === "Live");
  const completedTeams = teams?.filter(t => t.match?.status === "Completed");
  
  return (
    <div className="container py-8">
      <h1>My Teams</h1>
      
      {/* Upcoming Teams */}
      <section>
        <h2>Upcoming Matches ({upcomingTeams?.length || 0})</h2>
        {upcomingTeams?.map(team => (
          <Card key={team.id}>
            <h3>{team.teamName}</h3>
            <p>{team.match?.name}</p>
            <Badge>{team.match?.matchType}</Badge>
          </Card>
        ))}
      </section>
      
      {/* Live Teams */}
      <section>
        <h2>Live Matches ({liveTeams?.length || 0})</h2>
        {liveTeams?.map(team => (
          <Card key={team.id}>
            <Badge className="bg-red-500 animate-pulse">LIVE</Badge>
            <h3>{team.teamName}</h3>
            <p>{team.match?.name}</p>
            <p className="text-2xl font-bold">{team.totalPoints} pts</p>
          </Card>
        ))}
      </section>
      
      {/* Completed Teams */}
      <section>
        <h2>Completed Matches ({completedTeams?.length || 0})</h2>
        {completedTeams?.map(team => (
          <Card key={team.id}>
            <h3>{team.teamName}</h3>
            <p>{team.match?.name}</p>
            <p className="text-xl font-bold">{team.totalPoints} pts</p>
            <Button onClick={() => navigate(`/match-summary/${team.match?.apiMatchId}`)}>
              View Scorecard
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
}
```

### Dashboard Page

Located in `client/src/pages/Dashboard.tsx`:

```typescript
function Dashboard() {
  const { user } = useAuth();
  const { data: stats } = trpc.users.getStats.useQuery();
  const { data: recentTeams } = trpc.teams.getMyTeams.useQuery();
  
  return (
    <div className="container py-8">
      <h1>Welcome back, {user?.name}!</h1>
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <h3>Total Teams</h3>
          <p className="text-3xl font-bold">{stats?.totalTeams || 0}</p>
        </Card>
        
        <Card>
          <h3>Matches Played</h3>
          <p className="text-3xl font-bold">{stats?.completedMatches || 0}</p>
        </Card>
        
        <Card>
          <h3>Average Points</h3>
          <p className="text-3xl font-bold">{stats?.avgPoints || 0}</p>
        </Card>
        
        <Card>
          <h3>Best Score</h3>
          <p className="text-3xl font-bold">{stats?.bestScore || 0}</p>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <section>
        <h2>Recent Activity</h2>
        {recentTeams?.slice(0, 5).map(team => (
          <Card key={team.id}>
            <p>{team.teamName}</p>
            <p>{team.match?.name}</p>
            <Badge>{team.match?.status}</Badge>
          </Card>
        ))}
      </section>
      
      {/* Quick Actions */}
      <section>
        <h2>Quick Actions</h2>
        <Button onClick={() => navigate("/matches")}>Browse Matches</Button>
        <Button onClick={() => navigate("/my-teams")}>View My Teams</Button>
        <Button onClick={() => navigate("/leaderboard")}>Leaderboard</Button>
      </section>
    </div>
  );
}
```

---

## Database Schema

Located in `drizzle/schema.ts`:

### Tables Overview

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `users` | User accounts | id, name, email, role |
| `matches` | Match information | id, apiMatchId, name, status, date |
| `players` | Player information | id, apiPlayerId, name, role, team |
| `teams` | Fantasy teams | id, userId, matchApiId, teamName, captainApiId, viceCaptainApiId, totalPoints |
| `teamPlayers` | Team-player mapping | id, teamId, playerApiId, pointsEarned |

### Schema Definitions

```typescript
// Users table
export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  openId: varchar("open_id", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique(),
  avatar: varchar("avatar", { length: 500 }),
  role: mysqlEnum("role", ["admin", "user"]).default("user"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Matches table
export const matches = mysqlTable("matches", {
  id: int("id").primaryKey().autoincrement(),
  apiMatchId: varchar("api_match_id", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 500 }).notNull(),
  matchType: varchar("match_type", { length: 50 }),
  status: varchar("status", { length: 100 }),
  venue: varchar("venue", { length: 500 }),
  date: timestamp("date"),
  teams: json("teams"),  // Array of team names
  createdAt: timestamp("created_at").defaultNow(),
});

// Players table
export const players = mysqlTable("players", {
  id: int("id").primaryKey().autoincrement(),
  apiPlayerId: varchar("api_player_id", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 100 }),  // "batsman", "bowler", "allrounder", "wicketkeeper"
  team: varchar("team", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Teams table
export const teams = mysqlTable("teams", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("user_id").notNull().references(() => users.id),
  matchApiId: varchar("match_api_id", { length: 255 }).notNull(),
  teamName: varchar("team_name", { length: 255 }).notNull(),
  captainApiId: varchar("captain_api_id", { length: 255 }).notNull(),
  viceCaptainApiId: varchar("vice_captain_api_id", { length: 255 }).notNull(),
  totalPoints: int("total_points").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Team Players table
export const teamPlayers = mysqlTable("team_players", {
  id: int("id").primaryKey().autoincrement(),
  teamId: int("team_id").notNull().references(() => teams.id),
  playerApiId: varchar("player_api_id", { length: 255 }).notNull(),
  pointsEarned: int("points_earned").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});
```

### Important Notes

**API IDs vs Database IDs:** The schema uses `apiMatchId`, `apiPlayerId`, `captainApiId`, `viceCaptainApiId`, and `playerApiId` fields to store Cricket API IDs (UUIDs). These are separate from the database auto-increment IDs. This allows the system to reference external API data without creating duplicate player/match records.

**Match Status Values:**
- `"Match not started"` - Upcoming match
- `"Live"` - Currently in progress
- `"Completed"` - Match finished

**Player Roles:**
- `"batsman"` - Batting specialist
- `"bowler"` - Bowling specialist
- `"allrounder"` - Both batting and bowling
- `"wicketkeeper"` - Wicket-keeping specialist

---

## Points Calculation System

Located in `server/pointsCalculation.ts`:

### Fantasy Points Rules

The fantasy points are calculated based on the following rules:

#### Batting Points

| Action | Points |
|--------|--------|
| Run scored | 1 point per run |
| Boundary (4) | 1 bonus point |
| Six | 2 bonus points |
| Half-century (50 runs) | 8 bonus points |
| Century (100 runs) | 16 bonus points |
| Duck (out for 0) | -2 points |

#### Bowling Points

| Action | Points |
|--------|--------|
| Wicket | 25 points |
| Maiden over | 12 points |
| 3 wickets | 4 bonus points |
| 4 wickets | 8 bonus points |
| 5 wickets | 16 bonus points |

#### Fielding Points

| Action | Points |
|--------|--------|
| Catch | 8 points |
| Stumping | 12 points |
| Run out | 6 points |

#### Multipliers

- **Captain:** 2x points
- **Vice-Captain:** 1.5x points

### Implementation

```typescript
import { getFantasyMatchPoints } from "./server/_core/cricketApi";
import { getTeamsByMatchId, updateTeamPoints, updateTeamPlayerPoints } from "./server/db";

export async function updateMatchPoints(matchApiId: string) {
  // Get fantasy points from Cricket API
  const fantasyData = await getFantasyMatchPoints(matchApiId);
  
  // Get all teams for this match
  const teams = await getTeamsByMatchId(matchApiId);
  
  for (const team of teams) {
    let totalPoints = 0;
    
    // Get team players
    const teamPlayers = await getTeamPlayers(team.id);
    
    for (const tp of teamPlayers) {
      // Find player points from API
      const playerData = fantasyData.players.find(
        p => p.playerId === tp.playerApiId
      );
      
      if (!playerData) continue;
      
      let points = playerData.points;
      
      // Apply multipliers
      if (tp.playerApiId === team.captainApiId) {
        points *= 2;  // Captain gets 2x
      } else if (tp.playerApiId === team.viceCaptainApiId) {
        points *= 1.5;  // Vice-captain gets 1.5x
      }
      
      // Update player points
      await updateTeamPlayerPoints(tp.id, points);
      
      totalPoints += points;
    }
    
    // Update team total
    await updateTeamPoints(team.id, totalPoints);
  }
  
  return { success: true, teamsUpdated: teams.length };
}

// Update all completed matches
export async function updateAllCompletedMatches() {
  const completedMatches = await getCompletedMatches();
  
  for (const match of completedMatches) {
    try {
      await updateMatchPoints(match.id);
    } catch (error) {
      console.error(`Failed to update match ${match.id}:`, error);
    }
  }
}
```

### Triggering Points Update

Points can be updated in two ways:

**Manual Trigger:**
```typescript
// Frontend
const updatePoints = trpc.matches.updateMatchPoints.useMutation();
updatePoints.mutate({ matchId: "abc123" });
```

**Automated (Recommended):**
Set up a cron job to run every 30 minutes:
```typescript
// server/jobs/updatePoints.ts
import { updateAllCompletedMatches } from "./pointsCalculation";

setInterval(async () => {
  await updateAllCompletedMatches();
}, 30 * 60 * 1000);  // Every 30 minutes
```

---

## Implementation Checklist

### Completed Features ✅

- [x] Cricket API integration (getCurrentMatches, getLive, getUpcoming, getCompleted)
- [x] tRPC backend with matches, teams, and users routers
- [x] Database schema with API ID support
- [x] Authentication with Manus OAuth
- [x] Homepage with dynamic CTA buttons
- [x] Live matches section with real-time scores
- [x] Upcoming matches section
- [x] My Teams page with status grouping
- [x] Dashboard with user statistics
- [x] Points calculation system with multipliers
- [x] Match routing (multiple patterns supported)

### Pending Features 🚧

#### High Priority

- [ ] **Team Builder Page** (`/team-builder`)
  - Player selection interface with role filters
  - Budget constraint (100 credits)
  - Captain/vice-captain selection
  - Team validation (11 players, role requirements)
  - Submit team to database

- [ ] **Match Summary Page** (`/match-summary/:matchId`)
  - Live scorecard display
  - Player performance table
  - Fantasy points leaderboard
  - Match status and result

- [ ] **Completed Matches Section**
  - Filter by date range
  - Show final scores
  - Link to scorecards and leaderboards

#### Medium Priority

- [ ] **Leaderboard Page** (`/leaderboard`)
  - Global rankings
  - Match-specific rankings
  - Filter by match type and time period

- [ ] **Team Details Page** (`/teams/:teamId`)
  - Show all 11 players
  - Individual player stats
  - Captain/vice-captain indicators
  - Points breakdown

- [ ] **Player Search & Filters**
  - Search by name
  - Filter by role, team, price
  - Sort by fantasy points, form

#### Low Priority

- [ ] **Match Notifications**
  - Match start alerts (30 min before)
  - Match result notifications
  - Team performance updates

- [ ] **Social Sharing**
  - Share team composition
  - Share match results
  - Invite friends

- [ ] **Profile Page Enhancements**
  - Edit profile information
  - View match history
  - Achievement badges

### Data Flow Diagram

```
┌─────────────────┐
│  Cricket API    │
│  (External)     │
└────────┬────────┘
         │
         │ HTTP Requests
         │ (every 30s for live)
         ▼
┌─────────────────┐
│  Backend        │
│  (Express+tRPC) │
│                 │
│  - cricketApi.ts│◄──── API Key from ENV
│  - routers.ts   │
│  - db.ts        │
└────────┬────────┘
         │
         │ tRPC Queries/Mutations
         │
         ▼
┌─────────────────┐
│  Frontend       │
│  (React)        │
│                 │
│  - Home.tsx     │
│  - Matches.tsx  │
│  - MyTeams.tsx  │
│  - Dashboard.tsx│
└─────────────────┘
         │
         │ User Interactions
         │
         ▼
┌─────────────────┐
│  User           │
└─────────────────┘
```

---

## Environment Variables

Required environment variables (already configured in Manus):

```bash
# Cricket API
CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3

# Database
DATABASE_URL=mysql://user:pass@host:port/database

# Authentication
JWT_SECRET=your-secret-key
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://auth.manus.im

# Manus Built-in APIs
BUILT_IN_FORGE_API_URL=https://forge.manus.im
BUILT_IN_FORGE_API_KEY=your-forge-key
```

---

## Testing Guide

### Testing Live Matches Display

1. Navigate to homepage
2. Scroll to "Live Matches" section
3. Verify:
   - Section only appears when live matches exist
   - Team logos display correctly
   - Scores show in format "150/5 (18.2)"
   - Match status banner displays
   - "View Details" navigates to `/match-summary/{id}`
   - "Create Team" navigates to `/team-builder?matchId={id}`
   - Scores auto-refresh every 30 seconds

### Testing Team Creation

1. Login to the application
2. Navigate to Matches page
3. Click "Create Team" on any upcoming match
4. Select 11 players (to be implemented)
5. Choose captain and vice-captain
6. Submit team
7. Verify team appears in "My Teams" page

### Testing Points Calculation

1. Wait for a match to complete
2. Manually trigger points update:
   ```typescript
   trpc.matches.updateMatchPoints.mutate({ matchId: "abc123" });
   ```
3. Verify:
   - Player points updated in database
   - Captain points are 2x base points
   - Vice-captain points are 1.5x base points
   - Team total points calculated correctly
4. Check "My Teams" page shows updated points

---

## Troubleshooting

### Common Issues

**Issue:** Live matches not displaying  
**Solution:** Check if Cricket API is returning live matches. The section only displays when `matches.length > 0`.

**Issue:** Scores not updating  
**Solution:** Verify `refetchInterval` is set to 30000ms and Cricket API is returning score data.

**Issue:** Team creation fails  
**Solution:** Check that all required fields are provided: `matchId`, `teamName`, `captainApiId`, `viceCaptainApiId`, `playerApiIds` (11 players).

**Issue:** Points not calculating  
**Solution:** Ensure match status is "Completed" and Cricket API `fantasySummary` endpoint returns player points.

**Issue:** 404 errors on match routes  
**Solution:** Multiple route patterns are supported:
- `/matches/:matchId` → redirects to `/match-summary/:matchId`
- `/match-summary/:matchId` → primary route
- `/match/:matchId/summary` → backward compatibility

---

## API Rate Limits

The Cricket API has the following rate limits:

- **Free Tier:** 100 requests per day
- **Basic Tier:** 1000 requests per day
- **Pro Tier:** 10000 requests per day

Current usage pattern:
- Homepage live matches: 2 requests/minute (auto-refresh)
- Matches page: 1 request on load
- Match details: 1 request per match view

**Optimization tips:**
- Cache match data in database
- Use longer refetch intervals for non-live matches
- Implement request debouncing

---

## Next Steps for Development

To implement the remaining features, follow this priority order:

### 1. Team Builder Page (Highest Priority)

**File:** `client/src/pages/TeamBuilder.tsx`

**Requirements:**
- Fetch match details and available players
- Display player cards with role, team, and credits
- Implement player selection (max 11 players)
- Budget constraint (100 credits total)
- Role requirements:
  - Minimum 1 wicketkeeper
  - Minimum 3 batsmen
  - Minimum 3 bowlers
  - Maximum 7 players from one team
- Captain selection (2x points)
- Vice-captain selection (1.5x points)
- Submit team via `trpc.teams.create.useMutation()`

**Backend endpoint:** Already exists (`teams.create`)

### 2. Match Summary Page

**File:** `client/src/pages/MatchSummary.tsx`

**Requirements:**
- Fetch match details via `trpc.matches.getByApiId.useQuery()`
- Display scorecard (runs, wickets, overs)
- Show player performance table
- Display fantasy points leaderboard
- Show match status and result

**Backend endpoint:** Needs `matches.getScorecard` and `matches.getLeaderboard`

### 3. Completed Matches Archive

**File:** `client/src/pages/Matches.tsx` (enhance existing)

**Requirements:**
- Add "Completed" tab
- Filter by date range
- Show final scores
- Link to scorecards

**Backend endpoint:** Already exists (`matches.getCompleted`)

---

## Conclusion

This guide covers all the implemented features in XSNAP Fantasy Cricket, including Cricket API integration, data fetching patterns, CTA button workflows, backend architecture, and points calculation. Use this as a reference when implementing new features or debugging existing functionality.

For questions or clarifications, refer to the source code in the following key files:

- `server/_core/cricketApi.ts` - Cricket API integration
- `server/fantasyRouters.ts` - tRPC routers
- `server/db.ts` - Database functions
- `server/pointsCalculation.ts` - Points calculation logic
- `client/src/pages/Home.tsx` - Homepage with live matches
- `client/src/pages/MyTeams.tsx` - User teams page
- `client/src/pages/Dashboard.tsx` - User dashboard
- `drizzle/schema.ts` - Database schema

---

**Document Version:** 1.0  
**Last Updated:** January 2, 2026  
**Author:** Manus AI
