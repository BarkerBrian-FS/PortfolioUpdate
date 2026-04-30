import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function Planet() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#6c5ce7" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "transparent"
      }}
      camera={{ position: [0, 0, 6] }}
    >

      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} />

      <Stars radius={100} depth={50} count={3000} factor={4} />

      <Planet />

    </Canvas>
  );
}