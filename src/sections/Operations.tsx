import SectionShell from '../components/SectionShell'

const roles = [
  { role: 'General manager', s500: 'Owner', s1000: 'Owner', resp: 'Permits, cash, buyers, suppliers, weekly review.' },
  { role: 'Farm caretaker', s500: 'Owner / part-time', s1000: 'Dedicated', resp: 'Feeding, water, litter, cleaning, mortality, daily records.' },
  { role: 'Health & biosecurity', s500: 'Owner + vet', s1000: 'Owner + vet/agriculturist', resp: 'Vaccination, disease alerts, sanitation audits, visitor control.' },
  { role: 'Sales', s500: 'Owner', s1000: 'Owner + helper', resp: 'Buyer list, harvest schedule, collections, price monitoring.' },
  { role: 'Bookkeeping', s500: 'Owner', s1000: 'Part-time bookkeeper', resp: 'Expenses, receipts, BIR, payroll, inventory, profit report.' },
]

const day = [
  { time: 'Morning', task: 'Temperature, water, feed, bird behavior, wet litter, mortality.', log: 'Daily flock log' },
  { time: 'Midday', task: 'Heat stress, drinker leaks, ventilation, feed level, security.', log: 'Issue log if abnormal' },
  { time: 'Afternoon', task: 'Refill feed/water, clean spills, remove dead birds, check drainage.', log: 'Feed + mortality log' },
  { time: 'Evening', task: 'Secure house, plan next-day supplies, update buyer messages.', log: 'Cash + inventory log' },
]

export default function Operations() {
  return (
    <SectionShell
      eyebrow="05 · Operations & team"
      title="A small farm run with discipline."
      lede="At 500–1,000 heads, one trained caretaker plus an attentive owner can run a clean cycle. What scales the farm isn't more hands — it's better records and tighter SOPs."
      background="moss"
      sources={[
        { label: 'FAO Poultry Biosecurity Plan', url: 'https://openknowledge.fao.org/server/api/core/bitstreams/c3427ad5-cf47-436c-a7ac-b791d6fb6b81/content' },
        { label: 'Republic Act No. 9296 (Meat Inspection Code)', url: 'https://lawphil.net/statutes/repacts/ra2004/ra_9296_2004.html' },
      ]}
    >
      <div className="grid gap-4 lg:grid-cols-5 mt-2">
        <div className="card lg:col-span-3">
          <div className="eyebrow mb-3">Roles by pilot size</div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-moss-700/15 text-left text-moss-700/80">
                  <th className="py-1.5 pr-2 font-semibold">Role</th>
                  <th className="py-1.5 px-2 font-semibold">500 heads</th>
                  <th className="py-1.5 px-2 font-semibold">1,000 heads</th>
                  <th className="py-1.5 pl-2 font-semibold">Core responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-moss-700/10">
                {roles.map((r) => (
                  <tr key={r.role}>
                    <td className="py-2 pr-2 font-medium text-moss-900">{r.role}</td>
                    <td className="py-2 px-2 text-moss-900/75">{r.s500}</td>
                    <td className="py-2 px-2 text-moss-900/75">{r.s1000}</td>
                    <td className="py-2 pl-2 text-moss-900/75">{r.resp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-clay lg:col-span-2">
          <div className="eyebrow mb-2">Weekly review · 30 min</div>
          <ul className="text-sm space-y-1.5 text-clay-900/85">
            <li className="flex gap-2"><span className="text-clay-600">›</span> Mortality rate vs target</li>
            <li className="flex gap-2"><span className="text-clay-600">›</span> Feed used / remaining</li>
            <li className="flex gap-2"><span className="text-clay-600">›</span> Estimated weight curve</li>
            <li className="flex gap-2"><span className="text-clay-600">›</span> Cash spent vs budget</li>
            <li className="flex gap-2"><span className="text-clay-600">›</span> Buyer commitments</li>
            <li className="flex gap-2"><span className="text-clay-600">›</span> Health & sanitation issues</li>
            <li className="flex gap-2"><span className="text-clay-600">›</span> Neighbor observations</li>
          </ul>
          <p className="mt-3 pt-3 border-t border-clay-200/60 text-xs text-clay-900/70">
            Any odor, fly, runoff, or neighbor complaint triggers immediate corrective action — no waiting for the next meeting.
          </p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="eyebrow mb-3">Daily workflow</div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {day.map((d) => (
            <div key={d.time} className="rounded-lg border border-moss-700/10 bg-moss-50/40 p-3">
              <div className="font-display font-semibold text-moss-800">{d.time}</div>
              <p className="text-xs text-moss-900/80 leading-snug mt-1">{d.task}</p>
              <div className="mt-2 pt-2 border-t border-moss-700/10 text-[11px] uppercase tracking-wider text-moss-700/70">
                {d.log}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <div className="card-emerald">
          <div className="eyebrow mb-2">Production discipline</div>
          <ul className="text-sm space-y-1.5 text-moss-900/85">
            <li>• All-in / all-out broiler cycles only — no mixed ages</li>
            <li>• Clean → disinfect → dry → rest between every batch</li>
            <li>• No on-site slaughter unless separately permitted under RA 9296</li>
          </ul>
        </div>
        <div className="card">
          <div className="eyebrow mb-2">Tool stack</div>
          <ul className="text-sm space-y-1 text-moss-900/85">
            <li><strong>Daily log:</strong> Google Forms → Sheets</li>
            <li><strong>Dashboard:</strong> Google Sheets / Looker Studio</li>
            <li><strong>Tasks:</strong> Trello, Asana, or Notion</li>
            <li><strong>Team chat:</strong> WhatsApp / Viber group</li>
            <li><strong>Books:</strong> QuickBooks / Xero / Wave</li>
            <li><strong>Docs:</strong> Google Drive (permits, SOPs, vet records)</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
