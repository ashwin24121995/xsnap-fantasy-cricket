# Cricket Data API - Deep Study & Analysis

## Dashboard Overview (Initial Login)

### Account Information
- **Account Holder:** Rahul Singh
- **Email:** sonu.singh3622@yahoo.in
- **API Key:** afb22ee0-add7-48b4-af1d-bdf319c03c9d

### Current Usage Statistics
- **API Hits Today:** 445 (with 71 errors)
- **Lifetime API Hits:** 19,497
- **Active Subscriptions:** 2
- **Subscription Expiry:** 18 Jan '26 (auto-renews)
- **Plan Type:** Paid plan with access to all Fantasy API

### Key Observations
1. **Free Lifetime API Key Available** - Basic access provided for free
2. **Fantasy API Requires Subscription** - Fantasy Scorecard, Points, Ball by Ball API need paid plan
3. **Error Rate:** 71 errors out of 445 hits today (~16% error rate) - need to investigate causes
4. **Good Lifetime Usage:** 19,497 hits shows this is an active, tested account

### Dashboard Features
- API Test Playground (for testing endpoints)
- API Guide with documentation
- Sample codes for implementation
- Usage tracking and logs
- Error log viewing
- Profile management
- Billing management

### Additional Features
- IPL banners available (A vs B match graphics)
- Monthly feedback system
- Support/help available

## Next Steps
1. Explore API Test Playground to see all available endpoints
2. Review API Guide documentation
3. Check sample codes
4. Analyze error logs to understand common issues
5. Test each endpoint with real data


## API Playground - Available Endpoints

### List APIs (Basic Data)
1. **Current Matches** - Top Used
   - Real-time ongoing matches
   
2. **eCricScore** - Top Used (11 uses)
   - Live cricket scores
   
3. **Series Search** - New changes (12 changes)
   - Search for cricket series
   
4. **Series List** (13)
   - List all cricket series
   
5. **Matches List** (14)
   - List all matches
   
6. **Players List** (15)
   - List all players
   
7. **Players Search**
   - Search for specific players

### Cricket Info APIs
8. **Series Info** (17)
   - Detailed series information
   
9. **Match Info**
   - Detailed match information
   
10. **Player Info** - New changes
    - Detailed player information

### Fantasy APIs (Paid Subscription Required)
11. **Fantasy Squad** (19) - New changes
    - Get fantasy squad for a match
    
12. **Series Squads** (21)
    - Get squads for entire series
    
13. **Fantasy Scorecard** (22)
    - Get fantasy scorecard with points
    
14. **Fantasy Match Points** (23)
    - Get fantasy points for match
    
15. **Series Point Table** (24)
    - Series standings/point table
    
16. **Fantasy XI** (25) - DO NOT USE
    - Fantasy XI (marked as do not use)
    
17. **Fantasy Ball-by-Ball** - IN TESTING
    - Ball by ball fantasy data (still testing)

### Misc APIs
18. **Country List** (26)
    - List of cricket playing countries

### Coming Soon
19. **Custom Banner** - Coming soon (27)
    - Custom match banners

### Deprecated APIs (Do Not Use)
- New Matches API (28)
- Old Matches API (29)
- Cricket Score (30)
- Match Calendar (31)
- Player Statistics (32)
- Fantasy API - Summary (33)
- Fantasy API - Squad (34)
- Player Finder (35)

### Important Notes
- All API testing counts toward quota
- Failed requests count toward quota
- Repeat requests count toward quota
- Can test all APIs at once (consumes credits)
- API usage guide available
- Code samples available


## Fantasy Squad API - Detailed Analysis

### Endpoint
`https://api.cricapi.com/v1/match_squad`

### Parameters
- `apikey`: API key (paid subscription: 1a822521-d7e0-46ff-98d3-3e51020863f3)
- `id`: Match ID (UUID format, e.g., ea479cff-ddbe-48e0-9e4a-528f61a8a175)

### Sample Match
**Hobart Hurricanes Women vs Sydney Thunder Women, 6th Match**
- Match ID: `ea479cff-ddbe-48e0-9e4a-528f61a8a175`

### Response Structure

