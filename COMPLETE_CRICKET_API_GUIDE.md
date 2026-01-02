# Complete Cricket API Integration Guide for XSNAP Fantasy Cricket

**Author:** Manus AI  
**Date:** January 2, 2026  
**Version:** 2.0 - Ultra Detailed Edition

---

## Table of Contents

1. [Cricket API Overview](#cricket-api-overview)
2. [Authentication & API Key](#authentication--api-key)
3. [Understanding Match Status](#understanding-match-status)
4. [Fetching Upcoming Matches](#fetching-upcoming-matches)
5. [Fetching Live Matches](#fetching-live-matches)
6. [Fetching Completed Matches](#fetching-completed-matches)
7. [Complete API Response Examples](#complete-api-response-examples)
8. [Implementation in XSNAP](#implementation-in-xsnap)
9. [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Cricket API Overview

XSNAP Fantasy Cricket uses the **CricketData.org API** to fetch real-time cricket match data. The API provides comprehensive information about international cricket matches including live scores, player statistics, and fantasy points.

### Base URL
```
https://api.cricapi.com/v1
```

### Your API Key
```
1a822521-d7e0-46ff-98d3-3e51020863f3
```

This API key is already configured in your XSNAP website environment variables as `CRICKET_API_KEY`.

---

## Authentication & API Key

Every API request requires your API key to be passed as a query parameter:

```
https://api.cricapi.com/v1/currentMatches?apikey=1a822521-d7e0-46ff-98d3-3e51020863f3
```

**Important:** The API key is stored in your environment variables and automatically injected by the backend. You never expose it in frontend code.

---

## Understanding Match Status

The Cricket API returns matches with a `status` field that indicates the current state of the match. This is **THE MOST IMPORTANT FIELD** for filtering matches.

### Match Status Values

| Status Value | Meaning | When to Show |
|--------------|---------|--------------|
| `"Match not started"` | Match is scheduled but hasn't begun | **Upcoming Matches** section |
| `"Live"` or `"In Progress"` | Match is currently being played | **Live Matches** section |
| `"Match Finished"` or `"Completed"` | Match has ended | **Completed Matches** section or hide |

### Additional Status Fields

The API also provides:
- `matchStarted`: Boolean - `true` if match has started
- `matchEnded`: Boolean - `true` if match has finished
- `dateTimeGMT`: ISO 8601 timestamp of match start time

---

## Fetching Upcoming Matches

### API Endpoint
```
GET https://api.cricapi.com/v1/currentMatches?apikey={YOUR_API_KEY}&offset=0
```

### What This Returns

The `currentMatches` endpoint returns **ALL** matches that are:
1. Not yet finished (matchEnded = false)
2. Either upcoming or currently live

**You must filter the response** to separate upcoming from live matches.

### Step-by-Step: Getting Upcoming Matches

#### Step 1: Call the API

```typescript
const response = await fetch(
  `https://api.cricapi.com/v1/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`
);
const data = await response.json();
```

#### Step 2: Filter for Upcoming Matches

```typescript
const upcomingMatches = data.data.filter((match: any) => {
  // Match must not have started
  const notStarted = !match.matchStarted;
  
  // Match status should be "Match not started"
  const statusCheck = match.status === "Match not started";
  
  // Match date should be today or in the future
  const matchDate = new Date(match.dateTimeGMT);
  const now = new Date();
  const isFuture = matchDate >= now;
  
  return notStarted && statusCheck && isFuture;
});
```

#### Step 3: Sort by Date (Earliest First)

```typescript
upcomingMatches.sort((a, b) => {
  const dateA = new Date(a.dateTimeGMT);
  const dateB = new Date(b.dateTimeGMT);
  return dateA.getTime() - dateB.getTime();
});
```

### Complete Example: Fetching Upcoming Matches

```typescript
export async function getUpcomingMatches() {
  try {
    const response = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${process.env.CRICKET_API_KEY}&offset=0`
    );
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter for upcoming matches only
    const upcomingMatches = data.data.filter((match: any) => {
      const notStarted = !match.matchStarted;
      const statusCheck = match.status === "Match not started";
      const matchDate = new Date(match.dateTimeGMT);
      const now = new Date();
      const isFuture = matchDate >= now;
      
      return notStarted && statusCheck && isFuture;
    });
    
    // Sort by date (earliest first)
    upcomingMatches.sort((a, b) => {
      return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
    });
    
    return upcomingMatches;
  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
    return [];
  }
}
```

---

## Fetching Live Matches

### Step-by-Step: Getting Live Matches

#### Step 1: Call the Same API

```typescript
const response = await fetch(
  `https://api.cricapi.com/v1/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`
);
const data = await response.json();
```

#### Step 2: Filter for Live Matches

```typescript
const liveMatches = data.data.filter((match: any) => {
  // Match must have started
  const hasStarted = match.matchStarted === true;
  
  // Match must not have ended
  const notEnded = match.matchEnded === false;
  
  // Status should indicate live play
  const isLive = match.status && (
    match.status.toLowerCase().includes("live") ||
    match.status.toLowerCase().includes("in progress") ||
    match.status.toLowerCase().includes("innings")
  );
  
  return hasStarted && notEnded && isLive;
});
```

### Complete Example: Fetching Live Matches

```typescript
export async function getLiveMatches() {
  try {
    const response = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${process.env.CRICKET_API_KEY}&offset=0`
    );
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter for live matches only
    const liveMatches = data.data.filter((match: any) => {
      const hasStarted = match.matchStarted === true;
      const notEnded = match.matchEnded === false;
      const isLive = match.status && (
        match.status.toLowerCase().includes("live") ||
        match.status.toLowerCase().includes("in progress") ||
        match.status.toLowerCase().includes("innings")
      );
      
      return hasStarted && notEnded && isLive;
    });
    
    return liveMatches;
  } catch (error) {
    console.error("Error fetching live matches:", error);
    return [];
  }
}
```

---

## Fetching Completed Matches

### API Endpoint for Completed Matches

There's no dedicated "completed matches" endpoint. You have two options:

#### Option 1: Filter from currentMatches

```typescript
const completedMatches = data.data.filter((match: any) => {
  return match.matchEnded === true;
});
```

#### Option 2: Use Match Info API (Recommended for Details)

If you know the match ID, you can get complete details:

```
GET https://api.cricapi.com/v1/match_info?apikey={YOUR_API_KEY}&id={MATCH_ID}
```

---

## Complete API Response Examples

### Example 1: Upcoming Match Response

```json
{
  "id": "0843e55a-1ff7-4b72-8f45-4fd082412b56",
  "name": "Pretoria Capitals vs Durban Super Giants, 1st Match",
  "matchType": "t20",
  "status": "Match not started",
  "venue": "SuperSport Park, Centurion",
  "date": "2026-01-03",
  "dateTimeGMT": "2026-01-03T16:00:00",
  "teams": ["Pretoria Capitals", "Durban Super Giants"],
  "teamInfo": [
    {
      "name": "Pretoria Capitals",
      "shortname": "PC",
      "img": "https://h.cricapi.com/img/icon512.png"
    },
    {
      "name": "Durban Super Giants",
      "shortname": "DSG",
      "img": "https://h.cricapi.com/img/icon512.png"
    }
  ],
  "score": [],
  "series_id": "series-123",
  "matchStarted": false,
  "matchEnded": false
}
```

### Example 2: Live Match Response

```json
{
  "id": "live-match-456",
  "name": "India vs Australia, 2nd T20I",
  "matchType": "t20",
  "status": "India need 45 runs in 30 balls",
  "venue": "Melbourne Cricket Ground",
  "date": "2026-01-02",
  "dateTimeGMT": "2026-01-02T09:00:00",
  "teams": ["India", "Australia"],
  "teamInfo": [
    {
      "name": "India",
      "shortname": "IND",
      "img": "https://h.cricapi.com/img/icon512.png"
    },
    {
      "name": "Australia",
      "shortname": "AUS",
      "img": "https://h.cricapi.com/img/icon512.png"
    }
  ],
  "score": [
    {
      "r": 165,
      "w": 7,
      "o": 20,
      "inning": "Australia Inning 1"
    },
    {
      "r": 121,
      "w": 4,
      "o": 15,
      "inning": "India Inning 1"
    }
  ],
  "series_id": "series-456",
  "matchStarted": true,
  "matchEnded": false
}
```

### Example 3: Completed Match Response

```json
{
  "id": "completed-match-789",
  "name": "England vs Pakistan, Final",
  "matchType": "odi",
  "status": "England won by 5 wickets",
  "venue": "Lord's, London",
  "date": "2026-01-01",
  "dateTimeGMT": "2026-01-01T10:00:00",
  "teams": ["England", "Pakistan"],
  "teamInfo": [
    {
      "name": "England",
      "shortname": "ENG",
      "img": "https://h.cricapi.com/img/icon512.png"
    },
    {
      "name": "Pakistan",
      "shortname": "PAK",
      "img": "https://h.cricapi.com/img/icon512.png"
    }
  ],
  "score": [
    {
      "r": 245,
      "w": 10,
      "o": 48.3,
      "inning": "Pakistan Inning 1"
    },
    {
      "r": 246,
      "w": 5,
      "o": 45.2,
      "inning": "England Inning 1"
    }
  ],
  "series_id": "series-789",
  "matchStarted": true,
  "matchEnded": true
}
```

---

## Implementation in XSNAP

### Current Implementation Location

The Cricket API integration is located in:
```
/home/ubuntu/xsnap-fantasy-cricket/server/_core/cricketApi.ts
```

### How XSNAP Fetches Matches

#### Backend (tRPC Procedure)

```typescript
// File: server/fantasyRouters.ts

matches: router({
  getCurrent: publicProcedure.query(async () => {
    const matches = await getCurrentMatches();
    return matches;
  }),
  
  getUpcoming: publicProcedure.query(async () => {
    const allMatches = await getCurrentMatches();
    
    // Filter for upcoming matches
    const upcoming = allMatches.filter((match) => {
      const notStarted = !match.matchStarted;
      const statusCheck = match.status === "Match not started";
      const matchDate = new Date(match.dateTimeGMT);
      const now = new Date();
      const isFuture = matchDate >= now;
      
      return notStarted && statusCheck && isFuture;
    });
    
    // Sort by date
    return upcoming.sort((a, b) => {
      return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
    });
  }),
  
  getLive: publicProcedure.query(async () => {
    const allMatches = await getCurrentMatches();
    
    // Filter for live matches
    const live = allMatches.filter((match) => {
      const hasStarted = match.matchStarted === true;
      const notEnded = match.matchEnded === false;
      const isLive = match.status && (
        match.status.toLowerCase().includes("live") ||
        match.status.toLowerCase().includes("in progress") ||
        match.status.toLowerCase().includes("innings")
      );
      
      return hasStarted && notEnded && isLive;
    });
    
    return live;
  }),
}),
```

#### Frontend (React Component)

```typescript
// File: client/src/pages/Home.tsx

function UpcomingMatchesSection() {
  const { data: matches, isLoading } = trpc.matches.getUpcoming.useQuery(undefined, {
    refetchInterval: 60000, // Refresh every 60 seconds
  });
  
  if (isLoading) {
    return <div>Loading upcoming matches...</div>;
  }
  
  if (!matches || matches.length === 0) {
    return <div>No upcoming matches at the moment.</div>;
  }
  
  return (
    <div>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}
```

### Auto-Refresh Strategy

XSNAP uses tRPC's `refetchInterval` to automatically refresh match data:

- **Upcoming Matches**: Refresh every 60 seconds
- **Live Matches**: Refresh every 30 seconds (more frequent for live scores)
- **Completed Matches**: No auto-refresh needed

```typescript
// Upcoming matches - refresh every 60 seconds
const { data: upcomingMatches } = trpc.matches.getUpcoming.useQuery(undefined, {
  refetchInterval: 60000,
});

// Live matches - refresh every 30 seconds
const { data: liveMatches } = trpc.matches.getLive.useQuery(undefined, {
  refetchInterval: 30000,
});
```

---

## Troubleshooting Common Issues

### Issue 1: "I'm getting only 1 match, not all upcoming matches"

**Cause:** You're likely fetching a single match by ID instead of the list endpoint.

**Solution:** Make sure you're calling:
```
/currentMatches (returns array of matches)
```

NOT:
```
/match_info?id=xxx (returns single match)
```

### Issue 2: "All matches show as upcoming, even live ones"

**Cause:** You're not filtering by `matchStarted` and `status` fields.

**Solution:** Always check:
```typescript
const isUpcoming = !match.matchStarted && match.status === "Match not started";
const isLive = match.matchStarted && !match.matchEnded;
```

### Issue 3: "No matches are showing"

**Possible Causes:**
1. API key is invalid or expired
2. No matches are currently scheduled
3. API rate limit exceeded
4. Network/firewall blocking the API

**Solution:**
```typescript
// Add detailed error logging
try {
  const response = await fetch(apiUrl);
  console.log("API Response Status:", response.status);
  
  const data = await response.json();
  console.log("API Response Data:", data);
  
  if (data.status !== "success") {
    console.error("API Error:", data.message);
  }
} catch (error) {
  console.error("Network Error:", error);
}
```

### Issue 4: "Match times are wrong"

**Cause:** Timezone confusion. API returns times in GMT.

**Solution:** Convert to user's local timezone:
```typescript
const matchDate = new Date(match.dateTimeGMT);
const localTime = matchDate.toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  dateStyle: 'medium',
  timeStyle: 'short'
});
```

### Issue 5: "API returns 401 Unauthorized"

**Cause:** API key is missing or incorrect.

**Solution:**
1. Check environment variable: `echo $CRICKET_API_KEY`
2. Verify key is correct: `1a822521-d7e0-46ff-98d3-3e51020863f3`
3. Restart server after updating .env file

---

## Quick Reference: Match Filtering Logic

### Upcoming Matches
```typescript
!match.matchStarted && 
match.status === "Match not started" && 
new Date(match.dateTimeGMT) >= new Date()
```

### Live Matches
```typescript
match.matchStarted && 
!match.matchEnded && 
(match.status.includes("live") || match.status.includes("innings"))
```

### Completed Matches
```typescript
match.matchEnded === true
```

---

## Summary

**Key Takeaways:**

1. **One API endpoint** (`/currentMatches`) returns both upcoming and live matches
2. **You must filter** the response based on `matchStarted`, `matchEnded`, and `status` fields
3. **Upcoming matches** have `matchStarted = false` and `status = "Match not started"`
4. **Live matches** have `matchStarted = true` and `matchEnded = false`
5. **Always sort** upcoming matches by `dateTimeGMT` (earliest first)
6. **Use auto-refresh** to keep data current (30-60 seconds)

---

**Questions or Issues?**

If you encounter any problems implementing this guide, check the troubleshooting section above or review the existing implementation in `/server/_core/cricketApi.ts`.
