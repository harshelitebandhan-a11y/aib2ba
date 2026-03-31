import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}

const SERVICES=[
  {num:'01',slug:'lead-enrichment',tag:'Lead Enrichment',title:'Sales Lead Enrichment',desc:'Transform raw leads into fully qualified prospects with comprehensive data enrichment, intent scoring, and real-time verification — before your reps ever touch a record.',features:['Real-time data verification','AI lead scoring algorithms','Intent data analysis','Firmographic and technographic data','CRM auto-sync'],metric:'40% more qualified leads, on average',price:'299',accent:'#1B4FD8',aLight:'#EEF2FF',aBorder:'#C7D4FF'},
  {num:'02',slug:'marketing-automation',tag:'Marketing Automation',title:'Marketing Automation',desc:'Build sophisticated multi-channel workflows that nurture prospects automatically. Every step triggers on real buyer behaviour — not arbitrary timers or guesswork.',features:['Visual workflow builder','Email and LinkedIn sequences','Behavioural trigger campaigns','A/B testing engine','Multi-channel orchestration'],metric:'250% more responses across all channels',price:'499',accent:'#7C3AED',aLight:'#F5F3FF',aBorder:'#DDD6FE'},
  {num:'03',slug:'campaign-management',tag:'Campaign Management',title:'Campaign Management',desc:'End-to-end campaign execution with real-time performance tracking, AI-powered optimisation, and full revenue attribution so you always know what is driving results.',features:['Campaign strategy and copy','Multi-channel execution','Real-time performance dashboard','AI-powered optimisation','Revenue attribution'],metric:'31% pipeline increase in first 90 days',price:'799',accent:'#0891B2',aLight:'#ECFEFF',aBorder:'#A5F3FC'},
]
const ADD_ONS=[
  {title:'CRM Integration',desc:'Bidirectional sync with Salesforce, HubSpot, Pipedrive, and 40+ platforms. Enriched fields and sequence events land in your CRM automatically — no manual export needed.',price:'199'},
  {title:'Advanced Email Tools',desc:'Premium IP warming, deliverability monitoring, a template library, and inbox placement testing to maximise reach and open rates across every domain you send from.',price:'149'},
  {title:'Advanced Analytics',desc:'Deep-dive pipeline reporting, full revenue attribution across every touchpoint, and AI-powered forecasting so you always know which channels are actually driving growth.',price:'299'},
]
const STEPS=[
  {num:'01',title:'Discovery call',body:'We learn your goals, tech stack, and current pipeline bottlenecks in a focused 30-minute call. No generic sales pitch — just honest diagnosis.'},
  {num:'02',title:'Custom proposal',body:'You receive a tailored proposal with the exact services and pricing that fit your specific situation. Clear scope. No hidden fees. No fluff.'},
  {num:'03',title:'Onboarding',body:'Our team handles the setup — CRM connections, workflow builds, sequence configuration. Most clients are live within 48 to 72 hours of signing.'},
  {num:'04',title:'Grow and scale',body:'Weekly check-ins, monthly performance reviews, and continuous AI optimisation. Every month compounds on the last.'},
]

