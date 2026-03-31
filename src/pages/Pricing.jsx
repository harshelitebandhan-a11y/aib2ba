import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'
const blue='#1B4FD8',rule='#E2E2E2',ink='#0A0A0A',ink2='#3A3A3A',ink3='#7A7A7A',ink4='#B8B8B8',bg2='#F7F7F5',blueL='#EEF2FF',green='#16A34A'
const serif="'Instrument Serif',Georgia,serif",sans="'DM Sans',system-ui,sans-serif"
const PLANS=[
  {name:'Starter',monthly:299,annual:249,desc:'For growing teams running their first automated outbound. Gets you off spreadsheets and into a real pipeline.',feats:[{t:'Up to 5,000 leads/month',ok:true},{t:'Lead enrichment and scoring',ok:true},{t:'Email sequence automation',ok:true},{t:'1 CRM integration',ok:true},{t:'Basic analytics dashboard',ok:true},{t:'Email support',ok:true},{t:'Multi-channel campaigns',ok:false},{t:'Advanced AI scoring',ok:false},{t:'Dedicated account manager',ok:false}],featured:false},
  {name:'Growth',monthly:699,annual:579,desc:'For revenue teams scaling pipeline with multi-channel outreach. This is where most clients see their biggest jumps.',feats:[{t:'Up to 25,000 leads/month',ok:true},{t:'Lead enrichment and scoring',ok:true},{t:'Email and LinkedIn automation',ok:true},{t:'3 CRM integrations',ok:true},{t:'Advanced analytics',ok:true},{t:'Priority support',ok:true},{t:'Multi-channel campaigns',ok:true},{t:'Advanced AI scoring',ok:true},{t:'Dedicated account manager',ok:false}],featured:true},
  {name:'Enterprise',monthly:null,annual:null,desc:'Custom infrastructure for complex, high-volume revenue operations. Unlimited everything — built around your needs.',feats:[{t:'Unlimited leads',ok:true},{t:'Lead enrichment and scoring',ok:true},{t:'All channel automation',ok:true},{t:'Unlimited integrations',ok:true},{t:'Custom dashboards and BI export',ok:true},{t:'24/7 dedicated support',ok:true},{t:'Multi-channel campaigns',ok:true},{t:'Advanced AI scoring',ok:true},{t:'Dedicated account manager',ok:true}],featured:false},
]
const FAQS=[
  {q:'Is there a free trial?',a:'Yes — every plan includes a full 14-day free trial with complete access. No credit card required.'},
  {q:'Can I switch plans later?',a:'Absolutely. Upgrade or downgrade at any time — changes take effect on your next billing cycle with no penalties.'},
  {q:'How exactly do you count leads?',a:'A lead is any unique contact record processed by our enrichment or automation engine during a billing month.'},
  {q:'Which CRMs do you support?',a:'Salesforce, HubSpot, Pipedrive, Zoho, Close, Copper, and 40+ others. Our API enables custom integrations too.'},
  {q:'What support is included?',a:'Starter gets email support (24h SLA). Growth gets priority chat and email. Enterprise gets a dedicated account manager and Slack channel.'},
]
export default function Pricing() {
  const [annual,setAnnual]=useState(true)
  useSEO({title:'Pricing — AIB2B Automation | From $249/mo',description:'Transparent pricing for B2B lead enrichment and marketing automation. Starter from $249/mo, Growth from $579/mo. 14-day free trial, no credit card.',canonical:'https://aib2bautomation.com/pricing'})
  useReveal()
  return (
    <div>
      <style>{`
        .toggle-btn{font-family:${sans};font-size:14px;font-weight:500;padding:9px 20px;border:1px solid ${rule};cursor:pointer;background:transparent;color:${ink3};transition:all .15s}
        .toggle-btn.active{background:${ink};color:white;border-color:${ink}}
        .toggle-btn:first-child{border-radius:8px 0 0 8px}
        .toggle-btn:last-child{border-radius:0 8px 8px 0}
        .faq-item{border:1px solid ${rule};border-radius:10px;padding:20px 24px;transition:border-color .2s,background .2s;cursor:default}
        .faq-item:hover{border-color:${blue};background:#FAFEFF}
        @media(max-width:480px){.toggle-btn{padding:9px 14px;font-size:13px}}
      `}</style>
      <section className="page-hero" style={{textAlign:'center'}}>
        <div className="wrap">
          <nav className="breadcrumb" style={{justifyContent:'center'}}><Link to="/">Home</Link><span>›</span><span>Pricing</span></nav>
          <div className="h-rule"/>
          <h1 className="hero-h1 au" style={{textAlign:'center',marginBottom:20}}>Simple, transparent <em>pricing.</em></h1>
          <p className="au d1" style={{fontSize:17,color:ink3,lineHeight:1.65,maxWidth:480,margin:'0 auto 32px'}}>No hidden fees. No lock-in. Every plan includes a 14-day free trial.</p>
          <div className="au d2" style={{display:'flex',justifyContent:'center'}}>
            <button className={`toggle-btn${!annual?' active':''}`} onClick={()=>setAnnual(false)}>Monthly</button>
            <button className={`toggle-btn${annual?' active':''}`} onClick={()=>setAnnual(true)}>Annual <span style={{fontSize:11,fontWeight:700,background:'#F0FDF4',color:green,padding:'2px 7px',borderRadius:4,marginLeft:4}}>Save 17%</span></button>
          </div>
        </div>
      </section>

      <section style={{padding:'56px 40px'}}>
        <div className="wrap">
          <div className="plans-grid">
            {PLANS.map((p,i)=>(
              <div key={i} className={`plan-card reveal d${i+1}${p.featured?' featured':''}`}>
                {p.featured&&<div style={{background:blue,color:'white',textAlign:'center',fontSize:11,fontWeight:700,padding:'8px',letterSpacing:'.06em',textTransform:'uppercase'}}>Most Popular</div>}
                <div style={{padding:28,borderBottom:`1px solid ${rule}`}}>
                  <div style={{fontFamily:serif,fontSize:22,fontWeight:400,color:ink,marginBottom:8}}>{p.name}</div>
                  <p style={{fontSize:13,color:ink3,lineHeight:1.65,marginBottom:22}}>{p.desc}</p>
                  <div style={{marginBottom:22}}>
                    {p.monthly?(
                      <><span style={{fontFamily:serif,fontSize:48,fontWeight:400,color:ink,letterSpacing:'-.03em'}}>${annual?p.annual:p.monthly}</span>
                      <span style={{fontSize:13,color:ink3}}>/mo</span>
                      {annual&&<div style={{fontSize:12,color:ink4,marginTop:4}}>Billed ${(p.annual*12).toLocaleString()}/yr</div>}</>
                    ):<span style={{fontFamily:serif,fontSize:36,fontWeight:400,color:ink}}>Custom</span>}
                  </div>
                  <Link to="/contact" className="btn-blue" style={{width:'100%',justifyContent:'center',background:p.featured?blue:ink}}>
                    {p.name==='Enterprise'?'Contact sales →':'Start free trial →'}
                  </Link>
                </div>
                <div style={{padding:28}}>
                  <div style={{fontSize:11,fontWeight:700,color:ink4,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:14}}>What is included</div>
                  <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:9}}>
                    {p.feats.map((f,fi)=>(
                      <li key={fi} style={{display:'flex',alignItems:'flex-start',gap:10,fontSize:13,color:f.ok?ink2:ink4}}>
                        <span style={{color:f.ok?green:'#E2E2E2',fontWeight:700,flexShrink:0,fontSize:15,marginTop:1}}>{f.ok?'✓':'✕'}</span>{f.t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{borderTop:`1px solid ${rule}`,borderBottom:`1px solid ${rule}`,padding:'24px 40px'}}>
        <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:40,flexWrap:'wrap'}}>
          {['14-day free trial','Cancel anytime','SOC 2 certified','GDPR compliant','99.9% uptime SLA'].map(t=>(
            <span key={t} style={{display:'flex',alignItems:'center',gap:7,fontSize:13,color:ink3}}><span style={{color:green,fontWeight:700}}>✓</span>{t}</span>
          ))}
        </div>
      </div>

      <section style={{padding:'64px 40px',background:bg2}}>
        <div className="wrap-sm">
          <div className="eyebrow reveal">Pricing FAQs</div>
          <h2 className="reveal" style={{fontFamily:serif,fontSize:'clamp(26px,3.5vw,40px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em',marginBottom:40}}>Questions we hear <em style={{fontStyle:'italic',color:blue}}>every day.</em></h2>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {FAQS.map((f,i)=>(
              <div key={i} className={`faq-item reveal d${i+1}`}>
                <div style={{fontFamily:serif,fontSize:18,fontWeight:400,color:ink,marginBottom:9}}>{f.q}</div>
                <p style={{fontSize:14,color:ink3,lineHeight:1.65}}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'64px 40px'}}>
        <div className="wrap">
          <div className="cta-strip reveal">
            <div><h2>Not sure which plan <em>fits you?</em></h2><p>Talk to our team. We will help you find the right fit with no pressure.</p></div>
            <div className="cta-right"><Link to="/contact" className="btn-white">Talk to sales →</Link></div>
          </div>
        </div>
      </section>
    </div>
  )
}
