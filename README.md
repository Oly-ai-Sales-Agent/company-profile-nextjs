# Oly - AI Sales Agent for Real Estate Developers

A modern landing page for Oly, an AI-powered sales agent solution built with Next.js, React, and Tailwind CSS.

## Features

- **Dynamic Navigation** - Smooth scrolling with automatic header offset
- **Trusted Companies Carousel** - Infinite scrolling carousel that pauses on hover
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern Typography** - Inter Light font throughout
- **Animations** - Hover transitions and scroll-based effects
- **Content Separation** - Content managed in `src/content/` for easy updates

## Technology Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [ESLint](https://eslint.org/) - Code linting

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js app routes
├── components/             # Shared UI components
├── content/               # Static content (copy, data)
├── layouts/              # Layout components (header, footer)
├── lib/                  # Utilities (fetch helper)
└── modules/             # Feature modules (home)
```

## Development Guidelines

See `copilot-instructions.md` and `AGENTS.md` for project-wide development standards.

### Key Rules

- Use Radix UI for complex components; JSX + Tailwind for simple ones
- Create reusable fetch helpers in `src/lib/`
- Keep content in `src/content/` separate from components
- Each feature/module has one `index.tsx` entry point
- Prefer server-side data fetching

## Deployment

### Netlify

The project is configured for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Netlify will auto-detect Next.js and use `netlify.toml` settings
3. Build command: `npm run build`
4. Publish directory: `.next`

### Environment Variables

Create a `.env.local` file for local development (not committed):

```env
# Add any needed environment variables here
```

## License

Private project for Oly.
