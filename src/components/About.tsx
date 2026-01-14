import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { name: 'Swift', icon: '🔷' },
    { name: 'SwiftUI', icon: '📱' },
    { name: 'AI APIs', icon: '🤖' },
    { name: 'iOS Development', icon: '🍎' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '💙' },
    { name: 'Stripe Payments', icon: '💳' },
    { name: 'Firebase', icon: '🔥' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with expertise in iOS development and AI integration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Building the Future, One App at a Time
            </h3>
            <p className="text-gray-400 mb-4">
              I'm a dedicated iOS developer with a passion for creating innovative mobile applications 
              that leverage cutting-edge AI technology. My apps are designed to solve real-world problems 
              and provide exceptional user experiences.
            </p>
            <p className="text-gray-400 mb-4">
              With expertise in Swift, SwiftUI, and AI API integration, I've successfully launched apps 
              on the App Store that combine beautiful design with powerful functionality. I'm also 
              expanding into web development with React and TypeScript.
            </p>
            <p className="text-gray-400">
              Currently working on exciting projects that integrate subscription-based payments with 
              AI-powered features, delivering value to users while building sustainable products.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="card-gradient p-4 rounded-lg border border-gray-700 text-center hover:border-primary-500 transition-all duration-200 cursor-default"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-gray-300 font-medium">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
