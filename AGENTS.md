# AGENTS.md

## Project
Personal website: Astro 7, Tailwind v4, React only for the GitHub calendar island, Biome linting.

## Critical Rules
1. Use `~/` path alias for all imports (maps to `src/`)
2. Prefer `.astro` components. Hydrate React only where interactivity requires it; `home-github.tsx` is the only island.
3. Keep the existing Tailwind tokens and `globals.css`/`local.css` structure.

## After Making Changes
Run `pnpm check` and `pnpm typecheck` to verify lint, formatting (Biome), and types.
Run `pnpm build` when changing build config, dependencies, routes, or assets.

## Commands
| Command | Action |
|---------|--------|
| `pnpm dev` | Dev server |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Preview the build locally |
| `pnpm wrangler deploy` | Deploy `dist/` to Cloudflare Workers (manual) |
| `pnpm check` | Biome lint |
| `pnpm check:write` | Fix safe Biome issues |
| `pnpm check:unsafe` | Fix all Biome issues |
| `pnpm typecheck` | Astro sync and type check |

## Environment
- Required in production: `BASE_URL`
- Local dev default: `http://localhost:4321`
- `pnpm build` requires a production `BASE_URL`; the localhost value is for dev only.
- Schema: `astro.config.mjs`
- URL validation: `src/lib/site.ts`
- Set `BASE_URL=https://chadfernandez.me` in Workers Builds.

## Metadata
`layout.astro` uses `siteUrl` from `src/lib/site.ts` for canonical, Open Graph, and Twitter URLs.
