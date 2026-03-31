import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import AiLeadScoring from './pages/blog/ai-lead-scoring-guide-2025'
import MarketingMistakes from './pages/blog/marketing-automation-mistakes'
import EmailDeliverability from './pages/blog/b2b-email-deliverability'
import CrmHygiene from './pages/blog/crm-data-hygiene'
import Personalization from './pages/blog/outbound-personalization-at-scale'
import MultiChannel from './pages/blog/multi-channel-sequencing'
import LeadEnrichment from './pages/services/lead-enrichment'
import MarketingAutomation from './pages/services/marketing-automation'
import CampaignManagement from './pages/services/campaign-management'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/lead-enrichment" element={<LeadEnrichment />} />
        <Route path="services/marketing-automation" element={<MarketingAutomation />} />
        <Route path="services/campaign-management" element={<CampaignManagement />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/ai-lead-scoring-guide-2025" element={<AiLeadScoring />} />
        <Route path="blog/marketing-automation-mistakes" element={<MarketingMistakes />} />
        <Route path="blog/b2b-email-deliverability" element={<EmailDeliverability />} />
        <Route path="blog/crm-data-hygiene" element={<CrmHygiene />} />
        <Route path="blog/outbound-personalization-at-scale" element={<Personalization />} />
        <Route path="blog/multi-channel-sequencing" element={<MultiChannel />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  )
}
