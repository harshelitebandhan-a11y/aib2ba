import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const COLS = {
  Product: [
    { to: '/services/lead-enrichment',      label: 'Lead Enrichment'       },
    { to: '/services/marketing-automation', label: 'Marketing Automation'  },
    { to: '/services/campaign-management',  label: 'Campaign Management'   },
    { to: '/pricing',                        label: 'Pricing'               },
  ],
  Solutions: [
    { to: '/solutions', label: 'Enterprise Sales'  },
    { to: '/solutions', label: 'E-commerce Growth' },
    { to: '/solutions', label: 'SaaS Success'      },
    { to: '/case-studies', label: 'Case Studies'   },
  ],
  Company: [
    { to: '/about',   label: 'About Us'        },
    { to: '/blog',    label: 'Blog'            },
    { to: '/contact', label: 'Contact'         },
    { to: '/privacy', label: 'Privacy Policy'  },
    { to: '/terms',   label: 'Terms of Service'},
  ],
}

const TRUST = ['500+ B2B teams', '14-day free trial', 'SOC 2 certified', 'GDPR compliant']

export default function Footer() {
  const yr = new Date().getFullYear()

  return (
    <footer role="contentinfo">
      <style>{`
        /* ── CTA strip ── */
        .footer-cta-section {
          background: linear-gradient(135deg, #0b1220 0%, #101828 60%, #175cd3 100%);
          padding: 56px 0;
        }
        .footer-cta-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .footer-cta-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 10px;
        }
        .footer-cta-h {
          font-family: 'Sora', sans-serif;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 10px;
        }
        .footer-cta-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin: 0;
        }
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 28px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          background: #ffffff;
          color: #175cd3;
          text-decoration: none;
          transition: all .2s;
          box-shadow: 0 16px 34px rgba(16,24,40,0.14);
          flex-shrink: 0;
          white-space: nowrap;
        }
        .footer-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 20px 40px rgba(16,24,40,0.18);
        }

        /* ── Main footer ── */
        .footer-main {
          background: #f8fafc;
          border-top: 1px solid #eaecf0;
        }
        .footer-grid {
          max-width: 1240px;
          margin: 0 auto;
          padding: 56px 24px 40px;
          display: grid;
          grid-template-columns: 1.4fr repeat(3, auto);
          gap: 48px;
        }

        /* Brand col */
        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
          text-decoration: none;
        }
        .footer-brand-mark {
          width: 28px;
          height: 28px;
          background: #101828;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 800;
          flex-shrink: 0;
        }
        .footer-brand-name {
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #101828;
        }
        .footer-tagline {
          font-size: 13px;
          color: #667085;
          line-height: 1.75;
          max-width: 260px;
          margin-bottom: 20px;
        }

        /* Contact */
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #667085;
          margin-bottom: 8px;
          text-decoration: none;
          transition: color .15s;
        }
        .footer-contact-item:hover { color: #101828; }

        /* Socials */
        .footer-socials {
          display: flex;
          gap: 8px;
          margin-top: 20px;
        }
        .footer-social {
          width: 34px;
          height: 34px;
          border: 1px solid #eaecf0;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #98a2b3;
          transition: color .15s, border-color .15s, background .15s;
          background: #ffffff;
        }
        .footer-social:hover {
          color: #175cd3;
          border-color: #bfdcff;
          background: #eff8ff;
        }

        /* Nav columns */
        .footer-col-title {
          font-size: 11px;
          font-weight: 800;
          color: #98a2b3;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .footer-link {
          font-size: 13px;
          color: #667085;
          display: block;
          margin-bottom: 10px;
          text-decoration: none;
          transition: color .15s;
          font-weight: 500;
        }
        .footer-link:hover { color: #101828; }

        /* Trust bar */
        .footer-trust {
          max-width: 1240px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          border-top: 1px solid #eaecf0;
        }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1240px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #eaecf0;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 640px) {
          .footer-cta-inner { flex-direction: column; align-items: flex-start; }
          .footer-cta-btn   { width: 100%; justify-content: center; }
          .footer-grid      { grid-template-columns: 1fr; gap: 28px; padding: 36px 20px 28px; }
          .footer-trust     { padding: 16px 20px; gap: 16px; }
          .footer-bottom    { padding: 16px 20px; }
          .footer-cta-section { padding: 40px 0; }
          .footer-tagline   { max-width: 100%; }
        }
      `}</style>

      {/* ── CTA strip ── */}
      {/* <div className="footer-cta-section">
        <div className="footer-cta-inner">
          <div>
            <div className="footer-cta-eyebrow">Ready to grow?</div>
            <h2 className="footer-cta-h">Turn lead chaos into a cleaner<br />revenue system.</h2>
            <p className="footer-cta-sub">Start free for 14 days — no credit card, no commitment.</p>
          </div>
          <Link to="/contact" className="footer-cta-btn">Book a free demo →</Link>
        </div>
      </div> */}

      {/* ── Main footer ── */}
      <div className="footer-main">

        {/* Trust signals */}
        {/* <div className="footer-trust">
          {TRUST.map((t) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#475467', fontWeight: 600 }}>
              <span style={{ color: '#12b76a', fontWeight: 800 }}>✓</span>
              {t}
            </span>
          ))}
        </div> */}

        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" className="footer-brand-logo" aria-label="AIB2B Automation home">
              <div className="footer-brand-mark">A</div>
              <span className="footer-brand-name">AIB2B<span style={{ color: '#175cd3' }}>.</span></span>
            </Link>
            <p className="footer-tagline">
              We help B2B revenue teams stop wasting time on bad leads and start closing the deals that actually move the number.
            </p>

            <a href="mailto:hello@aib2bautomation.com" className="footer-contact-item">
              <Mail size={13} style={{ flexShrink: 0, color: '#175cd3' }} />
              hello@aib2bautomation.com
            </a>
            <div className="footer-contact-item">
              <Phone size={13} style={{ flexShrink: 0, color: '#175cd3' }} />
              +1 (555) 123-4567
            </div>
            <div className="footer-contact-item">
              <MapPin size={13} style={{ flexShrink: 0, color: '#175cd3' }} />
              San Francisco, CA
            </div>

            <div className="footer-socials">
              {[
                { I: Linkedin, l: 'LinkedIn' },
                { I: Twitter,  l: 'Twitter'  },
                { I: Youtube,  l: 'YouTube'  },
              ].map(({ I, l }) => (
                <a key={l} href="#" aria-label={l} className="footer-social">
                  <I size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(COLS).map(([group, links]) => (
            <div key={group}>
              <div className="footer-col-title">{group}</div>
              {links.map((l) => (
                <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span style={{ fontSize: 12, color: '#98a2b3', fontWeight: 500 }}>
            © {yr} AIB2B Automation, Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            {[{ to: '/privacy', l: 'Privacy' }, { to: '/terms', l: 'Terms' }].map((x) => (
              <Link
                key={x.l}
                to={x.to}
                style={{ fontSize: 12, color: '#98a2b3', textDecoration: 'none', fontWeight: 500, transition: 'color .15s' }}
                onMouseOver={(e) => e.target.style.color = '#101828'}
                onMouseOut={(e) => e.target.style.color = '#98a2b3'}
              >
                {x.l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}