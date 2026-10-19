# Ayush's illustrated sketchbook

Reference: https://jackiezhang.co.za/?ref=killerportfolio
Inspected 20 October 2026 through live Firecrawl branding/markdown/screenshot capture and browser screenshots at 1280×720. The hero, notebook beliefs, and collage sections were visually inspected. Exact reference mobile animation and all secondary pages were not reconstructed.

## Observed design system

- Charcoal #212121, warm paper #F2E3CF, coral #E35342, secondary green #83B918: Firecrawl branding output. These are extracted values, not estimates.
- Averia Serif Libre headings and Gochi Hand handwriting: extracted font names, visually confirmed in browser. Monospace annotations.
- Centered navigation over an approximately 770px-wide open notebook at 1280px viewport (visual estimate).
- Rounded coral notebook cover, graph-paper hero, cream pages, overlap/shadow along the horizontal book spine.
- Small coral illustrated side borders; loose cream margin doodles; floral corner drawings.
- Paper scraps with mixed writing styles, rotation, rough edges; staggered project-image collage against charcoal.
- This is an adaptation of the visual language using Ayush's content, not a reproduction of Jackie Zhang's identity or proprietary illustrations.

## Implementation choices

- 800px notebook desktop; fluid layout below 760px. Original decorative border stamps stay fixed to page sides and become narrower on small screens.
- Colors adapted to muted coral #CC6251; hero text darkened to #B45143 for legibility. Paper and charcoal retain reference values.
- Original vector desk, plants, paper airplane, eye, code, cup and project cover artwork in src/components/Sketches.tsx. Covers are explicitly labelled conceptual illustrations rather than product screenshots. No reference artwork is copied or hotlinked.
- Local Averia regular/bold and Gochi Hand fonts, downloaded from Google Fonts. Their OFL licenses are included in public/fonts.
- Project cards contain verified existing content from src/data/selectedWork.ts, repository links, demo links, and native expandable technical notes.
- A subtle paper-plane animation, paper hover states, project filters, and pause control replace the previous WebGL scenes. Reduced-motion preferences supported.
- Existing portrait, Netlify form name/fields, redirects and build contract retained.

## Reference image inventory (evidence only, not bundled)

Firecrawl identified Framer-hosted artwork, including graph/notebook compositions, floral sketches, paper belief scraps, and project screenshots. Examples: https://framerusercontent.com/images/rhT0iPheLHJdGQAZ04lGqNb0I.png and https://framerusercontent.com/images/m0nSd9OmKrRp1nvRHVH89tLs0mg.png (belief paper assets). These URLs are evidence; the delivered site uses only original local artwork.
