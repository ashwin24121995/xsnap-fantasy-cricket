# Railway Deployment Guide - XSNAP Fantasy Cricket

## Prerequisites
- GitHub account
- Railway account (https://railway.app)
- MySQL database URL from Railway

## Step 1: Push Code to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `xsnap-fantasy-cricket`
   - Make it **Public**
   - **Do NOT** initialize with README

2. Push your code:
   ```bash
   cd /home/ubuntu/xsnap-fantasy-cricket
   git remote add github https://github.com/YOUR_USERNAME/xsnap-fantasy-cricket.git
   git push -u github main
   ```

## Step 2: Deploy to Railway

1. Go to https://railway.app and sign in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `xsnap-fantasy-cricket` repository
5. Railway will automatically detect the Node.js project

## Step 3: Configure Environment Variables

In Railway dashboard, go to your project → Variables tab and add:

### Required Environment Variables:

```env
# Database
DATABASE_URL=mysql://root:XvArvtSHYNXZzEiiJonXJlugUhsBkEdd@shinkansen.proxy.rlwy.net:25750/railway

# JWT Secret (generate a random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Node Environment
NODE_ENV=production

# Port (Railway will set this automatically, but you can specify)
PORT=3000
```

### Optional Environment Variables for Future Features:

```env
# Email Service (for password reset, verification)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Cricket API (when you integrate)
CRICKET_API_KEY=your-cricket-api-key
CRICKET_API_URL=https://api.cricketdata.org
```

## Step 4: Database Migration

After deployment, Railway will automatically run the build command. The database migrations will be applied when you run:

```bash
pnpm db:push
```

You can run this command in Railway's deployment logs or via Railway CLI.

## Step 5: Verify Deployment

1. Railway will provide a public URL (e.g., `https://xsnap-fantasy-cricket-production.up.railway.app`)
2. Visit the URL to verify the website is running
3. Test the registration and login functionality
4. Check that state restrictions and age verification work correctly

## Step 6: Custom Domain (Optional)

1. In Railway dashboard, go to Settings → Domains
2. Click "Add Domain"
3. Enter your custom domain (e.g., `xsnapfantasy.com`)
4. Follow the DNS configuration instructions
5. Railway will automatically provision SSL certificate

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correctly set in Railway environment variables
- Ensure the MySQL database is accessible from Railway's servers
- Check Railway logs for connection errors

### Build Failures
- Check Railway build logs for specific errors
- Verify all dependencies are listed in `package.json`
- Ensure Node.js version is compatible (v22.x)

### Runtime Errors
- Check Railway application logs
- Verify all environment variables are set
- Test database connection using Railway's MySQL client

## Monitoring

- Railway provides built-in monitoring and logs
- Access logs via Railway dashboard → Deployments → View Logs
- Set up alerts for deployment failures or errors

## Backup Strategy

1. **Database Backups**: Railway automatically backs up MySQL databases
2. **Code Backups**: GitHub serves as version control and backup
3. **Manual Backups**: Export database periodically using Railway's MySQL client

## Cost Optimization

- Railway offers $5 free credit per month
- Monitor usage in Railway dashboard
- Optimize database queries to reduce resource usage
- Consider upgrading to paid plan for production workloads

## Support

- Railway Documentation: https://docs.railway.app
- Railway Community: https://discord.gg/railway
- GitHub Issues: Create issues in your repository for bugs

---

**Next Steps After Deployment:**

1. ✅ Test all pages and features
2. ✅ Verify compliance features (age verification, state restrictions)
3. ✅ Integrate cricket match API
4. ✅ Add multi-language support
5. ✅ Setup monitoring and analytics
6. ✅ Configure custom domain
7. ✅ Enable HTTPS (automatic with Railway)
8. ✅ Test on mobile devices
9. ✅ Setup error tracking (e.g., Sentry)
10. ✅ Create user documentation

---

**Important Notes:**

- Never commit `.env` file to GitHub (already in `.gitignore`)
- Keep your JWT_SECRET secure and never share it
- Regularly update dependencies for security patches
- Monitor Railway logs for errors and performance issues
- Test thoroughly before announcing to users

**Contact:**
For deployment support, contact XSNAP IMAGING PRIVATE LIMITED support team.
