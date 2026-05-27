export default function Home() {
  const highlights = [
    "Production-ready React and Next.js implementations",
    "Automation workflows that reduce manual operations",
    "Secure API-first architecture with environment isolation",
  ];

  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-12 sm:px-10 lg:px-16">
        <div className="inline-flex w-fit items-center rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          Built with Next.js and optimized for Vercel
        </div>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl">
              Avarest AI
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Engineering-grade AI platform for teams that need reliable code
              execution, automation orchestration, and faster product delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy on Vercel
              </a>
              <a
                className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)]"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Documentation
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
              Core capabilities
            </p>
            <ul className="mt-4 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="text-sm leading-6 text-[var(--foreground)]">
                  • {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-12 rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Start shipping in minutes
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            This starter is configured with TypeScript, Tailwind CSS, ESLint,
            and the App Router. Clone, customize, and publish directly to Vercel
            with zero infrastructure setup.
          </p>
          <div className="mt-6 rounded-2xl bg-[#0f1a14] p-4 font-mono text-xs text-[#c9f5e0] sm:text-sm">
            <p>git clone &lt;your-repo-url&gt;</p>
            <p>cd avarest-ai</p>
            <p>npm install</p>
            <p>npm run dev</p>
          </div>
        </section>
      </main>
    </div>
  );
}
