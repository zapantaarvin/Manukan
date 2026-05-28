import SectionShell from '../components/SectionShell'

const names = [
  { name: 'Manukan', note: 'Filipino plural for poultry farm — short, direct, regional.' },
  { name: 'Santa Monica Clean Poultry', note: 'Local, direct, sanitation-first.' },
  { name: 'Kapampangan Clean Chicken', note: 'Regional pride plus cleanliness.' },
  { name: 'Malinis Farm Poultry', note: 'Filipino-forward and hygiene-centered.' },
  { name: 'NeighborSafe Poultry Farm', note: 'Names the no-harm principle directly.' },
]

const voice = [
  { attr: 'Clean', we: 'Transparent about sanitation and handling.', not: 'Fear-based or clinical.' },
  { attr: 'Local', we: 'Proud of Pampanga roots.', not: 'Provincial in a limiting way.' },
  { attr: 'Responsible', we: 'Honest about animal care and neighbor respect.', not: 'Overpromising or hiding risks.' },
  { attr: 'Reliable', we: 'Consistent with buyers and schedules.', not: 'Casual or disorganized.' },
]

export default function Brand() {
  return (
    <SectionShell
      eyebrow="07 · Brand identity"
      title="Clean, local, responsible — not cheap."
      lede="The promise is poultry raised with disciplined sanitation, documented care, dry litter, responsible waste handling, and respect for the people next door."
      background="cream"
    >
      <div className="grid gap-4 lg:grid-cols-5 mt-2">
        <div className="card lg:col-span-3">
          <div className="eyebrow mb-3">Visual identity</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {[
              { name: 'Moss 700', hex: '#2c4f34', text: 'text-moss-50' },
              { name: 'Moss 500', hex: '#4d7d54', text: 'text-moss-50' },
              { name: 'Clay 300', hex: '#d3b884', text: 'text-clay-900' },
              { name: 'Cream', hex: '#faf7f2', text: 'text-clay-900' },
            ].map((c) => (
              <div
                key={c.name}
                className={`rounded-lg p-3 ${c.text} flex flex-col justify-between aspect-[5/4] border border-black/5`}
                style={{ background: c.hex }}
              >
                <div className="font-display text-sm font-semibold">{c.name}</div>
                <div className="font-mono text-[10px] opacity-80">{c.hex.toUpperCase()}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <div className="font-semibold text-moss-800">Typography</div>
              <div className="text-moss-900/80">
                Fraunces (display, headings) · Inter (body, UI). Clean sans-serif for signs, labels, invoices.
              </div>
            </div>
            <div>
              <div className="font-semibold text-moss-800">Logo direction</div>
              <div className="text-moss-900/80">
                Simple chicken silhouette or egg outline with a leaf or check mark. Trustworthy, not cartoonish.
              </div>
            </div>
            <div className="sm:col-span-2 pt-2 border-t border-moss-700/10">
              <div className="font-semibold text-moss-800">Tagline candidates</div>
              <ul className="mt-1 space-y-0.5 text-moss-900/80">
                <li>“Clean poultry, responsibly raised.”</li>
                <li>“Fresh local chicken, raised with care.”</li>
                <li className="font-display italic">“Malinis. Lokal. Maaasahan.”</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-emerald lg:col-span-2">
          <div className="eyebrow mb-2">Name candidates</div>
          <ul className="space-y-2">
            {names.map((n) => (
              <li key={n.name}>
                <div className="font-display font-semibold text-moss-900">{n.name}</div>
                <div className="text-xs text-moss-900/70 leading-snug">{n.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mt-4">
        <div className="eyebrow mb-3">Brand voice</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-moss-700/15 text-left text-moss-700/80 text-xs">
                <th className="py-1.5 pr-2 font-semibold">Attribute</th>
                <th className="py-1.5 px-2 font-semibold">We are</th>
                <th className="py-1.5 pl-2 font-semibold">We are not</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-moss-700/10">
              {voice.map((v) => (
                <tr key={v.attr}>
                  <td className="py-2 pr-2 font-display font-semibold text-moss-900">{v.attr}</td>
                  <td className="py-2 px-2 text-moss-900/80">{v.we}</td>
                  <td className="py-2 pl-2 text-moss-900/70">{v.not}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  )
}
