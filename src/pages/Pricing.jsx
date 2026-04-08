import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'

const PLANS = [
  {
    name: 'Starter',
    monthly: 299,
    annual: 249,
    desc: 'For growing teams running their first automated outbound. Gets you off spreadsheets and into a real pipeline.',
    feats: [
      { t: 'Up to 5,000 leads/month', ok: true },
      { t: 'Lead enrichment and scoring', ok: true },
      { t: 'Email sequence automation', ok: true },
      { t: '1 CRM integration', ok: true },
      { t: 'Basic analytics dashboard', ok: true },
      { t: 'Email support', ok: true },
      { t: 'Multi-channel campaigns', ok: false },
      { t: 'Advanced AI scoring', ok: false },
      { t: 'Dedicated account manager', ok: false },
    ],
    featured: false,
    accent: '#475467',
  },
  {
    name: 'Growth',
    monthly: 699,
    annual: 579,
    desc: 'For revenue teams scaling pipeline with multi-channel outreach. This is where most clients see their biggest jumps.',
    feats: [
      { t: 'Up to 25,000 leads/month', ok: true },
      { t: 'Lead enrichment and scoring', ok: true },
      { t: 'Email and LinkedIn automation', ok: true },
      { t: '3 CRM integrations', ok: true },
      { t: 'Advanced analytics', ok: true },
      { t: 'Priority support', ok: true },
      { t: 'Multi-channel campaigns', ok: true },
      { t: 'Advanced AI scoring', ok: true },
      { t: 'Dedicated account manager', ok: false },
    ],
    featured: true,
    accent: '#175cd3',
  },
  {
    name: 'Enterprise',
    monthly: null,
    annual: null,
    desc: 'Custom infrastructure for complex, high-volume revenue operations. Unlimited everything — built around your needs.',
    feats: [
      { t: 'Unlimited leads', ok: true },
      { t: 'Lead enrichment and scoring', ok: true },
      { t: 'All channel automation', ok: true },
      { t: 'Unlimited integrations', ok: true },
      { t: 'Custom dashboards and BI export', ok: true },
      { t: '24/7 dedicated support', ok: true },
      { t: 'Multi-channel campaigns', ok: true },
      { t: 'Advanced AI scoring', ok: true },
      { t: 'Dedicated account manager', ok: true },
    ],
    featured: false,
    accent: '#101828',
  },
]

const FAQS = [
  { q: 'Is there a free trial?', a: 'Yes — every plan includes a full 14-day free trial with complete access. No credit card required to get started.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. Upgrade or downgrade at any time — changes take effect on your next billing cycle with no penalties.' },
  { q: 'How exactly do you count leads?', a: 'A lead is any unique contact record processed by our enrichment or automation engine during a billing month.' },
  { q: 'Which CRMs do you support?', a: 'Salesforce, HubSpot, Pipedrive, Zoho, Close, Copper, and 40+ others. Our API enables custom integrations too.' },
  { q: 'What support is included?', a: 'Starter gets email support (24h SLA). Growth gets priority chat and email. Enterprise gets a dedicated account manager and Slack channel.' },
]

const TRUST = [
  '14-day free trial',
  'Cancel anytime',
  'SOC 2 certified',
  'GDPR compliant',
  '99.9% uptime SLA',
]

