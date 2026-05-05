import { Canvas } from '@react-three/fiber'
import { Text, Box, Plane, Float } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { portfolioData } from '../../data/data'
import type { Project } from '../../types/types'

interface ProjectCard3DProps {
  project: Project
  position: [number, number, number]
}

function ProjectCard3D({ project, position }: ProjectCard3DProps) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={position}>
        <Box
          args={[3, 2, 0.2]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => window.open(project.demo, '_blank')}
        >
          <meshStandardMaterial 
            color={hovered ? '#333' : '#666'} 
            transparent 
            opacity={0.9}
          />
        </Box>
        
        <Text
          position={[0, 0, 0.2]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          {project.title}
        </Text>
        
        {hovered && (
          <Text
            position={[0, -0.8, 0.2]}
            fontSize={0.15}
            color="#ccc"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.5}
          >
            Click to view demo
          </Text>
        )}
      </group>
    </Float>
  )
}

function GalleryRoom() {
  const featuredProjects = portfolioData.projects.filter(p => p.featured)
  
  return (
    <group>
      {/* Gallery Floor */}
      <Plane 
        args={[30, 30]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -3, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f8f8f8" />
      </Plane>
      
      {/* Gallery Walls */}
      <Plane 
        args={[30, 10]} 
        rotation={[0, Math.PI / 2, 0]} 
        position={[-15, 2, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f0f0f0" />
      </Plane>
      
      <Plane 
        args={[30, 10]} 
        rotation={[0, -Math.PI / 2, 0]} 
        position={[15, 2, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f0f0f0" />
      </Plane>
      
      <Plane 
        args={[30, 10]} 
        rotation={[0, 0, 0]} 
        position={[0, 2, -15]}
        receiveShadow
      >
        <meshStandardMaterial color="#e8e8e8" />
      </Plane>
      
      {/* Gallery Title */}
      <Text
        position={[0, 5, -14]}
        fontSize={1.5}
        color="#333"
        anchorX="center"
        anchorY="middle"
      >
        Project Gallery
      </Text>
      
      {/* Project Displays */}
      {featuredProjects.map((project, index) => {
        const angle = (index / featuredProjects.length) * Math.PI * 2
        const radius = 8
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        
        return (
          <ProjectCard3D
            key={project.id}
            project={project}
            position={[x, 0, z]}
          />
        )
      })}
      
      {/* Center Display */}
      <Box
        args={[4, 3, 0.3]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#444" transparent opacity={0.8} />
      </Box>
      
      <Text
        position={[0, 0, 0.2]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Featured Works
      </Text>
    </group>
  )
}

export default function ProjectGallery3D() {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 5, 15], fov: 60 }}
        shadows
        className="bg-linear-to-b from-gray-50 to-gray-100"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, 5, 0]} intensity={0.3} />
          <pointLight position={[10, 5, 0]} intensity={0.3} />
          <pointLight position={[0, 5, -10]} intensity={0.3} />
          
          <GalleryRoom />
        </Suspense>
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">3D Gallery</h3>
        <p className="text-sm text-gray-600 mb-1">🖱️ Click projects to view</p>
        <p className="text-sm text-gray-600 mb-1">🎮 Drag to rotate view</p>
        <p className="text-sm text-gray-600">⚡ Scroll to zoom</p>
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => window.location.href = '/experimental'}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm"
          >
            ← Back to Corridor
          </button>
          <button 
            onClick={() => window.location.href = '/#projects'}
            className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm"
          >
            Classic View
          </button>
        </div>
      </div>
    </div>
  )
}
