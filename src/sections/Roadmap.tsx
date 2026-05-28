import SectionShell from '../components/SectionShell'

const phases = [
  {
    label: 'Days 1–30',
    title: 'Validate',
    color: 'from-moss-600 to-moss-700',
    items: [
      'Identify candidate sites; reject any that fail the neighbor-first rule.',
      'Visit Santa Rita LGU offices (Planning, Health, Engineer, Agriculturist).',
      'Interview ≥ 20 buyers and ≥ 5 suppliers.',
      'Collect written quotes for chicks, feed, construction, drainage, equipment.',
      'Build the budget spreadsheet; verify break-even is below confirmed buyer offers.',
    ],
  },
  {
    label: 'Days 31–60',
    title: 'Build',
    color: 'from-clay-500 to-clay-600',
    items: [
      'Finalize site decision and layout.',
      'Complete DTI / BIR registrations and DENR-EMB environmental screening.',
      'Build poultry house, drainage, fence, water, feed room, covered waste area.',
      'Create SOPs, daily logs, buyer CRM, inventory sheet, biosecurity checklist.',
      'Train caretaker; run a dry rehearsal without birds.',
    ],
  },
  {
    label: 'Days 61–120',
    title: 'Run',
    color: 'from-moss-700 to-moss-800',
    items: [
      'Place the first flock — 500 birds if there is any uncertainty.',
      'Review daily logs and weekly dashboard.',
      'Confirm buyers before harvest week.',
      'Sell, collect, clean out, disinfect, rest the house.',
      'Complete a cycle review before deciding repeat / improve / expand.',
    ],
  },
]

const gates = [
  'Mortality stayed within planned range.',
  'No unresolved neighbor complaint.',
  'Litter stayed dry; odor controlled.',
  'Buyers absorbed harvest at price above break-even.',
  'Records complete enough to calculate true profit.',
  'Waste stored, composted, or transferred without runoff, flies, or odor.',
]

export default function Roadmap() {
  return (
    <SectionShell
      eyebrow="08 · 30 / 60 / 120-day roadmap"
      title="Three phases. Six expansion gates."
      lede="The plan is sequential on purpose. We validate before we build, build before we run, and we never expand until the gates are open."
      background="moss"
    >
      <div className="grid gap-4 lg:grid-cols-3 mt-2">
        {phases.map((p, i) => (
          <article key={p.label} className="card relative overflow-hidden">
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.color}`} aria-hidden="true" />
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <div className="eyebrow">{p.label}</div>
                <div className="font-display text-2xl font-semibold text-moss-900">{p.title}</div>
              </div>
              <div className="font-mono text-3xl font-bold text-moss-200">{String(i + 1).padStart(2, '0')}</div>
            </div>
            <ul className="space-y-2 text-sm">
              {p.items.map((item) => (
                <li key={item} className="flex gap-2 text-moss-900/85">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-moss-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="card-clay mt-4">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-clay-300/50 text-clay-800">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="eyebrow text-clay-700">Expansion gate · all six must pass</div>
            <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-clay-900/85">
              {gates.map((g) => (
                <li key={g} className="flex gap-2">
                  <span className="text-clay-700">✓</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-moss-800/70 max-w-2xl mx-auto text-balance">
          The most important success factor isn't the size of the poultry house. It's
          disciplined execution of demand validation, biosecurity, waste management,
          records, and sales — before the birds arrive.
        </p>
      </div>
    </SectionShell>
  )
}
