import { Link } from 'react-router-dom'
import { useSEO } from '../../hooks/useSEO'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
export default function ServiceDetail({ service: s }) {
  useSEO({
    title:`${s.title} | AIB2B Automation Services`,
    description:s.seoDesc||s.desc,
    canonical:`https://aib2bautomation.com/services/${s.slug}`,
  })
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        .feat-row{border-bottom:1px solid ${V.rule};padding:12px 0;display:flex;align-items:flex-start;gap:12;font-size:14px;color:${V.ink2};line-height:1.65}
        .feat-row:last-child{border-bottom:none}
        .result-card{border:1px solid ${V.rule};border-radius:10px;padding:24px;text-align:center;transition:border-color .2s}
        .result-card:hover{border-color:${s.accent||V.blue}}
        @media(max-width:900px){.sd-grid,.result-grid{grid-template-columns:1fr!important}}
      `}</style>
      {/* HERO */}
      <section className="page-hero">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/services">Services</Link><span>›</span><span>{s.title}</span></nav>
          <div className="hero-h-rule"/>
          <div className="sd-grid" style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:80,alignItems:'start'}}>
            <div>
              <div style={{display:'inline-block',background:s.accentLight||V.blueLight,color:s.accent||V.blue,fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'5px 12px',borderRadius:100,marginBottom:20}}>{s.tag}</div>
              <h1 style={{fontFamily:V.serif,fontSize:'clamp(44px,5vw,72px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em',marginBottom:24}}>
                {s.heroTitle||s.title}
              </h1>
              <p style={{fontSize:17,color:V.ink2,lineHeight:1.7,maxWidth:580}}>{s.desc}</p>
            </div>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <div style={{fontFamily:V.serif,fontSize:56,fontWeight:400,color:s.accent||V.blue,letterSpacing:'-.03em',lineHeight:1,marginBottom:8}}>{s.headline_stat}</div>
              <div style={{fontSize:14,color:V.ink3,marginBottom:28,lineHeight:1.5}}>{s.headline_label}</div>
              <Link to="/contact" className="btn-blue" style={{background:s.accent||V.blue,marginBottom:12,width:'100%',justifyContent:'center'}}>Get started →</Link>
              <div style={{fontSize:12,color:V.ink4,textAlign:'center'}}>14-day free trial · No credit card</div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      {s.features&&(
        <section style={{padding:'72px var(--px)',borderBottom:`1px solid ${V.rule}`}}>
          <div style={{maxWidth:1280,margin:'0 auto'}}>
            <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:40,borderBottom:`1px solid ${V.rule}`,paddingBottom:32,marginBottom:48}}>
              <div>
                <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>What is included</div>
                <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>Everything you need to <em style={{fontStyle:'italic',color:s.accent||V.blue}}>get results fast.</em></h2>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:0,border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden'}}>
              {s.features.map((f,i)=>(
                <div key={i} style={{padding:'28px',borderRight:i%3<2?`1px solid ${V.rule}`:'none',borderBottom:i<s.features.length-3?`1px solid ${V.rule}`:'none',background:V.bg}}>
                  <div style={{fontFamily:V.serif,fontSize:18,fontWeight:400,color:V.ink,marginBottom:8}}>{f.title}</div>
                  <p style={{fontSize:13,color:V.ink3,lineHeight:1.65}}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* RESULTS */}
      {s.results&&(
        <section style={{padding:'72px var(--px)',background:V.bg2,borderBottom:`1px solid ${V.rule}`}}>
          <div style={{maxWidth:1280,margin:'0 auto'}}>
            <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Expected results</div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em',marginBottom:48}}>What our clients typically <em style={{fontStyle:'italic',color:s.accent||V.blue}}>see in 90 days.</em></h2>
            <div className="result-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
              {s.results.map((r,i)=>(
                <div key={i} className="result-card">
                  <div style={{fontFamily:V.serif,fontSize:48,fontWeight:400,color:s.accent||V.blue,lineHeight:1,letterSpacing:'-.03em',marginBottom:8}}>{r.metric}</div>
                  <div style={{fontSize:14,fontWeight:600,color:V.ink,marginBottom:6}}>{r.label}</div>
                  <div style={{fontSize:13,color:V.ink3,lineHeight:1.55}}>{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* CTA */}
      <div style={{padding:'72px var(--px)'}}>
        <div style={{maxWidth:1280,margin:'0 auto',background:V.ink,borderRadius:16,padding:'64px 72px',display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,44px)',fontWeight:400,color:'white',lineHeight:1.1,letterSpacing:'-.03em',marginBottom:12}}>
              Ready to get started with <em style={{fontStyle:'italic',color:'#93B4FF'}}>{s.title}?</em>
            </h2>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.6}}>Talk to our team and we will build a plan tailored to your goals, your team size, and your current stack.</p>
          </div>
          <div style={{flexShrink:0}}><Link to="/contact" className="btn-white">Get a custom quote →</Link></div>
        </div>
      </div>
    </div>
  )
}
