import SectionShell from '../components/SectionShell'

const startup = [
  { cat: 'Permits, registrations, site checks', a: '₱30K–120K', b: '₱40K–160K', c: '₱60K–250K' },
  { cat: 'Site prep, fill, access, drainage', a: '₱50K–250K', b: '₱80K–400K', c: '₱150K–800K' },
  { cat: 'Poultry house construction', a: '₱100K–450K', b: '₱180K–800K', c: '₱350K–1.6M' },
  { cat: 'Feed room, water, plumbing, electrical', a: '₱50K–200K', b: '₱80K–350K', c: '₱150K–650K' },
  { cat: 'Equipment (feeders, drinkers, brooder, tools)', a: '₱45K–180K', b: '₱80K–300K', c: '₱150K–550K' },
  { cat: 'Fence, gate, biosecurity entry', a: '₱50K–185K', b: '₱75K–300K', c: '₱130K–550K' },
  { cat: 'Covered litter shed, mortality handling', a: '₱55K–250K', b: '₱95K–400K', c: '₱180K–750K' },
  { cat: 'Records, office, basic software', a: '₱20K–80K', b: '₱25K–100K', c: '₱40K–150K' },
  { cat: 'Opening inventory + emergency reserve', a: '₱80K–220K', b: '₱150K–400K', c: '₱300K–800K' },
]

const startupTotal = { a: '₱480K – ₱1.94M', b: '₱805K – ₱3.21M', c: '₱1.51M – ₱6.10M' }

const cycle = [
  { cat: 'Day-old chicks', a: '₱20K–40K', b: '₱40K–80K', c: '₱80K–160K' },
  { cat: 'Feed (largest variable cost)', a: '₱70K–140K', b: '₱140K–280K', c: '₱280K–560K' },
  { cat: 'Litter, disinfectant, vitamins, vet, meds', a: '₱15K–50K', b: '₱25K–90K', c: '₱50K–180K' },
  { cat: 'Labor, utilities, water, transport', a: '₱25K–80K', b: '₱45K–150K', c: '₱90K–300K' },
  { cat: 'Sales, packaging, buyer visits, contingency', a: '₱10K–40K', b: '₱20K–75K', c: '₱40K–150K' },
]

const cycleTotal = { a: '₱140K – ₱350K', b: '₱270K – ₱675K', c: '₱540K – ₱1.35M' }

export default function Costs() {
  return (
    <SectionShell
      eyebrow="04 · Cost estimates"
      title="Planning ranges, not quotations."
      lede="Numbers are placeholders until Santa Rita contractors, feed mills, hatcheries, and the LGU give written quotes. The most important number isn't total budget — it's cost per saleable kilogram."
      background="clay"
      sources={[
        { label: 'BAI Memorandum Order No. 01', url: 'https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/57150' },
      ]}
    >
      <div className="grid gap-4 lg:grid-cols-2 mt-2">
        <div className="card">
          <div className="eyebrow mb-3">Startup capital · pre-flock</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px] sm:text-xs">
              <thead>
                <tr className="text-left text-moss-700/80 border-b border-moss-700/15">
                  <th className="py-1.5 pr-2 font-semibold">Category</th>
                  <th className="py-1.5 px-2 font-semibold text-right">500</th>
                  <th className="py-1.5 px-2 font-semibold text-right">1,000</th>
                  <th className="py-1.5 pl-2 font-semibold text-right">2,000</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-moss-700/10">
                {startup.map((r) => (
                  <tr key={r.cat}>
                    <td className="py-1.5 pr-2 text-moss-900/85">{r.cat}</td>
                    <td className="py-1.5 px-2 text-right tabular-nums text-moss-900/75">{r.a}</td>
                    <td className="py-1.5 px-2 text-right tabular-nums text-moss-900/75">{r.b}</td>
                    <td className="py-1.5 pl-2 text-right tabular-nums text-moss-900/75">{r.c}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-moss-700/30">
                  <td className="py-2 pr-2 font-semibold text-moss-900">Estimated total</td>
                  <td className="py-2 px-2 text-right tabular-nums font-semibold text-moss-900">{startupTotal.a}</td>
                  <td className="py-2 px-2 text-right tabular-nums font-semibold text-moss-900">{startupTotal.b}</td>
                  <td className="py-2 pl-2 text-right tabular-nums font-semibold text-moss-900">{startupTotal.c}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="eyebrow mb-3">First-cycle cash cost · per flock</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px] sm:text-xs">
              <thead>
                <tr className="text-left text-moss-700/80 border-b border-moss-700/15">
                  <th className="py-1.5 pr-2 font-semibold">Category</th>
                  <th className="py-1.5 px-2 font-semibold text-right">500</th>
                  <th className="py-1.5 px-2 font-semibold text-right">1,000</th>
                  <th className="py-1.5 pl-2 font-semibold text-right">2,000</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-moss-700/10">
                {cycle.map((r) => (
                  <tr key={r.cat}>
                    <td className="py-1.5 pr-2 text-moss-900/85">{r.cat}</td>
                    <td className="py-1.5 px-2 text-right tabular-nums text-moss-900/75">{r.a}</td>
                    <td className="py-1.5 px-2 text-right tabular-nums text-moss-900/75">{r.b}</td>
                    <td className="py-1.5 pl-2 text-right tabular-nums text-moss-900/75">{r.c}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-moss-700/30">
                  <td className="py-2 pr-2 font-semibold text-moss-900">Cycle cash cost</td>
                  <td className="py-2 px-2 text-right tabular-nums font-semibold text-moss-900">{cycleTotal.a}</td>
                  <td className="py-2 px-2 text-right tabular-nums font-semibold text-moss-900">{cycleTotal.b}</td>
                  <td className="py-2 pl-2 text-right tabular-nums font-semibold text-moss-900">{cycleTotal.c}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 pt-3 border-t border-moss-700/10">
            <div className="eyebrow mb-1.5">Break-even formula</div>
            <code className="block rounded bg-moss-50 px-3 py-2 text-xs font-mono text-moss-900">
              Break-even ₱/kg = Total cycle cost ÷ Saleable liveweight kg
            </code>
            <p className="mt-2 text-xs text-moss-900/70 leading-snug">
              Proceed only if confirmed buyer price is meaningfully above break-even after mortality, rejects, late harvest, emergency meds, and transport.
            </p>
          </div>
        </div>
      </div>

      <div className="card-emerald mt-4">
        <div className="eyebrow mb-2">Go / no-go rule</div>
        <p className="text-sm text-moss-900/85 leading-relaxed">
          If the margin depends on perfect mortality, perfect feed conversion, or an
          unconfirmed high selling price, <strong>reduce the flock size or delay the cycle.</strong>{' '}
          One disease event or a 10% feed price spike can erase the entire profit.
        </p>
      </div>
    </SectionShell>
  )
}
