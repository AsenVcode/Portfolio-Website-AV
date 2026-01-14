# Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Instant Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env

# 3. Add your API keys to .env file
# (Get keys from the links below)

# 4. Start development server
npm run dev
```

Your portfolio will be running at http://localhost:5173

## 🔑 Where to Get API Keys

### OpenAI (Required for AI Demo)
1. Go to https://platform.openai.com/api-keys
2. Create account → Create new secret key
3. Copy to `.env` as `VITE_OPENAI_API_KEY`

### Stripe (Required for Payments)
1. Go to https://dashboard.stripe.com/test/apikeys
2. Make sure you're in **TEST MODE**
3. Copy both Publishable and Secret keys to `.env`

## 📝 Customize Your Portfolio

### 1. Update Personal Info

**src/components/Hero.tsx**
```typescript
<h1>Hi, I'm <span>Your Name</span></h1>
<p>Your Title</p>
```

**src/components/Contact.tsx**
```typescript
<a href="mailto:your.email@example.com">
```

### 2. Update App Links

**src/components/Projects.tsx**
- Update App Store links when your apps are published
- Update descriptions and features

### 3. Add Your Photos/Screenshots

```bash
# Create assets folder
mkdir -p public/assets

# Add your app screenshots:
# - public/assets/habit-flow-1.png
# - public/assets/iptv-player-1.png
```

## 🧪 Testing Locally

### Test AI Demo
1. Go to "Live AI Demo" section
2. Enter a prompt
3. Click "Generate with AI"
4. Should get AI response

### Test Stripe Payments
1. Click "Upgrade to Pro"
2. Use test card: `4242 4242 4242 4242`
3. Any future date, any CVC
4. Should redirect back to your site

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# Then redeploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📦 Project Structure

```
Portfolio-Website-AV/
├── src/
│   ├── components/      # React components
│   ├── App.tsx         # Main app
│   └── main.tsx        # Entry point
├── api/                # Vercel serverless functions
│   ├── generate.ts     # OpenAI integration
│   └── checkout.ts     # Stripe integration
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    // ...
  },
}
```

### Change Fonts
Edit `tailwind.config.js` and update Google Fonts link in `index.html`

### Add More Sections
Create new component in `src/components/` and import in `App.tsx`

## ✅ Checklist Before Job Application

- [ ] All personal info updated
- [ ] App Store links added (when available)
- [ ] Contact information correct
- [ ] AI demo working
- [ ] Stripe checkout working
- [ ] Mobile responsive (test on phone)
- [ ] Deployed to Vercel
- [ ] Custom domain (optional but recommended)
- [ ] No console errors
- [ ] Fast loading time

## 🐛 Common Issues

**"AI service not configured"**
→ Add `VITE_OPENAI_API_KEY` to `.env`

**"Payment service not configured"**
→ Add `STRIPE_SECRET_KEY` to `.env`

**Port already in use**
→ `npm run dev -- --port 3000`

**Build errors**
→ `rm -rf node_modules && npm install`

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Docs](https://vercel.com/docs)

## 💡 Next Steps

1. ✅ Test everything locally
2. ✅ Deploy to Vercel
3. ✅ Add custom domain
4. ✅ Share with employers!

---

Need help? Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment guide.
