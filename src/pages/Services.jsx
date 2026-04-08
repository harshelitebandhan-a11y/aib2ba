import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'

const SERVICES = [
  {
    num: '01',
    tag: 'LEAD ENRICHMENT',
    title: 'Sales Lead Enrichment',
    desc: 'Transform raw leads into fully qualified prospects with AI enrichment, intent scoring, and real-time verification — before your reps touch a record.',
    features: [
      'Real-time data verification',
      'AI lead scoring',
      'Intent data analysis',
      'Firmographic and technographic data',
      'CRM auto-sync',
    ],
    metric: '40% more qualified leads',
    price: '299',
    accent: '#175cd3',
    accentLight: '#eff8ff',
    accentBorder: '#bfdcff',
  },
  {
    num: '02',
    tag: 'MARKETING AUTOMATION',
    title: 'Marketing Automation',
    desc: 'Build multi-channel workflows that nurture prospects automatically. Every step triggers on real buyer behaviour, not arbitrary timers.',
    features: [
      'Visual workflow builder',
      'Email and LinkedIn sequences',
      'Behavioural trigger campaigns',
      'A/B testing engine',
      'Multi-channel orchestration',
    ],
    metric: '250% more responses',
    price: '499',
    accent: '#7f56d9',
    accentLight: '#f4f3ff',
    accentBorder: '#d9d6fe',
  },
  {
    num: '03',
    tag: 'GTM EXECUTION',
    title: 'Campaign Management',
    desc: 'End-to-end campaign execution with real-time tracking, AI optimisation, and full revenue attribution so you always know what is working.',
    features: [
      'Campaign strategy and copy',
      'Multi-channel execution',
      'Real-time performance dashboard',
      'AI-powered optimisation',
      'Revenue attribution',
    ],
    metric: '31% pipeline increase in 90 days',
    price: '799',
    accent: '#0ba5ec',
    accentLight: '#f0f9ff',
    accentBorder: '#b9e6fe',
  },
]

const ADD_ONS = [
  {
    title: 'CRM Integration',
    desc: 'Bidirectional sync with Salesforce, HubSpot, Pipedrive, and 40+ platforms. Every enriched field lands in your CRM automatically.',
    price: '199',
  },
  {
    title: 'Advanced Email Tools',
    desc: 'IP warming, deliverability monitoring, template library, and inbox placement testing to maximise reach and open rates.',
    price: '149',
  },
  {
    title: 'Advanced Analytics',
    desc: 'Deep-dive pipeline reporting, full revenue attribution, and AI-powered forecasting so you know what is driving growth.',
    price: '299',
  },
]

const STEPS = [
  {
    week: 'Step 01',
    title: 'Discovery call',
    body: '30-minute call to understand your goals, tech stack, and pipeline bottlenecks. No pitch — just honest diagnosis.',
  },
  {
    week: 'Step 02',
    title: 'Custom proposal',
    body: 'A tailored proposal with exact services and pricing. Clear scope, no hidden fees, no long-term lock-in.',
  },
  {
    week: 'Step 03',
    title: 'Onboarding',
    body: 'Our team handles setup. CRM connections, workflow builds, sequence config. Live in 48 to 72 hours.',
  },
  {
    week: 'Step 04',
    title: 'Grow and scale',
    body: 'Weekly check-ins, monthly reviews, continuous AI optimisation. Every month builds on the last.',
  },
]

