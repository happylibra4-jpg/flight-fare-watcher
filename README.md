# Flight Fare Watcher

Build a SaaS landing page + authenticated app shell for Flight Price Notifier (機票降價通知), a product that watches popular flight routes from Taipei and emails the user when the cheapest fare drops to or below their target price — targeted at budget-driven travelers who don't care exactly when they fly, they just want a ticket under their budget.

The site must include:

A public landing page (/) with:

Hero section: product name "Flight Price Notifier" prominently displayed, value prop 「設定航線與目標價，機票降價就通知你」 (English subtitle: "Set a route and a target price — we email you when the fare drops."), and a primary CTA button labeled "Sign in / 登入" in the top-right header.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1adaf535-dc4e-4300-afda-f5441f88c011).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

This is a plain **Vite + React single-page app** (React Router for client-side routing, Supabase for auth, Tailwind for styling). There is no server-side rendering.

```sh
bun install      # or: npm install
bun run dev      # Vite dev server
bun run build    # static build → dist/
bun run preview  # serve dist/ locally
bun run test
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Landing page (`src/pages/Index.tsx`) |
| `/sign-in` | Sign in (`src/pages/SignIn.tsx`) |
| `/sign-up` | Sign up (`src/pages/SignUp.tsx`) |
| `/app` | Dashboard, requires a signed-in user (`src/pages/AppPage.tsx`) |

Routes are declared in `src/App.tsx`.

### Environment

The Supabase client reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` at build time (see `.env`).

### Deploying to Vercel

`vercel.json` sets the Vite framework preset, `dist/` as the output directory and a rewrite of all paths to `/index.html`, so deep links such as `/app` resolve client-side.
