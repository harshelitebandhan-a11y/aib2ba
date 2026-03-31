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

const STATS = [
  { n: '500+', t: 'Happy clients', s: 'across 12 countries' },
  { n: '$50M+', t: 'Revenue generated', s: 'for our client base' },
  { n: '50+', t: 'Team members', s: 'across sales, product, and CS' },
  { n: '4.9/5', t: 'Average rating', s: 'from verified G2 reviews' }
]

const VALUES = [
  {
    g: '◎',
    title: 'Results first',
    desc: 'Every strategy is built around measurable outcomes. Vanity metrics are not on our scorecard — closed revenue is.'
  },
  {
    g: '⚡',
    title: 'Speed matters',
    desc: 'We move fast because your pipeline cannot wait. Most clients are live and generating results within 48 hours.'
  },
  {
    g: '♡',
    title: 'Client success',
    desc: 'Your growth is our growth. We build long-term partnerships, which is why 94% of our clients renew year over year.'
  },
  {
    g: '⬡',
    title: 'Scalable by design',
    desc: 'Our infrastructure grows with you — from a 10-person startup running their first outbound to a Fortune 500 enterprise.'
  }
]

const TEAM = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    exp: ['Sales Strategy', 'RevOps', 'Team Leadership'],
    bio: 'Former VP of Sales at TechCorp with 15+ years in B2B automation. Alex built his first lead scoring model in 2009 and has been obsessed with the space ever since.'
  },
  {
    name: 'Sarah Kim',
    role: 'CTO',
    exp: ['AI/ML', 'Marketing Automation', 'Architecture'],
    bio: 'Sarah led ML infrastructure at Google before joining us to build the scoring engine that now powers 500+ client pipelines. She holds three patents in predictive analytics.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Customer Success',
    exp: ['Customer Success', 'Process Optimisation'],
    bio: 'Marcus has helped over 500 companies redesign their sales and marketing processes. His clients average 40% improvement in qualified pipeline within 90 days.'
  },
  {
    name: 'Emily Chen',
    role: 'Lead Data Scientist',
    exp: ['Data Science', 'Predictive Analytics'],
    bio: "Emily's PhD research on buyer intent signals became the foundation for our enrichment model. She joined us straight from her postdoc because she wanted to see her work used in the real world."
  }
]

const MILESTONES = [
  {
    year: '2019',
    title: 'Company founded',
    desc: 'Started in a San Francisco co-working space with four people and one obsession: making outbound work better for smaller teams.'
  },
  {
    year: '2020',
    title: 'First 100 clients',
    desc: 'Reached our first milestone helping growing companies automate their sales process — then immediately realised we had built something others genuinely needed.'
  },
  {
    year: '2021',
    title: 'AI integration',
    desc: 'Launched our proprietary AI-powered lead scoring and enrichment platform. Average client saw a 40% lift in qualified pipeline within 90 days.'
  },
  {
    year: '2022',
    title: 'Series A funding',
    desc: 'Secured $10M in Series A led by Accel Partners to accelerate product development, hiring, and go-to-market expansion.'
  },
  {
    year: '2023',
    title: 'Enterprise solutions',
    desc: 'Launched enterprise-grade infrastructure serving Fortune 500 companies with custom SLAs, dedicated environments, and professional services.'
  },
  {
    year: '2024',
    title: 'Global expansion',
    desc: 'Expanded to serve clients across North America, Europe, and APAC with localised playbooks and regional support coverage.'
  }
]

