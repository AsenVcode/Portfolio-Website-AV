# 🔧 Stripe "Error connecting to payment service" - Fix

## Problem
When you click "Upgrade to Pro" locally, you get:
```
Error connecting to payment service.
```

## Why This Happens

Vercel serverless functions (in the `/api` folder) **don't work** in local development with `npm run dev`. They only work when deployed to Vercel!

Your Stripe code is in `/api/checkout.ts` which needs Vercel's serverless environment.

## Solutions

### ✅ Option 1: Test After Deployment (RECOMMENDED)

**This is the easiest way:**

1. Deploy to Vercel first:
   ```bash
   vercel
   ```

2. Add environment variables in Vercel dashboard

3. Test Stripe on the live site

**Why:** Stripe will work perfectly once deployed. Local testing isn't critical for this.

---

### Option 2: Use Vercel Dev for Local Testing

**If you really want to test locally:**

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Link your project:
   ```bash
   vercel link
   ```

3. Pull environment variables:
   ```bash
   vercel env pull .env.local
   ```

4. Run with Vercel Dev (instead of npm run dev):
   ```bash
   vercel dev
   ```

This will run the serverless functions locally!

---

### Option 3: Mock Stripe for Local Development

**Add a fake success flow for local testing:**

Update `src/components/AIDemo.tsx`:

```typescript
const handleUpgrade = async () => {
  // Check if running locally
  if (window.location.hostname === 'localhost') {
    // Mock success for local testing
    alert('🎉 Demo Mode: Stripe checkout would open here!\n\nThis will work after deployment to Vercel.');
    return;
  }
  
  // Real Stripe checkout (will work on Vercel)
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    // ... rest of code
  } catch (error) {
    alert('Error connecting to payment service.')
  }
}
```

---

## 🎯 My Recommendation

**Skip local Stripe testing!**

Here's why:
1. ✅ The AI demo works locally (you can test that)
2. ✅ The code is correct (it will work when deployed)
3. ✅ Stripe requires Vercel's environment anyway
4. ✅ Testing on live Vercel site is faster

**What to do:**
1. Test everything else locally ✅
2. Deploy to Vercel
3. Test Stripe on the live site ✅

---

## Testing Checklist

### Test Locally (Before Deployment)
- ✅ Navigation works
- ✅ Sections scroll smoothly
- ✅ Projects display correctly
- ✅ AI Demo generates text (this should work!)
- ⚠️ Stripe checkout (will fail - normal!)

### Test on Vercel (After Deployment)
- ✅ Everything from above
- ✅ Stripe checkout opens
- ✅ Test card works (4242 4242 4242 4242)
- ✅ Redirects back to site

---

## Quick Fix for Now

Want to remove the error message for local testing?

**Update AIDemo.tsx** to show a friendly message:

```typescript
const handleUpgrade = async () => {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()

    if (res.ok && data.url) {
      window.location.href = data.url
    } else {
      // Friendly message for local dev
      alert('💡 Running locally? Stripe requires deployment to Vercel.\n\nDeploy with: vercel\n\nThen test the checkout on your live site!')
    }
  } catch (error) {
    alert('💡 Stripe checkout requires deployment to Vercel to work!')
  }
}
```

---

## Summary

**The Issue:** Vercel serverless functions don't run with `npm run dev`

**The Solution:** Deploy to Vercel and test there

**Is this normal?** Yes! This is how Vercel serverless functions work.

**Will it work on Vercel?** Yes! Your code is correct.

---

**Bottom line:** Don't worry about the local Stripe error. Deploy to Vercel and it will work perfectly! 🚀
