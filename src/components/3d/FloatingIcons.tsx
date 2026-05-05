import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingIconProps {
  position: [number, number, number]
  color: string
  shape: 'box' | 'sphere' | 'torus'
  speed?: number
}

function FloatingIcon({ position, color, shape, speed = 1 }: FloatingIconProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
    }
  })

  const geometry = () => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[0.4, 32, 32]} />
      case 'torus':
        return <torusGeometry args={[0.3, 0.1, 16, 32]} />
      default:
        return <boxGeometry args={[0.6, 0.6, 0.6]} />
    }
  }

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {geometry()}
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingIcons() {
  const icons = [
    { position: [-4, 2, -2] as [number, number, number], color: '#61DAFB', shape: 'box' as const, speed: 1 },
    { position: [4, -1, -3] as [number, number, number], color: '#3178C6', shape: 'sphere' as const, speed: 1.2 },
    { position: [-3, -2, 1] as [number, number, number], color: '#06B6D4', shape: 'torus' as const, speed: 0.8 },
    { position: [3, 3, -1] as [number, number, number], color: '#68D391', shape: 'box' as const, speed: 1.5 },
    { position: [0, -3, -4] as [number, number, number], color: '#F7DF1E', shape: 'sphere' as const, speed: 0.9 },
  ]

  return (
    <group>
      {icons.map((icon, i) => (
        <FloatingIcon key={i} {...icon} />
      ))}
    </group>
  )
}
