import { Canvas } from '@react-three/fiber'
import { Environment, Stars } from '@react-three/drei'
import ParticleField from './ParticleField'
import FloatingIcons from './FloatingIcons'

interface SceneProps {
  children?: React.ReactNode
  className?: string
}

export default function Scene({ children, className = '' }: SceneProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#d4c5a9" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#b8a88a" />

        <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <ParticleField count={100} />
        <FloatingIcons />

        {children}
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
