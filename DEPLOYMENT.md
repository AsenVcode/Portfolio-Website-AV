# Deployment Guide - Portfolio Website

This guide will walk you through deploying your portfolio to Vercel.

## Prerequisites

Before deploying, make sure you have:

1. ✅ A Vercel account ([signup at vercel.com](https://vercel.com/signup))
2. ✅ An OpenAI API key ([get it here](https://platform.openai.com/api-keys))
3. ✅ Stripe API keys in test mode ([get them here](https://dashboard.stripe.com/test/apikeys))
4. ✅ Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Get Your API Keys

### OpenAI API Key

1. Go to https://platform.openai.com
2. Sign in or create an account
3. Click on your profile → "View API Keys"
4. Click "Create new secret key"
5. **Copy the key immediately** (you won't see it again!)
6. Save it somewhere safe

### Stripe API Keys (Test Mode)

1. Go to https://dashboard.stripe.com
2. Sign in or create an account
3. **Make sure you're in TEST MODE** (toggle in the top right)
4. Go to "Developers" → "API keys"
5. You'll see:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (click "Reveal" - starts with `sk_test_`)
6. Copy both keys

## Step 2: Push Your Code to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-Website-AV.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Vercel will automatically detect it's a Vite project
6. Click **"Deploy"** (we'll add environment variables next)

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? [Select your account]
# - Link to existing project? N
# - What's your project's name? portfolio-website-av
# - In which directory is your code located? ./
# - Want to override the settings? N
```

## Step 4: Add Environment Variables to Vercel

This is **CRITICAL** - the AI demo and Stripe won't work without these!

1. Go to your project in Vercel dashboard
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in the sidebar
4. Add each variable:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `VITE_OPENAI_API_KEY` | Your OpenAI API key | Production, Preview, Development |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key (pk_test_...) | Production, Preview, Development |
| `STRIPE_SECRET_KEY` | Your Stripe secret key (sk_test_...) | Production, Preview, Development |
| `VITE_APP_URL` | Your Vercel URL (e.g., https://your-site.vercel.app) | Production |

**Important Notes:**
- Make sure to check all three environments (Production, Preview, Development)
- For `VITE_APP_URL`, use your actual Vercel deployment URL
- Don't include quotes around the values

## Step 5: Redeploy

After adding environment variables:

1. Go to the **"Deployments"** tab
2. Click the three dots (...) on your latest deployment
3. Click **"Redeploy"**
4. Click **"Redeploy"** again to confirm

## Step 6: Test Your Deployment

1. Visit your deployed site (e.g., `https://your-project.vercel.app`)
2. Test the AI Demo:
   - Enter a prompt
   - Click "Generate with AI"
   - You should get a response
3. Test Stripe:
   - Click "Upgrade to Pro" in the demo
   - You should be redirected to Stripe checkout
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date and any CVC

## Troubleshooting

### AI Demo Not Working

**Error: "AI service not configured"**
- Check that `VITE_OPENAI_API_KEY` is set correctly in Vercel
- Make sure you redeployed after adding the variable
- Verify your OpenAI API key is valid and has credits

**Error: 429 or rate limit**
- You've exceeded OpenAI's free tier rate limit
- Add credits to your OpenAI account or wait for the limit to reset

### Stripe Not Working

**Error: "Payment service not configured"**
- Check that `STRIPE_SECRET_KEY` and `VITE_STRIPE_PUBLISHABLE_KEY` are set
- Make sure both keys are from **TEST MODE**
- Redeploy after adding variables

**Checkout not loading**
- Check `VITE_APP_URL` matches your actual Vercel URL
- Make sure URL doesn't have trailing slash

### General Issues

**Changes not showing up**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check you're viewing the latest deployment in Vercel dashboard

**Build failing**
- Check the build logs in Vercel
- Make sure all dependencies are in `package.json`
- Verify there are no TypeScript errors locally: `npm run build`

## Custom Domain (Optional)

Want a custom domain like `yourname.com`?

1. Buy a domain (from Namecheap, Google Domains, etc.)
2. In Vercel dashboard → **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Enter your domain
5. Follow Vercel's instructions to update DNS settings
6. Wait for DNS propagation (can take up to 48 hours)
7. Update `VITE_APP_URL` environment variable to your custom domain

## Performance Optimization

Your site should score 90+ on all Lighthouse metrics! To verify:

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Check Performance, Accessibility, Best Practices, SEO

## Next Steps

✅ Share your portfolio URL with potential employers
✅ Add to your resume and LinkedIn
✅ Monitor usage in OpenAI and Stripe dashboards
✅ Consider adding analytics (Vercel Analytics is free!)

## Support

If you run into issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Check [OpenAI Documentation](https://platform.openai.com/docs)
- Check [Stripe Documentation](https://stripe.com/docs)

---

**Congratulations! Your portfolio is now live! 🎉**

Share it: `https://your-project.vercel.app`
