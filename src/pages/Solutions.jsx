import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

const SOLUTIONS = [
  {
    num: '01',
    tag: 'ENTERPRISE',
    title: 'Enterprise Sales Acceleration',
    desc: 'Complete pipeline automation for large organisations with complex, multi-stakeholder buying cycles and long deal timelines.',
    features: [
      'Multi-stage pipeline automation',
      'Advanced lead scoring and routing',
      'Sales team performance analytics',
      'Custom CRM integrations',
      'Enterprise-grade security and SSO',
    ],
    metric: 'Average 40% increase in qualified leads',
    industries: ['Technology', 'Manufacturing', 'Financial Services'],
    accent: '#175cd3',
    accentLight: '#eff8ff',
    accentBorder: '#bfdcff',
  },
  {
    num: '02',
    tag: 'E-COMMERCE',
    title: 'E-commerce Growth Suite',
    desc: 'Specialised automation for online retailers looking to maximise acquisition, improve retention, and grow lifetime customer value.',
    features: [
      'Abandoned cart recovery sequences',
      'Customer lifecycle automation',
      'Product recommendation engine',
      'Cross-sell and upsell campaigns',
      'Inventory-based trigger marketing',
    ],
    metric: 'Average 25% boost in conversion rates',
    industries: ['Retail', 'Fashion', 'Consumer Goods'],
    accent: '#7f56d9',
    accentLight: '#f4f3ff',
    accentBorder: '#d9d6fe',
  },
  {
    num: '03',
    tag: 'SAAS',
    title: 'SaaS Customer Success',
    desc: 'End-to-end automation to reduce churn, drive expansion revenue, and improve net revenue retention — without adding headcount.',
    features: [
      'Automated onboarding sequences',
      'Usage-based trigger campaigns',
      'Churn prediction and prevention',
      'Expansion revenue workflows',
      'Customer health scoring',
    ],
    metric: 'Average 30% reduction in churn rate',
    industries: ['SaaS', 'Software', 'Technology'],
    accent: '#0ba5ec',
    accentLight: '#f0f9ff',
    accentBorder: '#b9e6fe',
  },
  {
    num: '04',
    tag: 'PROFESSIONAL SERVICES',
    title: 'Professional Services Growth',
    desc: 'Tailored automation for consultancies, agencies, and professional service firms that live and die by their relationship pipeline.',
    features: [
      'Proposal and RFP automation',
      'Client nurturing sequences',
      'Referral programme management',
      'Project-based marketing triggers',
      'Thought leadership campaigns',
    ],
    metric: 'Average 35% increase in qualified inquiries',
    industries: ['Consulting', 'Legal', 'Marketing Agencies'],
    accent: '#12b76a',
    accentLight: '#ecfdf3',
    accentBorder: '#abefc6',
  },
]

const STEPS = [
  {
    week: 'Step 01',
    title: 'Discovery and analysis',
    body: 'We map your current processes, identify the bottlenecks that cost you the most revenue, and surface quick wins you can act on immediately.',
  },
  {
    week: 'Step 02',
    title: 'Strategy development',
    body: 'A custom automation roadmap aligned with your specific goals and industry dynamics — not a generic best-practices document.',
  },
  {
    week: 'Step 03',
    title: 'Implementation',
    body: 'Seamless deployment with zero disruption to your existing operations. Most clients are live in 48 to 72 hours.',
  },
  {
    week: 'Step 04',
    title: 'Optimise and scale',
    body: 'Continuous monitoring and monthly refinement sessions to compound your ROI over time. Every month should outperform the last.',
  },
]

const COMPARE = [
  ['Industry-specific workflow logic', 'Yes', 'Generic templates'],
  ['Custom lead scoring per vertical', 'Yes', 'One-size-fits-all'],
  ['Dedicated onboarding support', 'Yes', 'Self-serve only'],
  ['CRM process integration', 'Yes', 'Usually separate'],
  ['Fast implementation', 'Weeks', 'Months'],
  ['Built for your GTM process', 'Yes', 'Mostly template-based'],
]

