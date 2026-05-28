export default function Home() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-moss-800 via-moss-700 to-moss-900 text-moss-50 grain">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(195, 214, 197, 0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(191, 154, 92, 0.25), transparent 45%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative h-full w-full overflow-y-auto scrollbar-thin">
        <div
          className="mx-auto flex min-h-full max-w-6xl flex-col justify-center gap-6 px-6 sm:px-10"
          style={{
            paddingTop: 'var(--slide-top-safe)',
            paddingBottom: 'var(--slide-bottom-safe)',
          }}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-moss-50/10 border border-moss-50/20 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-moss-100">
              <span className="h-1.5 w-1.5 rounded-full bg-clay-300" aria-hidden="true" />
              A sanitation-first business plan
            </div>
            <h1 className="font-display font-semibold leading-[0.95] tracking-tight text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Manukan.
              <span className="block text-clay-200/95">
                Clean poultry, <em className="not-italic font-normal text-moss-100">raised next door.</em>
              </span>
            </h1>
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-moss-100/90">
              A neighbor-first broiler pilot for Barangay Santa Monica, Santa Rita,
              Pampanga. Start small, run clean, scale only after the system is proven.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-moss-50/15 bg-moss-50/5 backdrop-blur p-3 sm:p-4">
              <div className="text-[11px] uppercase tracking-widest text-clay-200">Pilot size</div>
              <div className="font-display text-2xl sm:text-3xl font-semibold mt-1">500</div>
              <div className="text-xs sm:text-sm text-moss-100/85">birds — first cycle, all-in / all-out</div>
            </div>
            <div className="rounded-2xl border border-moss-50/15 bg-moss-50/5 backdrop-blur p-3 sm:p-4">
              <div className="text-[11px] uppercase tracking-widest text-clay-200">Preferred buffer</div>
              <div className="font-display text-2xl sm:text-3xl font-semibold mt-1">200 m</div>
              <div className="text-xs sm:text-sm text-moss-100/85">from any home, school, church, or food business</div>
            </div>
            <div className="rounded-2xl border border-moss-50/15 bg-moss-50/5 backdrop-blur p-3 sm:p-4">
              <div className="text-[11px] uppercase tracking-widest text-clay-200">Hard no-go</div>
              <div className="font-display text-2xl sm:text-3xl font-semibold mt-1">&lt; 100 m</div>
              <div className="text-xs sm:text-sm text-moss-100/85">to neighbors — we stop the project, not the neighbors’ peace</div>
            </div>
          </div>

          <div className="rounded-2xl border border-clay-200/30 bg-gradient-to-r from-moss-900/40 to-moss-800/40 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-clay-300/20 text-clay-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-semibold text-clay-100">
                  Our governing principle
                </div>
                <p className="mt-1 text-sm sm:text-base text-moss-50/90 leading-relaxed text-balance">
                  If the site cannot keep birds, manure, mortality handling, and dirty
                  water away from neighbors and waterways, <strong>we do not proceed.</strong>{' '}
                  A poultry business can be profitable. A badly sited one becomes a
                  sanitation problem before the first cycle finishes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-moss-100/70">
            <span className="inline-flex items-center gap-2">
              <kbd className="rounded bg-moss-50/10 border border-moss-50/15 px-2 py-0.5 font-mono text-xs">→</kbd>
              Press right arrow to begin
            </span>
            <span className="hidden sm:inline-flex items-center gap-2">
              <kbd className="rounded bg-moss-50/10 border border-moss-50/15 px-2 py-0.5 font-mono text-xs">1–9</kbd>
              Jump to a section
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
