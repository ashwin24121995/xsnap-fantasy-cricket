# Deployment Guide for XSNAP Fantasy Cricket

This guide will help you deploy the XSNAP Fantasy Cricket platform to Railway.

## Prerequisites

1. **GitHub Account** - To host your code repository
2. **Railway Account** - Sign up at [railway.app](https://railway.app/)
3. **MySQL Database** - You can use Railway's MySQL service or external provider

## Step-by-Step Deployment

### 1. Prepare Your Code

The code is already configured for deployment. The `package.json` includes:
- Build command: `vite build && esbuild server/_core/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`
- Start command: `NODE_ENV=production node dist/index.js`

### 2. Push to GitHub

```bash
# Initialize git repository (if not already done)
cd /home/ubuntu/xsnap-fantasy-cricket
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: XSNAP Fantasy Cricket platform"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/xsnap-fantasy-cricket.git

# Push to GitHub
git push -u origin main
```

### 3. Setup MySQL Database on Railway

#### Option A: Use Railway MySQL

1. Go to your Railway dashboard
2. Click "New Project"
3. Click "Add Service" → "Database" → "MySQL"
4. Railway will create a MySQL database
5. Click on the MySQL service to view connection details
6. Copy the `DATABASE_URL` (it looks like: `mysql://user:pass@host:port/railway`)

#### Option B: Use External MySQL

If you have your own MySQL database:
1. Ensure it's accessible from the internet
2. Note down the connection string in this format:
   ```
   mysql://username:password@host:port/database_name
   ```

### 4. Deploy Application to Railway

1. **Create New Project**
   - Go to Railway dashboard
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your GitHub
   - Select your `xsnap-fantasy-cricket` repository

2. **Configure Environment Variables**
   
   In Railway project settings, add these variables:

   ```
   DATABASE_URL=mysql://your-connection-string-here
   JWT_SECRET=generate-a-strong-random-string-here
   NODE_ENV=production
   ```

   **To generate a strong JWT_SECRET:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Deploy**
   - Railway will automatically detect the Node.js app
   - It will run `pnpm install` and `pnpm build`
   - Then start the server with `pnpm start`

### 5. Run Database Migrations

After the first deployment:

1. Go to Railway project
2. Click on your service
3. Go to "Settings" → "Variables"
4. Click "Raw Editor" and copy all environment variables
5. In your local terminal:
   ```bash
   # Set environment variables locally (temporary)
   export DATABASE_URL="your-railway-database-url"
   
   # Run migrations
   pnpm db:push
   ```

Alternatively, you can use Railway's CLI:
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Run migrations
railway run pnpm db:push
```

### 6. Configure Custom Domain (Optional)

1. In Railway, go to your service settings
2. Click "Generate Domain" for a free railway.app subdomain
3. Or add your custom domain:
   - Click "Custom Domain"
   - Enter your domain
   - Add the CNAME record to your DNS provider

### 7. Verify Deployment

1. Visit your Railway URL (e.g., `https://your-app.railway.app`)
2. Test registration with a new account
3. Verify all pages load correctly
4. Test login/logout functionality
5. Check database connectivity

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | MySQL connection string |
| `JWT_SECRET` | Yes | Secret key for JWT tokens (min 32 characters) |
| `NODE_ENV` | Yes | Set to `production` |
| `PORT` | No | Railway sets this automatically |

## Post-Deployment Checklist

- [ ] Database migrations completed successfully
- [ ] Can register new user account
- [ ] Can login with created account
- [ ] All pages load without errors
- [ ] State restrictions work correctly
- [ ] Age verification works
- [ ] Leaderboard displays
- [ ] Team builder functions
- [ ] Footer disclaimer is visible

## Troubleshooting

### Database Connection Issues

**Error:** `ER_ACCESS_DENIED_ERROR` or connection timeout

**Solution:**
1. Verify `DATABASE_URL` is correct
2. Ensure database allows connections from Railway's IP range
3. Check if database is running

### Build Failures

**Error:** Build fails during deployment

**Solution:**
1. Check Railway build logs
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (22.x)

### JWT Token Issues

**Error:** Users can't stay logged in

**Solution:**
1. Verify `JWT_SECRET` is set in Railway
2. Ensure it's a strong random string (not the example value)
3. Check cookie settings in production

### TypeScript Errors

**Note:** TypeScript errors in `server/_core/sdk.ts` are related to unused Manus OAuth code and don't affect functionality. These can be safely ignored.

## Updating Your Deployment

To deploy updates:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

Railway will automatically detect the push and redeploy.

## Database Backups

**Important:** Always backup your database before major updates!

```bash
# Using Railway CLI
railway run mysqldump -u user -p database_name > backup.sql

# Restore if needed
railway run mysql -u user -p database_name < backup.sql
```

## Monitoring

Railway provides:
- Real-time logs
- Resource usage metrics
- Deployment history
- Automatic SSL certificates

Access these in your Railway dashboard.

## Security Recommendations

1. **Never commit `.env` files** to GitHub
2. **Use strong JWT_SECRET** (minimum 32 random characters)
3. **Enable Railway's** built-in DDoS protection
4. **Regularly update** dependencies: `pnpm update`
5. **Monitor logs** for suspicious activity
6. **Backup database** regularly

## Cost Estimation

Railway offers:
- **Free Tier:** $5 credit/month (suitable for testing)
- **Paid Plans:** Start at $5/month for hobby projects
- **Database:** MySQL costs ~$5-10/month depending on size

Estimate for production: ~$10-15/month

## Support

For deployment issues:
- Railway Docs: https://docs.railway.app/
- Railway Discord: https://discord.gg/railway
- Project Issues: Create issue on GitHub

For application issues:
- Contact: support@xsnap.in

## Next Steps After Deployment

1. **Setup Cricket API Integration**
   - Obtain API credentials from cricket data provider
   - Add `CRICKET_API_URL` and `CRICKET_API_KEY` to Railway variables
   - Update match fetching logic

2. **Implement Multi-language Support**
   - Add i18n framework
   - Translate content to Hindi, Tamil, Telugu, Marathi

3. **Add Email Service**
   - Setup SMTP credentials
   - Enable password reset emails
   - Add email verification

4. **Monitor and Optimize**
   - Setup error tracking (e.g., Sentry)
   - Monitor performance
   - Optimize database queries

---

**Deployment Date:** [Add date when deployed]  
**Deployed By:** [Your name]  
**Railway Project:** [Project URL]
