import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 200 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ),
        speed: Math.random() * 0.02 + 0.01,
        offset: Math.random() * Math.PI * 2
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    const currentMesh = meshRef.current
    if (!currentMesh) return

    particles.forEach((particle, i) => {
      const time = state.clock.elapsedTime
      dummy.position.copy(particle.position)
      dummy.position.y += Math.sin(time * particle.speed * 10 + particle.offset) * 0.5
      dummy.position.x += Math.cos(time * particle.speed * 8 + particle.offset) * 0.3
      dummy.scale.setScalar(0.5 + Math.sin(time + particle.offset) * 0.3)
      dummy.updateMatrix()
      currentMesh.setMatrixAt(i, dummy.matrix)
    })
    currentMesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.5} />
    </instancedMesh>
  )
}