export default function Services() {
  useSEO({
    title: 'B2B Marketing Automation & Lead Enrichment Services | AIB2B',
    description:
      'Lead enrichment, marketing automation, and campaign management for B2B revenue teams. From $299/mo. Setup in 48 hours.',
    canonical: 'https://aib2bautomation.com/services',
  })
  useReveal()

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section" style={{ padding: '88px 0 64px' }}>
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 28, fontSize: 13, color: '#667085' }}>
            <Link to="/" style={{ color: '#667085' }}>Home</Link>
            <span>›</span>
            <span style={{ color: '#101828', fontWeight: 600 }}>Services</span>
          </nav>

          <div className="hero-badge au d1" style={{ marginBottom: 20 }}>
            <span className="hero-badge-dot" />
            B2B automation built to scale
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <h1 className="hero-title au d2" style={{ fontSize: 'clamp(38px,5.5vw,68px)', marginBottom: 20 }}>
                B2B automation,{' '}
                <span style={{ color: '#175cd3' }}>built to scale</span>{' '}
                your pipeline.
              </h1>
              <p className="hero-text au d3">
                From lead enrichment to full campaign management — we handle every stage of your revenue pipeline so your team can focus on closing deals.
              </p>
              <div className="hero-actions au d3">
                <Link to="/contact" className="btn btn-primary">Get custom quote</Link>
                <Link to="/pricing" className="btn btn-secondary">View pricing</Link>
              </div>
            </div>

            <div className="au d4">
              <div className="hero-panel">
                <div className="hero-panel-top">
                  <div className="hero-window-dots"><span /><span /><span /></div>
                  <div className="hero-live-pill"><span className="hero-live-dot" />Live metrics</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: '1px solid #eaecf0' }}>
                  {[{ n: '40%', l: 'More leads' }, { n: '250%', l: 'More responses' }, { n: '9×', l: 'Average ROI' }].map((s, i) => (
                    <div key={i} style={{ padding: '20px 16px', borderRight: i < 2 ? '1px solid #eaecf0' : 'none', textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, fontWeight: 800, color: '#175cd3', lineHeight: 1, marginBottom: 6, letterSpacing: '-0.04em' }}>{s.n}</div>
                      <div style={{ fontSize: 12, color: '#667085', fontWeight: 600 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Core services</div>
              <h2 className="section-title">Three ways we fill your pipeline.</h2>
            </div>
            <p className="section-copy">
              We combine process thinking, automation, CRM structure, and AI workflow logic to generate better-fit pipeline with less manual friction.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <article key={i} className={`service-card reveal d${(i % 3) + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="service-number">{s.num}</div>
                <div className="service-tag" style={{ color: s.accent }}>{s.tag}</div>
                <h3 style={{ fontFamily: "'Sora',sans-serif" }}>{s.title}</h3>
                <p>{s.desc}</p>

                <div style={{ borderTop: '1px solid #eaecf0', paddingTop: 16, marginTop: 4, marginBottom: 16, flex: 1 }}>
                  {s.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#475467', padding: '5px 0', borderBottom: fi < s.features.length - 1 ? '1px solid #f2f4f7' : 'none' }}>
                      <span style={{ color: s.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', background: s.accentLight, border: `1px solid ${s.accentBorder}`, borderRadius: 999, fontSize: 12, fontWeight: 700, color: s.accent, marginBottom: 16, width: 'fit-content' }}>
                  ↑ {s.metric}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #eaecf0', marginTop: 'auto' }}>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 800, color: '#101828' }}>
                    ${s.price}<span style={{ fontSize: 13, fontWeight: 500, color: '#667085' }}>/mo</span>
                  </div>
                  <Link to="/contact" className="btn btn-primary" style={{ minHeight: 40, padding: '0 16px', fontSize: 13, background: s.accent, boxShadow: 'none' }}>
                    Get started →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section style={{ padding: '0 0 72px' }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Power-ups</div>
              <h2 className="section-title">Extend any plan with more capabilities.</h2>
            </div>
            <p className="section-copy">Add exactly what you need without paying for what you don't.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {ADD_ONS.map((a, i) => (
              <div key={i} className={`service-card reveal d${i + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: '#eff8ff', border: '1px solid #bfdcff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#175cd3', marginBottom: 16 }}>⊕</div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, marginBottom: 8, marginTop: 0 }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: '#475467', lineHeight: 1.8, marginBottom: 20, flex: 1 }}>{a.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #eaecf0', marginTop: 'auto' }}>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 800 }}>${a.price}<span style={{ fontSize: 13, fontWeight: 500, color: '#667085' }}>/mo</span></div>
                  <Link to="/contact" className="btn btn-primary" style={{ minHeight: 40, padding: '0 16px', fontSize: 13, boxShadow: 'none' }}>Add on →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">How we work together</div>
              <h2 className="section-title">From first call to live pipeline in days.</h2>
            </div>
            <p className="section-copy">
              Most clients are generating pipeline within 72 hours of signing. No lengthy implementation. No surprises.
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

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-card reveal">
            <div className="cta-copy">
              <div className="section-mini-head light">Ready to transform your sales pipeline?</div>
              <h2>Custom package. No lock-in. No surprises.</h2>
              <p>Tell us about your pipeline and we'll map the right workflow for your team in a 30-minute strategy call.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">Schedule a consultation</Link>
              <Link to="/case-studies" className="btn btn-outline-light">See results</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}