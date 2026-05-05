import { useState, useEffect } from 'react'
import Simple3DHero from './components/sections/Simple3DHero'
import Corridor3D from './components/sections/Corridor3D'
import ProjectGallery3D from './components/sections/ProjectGallery3D'

function App3D() {
  const [currentView, setCurrentView] = useState<'hero' | 'corridor' | 'gallery'>('hero')
  
  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname
      if (path === '/experimental') {
        setCurrentView('corridor')
      } else if (path === '/gallery') {
        setCurrentView('gallery')
      } else {
        setCurrentView('hero')
      }
    }
    
    handleRoute()
    window.addEventListener('popstate', handleRoute)
    
    return () => {
      window.removeEventListener('popstate', handleRoute)
    }
  }, [])
  
  const renderView = () => {
    switch (currentView) {
      case 'corridor':
        return <Corridor3D />
      case 'gallery':
        return <ProjectGallery3D />
      default:
        return <Simple3DHero />
    }
  }
  
  return (
    <div className="relative">
      {renderView()}
      
      {/* Global Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setCurrentView('hero')
                window.history.pushState({}, '', '/')
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'hero' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hero
            </button>
            <button
              onClick={() => {
                setCurrentView('corridor')
                window.history.pushState({}, '', '/experimental')
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'corridor' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Corridor
            </button>
            <button
              onClick={() => {
                setCurrentView('gallery')
                window.history.pushState({}, '', '/gallery')
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'gallery' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Classic
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App3D
