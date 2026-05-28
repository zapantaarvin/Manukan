import SectionShell from '../components/SectionShell'

const rules: Array<{
  light: 'green' | 'yellow' | 'red'
  title: string
  detail: string
}> = [
  {
    light: 'green',
    title: '200 m+ from any home or sensitive receptor',
    detail: 'Adapted from FAO live-poultry market siting guidance. The conservative neighbor-safe threshold.',
  },
  {
    light: 'yellow',
    title: '100–199 m to nearest home',
    detail: 'Only with LGU approval, neighbor consent, favorable wind, roofed manure, no slaughter, and small flock.',
  },
  {
    light: 'red',
    title: 'Under 100 m to any home',
    detail: 'Hard no-go. Odor, flies, transport, and complaint risk too high for a neighbor-first project.',
  },
  {
    light: 'red',
    title: 'Flood-prone or drains toward homes/wells',
    detail: 'No-go unless redesigned by an engineer with proper swales, berms, and sediment controls.',
  },
  {
    light: 'red',
    title: 'No space for covered litter & mortality',
    detail: 'Undersized composting creates odor, flies, scavengers, and leachate (USDA NRCS).',
  },
  {
    light: 'red',
    title: 'Neighbors are downwind year-round',
    detail: 'Relocate the house on the property or reject the site (UGA Poultry Litter BMPs).',
  },
]

const lightStyle = {
  green: 'bg-moss-500 text-white',
  yellow: 'bg-clay-300 text-clay-900',
  red: 'bg-red-600/90 text-white',
} as const

export default function Sanitation() {
  return (
    <SectionShell
      eyebrow="02 · Sanitation & site selection"
      title="Neighbor-first is non-negotiable."
      lede="Before any chick arrives, the site has to pass a strict screen. We treat odor, flies, runoff, and neighbor consent as the binding constraints — not afterthoughts."
      background="moss"
      sources={[
        { label: 'FAO Live Poultry Market Biosecurity', url: 'https://openknowledge.fao.org/server/api/core/bitstreams/ab0879c3-4571-42d8-b29f-b202cf18f4bc/content' },
        { label: 'BAI Poultry Facility Inspection Form', url: 'https://www.bai.gov.ph/media/euhjrxt4/rf-ahwd-63-poultry-facility-inspection-form.pdf' },
        { label: 'DENR-EMB ECC example', url: 'https://eiais.emb.gov.ph/internal/Secured/Uploads/ECC/409bb556-bc42-4c20-802d-99e6181d4375.pdf' },
        { label: 'USDA NRCS Mortality Composting', url: 'https://www.nrcs.usda.gov/sites/default/files/2022-12/Animal%20Mortality%20Composting.pdf' },
        { label: 'UGA Poultry Litter BMPs', url: 'https://fieldreport.caes.uga.edu/publications/B1230/best-management-practices-for-storing-and-applying-poultry-litter/' },
      ]}
    >
      <div className="grid gap-4 lg:grid-cols-5 mt-2">
        <div className="card lg:col-span-3">
          <div className="eyebrow mb-3">Go / no-go property rule</div>
          <ul className="space-y-2.5">
            {rules.map((r) => (
              <li key={r.title} className="flex gap-3 items-start">
                <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold uppercase ${lightStyle[r.light]}`}>
                  {r.light === 'green' ? '✓' : r.light === 'yellow' ? '!' : '×'}
                </span>
                <div>
                  <div className="font-semibold text-moss-900 text-sm">{r.title}</div>
                  <div className="text-xs text-moss-800/75 leading-snug">{r.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-clay lg:col-span-2">
          <div className="eyebrow mb-2">Land size logic</div>
          <table className="w-full text-xs">
            <tbody className="divide-y divide-clay-200/70">
              <tr>
                <td className="py-2 pr-2 font-semibold text-clay-900">Operating compound only</td>
                <td className="py-2 text-right tabular-nums text-clay-900/85">1,000–2,000 m²</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-semibold text-clay-900">100 m owned buffer (square lot, centered)</td>
                <td className="py-2 text-right tabular-nums text-clay-900/85">~4 ha</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-semibold text-clay-900">200 m owned buffer (square lot, centered)</td>
                <td className="py-2 text-right tabular-nums text-clay-900/85">~16 ha</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-semibold text-clay-900">Best real-world compromise</td>
                <td className="py-2 text-right text-clay-900/85">House 200 m+ from homes, even if buffer isn't all owned</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <div className="card">
          <div className="eyebrow mb-2">Six biosecurity controls (FAO)</div>
          <ul className="text-sm space-y-1.5 text-moss-900/85">
            <li className="flex gap-2"><span className="text-moss-600">›</span> Visitor control, footwear discipline, handwash at entry</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> Footbath + disinfectant at every house entry</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> Immediate isolation of sick birds; vet consult</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> Covered dead-bird transport; approved disposal</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> Pest control: flies, rodents, wild birds, stagnant water</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> Clean + disinfect between every cycle</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> Daily records: deaths, feed, water, treatments, expenses</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> All-in / all-out — never mix batch ages</li>
          </ul>
        </div>

        <div className="card-emerald">
          <div className="eyebrow mb-2">Drainage concept</div>
          <pre className="text-[11px] sm:text-xs font-mono text-moss-900/85 leading-snug overflow-x-auto whitespace-pre">
{`Roof water      → gutters  → grassed swale → soakaway
Perimeter water → slope    → perimeter drain → swale
Dirty pad       → covered, no rain entry
Wash water      → screen → sediment box → vegetated filter
Emergency       → no overflow to homes, wells, canals`}
          </pre>
          <p className="mt-3 text-xs text-moss-900/75 leading-snug">
            Clean rainwater and dirty water never mix. ECC conditions commonly prohibit
            untreated discharge to receiving water bodies.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
