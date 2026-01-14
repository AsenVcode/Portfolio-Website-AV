# 🚀 Deploy IPTV Player to Vercel

## Quick Check: Is Your IPTV Project Web-Based?

Your IPTV project has:
- TypeScript 94.2%
- Java 2.6%
- CSS 1.7%
- JavaScript 1.3%
- HTML 0.2%

✅ This looks like a **web application** and CAN be deployed to Vercel!

---

## 📋 Before You Deploy

### Check Your IPTV Project Structure

Your project should have one of these:

**Option 1: React/Vite Project**
- ✅ Has `package.json`
- ✅ Has `src/` folder
- ✅ Has `index.html`

**Option 2: Next.js Project**
- ✅ Has `package.json`
- ✅ Has `pages/` or `app/` folder
- ✅ Has `next.config.js`

**Option 3: Plain HTML/JS**
- ✅ Has `index.html`
- ✅ Has JavaScript files

---

## 🚀 Deployment Steps

### Step 1: Push IPTV to GitHub (if not already)

If your IPTV repo is already on GitHub at `https://github.com/AsenVcode/IPTV-Player`, skip this step!

If not:
```bash
cd /path/to/IPTV-Player
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/AsenVcode/IPTV-Player.git
git push -u origin main
```

### Step 2: Deploy to Vercel

**Method A: From Vercel Dashboard (Recommended)**

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Find **"IPTV-Player"** in your repos
4. Click **"Import"**
5. Vercel will auto-detect the framework
6. Click **"Deploy"**

**Method B: From Command Line**

```bash
cd /path/to/IPTV-Player
vercel
```

### Step 3: Configure Build Settings (if needed)

Vercel usually auto-detects, but if it asks:

**For React/Vite:**
- Framework Preset: `Vite` or `Other`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**For Next.js:**
- Framework Preset: `Next.js`
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)

**For Plain HTML/JS:**
- Framework Preset: `Other`
- Build Command: (leave empty)
- Output Directory: `.` or `public`

### Step 4: Add Environment Variables (if needed)

If your IPTV app needs API keys or config:

1. Go to **Settings** → **Environment Variables**
2. Add any required variables
3. Redeploy

---

## 🎯 After Deployment

You'll get a URL like: `https://iptv-player.vercel.app`

### Update Your Portfolio

Add the IPTV live link to your portfolio:

```bash
cd /path/to/Portfolio-Website-AV
```

Edit `src/components/Projects.tsx`:

```typescript
{
  title: 'IPTV Player',
  description: 'Full-Stack IPTV Streaming Solution (Live Demo)',
  gradient: 'bg-gradient-to-br from-green-600 to-teal-600',
  technologies: ['TypeScript', 'Java', 'React', 'Node.js', 'CSS', 'REST API'],
  appStoreLink: 'https://iptv-player.vercel.app', // Add this!
  githubLink: 'https://github.com/AsenVcode/IPTV-Player',
  features: [
    '✅ Live demo on Vercel',
    'Full-stack TypeScript/Java architecture',
    'AI-powered content recommendations',
    'Subscription payment integration',
    'High-performance video streaming',
    'EPG (Electronic Program Guide) support',
  ],
},
```

Then:
```bash
git add src/components/Projects.tsx
git commit -m "feat: Add live IPTV demo link"
git push origin main
```

Vercel will auto-deploy your updated portfolio!

---

## 🎨 Rename Button Text

Update `src/components/ProjectCard.tsx` to show "Live Demo" instead of "App Store":

```typescript
{appStoreLink && (
  <a
    href={appStoreLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-2"
  >
    {title.includes('IPTV') ? '🎬 Live Demo' : (
      <>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        View on App Store
      </>
    )}
  </a>
)}
```

---

## 📊 Result: 2 Live Projects on Vercel!

After deployment, your portfolio will show:

**Portfolio Website**
- URL: `https://portfolio-website-av.vercel.app`
- Shows: Your info, projects, AI demo, Stripe

**Habitmate**
- URL: `https://apps.apple.com/...`
- Button: "View on App Store"
- Status: ✅ Live on App Store

**IPTV Player**
- URL: `https://iptv-player.vercel.app`
- Button: "Live Demo"
- Status: ✅ Live on Vercel

---

## 🎯 For Job Application

Now you can say:

✅ **Deployed Portfolio:** vercel.com  
✅ **Live Project 1:** Habitmate (App Store)  
✅ **Live Project 2:** IPTV Player (Vercel)  
✅ **AI + Payments:** Working demo in portfolio  

This is PERFECT for the job requirements! 🎉

---

## 🐛 Troubleshooting IPTV Deployment

### "No package.json found"
- Your project might not have a package.json
- Create one manually or it's not a Node.js project
- Might be pure HTML/JS - still deployable!

### "Build failed"
- Check build logs in Vercel
- Missing dependencies?
- Wrong build command?

### "404 on deploy"
- Check Output Directory setting
- Might be `dist`, `build`, `out`, or `.`

### Java Backend?
If your IPTV has a Java backend:
- Frontend → Deploy to Vercel ✅
- Backend → Deploy to Railway, Heroku, or AWS
- Or use Vercel Serverless Functions (Node.js)

---

## 💡 Alternative: If IPTV Has Java Backend

**Option 1: Deploy Frontend Only**
- Deploy React/TypeScript frontend to Vercel
- Keep Java backend local for demo
- Show frontend UI only

**Option 2: Split Deployment**
- Frontend → Vercel
- Backend → Railway.app (free tier)
- Connect them with CORS

**Option 3: Show GitHub Code**
- Don't deploy IPTV
- Link to GitHub repo only
- Explain it's full-stack with backend

---

## ✅ Quick Checklist

- [ ] IPTV repo on GitHub
- [ ] Import project to Vercel
- [ ] Wait for deployment
- [ ] Test the deployed URL
- [ ] Update portfolio with live link
- [ ] Push portfolio changes
- [ ] Both projects live!

---

**Ready?** Go to https://vercel.com and import your IPTV-Player repo! 🚀
