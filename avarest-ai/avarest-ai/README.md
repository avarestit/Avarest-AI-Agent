# Avarest AI

Production-ready [Next.js](https://nextjs.org) starter optimized for Vercel deployment.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

3. Run development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
npm run dev    # start local dev server
npm run lint   # run ESLint checks
npm run build  # build for production
npm run start  # run production build locally
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Push this project to GitHub.
2. Open [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Keep default settings:
- Framework Preset: `Next.js`
- Build Command: `next build`
- Output Directory: `.next`
5. Add environment variables from `.env.example` in Vercel Project Settings.
6. Click `Deploy`.

Every push to your production branch triggers automatic redeploys.

## Project Structure

```text
avarest-ai/
├─ public/
├─ src/
│  └─ app/
│     ├─ globals.css
│     ├─ layout.tsx
│     └─ page.tsx
├─ .env.example
├─ next.config.ts
├─ package.json
└─ tsconfig.json
```
