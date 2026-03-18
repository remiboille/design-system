# Design System

A token-driven component library built with React, Tailwind CSS v4, and Storybook — connected to Figma via Code Connect.

## Links

| Resource | URL |
|---|---|
| Storybook (live) | https://moonlit-rugelach-7ee97e.netlify.app |
| GitHub repo | https://github.com/remiboille/design-system |
| Figma file | https://www.figma.com/design/qLKMy0QozvtRi7dcApCVXB/Claude-Code-Design-System |

## Stack

| Layer | Tool |
|---|---|
| Tokens | Style Dictionary → CSS variables + JS exports |
| Styling | Tailwind CSS v4 (PostCSS) |
| Components | React + TypeScript |
| Docs | Storybook v10 |
| Hosting | Netlify |
| Figma bridge | Code Connect |

## Project structure

```
src/
├── tokens/              # Source token files (JSON)
│   ├── color.json
│   ├── typography.json
│   └── spacing.json
├── styles/              # Generated outputs (do not edit)
│   ├── tokens.css       # CSS custom properties
│   ├── tokens.js        # JS exports for Tailwind config
│   └── global.css       # Tailwind entry point + @theme mapping
└── components/
    └── Button/
        ├── Button.tsx           # Component
        ├── Button.stories.tsx   # Storybook stories
        └── Button.figma.tsx     # Code Connect mapping
```

## Local dev

```bash
# Install dependencies
npm install

# Build tokens first (required before anything else)
npm run tokens

# Start Storybook
npm run storybook
```

## Token pipeline

Tokens live in `src/tokens/*.json` and are compiled by Style Dictionary into:
- `src/styles/tokens.css` — CSS custom properties (`--ds-color-surface-cream`, etc.)
- `src/styles/tokens.js` — JS named exports (`ColorSurfaceCream`, etc.)

After editing any token file, run:
```bash
npm run tokens
```

## Deploy Storybook

```bash
npm run build:storybook && netlify deploy --dir=storybook-static --prod
```

## Figma Code Connect

`Button.figma.tsx` maps the Figma component to the React component so the correct code snippet appears in Figma Dev Mode.

To publish after updating the mapping:
```bash
FIGMA_ACCESS_TOKEN=your_token npm run figma:publish
```

## Adding a new component

1. Create `src/components/ComponentName/ComponentName.tsx`
2. Add stories in `ComponentName.stories.tsx`
3. Add a Code Connect mapping in `ComponentName.figma.tsx`
4. Export from `src/components/index.ts`
