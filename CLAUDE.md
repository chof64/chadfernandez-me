# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with Next.js 16 (App Router), Tailwind CSS v4, and shadcn/ui components. Uses Hashnode as a headless CMS via GraphQL API to fetch and display blog posts.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm check      # Run Biome linting
pnpm check:write # Fix Biome linting issues
pnpm check:unsafe # Fix unsafe Biome issues
pnpm typecheck  # TypeScript type checking
```

## Code Standards

- **Linter/Formatter**: Biome (extends `ultracite/biome/core` and `ultracite/biome/next`)
- **CSS**: Tailwind CSS v4 with `@tailwindcss/postcss`, `@tailwindcss/typography`
- **Styling Pattern**: Use `cn()` from `~/lib/utils.ts` (clsx + tailwind-merge)
- **Components**: shadcn/ui base components in `src/components/ui/`

## Environment Variables

Environment validation is handled by `@t3-oss/env-nextjs` with zod schemas in `src/env.js`. Required variables:
- `BASE_URL` - Site URL (defaults to `http://localhost:3000` in development)
- `HASHNODE_PUBLICATION_ID` - Hashnode publication ID for blog content

## Architecture

- `src/app/` - Next.js App Router pages and layouts
  - `post/[slug]/` - Individual blog post pages
  - `engagements/` - Speaking engagements page
  - `projects/` - Projects showcase page
- `src/components/` - React components (ui/ contains shadcn components)
- `src/lib/` - Utilities and integrations
  - `hashnode/` - GraphQL API fetcher and types for Hashnode CMS
- `src/styles/` - Local CSS styles
