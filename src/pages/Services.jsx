import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'
const blue='#1B4FD8',rule='#E2E2E2',ink='#0A0A0A',ink2='#3A3A3A',ink3='#7A7A7A',ink4='#B8B8B8',bg2='#F7F7F5',blueL='#EEF2FF',green='#16A34A'
const serif="'Instrument Serif',Georgia,serif",sans="'DM Sans',system-ui,sans-serif"
const SERVICES=[
  {num:'01',slug:'lead-enrichment',tag:'Lead Enrichment',title:'Sales Lead Enrichment',desc:'Transform raw leads into fully qualified prospects with AI enrichment, intent scoring, and real-time verification — before your reps touch a record.',features:['Real-time data verification','AI lead scoring','Intent data analysis','Firmographic and technographic data','CRM auto-sync'],metric:'40% more qualified leads',price:'299',accent:'#1B4FD8',aLight:'#EEF2FF',aBorder:'#C7D4FF'},
  {num:'02',slug:'marketing-automation',tag:'Marketing Automation',title:'Marketing Automation',desc:'Build multi-channel workflows that nurture prospects automatically. Every step triggers on real buyer behaviour, not arbitrary timers.',features:['Visual workflow builder','Email and LinkedIn sequences','Behavioural trigger campaigns','A/B testing engine','Multi-channel orchestration'],metric:'250% more responses',price:'499',accent:'#7C3AED',aLight:'#F5F3FF',aBorder:'#DDD6FE'},
  {num:'03',slug:'campaign-management',tag:'Campaign Management',title:'Campaign Management',desc:'End-to-end campaign execution with real-time tracking, AI optimisation, and full revenue attribution so you always know what is working.',features:['Campaign strategy and copy','Multi-channel execution','Real-time performance dashboard','AI-powered optimisation','Revenue attribution'],metric:'31% pipeline increase in 90 days',price:'799',accent:'#0891B2',aLight:'#ECFEFF',aBorder:'#A5F3FC'},
]
const ADD_ONS=[
  {title:'CRM Integration',desc:'Bidirectional sync with Salesforce, HubSpot, Pipedrive, and 40+ platforms. Every enriched field lands in your CRM automatically.',price:'199'},
  {title:'Advanced Email Tools',desc:'IP warming, deliverability monitoring, template library, and inbox placement testing to maximise reach and open rates.',price:'149'},
  {title:'Advanced Analytics',desc:'Deep-dive pipeline reporting, full revenue attribution, and AI-powered forecasting so you know what is driving growth.',price:'299'},
]
const STEPS=[
  {num:'01',title:'Discovery call',body:'30-minute call to understand your goals, tech stack, and pipeline bottlenecks. No pitch — just honest diagnosis.'},
  {num:'02',title:'Custom proposal',body:'A tailored proposal with exact services and pricing. Clear scope, no hidden fees, no long-term lock-in.'},
  {num:'03',title:'Onboarding',body:'Our team handles setup. CRM connections, workflow builds, sequence config. Live in 48 to 72 hours.'},
  {num:'04',title:'Grow and scale',body:'Weekly check-ins, monthly reviews, continuous AI optimisation. Every month builds on the last.'},
]
export default function Services() {
  useSEO({title:'B2B Marketing Automation & Lead Enrichment Services | AIB2B',description:'Lead enrichment, marketing automation, and campaign management for B2B revenue teams. From $299/mo. Setup in 48 hours.',canonical:'https://aib2bautomation.com/services'})
  useReveal()
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Services</span></nav>
          <div className="h-rule"/>
          <div className="hero-grid">
            <h1 className="hero-h1 au d1">B2B automation,<br/><em>built to scale</em><br/>your pipeline.</h1>
            <div className="hero-sub-col au d2">
              <p className="hero-p">From lead enrichment to full campaign management — we handle every stage of your revenue pipeline so your team can focus on closing deals.</p>
              <div className="hero-actions">
                <Link to="/contact" className="btn-blue">Get custom quote →</Link>
                <Link to="/pricing" className="btn-outline">View pricing</Link>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',border:`1px solid ${rule}`,borderRadius:10,overflow:'hidden'}}>
                {[{n:'40%',l:'More leads'},{n:'250%',l:'More responses'},{n:'9×',l:'Average ROI'}].map((s,i)=>(
                  <div key={i} style={{padding:'14px 12px',borderRight:i<2?`1px solid ${rule}`:'none',textAlign:'center'}}>
                    <div style={{fontFamily:serif,fontSize:24,fontWeight:400,color:blue,letterSpacing:'-.03em',lineHeight:1}}>{s.n}</div>
                    <div style={{fontSize:11,color:ink3,marginTop:4}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'0 40px'}}>
        <div className="wrap">
          <div className="section-ruled reveal" style={{paddingTop:64}}>
            <div><div className="eyebrow">Core services</div>
              <h2 style={{fontFamily:serif,fontSize:'clamp(28px,3.8vw,46px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>Three ways we<br/><em style={{fontStyle:'italic',color:blue}}>fill your pipeline.</em></h2>
            </div>
            <p className="section-ruled-note desktop-only">Click any service for full details and real client results.</p>
          </div>
          <div className="svc-grid grid-3" style={{border:`1px solid ${rule}`,borderRadius:12,overflow:'hidden',marginTop:36,marginBottom:72}}>
            {SERVICES.map((s,i)=>(
              <div key={i} className={`svc-card reveal d${i+1}`}>
                <style>{`.svc-card:nth-of-type(${i+1})::after{background:${s.accent}}`}</style>
                <div style={{padding:'28px 24px 0'}}>
                  <div style={{fontSize:11,fontWeight:700,color:ink4,letterSpacing:'.1em',marginBottom:16}}>{s.num} — {s.tag}</div>
                  <div style={{width:38,height:38,borderRadius:10,background:s.aLight,display:'flex',alignItems:'center',justifyContent:'center',border:`1px solid ${rule}`,marginBottom:16,fontSize:16,color:s.accent}}>◎</div>
                  <div style={{fontFamily:serif,fontSize:21,fontWeight:400,color:ink,lineHeight:1.15,marginBottom:10}}>{s.title}</div>
                  <div style={{fontSize:13,color:ink3,lineHeight:1.65,marginBottom:20}}>{s.desc}</div>
                </div>
                <div style={{borderTop:`1px solid ${rule}`,padding:'16px 24px',flex:1}}>
                  {s.features.map((f,fi)=>(
                    <div key={fi} style={{display:'flex',alignItems:'flex-start',gap:9,fontSize:13,color:ink2,padding:'6px 0',borderBottom:fi<s.features.length-1?`1px solid ${rule}`:'none'}}>
                      <span style={{color:s.accent,fontWeight:700,flexShrink:0}}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <div style={{margin:'0 24px',marginTop:16,padding:'10px 14px',background:s.aLight,borderRadius:8,border:`1px solid ${s.aBorder}`,display:'flex',alignItems:'center',gap:7,fontSize:13,fontWeight:700,color:s.accent}}>
                  <span>↑</span>{s.metric}
                </div>
                <div style={{padding:'16px 24px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:`1px solid ${rule}`,marginTop:16}}>
                  <div style={{fontFamily:serif,fontSize:20,fontWeight:400,color:ink}}>${s.price}<span style={{fontFamily:sans,fontSize:12,color:ink3,fontWeight:400}}>/mo</span></div>
                  <div style={{display:'flex',gap:8}}>
                    <Link to={`/services/${s.slug}`} className="btn-blue sm" style={{background:s.accent}}>Learn more →</Link>
                    <Link to="/contact" className="btn-outline sm">Get started</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'64px 40px',background:bg2,borderTop:`1px solid ${rule}`,borderBottom:`1px solid ${rule}`}}>
        <div className="wrap">
          <div className="section-ruled reveal"><div><div className="eyebrow">Power-ups and add-ons</div>
            <h2 style={{fontFamily:serif,fontSize:'clamp(26px,3.5vw,42px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>Extend any plan with<br/><em style={{fontStyle:'italic',color:blue}}>more capabilities.</em></h2>
          </div></div>
          <div className="addon-card grid-3" style={{border:`1px solid ${rule}`,borderRadius:12,overflow:'hidden',background:'white',marginTop:36}}>
            {ADD_ONS.map((a,i)=>(
              <div key={i} className={`addon-card reveal d${i+1}`} style={{borderRight:i<2?`1px solid ${rule}`:'none'}}>
                <div style={{width:36,height:36,borderRadius:9,background:blueL,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16,border:'1px solid #C7D4FF',fontSize:15,color:blue}}>⊕</div>
                <div style={{fontFamily:serif,fontSize:19,fontWeight:400,color:ink,marginBottom:9}}>{a.title}</div>
                <div style={{fontSize:13,color:ink3,lineHeight:1.65,marginBottom:18,flex:1}}>{a.desc}</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:`1px solid ${rule}`,paddingTop:16}}>
                  <div style={{fontFamily:serif,fontSize:19,fontWeight:400,color:ink}}>${a.price}<span style={{fontFamily:sans,fontSize:12,color:ink3,fontWeight:400}}>/mo</span></div>
                  <Link to="/contact" className="btn-blue sm">Add on →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'64px 40px'}}>
        <div className="wrap">
          <div className="how-split" style={{marginBottom:0,border:`1px solid ${rule}`,borderRadius:12,overflow:'hidden'}}>
            <div className="how-left reveal-left">
              <div className="eyebrow">How we work together</div>
              <h2 style={{fontFamily:serif,fontSize:'clamp(24px,3.5vw,38px)',fontWeight:400,lineHeight:1.1,letterSpacing:'-.025em',marginBottom:16}}>From first call to <em style={{fontStyle:'italic',color:blue}}>live pipeline in days.</em></h2>
              <p style={{fontSize:14,color:ink3,lineHeight:1.7,marginBottom:22}}>Most clients are generating pipeline within 72 hours of signing. No lengthy implementation.</p>
              <Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'11px 20px'}}>Book a discovery call →</Link>
            </div>
            <div style={{borderTop:0}}>
              {STEPS.map((s,i)=>(
                <div key={i} className={`proc-step reveal d${i+1}`}>
                  <div className="proc-num">{s.num}</div>
                  <div className="proc-content"><div className="proc-title">{s.title}</div><div className="proc-body">{s.body}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'0 40px 72px'}}>
        <div className="wrap">
          <div className="cta-strip reveal">
            <div><h2>Ready to transform your <em>sales pipeline?</em></h2><p>Custom package, no lock-in, no surprises.</p></div>
            <div className="cta-right"><Link to="/contact" className="btn-white">Schedule a consultation →</Link><span style={{fontSize:12,color:'rgba(255,255,255,.3)'}}>Usually responds within 2 hours</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}
