import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const STATS=[{n:'500+',t:'Happy clients',s:'across 12 countries'},{n:'$50M+',t:'Revenue generated',s:'for our client base'},{n:'50+',t:'Team members',s:'across sales, product, and CS'},{n:'4.9/5',t:'Average rating',s:'from verified G2 reviews'}]
const VALUES=[{g:'◎',title:'Results first',desc:'Every strategy is built around measurable outcomes. Vanity metrics are not on our scorecard — closed revenue is.'},{g:'⚡',title:'Speed matters',desc:'We move fast because your pipeline cannot wait. Most clients are live and generating results within 48 hours.'},{g:'♡',title:'Client success',desc:'Your growth is our growth. We build long-term partnerships, which is why 94% of our clients renew year over year.'},{g:'⬡',title:'Scalable by design',desc:'Our infrastructure grows with you — from a 10-person startup running their first outbound to a Fortune 500 enterprise.'}]
const TEAM=[{name:'Alex Thompson',role:'CEO & Founder',exp:['Sales Strategy','RevOps','Team Leadership'],bio:'Former VP of Sales at TechCorp with 15+ years in B2B automation. Alex built his first lead scoring model in 2009 and has been obsessed with the space ever since.'},{name:'Sarah Kim',role:'CTO',exp:['AI/ML','Marketing Automation','Architecture'],bio:'Sarah led ML infrastructure at Google before joining us to build the scoring engine that now powers 500+ client pipelines. She holds three patents in predictive analytics.'},{name:'Marcus Rodriguez',role:'Head of Customer Success',exp:['Customer Success','Process Optimisation'],bio:'Marcus has helped over 500 companies redesign their sales and marketing processes. His clients average 40% improvement in qualified pipeline within 90 days.'},{name:'Emily Chen',role:'Lead Data Scientist',exp:['Data Science','Predictive Analytics'],bio:"Emily's PhD research on buyer intent signals became the foundation for our enrichment model. She joined us straight from her postdoc because she wanted to see her work used in the real world."}]
const MILESTONES=[{year:'2019',title:'Company founded',desc:'Started in a San Francisco co-working space with four people and one obsession: making outbound work better for smaller teams.'},{year:'2020',title:'First 100 clients',desc:'Reached our first milestone helping growing companies automate their sales process — then immediately realised we had built something others genuinely needed.'},{year:'2021',title:'AI integration',desc:'Launched our proprietary AI-powered lead scoring and enrichment platform. Average client saw a 40% lift in qualified pipeline within 90 days.'},{year:'2022',title:'Series A funding',desc:'Secured $10M in Series A led by Accel Partners to accelerate product development, hiring, and go-to-market expansion.'},{year:'2023',title:'Enterprise solutions',desc:'Launched enterprise-grade infrastructure serving Fortune 500 companies with custom SLAs, dedicated environments, and professional services.'},{year:'2024',title:'Global expansion',desc:'Expanded to serve clients across North America, Europe, and APAC with localised playbooks and regional support coverage.'}]
export default function About() {
  useSEO({title:'About AIB2B Automation — Our Mission, Team & Story',description:'Meet the team behind AIB2B Automation. We help 500+ B2B companies build predictable revenue through intelligent lead enrichment and marketing automation. Founded 2019.',canonical:'https://aib2bautomation.com/about'})
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        .val-card{transition:background .2s,border-color .2s}
        .val-card:hover{background:white!important;border-color:${V.blue}!important}
        .team-card{transition:box-shadow .2s,transform .2s}
        .team-card:hover{box-shadow:0 8px 40px rgba(0,0,0,.08)!important;transform:translateY(-2px)}
        .tl-item{display:grid;grid-template-columns:80px 1fr;border-bottom:1px solid ${V.rule}}
        .tl-item:last-child{border-bottom:none}
        @media(max-width:900px){.val-grid,.team-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><span>About</span></nav>
          <div className="hero-h-rule"/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:80,alignItems:'start'}}>
            <h1 style={{fontFamily:V.serif,fontSize:'clamp(48px,5.5vw,80px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em'}}>
              We build revenue<br/>systems that<br/><em style={{fontStyle:'italic',color:V.blue}}>compound.</em>
            </h1>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <p style={{fontSize:16,color:V.ink2,lineHeight:1.65,marginBottom:24}}>We are on a mission to give every B2B team access to the same kind of intelligent automation that used to be reserved for companies with eight-figure marketing budgets.</p>
              <p style={{fontSize:15,color:V.ink3,lineHeight:1.65,marginBottom:28}}>Founded in 2019 in San Francisco, we have helped over 500 companies generate more than $50M in measurable revenue. We are still just getting started.</p>
              <Link to="/contact" className="btn-blue">Work with us →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{borderBottom:`1px solid ${V.rule}`}}>
        <div style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
          {STATS.map((s,i)=>(
            <div key={i} style={{padding:'48px 40px',borderRight:i<3?`1px solid ${V.rule}`:'none'}}>
              <div style={{fontFamily:V.serif,fontSize:56,fontWeight:400,color:V.ink,lineHeight:1,marginBottom:10,letterSpacing:'-.03em'}}>{s.n}</div>
              <div style={{fontSize:14,fontWeight:600,color:V.ink,marginBottom:4}}>{s.t}</div>
              <div style={{fontSize:13,color:V.ink3}}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section style={{padding:'80px 40px',borderBottom:`1px solid ${V.rule}`}}>
        <div style={{maxWidth:820,margin:'0 auto',textAlign:'center'}}>
          <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:16}}>Our mission</div>
          <h2 style={{fontFamily:V.serif,fontSize:'clamp(30px,4vw,48px)',fontWeight:400,lineHeight:1.1,letterSpacing:'-.03em',marginBottom:24}}>Empowering every B2B team to <em style={{fontStyle:'italic',color:V.blue}}>sell smarter.</em></h2>
          <p style={{fontSize:17,color:V.ink3,lineHeight:1.8}}>We believe every company deserves access to enterprise-grade sales and marketing automation — regardless of size or budget. Our platform gives growing teams the same intelligence, the same enrichment depth, and the same workflow sophistication that the largest companies in the world have had for years.</p>
        </div>
      </section>

      {/* VALUES */}
      <section style={{padding:'80px 40px',background:V.bg2,borderBottom:`1px solid ${V.rule}`}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Our values</div>
          <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em',marginBottom:48}}>What drives every <em style={{fontStyle:'italic',color:V.blue}}>decision we make.</em></h2>
          <div className="val-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
            {VALUES.map((v,i)=>(
              <div key={i} className="val-card" style={{background:V.bg2,border:`1px solid ${V.rule}`,borderRadius:12,padding:28}}>
                <div style={{fontSize:28,marginBottom:16,color:V.blue}}>{v.g}</div>
                <div style={{fontFamily:V.serif,fontSize:20,fontWeight:400,color:V.ink,marginBottom:10}}>{v.title}</div>
                <div style={{fontSize:13,color:V.ink3,lineHeight:1.65}}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{padding:'80px 40px',borderBottom:`1px solid ${V.rule}`}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>The team</div>
          <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em',marginBottom:48}}>The people behind <em style={{fontStyle:'italic',color:V.blue}}>your results.</em></h2>
          <div className="team-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
            {TEAM.map((m,i)=>(
              <div key={i} className="team-card" style={{background:'white',border:`1px solid ${V.rule}`,borderRadius:12,padding:28}}>
                <div style={{width:52,height:52,borderRadius:'50%',background:V.blueLight,border:`1px solid ${V.blueBorder||'#C7D4FF'}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:700,color:V.blue,marginBottom:16}}>
                  {m.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div style={{fontFamily:V.serif,fontSize:18,fontWeight:400,color:V.ink,marginBottom:4}}>{m.name}</div>
                <div style={{fontSize:13,fontWeight:600,color:V.blue,marginBottom:12}}>{m.role}</div>
                <p style={{fontSize:13,color:V.ink3,lineHeight:1.65,marginBottom:16}}>{m.bio}</p>
                <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                  {m.exp.map(s=><span key={s} style={{padding:'3px 10px',background:V.blueLight,color:V.blue,borderRadius:100,fontSize:11,fontWeight:600,border:`1px solid ${V.blueBorder||'#C7D4FF'}`}}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{padding:'80px 40px',background:V.bg2,borderBottom:`1px solid ${V.rule}`}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Our journey</div>
          <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em',marginBottom:48}}>Six years of <em style={{fontStyle:'italic',color:V.blue}}>building in public.</em></h2>
          <div style={{border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden',background:'white'}}>
            {MILESTONES.map((m,i)=>(
              <div key={i} className="tl-item">
                <div style={{padding:'28px 20px',borderRight:`1px solid ${V.rule}`,display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:32}}>
                  <span style={{fontFamily:V.serif,fontSize:16,fontWeight:400,color:V.ink4}}>{m.year}</span>
                </div>
                <div style={{padding:'28px 32px'}}>
                  <div style={{fontSize:15,fontWeight:700,color:V.ink,marginBottom:6}}>{m.title}</div>
                  <div style={{fontSize:13.5,color:V.ink3,lineHeight:1.65}}>{m.desc}</div>
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
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,color:'white',lineHeight:1.1,letterSpacing:'-.03em',marginBottom:12}}>Ready to transform <em style={{fontStyle:'italic',color:'#93B4FF'}}>your business?</em></h2>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.6}}>Join hundreds of companies that trust AIB2B to drive predictable, compounding growth.</p>
          </div>
          <div style={{flexShrink:0}}>
            <Link to="/contact" className="btn-white">Get started today →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
