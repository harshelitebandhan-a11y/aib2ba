import { Link, useNavigate } from 'react-router-dom'
import { useSEO } from '../../hooks/useSEO'

const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const ACCENT_MAP={'#2563eb':V.blue,'#7c3aed':'#7C3AED','#0891b2':'#0891B2','#059669':V.green,'#d97706':'#D97706','#dc2626':'#EF4444'}
const acc=c=>ACCENT_MAP[c]||V.blue

function renderSection(s, i, color) {
  const a = acc(color)
  switch(s.type) {
    case 'h2': return <h2 key={i} style={{fontFamily:V.serif,fontSize:'clamp(22px,3vw,32px)',fontWeight:400,color:V.ink,lineHeight:1.15,letterSpacing:'-.02em',marginTop:48,marginBottom:16}}>{s.text}</h2>
    case 'h3': return <h3 key={i} style={{fontFamily:V.serif,fontSize:22,fontWeight:400,color:V.ink,lineHeight:1.2,marginTop:32,marginBottom:12}}>{s.text}</h3>
    case 'p':  return <p key={i} style={{fontSize:16,color:V.ink2,lineHeight:1.8,marginBottom:20}}>{s.text}</p>
    case 'ul': return <ul key={i} style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10,marginBottom:24,paddingLeft:0}}>{s.items.map((it,ii)=><li key={ii} style={{display:'flex',alignItems:'flex-start',gap:12,fontSize:15,color:V.ink2,lineHeight:1.7}}><span style={{color:a,fontWeight:700,flexShrink:0,marginTop:2}}>✓</span>{it}</li>)}</ul>
    case 'ol': return <ol key={i} style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:10,marginBottom:24}}>{s.items.map((it,ii)=><li key={ii} style={{fontSize:15,color:V.ink2,lineHeight:1.7,paddingLeft:8}}>{it}</li>)}</ol>
    case 'callout': return <div key={i} style={{background:V.bg2,border:`1px solid ${V.rule}`,borderLeft:`4px solid ${a}`,borderRadius:'0 8px 8px 0',padding:'20px 24px',margin:'28px 0'}}>
      {s.label&&<div style={{fontSize:11,fontWeight:700,color:a,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:8}}>{s.label}</div>}
      <p style={{fontSize:15,color:V.ink2,lineHeight:1.7,margin:0}}>{s.text}</p>
    </div>
    case 'cta': return <div key={i} style={{background:V.ink,borderRadius:12,padding:'36px',margin:'40px 0',textAlign:'center'}}>
      <h3 style={{fontFamily:V.serif,fontSize:'clamp(20px,2.5vw,28px)',fontWeight:400,color:'white',marginBottom:12,letterSpacing:'-.02em'}}>{s.heading}</h3>
      <p style={{fontSize:14,color:'rgba(255,255,255,.55)',marginBottom:20,lineHeight:1.65}}>{s.text}</p>
      <Link to="/contact" className="btn-white" style={{fontSize:14,padding:'12px 24px'}}>{s.btnText} →</Link>
    </div>
    default: return null
  }
}

export default function BlogPost({ post }) {
  useSEO({
    title:`${post.title} | AIB2B Automation Blog`,
    description:post.excerpt,
    canonical:`https://aib2bautomation.com/blog/${post.slug}`,
    og:{ title:post.title, description:post.excerpt }
  })
  const a = acc(post.color)
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      {/* HERO */}
      <section style={{padding:'72px 40px 56px',borderBottom:`1px solid ${V.rule}`,background:V.bg}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/blog">Blog</Link><span>›</span><span>{post.cat}</span></nav>
          <div style={{height:1,background:V.rule,margin:'32px 0 40px'}}/>
          <div style={{display:'inline-block',background:V.blueLight,color:V.blue,fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'5px 12px',borderRadius:100,marginBottom:20}}>{post.cat}</div>
          <h1 style={{fontFamily:V.serif,fontSize:'clamp(34px,5vw,58px)',fontWeight:400,lineHeight:1.0,letterSpacing:'-.03em',color:V.ink,marginBottom:24}}>{post.title}</h1>
          <p style={{fontSize:17,color:V.ink3,lineHeight:1.65,marginBottom:28}}>{post.excerpt}</p>
          <div style={{display:'flex',gap:20,alignItems:'center',paddingTop:24,borderTop:`1px solid ${V.rule}`}}>
            <div style={{width:36,height:36,borderRadius:'50%',background:a+'20',border:`1px solid ${a}55`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:700,color:a}}>AIB</div>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:V.ink}}>AIB2B Automation</div>
              <div style={{fontSize:12,color:V.ink3}}>{post.date} · {post.read} read</div>
            </div>
            {post.tags&&<div style={{marginLeft:'auto',display:'flex',gap:6,flexWrap:'wrap'}}>
              {post.tags.map(t=><span key={t} style={{padding:'3px 10px',background:V.bg2,border:`1px solid ${V.rule}`,borderRadius:100,fontSize:11,fontWeight:600,color:V.ink3}}>{t}</span>)}
            </div>}
          </div>
        </div>
      </section>
      {/* BODY */}
      <section style={{padding:'56px 40px 80px'}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <article>{(post.sections||[]).map((s,i)=>renderSection(s,i,post.color))}</article>
          <div style={{marginTop:64,paddingTop:32,borderTop:`1px solid ${V.rule}`,display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
            <Link to="/blog" style={{fontSize:14,color:V.blue,fontWeight:600,textDecoration:'none'}}>← Back to all articles</Link>
            <Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'10px 20px'}}>Work with us →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
