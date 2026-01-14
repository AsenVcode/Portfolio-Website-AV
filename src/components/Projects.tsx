import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import IPTVInfo from './IPTVInfo'

const Projects = () => {
  const projects = [
    {
      title: 'Habitmate - Habit Tracker',
      description: 'Build Your Daily Habits - Live on App Store',
      gradient: 'bg-gradient-to-br from-blue-600 to-purple-600',
      technologies: ['Swift', 'SwiftUI', 'In-App Purchases', 'Apple Payments', 'HealthKit'],
      appStoreLink: 'https://apps.apple.com/us/app/habitmate-habit-tracker/id6757446319',
      githubLink: 'https://github.com/AsenVcode/Habit-flow',
      features: [
        '✅ Live on Apple App Store (US & select countries)',
        'Simple & beautiful habit tracking interface',
        'Streak tracking to build momentum',
        'Smart reminders to stay on track',
        'Achievement badges and milestone celebrations',
        'Premium features: Unlimited habits, advanced stats, custom themes',
        'Note: App Store availability varies by region',
      ],
    },
    {
      title: 'IPTV Player',
      description: '🎬 Live Web Demo - Full-Stack IPTV Streaming',
      gradient: 'bg-gradient-to-br from-green-600 to-teal-600',
      technologies: ['TypeScript', 'React', 'Video.js', 'HLS', 'M3U8', 'REST API'],
      appStoreLink: 'https://iptv-player-web-jade.vercel.app/',
      githubLink: 'https://github.com/AsenVcode/IPTV-Player',
      features: [
        '✅ Live demo deployed on Vercel',
        'Try it: Paste playlist URL from iptv-org.github.io',
        'Full-stack TypeScript/React architecture',
        'HLS video streaming with adaptive quality',
        'M3U8 playlist support',
        'Clean, modern UI with video player controls',
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            iOS applications integrating AI technology and subscription-based payment systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* IPTV Demo Instructions */}
        <IPTVInfo />
      </div>
    </section>
  )
}

export default Projects