export default function Services() {
  useSEO({
    title:'B2B Marketing Automation & Lead Enrichment Services | AIB2B',
    description:'Lead enrichment, marketing automation, and campaign management services for B2B revenue teams. Transparent pricing from $299/mo. Setup in 48 hours.',
    canonical:'https://aib2bautomation.com/services',
  })
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        .svc-card{transition:background .2s;position:relative;overflow:hidden}
        .svc-card::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;width:0;transition:width .35s cubic-bezier(.22,1,.36,1)}
        .svc-card:hover{background:${V.bg2}!important}
        .svc-card:hover::after{width:100%}
        .addon-card{position:relative;overflow:hidden;transition:background .2s}
        .addon-card::before{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:${V.blue};width:0;transition:width .35s cubic-bezier(.22,1,.36,1)}
        .addon-card:hover{background:#FAFAFA}
        .addon-card:hover::before{width:100%}
        .proc-row{display:grid;grid-template-columns:72px 1fr;transition:background .2s}
        .proc-row:hover{background:${V.bg2}}
        @media(max-width:900px){
          .svc-grid,.addon-grid,.how-grid-svc,.proc-hdr{grid-template-columns:1fr!important}
          .svc-card{border-right:none!important;border-bottom:1px solid ${V.rule}!important}
          .addon-card{border-right:none!important;border-bottom:1px solid ${V.rule}!important}
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Services</span>
          </nav>
          <div className="hero-h-rule"/>
          <div className="how-grid-svc" style={{display:'grid',gridTemplateColumns:'1fr 400px',gap:80,alignItems:'start'}}>
            <h1 style={{fontFamily:V.serif,fontSize:'clamp(48px,5.5vw,80px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em',color:V.ink}}>
              B2B automation,<br/><em style={{fontStyle:'italic',color:V.blue}}>built to scale</em><br/>your pipeline.
            </h1>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <p style={{fontSize:16,color:V.ink2,lineHeight:1.65,marginBottom:28}}>From lead enrichment to full campaign management — we handle every stage of your revenue pipeline so your team can focus on closing deals, not managing data.</p>
              <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:32}}>
                <Link to="/contact" className="btn-blue">Get custom quote →</Link>
                <Link to="/pricing" className="btn-outline">View pricing</Link>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',border:`1px solid ${V.rule}`,borderRadius:10,overflow:'hidden'}}>
                {[{n:'40%',l:'More qualified leads'},{n:'250%',l:'More responses'},{n:'9×',l:'Average ROI'}].map((s,i)=>(
                  <div key={i} style={{padding:'16px 14px',borderRight:i<2?`1px solid ${V.rule}`:'none',textAlign:'center'}}>
                    <div style={{fontFamily:V.serif,fontSize:26,fontWeight:400,color:V.blue,letterSpacing:'-.03em',lineHeight:1}}>{s.n}</div>
                    <div style={{fontSize:11,color:V.ink3,marginTop:4,lineHeight:1.3}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section style={{padding:'0 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{padding:'72px 0 40px',display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:40,borderBottom:`1px solid ${V.rule}`}}>
            <div>
              <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Core services</div>
              <h2 style={{fontFamily:V.serif,fontSize:'clamp(30px,3.8vw,48px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>Three ways we<br/><em style={{fontStyle:'italic',color:V.blue}}>fill your pipeline.</em></h2>
            </div>
            <p style={{fontSize:14,color:V.ink3,maxWidth:260,textAlign:'right',lineHeight:1.55}}>Click any service to see full details, pricing, and real client results.</p>
          </div>
          <div className="svc-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden',marginTop:40,marginBottom:80}}>
            {SERVICES.map((s,i)=>(
              <div key={i} className="svc-card" style={{borderRight:i<2?`1px solid ${V.rule}`:'none',display:'flex',flexDirection:'column',background:V.bg}}>
                <style>{`.svc-card:nth-of-type(${i+1})::after{background:${s.accent}}`}</style>
                <div style={{padding:'32px 28px 0'}}>
                  <div style={{fontSize:11,fontWeight:700,color:V.ink4,letterSpacing:'.1em',marginBottom:20}}>{s.num} — {s.tag}</div>
                  <div style={{width:40,height:40,borderRadius:10,background:s.aLight,display:'flex',alignItems:'center',justifyContent:'center',border:`1px solid ${V.rule}`,marginBottom:20,fontSize:18,color:s.accent}}>◎</div>
                  <div style={{fontFamily:V.serif,fontSize:23,fontWeight:400,color:V.ink,lineHeight:1.15,letterSpacing:'-.01em',marginBottom:12}}>{s.title}</div>
                  <div style={{fontSize:13.5,color:V.ink3,lineHeight:1.65,marginBottom:24}}>{s.desc}</div>
                </div>
                <div style={{borderTop:`1px solid ${V.rule}`,padding:'20px 28px',flex:1}}>
                  {s.features.map((f,fi)=>(
                    <div key={fi} style={{display:'flex',alignItems:'flex-start',gap:10,fontSize:13,color:V.ink2,padding:'7px 0',borderBottom:fi<s.features.length-1?`1px solid ${V.rule}`:'none'}}>
                      <span style={{color:s.accent,fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <div style={{margin:'0 28px',marginTop:20,padding:'12px 16px',background:s.aLight,borderRadius:8,border:`1px solid ${s.aBorder}`,display:'flex',alignItems:'center',gap:8,fontSize:13,fontWeight:700,color:s.accent}}>
                  <span style={{fontSize:15}}>↑</span>{s.metric}
                </div>
                <div style={{padding:'20px 28px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:`1px solid ${V.rule}`,marginTop:20}}>
                  <div style={{fontFamily:V.serif,fontSize:22,fontWeight:400,color:V.ink,letterSpacing:'-.02em'}}>${s.price}<span style={{fontFamily:V.sans,fontSize:12,color:V.ink3,fontWeight:400}}>/mo</span></div>
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

      {/* ADD-ONS */}
      <section style={{padding:'80px 40px',background:V.bg2,borderTop:`1px solid ${V.rule}`,borderBottom:`1px solid ${V.rule}`}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:40,borderBottom:`1px solid ${V.rule}`,paddingBottom:32,marginBottom:40}}>
            <div>
              <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Power-ups and add-ons</div>
              <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>Extend any plan with<br/><em style={{fontStyle:'italic',color:V.blue}}>additional capabilities.</em></h2>
            </div>
            <p style={{fontSize:14,color:V.ink3,maxWidth:260,textAlign:'right',lineHeight:1.55}}>Mix and match to build the exact stack your team needs.</p>
          </div>
          <div className="addon-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden',background:'white'}}>
            {ADD_ONS.map((a,i)=>(
              <div key={i} className="addon-card" style={{padding:28,borderRight:i<2?`1px solid ${V.rule}`:'none',display:'flex',flexDirection:'column'}}>
                <div style={{width:38,height:38,borderRadius:9,background:V.blueLight,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:18,border:`1px solid ${V.blueBorder}`,fontSize:16,color:V.blue,flexShrink:0}}>⊕</div>
                <div style={{fontFamily:V.serif,fontSize:20,fontWeight:400,color:V.ink,marginBottom:10,letterSpacing:'-.01em'}}>{a.title}</div>
                <div style={{fontSize:13,color:V.ink3,lineHeight:1.65,marginBottom:20,flex:1}}>{a.desc}</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:`1px solid ${V.rule}`,paddingTop:18}}>
                  <div style={{fontFamily:V.serif,fontSize:20,fontWeight:400,color:V.ink,letterSpacing:'-.02em'}}>${a.price}<span style={{fontFamily:V.sans,fontSize:12,color:V.ink3,fontWeight:400}}>/mo</span></div>
                  <Link to="/contact" className="btn-blue sm">Add on →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{padding:'80px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div className="proc-hdr" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,marginBottom:56,paddingBottom:40,borderBottom:`1px solid ${V.rule}`}}>
            <div>
              <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>How we work together</div>
              <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>From first call to<br/><em style={{fontStyle:'italic',color:V.blue}}>live pipeline in days.</em></h2>
            </div>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <p style={{fontSize:15,color:V.ink3,lineHeight:1.7,marginBottom:24}}>Most clients are generating pipeline within 72 hours of signing. No lengthy implementation. No discovery workshops that last three months.</p>
              <Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'12px 22px'}}>Book a discovery call →</Link>
            </div>
          </div>
          <div style={{border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden'}}>
            {STEPS.map((s,i)=>(
              <div key={i} className="proc-row" style={{borderBottom:i<STEPS.length-1?`1px solid ${V.rule}`:'none'}}>
                <div style={{fontFamily:V.serif,fontSize:32,fontWeight:400,color:V.ink4,display:'flex',alignItems:'center',justifyContent:'center',borderRight:`1px solid ${V.rule}`,padding:'28px 0'}}>{s.num}</div>
                <div style={{padding:'28px 32px'}}>
                  <div style={{fontSize:15,fontWeight:700,color:V.ink,marginBottom:6}}>{s.title}</div>
                  <div style={{fontSize:13.5,color:V.ink3,lineHeight:1.65}}>{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:'0 40px',marginBottom:72}}>
        <div style={{maxWidth:1280,margin:'0 auto',background:V.ink,borderRadius:16,padding:'64px 72px',display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,color:'white',lineHeight:1.1,letterSpacing:'-.03em',marginBottom:12}}>Ready to transform your <em style={{fontStyle:'italic',color:'#93B4FF'}}>sales pipeline?</em></h2>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.6}}>Let us build a custom package that fits your team and budget. No lock-in. No surprises.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,alignItems:'flex-end',flexShrink:0}}>
            <Link to="/contact" className="btn-white">Schedule a consultation →</Link>
            <span style={{fontSize:12,color:'rgba(255,255,255,.3)',textAlign:'right'}}>Usually responds within 2 hours</span>
          </div>
        </div>
      </div>
    </div>
  )
}
