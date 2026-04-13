# Quick Start Guide

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up email (optional for testing)
# Copy .env.local and add:
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASSWORD=your_app_password

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:3000
```

## Deploy to Netlify (Easiest)

### Method 1: Netlify UI (Recommended for Beginners)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Connect GitHub account and select repo
5. Build settings are auto-detected
6. Add environment variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASSWORD`: Gmail app password
7. Click "Deploy"

### Method 2: CLI (For Developers)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Email Setup (One-Time)

### Gmail (Recommended)
1. https://myaccount.google.com/apppasswords
2. Select Mail → Device
3. Copy 16-character password
4. Add to Netlify environment variables:
   - `EMAIL_USER=agathamudivijay2002@gmail.com`
   - `EMAIL_PASSWORD=<your_app_password>`

## File Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── send-email/      # Email API route
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── sections/             # Page sections
├── netlify.toml             # Netlify config (auto-setup)
├── package.json
└── DEPLOY_NETLIFY.md        # Full deployment guide
```

## What's Included

✅ Responsive design  
✅ Smooth animations  
✅ Contact form with email sending  
✅ Orbital hero image  
✅ Mobile-optimized  
✅ Fast performance  
✅ SEO-friendly  

## Next Steps

1. **Customize Content**
   - Edit text in components/sections/
   - Replace image in hero-new.tsx
   - Update contact email (app/api/send-email/route.ts)

2. **Deploy**
   - Push to GitHub
   - Connect to Netlify
   - Add email environment variables
   - Done! 🚀

3. **Monitor**
   - Check Netlify dashboard for deploys
   - View function logs for email issues
   - Monitor performance metrics

## Issues?

- **Build Error?** See DEPLOY_NETLIFY.md → Troubleshooting
- **Email Not Sending?** Check SETUP_EMAIL.md
- **Design Questions?** All animations in app/globals.css

## Support Files

- `DEPLOY_NETLIFY.md` - Full deployment guide
- `SETUP_EMAIL.md` - Email configuration guide
- `netlify.toml` - Netlify build configuration
- `.env.local` - Environment variables (local only)

---

**Want to deploy now?**
→ See Method 1 above (takes 5 minutes)

**Questions?**
→ Check the detailed guides in the repository

**Ready to go live!** 🎉
