# Copilot instructions

## Project commands

- Install dependencies: `npm install` (the README specifies Node.js 24 LTS).
- Start the Vite development server: `npm run dev`.
- Lint the project: `npm run lint`.
- Lint one source file: `npx oxlint src/App.jsx`.
- Build for production: `npm run build`; output is written to `dist/`.
- Preview the production build: `npm run preview`.
- No test runner or test files are configured, so there is no single-test command. Use the targeted Oxlint command above to check one source file.

## Architecture

- This is a client-rendered React + JavaScript app built with Vite. `index.html` supplies the root element and `src/main.jsx` mounts `App` inside React `StrictMode`.
- `src/App.jsx` contains the single-page Korean introduction: hero, interests, strengths and learning goals, works placeholder, and future goal. Header links use native hash anchors to jump to section IDs; there is no routing package.
- `src/App.css` defines the header, section layouts, cards, and responsive breakpoints. `src/index.css` defines global typography, theme variables, focus treatment, and reduced-motion behavior.
- `vite.config.js` enables the React plugin.

## Repository-specific conventions

- This is a Korean-language personal introduction site. Keep visible copy in `src/App.jsx` consistent with information the owner has confirmed; do not invent personal history, interests, or completed work.
- The works section is intentionally an empty placeholder until real works are supplied. Do not add fabricated project descriptions or artwork presented as the owner's own.
- Preserve the owner’s chosen `dltjdcks` site identity and the light-sky-blue/navy palette. Use shared CSS custom properties from `src/index.css` for theme colors.
- Keep section IDs and their matching header links in sync when changing page sections. Preserve mobile-friendly wrapping, visible keyboard focus, and reduced-motion behavior.
- Do not add personal contact details such as phone number, address, or birth date.
