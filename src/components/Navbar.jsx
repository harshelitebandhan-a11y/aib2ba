import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '/services',     label: 'Services'     },
  { href: '/solutions',    label: 'Solutions'    },
  { href: '/pricing',      label: 'Pricing'      },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog',         label: 'Blog'         },
  { href: '/about',        label: 'About'        },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap');

        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid #eaecf0;
          transition: box-shadow .3s, background .3s;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .navbar.scrolled {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 1px 0 #eaecf0, 0 4px 16px rgba(16,24,40,0.04);
        }
        .nav-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          height: 62px;
          padding: 0 24px;
          gap: 0;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-right: 36px;
          flex-shrink: 0;
          text-decoration: none;
        }
        .nav-logo-mark {
          width: 30px;
          height: 30px;
          background: #101828;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
          letter-spacing: -.02em;
        }
        .nav-logo-text {
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -.03em;
          color: #101828;
        }
        .nav-logo-dot {
          color: #175cd3;
        }

        /* Desktop links */
        .nav-links {
          display: flex;
          flex: 1;
          align-items: center;
        }
        .nav-link {
          font-size: 13.5px;
          font-weight: 500;
          color: #667085;
          padding: 0 13px;
          height: 62px;
          display: flex;
          align-items: center;
          transition: color .15s;
          border-bottom: 2px solid transparent;
          white-space: nowrap;
          text-decoration: none;
          letter-spacing: -.01em;
        }
        .nav-link:hover { color: #101828; }
        .nav-link.active {
          color: #101828;
          font-weight: 700;
          border-bottom-color: #175cd3;
        }

        /* Actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: auto;
          flex-shrink: 0;
        }
        .nav-login {
          font-size: 13.5px;
          font-weight: 600;
          color: #667085;
          text-decoration: none;
          transition: color .15s;
          padding: 0 4px;
        }
        .nav-login:hover { color: #101828; }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 0 18px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          background: #175cd3;
          color: #ffffff;
          text-decoration: none;
          transition: background .2s, transform .2s;
          box-shadow: 0 4px 12px rgba(23,92,211,0.18);
          letter-spacing: -.01em;
        }
        .nav-cta:hover {
          background: #144ab4;
          transform: translateY(-1px);
        }

        /* Hamburger */
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #101828;
          margin-left: 8px;
          border-radius: 8px;
          transition: background .15s;
        }
        .nav-toggle:hover { background: #f2f4f7; }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 62px; left: 0; right: 0; bottom: 0;
          background: #ffffff;
          z-index: 199;
          padding: 12px 20px 40px;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform .3s cubic-bezier(.22,1,.36,1);
          border-top: 1px solid #eaecf0;
        }
        .mobile-menu.open { transform: translateX(0); }

        .mobile-link {
          display: flex;
          align-items: center;
          padding: 15px 8px;
          font-size: 16px;
          font-weight: 500;
          color: #475467;
          border-bottom: 1px solid #f2f4f7;
          text-decoration: none;
          transition: color .15s;
          letter-spacing: -.01em;
        }
        .mobile-link:hover { color: #101828; }
        .mobile-link.active {
          color: #175cd3;
          font-weight: 700;
        }
        .mobile-link-arrow {
          margin-left: auto;
          font-size: 14px;
          color: #d0d5dd;
        }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-login  { display: none; }
          .nav-cta    { display: none; }
          .nav-toggle { display: flex; align-items: center; justify-content: center; }
          .nav-inner  { padding: 0 20px; }
        }
        @media (min-width: 861px) { .mobile-menu { display: none; } }
      `}</style>

      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="AIB2B Automation home">
            <div className="nav-logo-mark">A</div>
            <span className="nav-logo-text">AIB2B<span className="nav-logo-dot">.</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Main navigation">
            {LINKS.map((l) => (
              <Link key={l.href} to={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <Link to="/contact" className="nav-login">Log in</Link>
            <Link to="/contact" className="nav-cta">Book a call →</Link>
            <button
              className="nav-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className={`mobile-link${isActive(l.href) ? ' active' : ''}`}
          >
            {l.label}
            <span className="mobile-link-arrow">›</span>
          </Link>
        ))}

        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ display: 'flex', justifyContent: 'center', fontSize: 15, minHeight: 50 }}
          >
            Book a strategy call →
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary"
            style={{ display: 'flex', justifyContent: 'center', fontSize: 15, minHeight: 50 }}
          >
            Log in
          </Link>
        </div>

        {/* Trust signals */}
        <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 20, borderTop: '1px solid #f2f4f7' }}>
          {['500+ teams', '48h setup', '14-day trial'].map((t) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#667085', fontWeight: 600 }}>
              <span style={{ color: '#12b76a', fontWeight: 800 }}>✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}