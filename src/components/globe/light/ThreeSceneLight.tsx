"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ThreeMesh from "./ThreeMesh";
export default function ThreeSceneLight() {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [0, 0, 2.1],
      }}
      gl={{ antialias: true }}
      className="dark:hidden"
    >
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
      <ambientLight intensity={1.3} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />
      <ThreeMesh />
    </Canvas>
  );
}
