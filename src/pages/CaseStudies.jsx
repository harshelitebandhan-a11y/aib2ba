import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

const STUDIES = [
  {
    company: 'CloudVault',
    industry: 'B2B SaaS',
    challenge:
      'Low MQL-to-SQL conversion rates and no clear view of which leads were worth pursuing. The team was spending 70% of SDR hours on prospects who never engaged.',
    solution:
      'Implemented AI lead scoring, automated data enrichment, and a five-step multi-channel nurture sequence targeting accounts that showed buying intent signals.',
    results: [
      { m: '4.7×', l: 'More qualified meetings per month' },
      { m: '38%', l: 'Increase in MQL-to-SQL rate' },
      { m: '21 days', l: 'Average time to first meeting' },
    ],
    quote:
      'AIB2B Automation completely changed how we run outbound. We went from 10 qualified meetings a month to 47 in 60 days — and the quality is noticeably higher.',
    author: 'Sarah Mitchell',
    role: 'VP Revenue · CloudVault',
    initials: 'SM',
    accent: '#175cd3',
    accentLight: '#eff8ff',
  },
  {
    company: 'Nexify',
    industry: 'Enterprise Software',
    challenge:
      'Sales team spending 70% of their time on low-quality leads. CRM data was stale, incomplete, and out of date — reps were flying blind on every call.',
    solution:
      'Deployed real-time lead enrichment, intent-based scoring, and automated CRM hygiene workflows that kept every record current without manual intervention.',
    results: [
      { m: '35%', l: 'Higher close rate' },
      { m: '$2.1M', l: 'Pipeline added in 90 days' },
      { m: '60%', l: 'Reduction in time wasted on bad leads' },
    ],
    quote:
      'The enrichment alone is worth ten times the price. We stopped wasting hours on leads that were never going to buy and started working the ones that actually mattered.',
    author: 'James Park',
    role: 'Head of Growth · Nexify',
    initials: 'JP',
    accent: '#7f56d9',
    accentLight: '#f4f3ff',
  },
  {
    company: 'DataBridge',
    industry: 'Data Infrastructure',
    challenge:
      'Relied entirely on referrals and industry conferences for new business. Needed to build a scalable outbound motion from scratch — something repeatable and compoundable.',
    solution:
      'Built end-to-end outbound from the ground up: ICP definition, list building with enrichment, multi-channel sequencing, and full campaign management.',
    results: [
      { m: '9×', l: 'ROI achieved by month three' },
      { m: '102', l: 'Sales conversations started' },
      { m: '45%', l: 'Demo-to-close rate' },
    ],
    quote:
      'We tried three automation tools before this one. Nothing came close. The ROI calculator on the website actually undersold it — we hit 9× in 90 days.',
    author: 'Priya Sharma',
    role: 'CEO · DataBridge',
    initials: 'PS',
    accent: '#0ba5ec',
    accentLight: '#f0f9ff',
  },
  {
    company: 'ProScale',
    industry: 'Marketing Technology',
    challenge:
      'High monthly churn driven by poor onboarding and no visibility into which customers were at risk until it was too late to do anything about it.',
    solution:
      'Implemented customer health scoring, usage-based trigger campaigns, and automated success milestones that surfaced at-risk accounts 30+ days before churn.',
    results: [
      { m: '30%', l: 'Reduction in monthly churn' },
      { m: '18%', l: 'Increase in expansion revenue' },
      { m: '4.8/5', l: 'Customer satisfaction score' },
    ],
    quote:
      'Within 60 days we knew which customers were likely to leave weeks before they thought about leaving. That early warning alone paid for the platform many times over.',
    author: 'Marcus Reid',
    role: 'VP Customer Success · ProScale',
    initials: 'MR',
    accent: '#12b76a',
    accentLight: '#ecfdf3',
  },
]

const STATS = [
  { value: '4.7×', label: 'More qualified meetings', sub: 'CloudVault, 60 days' },
  { value: '$2.1M', label: 'Pipeline added', sub: 'Nexify, 90 days' },
  { value: '9×', label: 'ROI achieved', sub: 'DataBridge, 3 months' },
  { value: '30%', label: 'Churn reduction', sub: 'ProScale, 60 days' },
]

