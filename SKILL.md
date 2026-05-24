# Oly Project Development Skill

Use these project rules when working on new features, components, or updates.

1. For complex components, use Radix UI. For simple components, use JSX and Tailwind CSS.
2. Create a reusable fetch helper function and use it for all service requests.
3. Each API interaction must be implemented in a dedicated service function.
4. Keep text content in separate content files under `src/content` and import it into JSX components.
5. Prefer server-side calls; use client-side calls only when more efficient.
6. Use `react-hook-form` for forms.
7. Use the `app/` folder exclusively for routes.
8. Organize features or modules in relevant folders, with one `index.tsx` entry file per feature/module and nested subfolders for nested components.
9. Shared components belong in the `src/components` folder.

These rules should be considered for any new development work in the repository.