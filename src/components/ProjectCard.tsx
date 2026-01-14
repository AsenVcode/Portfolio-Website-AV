import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  appStoreLink?: string
  githubLink: string
  features: string[]
  gradient: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  appStoreLink,
  githubLink,
  features,
  gradient,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="card-gradient rounded-xl overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 shadow-xl"
    >
      {/* Header with Gradient */}
      <div className={`${gradient} p-6 text-center`}>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-100">{description}</p>
      </div>

      <div className="p-6">
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-gray-400">
                <svg
                  className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-primary-400 rounded-full text-sm font-medium border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {appStoreLink && (
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-2"
            >
              {title.includes('IPTV') ? (
                <>
                  🎬 Live Demo
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  View on App Store
                </>
              )}
            </a>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${appStoreLink ? 'flex-1' : 'flex-1'} px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-2`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            GitHub {title.includes('IPTV') ? '(Private)' : ''}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