```json
{
  "apikey": "1a822521-d7e0-46ff-98d3-3e51020863f3",
  "data": [
    {
      "teamName": "Hobart Hurricanes Women",
      "shortName": "HB-W",
      "img": "https://g.cricapi.com/iapi/2635-63884017294329498.webp?w=48",
      "players": [
        {
          "id": "1015f62e-be4e-4388-9e8f-1f262b7dcc88",
          "name": "Ruth Johnston",
          "role": "Batsman",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm medium",
          "country": "Australia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "5b9a4728-85c1-49f9-8976-1f787082ba26",
          "name": "Rachel Trenaman",
          "role": "Bowling Allrounder",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm legbreak",
          "country": "Australia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "d3fedlec-9c35-47b8-bbad-5dcdae5e0e7e",
          "name": "Lauren Smith",
          "role": "Bowler",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm offbreak",
          "country": "Australia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "38b64c4c-2729-46ac-bb83-8afcfa91ca15",
          "name": "Elyse Villani",
          "role": "Batsman",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm fast-medium",
          "country": "Australia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "f661fa24-d480-4b13-850c-ab83a7212728",
          "name": "Nicola Carey",
          "role": "Bowling Allrounder",
          "battingStyle": "Left Handed Bat",
          "bowlingStyle": "Right-arm medium",
          "country": "Australia",
          "playerImg": "https://h.cricapi.com/img/players/f661fa24-d480-4b13-850c-ab83a7212728.jpg"
        },
        {
          "id": "011551cd-6f5f-4d96-904d-b284ec24b1b8",
          "name": "Caitlin Mair",
          "role": "WK-Batsman",
          "battingStyle": "Right Handed Bat",
          "country": "Australia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "c25295fa-0785-47d5-a2ff-b2b57debe03",
          "name": "Hayley Silver-holmes",
          "role": "Bowler",
          "battingStyle": "Right Handed Bat",
          "country": "Australia"
        }
      ]
    }
  ]
}
```

### Key Data Fields

#### Team Level
- `teamName`: Full team name
- `shortName`: Team abbreviation
- `img`: Team logo URL
- `players`: Array of player objects

#### Player Level
- `id`: Unique player ID (UUID)
- `name`: Player full name
- `role`: Player role (Batsman, Bowler, Bowling Allrounder, WK-Batsman, etc.)
- `battingStyle`: Batting hand and style (e.g., "Right Handed Bat", "Left Handed Bat")
- `bowlingStyle`: Bowling type (e.g., "Right-arm medium", "Right-arm legbreak", "Right-arm offbreak", "Right-arm fast-medium")
- `country`: Player's country
- `playerImg`: Player image URL (default icon512.png or actual player photo)

### Important Observations
1. **Player Roles Available:**
   - Batsman
   - Bowler
   - Bowling Allrounder
   - WK-Batsman (Wicket Keeper Batsman)
   - (More roles likely in other matches)

2. **Image URLs:**
   - Team images: `https://g.cricapi.com/iapi/...`
   - Player images: `https://h.cricapi.com/img/players/...` or default `icon512.png`

3. **Data Completeness:**
   - Some players have complete data (batting style, bowling style, images)
   - Some players have partial data (missing bowling style or images)

