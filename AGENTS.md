# Portfolio — Agent Guide

## Project Overview

This repository is a Svelte/Vite single-page portfolio. It combines standard
Svelte sections with Three.js/Spline-based 3D presentation assets and is
published as static output.

## Repository Structure

- `src/App.svelte` — page composition and viewport animation setup
- `src/lib/` — portfolio sections and reusable Svelte components
- `src/lib/3DModels/` — 3D scene/model components
- `src/assets/` — imported icons and source assets
- `public/` — pass-through images and `.glb` model files
- `src/app.css` — global styling
- `vite.config.js` — Svelte/Vite build configuration

Do not edit `node_modules/` or generated `dist/`.

## Build and Run

Use the committed npm lockfile. This older Svelte/Vite stack is validated with
Node.js 16.

```bash
npm ci
npm run build
```

Use `npm run dev` for local development. There is no automated test or lint
script, so the production build and focused browser checks are required.

## Conventions

- Keep page section order in `src/App.svelte`.
- Add reusable sections to `src/lib/`; keep 3D scene components in
  `src/lib/3DModels/`.
- Preserve existing Svelte component style and avoid adding another UI
  framework.
- Dispose of Three.js listeners, observers, animation frames, and resources
  when components are destroyed.
- Keep large model files in `public/` when loaded by URL; imported icons and
  build-time assets belong in `src/assets/`.
- Preserve responsive layouts, reduced-motion usability, keyboard access, and
  useful image/link text.

## CI/CD

Pull requests and default-branch pushes run `.github/workflows/ci.yml`. Manual
publishing uses the `deploy` or `deploy-domain` npm scripts; no deployment
workflow is currently tracked.

## Adding a Portfolio Section

1. Create the section component under `src/lib/`.
2. Import and place it in `src/App.svelte`.
3. Update navigation anchors if the section is linked.
4. Add assets to the correct source or public directory.
5. Check mobile, desktop, motion, and 3D fallback behavior.
6. Run `npm run build`.

## Documentation Status

The README contains the project summary and contribution commands. Detailed
architecture and maintenance guidance lives here and in
`.github/copilot-instructions.md`.

## Common Pitfalls

- Do not commit regenerated `dist/` output as part of source changes.
- Avoid changing model URLs without updating both the component and the
  matching file under `public/`.
- Do not assume all devices support high-cost 3D effects or unrestricted
  motion.