const COMPARE = [
  ['Leads per month', 'Up to 5,000', 'Up to 25,000', 'Unlimited'],
  ['Lead enrichment and scoring', '✓', '✓', '✓'],
  ['Email sequence automation', '✓', '✓', '✓'],
  ['LinkedIn automation', '—', '✓', '✓'],
  ['CRM integrations', '1', '3', 'Unlimited'],
  ['Advanced AI scoring', '—', '✓', '✓'],
  ['Multi-channel campaigns', '—', '✓', '✓'],
  ['Custom dashboards', '—', '—', '✓'],
  ['Dedicated account manager', '—', '—', '✓'],
  ['Support level', 'Email', 'Priority', '24/7 Dedicated'],
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)

  useSEO({
    title: 'Pricing — AIB2B Automation | From $249/mo',
    description:
      'Transparent pricing for B2B lead enrichment and marketing automation. Starter from $249/mo, Growth from $579/mo. 14-day free trial, no credit card.',
    canonical: 'https://aib2bautomation.com/pricing',
  })
  useReveal()

  return (
    <div className="home-page">
      <style>{`
        .plan-card {
          border: 1px solid #eaecf0;
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(16,24,40,0.04);
          transition: box-shadow .2s, transform .2s;
          display: flex;
          flex-direction: column;
        }
        .plan-card:hover {
          box-shadow: 0 10px 28px rgba(16,24,40,0.10);
          transform: translateY(-2px);
        }
        .plan-card.featured {
          border-color: #175cd3;
          box-shadow: 0 0 0 2px #175cd320, 0 12px 32px rgba(23,92,211,0.12);
        }
        .plan-card.featured:hover {
          box-shadow: 0 0 0 2px #175cd340, 0 16px 40px rgba(23,92,211,0.18);
        }
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 18px;
          align-items: start;
        }
        .toggle-wrap {
          display: inline-flex;
          border: 1px solid #eaecf0;
          border-radius: 999px;
          overflow: hidden;
          background: #f9fafb;
          padding: 4px;
          gap: 4px;
        }
        .toggle-btn {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 20px;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #667085;
          border-radius: 999px;
          transition: all .15s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .toggle-btn.active {
          background: #ffffff;
          color: #101828;
          box-shadow: 0 1px 6px rgba(16,24,40,0.08);
        }
        .compare-table-full {
          border: 1px solid #eaecf0;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(16,24,40,0.04);
        }
        .compare-row-full {
          display: grid;
          grid-template-columns: 1fr 120px 140px 140px;
          border-bottom: 1px solid #eaecf0;
        }
        .compare-row-full:last-child { border-bottom: none; }
        .compare-row-full > div {
          padding: 14px 18px;
          font-size: 13.5px;
          color: #101828;
          display: flex;
          align-items: center;
        }
        .compare-row-full .col-featured {
          background: #f5f8ff;
          color: #175cd3;
          font-weight: 700;
          justify-content: center;
        }
        .compare-row-full .col-normal {
          color: #667085;
          justify-content: center;
        }
        .compare-header-full {
          background: #f8fafc;
        }
        .compare-header-full > div {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: #98a2b3;
        }
        .compare-header-full .col-featured {
          background: #eff8ff;
          color: #175cd3 !important;
          font-size: 12px;
          font-weight: 800;
        }
        @media (max-width: 1024px) {
          .plans-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .compare-table-full { display: none; }
          .toggle-btn { padding: 8px 14px; font-size: 13px; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero-section" style={{ padding: '88px 0 56px', textAlign: 'center' }}>
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 28, fontSize: 13, color: '#667085' }}>
            <Link to="/" style={{ color: '#667085' }}>Home</Link>
            <span>›</span>
            <span style={{ color: '#101828', fontWeight: 600 }}>Pricing</span>
          </nav>

          <div className="hero-badge au d1" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="hero-badge-dot" />
            No hidden fees. No lock-in.
          </div>

          <h1 className="hero-title au d2" style={{ fontSize: 'clamp(42px,6vw,72px)', marginBottom: 18, textAlign: 'center' }}>
            Simple, transparent{' '}
            <span style={{ color: '#175cd3' }}>pricing.</span>
          </h1>

          <p className="hero-text au d3" style={{ maxWidth: 480, margin: '0 auto 32px', textAlign: 'center', fontSize: 17 }}>
            No hidden fees. No lock-in. Every plan includes a 14-day free trial — no credit card required.
          </p>

          {/* Toggle */}
          <div className="au d3" style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <div className="toggle-wrap">
              <button className={`toggle-btn${!annual ? ' active' : ''}`} onClick={() => setAnnual(false)}>
                Monthly
              </button>
              <button className={`toggle-btn${annual ? ' active' : ''}`} onClick={() => setAnnual(true)}>
                Annual
                <span style={{ fontSize: 11, fontWeight: 800, background: '#ecfdf3', color: '#12b76a', padding: '2px 7px', borderRadius: 999, border: '1px solid #abefc6' }}>
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ padding: '0 0 72px' }}>
        <div className="section-container">
          <div className="plans-grid">
            {PLANS.map((p, i) => (
              <div key={i} className={`plan-card reveal d${i + 1}${p.featured ? ' featured' : ''}`}>
                {/* Popular banner */}
                {p.featured && (
                  <div style={{ background: '#175cd3', color: 'white', textAlign: 'center', fontSize: 11, fontWeight: 800, padding: '9px', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                    ★ Most Popular
                  </div>
                )}

                {/* Header */}
                <div style={{ padding: '28px 28px 24px', borderBottom: '1px solid #eaecf0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.accent }} />
                    <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, fontWeight: 800, color: '#101828', letterSpacing: '-0.03em' }}>{p.name}</div>
                  </div>
                  <p style={{ fontSize: 13, color: '#667085', lineHeight: 1.75, marginBottom: 22, marginTop: 0 }}>{p.desc}</p>

                  <div style={{ marginBottom: 22 }}>
                    {p.monthly ? (
                      <>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, lineHeight: 1 }}>
                          <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 52, fontWeight: 800, color: '#101828', letterSpacing: '-0.05em' }}>
                            ${annual ? p.annual : p.monthly}
                          </span>
                          <span style={{ fontSize: 14, color: '#667085', paddingBottom: 10 }}>/mo</span>
                        </div>
                        {annual && (
                          <div style={{ fontSize: 12, color: '#98a2b3', marginTop: 6 }}>
                            Billed ${((annual ? p.annual : p.monthly) * 12).toLocaleString()}/yr
                          </div>
                        )}
                      </>
                    ) : (
                      <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 40, fontWeight: 800, color: '#101828', letterSpacing: '-0.04em' }}>Custom</div>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'center',
                      background: p.featured ? '#175cd3' : p.accent,
                      boxShadow: p.featured ? '0 12px 24px rgba(23,92,211,0.18)' : 'none',
                    }}
                  >
                    {p.name === 'Enterprise' ? 'Contact sales →' : 'Start free trial →'}
                  </Link>
                </div>

                {/* Features */}
                <div style={{ padding: '24px 28px', flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#98a2b3', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                    What's included
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {p.feats.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: f.ok ? '#475467' : '#d0d5dd' }}>
                        <span style={{ color: f.ok ? '#12b76a' : '#d0d5dd', fontWeight: 800, flexShrink: 0, fontSize: 14, marginTop: 1 }}>
                          {f.ok ? '✓' : '✕'}
                        </span>
                        {f.t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ borderTop: '1px solid #eaecf0', borderBottom: '1px solid #eaecf0', padding: '18px 0', background: '#f8fafc' }}>
        <div className="section-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
            {TRUST.map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#475467', fontWeight: 600 }}>
                <span style={{ color: '#12b76a', fontWeight: 800 }}>✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE TABLE (desktop) */}
      <section style={{ padding: '72px 0' }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Compare plans</div>
              <h2 className="section-title">Everything side by side.</h2>
            </div>
            <p className="section-copy">
              See exactly what each plan includes so you can choose with confidence — or talk to us if you're unsure.
            </p>
          </div>

          <div className="compare-table-full reveal">
            {/* Header */}
            <div className="compare-row-full compare-header-full">
              <div>Feature</div>
              <div className="col-normal" style={{ fontWeight: 800, color: '#475467' }}>Starter</div>
              <div className="col-featured" style={{ fontWeight: 800 }}>Growth ★</div>
              <div className="col-normal" style={{ fontWeight: 800, color: '#475467' }}>Enterprise</div>
            </div>
            {COMPARE.map(([feat, starter, growth, enterprise], i) => (
              <div className="compare-row-full" key={i}>
                <div style={{ color: '#101828', fontWeight: 500 }}>{feat}</div>
                <div className="col-normal">{starter}</div>
                <div className="col-featured">{growth}</div>
                <div className="col-normal">{enterprise}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 0 72px', background: '#f8fafc', paddingTop: 72, borderTop: '1px solid #eaecf0' }}>
        <div className="section-container">
          <div className="faq-layout">
            <div className="faq-left reveal">
              <div className="section-mini-head">Pricing FAQs</div>
              <h2 className="section-title">Questions we hear every day.</h2>
              <p className="section-copy left">
                Everything you need to know before picking a plan. If something is still unclear, just book a quick call.
              </p>
            </div>

            <div className="faq-list">
              {FAQS.map((item, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    <span>{item.q}</span>
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-card reveal">
            <div className="cta-copy">
              <div className="section-mini-head light">Not sure which plan fits you?</div>
              <h2>Talk to our team. We'll find the right fit.</h2>
              <p>
                No pressure, no pitch. Just a quick 20-minute call to understand your pipeline volume and match you to the right plan.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">Talk to sales</Link>
              <Link to="/case-studies" className="btn btn-outline-light">See results</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}