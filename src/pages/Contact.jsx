import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from "../hooks/useReveal"
import { useSEO } from '../hooks/useSEO'

const V = {
  ink: '#0A0A0A',
  ink2: '#3A3A3A',
  ink3: '#7A7A7A',
  ink4: '#B8B8B8',
  blue: '#1B4FD8',
  blueLight: '#EEF2FF',
  rule: '#E2E2E2',
  bg: '#FFFFFF',
  bg2: '#F7F7F5',
  green: '#16A34A',
  serif: "'Instrument Serif',Georgia,serif",
  sans: "'DM Sans',system-ui,sans-serif"
}

const SERVICES_LIST = [
  'Sales Lead Enrichment',
  'Marketing Automation',
  'Campaign Management',
  'CRM Integration',
  'Advanced Analytics',
  'Not sure yet — need guidance'
]

const QUICK_ANS = [
  { q: 'How fast is onboarding?', a: 'Most clients are live within 48–72 hours.' },
  { q: 'Is there a free trial?', a: 'Yes — 14 days free, no credit card needed.' },
  { q: 'Which CRMs do you support?', a: 'Salesforce, HubSpot, Pipedrive + 40 more.' },
  { q: 'Any long-term contracts?', a: 'None. Month-to-month, cancel anytime.' }
]

