import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import AIDemo from './components/AIDemo'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIDemo />
        <Contact />
      </main>
      <footer className="bg-gray-950 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>&copy; 2026 Asen Vapordzhiev. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
