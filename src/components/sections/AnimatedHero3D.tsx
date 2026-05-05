import { Canvas } from '@react-three/fiber'
import { Text, Sphere, Float } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'

function AnimatedTitle() {
  const titleRef = useRef<THREE.Group>(null)
  const subtitleRef = useRef<THREE.Group>(null)
  
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.position,
        { y: -2, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
      )
      
      gsap.to(titleRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      })
    }
    
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current.position,
        { y: 1, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power3.out" }
      )
    }
  }, [])
  
  return (
    <group>
      <Float speed={3} rotationIntensity={0.1} floatIntensity={0.2}>
        <group ref={titleRef} position={[0, 2, 0]}>
          <Text
            fontSize={1.5}
            color="#333"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-bold.woff"
          >
            Lucas Rossi
          </Text>
        </group>
      </Float>
      
      <group ref={subtitleRef} position={[0, 0, 0]}>
        <Text
          fontSize={0.8}
          color="#666"
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
        >
          Systems Engineering Student & Full-Stack Developer
        </Text>
      </group>
    </group>
  )
}

function FloatingElements() {
  const elementsRef = useRef<THREE.Group[]>([])
  
  useEffect(() => {
    elementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.to(element.position, {
          y: element.position.y + Math.sin(Date.now() * 0.001 + index) * 0.5,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        })
        
        gsap.to(element.rotation, {
          y: element.rotation.y + Math.PI * 2,
          duration: 10 + index * 2,
          repeat: -1,
          ease: "none"
        })
      }
    })
  }, [])
  
  return (
    <group>
      {[
        { position: [-4, 1, -2] as [number, number, number], color: "#666", size: 0.5 },
        { position: [4, 0.5, -3] as [number, number, number], color: "#888", size: 0.3 },
        { position: [-2, -1, -1] as [number, number, number], color: "#aaa", size: 0.4 },
        { position: [3, 1.5, -4] as [number, number, number], color: "#777", size: 0.6 },
        { position: [0, -0.5, -2.5] as [number, number, number], color: "#999", size: 0.35 },
      ].map((props, index) => (
        <group
          key={index}
          ref={(el) => {
            if (el) elementsRef.current[index] = el
          }}
          position={props.position}
        >
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
            <Sphere args={[props.size, 16, 16]}>
              <meshStandardMaterial 
                color={props.color} 
                transparent 
                opacity={0.7}
                metalness={0.3}
                roughness={0.4}
              />
            </Sphere>
          </Float>
        </group>
      ))}
    </group>
  )
}

function InteractiveFloor() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, 0]}
      receiveShadow
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial 
        color="#f5f5f5"
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export default function AnimatedHero3D() {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
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
          <pointLight position={[-5, 5, 0]} intensity={0.3} color="#666" />
          <pointLight position={[5, 5, 0]} intensity={0.3} color="#888" />
          
          <AnimatedTitle />
          <FloatingElements />
          <InteractiveFloor />
        </Suspense>
      </Canvas>
      
      {/* Navigation Overlay */}
      <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">3D Experience</h3>
        <nav className="flex flex-col gap-3">
          <button 
            onClick={() => window.location.href = '/experimental'}
            className="text-left px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            🚪 Enter Corridor
          </button>
          <button 
            onClick={() => window.location.href = '/gallery'}
            className="text-left px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            🎨 View Gallery
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-left px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Classic View
          </button>
        </nav>
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Interactive 3D Hero</h3>
        <p className="text-xs text-gray-600">✨ Animated elements with GSAP</p>
        <p className="text-xs text-gray-600">🎮 Navigate to explore more</p>
      </div>
    </div>
  )
}
