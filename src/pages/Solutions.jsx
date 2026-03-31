import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const SOLUTIONS=[
  {g:'⬡',title:'Enterprise Sales Acceleration',desc:'Complete pipeline automation for large organisations with complex, multi-stakeholder buying cycles and long deal timelines.',features:['Multi-stage pipeline automation','Advanced lead scoring and routing','Sales team performance analytics','Custom CRM integrations','Enterprise-grade security and SSO'],result:'Average 40% increase in qualified leads',industries:['Technology','Manufacturing','Financial Services'],accent:'#1B4FD8'},
  {g:'◎',title:'E-commerce Growth Suite',desc:'Specialised automation for online retailers looking to maximise acquisition, improve retention, and grow lifetime customer value.',features:['Abandoned cart recovery sequences','Customer lifecycle automation','Product recommendation engine','Cross-sell and upsell campaigns','Inventory-based trigger marketing'],result:'Average 25% boost in conversion rates',industries:['Retail','Fashion','Consumer Goods'],accent:'#7C3AED'},
  {g:'⌬',title:'SaaS Customer Success',desc:'End-to-end automation to reduce churn, drive expansion revenue, and improve net revenue retention — without adding headcount.',features:['Automated onboarding sequences','Usage-based trigger campaigns','Churn prediction and prevention','Expansion revenue workflows','Customer health scoring'],result:'Average 30% reduction in churn rate',industries:['SaaS','Software','Technology'],accent:'#0891B2'},
  {g:'◈',title:'Professional Services Growth',desc:'Tailored automation for consultancies, agencies, and professional service firms that live and die by their relationship pipeline.',features:['Proposal and RFP automation','Client nurturing sequences','Referral programme management','Project-based marketing triggers','Thought leadership campaigns'],result:'Average 35% increase in qualified inquiries',industries:['Consulting','Legal','Marketing Agencies'],accent:V.green},
]
const STEPS=[{num:'01',title:'Discovery and analysis',body:'We map your current processes, identify the bottlenecks that cost you the most revenue, and surface quick wins you can act on immediately.'},{num:'02',title:'Strategy development',body:'A custom automation roadmap aligned with your specific goals and industry dynamics — not a generic best-practices document.'},{num:'03',title:'Implementation',body:'Seamless deployment with zero disruption to your existing operations. Most clients are live in 48 to 72 hours.'},{num:'04',title:'Optimise and scale',body:'Continuous monitoring and monthly refinement sessions to compound your ROI over time. Every month should outperform the last.'}]
export default function Solutions() {
  useSEO({title:'B2B Automation Solutions by Industry | AIB2B Automation',description:'Industry-specific B2B automation solutions for enterprise sales, SaaS customer success, e-commerce growth, and professional services. Built around your market.',canonical:'https://aib2bautomation.com/solutions'})
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        .sol-card{border:1px solid ${V.rule};border-radius:12px;overflow:hidden;transition:box-shadow .2s,transform .2s}
        .sol-card:hover{box-shadow:0 8px 40px rgba(0,0,0,.08);transform:translateY(-2px)}
        .proc-row{display:grid;grid-template-columns:72px 1fr;transition:background .2s;border-bottom:1px solid ${V.rule}}
        .proc-row:last-child{border-bottom:none}
        .proc-row:hover{background:${V.bg2}}
        @media(max-width:900px){.sol-grid,.proc-cols{grid-template-columns:1fr!important}}
      `}</style>
      {/* HERO */}
      <section className="page-hero">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><span>Solutions</span></nav>
          <div className="hero-h-rule"/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:80,alignItems:'start'}}>
            <h1 style={{fontFamily:V.serif,fontSize:'clamp(48px,5.5vw,80px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em'}}>
              Solutions built for<br/><em style={{fontStyle:'italic',color:V.blue}}>your industry,</em><br/>not anyone else's.
            </h1>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <p style={{fontSize:16,color:V.ink2,lineHeight:1.65,marginBottom:28}}>Generic automation playbooks fail because every industry has different buyers, different timelines, and different signals. We build around yours from day one.</p>
              <Link to="/contact" className="btn-blue">Find your solution →</Link>
            </div>
          </div>
        </div>
      </section>
      {/* SOLUTIONS */}
      <section style={{padding:'72px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:40,borderBottom:`1px solid ${V.rule}`,paddingBottom:32,marginBottom:48}}>
            <div>
              <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Solutions</div>
              <h2 style={{fontFamily:V.serif,fontSize:'clamp(30px,3.8vw,48px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>Four verticals.<br/><em style={{fontStyle:'italic',color:V.blue}}>One platform.</em></h2>
            </div>
            <p style={{fontSize:14,color:V.ink3,maxWidth:260,textAlign:'right',lineHeight:1.55}}>Each solution is built around your specific buyers, your sales cycle, and your revenue model.</p>
          </div>
          <div className="sol-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}}>
            {SOLUTIONS.map((s,i)=>(
              <div key={i} className="sol-card">
                <div style={{background:s.accent,padding:'36px 32px',color:'white'}}>
                  <div style={{fontSize:28,marginBottom:16}}>{s.g}</div>
                  <h3 style={{fontFamily:V.serif,fontSize:24,fontWeight:400,color:'white',marginBottom:10,lineHeight:1.15}}>{s.title}</h3>
                  <p style={{fontSize:14,color:'rgba(255,255,255,.8)',lineHeight:1.65,marginBottom:16}}>{s.desc}</p>
                  <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.15)',padding:'8px 14px',borderRadius:8,fontSize:13,fontWeight:700}}>↑ {s.result}</div>
                </div>
                <div style={{padding:'28px 32px'}}>
                  <div style={{fontSize:11,fontWeight:700,color:V.ink4,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:14}}>Key capabilities</div>
                  <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10,marginBottom:20}}>
                    {s.features.map((f,fi)=>(
                      <li key={fi} style={{display:'flex',alignItems:'flex-start',gap:10,fontSize:14,color:V.ink2}}>
                        <span style={{color:s.accent,fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                    {s.industries.map(ind=><span key={ind} style={{padding:'4px 12px',background:V.blueLight,color:V.blue,borderRadius:100,fontSize:12,fontWeight:600,border:`1px solid #C7D4FF`}}>{ind}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section style={{padding:'80px 40px',background:V.bg2,borderTop:`1px solid ${V.rule}`,borderBottom:`1px solid ${V.rule}`}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div className="proc-cols" style={{display:'grid',gridTemplateColumns:'360px 1fr',gap:80,marginBottom:56,paddingBottom:48,borderBottom:`1px solid ${V.rule}`}}>
            <div>
              <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Our process</div>
              <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>From strategy to <em style={{fontStyle:'italic',color:V.blue}}>revenue in four steps.</em></h2>
            </div>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <p style={{fontSize:15,color:V.ink3,lineHeight:1.7,marginBottom:24}}>We do not parachute in with a generic playbook. Every engagement starts with a deep understanding of your market, your buyers, and the specific signals that indicate purchase intent in your category.</p>
              <Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'12px 22px'}}>Get a custom solution →</Link>
            </div>
          </div>
          <div style={{border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden',background:'white'}}>
            {STEPS.map((s,i)=>(
              <div key={i} className="proc-row">
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
      <div style={{padding:'72px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',background:V.ink,borderRadius:16,padding:'64px 72px',display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,color:'white',lineHeight:1.1,letterSpacing:'-.03em',marginBottom:12}}>Ready to build your <em style={{fontStyle:'italic',color:'#93B4FF'}}>custom solution?</em></h2>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.6}}>Tell us about your market and we will put together a solution built specifically for your buyers.</p>
          </div>
          <div style={{flexShrink:0}}><Link to="/contact" className="btn-white">Get a custom solution →</Link></div>
        </div>
      </div>
    </div>
  )
}
