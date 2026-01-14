# 🚀 Quick Start Guide - Asen Vapordzhiev

## Step 1: Create .env File

Create a file named `.env` in the root directory with this content:

```env
# OpenAI API Key (get from https://platform.openai.com/api-keys)
VITE_OPENAI_API_KEY=your_openai_api_key_here

# Stripe Keys (get from https://dashboard.stripe.com/test/apikeys)
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# App URL
VITE_APP_URL=http://localhost:5173
```

## Step 2: Run the Project

Open PowerShell or Command Prompt and run:

```bash
# Start the development server
npm run dev
```

You should see output like:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 3: Open in Browser

Open your browser and go to:
```
http://localhost:5173
```

## ✅ What to Test

1. **Navigation** - Click menu items, they should scroll smoothly
2. **Projects Section** - See your Habit Flow and IPTV Player apps
3. **AI Demo** - 
   - Enter a prompt like "Write a motivational quote"
   - Click "Generate with AI"
   - You should get a response from OpenAI
4. **Stripe Checkout** -
   - Click "Upgrade to Pro"
   - Should open Stripe checkout
   - Use test card: 4242 4242 4242 4242
   - Any future date, any CVC

## 🎨 What's Been Updated

✅ Your name: Asen Vapordzhiev
✅ Your email: avapordzhiev@gmail.com
✅ OpenAI API key configured
✅ Stripe keys configured

## 🐛 If You Get Errors

**"Module not found" error:**
```bash
npm install
```

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**AI demo not working:**
- Make sure .env file is created in the root directory
- Make sure API keys are correct (no extra spaces)

## 📱 Test on Mobile

While the dev server is running:
1. Find your computer's IP address
2. On your phone, go to: `http://YOUR_IP:5173`

## 🌐 Ready to Deploy?

Once testing looks good:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Then add the same environment variables in Vercel dashboard!

---

**Need help?** Check DEPLOYMENT.md for detailed deployment instructions.
