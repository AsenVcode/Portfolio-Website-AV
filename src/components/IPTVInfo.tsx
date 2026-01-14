import { motion } from 'framer-motion'

const IPTVInfo = () => {
  const playlistUrl = 'https://iptv-org.github.io/iptv/languages/eng.m3u'

  const handleCopyPlaylist = () => {
    navigator.clipboard.writeText(playlistUrl)
    alert('✅ Playlist URL copied! Paste it in the IPTV Player demo.')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 p-6 bg-green-900/20 border border-green-700 rounded-lg"
    >
      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
        <span>🎬</span> Try the IPTV Player Demo
      </h3>
      <p className="text-gray-300 mb-4">
        The IPTV Player is live and ready to test! Use this free public playlist to see it in action:
      </p>
      
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
        <p className="text-xs text-gray-400 mb-2">Sample Playlist URL:</p>
        <div className="flex gap-2 items-center">
          <code className="text-green-400 text-sm flex-1 break-all">
            {playlistUrl}
          </code>
          <button
            onClick={handleCopyPlaylist}
            className="px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded transition-colors duration-200 whitespace-nowrap"
          >
            📋 Copy
          </button>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-300">
        <p><strong>How to test:</strong></p>
        <ol className="list-decimal list-inside space-y-1 ml-2">
          <li>Click the "🎬 Live Demo" button above</li>
          <li>Copy the playlist URL (or click the Copy button above)</li>
          <li>Paste it into the IPTV Player</li>
          <li>Select a channel and start watching!</li>
        </ol>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Note: Repository is private. Demo showcases full functionality with public playlist data.
      </p>
    </motion.div>
  )
}

export default IPTVInfo