export default function CaseStudies() {
  useReveal()
  useSEO({
    title: 'Customer Case Studies & Results | AIB2B Automation',
    description:
      'Real B2B companies, real revenue results. See how CloudVault hit 4.7× more meetings, Nexify added $2.1M pipeline, and DataBridge achieved 9× ROI in 90 days.',
    canonical: 'https://aib2bautomation.com/case-studies',
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
            <span style={{ color: '#101828', fontWeight: 600 }}>Case Studies</span>
          </nav>

          <div className="hero-badge au d1" style={{ marginBottom: 20 }}>
            <span className="hero-badge-dot" />
            Real companies. Real numbers.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <h1 className="hero-title au d2" style={{ fontSize: 'clamp(38px,5.5vw,68px)', marginBottom: 20 }}>
                Real companies.{' '}
                <span style={{ color: '#175cd3' }}>Real numbers.</span>
              </h1>
              <p className="hero-text au d3">
                Every number below comes from a real client engagement. No projections, no best-case scenarios, no cherry-picking. This is what actually happened.
              </p>
              <div className="hero-actions au d3">
                <Link to="/contact" className="btn btn-primary">Get results like these</Link>
                <Link to="/services" className="btn btn-secondary">Explore services</Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="au d4">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card" style={{ padding: '24px 20px' }}>
                    <div className="stat-value" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>{s.value}</div>
                    <div className="stat-label" style={{ fontSize: 13 }}>{s.label}</div>
                    <div className="stat-sub">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ padding: '72px 0' }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Results</div>
              <h2 className="section-title">Four companies. Four different wins.</h2>
            </div>
            <p className="section-copy">
              Each engagement is different — but the pattern is always the same: better systems, better pipeline, better revenue.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {STUDIES.map((s, i) => (
              <article key={i} className="reveal" style={{ border: '1px solid #eaecf0', borderRadius: 24, overflow: 'hidden', background: '#ffffff', boxShadow: '0 4px 16px rgba(16,24,40,0.04)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr' }}>
                  {/* Left colored panel */}
                  <div style={{ background: s.accent, padding: '36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>{s.industry}</div>
                      <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1 }}>{s.company}</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      {s.results.map((r, ri) => (
                        <div key={ri}>
                          <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 32, fontWeight: 800, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.04em' }}>{r.m}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 4, lineHeight: 1.4 }}>{r.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right content panel */}
                  <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#98a2b3', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>The challenge</div>
                        <p style={{ fontSize: 14, color: '#475467', lineHeight: 1.75, margin: 0 }}>{s.challenge}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#98a2b3', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>Our solution</div>
                        <p style={{ fontSize: 14, color: '#475467', lineHeight: 1.75, margin: 0 }}>{s.solution}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div style={{ borderLeft: `3px solid ${s.accent}`, paddingLeft: 20, marginTop: 4 }}>
                      <p style={{ fontSize: 15, color: '#101828', lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 12px' }}>"{s.quote}"</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: s.accentLight, border: `1px solid ${s.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: s.accent }}>
                          {s.initials}
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#101828' }}>{s.author}</div>
                          <div style={{ fontSize: 12, color: '#667085' }}>{s.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SUMMARY */}
      <section className="results-section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Why it works</div>
              <h2 className="section-title">Better systems create better pipeline.</h2>
            </div>
            <p className="section-copy">
              The value is not just automation. It is having a repeatable GTM system that improves qualification quality, follow-up speed, and sales confidence.
            </p>
          </div>

          <div className="results-grid">
            {STUDIES.map((s, i) => (
              <article key={i} className={`result-card reveal d${(i % 3) + 1}`}>
                <div className="quote-mark">"</div>
                <p className="result-text">{s.quote}</p>
                <div className="result-metric">{s.results[0].m} {s.results[0].l}</div>
                <footer className="result-footer">
                  <div className="result-avatar" style={{ background: s.accentLight, color: s.accent }}>{s.initials}</div>
                  <div>
                    <strong>{s.author}</strong>
                    <span>{s.role}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-card reveal">
            <div className="cta-copy">
              <div className="section-mini-head light">Want results like these?</div>
              <h2>Let's talk about what's possible for your pipeline.</h2>
              <p>Tell us about your current motion and we'll show you exactly where the gaps are — and how to close them in 90 days.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">Book a free strategy call</Link>
              <Link to="/services" className="btn btn-outline-light">Explore services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}