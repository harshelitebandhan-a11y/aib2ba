import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

const STATS = [
  { n: '500+', t: 'B2B teams', s: 'across 12 countries' },
  { n: '$50M+', t: 'Revenue generated', s: 'for our client base' },
  { n: '50+', t: 'Team members', s: 'across sales, product, and CS' },
  { n: '4.9/5', t: 'Average rating', s: 'from verified G2 reviews' },
]

const VALUES = [
  {
    num: '01',
    title: 'Results first',
    desc: 'Every strategy is built around measurable outcomes. Vanity metrics are not on our scorecard — closed revenue is.',
    accent: '#175cd3',
    accentLight: '#eff8ff',
  },
  {
    num: '02',
    title: 'Speed matters',
    desc: 'We move fast because your pipeline cannot wait. Most clients are live and generating results within 48 hours.',
    accent: '#7f56d9',
    accentLight: '#f4f3ff',
  },
  {
    num: '03',
    title: 'Client success',
    desc: 'Your growth is our growth. We build long-term partnerships, which is why 94% of our clients renew year over year.',
    accent: '#12b76a',
    accentLight: '#ecfdf3',
  },
  {
    num: '04',
    title: 'Scalable by design',
    desc: 'Our infrastructure grows with you — from a 10-person startup running first outbound to a Fortune 500 enterprise.',
    accent: '#f79009',
    accentLight: '#fffaeb',
  },
]

const TEAM = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    exp: ['Sales Strategy', 'RevOps', 'Team Leadership'],
    bio: 'Former VP of Sales at TechCorp with 15+ years in B2B automation. Alex built his first lead scoring model in 2009 and has been obsessed with the space ever since.',
    initials: 'AT',
  },
  {
    name: 'Sarah Kim',
    role: 'CTO',
    exp: ['AI/ML', 'Marketing Automation', 'Architecture'],
    bio: 'Sarah led ML infrastructure at Google before joining to build the scoring engine that now powers 500+ client pipelines. She holds three patents in predictive analytics.',
    initials: 'SK',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Customer Success',
    exp: ['Customer Success', 'Process Optimisation'],
    bio: 'Marcus has helped over 500 companies redesign their sales and marketing processes. His clients average 40% improvement in qualified pipeline within 90 days.',
    initials: 'MR',
  },
  {
    name: 'Emily Chen',
    role: 'Lead Data Scientist',
    exp: ['Data Science', 'Predictive Analytics'],
    bio: "Emily's PhD research on buyer intent signals became the foundation for our enrichment model. She joined from her postdoc because she wanted to see her work in the real world.",
    initials: 'EC',
  },
]

const MILESTONES = [
  { year: '2019', title: 'Company founded', desc: 'Started in a San Francisco co-working space with four people and one obsession: making outbound work better for smaller teams.' },
  { year: '2020', title: 'First 100 clients', desc: 'Reached our first milestone helping growing companies automate their sales process — then immediately realised we had built something others genuinely needed.' },
  { year: '2021', title: 'AI integration', desc: 'Launched our proprietary AI-powered lead scoring and enrichment platform. Average client saw a 40% lift in qualified pipeline within 90 days.' },
  { year: '2022', title: 'Series A funding', desc: 'Secured $10M in Series A led by Accel Partners to accelerate product development, hiring, and go-to-market expansion.' },
  { year: '2023', title: 'Enterprise solutions', desc: 'Launched enterprise-grade infrastructure serving Fortune 500 companies with custom SLAs, dedicated environments, and professional services.' },
  { year: '2024', title: 'Global expansion', desc: 'Expanded to serve clients across North America, Europe, and APAC with localised playbooks and regional support coverage.' },
]

