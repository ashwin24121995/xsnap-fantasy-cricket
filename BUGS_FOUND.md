# Bugs Found on xsnaplive.com

## 1. Player Spotlight Section (CONFIRMED)
- **Location**: Homepage, after "Upcoming Cricket Matches" section
- **Issue**: Shows "Player Data Coming Soon" placeholder with no actual content
- **Fix Needed**: Replace entire section with live/ongoing matches section
- **Screenshot**: Shows "Featured Players" badge and "Player Spotlight" heading with empty content

## 2. Header Login State (REPORTED BY USER)
- **Issue**: After user logs in, header still shows "Login" button instead of user profile/name
- **Expected**: Should show user name/avatar and logout option after login
- **Fix Needed**: Update header component to dynamically show auth state

## 3. Completed Match Summary Error (REPORTED BY USER)
- **Issue**: Error occurs when viewing completed match summary
- **Fix Needed**: Need to test and fix the completed match summary page

## 4. Registration/Login Flow (TO BE TESTED)
- Need to test complete registration and login flow
- Need to verify team creation works end-to-end

## Priority Order:
1. Fix header login state (critical UX issue)
2. Replace Player Spotlight with live matches
3. Fix completed match summary errors
4. Test and verify all flows work correctly
