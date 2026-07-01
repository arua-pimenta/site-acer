---
name: "Vite & Web Performance Optimizer"
description: "Optimization guidelines for Vite, React, image lazy loading, asset compression (sharp, WebP), and Lighthouse performance scores."
---

# Vite & Web Performance Optimizer

This skill establishes performance metrics, coding rules, and asset management processes to guarantee that the ACER website loads in under **1.5 seconds** (Time to Interactive) and achieves a **95+** performance score on Google Lighthouse.

## 1. Asset & Image Management (The Sharp Protocol)
Images are often the heaviest part of non-profit websites. To manage this:

*   **Format:** Convert all raster images (`.png`, `.jpg`, `.jpeg`) to **WebP** format.
*   **Compression Tool:** Use the local `optimize_images.mjs` script (powered by the `sharp` library) to compress raw assets before deploying.
*   **Lazy Loading:** Always add `loading="lazy"` to images below the fold (non-hero images).
*   **Hero Images:** Hero carousel images should be preloaded or load with standard priority.

Example script utilization command:
```bash
node optimize_images.mjs
```

## 2. Vite Bundling & Build Optimization
Ensure Vite is compiling cleanly and minimizing chunk sizes:

### A. Dynamic Imports (Code Splisting)
Split large page components that are not immediately visible upon initial load:

```tsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Transparency = lazy(() => import('./pages/Transparency'));

export const AppRoutes = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Carregando...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/transparencia" element={<Transparency />} />
    </Routes>
  </Suspense>
);
```

### B. Inline Assets Threshold
Keep tiny assets inline to reduce HTTP requests, while keeping larger assets external:
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    assetsInlineLimit: 4096, // 4KB
  }
});
```

## 3. Font Loading Optimization
*   Use system font stack fallbacks while external typography is loading.
*   Utilize standard `font-display: swap;` in `@font-face` rules to prevent layout shifts (CLS).
