import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const V = { ink:'#0A0A0A', ink3:'#7A7A7A', ink4:'#B8B8B8', rule:'#E2E2E2', blue:'#1B4FD8', bg2:'#F7F7F5' }

const COLS = {
  Product:   [{ to:'/services/lead-enrichment', label:'Lead Enrichment' },{ to:'/services/marketing-automation', label:'Marketing Automation' },{ to:'/services/campaign-management', label:'Campaign Management' },{ to:'/pricing', label:'Pricing' }],
  Solutions: [{ to:'/solutions', label:'Enterprise Sales' },{ to:'/solutions', label:'E-commerce Growth' },{ to:'/solutions', label:'SaaS Success' },{ to:'/case-studies', label:'Case Studies' }],
  Company:   [{ to:'/about', label:'About Us' },{ to:'/blog', label:'Blog' },{ to:'/contact', label:'Contact' },{ to:'/privacy', label:'Privacy Policy' },{ to:'/terms', label:'Terms of Service' }],
}

export default function Footer() {
  const yr = new Date().getFullYear()
  return (
    <footer role="contentinfo" style={{ background:V.bg2, borderTop:`1px solid ${V.rule}`, fontFamily:"'DM Sans',system-ui,sans-serif" }}>
      {/* CTA bar */}
      <div style={{ background:V.ink, padding:'40px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:24 }}>
        <div>
          <div style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontSize:'clamp(22px,3vw,32px)', fontWeight:400, color:'#fff', letterSpacing:'-.03em', marginBottom:8 }}>
            Ready to transform your pipeline?
          </div>
          <p style={{ fontSize:14, color:'rgba(255,255,255,.5)' }}>Start free for 14 days — no credit card, no commitment.</p>
        </div>
        <Link to="/contact" className="btn-white" style={{ flexShrink:0 }}>Book a free demo →</Link>
      </div>

      {/* Main grid */}
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'56px 40px 40px', display:'grid', gridTemplateColumns:'1fr repeat(3,auto)', gap:48, alignItems:'start' }}>
        {/* Brand */}
        <div>
          <Link to="/" style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
            <div style={{ width:26, height:26, background:V.ink, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:13, fontWeight:700 }}>A</div>
            <span style={{ fontSize:15, fontWeight:700, color:V.ink, letterSpacing:'-.02em' }}>AIB2B Automation</span>
          </Link>
          <p style={{ fontSize:13, color:V.ink3, lineHeight:1.7, maxWidth:260, marginBottom:20 }}>
            We help B2B revenue teams stop wasting time on bad leads and start closing the deals that actually move the number.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:20 }}>
            <a href="mailto:hello@aib2bautomation.com" style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:V.ink3, transition:'color .15s' }}><Mail size={14}/> hello@aib2bautomation.com</a>
            <span style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:V.ink3 }}><Phone size={14}/> +1 (555) 123-4567</span>
            <span style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:V.ink3 }}><MapPin size={14}/> San Francisco, CA</span>
          </div>
          <div style={{ display:'flex', gap:12 }}>
            {[{ Icon:Linkedin, label:'LinkedIn' },{ Icon:Twitter, label:'Twitter' },{ Icon:Youtube, label:'YouTube' }].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} style={{ width:32, height:32, border:`1px solid ${V.rule}`, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', color:V.ink4, transition:'color .15s, border-color .15s' }}
                onMouseOver={e=>{e.currentTarget.style.color=V.ink;e.currentTarget.style.borderColor=V.ink}}
                onMouseOut={e=>{e.currentTarget.style.color=V.ink4;e.currentTarget.style.borderColor=V.rule}}>
                <Icon size={14}/>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(COLS).map(([group, links]) => (
          <div key={group}>
            <div style={{ fontSize:11, fontWeight:700, color:V.ink4, letterSpacing:'.1em', textTransform:'uppercase', marginBottom:16 }}>{group}</div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
              {links.map(l => (
                <li key={l.label}>
                  <Link to={l.to} style={{ fontSize:13, color:V.ink3, transition:'color .15s' }}
                    onMouseOver={e=>e.target.style.color=V.ink} onMouseOut={e=>e.target.style.color=V.ink3}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'20px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:`1px solid ${V.rule}`, flexWrap:'wrap', gap:12 }}>
        <span style={{ fontSize:12, color:V.ink4 }}>© {yr} AIB2B Automation, Inc. All rights reserved.</span>
        <div style={{ display:'flex', gap:20 }}>
          {[{ to:'/privacy', l:'Privacy' },{ to:'/terms', l:'Terms' }].map(x=>(
            <Link key={x.l} to={x.to} style={{ fontSize:12, color:V.ink4, transition:'color .15s' }}
              onMouseOver={e=>e.target.style.color=V.ink} onMouseOut={e=>e.target.style.color=V.ink4}>{x.l}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
