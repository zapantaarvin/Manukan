import SectionShell from '../components/SectionShell'

interface Blueprint {
  src: string
  caption: string
  alt: string
  spec: Array<{ label: string; value: string }>
}

const blueprints: Blueprint[] = [
  {
    src: 'blueprints/preferred_200m_buffer_site_plan.png',
    alt: 'Preferred 200-meter buffer poultry site plan with operating compound centered in agricultural land',
    caption: 'Preferred 200 m buffer site plan',
    spec: [
      { label: 'Buffer to nearest home', value: '≥ 200 m' },
      { label: 'Land use surrounding', value: 'Agricultural' },
      { label: 'Wind orientation', value: 'House upwind of neighbors' },
    ],
  },
  {
    src: 'blueprints/practical_operating_compound_plan.png',
    alt: 'Practical operating compound layout with one-way clean-to-dirty traffic flow',
    caption: 'Practical operating compound (~70 m × 50 m)',
    spec: [
      { label: 'Footprint', value: '~3,500 m²' },
      { label: 'Traffic flow', value: 'Clean → birds → dirty' },
      { label: 'Zones', value: 'Entry, feed, house, litter, mortality, wash' },
    ],
  },
  {
    src: 'blueprints/broiler_house_blueprint_1000.png',
    alt: 'Naturally ventilated 1,000-head broiler house blueprint, 8 m by 15 m',
    caption: '1,000-head broiler house · 8 m × 15 m',
    spec: [
      { label: 'Floor area', value: '120 m²' },
      { label: 'Construction', value: 'Open-sided, deep litter' },
      { label: 'Roof orientation', value: 'East-west ridge' },
      { label: 'Brooding', value: 'Partial-house for weeks 1–2' },
    ],
  },
]

export default function Blueprints() {
  return (
    <SectionShell
      eyebrow="03 · Site drawings & blueprints"
      title="Three scales of the same idea."
      lede="From property buffer down to a single house. The drawings are templates — every dimension is replaced once a real Santa Monica parcel is selected."
      background="cream"
      sources={[
        { label: 'FAO Naturally Ventilated Broiler House', url: 'https://openknowledge.fao.org/server/api/core/bitstreams/7ea84142-8c8c-41e9-96ec-04e0747af5f4/content' },
        { label: 'FAO Poultry Biosecurity Plan', url: 'https://openknowledge.fao.org/server/api/core/bitstreams/c3427ad5-cf47-436c-a7ac-b791d6fb6b81/content' },
      ]}
    >
      <div className="grid gap-4 lg:grid-cols-3 mt-2">
        {blueprints.map((b) => (
          <figure key={b.src} className="card flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-moss-50/40 border border-moss-700/10">
              <img
                src={b.src}
                alt={b.alt}
                loading="lazy"
                className="h-full w-full object-contain p-2"
              />
            </div>
            <figcaption className="mt-3 space-y-2">
              <div className="font-display font-semibold text-moss-900">{b.caption}</div>
              <dl className="grid grid-cols-1 gap-y-1 text-xs">
                {b.spec.map((s) => (
                  <div key={s.label} className="flex justify-between gap-3">
                    <dt className="text-moss-800/70">{s.label}</dt>
                    <dd className="font-medium text-moss-900 text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="card-clay mt-4">
        <div className="eyebrow mb-2">Stocking density rule</div>
        <p className="text-sm text-clay-900/85 leading-relaxed">
          FAO guidance allows about <strong>30 kg of live bird per square meter</strong>{' '}
          for fully confined broilers on deep litter near market weight. This plan uses
          a deliberately more conservative layout — about{' '}
          <strong>8.3 birds/m² at ~2 kg</strong> — to reduce wet litter, ammonia,
          crowding, and management risk for a first-time operator.
        </p>
      </div>
    </SectionShell>
  )
}
