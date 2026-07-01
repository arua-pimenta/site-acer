---
name: "3D Web Design Architect"
description: "Specialized guidelines and technical templates for integrating 3D WebGL (Three.js / React Three Fiber) into the ACER website."
---

# 3D Web Design Architect

This skill guides the design, implementation, and optimization of 3D interactive graphics within the ACER website, using Three.js, React Three Fiber (R3F), and standard WebGL practices.

## 1. Core Architecture
For React-based 3D applications, use a declarative layout that integrates with the HTML DOM rather than taking over the entire viewport:

```tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

export const InteractiveScene: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-950 to-slate-900 border border-white/5">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        
        <Suspense fallback={<Html center><div className="text-white text-xs font-black tracking-widest animate-pulse">CARREGANDO 3D...</div></Html>}>
          {/* Your 3D Components */}
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0052cc" roughness={0.3} metalness={0.8} />
          </mesh>
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};
```

## 2. Performance & WebGL Optimization Rules

To prevent performance drops, especially on mobile devices:
1. **GLTF Compression:** Always compress 3D models using Draco or meshopt compression before placing them in the `/public` folder. The final `.glb` file size should ideally remain below **1.5MB**.
2. **Texture Sizes:** Never use textures larger than **2048x2048**. Prefer **1024x1024** WebP format.
3. **Geometry/Material Reuse:** Do not create new materials or geometries inside rendering loops. Instantiate them once and reuse them.
4. **Instanced Meshes:** Use `<instancedMesh>` when rendering more than 10-20 identical 3D objects (e.g. background dust, particles, repetitive structures).
5. **Baked Lighting:** Avoid multiple dynamic lights with shadows. Bake shadows and diffuse lighting in Blender before exporting the model to WebGL.

## 3. SEO & Accessibility (Crucial for NGOs)
* **SEO-First DOM:** Never store important text solely in the 3D canvas. All search engines index the HTML DOM. Keep H1/H2 headings and body copy in standard HTML, and overlay the `<canvas>` as a visual background or secondary element.
* **Canvas Fallback:** Provide a standard 2D image/CSS-animated fallback for users without WebGL support or on low-power battery saving modes:

```tsx
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};
```
