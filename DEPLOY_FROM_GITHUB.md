# 🚀 Deploy Your Portfolio from GitHub to Vercel

## ✅ Step-by-Step Deployment

### Step 1: Go to Vercel

Open your browser and go to: **https://vercel.com**

### Step 2: Sign Up / Sign In

- Click **"Sign Up"** (or "Log In" if you have an account)
- Choose **"Continue with GitHub"**
- Authorize Vercel to access your GitHub

### Step 3: Import Your Repository

1. Click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find **"Portfolio-Website-AV"**
4. Click **"Import"**

### Step 4: Configure Project

Vercel will auto-detect it's a Vite project. You'll see:

```
Framework Preset: Vite
Build Command: vite build
Output Directory: dist
Install Command: npm install
```

✅ **Leave these as default** - they're correct!

Click **"Deploy"** (don't add environment variables yet)

### Step 5: Wait for Build

You'll see a build screen with logs. This takes 1-2 minutes.

When done, you'll see: **"🎉 Congratulations!"**

You'll get a URL like: `https://portfolio-website-av.vercel.app`

### Step 6: Add Environment Variables

⚠️ **IMPORTANT:** Your AI demo and Stripe won't work yet!

1. Click **"Continue to Dashboard"**
2. Go to **"Settings"** tab
3. Click **"Environment Variables"** in sidebar
4. Add these variables:

#### Variable 1: OpenAI API Key
- **Name:** `VITE_OPENAI_API_KEY`
- **Value:** Your OpenAI key (starts with sk-proj-...)
- **Environments:** Check all 3 (Production, Preview, Development)
- Click **"Save"**

#### Variable 2: Stripe Publishable Key
- **Name:** `VITE_STRIPE_PUBLISHABLE_KEY`
- **Value:** Your Stripe key (starts with pk_test_...)
- **Environments:** Check all 3
- Click **"Save"**

#### Variable 3: Stripe Secret Key
- **Name:** `STRIPE_SECRET_KEY`
- **Value:** Your Stripe key (starts with sk_test_...)
- **Environments:** Check all 3
- Click **"Save"**

#### Variable 4: App URL
- **Name:** `VITE_APP_URL`
- **Value:** Your Vercel URL (e.g., `https://portfolio-website-av.vercel.app`)
- **Environments:** Check Production only
- Click **"Save"**

### Step 7: Redeploy

After adding environment variables:

1. Go to **"Deployments"** tab
2. Click the **three dots (...)** on your latest deployment
3. Click **"Redeploy"**
4. Click **"Redeploy"** again to confirm

Wait 1-2 minutes for the new deployment.

### Step 8: Test Your Portfolio!

Visit your Vercel URL and test:

#### ✅ Navigation
- Click menu items
- Should scroll smoothly

#### ✅ Projects Section  
- Click "View on App Store" for Habitmate
- Should open: https://apps.apple.com/us/app/habitmate-habit-tracker/id6757446319
- Click GitHub links
- Should open your repos

#### ✅ AI Demo
- Scroll to "Live AI Demo"
- Enter a prompt: "Write a motivational quote"
- Click "Generate with AI"
- Should get AI response ✅

#### ✅ Stripe Checkout
- Click "Upgrade to Pro"
- Should open Stripe checkout ✅
- Test card: `4242 4242 4242 4242`
- Expiry: Any future date (12/25)
- CVC: Any 3 digits (123)
- Click "Subscribe"
- Should redirect back to your site ✅

---

## 🎯 Your Deployment URLs

After deployment, you'll have:

**Portfolio:** `https://portfolio-website-av.vercel.app` (or similar)
- Click "View on App Store" → Opens Habitmate on App Store ✅
- AI Demo works ✅
- Stripe Checkout works ✅

**Habitmate:** Already on App Store! ✅
- https://apps.apple.com/us/app/habitmate-habit-tracker/id6757446319

---

## 🔄 Future Updates

When you make changes:

1. **Edit your code locally**
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Updated features"
   ```
3. **Push to GitHub:**
   ```bash
   git push origin main
   ```
4. **Vercel automatically deploys!** ✅

No need to redeploy manually - Vercel watches your GitHub repo!

---

## 🌟 Custom Domain (Optional)

Want `asenvapordzhiev.com` instead of `.vercel.app`?

1. Buy domain from Namecheap, Google Domains, etc.
2. In Vercel: **Settings** → **Domains**
3. Click **"Add"**
4. Enter your domain
5. Follow DNS instructions
6. Update `VITE_APP_URL` to your domain

---

## 📊 Monitoring

Check your deployment:
- **Deployments Tab:** See all deployments
- **Analytics Tab:** See visitor stats (free!)
- **Logs Tab:** Debug any issues

---

## 🐛 Troubleshooting

### AI Demo shows error
- Check `VITE_OPENAI_API_KEY` is set
- Check OpenAI account has credits
- Check you redeployed after adding variables

### Stripe doesn't work
- Check all Stripe keys are from TEST mode
- Check `VITE_APP_URL` matches your Vercel URL
- Check you redeployed after adding variables

### Build fails
- Check build logs in Vercel dashboard
- Common issue: Missing dependencies (should be fine)

---

## ✅ Checklist

Before sharing your portfolio:

- [ ] Deployed to Vercel
- [ ] Environment variables added
- [ ] Redeployed after adding variables
- [ ] AI demo works
- [ ] Stripe checkout works
- [ ] App Store link works
- [ ] All sections load correctly
- [ ] Tested on mobile

---

## 🎉 You're Live!

Share your portfolio URL:
- ✅ On your resume
- ✅ On LinkedIn profile
- ✅ In job applications
- ✅ On business cards

**Your portfolio showcases:**
- Modern web development skills ✅
- Real iOS app on App Store ✅
- AI integration ✅
- Payment processing ✅
- Professional design ✅

---

**Questions?** Check the other guides:
- DEPLOYMENT.md - Detailed deployment info
- JOB_APPLICATION_CHECKLIST.md - Application prep
- STRIPE_LOCAL_FIX.md - Stripe troubleshooting

**Ready to deploy?** Go to https://vercel.com and follow the steps above! 🚀
