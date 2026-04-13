# Netlify Deployment Guide

## Overview
This portfolio website is a Next.js application that's fully optimized for Netlify deployment. It includes email functionality, animations, and responsive design.

## Prerequisites
- GitHub account with the repository pushed
- Netlify account (free tier available at [netlify.com](https://netlify.com))
- Email service credentials (Gmail App Password or SendGrid API key)

## Quick Deploy (3 Steps)

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and authorize Netlify
4. Choose your repository
5. Click "Deploy site"

### Step 3: Add Environment Variables
1. In Netlify dashboard → Site settings → Build & Deploy → Environment
2. Click "Edit variables" and add:
   ```
   EMAIL_USER=agathamudivijay2002@gmail.com
   EMAIL_PASSWORD=your_app_specific_password
   ```
3. Trigger a redeploy (any commit to main will trigger it)

## Detailed Setup

### Email Configuration on Netlify

#### Option A: Gmail (Recommended)
1. Get App Password from [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. In Netlify dashboard:
   - Go to Site settings → Environment
   - Add `EMAIL_USER=agathamudivijay2002@gmail.com`
   - Add `EMAIL_PASSWORD=your_16_char_password`
3. Redeploy

#### Option B: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. In Netlify:
   - Add `SENDGRID_API_KEY=your_api_key`
4. Update API route to use SendGrid (optional)

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18+ (default OK)

These are already configured in `netlify.toml`

## Verifying Deployment

### Check Build Status
1. Go to Netlify dashboard → Deploys
2. Click latest deploy to view logs
3. Look for "Deployment successful" message

### Test Contact Form
1. Visit your deployed site (e.g., `https://your-site.netlify.app`)
2. Scroll to Contact section
3. Fill out and submit form
4. Verify:
   - Success message appears
   - Email received at `agathamudivijay2002@gmail.com`
   - Confirmation email received by form submitter

### Test Animations
- Verify all sections load with animations
- Check hero image orbits rotate smoothly
- Test responsive design on mobile/tablet

## Troubleshooting

### Build Fails
**Error: "Command 'npm run build' failed"**
- Check `package.json` exists
- Run `npm install` locally first
- Check Node version (should be 18+)

### Emails Not Sending
**Error: "Failed to send email"**
- Verify EMAIL_USER and EMAIL_PASSWORD in Netlify environment
- For Gmail: Ensure App Password (not regular password)
- Check spam/junk folder
- Try resending from contact form

**Solution:**
1. Go to Netlify dashboard → Environment variables
2. Verify credentials are correct
3. Trigger redeploy with `git commit --allow-empty -m "Redeploy"`
4. Test again

### API Route Returns 500
- Check Netlify function logs in dashboard
- Verify environment variables are set
- Check email service status

### Site Shows 404
- Ensure build directory is `.next`
- Check `netlify.toml` plugin configuration
- Verify `next.config.mjs` exists

## Performance Tips

### Optimize for Netlify
✅ Already configured:
- Automatic code splitting
- Image optimization via Next.js
- CSS-in-JS minification
- Gzip compression enabled
- Cache headers configured

### Cache Strategy
Edit `next.config.mjs` to adjust:
```javascript
// Static content cache: 1 year
// API routes: No cache
// HTML: 1 year (with revalidation)
```

## Monitoring

### Netlify Analytics
1. Site settings → Analytics
2. View insights on:
   - Deployment frequency
   - Build times
   - Error rates

### Function Logs
Monitor email sending:
1. Dashboard → Functions → send-email
2. View real-time logs of API calls
3. Debug email sending issues

## Security Checklist

✅ Completed:
- Environment variables not committed (`.env.local` in `.gitignore`)
- API keys stored securely in Netlify dashboard
- HTTPS enforced automatically
- No sensitive data in code

⚠️ Remember:
- Never share Netlify API tokens
- Rotate email passwords if exposed
- Keep depende emails:

## Domain Setup

### Connect Custom Domain
1. Dashboard → Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `vijay.dev`)
4. Update DNS:
   - Add Netlify nameservers, OR
   - Add CNAME record pointing to Netlify

### SSL Certificate
- Automatic HTTPS enabled
- Free certificate via Let's Encrypt
- Renews automatically

## Continuous Deployment

### Auto-Deploy on Push
1. Connected to GitHub ✅
2. Each push to `main` → automatic deploy
3. View build status in Netlify dashboard
4. Automatic rollback if build fails

### Preview Deployments
- Each Pull Request gets preview URL
- Share preview with team before merging
- Merge to deploy to production

## Environment Variables Reference

```env
# Email Configuration
EMAIL_USER=agathamudivijay2002@gmail.com
EMAIL_PASSWORD=your_app_password

# SendGrid Alternative
SENDGRID_API_KEY=your_api_key

# Optional: Monitoring/Analytics
SITE_URL=https://your-site.netlify.app
```

## Support & Resources

- **Netlify Docs**: https://docs.netlify.com
- **Next.js on Netlify**: https://docs.netlify.com/integrations/frameworks/next-js
- **Email Troubleshooting**: See SETUP_EMAIL.md
- **Netlify Support**: https://support.netlify.com

## Deployment Checklist

Before deploying:
- [ ] Code pushed to GitHub
- [ ] All tests passing locally
- [ ] Email credentials obtained
- [ ] netlify.toml configured
- [ ] package.json dependencies updated

After deploying:
- [ ] Build completed successfully
- [ ] Site loads without errors
- [ ] Contact form works
- [ ] Animations display correctly
- [ ] Email functionality verified
- [ ] Mobile responsive design works
- [ ] Custom domain connected (optional)

---

**Need help?** Check Netlify dashboard logs or contact Netlify support.
**Everything ready to deploy!** 🚀
