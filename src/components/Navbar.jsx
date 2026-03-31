import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href:'/services',     label:'Services'     },
  { href:'/solutions',    label:'Solutions'    },
  { href:'/pricing',      label:'Pricing'      },
  { href:'/case-studies', label:'Case Studies' },
  { href:'/blog',         label:'Blog'         },
  { href:'/about',        label:'About'        },
]

export default function Navbar() {
  const [open,setOpen]       = useState(false)
  const [scrolled,setScrolled] = useState(false)
  const { pathname }         = useLocation()

  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>24)
    h()
    window.addEventListener('scroll',h,{passive:true})
    return()=>window.removeEventListener('scroll',h)
  },[])
  useEffect(()=>setOpen(false),[pathname])
  // Lock body scroll when menu open
  useEffect(()=>{
    document.body.style.overflow = open ? 'hidden' : ''
    return()=>{document.body.style.overflow=''}
  },[open])

  const isActive = href => pathname===href || pathname.startsWith(href+'/')

  return (
    <>
      <style>{`
        .navbar{position:fixed;top:0;left:0;right:0;z-index:200;background:#fff;border-bottom:1px solid #E2E2E2;transition:background .3s,box-shadow .3s;font-family:'DM Sans',system-ui,sans-serif}
        .navbar.scrolled{background:rgba(255,255,255,.95);backdrop-filter:blur(12px);box-shadow:0 1px 0 #E2E2E2}
        .nav-inner{max-width:1280px;margin:0 auto;display:flex;align-items:center;height:58px;padding:0 40px;gap:0}
        .nav-logo{display:flex;align-items:center;gap:9px;margin-right:40px;flex-shrink:0;text-decoration:none;color:#0A0A0A}
        .nav-logo-mark{width:26px;height:26px;background:#0A0A0A;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;flex-shrink:0}
        .nav-logo-text{font-size:15px;font-weight:700;letter-spacing:-.02em;color:#0A0A0A}
        .nav-links{display:flex;flex:1}
        .nav-link{font-size:13.5px;color:#7A7A7A;padding:0 14px;height:58px;display:flex;align-items:center;transition:color .15s;border-bottom:2px solid transparent;white-space:nowrap;text-decoration:none}
        .nav-link:hover{color:#0A0A0A}
        .nav-link.active{color:#0A0A0A;font-weight:600;border-bottom-color:#0A0A0A}
        .nav-actions{display:flex;align-items:center;gap:12px;margin-left:auto;flex-shrink:0}
        .nav-login{font-size:13.5px;color:#7A7A7A;transition:color .15s}
        .nav-login:hover{color:#0A0A0A}
        .nav-toggle{display:none;background:none;border:none;cursor:pointer;padding:8px;color:#0A0A0A;margin-left:8px;border-radius:6px;transition:background .15s}
        .nav-toggle:hover{background:#F7F7F5}
        .mobile-menu{position:fixed;top:58px;left:0;right:0;bottom:0;background:#fff;z-index:199;padding:16px 20px 32px;overflow-y:auto;transform:translateX(100%);transition:transform .3s cubic-bezier(.22,1,.36,1)}
        .mobile-menu.open{transform:translateX(0)}
        .mobile-link{display:block;padding:14px 4px;font-size:16px;color:#3A3A3A;border-bottom:1px solid #E2E2E2;text-decoration:none;transition:color .15s;font-weight:400}
        .mobile-link:hover,.mobile-link.active{color:#1B4FD8;font-weight:600}
        @media(max-width:860px){
          .nav-links{display:none}
          .nav-login{display:none}
          .btn-ink{display:none!important}
          .nav-toggle{display:flex;align-items:center;justify-content:center}
          .nav-inner{padding:0 20px}
        }
        @media(min-width:861px){.mobile-menu{display:none}}
      `}</style>

      <header className={`navbar${scrolled?' scrolled':''}`} role="banner">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="AIB2B Automation">
            <div className="nav-logo-mark">A</div>
            <span className="nav-logo-text">AIB2B</span>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {LINKS.map(l=>(
              <Link key={l.href} to={l.href} className={`nav-link${isActive(l.href)?' active':''}`}>{l.label}</Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="nav-login">Log in</Link>
            <Link to="/contact" className="btn-ink">Get started →</Link>
            <button className="nav-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu${open?' open':''}`} aria-hidden={!open}>
        {LINKS.map(l=>(
          <Link key={l.href} to={l.href} className={`mobile-link${isActive(l.href)?' active':''}`}>{l.label}</Link>
        ))}
        <div style={{marginTop:24,display:'flex',flexDirection:'column',gap:10}}>
          <Link to="/contact" className="btn-blue" style={{width:'100%',justifyContent:'center',fontSize:15,padding:'14px'}}>Get started →</Link>
          <Link to="/contact" className="btn-outline" style={{width:'100%',justifyContent:'center',fontSize:15,padding:'14px'}}>Log in</Link>
        </div>
      </div>
    </>
  )
}
