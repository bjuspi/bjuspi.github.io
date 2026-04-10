# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Bryant Juspi, built as a React SPA with TypeScript, Vite, Tailwind CSS, and shadcn/ui components. Deployed as a static site (GitHub Pages via `bjuspi.github.io`).

## Commands

- **Dev server:** `npm run dev` (runs on localhost:8080)
- **Production build:** `npm run build` (outputs to `dist/`)
- **Dev build:** `npm run build:dev` (with source maps)
- **Lint:** `npm run lint`
- **Preview build:** `npm run preview`

No test framework is configured.

## Architecture

**Routing** is in `src/App.tsx` — flat structure with React Router DOM (`/` → Index, `*` → NotFound). Add new routes above the catch-all.

**Page composition**: `src/pages/Index.tsx` composes section components into the main page layout in this order: Hero → About → Experience → Projects → Publications → Skills → Contact → Footer.

**Section components** live in `src/components/` — each section is a self-contained component with its own hardcoded data (experience list, projects list, skills list, etc.).

**UI primitives** in `src/components/ui/` are shadcn/ui components managed via the `components.json` config. Add new ones with `npx shadcn-ui@latest add <component>`.

**Styling**: Tailwind CSS with HSL CSS variables defined in `src/index.css` (light/dark themes). Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging. Dark mode is class-based via next-themes, defaulting to dark.

**Path alias**: `@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

**State**: TanStack React Query for server state, next-themes for theme toggling, custom `use-toast` hook with useReducer for notifications. No global state library.

## Personal Brand

The portfolio is built around three core values: **Researcher**, **Problem Solver**, **Engineer**. Content should reinforce these pillars. Interest areas: Medical, Robotics, Computer Vision, Trading.

## Key Conventions

- TypeScript strict mode is OFF — the project uses loose type checking
- Components use named exports, not default exports (except `src/pages/Index.tsx` which uses default export)
- Tailwind utility classes only — no custom CSS class naming conventions
- Section data (experience, projects, skills, awards) is hardcoded as arrays/objects at the top of each component file
