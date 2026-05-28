export interface SectionMeta {
  id: string
  shortLabel: string
  title: string
  tone: 'home' | 'plan' | 'safety' | 'design' | 'cost' | 'ops' | 'ai' | 'brand' | 'roadmap'
}

export interface Source {
  label: string
  url: string
}
