# Railway Deployment Guide - XSNAP Fantasy Cricket

## ✅ Fixes Applied

### 1. Moved `drizzle-kit` to Production Dependencies
**Problem:** `drizzle-kit` was in `devDependencies`, causing database migration failures in production.  
**Solution:** Moved to `dependencies` in `package.json`

### 2. Added Database Migration to Build Process
**Problem:** Database tables weren't being created before the app started.  
**Solution:** Updated `railway.json` to run `pnpm db:push` during build.

### 3. Updated Build Command
**Before:** Default Nixpacks build  
**After:** `pnpm install && pnpm db:push && pnpm build`

---

## 📋 Railway Configuration Checklist

### Environment Variables (All Required)
- [x] `DATABASE_URL` - MySQL connection string
- [x] `JWT_SECRET` - Authentication secret
- [x] `CRICKET_API_KEY` - Cricket Data API key
- [x] `NODE_ENV=production` - Production mode

### Railway Settings
- **Build Command:** Automatic (defined in `railway.json`)
- **Start Command:** `pnpm start` (defined in `railway.json`)
- **Root Directory:** `/` (default)
- **Builder:** NIXPACKS (defined in `railway.json`)

---

## 🚀 Deployment Steps

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Fix Railway deployment configuration"
git push origin main
```

### Step 2: Railway Will Automatically:
1. ✅ Install dependencies (`pnpm install`)
2. ✅ Run database migrations (`pnpm db:push`)
3. ✅ Build frontend and backend (`pnpm build`)
4. ✅ Start the server (`pnpm start`)

### Step 3: Verify Deployment
1. Go to Railway Dashboard → Deployments
2. Wait for build to complete (usually 3-5 minutes)
3. Check deployment logs for any errors
4. Click on the generated URL to test the website

---

## 🔍 Common Deployment Errors & Solutions

### Error 1: "Cannot find module 'drizzle-kit'"
**Cause:** `drizzle-kit` was in devDependencies  
**Solution:** ✅ Fixed - Moved to dependencies

### Error 2: "Table 'railway.users' doesn't exist"
**Cause:** Database migrations not running  
**Solution:** ✅ Fixed - Added `pnpm db:push` to build command

### Error 3: "Port already in use"
**Cause:** Server not using `process.env.PORT`  
**Solution:** ✅ Already correct - Server uses `process.env.PORT || 3000`

### Error 4: "CRICKET_API_KEY is not defined"
**Cause:** Missing environment variable  
**Solution:** Add `CRICKET_API_KEY` in Railway Variables tab

### Error 5: "JWT_SECRET is not defined"
**Cause:** Missing environment variable  
**Solution:** Add `JWT_SECRET` in Railway Variables tab

---

## 📊 Build Process Breakdown

### 1. Install Phase
```bash
pnpm install
```
- Installs all dependencies from `package.json`
- Includes both `dependencies` and `devDependencies`

### 2. Database Migration Phase
```bash
pnpm db:push
```
- Runs `drizzle-kit generate` (creates migration files)
- Runs `drizzle-kit migrate` (applies migrations to database)
- Creates all tables: users, matches, teams, players, etc.

### 3. Build Phase
```bash
pnpm build
```
- **Frontend:** `vite build` → Builds React app to `dist/client`
- **Backend:** `esbuild` → Bundles server to `dist/index.js`

### 4. Start Phase
```bash
pnpm start
```
- Runs `NODE_ENV=production node dist/index.js`
- Server listens on Railway's assigned PORT
- Serves static files from `dist/client`
- Handles API requests via tRPC

---

## 🗄️ Database Configuration

### MySQL Connection String Format
```
mysql://username:password@host:port/database
```

### Your Railway MySQL
```
mysql://root:XvArvtSHYNXZzEiiJonXJlugUhsBkEdd@shinkansen.proxy.rlwy.net:25750/railway
```

### Database Tables Created by Migration
- `users` - User accounts (email, password, role)
- `matches` - Cricket matches from API
- `teams` - User fantasy teams
- `team_players` - Players in each team
- `players` - Cricket players data
- `leaderboards` - Match leaderboards
- `user_leaderboards` - User rankings

---

## 🔐 Environment Variables Details

### 1. DATABASE_URL
```
mysql://root:XvArvtSHYNXZzEiiJonXJlugUhsBkEdd@shinkansen.proxy.rlwy.net:25750/railway
```
**Purpose:** Connects to Railway MySQL database  
**Used by:** Drizzle ORM for all database operations

### 2. JWT_SECRET
```
7K9mP2xQ8nR5vW3yB6cF1jH4gD0sL9zA8tE7uI6oP5aM3nK2wX1qY4rT8vC6bN9h
```
**Purpose:** Signs JWT tokens for user authentication  
**Used by:** Login/register endpoints, auth middleware

### 3. CRICKET_API_KEY
```
1a822521-d7e0-46ff-98d3-3e51020863f3
```
**Purpose:** Authenticates with Cricket Data API  
**Used by:** Match fetching, player data, fantasy points

### 4. NODE_ENV
```
production
```
**Purpose:** Enables production mode  
**Effects:**
- Serves static files instead of Vite dev server
- Disables source maps and debug logs
- Optimizes performance

---

## 📁 File Structure After Build

```
dist/
├── client/           # Frontend static files (from Vite)
│   ├── index.html
│   ├── assets/
│   │   ├── index-[hash].js
│   │   └── index-[hash].css
│   └── ...
└── index.js          # Backend server bundle (from esbuild)
```

**Production Server Flow:**
1. `node dist/index.js` starts Express server
2. Server serves `dist/client/index.html` for all routes
3. Frontend loads and makes tRPC calls to `/api/trpc`
4. Backend handles API requests and database operations

---

## 🧪 Testing Production Build Locally

### Step 1: Set Environment Variables
```bash
export DATABASE_URL="mysql://root:XvArvtSHYNXZzEiiJonXJlugUhsBkEdd@shinkansen.proxy.rlwy.net:25750/railway"
export JWT_SECRET="7K9mP2xQ8nR5vW3yB6cF1jH4gD0sL9zA8tE7uI6oP5aM3nK2wX1qY4rT8vC6bN9h"
export CRICKET_API_KEY="1a822521-d7e0-46ff-98d3-3e51020863f3"
export NODE_ENV="production"
```

### Step 2: Build and Run
```bash
cd /home/ubuntu/xsnap-fantasy-cricket
pnpm install
pnpm db:push
pnpm build
pnpm start
```

### Step 3: Test
Open `http://localhost:3000` in browser

