# Oly Project Copilot Instructions

These guidelines should be followed for all new features and updates in this repository.

- For complex UI components, use Radix UI. For simple components, use JSX and Tailwind CSS.
- Create a reusable `fetch` helper function in a shared library and use it across all service modules.
- Implement each API call as a separate service function.
- Store text content in separate content files under `src/content` and import it into JSX.
- Prefer server-side data fetching and use client-side calls only when they are more efficient.
- Use `react-hook-form` for all forms.
- Keep the `app/` folder limited to route files only.
- Organize each feature or module in its own folder. Each feature/module should have one `index.tsx` file exposing the component and nested folders for child components.
- Keep shared components in the `src/components` folder.

These instructions are intended to guide the development workflow and should be applied consistently across the project.