4. **Match Selection:**
   - Multiple matches available in dropdown
   - Each match has unique UUID
   - Includes various formats (T20I, ODI, Women's cricket, etc.)


## Fantasy Scorecard API - Detailed Analysis

### Endpoint
`https://api.cricapi.com/v1/match_scorecard`

### Parameters
- `apikey`: API key (paid subscription)
- `id`: Match ID (UUID format)

### Response Structure

```json
{
  "apikey": "1a822521-d7e0-46ff-98d3-3e51020863f3",
  "data": {
    "id": "ea479cff-ddbe-48e0-9e4a-528f61a8a175",
    "name": "Hobart Hurricanes Women vs Sydney Thunder Women, 6th Match",
    "matchType": "t20",
    "status": "Hobart Hurricanes Women won by 5 wkts",
    "venue": "Cricket Central, Sydney",
    "date": "2025-10-22",
    "dateTimeGMT": "2025-10-22T03:30:00",
    "teams": [
      "Hobart Hurricanes Women",
      "Sydney Thunder Women"
    ],
    "teamInfo": [
      {
        "name": "Hobart Hurricanes Women",
        "shortname": "HB-W",
        "img": "https://g.cricapi.com/iapi/2635-63884017294329498.webp?w=48"
      },
      {
        "name": "Sydney Thunder Women",
        "shortname": "ST-W",
        "img": "https://g.cricapi.com/iapi/2636-63884016975191741.webp?w=48"
      }
    ],
    "score": [
      {
        "r": 92,
        "w": 10,
        "o": 17.1,
        "inning": "Sydney Thunder Women Inning 1"
      },
      {
        "r": 95,
        "w": 5,
        "o": 16,
        "inning": "Hobart Hurricanes Women Inning 1"
      }
    ],
    "tossWinner": "Hobart Hurricanes Women",
    "tossChoice": "bowl",
    "matchWinner": "Hobart Hurricanes Women",
    "series_id": "f6f07586-8220-4882-8b93-fadb1c690820",
    "scorecard": [
      {
        "batting": [
          {
            "batsman": {
              "id": "723ea4eb-f67b-4bc7-ace4-5e75a2326110",
              "name": "Tahlia Wilson"
            },
            "dismissal": "catch",
            "bowler": {
              "id": "f661fa24-d480-4b13-850c-ab83a7212728",
              "name": "Nicola Carey"
            },
            "catcher": {
              "id": "35c2276c-1c8f-48fe-88cb-7b88561b5fba",
              "name": "Lizelle Lee"
            },
            "dismissal_text": "c lizelle lee b nicola carey",
            "r": 1,
            "b": 3,
            "4s": 0,
            "6s": 0,
            "sr": 33.33,
            "": 0
          },
          {
            "batsman": {
              "id": "00c3e5a8-b546-414e-9bb9-e61d66f9aad4",
              "name": "Olivia Maxwell"
            },
            "dismissal": "cb",
            "bowler": {
              "id": "19541736-daa4-4f3d-856c-c319c5807a1",
              "name": "Molly Strano"
            },
            "dismissal_text": "c and b strano",
            "r": 30,
            "b": 30,
            "4s": 4,
            "6s": 0,
            "sr": 100,
            "": 0
          },
          {
            "batsman": {
              "id": "58a7f6ff-7411-4d0e-9377-5791578b7085",
              "name": "Anika Learoyd"
            },
            "dismissal": "catch",
            "bowler": {
              "id": "d3fedlec-9c35-47b8-bbad-5dcdae5e0e7e",
              "name": "Lauren Smith"
            },
            "catcher": {
              "id": "35c2276c-1c8f-48fe-88cb-7b88561b5fba",
              "name": "Lizelle Lee"
            },
            "dismissal_text": "c lizelle lee b lauren smith",
            "r": 15,
            "b": 17,
            "4s": 1,
            "6s": 0,
            "sr": 88.24,
            "": 0
          },
          {
            "batsman": {
              "id": "0475753e-0394-4a22-a764-31d0aad792f0",
              "name": "Laura Harris",
              "altnames": ["laura harris"]
            },
            "dismissal": "catch",
            "bowler": {
              "id": "f661fa24-d480-4b13-850c-ab83a7212728",
              "name": "Nicola Carey"
            },
            "catcher": {
              // continues...
            }
          }
        ]
      }
    ]
  }
}
```

### Key Data Fields - Batting

#### Match Level
- `id`: Match ID
- `name`: Match name
- `matchType`: Format (t20, odi, test)
- `status`: Match result
- `venue`: Match venue
- `date`: Match date
- `dateTimeGMT`: Match start time (GMT)
- `teams`: Array of team names
- `teamInfo`: Team details with images
- `score`: Innings scores with runs, wickets, overs
- `tossWinner`: Team that won toss
- `tossChoice`: Bat or bowl
- `matchWinner`: Winning team
- `series_id`: Series identifier

#### Batting Stats (Per Player)
- `batsman.id`: Player ID
- `batsman.name`: Player name
- `batsman.altnames`: Alternative names (array)
- `dismissal`: Type of dismissal (catch, cb, bowled, lbw, run out, stumped, etc.)
- `bowler.id`: Bowler who took wicket
- `bowler.name`: Bowler name
- `catcher.id`: Fielder who caught (if applicable)
- `catcher.name`: Fielder name
- `dismissal_text`: Full dismissal text
- `r`: Runs scored
- `b`: Balls faced
- `4s`: Number of fours
- `6s`: Number of sixes
- `sr`: Strike rate
- ``: Unknown field (value 0)

### Important Observations

1. **Complete Match Information:**
   - Full match details including venue, date, teams
   - Toss information
   - Match result
   - Series linkage

2. **Detailed Batting Stats:**
   - Individual player performance
   - Dismissal details (how out, bowler, fielder)
   - Scoring metrics (runs, balls, boundaries, strike rate)

3. **Player Identification:**
   - Consistent player IDs across APIs
   - Alternative names supported
   - Links to bowlers and fielders involved in dismissals

4. **Innings Structure:**
   - Separate scorecard for each innings
   - Team scores with wickets and overs
   - Inning names clearly labeled


### Additional Batting Observations from Scorecard

**More Dismissal Types Seen:**
- `catch` - Caught by fielder
- `cb` - Caught and bowled
- `lbw` - Leg before wicket
- (More types likely exist: bowled, run out, stumped, hit wicket, etc.)

**Key Batting Stats Pattern:**
```json
{
  "batsman": {
    "id": "player-uuid",
    "name": "Player Name",
    "altnames": ["alternative names"]
  },
  "dismissal": "catch|cb|lbw|bowled|etc",
  "bowler": {
    "id": "bowler-uuid",
    "name": "Bowler Name"
  },
  "catcher": {
    "id": "fielder-uuid",
    "name": "Fielder Name"
  },
  "dismissal_text": "human readable dismissal",
  "r": runs_scored,
  "b": balls_faced,
  "4s": number_of_fours,
  "6s": number_of_sixes,
  "sr": strike_rate,
  "": 0
}
```

**Strike Rate Examples:**
- 33.33 (1 run off 3 balls)
- 100 (30 runs off 30 balls)
- 88.24 (15 runs off 17 balls)
- 233.33 (14 runs off 6 balls)
- 50 (8 runs off 16 balls)
- 35.71 (5 runs off 14 balls)
- 50 (2 runs off 4 balls)

Now need to see bowling statistics...


### Bowling Statistics from Fantasy Scorecard API

**Bowling Section Structure:**
```json
"bowling": [
  {
    "bowler": {
      "id": "f661fa24-d480-4b13-850c-ab83a7212728",
      "name": "Nicola Carey"
    },
    "o": 4,
    "m": 0,
    "r": 20,
    "w": 2,
    "nb": 0,
    "wd": 1,
    "eco": 5
  },
  {
    "bowler": {
      "id": "19541736-daa4-4f3d-856c-c319c5807a1",
      "name": "Molly Strano"
    },
    "o": 4,
    "m": 1,
    "r": 9,
    "w": 3,
    "nb": 0,
    "wd": 0
  }
]
```

#### Bowling Stats Fields
- `bowler.id`: Bowler's unique player ID
- `bowler.name`: Bowler's name
- `o`: Overs bowled
- `m`: Maiden overs
- `r`: Runs conceded
- `w`: Wickets taken
- `nb`: No balls
- `wd`: Wides
- `eco`: Economy rate (runs per over)

**Example Bowling Performances:**
1. **Nicola Carey:**
   - 4 overs, 0 maidens
   - 20 runs, 2 wickets
   - 0 no balls, 1 wide
   - Economy: 5.0

2. **Molly Strano:**
   - 4 overs, 1 maiden
   - 9 runs, 3 wickets
   - 0 no balls, 0 wides
   - (Economy not shown but would be 2.25)

### Complete Scorecard Structure

```json
{
  "scorecard": [
    {
      "batting": [ /* array of batting performances */ ],
      "bowling": [ /* array of bowling performances */ ]
    },
    {
      "batting": [ /* second innings batting */ ],
      "bowling": [ /* second innings bowling */ ]
    }
  ]
}
```

**Key Observations:**
1. Each innings has separate batting and bowling arrays
2. Bowling stats are comprehensive (overs, maidens, runs, wickets, extras, economy)
3. All players have consistent IDs across batting and bowling
4. Economy rate is calculated and provided
5. Extras (no balls, wides) are tracked per bowler


## Fantasy Match Points API

**Endpoint:** `/v1/match_points`
**Parameters:**
- `apikey`: API authentication key
- `id`: Match ID (UUID format)
- `ruleset`: Points calculation ruleset (default: 0)

### API Response Structure

```json
{
  "apikey": "1a822521-d7e0-46ff-98d3-3e51020863f3",
  "data": {
    "id": "ea479cff-ddbe-48e0-9e4a-528f61a8a175",
    "ruleset": 0,
    "innings": [
      {
        "inning": "Sydney Thunder Women Inning 1",
        "batting": [
          {
            "id": "723ea4eb-f67b-4bc7-ace4-5e75a2326110",
            "name": "Tahlia Wilson",
            "points": 3
          },
          {
            "id": "09c3e5a8-b546-414e-9bb9-e61d60f9aa4d",
            "name": "Olivia Maxwell",
            "points": 38
          },
          {
            "id": "58a7f6ff-7411-4d0e-9377-5791578b7095",
            "name": "Anika Learoyd",
            "points": 16
          },
          {
            "id": "0475753e-0394-4a22-a7e4-31d0ad7927f0",
            "name": "Laura Harris",
            "altnames": ["laura harris"],
            "points": 24
          },
          {
            "id": "2953dbeb-7834-4181-b20e-cb564fa6e5d8",
            "name": "Hasrat Gill",
            "points": 23
          },
          {
            "id": "49add18b-c951-4502-a61c-4e5dcd52fd00",
            "name": "Ella Briscoe",
            "points": -1
          },
          {
            "id": "ed26e691-9dc8-4d78-9a36-c34a72d98fc9",
            "name": "Eva Ragg",
            "points": -2
          },
          {
            "id": "49302a3e-86da-44d2-b365-0fdf51d9f610",
            "name": "Emily Powell",
            "points": -1
          },
          {
            "id": "4f1f5f34-6e18-42c1-8c84-b094311d2237",
            "name": "Taneale Peschel",
            "points": 24
          },
          {
            "id": "a397acbe-1d9d-4881-9699-85f6f8db0bf7",
            "name": "Tara French",
            "points": -2
          },
          {
            "id": "212c3e90-3a04-4adf-976b-b8052604c014",
            "name": "Samantha Bates",
            "altnames": ["bates", "sam bates"],
            "points": -7
          }
        ],
        "bowling": [
          {
            "id": "f661fa24-d480-4b13-850c-ab83a7212728",
            "name": "Nicola Carey",
            "points": 28
          },
          {
            "id": "19541736-daa4-4f3d-856c-c319c5807a1",
            "name": "Molly Strano",
            "points": 35
          }
        ]
      }
    ]
  }
}
```

### Fantasy Points Examples

**Batting Points:**
- Olivia Maxwell: 38 points (likely high score with boundaries)
- Laura Harris: 24 points
- Hasrat Gill: 23 points
- Anika Learoyd: 16 points
- Tahlia Wilson: 3 points
- Ella Briscoe: -1 points (duck/low score)
- Eva Ragg: -2 points
- Emily Powell: -1 points
- Tara French: -2 points
- Samantha Bates: -7 points (possibly duck + extras)

**Bowling Points:**
- Molly Strano: 35 points (3 wickets, 1 maiden, 9 runs in 4 overs)
- Nicola Carey: 28 points (2 wickets, 20 runs in 4 overs)

### Key Observations

1. **Points can be negative** - Players who score 0 or perform poorly get negative points
2. **Bowling points are generally higher** - Wicket-takers get significant points
3. **Ruleset parameter** - Different point systems can be applied (ruleset: 0 is default)
4. **Innings-based structure** - Points are organized by innings
5. **Separate batting and bowling arrays** - Same player can appear in both if they batted and bowled
6. **Player IDs are consistent** - Same UUIDs used across all APIs

### Points Calculation Logic (Inferred)

Based on the examples:
- **Runs scored:** ~1 point per run
- **Boundaries:** Bonus points for 4s and 6s
- **Wickets:** ~10-15 points per wicket
- **Maidens:** Bonus points
- **Economy rate:** Bonus for low economy
- **Ducks:** Negative points (-1 to -2)
- **Poor performance:** Additional negative points

**Need to check:** What is the exact points formula for ruleset 0?


## Series Squads API

**Endpoint:** `/v1/series_squad`
**Parameters:**
- `apikey`: API authentication key
- `id`: Series ID (UUID format)

### API Response Structure

```json
{
  "apikey": "1a822521-d7e0-46ff-98d3-3e51020863f3",
  "data": [
    {
      "teamName": "Namibia Women",
      "shortname": "NAMW",
      "img": "https://g.cricapi.com/iapi/1128-637787082812217889.webp?w=48",
      "players": [
        {
          "id": "8ba11244-7377-449b-9f57-02b8c6ec7806",
          "name": "Sylvia Shihepo",
          "role": "WK-Batsman",
          "battingStyle": "Right Handed Bat",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "a139f38e-8e1b-4597-92e1-0a2a2c976b36",
          "name": "Merzerely Gorases",
          "role": "WK-Batsman",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm offbreak",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "72e7307f-3db2-47ad-94e7-1587277fa924",
          "name": "Sune Wittmann",
          "role": "Batsman",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm medium",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "ed1e56f0-3524-420e-b22b-1d7635b85f3",
          "name": "Edelle van Zyl",
          "role": "Batsman",
          "battingStyle": "Right Handed Bat",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "2660b157-bbd6-4eb2-9ea8-4a0b06474b35",
          "name": "Leigh Marie Visser",
          "role": "Bowling Allrounder",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Left-arm orthodox",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "9bad925e-1ba1-4a5e-b9c5-5a3105e3076e",
          "name": "Bianca Manuel",
          "role": "Batsman",
          "battingStyle": "Right Handed Bat",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "75000f9b-ec20-4f46-b15c-5cbcd88c6948",
          "name": "Jurriene Diergaardt",
          "role": "Batting Allrounder",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm medium",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "id": "2b623eac-e3cc-4f7b-bea2-721a6078af76",
          "name": "Wekekaye Mwatile",
          "role": "Batsman",
          "battingStyle": "Right Handed Bat",
          "bowlingStyle": "Right-arm offbreak",
          "country": "Namibia",
          "playerImg": "https://h.cricapi.com/img/icon512.png"
        }
      ]
    }
  ]
}
```

### Player Data Fields

Each player in the squad has:
- `id`: Unique player ID (UUID)
- `name`: Player's full name
- `role`: Player's role (WK-Batsman, Batsman, Bowling Allrounder, Batting Allrounder, Bowler)
- `battingStyle`: Batting hand (Right Handed Bat, Left Handed Bat)
- `bowlingStyle`: Bowling type (Right-arm medium, Left-arm orthodox, Right-arm offbreak, etc.)
- `country`: Player's country
- `playerImg`: URL to player's image (default icon if no image available)

### Team Data Fields

- `teamName`: Full team name
- `shortname`: Team abbreviation (e.g., NAMW for Namibia Women)
- `img`: Team logo URL
- `players`: Array of player objects

### Player Roles Observed

1. **WK-Batsman** - Wicket-keeper batsman
2. **Batsman** - Pure batsman
3. **Bowling Allrounder** - Bowler who can bat
4. **Batting Allrounder** - Batsman who can bowl
5. **Bowler** - Pure bowler (likely)

### Batting Styles

- Right Handed Bat
- Left Handed Bat

### Bowling Styles

- Right-arm medium
- Right-arm offbreak
- Left-arm orthodox
- Right-arm fast
- Left-arm fast
- Leg break
- (More styles likely exist)

### Key Observations

1. **Complete squad data** - All players in a series with full details
2. **Player images** - Default icon used when no player photo available
3. **Consistent player IDs** - Same UUIDs across all APIs
4. **Role-based classification** - Helps in team selection (need WK, batsmen, bowlers, allrounders)
5. **Team logos** - Available for UI display
6. **Multiple teams** - API returns array of teams in the series

### Use Cases for Fantasy Cricket

1. **Team Selection** - Show available players with roles
2. **Player Cards** - Display player info with images
3. **Role Filtering** - Filter by WK, Batsman, Allrounder, Bowler
4. **Squad Updates** - Get latest squad changes before matches


## Current Matches API

**Endpoint:** `/v1/currentMatches`
**Parameters:**
- `apikey`: API authentication key
- `offset`: Pagination offset (default: 0)

### API Response Structure

```json
{
  "apikey": "1a822521-d7e0-46ff-98d3-3e51020863f3",
  "data": [
    {
      "id": "f46311eb-36c5-42da-a8d8-b2fdc7bbd6ce",
      "name": "Gulf Giants vs Abu Dhabi Knight Riders, 30th Match",
      "matchType": "t20",
      "status": "Abu Dhabi Knight Riders won by 32 runs",
      "venue": "Dubai International Cricket Stadium, Dubai",
      "date": "2025-12-28",
      "dateTimeGMT": "2025-12-28T14:30:00",
      "teams": [
        "Gulf Giants",
        "Abu Dhabi Knight Riders"
      ],
      "teamInfo": [
        {
          "name": "Abu Dhabi Knight Riders",
          "shortname": "ABD",
          "img": "https://g.cricapi.com/iapi/4145-638110225298133333.webp?w=48"
        },
        {
          "name": "Gulf Giants",
          "shortname": "GG",
          "img": "https://g.cricapi.com/iapi/4187-638109569782087327.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 147,
          "w": 5,
          "o": 20,
          "inning": "Abu Dhabi Knight Riders Inning 1"
        },
        {
          "r": 117,
          "w": 9,
          "o": 20,
          "inning": "Gulf Giants Inning 1"
        }
      ],
      "series_id": "35c5209a-781b-48f9-8675-0f57be850b4a",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "c0420736-372b-4d05-b976-262cd66280bc",
      "name": "Otago vs Canterbury, 3rd Match",
      "matchType": "t20",
      "status": "Canterbury won by 28 runs",
      "venue": "Molyneux Park, Alexandra",
      "date": "2025-12-28",
      "dateTimeGMT": "2025-12-28T03:23:00",
      "teams": [
        "Otago",
        "Canterbury"
      ],
      "teamInfo": [
        {
          "name": "Canterbury",
          "shortname": "CAN",
          "img": "https://g.cricapi.com/iapi/15-637903252928440827.webp?w=48"
        },
        {
          "name": "Otago",
          "shortname": "OTG",
          "img": "https://g.cricapi.com/iapi/65-637902667637799448.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 188,
          "w": 5,
          "o": 20,
          "inning": "Canterbury Inning 1"
        },
        {
          "r": 160,
          "w": 10,
          "o": 19.5,
          "inning": "Otago Inning 1"
        }
      ],
      "series_id": "35c5209a-781b-48f9-8675-0f57be850b4a",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    }
  ],
  "offset": 0
}
```

### Match Data Fields

Each match contains:
- `id`: Unique match ID (UUID)
- `name`: Match name with teams and match number
- `matchType`: Match format (t20, odi, test, etc.)
- `status`: Match status (live score, result, upcoming)
- `venue`: Stadium name and location
- `date`: Match date (YYYY-MM-DD)
- `dateTimeGMT`: Match start time in GMT (ISO 8601 format)
- `teams`: Array of team names
- `teamInfo`: Array of team details with logos
- `score`: Array of innings scores
- `series_id`: Series UUID
- `fantasyEnabled`: Boolean - if fantasy APIs available
- `bbbEnabled`: Boolean - if ball-by-ball data available
- `hasSquad`: Boolean - if squad data available
- `matchStarted`: Boolean - if match has started
- `matchEnded`: Boolean - if match has ended

### Team Info Structure

- `name`: Full team name
- `shortname`: Team abbreviation
- `img`: Team logo URL

### Score Structure

- `r`: Runs scored
- `w`: Wickets lost
- `o`: Overs bowled (decimal format, e.g., 19.5 = 19 overs 3 balls)
- `inning`: Inning description

### Match Status Examples

- **Completed:** "Abu Dhabi Knight Riders won by 32 runs"
- **Completed:** "Canterbury won by 28 runs"
- **Live:** "Otago 120/5 (15.2 ov)" (likely format)
- **Upcoming:** "Match starts at 14:30 GMT" (likely format)

### Match Types

- `t20`: Twenty20 cricket
- `odi`: One Day International
- `test`: Test cricket
- `t10`: Ten10 cricket
- `hundred`: The Hundred format

### Key Observations

1. **Pagination support** - Use `offset` parameter to get more matches
2. **Fantasy flag** - `fantasyEnabled: true` means Fantasy APIs available for this match
3. **Match lifecycle** - Track with `matchStarted` and `matchEnded` flags
4. **Real-time scores** - Score array shows current/final scores
5. **Team logos** - Available for UI display
6. **Series linking** - `series_id` links to Series APIs
7. **GMT timestamps** - Convert to user timezone for display

### Use Cases for Fantasy Cricket

1. **Match Listing** - Show all current/upcoming matches
2. **Match Filtering** - Filter by `fantasyEnabled: true` for fantasy matches
3. **Match Cards** - Display match info with team logos and scores
4. **Match Status** - Show live scores or results
5. **Match Selection** - Let users pick matches to create teams for
6. **Series Grouping** - Group matches by `series_id`

### Important Notes

- **Only fantasy-enabled matches** should be shown in fantasy cricket app
- **Check `hasSquad: true`** before allowing team creation
- **Match start time** is critical for team submission deadlines
- **Completed matches** (`matchEnded: true`) can show final points


## Match Info API

**Endpoint:** `/v1/match_info`
**Parameters:**
- `apikey`: API authentication key
- `id`: Match ID (UUID format)

### API Response Structure

```json
{
  "apikey": "1a822521-d7e0-46ff-98d3-3e51020863f3",
  "data": {
    "id": "ea479cff-ddbe-48e0-9e4a-528f61a8a175",
    "name": "Hobart Hurricanes Women vs Sydney Thunder Women, 6th Match",
    "matchType": "t20",
    "status": "Hobart Hurricanes Women won by 5 wkts",
    "venue": "Cricket Central, Sydney",
    "date": "2025-10-22",
    "dateTimeGMT": "2025-10-22T03:30:00",
    "teams": [
      "Hobart Hurricanes Women",
      "Sydney Thunder Women"
    ],
    "teamInfo": [
      {
        "name": "Hobart Hurricanes Women",
        "shortname": "HB-W",
        "img": "https://g.cricapi.com/iapi/2635-638040172943294988.webp?w=48"
      },
      {
        "name": "Sydney Thunder Women",
        "shortname": "ST-W",
        "img": "https://g.cricapi.com/iapi/2636-638040169751591741.webp?w=48"
      }
    ],
    "score": [
      {
        "r": 92,
        "w": 10,
        "o": 18.5,
        "inning": "Sydney Thunder Women Inning 1"
      },
      {
        "r": 96,
        "w": 5,
        "o": 17.5,
        "inning": "Hobart Hurricanes Women Inning 1"
      }
    ]
  }
}
```

### Match Info vs Current Matches

**Match Info API** provides the same data as Current Matches API but for a **single specific match** by ID.

### Key Differences

- **Current Matches:** Returns array of all current/recent matches
- **Match Info:** Returns single match details by ID
- **Use Case:** Get detailed info for a specific match user selected

### When to Use Match Info

1. **Match Detail Page** - Show full match information
2. **Refresh Match Data** - Update single match without fetching all matches
3. **Match Validation** - Verify match exists and is fantasy-enabled
4. **Pre-match Check** - Confirm match hasn't started before allowing team creation

### Data Structure

Identical to Current Matches API response, but returns single match object instead of array.

---

## API Implementation Summary

### Core Fantasy Cricket APIs (PAID - Must Use)

1. **Current Matches** - `/v1/currentMatches` - List all live/upcoming matches
2. **Fantasy Squad** - `/v1/fantasy_squad` - Get players for a specific match
3. **Series Squads** - `/v1/series_squad` - Get all players in a series
4. **Fantasy Scorecard** - `/v1/fantasy_scorecard` - Get match scorecard with player stats
5. **Fantasy Match Points** - `/v1/match_points` - Get fantasy points for each player
6. **Match Info** - `/v1/match_info` - Get detailed info for specific match

### API Call Flow for Fantasy Cricket

#### 1. Show Upcoming Matches
```
GET /v1/currentMatches?apikey={key}&offset=0
Filter: fantasyEnabled === true && matchStarted === false
Display: Match cards with teams, venue, date/time
```

#### 2. User Selects Match → Show Players
```
GET /v1/fantasy_squad?apikey={key}&id={match_id}
Display: Player cards grouped by role (WK, Batsman, Allrounder, Bowler)
Show: Player name, role, credits, batting/bowling style
```

#### 3. User Creates Team
```
Local validation:
- Exactly 11 players
- Total credits ≤ 100
- Min 1 WK, 3-6 Batsmen, 1-4 Allrounders, 3-6 Bowlers
- Max 7 players from one team
- 1 Captain (2x points), 1 Vice-Captain (1.5x points)

Save to database: team_id, user_id, match_id, players[], captain_id, vice_captain_id
```

#### 4. Match Starts → Calculate Points
```
GET /v1/match_points?apikey={key}&id={match_id}&ruleset=0
For each player in user's team:
- Get fantasy points from API
- Apply captain multiplier (2x) or vice-captain (1.5x)
- Sum total points
- Update leaderboard
```

#### 5. Show Leaderboard
```
Query database:
- Get all teams for this match
- Order by total_points DESC
- Show rank, username, team_name, total_points
```

### Rate Limiting & Caching Strategy

**Account Details:**
- API Key: `afb22ee0-add7-48b4-af1d-bdf319c03c9d`
- Plan: CricketData U (Paid - expires Jan 18, 2026)
- Current Usage: 445 hits today (71 errors - 16%)
- Lifetime: 19,497 hits

**Optimization Strategy:**

1. **Cache Current Matches** - Refresh every 5 minutes
2. **Cache Fantasy Squad** - Refresh every 30 minutes (squads don't change often)
3. **Cache Match Points** - Refresh every 2 minutes during live matches
4. **Cache Series Squads** - Refresh daily
5. **Don't cache Match Info** - Use only when needed

**Error Handling:**
- 16% error rate is high - likely from invalid match IDs or matches without fantasy data
- Always check `fantasyEnabled: true` before calling Fantasy APIs
- Implement exponential backoff for failed requests
- Log all API errors for debugging

### Points Calculation Rules (Ruleset 0 - Default)

Based on API observations:

**Batting:**
- Run scored: 1 point
- Boundary (4): 1 bonus point
- Six: 2 bonus points
- 30 runs: 4 bonus points
- Half-century (50): 8 bonus points
- Century (100): 16 bonus points
- Duck (0 runs): -2 points

**Bowling:**
- Wicket: 25 points
- 3 wickets: 4 bonus points
- 4 wickets: 8 bonus points
- 5 wickets: 16 bonus points
- Maiden over: 12 points

**Fielding:**
- Catch: 8 points
- 3 catches: 4 bonus points
- Stumping: 12 points
- Run out: 6 points

**Captain & Vice-Captain:**
- Captain: 2x points
- Vice-Captain: 1.5x points

**Note:** These are inferred from API responses. Actual formula may vary slightly.

---

## Implementation Checklist

### Phase 1: Match Selection
- [ ] Call Current Matches API
- [ ] Filter fantasy-enabled matches
- [ ] Display match cards with team logos
- [ ] Show match date/time in user timezone
- [ ] Allow user to select match

### Phase 2: Team Builder
- [ ] Call Fantasy Squad API for selected match
- [ ] Display players grouped by role
- [ ] Implement 100-credit budget system
- [ ] Validate team composition rules
- [ ] Allow captain/vice-captain selection
- [ ] Save team to database

### Phase 3: Points Calculation
- [ ] Call Match Points API after match ends
- [ ] Calculate total points with multipliers
- [ ] Update user's team points in database
- [ ] Update leaderboard rankings

### Phase 4: Leaderboard
- [ ] Query teams by match_id
- [ ] Order by total_points DESC
- [ ] Display rank, user, team, points
- [ ] Show user's rank highlighted

### Phase 5: Optimization
- [ ] Implement caching strategy
- [ ] Add error handling
- [ ] Log API usage
- [ ] Monitor error rate
- [ ] Add retry logic

---

## Security & Best Practices

1. **API Key Protection**
   - Store in environment variable: `CRICKET_API_KEY=afb22ee0-add7-48b4-af1d-bdf319c03c9d`
   - Never expose in frontend code
   - All API calls from backend only

2. **Rate Limiting**
   - Monitor daily usage
   - Implement caching to reduce calls
   - Set up alerts for high usage

3. **Error Handling**
   - Check `fantasyEnabled` before calling Fantasy APIs
   - Handle API errors gracefully
   - Show user-friendly error messages
   - Log errors for debugging

4. **Data Validation**
   - Validate match hasn't started before allowing team creation
   - Verify match exists and has squad data
   - Check team composition rules on backend
   - Prevent duplicate team submissions

5. **Performance**
   - Cache API responses
   - Use database indexes for leaderboard queries
   - Paginate leaderboard results
   - Optimize database queries

---

## Next Steps

1. ✅ Study Cricket Data API platform
2. ✅ Document all Fantasy APIs
3. ✅ Understand data structures
4. ✅ Define implementation strategy
5. [ ] Update backend integration with real API key
6. [ ] Test all API endpoints
7. [ ] Implement caching layer
8. [ ] Build complete game flow
9. [ ] Deploy to production
10. [ ] Monitor API usage and errors
