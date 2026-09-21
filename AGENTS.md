<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project: kaito071831 profile site

A one-page personal profile site (Next.js App Router, TypeScript, Tailwind CSS v4). No routing beyond `/`, no CMS, no backend — everything is static content committed to the repo.

- **Content lives in one place:** `src/lib/profile-data.ts` (profile info, skills, career, awards). Edit that file to change what's displayed; don't hardcode profile content inside components.
- **Styling is mostly plain CSS, not Tailwind utility classes.** The glassmorphism design (blurred panels, gradient orbs, oklch accent colors, animations) is defined in `src/app/globals.css` under named classes (`.card`, `.panel`, `.glass`, `.skill-tag`, etc.) and referenced via `className` in components. Tailwind's `@import "tailwindcss"` is present for utility-class use, but the bespoke design system intentionally stays in `globals.css` — keep new UI consistent with that pattern rather than reintroducing ad-hoc Tailwind classes for the same elements.
- **Fonts are loaded via a `<link>` tag** in `src/app/layout.tsx` (Google Fonts: Space Grotesk, Zen Kaku Gothic New, IBM Plex Mono), not `next/font/google`. This matches the original design mockup exactly; don't switch to `next/font` without checking the font pairing still matches.
- **`LiveClock` is a client component** (`"use client"`) rendering the JST clock; everything else is a server component. Keep new interactive pieces isolated the same way rather than converting the whole tree to client components.
- **The profile photo** (`public/images/profile.jpg`) is a real asset the user uploaded — don't replace it with a placeholder.
- Design source of truth: the site was built to match a Claude Design mockup (`Profile.dc.html`) the user approved before implementation. If asked to change the visual design significantly, check with the user first rather than freelancing a new look.
