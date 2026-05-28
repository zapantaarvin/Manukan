import type { ReactNode } from 'react'
import type { Source } from '../types'

interface SectionShellProps {
  eyebrow: string
  title: string
  lede?: string
  children: ReactNode
  sources?: Source[]
  background?: 'cream' | 'moss' | 'clay'
}

const bgClass: Record<NonNullable<SectionShellProps['background']>, string> = {
  cream: 'bg-[#f6f3ec]',
  moss: 'bg-gradient-to-br from-moss-50 via-[#f6f3ec] to-moss-100',
  clay: 'bg-gradient-to-br from-clay-50 via-[#f6f3ec] to-clay-100',
}

export default function SectionShell({
  eyebrow,
  title,
  lede,
  children,
  sources,
  background = 'cream',
}: SectionShellProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${bgClass[background]} grain`}>
      <div className="section-shell mx-auto max-w-7xl">
        <header className="space-y-2">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="section-title">{title}</h2>
          {lede ? <p className="section-lede">{lede}</p> : null}
        </header>
        <div className="section-content scrollbar-thin">
          {children}
          {sources && sources.length > 0 ? (
            <footer className="mt-6 pt-4 border-t border-moss-700/10">
              <div className="text-[10px] uppercase tracking-widest text-moss-700/70 mb-1.5">
                Sources
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-moss-800/80">
                {sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-moss-700/30 hover:decoration-moss-700 hover:text-moss-800"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          ) : null}
        </div>
      </div>
    </div>
  )
}