export default function Solutions() {
  useReveal()
  useSEO({
    title: 'B2B Automation Solutions by Industry | AIB2B Automation',
    description:
      'Industry-specific B2B automation solutions for enterprise sales, SaaS customer success, e-commerce growth, and professional services.',
    canonical: 'https://aib2bautomation.com/solutions',
  })

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section" style={{ padding: '88px 0 64px' }}>
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 28, fontSize: 13, color: '#667085' }}>
            <Link to="/" style={{ color: '#667085' }}>Home</Link>
            <span>›</span>
            <span style={{ color: '#101828', fontWeight: 600 }}>Solutions</span>
          </nav>

          <div className="hero-badge au d1" style={{ marginBottom: 20 }}>
            <span className="hero-badge-dot" />
            Industry-specific automation
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <h1 className="hero-title au d2" style={{ fontSize: 'clamp(38px,5.5vw,68px)', marginBottom: 20 }}>
                Solutions built for{' '}
                <span style={{ color: '#175cd3' }}>your industry,</span>{' '}
                not anyone else's.
              </h1>
              <p className="hero-text au d3">
                Generic automation playbooks fail because every industry has different buyers, different timelines, and different signals. We build around yours from day one.
              </p>
              <div className="hero-actions au d3">
                <Link to="/contact" className="btn btn-primary">Find your solution</Link>
                <Link to="/services" className="btn btn-secondary">View all services</Link>
              </div>
            </div>

            <div className="au d4">
              <div className="hero-panel">
                <div className="hero-panel-top">
                  <div className="hero-window-dots"><span /><span /><span /></div>
                  <div className="hero-live-pill"><span className="hero-live-dot" />4 verticals</div>
                </div>
                <div style={{ padding: '20px 18px', display: 'grid', gap: 12 }}>
                  {SOLUTIONS.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: '1px solid #eaecf0', borderRadius: 12, background: '#fcfcfd' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.accent, flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#101828', marginBottom: 2 }}>{s.title}</div>
                        <div style={{ fontSize: 11, color: '#667085' }}>{s.industries.join(' · ')}</div>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: s.accent, background: s.accentLight, padding: '3px 8px', borderRadius: 999, border: `1px solid ${s.accentBorder}`, whiteSpace: 'nowrap' }}>{s.metric.split(' ').slice(0, 2).join(' ')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Solutions</div>
              <h2 className="section-title">Four verticals. One platform.</h2>
            </div>
            <p className="section-copy">
              Each solution is built around your specific buyers, your sales cycle, and your revenue model.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 18 }}>
            {SOLUTIONS.map((s, i) => (
              <article key={i} className={`service-card reveal d${(i % 2) + 1}`} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Colored header */}
                <div style={{ background: s.accent, padding: '28px 28px 24px' }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.1em', color: 'rgba(255,255,255,0.65)', marginBottom: 10 }}>{s.num} — {s.tag}</div>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 700, color: '#ffffff', margin: '0 0 10px', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, margin: '0 0 16px' }}>{s.desc}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, color: '#ffffff' }}>
                    ↑ {s.metric}
                  </div>
                </div>

                {/* Features */}
                <div style={{ padding: '20px 28px', flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#98a2b3', marginBottom: 12 }}>Key capabilities</div>
                  {s.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#475467', padding: '5px 0', borderBottom: fi < s.features.length - 1 ? '1px solid #f2f4f7' : 'none' }}>
                      <span style={{ color: s.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* Industry tags + CTA */}
                <div style={{ padding: '16px 28px 24px', borderTop: '1px solid #eaecf0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {s.industries.map((ind) => (
                      <span key={ind} style={{ padding: '3px 10px', background: s.accentLight, color: s.accent, borderRadius: 999, fontSize: 11, fontWeight: 700, border: `1px solid ${s.accentBorder}` }}>{ind}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="btn btn-primary" style={{ minHeight: 40, padding: '0 16px', fontSize: 13, background: s.accent, boxShadow: 'none', flexShrink: 0 }}>
                    Get started →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Our process</div>
              <h2 className="section-title">From strategy to revenue in four steps.</h2>
            </div>
            <p className="section-copy">
              We do not parachute in with a generic playbook. Every engagement starts with a deep understanding of your market, your buyers, and your category.
            </p>
          </div>

          <div className="process-list">
            {STEPS.map((step, i) => (
              <div key={i} className={`process-item reveal d${(i % 4) + 1}`}>
                <div className="process-week">{step.week}</div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="compare-section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Why AIB2B</div>
              <h2 className="section-title">Not a generic tool. A system built for your vertical.</h2>
            </div>
            <p className="section-copy">
              Most platforms offer one-size-fits-all templates. We build around the specific buying behaviour and pipeline logic of your industry.
            </p>
          </div>

          <div className="compare-table reveal">
            <div className="compare-row compare-header">
              <div>Capability</div>
              <div>AIB2B</div>
              <div>Typical alternative</div>
            </div>
            {COMPARE.map(([feature, ours, theirs], i) => (
              <div className="compare-row" key={i}>
                <div>{feature}</div>
                <div className="compare-good">{ours}</div>
                <div className="compare-neutral">{theirs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-card reveal">
            <div className="cta-copy">
              <div className="section-mini-head light">Ready to build your custom solution?</div>
              <h2>Tell us about your market and we'll build around it.</h2>
              <p>
                Every solution is tailored to your buyers, your sales cycle, and your revenue model. Let's map the right workflow.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">Get a custom solution</Link>
              <Link to="/services" className="btn btn-outline-light">Explore services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}