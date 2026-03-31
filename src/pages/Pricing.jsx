import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const PLANS=[
  {name:'Starter',monthly:299,annual:249,desc:'Perfect for growing teams running their first automated outbound. Gets you off spreadsheets and into a real pipeline.',features:[{t:'Up to 5,000 leads/month',ok:true},{t:'Lead enrichment and scoring',ok:true},{t:'Email sequence automation',ok:true},{t:'1 CRM integration',ok:true},{t:'Basic analytics dashboard',ok:true},{t:'Email support',ok:true},{t:'Multi-channel campaigns',ok:false},{t:'Advanced AI scoring',ok:false},{t:'Dedicated account manager',ok:false}],featured:false},
  {name:'Growth',monthly:699,annual:579,desc:'For revenue teams scaling pipeline with multi-channel outreach. This is where most of our clients see their biggest jumps.',features:[{t:'Up to 25,000 leads/month',ok:true},{t:'Lead enrichment and scoring',ok:true},{t:'Email and LinkedIn automation',ok:true},{t:'3 CRM integrations',ok:true},{t:'Advanced analytics and reporting',ok:true},{t:'Priority email and chat support',ok:true},{t:'Multi-channel campaigns',ok:true},{t:'Advanced AI scoring',ok:true},{t:'Dedicated account manager',ok:false}],featured:true},
  {name:'Enterprise',monthly:null,annual:null,desc:'Fully custom infrastructure for complex, high-volume revenue operations. Unlimited everything — built around your specific needs.',features:[{t:'Unlimited leads',ok:true},{t:'Lead enrichment and scoring',ok:true},{t:'All channel automation',ok:true},{t:'Unlimited integrations',ok:true},{t:'Custom dashboards and BI export',ok:true},{t:'24/7 dedicated support',ok:true},{t:'Multi-channel campaigns',ok:true},{t:'Advanced AI scoring',ok:true},{t:'Dedicated account manager',ok:true}],featured:false},
]
const FAQS=[
  {q:'Is there a free trial?',a:"Yes — every plan includes a full 14-day free trial with complete access to all features. No credit card required to start, and you won't be charged anything until you decide to continue."},
  {q:'Can I switch plans later?',a:'Absolutely. Upgrade or downgrade at any time — changes apply on your next billing cycle. There are no penalties for switching and no long-term contracts on any plan.'},
  {q:'How exactly do you count leads?',a:'A lead is any unique contact record processed by our enrichment or automation engine during a billing month. Contacts you look up but do not enrich do not count against your limit.'},
  {q:'Which CRMs and tools do you integrate with?',a:'We support Salesforce, HubSpot, Pipedrive, Zoho, Close, Copper, and 40+ other CRMs and marketing platforms. Our API also allows custom integrations for tools not on our list.'},
  {q:'What kind of support do I get?',a:'Starter plans include email support with a 24-hour SLA. Growth plans get priority chat and email support. Enterprise plans receive a dedicated account manager and a direct Slack channel.'},
]
export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  useSEO({title:'Pricing — AIB2B Automation | From $249/mo',description:'Simple, transparent pricing for B2B lead enrichment and marketing automation. Starter from $249/mo, Growth from $579/mo. 14-day free trial, no credit card.',canonical:'https://aib2bautomation.com/pricing'})
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        .plan-card{border:1px solid ${V.rule};border-radius:12px;overflow:hidden;transition:box-shadow .2s,transform .2s}
        .plan-card:hover{box-shadow:0 8px 40px rgba(0,0,0,.08);transform:translateY(-2px)}
        .plan-card.featured{border-color:${V.blue};border-width:2px}
        .toggle-btn{font-family:${V.sans};font-size:14px;font-weight:500;padding:8px 20px;border:1px solid ${V.rule};cursor:pointer;background:transparent;color:${V.ink3};transition:all .15s}
        .toggle-btn.active{background:${V.ink};color:white;border-color:${V.ink}}
        .toggle-btn:first-child{border-radius:8px 0 0 8px}
        .toggle-btn:last-child{border-radius:0 8px 8px 0}
        .faq-item{border:1px solid ${V.rule};border-radius:10px;padding:20px 24px;transition:border-color .2s}
        .faq-item:hover{border-color:${V.blue}}
        @media(max-width:900px){.plans-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div style={{maxWidth:1280,margin:'0 auto',textAlign:'center'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{justifyContent:'center'}}><Link to="/">Home</Link><span>›</span><span>Pricing</span></nav>
          <div className="hero-h-rule"/>
          <h1 style={{fontFamily:V.serif,fontSize:'clamp(44px,6vw,80px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em',marginBottom:24}}>Simple, transparent <em style={{fontStyle:'italic',color:V.blue}}>pricing.</em></h1>
          <p style={{fontSize:17,color:V.ink3,lineHeight:1.65,maxWidth:520,margin:'0 auto 36px'}}>No hidden fees. No long-term contracts. Every plan includes a full 14-day free trial — and you can cancel anytime.</p>
          <div style={{display:'flex',justifyContent:'center',gap:0}}>
            <button className={`toggle-btn${!annual?' active':''}`} onClick={()=>setAnnual(false)}>Monthly</button>
            <button className={`toggle-btn${annual?' active':''}`} onClick={()=>setAnnual(true)}>Annual <span style={{fontSize:11,fontWeight:700,background:'#F0FDF4',color:V.green,padding:'2px 7px',borderRadius:4,marginLeft:4}}>Save 17%</span></button>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{padding:'64px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div className="plans-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {PLANS.map((p,i)=>(
              <div key={i} className={`plan-card${p.featured?' featured':''}`}>
                {p.featured && <div style={{background:V.blue,color:'white',textAlign:'center',fontSize:12,fontWeight:700,padding:'8px',letterSpacing:'.06em',textTransform:'uppercase'}}>Most Popular</div>}
                <div style={{padding:32,borderBottom:`1px solid ${V.rule}`}}>
                  <div style={{fontFamily:V.serif,fontSize:24,fontWeight:400,color:V.ink,marginBottom:8}}>{p.name}</div>
                  <p style={{fontSize:13,color:V.ink3,lineHeight:1.65,marginBottom:24}}>{p.desc}</p>
                  <div style={{marginBottom:24}}>
                    {p.monthly ? (
                      <>
                        <span style={{fontFamily:V.serif,fontSize:52,fontWeight:400,color:V.ink,letterSpacing:'-.03em'}}>${annual?p.annual:p.monthly}</span>
                        <span style={{fontSize:14,color:V.ink3}}>/mo</span>
                        {annual && <div style={{fontSize:12,color:V.ink4,marginTop:4}}>Billed ${(p.annual*12).toLocaleString()}/year</div>}
                      </>
                    ) : (
                      <span style={{fontFamily:V.serif,fontSize:40,fontWeight:400,color:V.ink}}>Custom</span>
                    )}
                  </div>
                  <Link to="/contact" className="btn-blue" style={{width:'100%',justifyContent:'center',background:p.featured?V.blue:V.ink}}>
                    {p.name==='Enterprise'?'Contact sales':'Start free trial'} →
                  </Link>
                </div>
                <div style={{padding:32}}>
                  <div style={{fontSize:11,fontWeight:700,color:V.ink4,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:16}}>What is included</div>
                  <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10}}>
                    {p.features.map((f,fi)=>(
                      <li key={fi} style={{display:'flex',alignItems:'flex-start',gap:10,fontSize:13,color:f.ok?V.ink2:V.ink4}}>
                        <span style={{color:f.ok?V.green:'#E2E2E2',fontWeight:700,flexShrink:0,fontSize:15,marginTop:1}}>{f.ok?'✓':'✕'}</span>
                        {f.t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <div style={{borderTop:`1px solid ${V.rule}`,borderBottom:`1px solid ${V.rule}`,padding:'28px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',gap:48,flexWrap:'wrap'}}>
          {['14-day free trial, no card','Cancel anytime, no penalties','SOC 2 Type II certified','GDPR compliant','99.9% uptime SLA'].map(t=>(
            <span key={t} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:V.ink3}}>
              <span style={{color:V.green,fontWeight:700}}>✓</span>{t}
            </span>
          ))}
        </div>
      </div>

      {/* FAQS */}
      <section style={{padding:'80px 40px',background:V.bg2}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Pricing FAQs</div>
          <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em',marginBottom:48}}>Questions we hear <em style={{fontStyle:'italic',color:V.blue}}>every day.</em></h2>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {FAQS.map((f,i)=>(
              <div key={i} className="faq-item">
                <div style={{fontFamily:V.serif,fontSize:18,fontWeight:400,color:V.ink,marginBottom:10}}>{f.q}</div>
                <p style={{fontSize:14,color:V.ink3,lineHeight:1.65}}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:'72px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',background:V.ink,borderRadius:16,padding:'64px 72px',display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,color:'white',lineHeight:1.1,letterSpacing:'-.03em',marginBottom:12}}>Not sure which plan <em style={{fontStyle:'italic',color:'#93B4FF'}}>fits you?</em></h2>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.6}}>Talk to our team. We will help you find the right fit and build a custom quote if needed — no pressure, no scripts.</p>
          </div>
          <div style={{flexShrink:0}}><Link to="/contact" className="btn-white">Talk to sales →</Link></div>
        </div>
      </div>
    </div>
  )
}
