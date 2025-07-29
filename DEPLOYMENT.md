# Portfolio Deployment Guide

## Build and Deploy

### 1. Build the Project

```bash
npm run build
```

### 2. Test the Production Build Locally

```bash
npm start
```

### 3. Deploy Options

#### Option A: Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

#### Option B: Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy from Git repository

#### Option C: Manual Deployment

1. Run `npm run build`
2. Upload the `.next` folder and `public` folder to your hosting provider
3. Configure your server to run `npm start`

## Environment Variables

No environment variables are required for this project.

## Performance Optimizations

-   ✅ Images optimized with WebP/AVIF formats
-   ✅ Security headers configured
-   ✅ Compression enabled
-   ✅ Unused code removed
-   ✅ SEO files (robots.txt, sitemap.xml) added

## File Structure

```
portfolioxx/
├── src/app/           # Next.js app directory
├── public/            # Static assets
├── .next/             # Build output (generated)
└── package.json       # Dependencies and scripts
```

## Build Output

-   Main page: 12.7 kB
-   Total JS: 112 kB
-   Static generation enabled
-   All pages pre-rendered