export default function About() {
  useReveal()
  useSEO({
    title: 'About AIB2B Automation — Our Mission, Team & Story',
    description:
      'Meet the team behind AIB2B Automation. We help 500+ B2B companies build predictable revenue through intelligent lead enrichment and marketing automation. Founded 2019.',
    canonical: 'https://aib2bautomation.com/about',
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
            <span style={{ color: '#101828', fontWeight: 600 }}>About</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="hero-badge au d1" style={{ marginBottom: 20 }}>
                <span className="hero-badge-dot" />
                Founded 2019 · San Francisco
              </div>
              <h1 className="hero-title au d2" style={{ fontSize: 'clamp(38px,5.5vw,68px)', marginBottom: 20 }}>
                We build revenue systems that{' '}
                <span style={{ color: '#175cd3' }}>compound.</span>
              </h1>
              <p className="hero-text au d3">
                We are on a mission to give every B2B team access to the same kind of intelligent automation that used to be reserved for companies with eight-figure marketing budgets.
              </p>
              <div className="hero-actions au d3">
                <Link to="/contact" className="btn btn-primary">Work with us</Link>
                <Link to="/case-studies" className="btn btn-secondary">See our results</Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="au d4">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card" style={{ padding: '24px 20px' }}>
                    <div className="stat-value" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>{s.n}</div>
                    <div className="stat-label" style={{ fontSize: 13 }}>{s.t}</div>
                    <div className="stat-sub">{s.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '72px 0', borderBottom: '1px solid #eaecf0' }}>
        <div className="section-container">
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }} className="reveal">
            <div className="section-mini-head center" style={{ marginBottom: 16 }}>Our mission</div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 22 }}>
              Empowering every B2B team to{' '}
              <span style={{ color: '#175cd3' }}>sell smarter.</span>
            </h2>
            <p style={{ fontSize: 17, color: '#475467', lineHeight: 1.8, margin: 0 }}>
              We believe every company deserves access to enterprise-grade sales and marketing automation — regardless of size or budget. Our platform gives growing teams the same intelligence, the same enrichment depth, and the same workflow sophistication that the largest companies in the world have had for years.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="services-section" style={{ background: '#f8fafc' }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Our values</div>
              <h2 className="section-title">What drives every decision we make.</h2>
            </div>
            <p className="section-copy">
              Four principles that shape how we build, how we work with clients, and how we measure success.
            </p>
          </div>

          <div className="services-grid">
            {VALUES.map((v, i) => (
              <article key={i} className={`service-card reveal d${(i % 4) + 1}`}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: v.accentLight, border: `1px solid ${v.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: v.accent, fontWeight: 800, marginBottom: 16 }}>
                  {v.num}
                </div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: '#475467', lineHeight: 1.8, margin: 0 }}>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="services-section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">The team</div>
              <h2 className="section-title">The people behind your results.</h2>
            </div>
            <p className="section-copy">
              Built by operators who have been in your seat — and know what it takes to run a modern revenue motion.
            </p>
          </div>

          <div className="services-grid">
            {TEAM.map((m, i) => (
              <article key={i} className={`service-card reveal d${(i % 4) + 1}`}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#eff8ff', border: '1px solid #bfdcff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: '#175cd3', marginBottom: 16 }}>
                  {m.initials}
                </div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, marginBottom: 4, marginTop: 0 }}>{m.name}</h3>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#175cd3', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '.06em' }}>{m.role}</div>
                <p style={{ fontSize: 13, color: '#475467', lineHeight: 1.75, marginBottom: 16, marginTop: 0 }}>{m.bio}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {m.exp.map((s) => (
                    <span key={s} style={{ padding: '3px 10px', background: '#eff8ff', color: '#175cd3', borderRadius: 999, fontSize: 11, fontWeight: 700, border: '1px solid #bfdcff' }}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Our journey</div>
              <h2 className="section-title">Six years of building in public.</h2>
            </div>
            <p className="section-copy">
              From a four-person co-working space startup to a platform powering 500+ revenue teams across the globe.
            </p>
          </div>

          <div className="process-list" style={{ maxWidth: 820, margin: '0 auto' }}>
            {MILESTONES.map((m, i) => (
              <div key={i} className={`process-item reveal d${(i % 4) + 1}`}>
                <div className="process-week" style={{ fontFamily: "'Sora',sans-serif", fontSize: 15 }}>{m.year}</div>
                <div className="process-content">
                  <h3>{m.title}</h3>
                  <p>{m.body || m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS — repurposed as trust section */}
      <section className="problems-section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Why teams choose us</div>
              <h2 className="section-title">Built differently from day one.</h2>
            </div>
            <p className="section-copy">
              We are not a tool you plug in and hope for the best. We are a system you operate together with a team that is invested in your outcomes.
            </p>
          </div>

          <div className="problems-grid">
            {[
              { title: '94% client renewal rate', body: 'Our clients stay because the system keeps improving. Every month of data makes the scoring smarter and the workflows more effective.' },
              { title: 'Setup in 48 hours, not 48 days', body: 'Most platforms take months to implement. We get your first workflow live within two business days of signing.' },
              { title: 'We do not sell software', body: 'We build revenue systems. The difference matters — we are accountable to pipeline outcomes, not just licence activations.' },
              { title: '$50M+ in pipeline generated', body: 'Across 500+ client engagements, our systems have contributed to over $50 million in measurable revenue impact.' },
            ].map((item, i) => (
              <article key={i} className={`problem-card reveal d${(i % 4) + 1}`}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
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
              <div className="section-mini-head light">Ready to transform your business?</div>
              <h2>Join hundreds of companies building compounding revenue.</h2>
              <p>Tell us about your pipeline and we will build a system that generates qualified meetings, enriches leads, and routes everything automatically.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">Get started today</Link>
              <Link to="/case-studies" className="btn btn-outline-light">See our results</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}