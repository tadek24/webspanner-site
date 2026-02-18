import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

function AnimatedSphere() {
    const meshRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        meshRef.current.distort = 0.4 + Math.sin(time) * 0.2
        meshRef.current.rotation.x = time * 0.2
        meshRef.current.rotation.y = time * 0.2
    })

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#4F46E5"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    )
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-60">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
