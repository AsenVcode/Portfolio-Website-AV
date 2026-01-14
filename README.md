# Portfolio Website - Asen V

A modern, professional portfolio website showcasing iOS applications with AI integration and subscription-based payment systems. Built with React, TypeScript, and Tailwind CSS, featuring a live AI demo with Stripe integration.

## 🚀 Features

- **Responsive Design** - Beautiful UI that works on all devices
- **iOS App Showcase** - Detailed presentation of Habit Flow and IPTV Player
- **Live AI Demo** - Interactive AI content generator powered by OpenAI
- **Stripe Integration** - Subscription payment system (test mode)
- **Smooth Animations** - Framer Motion animations throughout
- **Modern Tech Stack** - React, TypeScript, Tailwind CSS, Vite

## 📋 Projects Showcased

### Habit Flow
- AI-powered habit tracking iOS app
- Apple subscription-based premium features
- Built with Swift and SwiftUI
- [App Store Link](https://apps.apple.com/app/habit-flow) | [GitHub](https://github.com/AsenVcode/Habit-flow)

### IPTV Player
- Advanced IPTV streaming solution
- Google Play subscription integration
- AI-powered content recommendations
- [GitHub](https://github.com/AsenVcode/IPTV-Player)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **API Integration**: OpenAI API
- **Payments**: Stripe
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AsenVcode/Portfolio-Website-AV.git
cd Portfolio-Website-AV
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Add your API keys to `.env`:
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
VITE_APP_URL=http://localhost:5173
```

## 🔑 Getting API Keys

### OpenAI API Key
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste into `.env`

### Stripe Keys (Test Mode)
1. Go to [stripe.com](https://stripe.com)
2. Sign up or log in
3. Make sure you're in **Test Mode** (toggle in dashboard)
4. Go to Developers → API Keys
5. Copy the **Publishable key** and **Secret key**
6. Paste into `.env`

## 🚀 Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env`

### Option 2: Deploy with GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables
6. Click "Deploy"

### Important: Environment Variables on Vercel

Make sure to add these environment variables in your Vercel project settings:
- `VITE_OPENAI_API_KEY`
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `VITE_APP_URL` (your Vercel deployment URL)

## 📝 Customization

### Update Personal Information

1. **Contact Info** - Edit `src/components/Contact.tsx`
   - Update email, GitHub, LinkedIn links

2. **Hero Section** - Edit `src/components/Hero.tsx`
   - Change name, title, and description

3. **About Section** - Edit `src/components/About.tsx`
   - Update bio and skills

4. **App Store Links** - Edit `src/components/Projects.tsx`
   - Update App Store links when apps are published

### Add Screenshots

1. Create `public/assets/` folder
2. Add app screenshots:
   - `habit-flow-screenshot.png`
   - `iptv-player-screenshot.png`
3. Update ProjectCard components to display images

## 🧪 Testing AI Demo

The AI demo includes:
- **Free Tier**: 3 generations per session
- **Pro Tier**: Unlimited generations (via Stripe subscription)
- **Test Mode**: Stripe is configured for test mode - no real charges

To test payments:
- Use test card: `4242 4242 4242 4242`
- Any future expiry date
- Any CVC code

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and pull requests.

## 📧 Contact

- **Email**: avapordzhiev@gmail.com
- **GitHub**: [@AsenVcode](https://github.com/AsenVcode)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/your-profile)

---

Built with ❤️ by Asen Vapordzhiev
