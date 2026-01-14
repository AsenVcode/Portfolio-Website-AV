import { useState } from 'react'
import { motion } from 'framer-motion'

const AIDemo = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [usageCount, setUsageCount] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  const FREE_LIMIT = 3

  // Check for Stripe success on component mount
  useState(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true)
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname)
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }, [])

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setResponse('Please enter a prompt to generate content.')
      return
    }

    // Check if user has reached free limit
    if (!isPro && usageCount >= FREE_LIMIT) {
      setShowPaywall(true)
      return
    }

    setLoading(true)
    setResponse('')

    try {
      // Call the Vercel serverless function
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()

      if (res.ok) {
        setResponse(data.response)
        if (!isPro) {
          setUsageCount(usageCount + 1)
        }
      } else {
        setResponse(`Error: ${data.error || 'Failed to generate content'}`)
      }
    } catch (error) {
      setResponse('Error: Failed to connect to AI service. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleUpgrade = async () => {
    // Check if running locally (Stripe won't work until deployed)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      alert('💡 Local Development Mode\n\n' +
            'Stripe checkout requires deployment to Vercel to work!\n\n' +
            '✅ The code is ready\n' +
            '✅ Deploy with: vercel\n' +
            '✅ Test on your live site\n\n' +
            'Everything else works locally - feel free to test the AI demo!')
      return
    }

    try {
      // Call Stripe checkout endpoint
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (res.ok && data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url
      } else {
        alert('Failed to initiate checkout. Please try again.')
      }
    } catch (error) {
      alert('Error connecting to payment service. Please try again later.')
    }
  }

  return (
    <section id="demo" className="py-20 bg-gray-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Live AI Demo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Try our AI-powered content generator with Stripe subscription integration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-gradient rounded-xl p-8 border border-gray-700"
        >
          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center gap-3"
            >
              <span className="text-2xl">🎉</span>
              <div>
                <h4 className="text-white font-semibold">Payment Successful!</h4>
                <p className="text-green-300 text-sm">
                  Thanks for testing the Stripe integration. In production, you'd now have Pro access!
                </p>
              </div>
            </motion.div>
          )}

          {/* Pro Status Banner */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Status:</span>
              {isPro ? (
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-full text-sm font-semibold">
                  ⭐ Pro Member
                </span>
              ) : (
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  Free ({usageCount}/{FREE_LIMIT} uses)
                </span>
              )}
            </div>
            {!isPro && (
              <button
                onClick={() => setShowPaywall(true)}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Upgrade to Pro
              </button>
            )}
          </div>

          {/* Input Section */}
          <div className="mb-6">
            <label htmlFor="prompt" className="block text-white font-semibold mb-2">
              Enter your prompt:
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Write a motivational quote about productivity..."
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors min-h-[100px]"
              disabled={loading}
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 mb-6"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating...
              </span>
            ) : (
              'Generate with AI'
            )}
          </button>

          {/* Response Section */}
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg"
            >
              <h3 className="text-white font-semibold mb-2">AI Response:</h3>
              <p className="text-gray-300 whitespace-pre-wrap">{response}</p>
            </motion.div>
          )}

          {/* Paywall Modal */}
          {showPaywall && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setShowPaywall(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gray-800 rounded-xl p-8 max-w-md w-full border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Upgrade to Pro
                  </h3>
                  <p className="text-gray-400 mb-6">
                    You've reached your free limit. Upgrade to Pro for unlimited AI generations!
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
                    <div className="text-4xl font-bold gradient-text mb-2">$9.99/mo</div>
                    <ul className="text-left space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Unlimited AI generations
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Priority support
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Advanced AI models
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowPaywall(false)}
                      className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200"
                    >
                      Maybe Later
                    </button>
                    <button
                      onClick={handleUpgrade}
                      className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200"
                    >
                      Upgrade Now
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Test mode - no real charges</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-4 bg-primary-900/20 border border-primary-700 rounded-lg text-center"
        >
          <p className="text-primary-300 text-sm">
            💡 This demo showcases AI API integration (OpenAI) with Stripe payment processing in test mode
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AIDemo
