import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/services',     label: 'Services'     },
  { href: '/solutions',    label: 'Solutions'    },
  { href: '/pricing',      label: 'Pricing'      },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog',         label: 'Blog'         },
  { href: '/about',        label: 'About'        },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  const nav = {
    position:'fixed', top:0, left:0, right:0, zIndex:200,
    fontFamily:"'DM Sans',system-ui,sans-serif",
    background: scrolled ? 'rgba(255,255,255,.94)' : '#fff',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: '1px solid #E2E2E2',
    transition: 'background .3s',
  }
  const inner = { maxWidth:1280, margin:'0 auto', display:'flex', alignItems:'center', padding:'0 40px', height:58, gap:0 }
  const logoMark = { width:26, height:26, background:'#0A0A0A', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:13, fontWeight:700, flexShrink:0 }
  const linkStyle = (active) => ({ fontSize:13.5, color: active ? '#0A0A0A' : '#7A7A7A', padding:'0 16px', height:58, display:'flex', alignItems:'center', transition:'color .15s', fontWeight: active ? 600 : 400, borderBottom: active ? '2px solid #0A0A0A' : '2px solid transparent' })

  return (
    <header style={nav} role="banner">
      <div style={inner}>
        <Link to="/" aria-label="AIB2B Automation home" style={{ display:'flex', alignItems:'center', gap:9, marginRight:40, flexShrink:0, textDecoration:'none', color:'inherit' }}>
          <div style={logoMark}>A</div>
          <span style={{ fontSize:15, fontWeight:700, letterSpacing:'-.02em', color:'#0A0A0A' }}>AIB2B</span>
        </Link>

        <nav aria-label="Main navigation" style={{ display:'flex', gap:0, flex:1 }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} to={l.href} style={linkStyle(pathname === l.href || pathname.startsWith(l.href + '/'))}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display:'flex', alignItems:'center', gap:12, marginLeft:'auto' }}>
          <Link to="/contact" style={{ fontSize:13.5, color:'#7A7A7A' }}>Log in</Link>
          <Link to="/contact" className="btn-ink">Get started →</Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{ display:'none', background:'none', border:'none', cursor:'pointer', padding:8, color:'#0A0A0A', marginLeft:8 }}
          className="mobile-toggle"
        >
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:'#fff', borderTop:'1px solid #E2E2E2', padding:'16px 20px 24px' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} to={l.href} style={{ display:'block', padding:'12px 0', fontSize:15, color: pathname===l.href ? '#1B4FD8' : '#3A3A3A', fontWeight: pathname===l.href ? 600 : 400, borderBottom:'1px solid #E2E2E2' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-blue" style={{ marginTop:16, width:'100%', justifyContent:'center' }}>Get started →</Link>
        </div>
      )}

      <style>{`
        @media(max-width:860px){
          nav[aria-label="Main navigation"]{display:none!important}
          .btn-ink{display:none!important}
          .mobile-toggle{display:flex!important}
        }
        @media(max-width:900px){ .container{padding:0 20px} }
      `}</style>
    </header>
  )
}
