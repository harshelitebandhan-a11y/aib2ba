import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { allPosts } from './blog/blogData'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const CATS=['All','Lead Generation','Marketing Automation','Email Strategy','RevOps','Sales','Sales Automation']
export default function Blog() {
  const [cat,setCat]=useState('All')
  const [q,setQ]=useState('')
  const [email,setEmail]=useState('')
  const [subscribed,setSubscribed]=useState(false)
  useSEO({title:'B2B Sales & Marketing Automation Blog | AIB2B',description:'Actionable playbooks, deep-dives, and expert takes on B2B lead generation, marketing automation, email deliverability, and revenue operations. Updated weekly.',canonical:'https://aib2bautomation.com/blog'})
  const filtered=allPosts.filter(p=>{
    const mc=cat==='All'||p.cat===cat
    const mq=q===''||p.title.toLowerCase().includes(q.toLowerCase())||p.excerpt.toLowerCase().includes(q.toLowerCase())
    return mc&&mq
  })
  const featured=filtered.find(p=>p.featured&&cat==='All'&&q==='')
  const grid=featured?filtered.filter(p=>!p.featured):filtered
  const ACCENT_MAP={'#2563eb':V.blue,'#7c3aed':'#7C3AED','#0891b2':'#0891B2','#059669':V.green,'#d97706':'#D97706','#dc2626':'#EF4444'}
  const accent=c=>ACCENT_MAP[c]||V.blue
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        .cat-btn{font-family:${V.sans};font-size:13px;font-weight:500;padding:8px 16px;border:1px solid ${V.rule};border-radius:100px;cursor:pointer;background:transparent;color:${V.ink3};transition:all .15s}
        .cat-btn:hover{border-color:${V.blue};color:${V.blue}}
        .cat-btn.active{background:${V.ink};color:white;border-color:${V.ink}}
        .post-card{border:1px solid ${V.rule};border-radius:12px;overflow:hidden;transition:box-shadow .2s,transform .2s;background:white}
        .post-card:hover{box-shadow:0 8px 32px rgba(0,0,0,.08);transform:translateY(-2px)}
        .search-wrap{display:flex;align-items:center;gap:10px;background:${V.bg2};border:1px solid ${V.rule};border-radius:8px;padding:10px 16px;max-width:380px}
        .search-wrap input{border:none;background:transparent;font-family:${V.sans};font-size:14px;color:${V.ink};outline:none;width:100%}
        @media(max-width:900px){.blog-grid{grid-template-columns:1fr!important}.feat-inner{grid-template-columns:1fr!important}}
      `}</style>
      {/* HERO */}
      <section className="page-hero">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><span>Blog</span></nav>
          <div className="hero-h-rule"/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:80,alignItems:'start'}}>
            <div>
              <h1 style={{fontFamily:V.serif,fontSize:'clamp(48px,5.5vw,80px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em',marginBottom:24}}>
                Insights for B2B <em style={{fontStyle:'italic',color:V.blue}}>revenue teams.</em>
              </h1>
              <div className="search-wrap">
                <span style={{color:V.ink4}}>🔍</span>
                <input type="search" placeholder="Search articles..." value={q} onChange={e=>setQ(e.target.value)} aria-label="Search blog posts"/>
              </div>
            </div>
            <div style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
              <p style={{fontSize:16,color:V.ink2,lineHeight:1.65,marginBottom:24}}>Actionable playbooks, deep-dives, and expert takes on sales automation, lead intelligence, and revenue operations — published every week.</p>
              {!subscribed?(
                <form onSubmit={e=>{e.preventDefault();if(email)setSubscribed(true)}} style={{display:'flex',gap:8}}>
                  <input type="email" required placeholder="Your work email" value={email} onChange={e=>setEmail(e.target.value)} style={{flex:1,fontFamily:V.sans,fontSize:14,color:V.ink,background:V.bg,border:`1px solid ${V.rule}`,borderRadius:8,padding:'10px 14px',outline:'none'}}/>
                  <button type="submit" className="btn-blue" style={{fontSize:13,padding:'10px 16px',whiteSpace:'nowrap'}}>Subscribe →</button>
                </form>
              ):(
                <div style={{padding:'14px 18px',background:'#F0FDF4',border:'1px solid #BBF7D0',borderRadius:8,fontSize:14,color:V.green,fontWeight:600}}>✓ You are subscribed — great to have you.</div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* FILTER */}
      <div style={{borderBottom:`1px solid ${V.rule}`,padding:'0 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',display:'flex',gap:8,padding:'20px 0',flexWrap:'wrap'}}>
          {CATS.map(c=><button key={c} className={`cat-btn${cat===c?' active':''}`} onClick={()=>setCat(c)}>{c}</button>)}
        </div>
      </div>
      {/* FEATURED */}
      {featured&&(
        <section style={{padding:'56px 40px 0'}}>
          <div style={{maxWidth:1280,margin:'0 auto'}}>
            <Link to={`/blog/${featured.slug}`} style={{display:'block',border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden',textDecoration:'none',transition:'box-shadow .2s'}}
              onMouseOver={e=>e.currentTarget.style.boxShadow='0 8px 40px rgba(0,0,0,.08)'} onMouseOut={e=>e.currentTarget.style.boxShadow='none'}>
              <div className="feat-inner" style={{display:'grid',gridTemplateColumns:'1fr 420px'}}>
                <div style={{background:accent(featured.color),padding:'56px 48px',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                  <div style={{display:'inline-block',background:'rgba(255,255,255,.15)',color:'white',fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'5px 12px',borderRadius:100,marginBottom:20}}>{featured.cat}</div>
                  <h2 style={{fontFamily:V.serif,fontSize:'clamp(24px,3vw,38px)',fontWeight:400,color:'white',lineHeight:1.1,letterSpacing:'-.02em',marginBottom:16}}>{featured.title}</h2>
                  <p style={{fontSize:14,color:'rgba(255,255,255,.75)',lineHeight:1.65}}>{featured.excerpt}</p>
                </div>
                <div style={{padding:'48px',display:'flex',flexDirection:'column',justifyContent:'center',gap:20,background:'white'}}>
                  <div style={{display:'inline-flex',alignItems:'center',gap:6,background:V.blueLight,color:V.blue,borderRadius:100,padding:'4px 12px',fontSize:11,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',width:'fit-content'}}>Featured</div>
                  <p style={{fontSize:15,color:V.ink2,lineHeight:1.75}}>{featured.excerpt}</p>
                  <div style={{display:'flex',gap:16,alignItems:'center',paddingTop:20,borderTop:`1px solid ${V.rule}`}}>
                    <span style={{fontSize:12,color:V.ink3}}>{featured.date}</span>
                    <span style={{fontSize:12,color:V.ink3}}>·</span>
                    <span style={{fontSize:12,color:V.ink3}}>{featured.read} read</span>
                    <span style={{fontSize:13,color:V.blue,fontWeight:600,marginLeft:'auto'}}>Read article →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
      {/* GRID */}
      <section style={{padding:'56px 40px 80px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          {grid.length===0?(
            <div style={{textAlign:'center',padding:'64px 0',color:V.ink3}}>No articles match your search. Try a different term or category.</div>
          ):(
            <div className="blog-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
              {grid.map(p=>(
                <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card" style={{textDecoration:'none',display:'flex',flexDirection:'column'}}>
                  <div style={{height:8,background:accent(p.color)}}/>
                  <div style={{padding:'24px 24px 20px',flex:1,display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}>
                      <span style={{fontSize:10,fontWeight:700,color:accent(p.color),letterSpacing:'.08em',textTransform:'uppercase'}}>{p.cat}</span>
                    </div>
                    <h3 style={{fontFamily:V.serif,fontSize:20,fontWeight:400,color:V.ink,lineHeight:1.2,letterSpacing:'-.01em',marginBottom:12,flex:1}}>{p.title}</h3>
                    <p style={{fontSize:13,color:V.ink3,lineHeight:1.65,marginBottom:20}}>{p.excerpt}</p>
                    <div style={{display:'flex',gap:12,alignItems:'center',paddingTop:16,borderTop:`1px solid ${V.rule}`}}>
                      <span style={{fontSize:12,color:V.ink4}}>{p.date}</span>
                      <span style={{fontSize:12,color:V.ink4}}>·</span>
                      <span style={{fontSize:12,color:V.ink4}}>{p.read} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
