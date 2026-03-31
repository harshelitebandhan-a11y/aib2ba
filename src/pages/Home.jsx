import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

const V = { ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',blueBorder:'#C7D4FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',green:'#16A34A',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif" }

// Workflow nodes & steps
const WF_NODES = [
  {id:'trigger', x:36,  y:162,w:160,label:'TRIGGER',      sub:'CRM new lead',    accent:'#1B4FD8'},
  {id:'enrich',  x:314, y:70, w:160,label:'ENRICH',       sub:'AI firmographics',accent:'#7C3AED'},
  {id:'score',   x:314, y:162,w:160,label:'SCORE',        sub:'Predictive fit',  accent:'#0891B2'},
  {id:'segment', x:314, y:257,w:160,label:'SEGMENT',      sub:'ICP classifier',  accent:'#D97706'},
  {id:'if',      x:594, y:162,w:160,label:'IF / ELSE',    sub:'Score ≥ 75',      accent:'#16A34A'},
  {id:'hot',     x:874, y:90, w:180,label:'HOT SEQUENCE', sub:'5-step cadence',  accent:'#1B4FD8'},
  {id:'nurture', x:874, y:242,w:180,label:'NURTURE FLOW', sub:'Long-play drip',  accent:'#7C3AED'},
]
const WF_STEPS = [
  {path:'M196,130 C255,130 255,98 314,98',  nodeId:'enrich',  color:'#1B4FD8'},
  {path:'M196,190 L314,190',                 nodeId:'score',   color:'#0891B2'},
  {path:'M196,190 C255,190 255,285 314,285', nodeId:'segment', color:'#D97706'},
  {path:'M474,98 C535,98 535,190 594,190',   nodeId:'if',      color:'#1B4FD8'},
  {path:'M474,190 L594,190',                 nodeId:'if',      color:'#0891B2'},
  {path:'M754,190 C815,190 815,118 874,118', nodeId:'hot',     color:'#1B4FD8'},
  {path:'M754,190 C815,190 815,270 874,270', nodeId:'nurture', color:'#7C3AED'},
]
const IDLE_EDGES = ['M196,130 C255,130 255,98 314,98','M196,190 L314,190','M196,190 C255,190 255,285 314,285','M474,98 C535,98 535,190 594,190','M474,190 L594,190','M474,285 C535,285 535,190 594,190','M754,190 C815,190 815,118 874,118','M754,190 C815,190 815,270 874,270']

function WorkflowCanvas() {
  const svgRef = useRef(null)
  const dotRef = useRef(null)
  const [litNodes, setLitNodes] = useState(new Set(['trigger']))
  const [litEdges, setLitEdges] = useState([])

  useEffect(() => {
    let si = 0, cancelled = false
    function animDot(pathD, color, cb) {
      const svg = svgRef.current, dot = dotRef.current
      if (!svg || !dot || cancelled) return cb()
      const tmp = document.createElementNS('http://www.w3.org/2000/svg','path')
      tmp.setAttribute('d',pathD); tmp.style.display='none'; svg.appendChild(tmp)
      const len = tmp.getTotalLength(); svg.removeChild(tmp)
      const dur = Math.max(Math.min(len*2.2,900),350)
      dot.setAttribute('fill',color); dot.style.opacity='1'
      const ap = document.createElementNS('http://www.w3.org/2000/svg','path')
      ap.setAttribute('d',pathD); ap.style.display='none'; svg.appendChild(ap)
      let start=null
      function frame(ts) {
        if(cancelled){dot.style.opacity='0';try{svg.removeChild(ap)}catch(e){}return}
        if(!start)start=ts
        const t=Math.min((ts-start)/dur,1),ease=t<.5?2*t*t:-1+(4-2*t)*t
        try{const pt=ap.getPointAtLength(ease*len);dot.setAttribute('cx',pt.x);dot.setAttribute('cy',pt.y)}catch(e){}
        if(t<1)requestAnimationFrame(frame)
        else{dot.style.opacity='0';try{svg.removeChild(ap)}catch(e){}cb()}
      }
      requestAnimationFrame(frame)
    }
    function run() {
      if(cancelled)return
      if(si>=WF_STEPS.length){setTimeout(()=>{if(cancelled)return;si=0;setLitNodes(new Set(['trigger']));setLitEdges([]);setTimeout(run,600)},2000);return}
      const step=WF_STEPS[si]
      animDot(step.path,step.color,()=>{
        if(cancelled)return
        setLitEdges(e=>[...e,{path:step.path,color:step.color}])
        setLitNodes(n=>new Set([...n,step.nodeId]))
        si++;setTimeout(run,250)
      })
    }
    const t=setTimeout(run,1000)
    return()=>{cancelled=true;clearTimeout(t)}
  },[])

  return (
    <div style={{border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden',boxShadow:'0 1px 3px rgba(0,0,0,.04),0 8px 32px rgba(0,0,0,.06)'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'11px 16px',borderBottom:`1px solid ${V.rule}`,background:V.bg2}}>
        {['#EF4444','#F59E0B','#22C55E'].map(c=><span key={c} style={{width:10,height:10,borderRadius:'50%',background:c,display:'inline-block'}}/>)}
        <span style={{flex:1,textAlign:'center',fontSize:12,color:V.ink4,letterSpacing:'.05em',fontFamily:V.sans}}>AIB2B — Workflow Editor</span>
        <span style={{fontSize:11,color:V.green,fontWeight:600,display:'flex',alignItems:'center',gap:5}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:V.green,animation:'blink 1.2s infinite'}}/>LIVE
        </span>
      </div>
      <svg ref={svgRef} width="100%" viewBox="0 0 1100 380" aria-label="Live workflow automation diagram">
        <defs>
          <pattern id="wfg" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx=".8" cy=".8" r=".8" fill="#D8D8D8"/></pattern>
          <marker id="ai" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="#DCDCDC" strokeWidth="1.5" strokeLinecap="round"/></marker>
          <marker id="al" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="#1B4FD8" strokeWidth="1.5" strokeLinecap="round"/></marker>
        </defs>
        <rect width="1100" height="380" fill={V.bg2}/>
        <rect width="1100" height="380" fill="url(#wfg)" opacity=".7"/>
        {IDLE_EDGES.map((d,i)=><path key={i} d={d} fill="none" stroke="#DCDCDC" strokeWidth="1" strokeDasharray="5 4" markerEnd="url(#ai)"/>)}
        {litEdges.map((e,i)=><path key={i} d={e.path} fill="none" stroke={e.color} strokeWidth="1.5" markerEnd="url(#al)"/>)}
        <text x="825" y="148" textAnchor="middle" fontSize="11" fill={V.ink4} fontFamily={V.sans} fontWeight="600">YES</text>
        <text x="825" y="248" textAnchor="middle" fontSize="11" fill={V.ink4} fontFamily={V.sans} fontWeight="600">NO</text>
        {WF_NODES.map(n=>{
          const lit=litNodes.has(n.id)
          return <g key={n.id}>
            <rect x={n.x} y={n.y} width={n.w} height={56} rx={8} fill={lit?'#F0F4FF':'white'} stroke={lit?n.accent:V.rule} strokeWidth={lit?1.5:1} style={{transition:'all .3s'}}/>
            <rect x={n.x} y={n.y} width={4} height={56} rx={2} fill={n.accent}/>
            <text x={n.x+16} y={n.y+22} fontSize="11" fontWeight="700" fill={V.ink2} fontFamily={V.sans} letterSpacing=".04em">{n.label}</text>
            <text x={n.x+16} y={n.y+40} fontSize="12.5" fill={V.ink3} fontFamily={V.sans}>{n.sub}</text>
          </g>
        })}
        <circle ref={dotRef} r="5" fill={V.blue} opacity="0"/>
      </svg>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:`1px solid ${V.rule}`}}>
        {[{l:'Leads enriched',v:'1,284',c:'#1B4FD8'},{l:'Active sequences',v:'47',c:'#7C3AED'},{l:'Meetings booked',v:'23',c:V.green},{l:'Pipeline added',v:'$412K',c:'#D97706'}].map((m,i)=>(
          <div key={i} style={{padding:'16px 22px',borderRight:i<3?`1px solid ${V.rule}`:'none'}}>
            <div style={{fontSize:10.5,color:V.ink4,textTransform:'uppercase',letterSpacing:'.08em',marginBottom:5}}>{m.l}</div>
            <div style={{fontSize:20,fontWeight:700,color:m.c,letterSpacing:'-.02em',fontVariantNumeric:'tabular-nums'}}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const LOGOS = ['TechFlow','NovaSaaS','CloudVault','Nexify','DataBridge','ProScale','Elevate','PipelineAI']
const FEATURES = [
  {num:'01',tag:'Enrichment', title:'Intent-aware lead profiles',  body:'Raw CSV in, fully enriched ICP profiles out. Firmographics, technographics, buying signals, and a predictive fit score — all attached before your reps ever touch a record.',accent:'#1B4FD8',accentLight:'#EEF2FF'},
  {num:'02',tag:'Automation', title:'Multi-step workflow engine',  body:"Build nurture sequences that run across email, LinkedIn, and phone without manual intervention. Every step triggers on real behaviour, not arbitrary time delays.",accent:'#7C3AED',accentLight:'#F5F3FF'},
  {num:'03',tag:'Intelligence',title:'Predictive deal scoring',   body:'Our model ranks every lead by how likely they are to close, based on your own historical data. Reps spend time on accounts that convert — not ones that look good on paper.',accent:'#0891B2',accentLight:'#ECFEFF'},
  {num:'04',tag:'Integration',title:'Sync with your whole stack', body:'Bidirectional sync with Salesforce, HubSpot, Pipedrive, and 40+ other platforms. Enriched fields, scores, and sequence events land in your CRM automatically.',accent:V.green,accentLight:'#F0FDF4'},
  {num:'05',tag:'Campaigns',  title:'Launch and optimise at scale',body:'End-to-end campaign management with real-time attribution. The AI surfaces what to do next for each segment — you approve, it executes at scale.',accent:'#D97706',accentLight:'#FFFBEB'},
  {num:'06',tag:'Security',   title:'SOC 2 · GDPR · Zero trust',  body:'Enterprise-grade security is not an add-on here — it ships with every plan. End-to-end encryption, role-based access, full audit logging, and data residency controls included.',accent:'#EF4444',accentLight:'#FEF2F2'},
]
const STEPS = [
  {num:'01',title:'Discovery and strategy', body:'We map your current funnel, surface the gaps, and co-build an automation roadmap tied to your actual revenue targets — not a generic best-practices deck.'},
  {num:'02',title:'Connect and configure',  body:'Our team wires your CRM, enrichment sources, and outreach channels. Most pipelines are live within 48 hours of signing — not months of professional services work.'},
  {num:'03',title:'Launch campaigns',       body:'Multi-channel sequences go live. The AI continuously refines message copy, timing, and audience targeting based on what is actually working, not assumptions.'},
  {num:'04',title:'Scale what works',       body:'Real-time analytics surface your winners fast. One click and you can expand a winning campaign across your entire total addressable market. Compounding returns every month.'},
]
const TESTIMONIALS = [
  {q:'We went from 10 qualified meetings a month to 47 in just 60 days. I honestly did not think the enrichment would be that clean — it changed how we run outbound entirely.',metric:'4.7× more meetings',name:'Sarah Mitchell',role:'VP Revenue · CloudVault',ini:'SM'},
  {q:'We stopped burning hours on leads that were never going to buy the week we went live. Our close rate jumped 35% in Q1. The ROI math is almost embarrassingly simple.',metric:'35% higher close rate',name:'James Park',role:'Head of Growth · Nexify',ini:'JP'},
  {q:"Three other automation tools before this one and none came close. We hit 9× ROI by month three. The ROI calculator on the website wasn't lying — it was conservative.",metric:'9× ROI in 90 days',name:'Priya Sharma',role:'CEO · DataBridge',ini:'PS'},
]
const COMPARE = [
  ['Multi-channel automation',true,false],['AI lead scoring',true,false],
  ['Real-time enrichment',true,'⚠ Partial'],['40+ CRM integrations',true,false],
  ['Dedicated success manager',true,false],['48-hour setup',true,false],
  ['No long-term contracts',true,false],
]

export default function Home() {
  useSEO({
    title:'AIB2B Automation — B2B Lead Enrichment & Marketing Automation',
    description:'AI-powered lead enrichment, marketing automation, and campaign management for B2B revenue teams. Fill your pipeline and close more deals. Start free for 14 days.',
    canonical:'https://aib2bautomation.com/',
  })

  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes dotPulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.7);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .au{animation:fadeUp .7s cubic-bezier(.22,1,.36,1) both}
        .d1{animation-delay:.08s}.d2{animation-delay:.2s}.d3{animation-delay:.34s}.d4{animation-delay:.48s}
        .feat-card{transition:background .2s;position:relative;overflow:hidden;cursor:default}
        .feat-card::before{content:'';position:absolute;top:0;left:0;width:3px;height:0;transition:height .3s cubic-bezier(.22,1,.36,1)}
        .feat-card:hover{background:${V.bg2}!important}
        .feat-card:hover::before{height:100%}
        .feat-card:hover .feat-arrow{opacity:1!important}
        .tcard{transition:box-shadow .2s,transform .2s;position:relative;overflow:hidden}
        .tcard:hover{box-shadow:0 8px 40px rgba(0,0,0,.08)!important;transform:translateY(-2px)}
        .tcard-bar{position:absolute;top:0;left:0;right:0;height:3px;background:${V.blue};width:0;transition:width .4s cubic-bezier(.22,1,.36,1)}
        .tcard:hover .tcard-bar{width:100%}
        .compare-row{display:grid;grid-template-columns:1fr 140px 140px;border-bottom:1px solid ${V.rule};transition:background .15s}
        .compare-row:last-child{border-bottom:none}
        .compare-row:hover{background:${V.bg2}}
        @media(max-width:900px){
          .hero-grid,.feats-grid,.tgrid,.how-grid{grid-template-columns:1fr!important}
          .stat-grid{grid-template-columns:repeat(2,1fr)!important}
          .hero-right-col{border-top:1px solid ${V.rule};padding-top:24px!important;border-left:none!important;padding-left:0!important}
        }
      `}</style>

      {/* HERO */}
      <section style={{padding:'72px 40px 0',maxWidth:1280,margin:'0 auto'}}>
        <div className="au" style={{display:'flex',alignItems:'center',gap:10,marginBottom:36}}>
          <div style={{width:8,height:8,background:V.green,borderRadius:'50%',animation:'dotPulse 2s ease-in-out infinite'}}/>
          <span style={{fontSize:12.5,fontWeight:600,color:V.ink3,letterSpacing:'.06em',textTransform:'uppercase'}}>Trusted by 500+ B2B revenue teams</span>
        </div>
        <div style={{width:'100%',height:1,background:V.rule,marginBottom:48}}/>
        <div className="hero-grid" style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:64,alignItems:'start'}}>
          <h1 className="au d1" style={{fontFamily:V.serif,fontSize:'clamp(52px,6vw,88px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em',color:V.ink}}>
            Fill your<br/>pipeline.<br/>
            <em style={{fontStyle:'italic',color:V.blue}}>Close more</em><br/>deals.
          </h1>
          <div className="au d2 hero-right-col" style={{paddingTop:12,borderTop:`1px solid ${V.rule}`}}>
            <p style={{fontSize:16,color:V.ink2,lineHeight:1.65,marginBottom:28}}>
              AI-powered lead enrichment, marketing automation, and campaign management — one platform for B2B teams who cannot afford to waste a single rep hour on the wrong prospect.
            </p>
            <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:28}}>
              <Link to="/contact" className="btn-blue">Start 14-day trial →</Link>
              <Link to="/case-studies" className="btn-outline">See customer results</Link>
            </div>
            {['No credit card required','Live in 48 hours','SOC 2 certified'].map((t,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:8,fontSize:12.5,color:V.ink3,padding:'8px 0',borderBottom:`1px solid ${V.rule}`,borderTop:i===0?`1px solid ${V.rule}`:'none'}}>
                <span style={{color:V.blue,fontWeight:700}}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW CANVAS */}
      <div className="au d3" style={{maxWidth:1280,margin:'56px auto 0',padding:'0 40px'}}>
        <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:10}}>
          <span style={{flex:1,height:1,background:V.rule,display:'block'}}/>Live automation workflow<span style={{flex:1,height:1,background:V.rule,display:'block'}}/>
        </div>
        <WorkflowCanvas/>
      </div>

      {/* LOGOS */}
      <div style={{overflow:'hidden',borderTop:`1px solid ${V.rule}`,borderBottom:`1px solid ${V.rule}`,marginTop:72,display:'flex',alignItems:'center'}}>
        <div style={{flexShrink:0,padding:'18px 28px',borderRight:`1px solid ${V.rule}`,fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.08em',textTransform:'uppercase',whiteSpace:'nowrap'}}>Trusted by</div>
        <div style={{flex:1,overflow:'hidden'}}>
          <div style={{display:'flex',gap:0,width:'max-content',animation:'marquee 28s linear infinite'}}>
            {[...LOGOS,...LOGOS].map((l,i)=><div key={i} style={{padding:'18px 28px',borderRight:`1px solid ${V.rule}`,fontSize:13,fontWeight:600,color:V.ink4,whiteSpace:'nowrap'}}>{l}</div>)}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{borderBottom:`1px solid ${V.rule}`}}>
        <div className="stat-grid" style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
          {[{n:'500+',t:'B2B companies',s:'trust our platform globally'},{n:'40%',t:'More qualified leads',s:'average increase in pipeline'},{n:'$50M+',t:'Revenue generated',s:'across our client base'},{n:'48h',t:'To go live',s:'from signup to first pipeline'}].map((s,i)=>(
            <div key={i} style={{padding:'52px 40px',borderRight:i<3?`1px solid ${V.rule}`:'none'}}>
              <div style={{fontFamily:V.serif,fontSize:64,fontWeight:400,color:V.ink,lineHeight:1,marginBottom:10,letterSpacing:'-.03em'}}>{s.n}</div>
              <div style={{fontSize:14,fontWeight:600,color:V.ink,marginBottom:5}}>{s.t}</div>
              <div style={{fontSize:13,color:V.ink3}}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section style={{padding:'96px 40px',maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:40,borderBottom:`1px solid ${V.rule}`,paddingBottom:32,marginBottom:40}}>
          <div>
            <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>What we do</div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(32px,4vw,50px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em',color:V.ink}}>
              Everything your revenue team needs.<br/><em style={{fontStyle:'italic',color:V.blue}}>All in one place.</em>
            </h2>
          </div>
          <p style={{fontSize:14,color:V.ink3,maxWidth:260,textAlign:'right',lineHeight:1.55}}>One platform. Six capabilities. Zero switching between tools.</p>
        </div>
        <div className="feats-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden'}}>
          {FEATURES.map((f,i)=>(
            <div key={i} className="feat-card" style={{padding:'32px 28px',borderRight:i%3<2?`1px solid ${V.rule}`:'none',borderBottom:i<3?`1px solid ${V.rule}`:'none',background:V.bg}}>
              <style>{`.feat-card:nth-child(${i+1})::before{background:${f.accent}}`}</style>
              <div style={{fontSize:11,fontWeight:700,color:V.ink4,letterSpacing:'.1em',marginBottom:20}}>{f.num} — {f.tag}</div>
              <div style={{fontFamily:V.serif,fontSize:22,fontWeight:400,color:V.ink,marginBottom:12,lineHeight:1.2}}>{f.title}</div>
              <div style={{fontSize:13.5,color:V.ink3,lineHeight:1.65}}>{f.body}</div>
              <div className="feat-arrow" style={{marginTop:20,fontSize:13,color:f.accent,fontWeight:600,opacity:0,transition:'opacity .2s'}}>
                <Link to="/services" style={{color:f.accent,textDecoration:'none'}}>Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{background:V.bg2,borderTop:`1px solid ${V.rule}`,borderBottom:`1px solid ${V.rule}`}}>
        <div className="how-grid" style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'360px 1fr'}}>
          <div style={{padding:'72px 48px',borderRight:`1px solid ${V.rule}`}}>
            <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:18}}>How it works</div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,lineHeight:1.1,letterSpacing:'-.03em',color:V.ink,marginBottom:20}}>
              From signup to pipeline <em style={{fontStyle:'italic',color:V.blue}}>in 48 hours.</em>
            </h2>
            <p style={{fontSize:14,color:V.ink3,lineHeight:1.7,marginBottom:28}}>No lengthy onboarding. No professional services retainer. Our process gets you live and generating pipeline faster than any other platform.</p>
            <Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'12px 22px'}}>Start your trial →</Link>
          </div>
          <div>
            {STEPS.map((s,i)=>(
              <div key={i} style={{display:'grid',gridTemplateColumns:'64px 1fr',borderBottom:i<STEPS.length-1?`1px solid ${V.rule}`:'none'}}>
                <div style={{fontFamily:V.serif,fontSize:36,fontWeight:400,color:V.ink4,display:'flex',alignItems:'center',justifyContent:'center',borderRight:`1px solid ${V.rule}`,padding:'36px 0'}}>{s.num}</div>
                <div style={{padding:'36px 40px'}}>
                  <div style={{fontSize:15,fontWeight:700,color:V.ink,marginBottom:8}}>{s.title}</div>
                  <div style={{fontSize:13.5,color:V.ink3,lineHeight:1.65}}>{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section style={{padding:'80px 40px'}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Why choose us</div>
          <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,letterSpacing:'-.03em',color:V.ink,marginBottom:48}}>
            We do what <em style={{fontStyle:'italic',color:V.blue}}>others cannot.</em>
          </h2>
          <div style={{border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 140px 140px',background:V.bg2,borderBottom:`1px solid ${V.rule}`}}>
              <div style={{padding:'14px 24px',fontSize:12,fontWeight:700,color:V.ink3,letterSpacing:'.06em',textTransform:'uppercase'}}>Feature</div>
              <div style={{padding:'14px 24px',fontSize:12,fontWeight:700,color:V.blue,background:V.blueLight,textAlign:'center'}}>AIB2B</div>
              <div style={{padding:'14px 24px',fontSize:12,fontWeight:700,color:V.ink3,letterSpacing:'.06em',textTransform:'uppercase',textAlign:'center'}}>Others</div>
            </div>
            {COMPARE.map(([feat,us,them],i)=>(
              <div key={i} className="compare-row">
                <div style={{padding:'15px 24px',fontSize:14,color:V.ink2,display:'flex',alignItems:'center'}}>{feat}</div>
                <div style={{padding:'15px 24px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {us===true?<span style={{color:V.green,fontSize:18,fontWeight:700}}>✓</span>:us}
                </div>
                <div style={{padding:'15px 24px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {them===false?<span style={{color:'#EF4444',fontSize:18,fontWeight:700}}>✕</span>:<span style={{color:'#D97706',fontSize:12,fontWeight:600}}>{them}</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:28}}><Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'12px 22px'}}>See the difference yourself →</Link></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{background:V.bg2,borderTop:`1px solid ${V.rule}`,borderBottom:`1px solid ${V.rule}`,padding:'80px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{fontSize:11,fontWeight:600,color:V.ink4,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>Customer results</div>
          <h2 style={{fontFamily:V.serif,fontSize:'clamp(28px,3.5vw,42px)',fontWeight:400,letterSpacing:'-.03em',color:V.ink,marginBottom:48}}>
            Real companies.<br/><em style={{fontStyle:'italic',color:V.blue}}>Real numbers.</em>
          </h2>
          <div className="tgrid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {TESTIMONIALS.map((t,i)=>(
              <div key={i} className="tcard" style={{background:'white',border:`1px solid ${V.rule}`,borderRadius:12,padding:'28px',cursor:'default'}}>
                <div className="tcard-bar"/>
                <div style={{fontFamily:V.serif,fontSize:56,lineHeight:.8,color:V.blue,marginBottom:16}}>"</div>
                <p style={{fontSize:14,color:V.ink2,lineHeight:1.75,marginBottom:20,fontStyle:'italic'}}>{t.q}</p>
                <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'#F0FDF4',color:V.green,border:'1px solid #BBF7D0',borderRadius:6,padding:'4px 12px',fontSize:12,fontWeight:700,marginBottom:20}}>↑ {t.metric}</div>
                <div style={{display:'flex',alignItems:'center',gap:12,paddingTop:18,borderTop:`1px solid ${V.rule}`}}>
                  <div style={{width:36,height:36,borderRadius:'50%',border:`1px solid ${V.rule}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700,color:V.blue,background:V.blueLight,flexShrink:0}}>{t.ini}</div>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:V.ink}}>{t.name}</div>
                    <div style={{fontSize:12,color:V.ink3,marginTop:2}}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{padding:'0 40px',marginBottom:72,marginTop:72}}>
        <div style={{maxWidth:1280,margin:'0 auto',background:V.ink,borderRadius:16,padding:'80px 72px',display:'grid',gridTemplateColumns:'1fr auto',gap:64,alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:V.serif,fontSize:'clamp(32px,4vw,56px)',fontWeight:400,color:'white',lineHeight:1.05,letterSpacing:'-.03em',marginBottom:16}}>
              Ready to build a<br/><em style={{fontStyle:'italic',color:'#93B4FF'}}>predictable pipeline?</em>
            </h2>
            <p style={{fontSize:15,color:'rgba(255,255,255,.5)',lineHeight:1.65}}>Join 500+ B2B companies scaling with AIB2B Automation. Start free — no credit card, no lock-in, no excuses.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,alignItems:'flex-end',flexShrink:0}}>
            <Link to="/contact" className="btn-white">Start free trial →</Link>
            <Link to="/pricing" style={{color:'rgba(255,255,255,.45)',fontSize:14,textDecoration:'none'}}>View pricing first</Link>
            <div style={{fontSize:12,color:'rgba(255,255,255,.28)',textAlign:'right'}}>14-day trial · No card · Live in 48h</div>
          </div>
        </div>
      </section>
    </div>
  )
}
