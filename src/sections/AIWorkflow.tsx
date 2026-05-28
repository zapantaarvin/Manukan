import SectionShell from '../components/SectionShell'

const cases = [
  {
    title: 'Daily farm summary',
    desc: 'Caretaker submits Google Form with numbers and photos. AI summarizes issues, flags abnormal mortality, drafts next-day tasks.',
    icon: 'M3 12h18M3 6h18M3 18h18',
  },
  {
    title: 'Cost monitoring',
    desc: 'Paste feed, chick, medicine, and buyer quotes into an AI worksheet. AI compares break-even by scenario.',
    icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  },
  {
    title: 'SOP assistant',
    desc: 'Store SOPs in Drive or Notion. AI answers: “what do we do if litter is wet?” or “what is the harvest checklist?”',
    icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  },
  {
    title: 'Buyer follow-up',
    desc: 'AI drafts polite buyer messages, price confirmations, harvest reminders, and collection follow-ups.',
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  },
  {
    title: 'Sanitation audit',
    desc: 'Upload weekly photos of litter, drainage, feed room, compost area. AI generates hygiene checklist, flags visible problems.',
    icon: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  },
  {
    title: 'Brand content',
    desc: 'AI creates social captions, buyer flyers, FAQs, and educational posts about clean local poultry.',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
  },
  {
    title: 'Risk alerts',
    desc: 'AI reviews daily logs and flags patterns: rising mortality, feed drop, water issues, heat stress, recurring wet litter.',
    icon: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
  },
]

export default function AIWorkflow() {
  return (
    <SectionShell
      eyebrow="06 · AI-enabled workflow"
      title="AI organizes the work. Humans make the calls."
      lede="AI doesn't replace the vet, the LGU officer, the engineer, or the bookkeeper. It keeps the SOPs honest, drafts the messages, and surfaces patterns the team would otherwise miss."
      background="cream"
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mt-2">
        {cases.map((c) => (
          <div key={c.title} className="card flex gap-3">
            <div className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-moss-100 text-moss-700">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d={c.icon} />
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-moss-900 text-sm">{c.title}</div>
              <p className="text-xs text-moss-900/75 leading-snug mt-1">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-clay mt-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-clay-300/40 text-clay-800">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <div>
            <div className="font-display font-semibold text-clay-900">Safety rules</div>
            <p className="text-sm text-clay-900/85 leading-relaxed mt-1">
              Any <strong>disease suspicion, abnormal mortality, wastewater issue,
              neighbor complaint, or permit question</strong> is escalated to a
              veterinarian, LGU officer, engineer, or accountant — immediately. AI is
              a coordination tool, not an authority.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
