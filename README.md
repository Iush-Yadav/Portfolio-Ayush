# Ayush Yadav — illustrated portfolio

A responsive React + TypeScript portfolio with a charcoal-and-paper sketchbook design, decorative side stamps and floral corners, original SVG project illustrations, and Ayush's supplied portrait. Inspired by the visual direction of Jackie Zhang's portfolio, with Ayush's own identity and repository-backed content.

## Local preview

```sh
npm ci
npm run dev
```

## Deploy to the existing Netlify site

Replace the repository files with the contents of the extracted `Portfolio-Ayush` folder (do not nest that folder inside the existing project). Keep the current Git-connected Netlify site. The existing build command `npm run build` and publish directory `dist` remain unchanged in `netlify.toml`; the SPA redirect is preserved. No new environment variables or external services are required by this frontend.

## Content and assets

- `src/data/portfolio.ts`: biography/contact links and toolkit.
- `src/data/selectedWork.ts`: six featured projects, technology lists, repository/demo links, implementation decisions and limitations.
- `docs/PROJECT_SOURCES.md`: research evidence for project descriptions.
- `src/App.tsx`: notebook, projects, about, toolkit, contact.
- `src/components/Sketches.tsx`: original vector desk, project covers, corner drawings and decorative stamps.
- `src/sketchbook.css`: responsive design, paper textures, motion and reduced-motion support.
- `public/image.png`: supplied portrait, preserved exactly.
- `public/fonts`: locally hosted open-source fonts and licenses.
- `DESIGN.md`: inspected reference design and adaptation notes.

Project covers illustrate concepts; they are not screenshots or deployed model outputs. The old 3D scene components and styles remain in source for recoverability but are not imported into the application or included in its JavaScript bundle.

## Contact form

The contact form keeps the existing Netlify `contact` form name, honeypot, and `name`, `email`, `subject`, `message` fields. A static form in `index.html` supports build-time detection. Local Vite does not send mail; submission failure provides a direct email fallback. On the existing deployed site, form processing and email notifications depend on Netlify's form detection and the account's existing notification configuration. Confirm real delivery with a deployed submission.

## Checks

```sh
npm run lint
npx tsc --noEmit -p tsconfig.app.json
npm run build
```