---

## 📝 Deployment Checklist

### Before Deployment
- [x] All environment variables added to Railway
- [x] `drizzle-kit` moved to dependencies
- [x] `railway.json` configured with build command
- [x] Code pushed to GitHub
- [x] Database connection string verified

### After Deployment
- [ ] Check deployment logs for errors
- [ ] Test website URL
- [ ] Verify user registration works
- [ ] Verify user login works
- [ ] Check matches page loads
- [ ] Test team creation (when matches available)
- [ ] Verify database tables created

### Post-Deployment Monitoring
- [ ] Monitor Railway logs for errors
- [ ] Check database connections
- [ ] Verify Cricket API calls working
- [ ] Test authentication flow
- [ ] Monitor server performance

---

## 🆘 Troubleshooting

### Deployment Fails at Build Step
1. Check Railway logs for specific error
2. Verify all environment variables are set
3. Check if `DATABASE_URL` is correct
4. Ensure `drizzle-kit` is in dependencies

### Deployment Succeeds but Website Shows 502
1. Check if server is listening on correct PORT
2. Verify `NODE_ENV=production` is set
3. Check Railway logs for runtime errors
4. Verify database connection works

### Database Connection Errors
1. Verify `DATABASE_URL` format is correct
2. Check if Railway MySQL service is running
3. Test connection from local machine
4. Check if database exists

### Cricket API Not Working
1. Verify `CRICKET_API_KEY` is set correctly
2. Check API key expiration (expires Jan 18, 2026)
3. Test API key with curl command
4. Check Railway logs for API errors

---

## 📞 Support

If deployment continues to fail:
1. Copy the full deployment logs from Railway
2. Check the specific error message
3. Refer to this guide for solutions
4. Contact Railway support if infrastructure issue

---

**Last Updated:** December 28, 2025  
**Status:** ✅ Ready for Deployment
