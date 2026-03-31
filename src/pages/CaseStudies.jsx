import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const STUDIES=[
  {company:'CloudVault',industry:'B2B SaaS',challenge:'Low MQL-to-SQL conversion rates and no clear view of which leads were worth pursuing. The team was spending 70% of SDR hours on prospects who never engaged.',solution:'Implemented AI lead scoring, automated data enrichment, and a five-step multi-channel nurture sequence targeting accounts that showed buying intent signals.',results:[{m:'4.7×',l:'More qualified meetings per month'},{m:'38%',l:'Increase in MQL-to-SQL rate'},{m:'21 days',l:'Average time to first meeting'}],quote:'AIB2B Automation completely changed how we run outbound. We went from 10 qualified meetings a month to 47 in 60 days — and the quality is noticeably higher.',author:'Sarah Mitchell, VP Revenue',accent:'#1B4FD8'},
  {company:'Nexify',industry:'Enterprise Software',challenge:'Sales team spending 70% of their time on low-quality leads. CRM data was stale, incomplete, and out of date — reps were flying blind on every call.',solution:'Deployed real-time lead enrichment, intent-based scoring, and automated CRM hygiene workflows that kept every record current without manual intervention.',results:[{m:'35%',l:'Higher close rate'},{m:'$2.1M',l:'Pipeline added in 90 days'},{m:'60%',l:'Reduction in time wasted on bad leads'}],quote:'The enrichment alone is worth ten times the price. We stopped wasting hours on leads that were never going to buy and started working the ones that actually mattered.',author:'James Park, Head of Growth',accent:'#7C3AED'},
  {company:'DataBridge',industry:'Data Infrastructure',challenge:"Relied entirely on referrals and industry conferences for new business. Needed to build a scalable outbound motion from scratch — something repeatable and compoundable.",solution:'Built end-to-end outbound from the ground up: ICP definition, list building with enrichment, multi-channel sequencing, and full campaign management.',results:[{m:'9×',l:'ROI achieved by month three'},{m:'102',l:'Sales conversations started'},{m:'45%',l:'Demo-to-close rate'}],quote:"We tried three automation tools before this one. Nothing came close. The ROI calculator on the website actually undersold it — we hit 9× in 90 days.",author:'Priya Sharma, CEO',accent:'#0891B2'},
  {company:'ProScale',industry:'Marketing Technology',challenge:'High monthly churn driven by poor onboarding and no visibility into which customers were at risk until it was too late to do anything about it.',solution:'Implemented customer health scoring, usage-based trigger campaigns, and automated success milestones that surfaced at-risk accounts 30+ days before churn.',results:[{m:'30%',l:'Reduction in monthly churn'},{m:'18%',l:'Increase in expansion revenue'},{m:'4.8/5',l:'Customer satisfaction score'}],quote:'Within 60 days we knew which customers were likely to leave weeks before they thought about leaving. That early warning alone paid for the platform many times over.',author:'Marcus Reid, VP Customer Success',accent:V.green},
]
export default function CaseStudies() {
  useSEO({title:'Customer Case Studies & Results | AIB2B Automation',description:'Real B2B companies, real revenue results. See how CloudVault hit 4.7× more meetings, Nexify added $2.1M pipeline, and DataBridge achieved 9× ROI in 90 days.',canonical:'https://aib2bautomation.com/case-studies'})
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        .study-card{border:1px solid ${V.rule};border-radius:12px;overflow:hidden;transition:box-shadow .2s}
        .study-card:hover{box-shadow:0 8px 40px rgba(0,0,0,.08)}
        @media(max-width:900px){.study-inner{grid-template-columns:1fr!important}}
      `}</style>
      {/* HERO */}
      <section className="page-hero">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><span>Case Studies</span></nav>
          <div className="hero-h-rule"/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:80,alignItems:'start'}}>
            <h1 style={{fontFamily:V.serif,fontSize:'clamp(48px,5.5vw,80px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em'}}>
              Real companies.<br/><em style={{fontStyle:'italic',color:V.blue}}>Real numbers.</em>
            </h1>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <p style={{fontSize:16,color:V.ink2,lineHeight:1.65,marginBottom:20}}>Every number below comes from a real client engagement. No projections, no best-case scenarios, no cherry-picking. This is what actually happened.</p>
              <Link to="/contact" className="btn-blue">Get results like these →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIES */}
      <section style={{padding:'72px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',display:'flex',flexDirection:'column',gap:32}}>
          {STUDIES.map((s,i)=>(
            <article key={i} className="study-card">
              <div className="study-inner" style={{display:'grid',gridTemplateColumns:'280px 1fr'}}>
                {/* Left */}
                <div style={{background:s.accent,padding:'40px 32px',display:'flex',flexDirection:'column',justifyContent:'space-between',gap:32}}>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'rgba(255,255,255,.55)',marginBottom:8}}>{s.industry}</div>
                    <div style={{fontFamily:V.serif,fontSize:32,fontWeight:400,color:'white',letterSpacing:'-.02em'}}>{s.company}</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:20}}>
                    {s.results.map((r,ri)=>(
                      <div key={ri}>
                        <div style={{fontFamily:V.serif,fontSize:36,fontWeight:400,color:'white',lineHeight:1,letterSpacing:'-.03em'}}>{r.m}</div>
                        <div style={{fontSize:13,color:'rgba(255,255,255,.65)',marginTop:4}}>{r.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right */}
                <div style={{padding:'40px',display:'flex',flexDirection:'column',gap:28}}>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,color:V.ink4,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:10}}>The challenge</div>
                    <p style={{fontSize:15,color:V.ink2,lineHeight:1.65}}>{s.challenge}</p>
                  </div>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,color:V.ink4,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:10}}>Our solution</div>
                    <p style={{fontSize:15,color:V.ink2,lineHeight:1.65}}>{s.solution}</p>
                  </div>
                  <blockquote style={{borderLeft:`3px solid ${s.accent}`,paddingLeft:20,margin:0}}>
                    <p style={{fontSize:15,color:V.ink2,lineHeight:1.75,fontStyle:'italic',marginBottom:10}}>"{s.quote}"</p>
                    <div style={{fontSize:13,fontWeight:700,color:V.ink}}>— {s.author}</div>
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:'0 40px',marginBottom:72}}>
        <div style={{maxWidth:1280,margin:'0 auto',background:V.ink,borderRadius:16,padding:'64px 72px',display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,color:'white',lineHeight:1.1,letterSpacing:'-.03em',marginBottom:12}}>Want results like <em style={{fontStyle:'italic',color:'#93B4FF'}}>these?</em></h2>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.6}}>Let us talk about what is possible for your pipeline in the next 90 days.</p>
          </div>
          <div style={{flexShrink:0}}><Link to="/contact" className="btn-white">Book a free strategy call →</Link></div>
        </div>
      </div>
    </div>
  )
}
