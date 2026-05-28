import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import type { SectionMeta } from '../types'

interface CarouselProps {
  sections: SectionMeta[]
  children: ReactNode[]
}

const SWIPE_THRESHOLD = 60

export default function Carousel({ sections, children }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const total = sections.length
  const headingId = useId()
  const trackRef = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<{ x: number; y: number; id: number } | null>(null)
  const [dragOffset, setDragOffset] = useState(0)

  const goTo = useCallback(
    (next: number) => {
      const wrapped = ((next % total) + total) % total
      setIndex(wrapped)
    },
    [total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(total - 1)
      } else if (/^[1-9]$/.test(e.key)) {
        const n = Number(e.key) - 1
        if (n < total) {
          e.preventDefault()
          goTo(n)
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev, goTo, total])

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerStart.current = { x: e.clientX, y: e.clientY, id: e.pointerId }
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current || pointerStart.current.id !== e.pointerId) return
    const dx = e.clientX - pointerStart.current.x
    const dy = e.clientY - pointerStart.current.y
    if (Math.abs(dx) > Math.abs(dy)) {
      setDragOffset(dx)
    }
  }

  const onPointerEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current || pointerStart.current.id !== e.pointerId) return
    const dx = e.clientX - pointerStart.current.x
    pointerStart.current = null
    setDragOffset(0)
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) next()
      else prev()
    }
  }

  const trackStyle: React.CSSProperties = {
    transform: `translate3d(calc(${-index * 100}% + ${dragOffset}px), 0, 0)`,
    transition: dragOffset === 0 ? 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Manukan business plan sections"
      aria-describedby={headingId}
      className="relative h-dvh w-full overflow-hidden bg-[#f6f3ec] text-ink"
    >
      <span id={headingId} className="sr-only">
        Use left and right arrow keys, swipe, or the controls to move between sections.
      </span>

      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between gap-3 px-4 sm:px-8 py-3 sm:py-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2.5">
          <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-moss-700 text-moss-50 font-display text-lg font-semibold shadow-card">
            M
          </span>
          <div className="leading-tight">
            <div className="font-display text-base sm:text-lg font-semibold text-moss-800">
              Manukan
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-moss-700/80">
              Santa Rita · Pampanga
            </div>
          </div>
        </div>
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 rounded-full border border-moss-700/15 bg-white/70 backdrop-blur px-3 py-1.5 text-xs text-moss-800">
          <span className="font-mono tabular-nums">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-moss-700/20" />
          <span className="font-medium">{sections[index].shortLabel}</span>
        </div>
      </header>

      <div
        ref={trackRef}
        className="absolute inset-0 flex touch-pan-y"
        style={trackStyle}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        aria-live="polite"
      >
        {children.map((child, i) => (
          <article
            key={sections[i].id}
            id={`section-${sections[i].id}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}: ${sections[i].title}`}
            aria-hidden={i !== index}
            className="relative h-full w-full shrink-0 overflow-hidden"
            style={{ flex: '0 0 100%' }}
          >
            <div className="h-full w-full">{child}</div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous section"
        className="group absolute left-3 sm:left-6 top-1/2 z-30 -translate-y-1/2 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/85 backdrop-blur shadow-card border border-moss-700/15 hover:bg-white hover:scale-105 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-moss-700 focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-moss-800">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next section"
        className="group absolute right-3 sm:right-6 top-1/2 z-30 -translate-y-1/2 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-moss-700 text-moss-50 shadow-card hover:bg-moss-800 hover:scale-105 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-moss-700 focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <nav
        aria-label="Section indicators"
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 rounded-full border border-moss-700/15 bg-white/85 backdrop-blur px-2 sm:px-3 py-1.5 sm:py-2 shadow-card max-w-[92vw] overflow-x-auto scrollbar-thin"
      >
        {sections.map((s, i) => {
          const active = i === index
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.title}`}
              aria-current={active ? 'true' : undefined}
              className={`group relative inline-flex items-center gap-2 rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-moss-700 ${
                active
                  ? 'bg-moss-700 text-moss-50'
                  : 'text-moss-800/70 hover:text-moss-800 hover:bg-moss-100'
              }`}
            >
              <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-clay-200' : 'bg-moss-700/40 group-hover:bg-moss-700'}`} />
              <span className="hidden sm:inline">{s.shortLabel}</span>
              <span className="sm:hidden font-mono">{i + 1}</span>
            </button>
          )
        })}
      </nav>

      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-20 hidden md:flex items-center gap-2 rounded-full border border-moss-700/15 bg-white/70 backdrop-blur px-3 py-1.5 text-[11px] text-moss-800/80">
        <kbd className="rounded bg-moss-100 px-1.5 py-0.5 font-mono">←</kbd>
        <kbd className="rounded bg-moss-100 px-1.5 py-0.5 font-mono">→</kbd>
        <span>navigate</span>
      </div>
    </section>
  )
}
