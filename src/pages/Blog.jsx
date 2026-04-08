import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { allPosts } from './blog/blogData'

const CATS = [
  'All',
  'Lead Generation',
  'Marketing Automation',
  'Email Strategy',
  'RevOps',
  'Sales',
  'Sales Automation',
]

const ACCENT_MAP = {
  '#2563eb': '#175cd3',
  '#7c3aed': '#7f56d9',
  '#0891b2': '#0ba5ec',
  '#059669': '#12b76a',
  '#d97706': '#f79009',
  '#dc2626': '#f04438',
}

const accent = (c) => ACCENT_MAP[c] || '#175cd3'

const accentLight = (c) => {
  const map = {
    '#175cd3': '#eff8ff',
    '#7f56d9': '#f4f3ff',
    '#0ba5ec': '#f0f9ff',
    '#12b76a': '#ecfdf3',
    '#f79009': '#fffaeb',
    '#f04438': '#fef3f2',
  }
  return map[accent(c)] || '#eff8ff'
}

export default function Blog() {
  useReveal()
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useSEO({
    title: 'B2B Sales & Marketing Automation Blog | AIB2B',
    description:
      'Actionable playbooks, deep-dives, and expert takes on B2B lead generation, marketing automation, email deliverability, and revenue operations. Updated weekly.',
    canonical: 'https://aib2bautomation.com/blog',
  })

  const filtered = allPosts.filter((p) => {
    const mc = cat === 'All' || p.cat === cat
    const mq =
      q === '' ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase())
    return mc && mq
  })

  const featured = filtered.find((p) => p.featured && cat === 'All' && q === '')
  const grid = featured ? filtered.filter((p) => !p.featured) : filtered

  return (
    <div className="home-page">
      <style>{`
        .cat-btn {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 8px 16px;
          border: 1px solid #eaecf0;
          border-radius: 999px;
          cursor: pointer;
          background: transparent;
          color: #667085;
          transition: all .15s;
          white-space: nowrap;
        }
        .cat-btn:hover { border-color: #175cd3; color: #175cd3; }
        .cat-btn.active { background: #101828; color: white; border-color: #101828; }
        .post-card-link {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          border: 1px solid #eaecf0;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(16,24,40,0.04);
          transition: box-shadow .2s, transform .2s;
        }
        .post-card-link:hover { box-shadow: 0 8px 28px rgba(16,24,40,0.10); transform: translateY(-2px); }
        .blog-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
        .search-field {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f9fafb;
          border: 1px solid #eaecf0;
          border-radius: 12px;
          padding: 10px 16px;
          max-width: 360px;
        }
        .search-field input {
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #101828;
          outline: none;
          width: 100%;
          min-width: 0;
        }
        .filter-row {
          display: flex;
          gap: 8px;
          padding: 18px 0;
          flex-wrap: wrap;
          border-bottom: 1px solid #eaecf0;
        }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } .filter-row { flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; } .filter-row::-webkit-scrollbar { display: none; } }
      `}</style>

      {/* HERO */}
      <section className="hero-section" style={{ padding: '88px 0 56px' }}>
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 28, fontSize: 13, color: '#667085' }}>
            <Link to="/" style={{ color: '#667085' }}>Home</Link>
            <span>›</span>
            <span style={{ color: '#101828', fontWeight: 600 }}>Blog</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="hero-badge au d1" style={{ marginBottom: 20 }}>
                <span className="hero-badge-dot" />
                Updated weekly
              </div>
              <h1 className="hero-title au d2" style={{ fontSize: 'clamp(38px,5.5vw,68px)', marginBottom: 20 }}>
                Insights for B2B{' '}
                <span style={{ color: '#175cd3' }}>revenue teams.</span>
              </h1>
              <div className="au d3">
                <div className="search-field">
                  <span style={{ color: '#98a2b3', fontSize: 15 }}>🔍</span>
                  <input
                    type="search"
                    placeholder="Search articles..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    aria-label="Search blog posts"
                  />
                </div>
              </div>
            </div>

            <div className="au d4">
              <div className="hero-panel">
                <div className="hero-panel-top">
                  <div className="hero-window-dots"><span /><span /><span /></div>
                  <div className="hero-live-pill"><span className="hero-live-dot" />Weekly posts</div>
                </div>
                <div style={{ padding: '20px 18px' }}>
                  <p style={{ fontSize: 15, color: '#475467', lineHeight: 1.75, margin: '0 0 20px' }}>
                    Actionable playbooks, deep-dives, and expert takes on sales automation, lead intelligence, and revenue operations — published every week.
                  </p>
                  {!subscribed ? (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <input
                        type="email"
                        placeholder="Your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontSize: 14, color: '#101828', background: '#ffffff', border: '1px solid #eaecf0', borderRadius: 10, padding: '10px 14px', outline: 'none', minWidth: 0 }}
                      />
                      <button
                        onClick={() => { if (email) setSubscribed(true) }}
                        className="btn btn-primary"
                        style={{ minHeight: 44, padding: '0 16px', fontSize: 13, boxShadow: 'none', whiteSpace: 'nowrap' }}
                      >
                        Subscribe →
                      </button>
                    </div>
                  ) : (
                    <div style={{ padding: '12px 16px', background: '#ecfdf3', border: '1px solid #abefc6', borderRadius: 10, fontSize: 14, color: '#12b76a', fontWeight: 700 }}>
                      ✓ You are subscribed — great to have you.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <div style={{ borderBottom: '1px solid #eaecf0', padding: '0' }}>
        <div className="section-container">
          <div className="filter-row">
            {CATS.map((c) => (
              <button key={c} className={`cat-btn${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED */}
      {featured && (
        <section style={{ padding: '48px 0 0' }}>
          <div className="section-container">
            <Link
              to={`/blog/${featured.slug}`}
              style={{ display: 'block', textDecoration: 'none', border: '1px solid #eaecf0', borderRadius: 24, overflow: 'hidden', background: '#ffffff', boxShadow: '0 4px 16px rgba(16,24,40,0.04)', transition: 'box-shadow .2s' }}
              onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,24,40,0.10)' }}
              onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(16,24,40,0.04)' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 400px' }}>
                <div style={{ background: accent(featured.color), padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 280 }}>
                  <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.18)', color: 'white', fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 999, marginBottom: 18 }}>
                    {featured.cat}
                  </div>
                  <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 14, marginTop: 0 }}>{featured.title}</h2>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, margin: 0 }}>{featured.excerpt}</p>
                </div>
                <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, background: 'white' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#eff8ff', color: '#175cd3', borderRadius: 999, padding: '4px 12px', fontSize: 11, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', width: 'fit-content' }}>
                    ★ Featured
                  </div>
                  <p style={{ fontSize: 15, color: '#475467', lineHeight: 1.75, margin: 0 }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center', paddingTop: 18, borderTop: '1px solid #eaecf0', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12, color: '#98a2b3' }}>{featured.date}</span>
                    <span style={{ fontSize: 12, color: '#98a2b3' }}>·</span>
                    <span style={{ fontSize: 12, color: '#98a2b3' }}>{featured.read} read</span>
                    <span style={{ fontSize: 13, color: '#175cd3', fontWeight: 700, marginLeft: 'auto' }}>Read article →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID */}
      <section style={{ padding: '48px 0 80px' }}>
        <div className="section-container">
          {grid.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0', color: '#667085', fontSize: 16 }}>
              No articles match your search. Try a different term or category.
            </div>
          ) : (
            <div className="blog-grid">
              {grid.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card-link">
                  <div style={{ height: 6, background: accent(p.color) }} />
                  <div style={{ padding: '22px 22px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: 12 }}>
                      <span style={{ fontSize: 10, fontWeight: 800, color: accent(p.color), letterSpacing: '.08em', textTransform: 'uppercase', background: accentLight(p.color), padding: '3px 9px', borderRadius: 999 }}>
                        {p.cat}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, fontWeight: 700, color: '#101828', lineHeight: 1.25, letterSpacing: '-0.03em', marginBottom: 10, marginTop: 0, flex: 1 }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 13, color: '#667085', lineHeight: 1.7, marginBottom: 18, marginTop: 0 }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', paddingTop: 14, borderTop: '1px solid #eaecf0', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 12, color: '#98a2b3' }}>{p.date}</span>
                      <span style={{ fontSize: 12, color: '#98a2b3' }}>·</span>
                      <span style={{ fontSize: 12, color: '#98a2b3' }}>{p.read} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-card reveal">
            <div className="cta-copy">
              <div className="section-mini-head light">Stay ahead of the curve</div>
              <h2>Get weekly GTM insights delivered to your inbox.</h2>
              <p>Actionable playbooks and expert takes on B2B sales automation, lead enrichment, and revenue operations.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">Book a strategy call</Link>
              <Link to="/services" className="btn btn-outline-light">Explore services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}