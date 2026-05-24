<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

---

# Project Development Guidelines

These rules apply to all new features, updates, and UI work in this repository:

1. For complex components use Radix UI; for simple components use plain JSX and Tailwind CSS.
2. Create a reusable `fetch` helper function and use it in all service modules.
3. Implement each API interaction in its own service function.
4. Keep text and copy content in separate files, then import that content into JSX.
5. Prefer server-side calls; use client-side calls only when they are more efficient.
6. Use `react-hook-form` for all forms.
7. Use the `app/` folder only for routes.
8. Organize features/modules in dedicated folders. Each feature/module should expose a single `index.tsx` and place nested components in subfolders.
9. Place shared UI components in the `src/components` folder.

Refer to `copilot-instructions.md` and `SKILL.md` for the same project-wide guidance.
<!-- END:nextjs-agent-rules -->
