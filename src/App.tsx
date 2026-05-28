import Carousel from './components/Carousel'
import Home from './sections/Home'
import BusinessModel from './sections/BusinessModel'
import Sanitation from './sections/Sanitation'
import Blueprints from './sections/Blueprints'
import Costs from './sections/Costs'
import Operations from './sections/Operations'
import AIWorkflow from './sections/AIWorkflow'
import Brand from './sections/Brand'
import Roadmap from './sections/Roadmap'
import type { SectionMeta } from './types'

const sections: SectionMeta[] = [
  { id: 'home', shortLabel: 'Home', title: 'Manukan · Clean poultry, raised next door', tone: 'home' },
  { id: 'business', shortLabel: 'Business model', title: 'Business model', tone: 'plan' },
  { id: 'sanitation', shortLabel: 'Sanitation', title: 'Sanitation & site selection', tone: 'safety' },
  { id: 'blueprints', shortLabel: 'Blueprints', title: 'Site drawings & blueprints', tone: 'design' },
  { id: 'costs', shortLabel: 'Costs', title: 'Cost estimates', tone: 'cost' },
  { id: 'operations', shortLabel: 'Operations', title: 'Operations & team', tone: 'ops' },
  { id: 'ai', shortLabel: 'AI workflow', title: 'AI-enabled workflow', tone: 'ai' },
  { id: 'brand', shortLabel: 'Brand', title: 'Brand identity', tone: 'brand' },
  { id: 'roadmap', shortLabel: 'Roadmap', title: '30 / 60 / 120-day roadmap', tone: 'roadmap' },
]

export default function App() {
  return (
    <Carousel sections={sections}>
      <Home key="home" />
      <BusinessModel key="business" />
      <Sanitation key="sanitation" />
      <Blueprints key="blueprints" />
      <Costs key="costs" />
      <Operations key="operations" />
      <AIWorkflow key="ai" />
      <Brand key="brand" />
      <Roadmap key="roadmap" />
    </Carousel>
  )
}
