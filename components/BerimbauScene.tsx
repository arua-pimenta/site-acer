import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const StylizedBerimbau: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Rotate slowly over time
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      // Gentle floating up and down
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Verga (Arco de Madeira) - Curved Torus segment */}
      <mesh position={[-0.4, 1, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <cylinderGeometry args={[0.04, 0.04, 2.8, 12]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Cabaça (Gourd) - Glossy Sphere */}
      <mesh position={[-0.2, 0.4, 0]}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshStandardMaterial 
          color="#CD853F" 
          roughness={0.2} 
          metalness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>
      {/* Gourd String Attachment Ring */}
      <mesh position={[-0.3, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.08, 0.015, 8, 24]} />
        <meshStandardMaterial color="#D2B48C" roughness={0.8} />
      </mesh>

      {/* Arame (String) - Shiny Steel Wire */}
      <mesh position={[-0.08, 1, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 2.7, 8]} />
        <meshStandardMaterial color="#A0A0A0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Caxixi (Shaker) - Stylized Cylinder + Cone */}
      <group position={[0.4, 0.5, 0.2]} rotation={[0.2, 0.5, 0.3]}>
        {/* Shaker Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.2, 12]} />
          <meshStandardMaterial color="#DEB887" roughness={0.7} />
        </mesh>
        {/* Shaker Woven Handle */}
        <mesh position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.08, 0.015, 6, 16]} />
          <meshStandardMaterial color="#CD853F" roughness={0.9} />
        </mesh>
      </group>

      {/* Baqueta (Stick) - Thin stick next to it */}
      <mesh position={[0.2, 0.7, -0.1]} rotation={[-0.2, 0, 0.4]}>
        <cylinderGeometry args={[0.012, 0.012, 0.9, 8]} />
        <meshStandardMaterial color="#DEB887" roughness={0.5} />
      </mesh>

      {/* Dobrão (Coin) */}
      <mesh position={[0.1, 0.9, 0.1]} rotation={[Math.PI / 2, 0, 0.2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.015, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
};

export const BerimbauScene: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[420px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-50/50 to-amber-50/30 dark:from-gray-950 dark:to-slate-900 border border-gray-100 dark:border-gray-800 shadow-inner group transition-colors duration-300">
      <Canvas
        camera={{ position: [0, 1.2, 3.2], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        {/* Key Light */}
        <directionalLight position={[5, 10, 3]} intensity={1.5} castShadow />
        {/* Warm fill light */}
        <directionalLight position={[-5, 2, -2]} intensity={0.6} color="#FFE4B5" />
        {/* Accent rim light */}
        <directionalLight position={[0, -5, 2]} intensity={0.4} color="#0052cc" />

        <Suspense fallback={
          <Html center>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-8 h-8 border-4 border-acer-blue dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-[10px] font-black tracking-widest text-acer-blue dark:text-blue-400 uppercase">CARREGANDO 3D...</span>
            </div>
          </Html>
        }>
          <StylizedBerimbau />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.8} 
        />
      </Canvas>
      <div className="absolute bottom-4 left-6 pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100">
        <p className="text-[9px] font-black uppercase tracking-widest text-acer-blue dark:text-blue-400 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Escultura 3D • Arraste para girar
        </p>
      </div>
    </div>
  );
};
