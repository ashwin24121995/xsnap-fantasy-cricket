# Environment Variables - Complete Reference

## ✅ All Environment Variables Status

All required environment variables are **properly configured** in the Manus development environment.

---

## Development Environment (Manus) - ✅ ALL SET

### Core Application Variables
| Variable | Status | Purpose |
|----------|--------|---------|
| `DATABASE_URL` | ✅ Set | MySQL/TiDB database connection string |
| `JWT_SECRET` | ✅ Set | Secret key for JWT token signing (authentication) |
| `NODE_ENV` | ✅ Set | Environment mode (development/production) |
| `PORT` | ✅ Set | Server port (default: 3000) |

### Cricket API Integration
| Variable | Status | Purpose |
|----------|--------|---------|
| `CRICKET_API_KEY` | ✅ Set | Cricket Data API key for live match data |

**Value:** `1a822521-d7e0-46ff-98d3-3e51020863f3`  
**Plan:** CricketData U (Paid)  
**Expires:** January 18, 2026

### Manus Platform Variables (Auto-configured)
| Variable | Status | Purpose |
|----------|--------|---------|
| `VITE_APP_ID` | ✅ Set | Manus application ID |
| `VITE_APP_TITLE` | ✅ Set | Website title ("XSNAP Fantasy Cricket") |
| `VITE_APP_LOGO` | ✅ Set | Website logo URL |
| `OAUTH_SERVER_URL` | ✅ Set | Manus OAuth server URL |
| `VITE_OAUTH_PORTAL_URL` | ✅ Set | Manus OAuth portal URL (frontend) |
| `OWNER_OPEN_ID` | ✅ Set | Project owner's OpenID |
| `OWNER_NAME` | ✅ Set | Project owner's name |

### Manus Built-in APIs
| Variable | Status | Purpose |
|----------|--------|---------|
| `BUILT_IN_FORGE_API_URL` | ✅ Set | Manus Forge API base URL (server-side) |
| `BUILT_IN_FORGE_API_KEY` | ✅ Set | Manus Forge API key (server-side) |
| `VITE_FRONTEND_FORGE_API_URL` | ✅ Set | Manus Forge API URL (frontend) |
| `VITE_FRONTEND_FORGE_API_KEY` | ✅ Set | Manus Forge API key (frontend) |

### Analytics
| Variable | Status | Purpose |
|----------|--------|---------|
| `VITE_ANALYTICS_ENDPOINT` | ✅ Set | Manus analytics endpoint |
| `VITE_ANALYTICS_WEBSITE_ID` | ✅ Set | Website analytics ID |

---

## Production Environment (Railway) - ⚠️ ACTION REQUIRED

### Required Variables for Railway Deployment

#### 1. Database (✅ Already Configured)
```bash
DATABASE_URL=mysql://username:password@host:port/database
```
**Status:** ✅ Already set in Railway

#### 2. Authentication (✅ Already Configured)
```bash
JWT_SECRET=your-secure-random-secret-key
```
**Status:** ✅ Already set in Railway

#### 3. Cricket API (⚠️ NEEDS TO BE ADDED)
```bash
CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3
```
**Status:** ⚠️ **MUST BE ADDED TO RAILWAY**

**How to Add:**
1. Go to Railway dashboard → Your project
2. Click "Variables" tab
3. Click "Add Variable"
4. Name: `CRICKET_API_KEY`
5. Value: `1a822521-d7e0-46ff-98d3-3e51020863f3`
6. Click "Add"
7. Railway will automatically redeploy

#### 4. Node Environment (✅ Should be set)
```bash
NODE_ENV=production
```
**Status:** ✅ Usually auto-set by Railway

#### 5. Port (✅ Auto-configured by Railway)
```bash
PORT=3000
```
**Status:** ✅ Railway sets this automatically

---

## Custom Authentication Note

**Important:** This project uses **custom email/password authentication** (NOT Manus OAuth).

The following Manus OAuth variables are present but **NOT USED** by the application:
- `OAUTH_SERVER_URL`
- `VITE_OAUTH_PORTAL_URL`
- `OWNER_OPEN_ID`

These can be safely ignored. The application uses:
- Custom user registration with bcrypt password hashing
- JWT tokens for session management
- MySQL database for user storage

---

## Environment Variables Usage in Code

### Server-Side (Node.js)
```typescript
// server/_core/cricketApi.ts
const CRICKET_API_KEY = process.env.CRICKET_API_KEY || '1a822521-d7e0-46ff-98d3-3e51020863f3';

// server/db.ts
const db = drizzle(process.env.DATABASE_URL);

// server/_core/env.ts
export const ENV = {
  cookieSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL,
  // ... other variables
};
```

### Client-Side (React/Vite)
Only `VITE_*` prefixed variables are accessible in the browser:
```typescript
// Available in client code:
import.meta.env.VITE_APP_TITLE
import.meta.env.VITE_APP_LOGO
import.meta.env.VITE_ANALYTICS_ENDPOINT
// etc.
```

**Security Note:** Never expose sensitive keys (JWT_SECRET, DATABASE_URL, CRICKET_API_KEY) to the client. These should only be used server-side.

---

## Verification Checklist

### Development (Manus) ✅
- [x] DATABASE_URL configured
- [x] JWT_SECRET configured
- [x] CRICKET_API_KEY configured
- [x] All Manus platform variables auto-configured
- [x] Server running successfully
- [x] Cricket API tests passing

### Production (Railway) ⚠️
- [x] DATABASE_URL configured
- [x] JWT_SECRET configured
- [ ] **CRICKET_API_KEY needs to be added**
- [x] NODE_ENV=production (auto-set)
- [x] PORT (auto-set by Railway)

---

## Testing Environment Variables

Run this command to verify all variables are set:

```bash
cd /home/ubuntu/xsnap-fantasy-cricket
pnpm test server/cricketApi.test.ts
```

Expected output:
```
✓ should fetch current matches successfully
✓ should fetch fantasy match points for a completed match
✓ should filter upcoming matches correctly
✓ should filter live matches correctly

Test Files  1 passed (1)
     Tests  4 passed (4)
```

---

## Summary

### ✅ Development Environment
**All 18 environment variables are properly configured.** No action needed.

### ⚠️ Production Environment (Railway)
**Action Required:** Add `CRICKET_API_KEY` to Railway environment variables.

**Value to add:**
```
CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3
```

After adding this variable, the production deployment will have full access to live cricket match data, player statistics, and fantasy points calculation.

---

**Last Updated:** December 28, 2025  
**Status:** Development ✅ Ready | Production ⚠️ Needs CRICKET_API_KEY
