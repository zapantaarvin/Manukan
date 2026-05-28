import SectionShell from '../components/SectionShell'

export default function BusinessModel() {
  return (
    <SectionShell
      eyebrow="01 · Business model"
      title="Broilers first. Buyers first. Scale last."
      lede="Broilers convert cash faster than layers and let us test buyers, mortality, feed conversion, odor, and labor discipline before committing to bigger infrastructure."
      background="cream"
      sources={[
        { label: 'PSA — Santa Rita PSGC', url: 'https://psa.gov.ph/classification/psgc/barangays/0305420000' },
        { label: 'PSA Region III livestock & poultry', url: 'https://rsso03.psa.gov.ph/statistics/livestock-and-poultry' },
        { label: 'DTI BNRS', url: 'https://bnrs.dti.gov.ph/about' },
        { label: 'BIR NewBizReg', url: 'https://web-services.bir.gov.ph/newbizreg/' },
      ]}
    >
      <div className="grid gap-4 lg:grid-cols-3 mt-2">
        <div className="card-emerald lg:col-span-2">
          <div className="eyebrow mb-2">Recommended model</div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="font-semibold text-moss-800">Poultry type</dt>
              <dd className="text-moss-900/80">Broilers first; revisit layers only after stable operations.</dd>
            </div>
            <div>
              <dt className="font-semibold text-moss-800">Pilot size</dt>
              <dd className="text-moss-900/80">500–1,000 heads. Big enough to learn, small enough to recover.</dd>
            </div>
            <div>
              <dt className="font-semibold text-moss-800">Location</dt>
              <dd className="text-moss-900/80">Santa Monica, Santa Rita, Pampanga — rural barangay, LGU-cleared site.</dd>
            </div>
            <div>
              <dt className="font-semibold text-moss-800">Sales channel</dt>
              <dd className="text-moss-900/80">B2B-first: traders, meat shops, restaurants. B2C added later.</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-semibold text-moss-800">Scaling trigger</dt>
              <dd className="text-moss-900/80">Expand only after 2–3 clean cycles with no neighbor complaints and confirmed buyer demand.</dd>
            </div>
          </dl>
        </div>

        <div className="card-clay">
          <div className="eyebrow mb-2">Regional context</div>
          <p className="text-sm text-clay-900/85 leading-relaxed">
            Central Luzon chicken production reached{' '}
            <strong className="text-clay-800">51,982.56 metric tons</strong> live weight in
            Q1 2025 (+27.2% YoY). Strong supply-chain access — but disease control and
            buyer discipline matter more.
          </p>
          <div className="mt-3 pt-3 border-t border-clay-200/60 text-xs text-clay-900/70">
            Egg production fell 6.0% in the same period — another reason to start with broilers, not layers.
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <div className="card">
          <div className="eyebrow mb-2">Value proposition</div>
          <p className="text-sm leading-relaxed text-moss-900/85">
            Healthy, locally raised broilers sold to Santa Rita and nearby Pampanga
            buyers. The position is <strong>reliability over cheapest price</strong>:
            consistent live weight, documented vaccination, clean operations, clear
            pickup or delivery schedules.
          </p>
        </div>

        <div className="card">
          <div className="eyebrow mb-2">Minimum proof before chicks</div>
          <ul className="text-sm space-y-1.5 text-moss-900/85 leading-relaxed">
            <li className="flex gap-2"><span className="text-moss-600">›</span> 60–80% of expected harvest volume pre-committed to buyers</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> ≥20 buyer interviews documented (wet market, restaurants, traders, households)</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> 3+ supplier quotes for chicks, feed, medicine</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> LGU + EMB screening cleared</li>
            <li className="flex gap-2"><span className="text-moss-600">›</span> Break-even price below confirmed buyer offer</li>
          </ul>
        </div>
      </div>

      <div className="card mt-4">
        <div className="eyebrow mb-2">Permitting & compliance roadmap</div>
        <div className="grid gap-3 md:grid-cols-4 text-sm">
          <div>
            <div className="font-semibold text-moss-800">LGU</div>
            <p className="text-moss-900/75 leading-snug">Planning &amp; Development (zoning), Health (sanitary), Engineer (building/electrical), Agriculturist (vaccination/technical).</p>
          </div>
          <div>
            <div className="font-semibold text-moss-800">Business registration</div>
            <p className="text-moss-900/75 leading-snug">DTI BNRS (sole proprietor), BIR NewBizReg with ₱30 DST and RDO follow-through.</p>
          </div>
          <div>
            <div className="font-semibold text-moss-800">Environmental</div>
            <p className="text-moss-900/75 leading-snug">DENR-EMB CNC/ECC project-checker before construction. Issuance does not waive other environmental rules.</p>
          </div>
          <div>
            <div className="font-semibold text-moss-800">Poultry movement</div>
            <p className="text-moss-900/75 leading-snug">BAI accreditation required for inter-provincial shipping. Twice-yearly AI / Salmonella / Newcastle testing.</p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
