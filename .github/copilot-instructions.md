# Copilot Instructions

## Stack and Commands

This is a Svelte 3 SPA built by Vite with Three.js/Spline presentation assets.
Use the npm lockfile and Node.js 16 for the current dependency set.

```bash
npm ci
npm run build
```

## Implementation Rules

- Keep page composition in `src/App.svelte` and reusable sections in `src/lib/`.
- Keep scene and model components in `src/lib/3DModels/`.
- Follow the existing Svelte component pattern; do not introduce another
  frontend framework or state library for a single change.
- Clean up observers, listeners, animation frames, and Three.js resources on
  component destruction.
- Preserve responsive layout, keyboard access, meaningful labels, and a usable
  reduced-motion or non-3D experience.
- Use `public/` for URL-loaded `.glb` and static files; use `src/assets/` for
  imported build-time assets.
- Never edit `node_modules/` or generated `dist/`.

## Validation

There is no test or lint script. Run the production build and manually inspect
changed sections at mobile and desktop widths. For 3D changes, verify loading,
cleanup, and fallback behavior.

## Maintenance Matrix

| When changing | Also inspect and update |
| --- | --- |
| Page section | Component in `src/lib/`, import/order in `src/App.svelte`, navigation anchors, global spacing |
| Navigation anchor | Target section ID, `src/App.svelte` order, mobile navigation behavior |
| 3D model or scene | `src/lib/3DModels/*`, `src/lib/ThreeDContainer.svelte`, matching `public/*.glb`, cleanup and fallback |
| Skill or project content | Relevant section component, icon in `src/assets/`, links and accessible text |
| Global style | `src/app.css`, component-scoped styles, mobile/desktop layout, reduced-motion behavior |
| Public asset path | Referencing component, `vite.config.js` base, deployment output |
| Dependency or build command | `package.json`, `package-lock.json`, `vite.config.js`, CI/setup workflows, `AGENTS.md`, `README.md` |
| Publishing command or domain | `package.json` deploy scripts, hosting configuration, public asset paths, `CHANGELOG.md` |
| Contributor guidance | `AGENTS.md`, this file, `README.md`, PR template, `CHANGELOG.md` |

## Deployment Boundary

The tracked npm deployment scripts publish `dist/` through `gh-pages`. Do not
add a deployment workflow or change the custom domain without an explicit
deployment request.