export default function About() {
  useReveal()

  useSEO({
    title: 'About AIB2B Automation — Our Mission, Team & Story',
    description: 'Meet the team behind AIB2B Automation. We help 500+ B2B companies build predictable revenue through intelligent lead enrichment and marketing automation. Founded 2019.',
    canonical: 'https://aib2bautomation.com/about'
  })

  return (
    <div style={{ fontFamily: V.sans, background: V.bg, color: V.ink }}>
      <style>{`
        .about-hero-grid{
          display:grid;
          grid-template-columns:minmax(0,1fr) 380px;
          gap:80px;
          align-items:start
        }

        .about-stats-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr))
        }

        .val-card{
          transition:background .2s,border-color .2s
        }

        .val-card:hover{
          background:white !important;
          border-color:${V.blue} !important
        }

        .team-card{
          transition:box-shadow .2s,transform .2s
        }

        .team-card:hover{
          box-shadow:0 8px 40px rgba(0,0,0,.08) !important;
          transform:translateY(-2px)
        }

        .val-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:16px
        }

        .team-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:16px
        }

        .tl-item{
          display:grid;
          grid-template-columns:80px 1fr;
          border-bottom:1px solid ${V.rule}
        }

        .tl-item:last-child{
          border-bottom:none
        }

        .about-cta{
          display:grid;
          grid-template-columns:minmax(0,1fr) auto;
          gap:48px;
          align-items:center
        }

        @media (max-width: 1100px){
          .about-hero-grid{
            grid-template-columns:1fr;
            gap:40px
          }

          .about-stats-grid{
            grid-template-columns:repeat(2,minmax(0,1fr))
          }

          .about-cta{
            grid-template-columns:1fr;
            gap:28px
          }
        }

        @media (max-width: 900px){
          .val-grid,
          .team-grid{
            grid-template-columns:repeat(2,1fr) !important
          }
        }

        @media (max-width: 768px){
          .about-hero-copy{
            padding-top:0 !important
          }

          .about-stat-item{
            padding:32px 20px !important
          }

          .about-mission-section,
          .about-values-section,
          .about-team-section,
          .about-timeline-section{
            padding:56px var(--px) !important
          }

          .about-values-inner,
          .about-team-inner{
            padding:0 !important
          }

          .timeline-year{
            padding:22px 16px !important;
            padding-top:24px !important
          }

          .timeline-content{
            padding:22px 20px !important
          }

          .about-cta-wrap{
            padding:36px 24px !important
          }
        }

        @media (max-width: 640px){
          .about-stats-grid{
            grid-template-columns:1fr
          }

          .about-stat-item{
            border-right:none !important;
            border-bottom:1px solid ${V.rule}
          }

          .about-stat-item:last-child{
            border-bottom:none
          }

          .val-grid,
          .team-grid{
            grid-template-columns:1fr !important
          }

          .tl-item{
            grid-template-columns:1fr
          }

          .timeline-year{
            border-right:none !important;
            border-bottom:1px solid ${V.rule};
            justify-content:flex-start !important
          }

          .about-cta-action,
          .about-cta-action .btn-white,
          .about-hero-copy .btn-blue{
            width:100%
          }

          .about-cta-action .btn-white,
          .about-hero-copy .btn-blue{
            display:inline-flex;
            justify-content:center;
            text-align:center
          }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--px)' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About</span>
          </nav>

          <div className="hero-h-rule" />

          <div className="about-hero-grid">
            <h1
              style={{
                fontFamily: V.serif,
                fontSize: 'clamp(36px,5.5vw,80px)',
                fontWeight: 400,
                lineHeight: 0.97,
                letterSpacing: '-.03em',
                margin: 0
              }}
            >
              We build revenue
              <br />
              systems that
              <br />
              <em style={{ fontStyle: 'italic', color: V.blue }}>compound.</em>
            </h1>

            <div
              className="about-hero-copy"
              style={{ paddingTop: 12, borderTop: `1px solid ${V.rule}` }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: V.ink2,
                  lineHeight: 1.65,
                  marginBottom: 24,
                  marginTop: 0
                }}
              >
                We are on a mission to give every B2B team access to the same kind of intelligent
                automation that used to be reserved for companies with eight-figure marketing budgets.
              </p>

              <p
                style={{
                  fontSize: 15,
                  color: V.ink3,
                  lineHeight: 1.65,
                  marginBottom: 28,
                  marginTop: 0
                }}
              >
                Founded in 2019 in San Francisco, we have helped over 500 companies generate more
                than $50M in measurable revenue. We are still just getting started.
              </p>

              <Link to="/contact" className="btn-blue">
                Work with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ borderBottom: `1px solid ${V.rule}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="about-stats-grid">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="about-stat-item"
              style={{
                padding: '48px var(--px)',
                borderRight: i < 3 ? `1px solid ${V.rule}` : 'none'
              }}
            >
              <div
                style={{
                  fontFamily: V.serif,
                  fontSize: 'clamp(38px,6vw,56px)',
                  fontWeight: 400,
                  color: V.ink,
                  lineHeight: 1,
                  marginBottom: 10,
                  letterSpacing: '-.03em'
                }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: V.ink, marginBottom: 4 }}>
                {s.t}
              </div>
              <div style={{ fontSize: 13, color: V.ink3 }}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section
        className="about-mission-section"
        style={{ padding: '80px var(--px)', borderBottom: `1px solid ${V.rule}` }}
      >
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: V.ink4,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              marginBottom: 16
            }}
          >
            Our mission
          </div>

          <h2
            style={{
              fontFamily: V.serif,
              fontSize: 'clamp(30px,4vw,48px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-.03em',
              marginBottom: 24,
              marginTop: 0
            }}
          >
            Empowering every B2B team to <em style={{ fontStyle: 'italic', color: V.blue }}>sell smarter.</em>
          </h2>

          <p style={{ fontSize: 17, color: V.ink3, lineHeight: 1.8, margin: 0 }}>
            We believe every company deserves access to enterprise-grade sales and marketing
            automation — regardless of size or budget. Our platform gives growing teams the same
            intelligence, the same enrichment depth, and the same workflow sophistication that the
            largest companies in the world have had for years.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="about-values-section"
        style={{
          padding: '80px var(--px)',
          background: V.bg2,
          borderBottom: `1px solid ${V.rule}`
        }}
      >
        <div
          className="about-values-inner"
          style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--px)' }}
        >
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
            Our values
          </div>

          <h2
            style={{
              fontFamily: V.serif,
              fontSize: 'clamp(28px,3.5vw,42px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-.025em',
              marginBottom: 48,
              marginTop: 0
            }}
          >
            What drives every <em style={{ fontStyle: 'italic', color: V.blue }}>decision we make.</em>
          </h2>

          <div className="val-grid">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="val-card"
                style={{
                  background: V.bg2,
                  border: `1px solid ${V.rule}`,
                  borderRadius: 12,
                  padding: 28
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16, color: V.blue }}>{v.g}</div>
                <div
                  style={{
                    fontFamily: V.serif,
                    fontSize: 20,
                    fontWeight: 400,
                    color: V.ink,
                    marginBottom: 10
                  }}
                >
                  {v.title}
                </div>
                <div style={{ fontSize: 13, color: V.ink3, lineHeight: 1.65 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        className="about-team-section"
        style={{ padding: '80px var(--px)', borderBottom: `1px solid ${V.rule}` }}
      >
        <div
          className="about-team-inner"
          style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--px)' }}
        >
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
            The team
          </div>

          <h2
            style={{
              fontFamily: V.serif,
              fontSize: 'clamp(28px,3.5vw,42px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-.025em',
              marginBottom: 48,
              marginTop: 0
            }}
          >
            The people behind <em style={{ fontStyle: 'italic', color: V.blue }}>your results.</em>
          </h2>

          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div
                key={i}
                className="team-card"
                style={{
                  background: 'white',
                  border: `1px solid ${V.rule}`,
                  borderRadius: 12,
                  padding: 28
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: V.blueLight,
                    border: `1px solid ${V.blueBorder || '#C7D4FF'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 700,
                    color: V.blue,
                    marginBottom: 16
                  }}
                >
                  {m.name.split(' ').map((n) => n[0]).join('')}
                </div>

                <div
                  style={{
                    fontFamily: V.serif,
                    fontSize: 18,
                    fontWeight: 400,
                    color: V.ink,
                    marginBottom: 4
                  }}
                >
                  {m.name}
                </div>

                <div style={{ fontSize: 13, fontWeight: 600, color: V.blue, marginBottom: 12 }}>
                  {m.role}
                </div>

                <p style={{ fontSize: 13, color: V.ink3, lineHeight: 1.65, marginBottom: 16, marginTop: 0 }}>
                  {m.bio}
                </p>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {m.exp.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: '3px 10px',
                        background: V.blueLight,
                        color: V.blue,
                        borderRadius: 100,
                        fontSize: 11,
                        fontWeight: 600,
                        border: `1px solid ${V.blueBorder || '#C7D4FF'}`
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        className="about-timeline-section"
        style={{
          padding: '80px var(--px)',
          background: V.bg2,
          borderBottom: `1px solid ${V.rule}`
        }}
      >
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
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
            Our journey
          </div>

          <h2
            style={{
              fontFamily: V.serif,
              fontSize: 'clamp(28px,3.5vw,42px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-.025em',
              marginBottom: 48,
              marginTop: 0
            }}
          >
            Six years of <em style={{ fontStyle: 'italic', color: V.blue }}>building in public.</em>
          </h2>

          <div
            style={{
              border: `1px solid ${V.rule}`,
              borderRadius: 12,
              overflow: 'hidden',
              background: 'white'
            }}
          >
            {MILESTONES.map((m, i) => (
              <div key={i} className="tl-item">
                <div
                  className="timeline-year"
                  style={{
                    padding: '28px 20px',
                    borderRight: `1px solid ${V.rule}`,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: 32
                  }}
                >
                  <span
                    style={{
                      fontFamily: V.serif,
                      fontSize: 16,
                      fontWeight: 400,
                      color: V.ink4
                    }}
                  >
                    {m.year}
                  </span>
                </div>

                <div className="timeline-content" style={{ padding: '28px 32px' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: V.ink, marginBottom: 6 }}>
                    {m.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: V.ink3, lineHeight: 1.65 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ padding: '72px var(--px)' }}>
        <div
          className="about-cta about-cta-wrap"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            background: V.ink,
            borderRadius: 16,
            padding: '64px 72px'
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: V.serif,
                fontSize: 'clamp(28px,3.5vw,44px)',
                fontWeight: 400,
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-.03em',
                marginBottom: 12,
                marginTop: 0
              }}
            >
              Ready to transform <em style={{ fontStyle: 'italic', color: '#93B4FF' }}>your business?</em>
            </h2>

            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,.5)',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              Join hundreds of companies that trust AIB2B to drive predictable, compounding growth.
            </p>
          </div>

          <div className="about-cta-action" style={{ flexShrink: 0 }}>
            <Link to="/contact" className="btn-white">
              Get started today →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}