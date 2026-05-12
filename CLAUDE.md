# CLAUDE.md — namenlos

## Project
Artist website built with [Astro](https://astro.build). Single-page layout; all sections are Astro components assembled in `src/pages/index.astro`.

## Tech stack
- Astro 4.x (static, no framework adapters)
- Plain CSS (`src/styles/global.css`) with PostCSS/autoprefixer
- TypeScript (strict null checks)

## Commands
```
npm run dev      # local dev server on :4321
npm run build    # build to dist/
npm run preview  # preview built output
```

## File map
| Path | Purpose |
|------|---------|
| `src/pages/index.astro` | Single page — imports and orders all sections |
| `src/layouts/Layout.astro` | HTML shell (head, meta, global CSS import) |
| `src/components/*.astro` | One file per page section |
| `src/styles/global.css` | Design tokens + reset + shared utilities |
| `public/` | Static assets served as-is (images, legacy HTML) |
| `public/works/` | Drop new portfolio work images here |

## Adding a section
1. Create `src/components/MySection.astro`
2. Import and place it in `src/pages/index.astro`

## Adding portfolio work
Drop image files into `public/works/` — the Portfolio component reads a static list; update that list in `src/components/Portfolio.astro`.

## Style conventions
- CSS custom properties (design tokens) are defined in `:root` inside `global.css`
- Each component styles itself with a `<style>` block (scoped by Astro)
- Dark background (`--color-bg: #0a0a0a`) with off-white text
- Accent color: `--color-accent: #e0ff00` (electric yellow-green)
