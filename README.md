# Manukan

A carousel-style web experience presenting the Manukan poultry business plan — a sanitation-first broiler pilot for Barangay Santa Monica, Santa Rita, Pampanga.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- Pure CSS animations (no carousel library — built in-house)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve dist/
npm run lint
```

## Carousel features

- 9 sections, Home first
- Visible left / right controls
- Section indicators (dots on mobile, labels on desktop)
- Keyboard: ← → arrows, PageUp/Down, Home/End, digits 1–9
- Touch / pointer swipe with threshold
- ARIA carousel roles, `aria-roledescription`, slide labels, live region
- Respects focus, no scroll-jacking inside content panels

## Content sections

1. **Home** — brand, mission, no-go principle, 500-bird pilot, 200 m preferred buffer
2. **Business model** — broilers-first, B2B sales, permitting roadmap
3. **Sanitation & site selection** — go/no-go rule, land size logic, biosecurity, drainage
4. **Site drawings & blueprints** — three scaled drawings + stocking density rule
5. **Cost estimates** — startup capital + first-cycle cash cost + break-even formula
6. **Operations & team** — roles, daily workflow, weekly review
7. **AI-enabled workflow** — seven practical AI use cases + safety rules
8. **Brand identity** — colors, typography, voice, name candidates
9. **30 / 60 / 120-day roadmap** — validate → build → run, with expansion gates

## Sources

Citations to FAO, BAI, DENR-EMB, PSA, DTI, BIR, USDA NRCS, and UGA appear inline in each section.
