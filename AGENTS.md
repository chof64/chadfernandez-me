# AGENTS.md

## Project
Personal website: Next.js 16 (App Router), Tailwind v4, shadcn/ui (hugeicons), Hashnode GraphQL CMS, Biome linting.

## Critical Rules
1. Use `~/` path alias for all imports (maps to `src/`)
2. Use `cn()` from `~/lib/utils` for class merging — Biome enforces sorted args in cn/clsx/cva calls
3. Hashnode fetcher functions return `[]` on error — never throw, never try/catch
4. Add `"use client"` only for interactive components
5. External images → add domain to `next.config.js` `images.remotePatterns`

## After Making Changes
Run `pnpm check` and `pnpm typecheck` to verify your change passes lint, formatting (Biome), and type checks.
Do NOT run `pnpm build`, `pnpm start`, `pnpm preview` — these are manual operations, not needed for verification.
Do NOT restart `pnpm dev` — it auto-refreshes.

## Commands
| Command | Action |
|---------|--------|
| `pnpm dev` | Dev server (manual) |
| `pnpm build` | Production build (manual) |
| `pnpm check` | Biome lint |
| `pnpm check:write` | Fix safe Biome issues |
| `pnpm check:unsafe` | Fix all Biome issues |
| `pnpm typecheck` | TypeScript check |

## Environment
- Required: `BASE_URL`, `HASHNODE_PUBLICATION_ID`
- `SKIP_ENV_VALIDATION=1` bypasses env checks (for Docker builds)
- Validation schema in `src/env.js`

## Metadata
`metadataBase` in `layout.tsx` sourced from `env.BASE_URL`