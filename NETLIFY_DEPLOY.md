# Deploy to Netlify - Quick Start Guide

## Option 1: Deploy with GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your portfolio repository
   - Click "Deploy site"

3. **That's it!** Netlify will automatically build and deploy on every push.

## Option 2: Deploy Manually (Drag & Drop)

1. **Build the project locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the `.next` folder**
   - Go to https://app.netlify.com
   - Drag and drop the `.next` folder
   - Your site is live!

## Option 3: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=.next
   ```

## Environment Setup

No environment variables needed for this portfolio! It's completely static.

## Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Lint code
```

## Color Scheme (Blue Theme)

- **Background**: `#0a1628` (Dark Navy)
- **Primary**: `#0066ff` (Bright Blue)
- **Accent**: `#00d4ff` (Cyan)
- **Foreground**: `#e0e0e0` (Light Gray)

## Features

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Smooth animations and transitions
- ✅ Circular profile photo with animated rings
- ✅ Timeline flowchart education section
- ✅ Skill progress bars
- ✅ Contact form
- ✅ SEO optimized
- ✅ Dark blue theme
- ✅ No external dependencies required

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Netlify (Next.js compatible)

## Customization

Edit the following files to customize:

- `components/sections/hero.tsx` - Hero section & photo
- `components/sections/about.tsx` - About section
- `components/sections/experience.tsx` - Work experience
- `components/sections/skills.tsx` - Skills section
- `components/sections/projects.tsx` - Projects showcase
- `components/sections/education.tsx` - Education timeline
- `components/sections/contact.tsx` - Contact form

## Support

For Netlify deployment issues, visit: https://docs.netlify.com/
