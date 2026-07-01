---
name: "Association & NGO Frontend Architect"
description: "Design principles, layout tokens, accessibility guidelines (WCAG), and UX patterns specific to ACER's non-profit mission."
---

# Association & NGO Frontend Architect

This skill guides the styling, branding, and content structure for the ACER (Associação Cultural Esportiva Raízes) website. It ensures that the design is modern, professional, emotion-driven, and optimized for public transparency and community engagement.

## 1. Brand Guidelines & Color Tokens
To maintain consistency, use the official tailwind tokens and custom color variables:

*   **Primary Blue (`acer-blue`):** `#0052cc` (used for primary headers, main buttons, representing trust and professionalism).
*   **Accent Gold (`yellow-400`):** `#facc15` (used for tags, highlights, capoeira cultural themes, representing energy and culture).
*   **Base Dark (`acer-dark`):** `#0f172a` / `slate-900` (deep blue-gray for high contrast text and dark mode backgrounds).
*   **Base Light:** `bg-gray-50` or warm off-white (`#fafaf9`) to keep the interface approachable and clean.

## 2. Key UX Patterns for Non-Profits

### A. Emotional & Impact-Driven Storytelling
*   Use real, high-quality WebP compressed images of project activities rather than generic stock photos.
*   Prioritize student/beneficiary quotes and success metrics (e.g. `STATS` block on the Homepage).
*   Structure cards with prominent category tags (e.g. "ESPORTE", "CULTURA", "SOCIOPEDAGÓGICO") and location details.

### B. High-Contrast, Accessible Calls to Action (CTAs)
*   **Primary CTA:** A clean white button on dark backgrounds, or solid `acer-blue` on light backgrounds.
*   **Secondary CTA:** A glassmorphism/bordered button (`bg-acer-blue/40 border-white/30`).
*   Ensure all buttons have hover transitions: `transition-all duration-300 hover:scale-[1.02]`.

### C. Public Bids, Transparency & Bidding Sections
For legal and donor trust, files like "Termo de Referência" and "Balanço Anual" must be accessible:
*   Use the **Editais e Cotações Prévias** pattern: card with a solid border, clear publishing date, active process badge, structured description of the objective, proposals deadline, and a distinct "VER TERMO DE REFERÊNCIA" button leading to a PDF file under `/public/documentos/`.

## 3. Web Accessibility (WCAG 2.1)
*   **Contrast:** Maintain a minimum contrast ratio of **4.5:1** for normal text and **3:1** for large text against backgrounds.
*   **Sizing:** Avoid absolute font sizes in pixels. Use Tailwind’s rem-based utility classes (`text-sm`, `text-base`, `text-lg`).
*   **Screen Readers:** Always provide descriptive `alt` tags for images and `aria-label` attributes for buttons that contain only icons (e.g., carousel controls).
