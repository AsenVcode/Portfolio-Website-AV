import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in working together? Let's connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Email */}
          <motion.a
            href="mailto:avapordzhiev@gmail.com"
            whileHover={{ y: -5 }}
            className="card-gradient p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-200 text-center group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
              📧
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm">avapordzhiev@gmail.com</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/AsenVcode"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="card-gradient p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-200 text-center group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-12 h-12 mx-auto text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">@AsenVcode</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/asen-vapordzhiev-9aa301277/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="card-gradient p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-200 text-center group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
              💼
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Asen Vapordzhiev</p>
          </motion.a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Available for freelance opportunities and collaborations
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
