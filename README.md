
# Luca Bazzanella

A React project built with Vite, using modern libraries and tools including Radix UI components, React Query, React Router, TailwindCSS, and more.

## Features

- React 18 with fast refresh via `@vitejs/plugin-react-swc`
- UI primitives from Radix UI (`@radix-ui/react-*`)
- Form handling with React Hook Form and Zod validation
- State management and data fetching with React Query
- Styling with TailwindCSS and animations
- TypeScript support
- Client-side routing with React Router DOM
- Carousel, charts, date pickers, and other utilities

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

Clone the repository:

```bash
git clone https://github.com/your-org-or-username/luca-banzanella.git
cd luca-banzanella
```

Install dependencies:

```bash
yarn install
```


## Updating Content and Deploying Studio

To update the content from JSON files and deploy the Sanity Studio:

1. Install `@sanity/client` globally (required for scripts):

	```bash
	npm install -g @sanity/client
	```

2. Change directory to the studio folder:

	```bash
	cd studio-luca-bazzanella
	```

3. Run the import script to update content. This will synchronize your local content with the Sanity backend, including images and all translated fields.

	```bash
	node scripts/importSanityContent.js
	```

4. Build the studio:

	```bash
	npm run build
	```

5. Deploy the studio:

	```bash
	npm run deploy
	```


Start the development server with hot reload:

```bash
yarn dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000)

### Building for Production

To build the optimized production bundle:

```bash
yarn build
```

You can preview the production build locally with:

```bash
yarn preview
```

### Linting

Run ESLint on the codebase:

```bash
yarn lint
```

## Deployment

The project is configured to deploy to GitHub Pages under the `/luca_banzanella/` base path.

Make sure the `vite.config.js` file has:

```js
base: '/luca_banzanella/',
```

Build the project and deploy the `dist` folder to the `gh-pages` branch, for example via GitHub Actions.

## Project Structure

- `src/` — source files including React components
- `public/` — static assets and `index.html`
- `vite.config.js` — Vite build configuration
- `package.json` — project dependencies and scripts

## Scripts

- `yarn dev` — start dev server
- `yarn build` — build for production
- `yarn build:dev` — build with development mode
- `yarn preview` — preview production build
- `yarn lint` — run ESLint

## Dependencies

Notable dependencies include:

- React 18, React DOM
- Radix UI components (`@radix-ui/react-*`)
- React Hook Form and Zod
- React Router DOM
- TailwindCSS with typography and animations
- React Query
- Various UI and utility libraries like `lucide-react`, `recharts`, `embla-carousel-react`, `date-fns`

## Development Dependencies

Includes Vite, ESLint with React hooks plugin, TailwindCSS, TypeScript, and other tooling.

---

## License

© 2025 Sintija Birgele. All rights reserved.

This project and its contents are the exclusive property of Sintija Birgele. Unauthorized copying, distribution, or use is prohibited.