export default function Contact() {
  useReveal()

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useSEO({
    title: "Contact AIB2B Automation — Let's Talk About Your Pipeline",
    description: 'Reach out to our B2B automation experts. We respond within one business day. Book a free strategy call or send us a message — no obligation.',
    canonical: 'https://aib2bautomation.com/contact'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div style={{ fontFamily: V.sans, background: V.bg, color: V.ink }}>
      <style>{`
        .qa-item{
          border-bottom:1px solid ${V.rule};
          padding-bottom:12px;
          margin-bottom:12px
        }

        .qa-item:last-child{
          border-bottom:none;
          margin-bottom:0;
          padding-bottom:0
        }

        .contact-hero-grid{
          display:grid;
          grid-template-columns:minmax(0,1fr) 380px;
          gap:80px;
          align-items:start
        }

        .contact-info-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:0;
          border:1px solid ${V.rule};
          border-radius:10px;
          overflow:hidden
        }

        .contact-grid{
          display:grid;
          grid-template-columns:minmax(0,1fr) 360px;
          gap:72px;
          align-items:start
        }

        .contact-form-row{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px
        }

        .contact-form{
          display:flex;
          flex-direction:column;
          gap:20px
        }

        @media (max-width: 1100px){
          .contact-hero-grid{
            grid-template-columns:1fr;
            gap:40px
          }

          .contact-grid{
            grid-template-columns:1fr !important;
            gap:40px
          }
        }

        @media (max-width: 768px){
          .contact-hero-copy{
            padding-top:0 !important
          }

          .contact-section{
            padding:56px var(--px) !important
          }

          .contact-form-row{
            grid-template-columns:1fr
          }

          .contact-success-box{
            padding:28px 22px !important
          }

          .contact-sidebar-card,
          .contact-sidebar-faq{
            padding:22px !important
          }
        }

        @media (max-width: 640px){
          .contact-info-grid{
            grid-template-columns:1fr
          }

          .contact-info-item{
            border-right:none !important;
            border-bottom:1px solid ${V.rule} !important
          }

          .contact-info-item:last-child{
            border-bottom:none !important
          }

          .contact-submit-btn,
          .contact-sidebar-demo .btn-white{
            width:100% !important;
            justify-content:center;
            display:inline-flex;
            text-align:center
          }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Contact</span>
          </nav>

          <div className="hero-h-rule" />

          <div className="contact-hero-grid">
            <h1
              style={{
                fontFamily: V.serif,
                fontSize: 'clamp(36px,5.5vw,76px)',
                fontWeight: 400,
                lineHeight: 0.97,
                letterSpacing: '-.03em',
                margin: 0
              }}
            >
              Let us talk about
              <br />
              your <em style={{ fontStyle: 'italic', color: V.blue }}>pipeline.</em>
            </h1>

            <div
              className="contact-hero-copy"
              style={{ paddingTop: 12, borderTop: `1px solid ${V.rule}` }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: V.ink2,
                  lineHeight: 1.65,
                  marginBottom: 20,
                  marginTop: 0
                }}
              >
                Our team of automation experts is ready to help you build a custom growth strategy.
                We respond within one business day — usually faster.
              </p>

              <div className="contact-info-grid">
                {[
                  { l: 'Email', v: 'hello@aib2bautomation.com' },
                  { l: 'Phone', v: '+1 (555) 123-4567' },
                  { l: 'Location', v: 'San Francisco, CA' },
                  { l: 'Hours', v: 'Mon–Fri, 9AM–6PM PST' }
                ].map((c, i) => (
                  <div
                    key={i}
                    className="contact-info-item"
                    style={{
                      padding: '14px 16px',
                      borderRight: i % 2 === 0 ? `1px solid ${V.rule}` : 'none',
                      borderBottom: i < 2 ? `1px solid ${V.rule}` : 'none'
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: V.ink4,
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        marginBottom: 4
                      }}
                    >
                      {c.l}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: V.ink }}>{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="contact-section" style={{ padding: '72px var(--px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="contact-grid">
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: V.ink4,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  marginBottom: 14
                }}
              >
                Send us a message
              </div>

              <h2
                style={{
                  fontFamily: V.serif,
                  fontSize: 'clamp(28px,3.5vw,42px)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-.025em',
                  marginBottom: 32,
                  marginTop: 0
                }}
              >
                We will get back to you <em style={{ fontStyle: 'italic', color: V.blue }}>within 24 hours.</em>
              </h2>

              {submitted ? (
                <div
                  className="contact-success-box"
                  style={{
                    padding: '40px',
                    background: V.blueLight,
                    border: `1px solid #C7D4FF`,
                    borderRadius: 12,
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                  <div
                    style={{
                      fontFamily: V.serif,
                      fontSize: 24,
                      fontWeight: 400,
                      color: V.ink,
                      marginBottom: 8
                    }}
                  >
                    Message sent.
                  </div>
                  <p style={{ fontSize: 14, color: V.ink3, marginBottom: 20 }}>
                    A team member will be in touch within one business day — often sooner.
                  </p>
                  <button
                    className="btn-blue"
                    style={{ fontSize: 14, padding: '10px 20px' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
                  <div className="contact-form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full name *</label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Alex Johnson"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Work email *</label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company name *</label>
                      <input
                        id="company"
                        required
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">What can we help with?</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your current pipeline challenges and what you are hoping to achieve..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-blue contact-submit-btn"
                    disabled={loading}
                    style={{
                      fontSize: 15,
                      padding: '14px 28px',
                      width: 'fit-content',
                      opacity: loading ? 0.7 : 1
                    }}
                  >
                    {loading ? 'Sending...' : 'Send message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div
                className="contact-sidebar-card contact-sidebar-demo"
                style={{ background: V.ink, borderRadius: 12, padding: 28 }}
              >
                <div
                  style={{
                    fontFamily: V.serif,
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'white',
                    marginBottom: 12
                  }}
                >
                  Book a free demo
                </div>

                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,.55)',
                    lineHeight: 1.65,
                    marginBottom: 20,
                    marginTop: 0
                  }}
                >
                  See the platform live in a 30-minute personalised demo. We tailor it to your
                  industry, your stack, and your specific use case.
                </p>

                <Link
                  to="/contact"
                  className="btn-white"
                  style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}
                >
                  Schedule demo →
                </Link>
              </div>

              <div
                className="contact-sidebar-faq"
                style={{
                  background: V.bg2,
                  border: `1px solid ${V.rule}`,
                  borderRadius: 12,
                  padding: 28
                }}
              >
                <div
                  style={{
                    fontFamily: V.serif,
                    fontSize: 18,
                    fontWeight: 400,
                    color: V.ink,
                    marginBottom: 20
                  }}
                >
                  Quick answers
                </div>

                {QUICK_ANS.map((a, i) => (
                  <div key={i} className="qa-item">
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: V.ink,
                        marginBottom: 3
                      }}
                    >
                      {a.q}
                    </div>
                    <div style={{ fontSize: 13, color: V.ink3 }}>{a.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}