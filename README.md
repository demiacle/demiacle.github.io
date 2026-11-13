# demiacle.github.io

Portfolio site for Daniel Escobedo (Demiacle), built with Vite, React 19 and TypeScript and
served by GitHub Pages at https://demiacle.github.io.

## Run it

Requires Node 22.12+ or 24 (`.nvmrc` pins 24).

```sh
npm install
npm run dev        # http://localhost:5173
```

`npm run build` writes the production site to `dist/`; `npm run preview` serves that build
locally.

## Check it

```sh
npm run check      # typecheck + lint + format check + tests
```

| Script              | What it does                                                 |
| ------------------- | ------------------------------------------------------------ |
| `npm run typecheck` | TypeScript in strict mode                                    |
| `npm run lint`      | oxlint: TypeScript, React hooks and accessibility (jsx-a11y) |
| `npm run format`    | Prettier, rewriting files (`format:check` only reports)      |
| `npm test`          | Vitest + Testing Library (`test:watch` to rerun on save)     |

The tests check that every project renders as a card, that only projects with a URL are
linked, that header links have accessible names, and that `public/media/` holds exactly
the files the site references.

## Add a project

1. Put the screenshot in `public/media/`. Posters are 540×300.
2. Add a file to `src/portfolioData/`, e.g. `MyProject.ts`:

   ```ts
   import type { Project } from '../types';

   const data: Project = {
     title: 'My Project',
     img_poster: 'my_project.png',
     url_link: 'https://example.com', // optional; cards without one aren't links
     sort_order: 6, // lower numbers come first
     goal: 'Any other field is shown on the card as key: "value"',
   };

   export default data;
   ```

Files in this folder are picked up automatically.

## Project layout

```
src/
  main.tsx                 entry point
  App.tsx                  page shell: header, main, footer
  Header.tsx, AboutMe.tsx, PortfolioContainer.tsx, PortfolioItem.tsx
  portfolioData/           one file per project
  styles/tokens.css        colors, type, spacing (change the look here)
  styles/global.css        base styles and page layout
  useInViewport.ts         dims cards outside the middle of the viewport
public/                    copied to the site root as-is (media, favicon, manifest)
media-unused/              media no longer referenced; not deployed
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to GitHub Pages. In the repository settings, Pages → Source must be set to
**GitHub Actions**.
