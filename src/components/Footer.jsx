import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const COLS={
  Product:[{to:'/services/lead-enrichment',label:'Lead Enrichment'},{to:'/services/marketing-automation',label:'Marketing Automation'},{to:'/services/campaign-management',label:'Campaign Management'},{to:'/pricing',label:'Pricing'}],
  Solutions:[{to:'/solutions',label:'Enterprise Sales'},{to:'/solutions',label:'E-commerce Growth'},{to:'/solutions',label:'SaaS Success'},{to:'/case-studies',label:'Case Studies'}],
  Company:[{to:'/about',label:'About Us'},{to:'/blog',label:'Blog'},{to:'/contact',label:'Contact'},{to:'/privacy',label:'Privacy Policy'},{to:'/terms',label:'Terms of Service'}],
}

export default function Footer() {
  const yr=new Date().getFullYear()
  return (
    <footer role="contentinfo">
      <style>{`
        .footer-cta{background:#0A0A0A;padding:40px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:24px}
        .footer-cta-h{font-family:'Instrument Serif',Georgia,serif;font-size:clamp(20px,3vw,30px);font-weight:400;color:#fff;letter-spacing:-.03em;margin-bottom:6px}
        .footer-main{background:#F7F7F5;border-top:1px solid #E2E2E2}
        .footer-grid{max-width:1280px;margin:0 auto;padding:48px 40px 36px;display:grid;grid-template-columns:1fr repeat(3,auto);gap:40px}
        .footer-bottom{max-width:1280px;margin:0 auto;padding:18px 40px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #E2E2E2;flex-wrap:wrap;gap:12px}
        .footer-col-title{font-size:11px;font-weight:700;color:#B8B8B8;letter-spacing:.1em;text-transform:uppercase;margin-bottom:14px}
        .footer-link{font-size:13px;color:#7A7A7A;display:block;margin-bottom:9px;transition:color .15s}
        .footer-link:hover{color:#0A0A0A}
        .footer-tagline{font-size:13px;color:#7A7A7A;line-height:1.7;max-width:240px;margin-bottom:18px}
        .footer-contact-item{display:flex;align-items:center;gap:8px;font-size:13px;color:#7A7A7A;margin-bottom:7px}
        .footer-social{width:30px;height:30px;border:1px solid #E2E2E2;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;color:#B8B8B8;transition:color .15s,border-color .15s}
        .footer-social:hover{color:#0A0A0A;border-color:#0A0A0A}
        @media(max-width:860px){
          .footer-cta{padding:32px 20px}
          .footer-grid{grid-template-columns:1fr 1fr;padding:36px 20px 28px;gap:28px}
          .footer-bottom{padding:16px 20px}
        }
        @media(max-width:480px){
          .footer-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="footer-cta">
        <div>
          <div className="footer-cta-h">Ready to transform your pipeline?</div>
          <p style={{fontSize:14,color:'rgba(255,255,255,.5)'}}>Start free for 14 days — no credit card, no commitment.</p>
        </div>
        <Link to="/contact" className="btn-white" style={{flexShrink:0}}>Book a free demo →</Link>
      </div>

      <div className="footer-main">
        <div className="footer-grid">
          <div>
            <Link to="/" style={{display:'flex',alignItems:'center',gap:8,marginBottom:14,textDecoration:'none'}}>
              <div style={{width:24,height:24,background:'#0A0A0A',borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:12,fontWeight:700}}>A</div>
              <span style={{fontSize:14,fontWeight:700,color:'#0A0A0A',letterSpacing:'-.02em'}}>AIB2B Automation</span>
            </Link>
            <p className="footer-tagline">We help B2B revenue teams stop wasting time on bad leads and start closing the deals that actually move the number.</p>
            <div style={{marginBottom:16}}>
              <a href="mailto:hello@aib2bautomation.com" className="footer-contact-item"><Mail size={13}/>hello@aib2bautomation.com</a>
              <div className="footer-contact-item"><Phone size={13}/>+1 (555) 123-4567</div>
              <div className="footer-contact-item"><MapPin size={13}/>San Francisco, CA</div>
            </div>
            <div style={{display:'flex',gap:8}}>
              {[{I:Linkedin,l:'LinkedIn'},{I:Twitter,l:'Twitter'},{I:Youtube,l:'YouTube'}].map(({I,l})=>(
                <a key={l} href="#" aria-label={l} className="footer-social"><I size={13}/></a>
              ))}
            </div>
          </div>
          {Object.entries(COLS).map(([group,links])=>(
            <div key={group}>
              <div className="footer-col-title">{group}</div>
              {links.map(l=><Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span style={{fontSize:12,color:'#B8B8B8'}}>© {yr} AIB2B Automation, Inc. All rights reserved.</span>
          <div style={{display:'flex',gap:18}}>
            {[{to:'/privacy',l:'Privacy'},{to:'/terms',l:'Terms'}].map(x=>(
              <Link key={x.l} to={x.to} style={{fontSize:12,color:'#B8B8B8',transition:'color .15s'}} onMouseOver={e=>e.target.style.color='#0A0A0A'} onMouseOut={e=>e.target.style.color='#B8B8B8'}>{x.l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
