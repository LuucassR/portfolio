import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, Box, Plane } from '@react-three/drei'
import { Suspense, useState } from 'react'

function Corridor() {
  const [hoveredDoor, setHoveredDoor] = useState<string | null>(null)
  
  return (
    <group>
      {/* Floor */}
      <Plane 
        args={[20, 50]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f5f5f5" />
      </Plane>
      
      {/* Ceiling */}
      <Plane 
        args={[20, 50]} 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[0, 8, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#fafafa" />
      </Plane>
      
      {/* Left Wall */}
      <Plane 
        args={[50, 10]} 
        rotation={[0, Math.PI / 2, 0]} 
        position={[-10, 3, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f0f0f0" />
      </Plane>
      
      {/* Right Wall */}
      <Plane 
        args={[50, 10]} 
        rotation={[0, -Math.PI / 2, 0]} 
        position={[10, 3, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f0f0f0" />
      </Plane>
      
      {/* Back Wall */}
      <Plane 
        args={[20, 10]} 
        rotation={[0, 0, 0]} 
        position={[0, 3, -25]}
        receiveShadow
      >
        <meshStandardMaterial color="#e8e8e8" />
      </Plane>
      
      {/* Projects Door */}
      <group position={[-6, 0, -24]}>
        <Box 
          args={[4, 6, 0.5]} 
          onPointerOver={() => setHoveredDoor('projects')}
          onPointerOut={() => setHoveredDoor(null)}
          onClick={() => window.location.href = '#projects'}
        >
          <meshStandardMaterial 
            color={hoveredDoor === 'projects' ? '#333' : '#666'} 
            transparent 
            opacity={0.9}
          />
        </Box>
        <Text
          position={[0, 0, 0.3]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Projects
        </Text>
      </group>
      
      {/* About Door */}
      <group position={[0, 0, -24]}>
        <Box 
          args={[4, 6, 0.5]} 
          onPointerOver={() => setHoveredDoor('about')}
          onPointerOut={() => setHoveredDoor(null)}
          onClick={() => window.location.href = '#about'}
        >
          <meshStandardMaterial 
            color={hoveredDoor === 'about' ? '#333' : '#666'} 
            transparent 
            opacity={0.9}
          />
        </Box>
        <Text
          position={[0, 0, 0.3]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          About
        </Text>
      </group>
      
      {/* Contact Door */}
      <group position={[6, 0, -24]}>
        <Box 
          args={[4, 6, 0.5]} 
          onPointerOver={() => setHoveredDoor('contact')}
          onPointerOut={() => setHoveredDoor(null)}
          onClick={() => window.location.href = '#contact'}
        >
          <meshStandardMaterial 
            color={hoveredDoor === 'contact' ? '#333' : '#666'} 
            transparent 
            opacity={0.9}
          />
        </Box>
        <Text
          position={[0, 0, 0.3]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Contact
        </Text>
      </group>
      
      {/* Decorative Elements */}
      <group position={[0, 1, -10]}>
        <Box args={[1, 2, 1]}>
          <meshStandardMaterial color="#999" />
        </Box>
      </group>
      
      <group position={[0, 1, -15]}>
        <Box args={[1, 2, 1]}>
          <meshStandardMaterial color="#999" />
        </Box>
      </group>
    </group>
  )
}

function FloatingText() {
  return (
    <Text
      position={[0, 5, -5]}
      fontSize={1.2}
      color="#333"
      anchorX="center"
      anchorY="middle"
    >
      Lucas Rossi
    </Text>
  )
}

export default function Corridor3D() {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        shadows
        className="bg-linear-to-b from-gray-50 to-gray-100"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, 5, 0]} intensity={0.3} />
          <pointLight position={[10, 5, 0]} intensity={0.3} />
          
          <Corridor />
          <FloatingText />
          
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={20}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">3D Corridor Navigation</h3>
        <p className="text-sm text-gray-600 mb-1">🖱️ Click on doors to navigate</p>
        <p className="text-sm text-gray-600 mb-1">🎮 Drag to rotate view</p>
        <p className="text-sm text-gray-600">⚡ Scroll to zoom</p>
      </div>
      
      {/* Traditional Navigation Fallback */}
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Navigation</h3>
        <nav className="flex flex-col gap-2">
          <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">→ Projects</a>
          <a href="#experience" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">→ Experience</a>
          <a href="#skills" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">→ Skills</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">→ Contact</a>
        </nav>
      </div>
    </div>
  )
}
