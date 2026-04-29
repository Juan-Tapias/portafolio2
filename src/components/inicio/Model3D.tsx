import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
      
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            speed={2}
            distort={0.4}
            radius={1}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.5, 32, 32]} position={[2, 1, -1]}>
          <MeshWobbleMaterial color="#ec4899" speed={3} factor={0.6} />
        </Sphere>
      </Float>
    </>
  );
};

const Model3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Model3D;
