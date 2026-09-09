# Portfolio — Muskan Patil

Personal portfolio site for Muskan Patil (Full-Stack Engineer, multi-tenant SaaS).

## Stack
- **Framework:** Vite + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`), class-based dark mode (`<html class="dark">`)
- **Animation:** Framer Motion
- **Icons:** lucide-react + custom brand SVGs in `src/components/BrandIcons.tsx` (lucide v1 removed brand icons)

## Commands
- `pnpm dev` — start dev server (http://localhost:5173)
- `pnpm build` — type-check (`tsc -b`) + production build to `dist/`
- `pnpm preview` — preview the production build
- `pnpm lint` — oxlint

## Structure
- `src/data/portfolio.ts` — all site content (profile, projects, deep-dives, skills, experience, achievements). Edit copy here.
- `src/hooks/useTheme.ts` — dark/light theme with localStorage + system preference.
- `src/components/` — sections: Hero, About, Projects, DeepDives, Skills, Experience, Contact, Footer, plus shared Navbar/Reveal/SectionHeading.
- `src/index.css` — Tailwind theme tokens, dark-mode CSS variables, utilities (aurora, gradient-text, glass, shimmer-border).

## Notes
- GitHub/LinkedIn/resume links are `#` placeholders in `src/data/portfolio.ts` — fill in real URLs before deploy.
- Theme is applied pre-paint via an inline script in `index.html` to avoid flash.
- Deploy: any static host (Vercel/Netlify/GitHub Pages). `pnpm build` outputs `dist/`.
