import Corridor3D from '../components/sections/Corridor3D'

export default function Experimental3D() {
  return (
    <div className="relative">
      <Corridor3D />
      
      {/* Overlay Content */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          3D Portfolio Experience
        </h1>
        <p className="text-gray-600 mb-4">
          Navigate through the interactive corridor to explore my work
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Classic View
          </button>
          <button 
            onClick={() => window.location.href = '/#projects'}
            className="px-6 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  )
}
