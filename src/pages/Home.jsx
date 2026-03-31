import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'

// ── WORKFLOW ──────────────────────────────────────────────────────────────────
const WF_NODES=[
  {id:'trigger',x:36, y:162,w:160,label:'TRIGGER',     sub:'CRM new lead',    accent:'#1B4FD8'},
  {id:'enrich', x:314,y:70, w:160,label:'ENRICH',      sub:'AI firmographics',accent:'#7C3AED'},
  {id:'score',  x:314,y:162,w:160,label:'SCORE',       sub:'Predictive fit',  accent:'#0891B2'},
  {id:'segment',x:314,y:257,w:160,label:'SEGMENT',     sub:'ICP classifier',  accent:'#D97706'},
  {id:'if',     x:594,y:162,w:160,label:'IF / ELSE',   sub:'Score ≥ 75',      accent:'#16A34A'},
  {id:'hot',    x:874,y:90, w:180,label:'HOT SEQUENCE',sub:'5-step cadence',  accent:'#1B4FD8'},
  {id:'nurture',x:874,y:242,w:180,label:'NURTURE FLOW',sub:'Long-play drip',  accent:'#7C3AED'},
]
const WF_STEPS=[
  {path:'M196,130 C255,130 255,98 314,98',  nodeId:'enrich', color:'#1B4FD8'},
  {path:'M196,190 L314,190',                nodeId:'score',  color:'#0891B2'},
  {path:'M196,190 C255,190 255,285 314,285',nodeId:'segment',color:'#D97706'},
  {path:'M474,98 C535,98 535,190 594,190',  nodeId:'if',     color:'#1B4FD8'},
  {path:'M474,190 L594,190',                nodeId:'if',     color:'#0891B2'},
  {path:'M754,190 C815,190 815,118 874,118',nodeId:'hot',    color:'#1B4FD8'},
  {path:'M754,190 C815,190 815,270 874,270',nodeId:'nurture',color:'#7C3AED'},
]
const IDLE=['M196,130 C255,130 255,98 314,98','M196,190 L314,190','M196,190 C255,190 255,285 314,285','M474,98 C535,98 535,190 594,190','M474,190 L594,190','M474,285 C535,285 535,190 594,190','M754,190 C815,190 815,118 874,118','M754,190 C815,190 815,270 874,270']

function WorkflowCanvas() {
  const svgRef=useRef(null), dotRef=useRef(null)
  const [litNodes,setLitNodes]=useState(new Set(['trigger']))
  const [litEdges,setLitEdges]=useState([])
  useEffect(()=>{
    let si=0,cancelled=false
    function anim(d,color,cb){
      const svg=svgRef.current,dot=dotRef.current
      if(!svg||!dot||cancelled)return cb()
      const tmp=document.createElementNS('http://www.w3.org/2000/svg','path')
      tmp.setAttribute('d',d);tmp.style.display='none';svg.appendChild(tmp)
      const len=tmp.getTotalLength();svg.removeChild(tmp)
      dot.setAttribute('fill',color);dot.style.opacity='1'
      const ap=document.createElementNS('http://www.w3.org/2000/svg','path')
      ap.setAttribute('d',d);ap.style.display='none';svg.appendChild(ap)
      let s=null
      const dur=Math.max(Math.min(len*2.2,900),350)
      function f(ts){
        if(cancelled){dot.style.opacity='0';try{svg.removeChild(ap)}catch(e){}return}
        if(!s)s=ts;const t=Math.min((ts-s)/dur,1),e=t<.5?2*t*t:-1+(4-2*t)*t
        try{const p=ap.getPointAtLength(e*len);dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y)}catch(e){}
        t<1?requestAnimationFrame(f):(dot.style.opacity='0',svg.removeChild(ap),cb())
      }
      requestAnimationFrame(f)
    }
    function run(){
      if(cancelled)return
      if(si>=WF_STEPS.length){setTimeout(()=>{if(cancelled)return;si=0;setLitNodes(new Set(['trigger']));setLitEdges([]);setTimeout(run,600)},2000);return}
      const step=WF_STEPS[si]
      anim(step.path,step.color,()=>{
        if(cancelled)return
        setLitEdges(e=>[...e,{path:step.path,color:step.color}])
        setLitNodes(n=>new Set([...n,step.nodeId]))
        si++;setTimeout(run,250)
      })
    }
    const t=setTimeout(run,1200)
    return()=>{cancelled=true;clearTimeout(t)}
  },[])
  return (
    <div className="wf-wrap">
      <div className="wf-bar">
        {['#EF4444','#F59E0B','#22C55E'].map(c=><span key={c} style={{width:10,height:10,borderRadius:'50%',background:c,display:'inline-block'}}/>)}
        <span style={{flex:1,textAlign:'center',fontSize:12,color:'#B8B8B8',letterSpacing:'.05em'}}>AIB2B — Workflow Editor</span>
        <span style={{fontSize:11,color:'#16A34A',fontWeight:600,display:'flex',alignItems:'center',gap:5}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:'#16A34A',animation:'blink 1.2s infinite'}}/>LIVE
        </span>
      </div>
      <div style={{overflowX:'auto',WebkitOverflowScrolling:'touch'}}>
        <svg ref={svgRef} style={{display:'block',minWidth:600}} width="100%" viewBox="0 0 1100 380" aria-label="Live workflow automation">
          <defs>
            <pattern id="wfg" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx=".8" cy=".8" r=".8" fill="#D8D8D8"/></pattern>
            <marker id="ai" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="#DCDCDC" strokeWidth="1.5" strokeLinecap="round"/></marker>
            <marker id="al" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="#1B4FD8" strokeWidth="1.5" strokeLinecap="round"/></marker>
          </defs>
          <rect width="1100" height="380" fill="#F7F7F5"/>
          <rect width="1100" height="380" fill="url(#wfg)" opacity=".7"/>
          {IDLE.map((d,i)=><path key={i} d={d} fill="none" stroke="#DCDCDC" strokeWidth="1" strokeDasharray="5 4" markerEnd="url(#ai)"/>)}
          {litEdges.map((e,i)=><path key={i} d={e.path} fill="none" stroke={e.color} strokeWidth="1.5" markerEnd="url(#al)"/>)}
          <text x="825" y="148" textAnchor="middle" fontSize="11" fill="#B8B8B8" fontFamily="DM Sans,sans-serif" fontWeight="600">YES</text>
          <text x="825" y="248" textAnchor="middle" fontSize="11" fill="#B8B8B8" fontFamily="DM Sans,sans-serif" fontWeight="600">NO</text>
          {WF_NODES.map(n=>{
            const lit=litNodes.has(n.id)
            return <g key={n.id}>
              <rect x={n.x} y={n.y} width={n.w} height={56} rx={8} fill={lit?'#F0F4FF':'white'} stroke={lit?n.accent:'#E2E2E2'} strokeWidth={lit?1.5:1} style={{transition:'all .3s'}}/>
              <rect x={n.x} y={n.y} width={4} height={56} rx={2} fill={n.accent}/>
              <text x={n.x+16} y={n.y+22} fontSize="11" fontWeight="700" fill="#3A3A3A" fontFamily="DM Sans,sans-serif" letterSpacing=".04em">{n.label}</text>
              <text x={n.x+16} y={n.y+40} fontSize="12" fill="#7A7A7A" fontFamily="DM Sans,sans-serif">{n.sub}</text>
            </g>
          })}
          <circle ref={dotRef} r="5" fill="#1B4FD8" opacity="0" style={{filter:'drop-shadow(0 0 4px #1B4FD8)'}}/>
        </svg>
      </div>
      <div className="wf-metrics">
        {[{l:'Leads enriched',v:'1,284',c:'#1B4FD8'},{l:'Active sequences',v:'47',c:'#7C3AED'},{l:'Meetings booked',v:'23',c:'#16A34A'},{l:'Pipeline added',v:'$412K',c:'#D97706'}].map((m,i)=>(
          <div key={i} className="wf-metric">
            <div style={{fontSize:10,color:'#B8B8B8',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:4}}>{m.l}</div>
            <div style={{fontSize:20,fontWeight:700,color:m.c,letterSpacing:'-.02em'}}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── DATA ──────────────────────────────────────────────────────────────────────
const LOGOS=['TechFlow','NovaSaaS','CloudVault','Nexify','DataBridge','ProScale','Elevate','PipelineAI']
const FEATURES=[
  {num:'01',tag:'Enrichment', title:'Intent-aware lead profiles',  body:'Raw CSV in, fully enriched ICP profiles out. Firmographics, technographics, buying signals, and a predictive fit score before your reps touch a single record.',accent:'#1B4FD8'},
  {num:'02',tag:'Automation', title:'Multi-step workflow engine',  body:"Build nurture sequences across email, LinkedIn, and phone without manual intervention. Every step triggers on real buyer behaviour — not arbitrary time delays.",accent:'#7C3AED'},
  {num:'03',tag:'Intelligence',title:'Predictive deal scoring',   body:'Our model ranks every lead by close likelihood based on your own historical data. Reps spend time on accounts that actually convert.',accent:'#0891B2'},
  {num:'04',tag:'Integration',title:'Sync with your whole stack', body:'Bidirectional sync with Salesforce, HubSpot, Pipedrive, and 40+ platforms. Enriched fields and scores land in your CRM automatically.',accent:'#16A34A'},
  {num:'05',tag:'Campaigns',  title:'Launch and optimise at scale',body:'End-to-end campaign management with real-time attribution. The AI surfaces what to do next — you approve, it executes.',accent:'#D97706'},
  {num:'06',tag:'Security',   title:'SOC 2 · GDPR · Zero trust',  body:'Enterprise security ships with every plan. Encryption, role-based access, full audit logs, and data residency controls included.',accent:'#EF4444'},
]
const STEPS=[
  {num:'01',title:'Discovery and strategy',body:'We map your funnel, surface the gaps, and co-build an automation roadmap tied to your revenue targets — not a generic playbook.'},
  {num:'02',title:'Connect and configure', body:'Our team wires your CRM, enrichment sources, and channels. Most pipelines are live within 48 hours of signing — not months.'},
  {num:'03',title:'Launch campaigns',      body:'Multi-channel sequences go live. The AI refines message copy, timing, and audience targeting based on what is actually working.'},
  {num:'04',title:'Scale what works',      body:'Real-time analytics surface your winners. One click expands a winning campaign across your entire total addressable market.'},
]
const TESTIMONIALS=[
  {q:'We went from 10 qualified meetings a month to 47 in just 60 days. The enrichment quality changed how we run outbound entirely.',metric:'4.7× more meetings',name:'Sarah Mitchell',role:'VP Revenue · CloudVault',ini:'SM'},
  {q:"We stopped burning hours on leads that were never going to buy the week we went live. Our close rate jumped 35% in Q1. The ROI math is embarrassingly simple.",metric:'35% higher close rate',name:'James Park',role:'Head of Growth · Nexify',ini:'JP'},
  {q:"Three automation tools before this one and none came close. Hit 9× ROI by month three. The ROI calculator was actually conservative.",metric:'9× ROI in 90 days',name:'Priya Sharma',role:'CEO · DataBridge',ini:'PS'},
]
const COMPARE=[
  ['Multi-channel automation',true,false],['AI lead scoring',true,false],
  ['Real-time enrichment',true,'⚠ Partial'],['40+ CRM integrations',true,false],
  ['Dedicated success manager',true,false],['48-hour setup',true,false],
  ['No long-term contracts',true,false],
]

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function Home() {
  useSEO({title:'AIB2B Automation — B2B Lead Enrichment & Marketing Automation',description:'AI-powered lead enrichment, marketing automation, and campaign management for B2B revenue teams. Fill your pipeline and close more deals. Start free for 14 days.',canonical:'https://aib2bautomation.com/'})
  useReveal()

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{padding:'72px 40px 0',maxWidth:1280,margin:'0 auto'}}>
        <div className="au" style={{display:'flex',alignItems:'center',gap:10,marginBottom:36}}>
          <div style={{width:8,height:8,background:'#16A34A',borderRadius:'50%',animation:'dotPulse 2s ease-in-out infinite'}}/>
          <span style={{fontSize:12,fontWeight:600,color:'#7A7A7A',letterSpacing:'.06em',textTransform:'uppercase'}}>Trusted by 500+ B2B revenue teams</span>
        </div>
        <div style={{width:'100%',height:1,background:'#E2E2E2',marginBottom:44}}/>
        <div className="hero-grid">
          <h1 className="hero-h1 au d1">
            Fill your<br/>pipeline.<br/><em>Close more</em><br/>deals.
          </h1>
          <div className="hero-sub-col au d2">
            <p className="hero-p">AI-powered lead enrichment, marketing automation, and campaign management — one platform for B2B teams who cannot afford to waste a single rep hour on the wrong prospect.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-blue">Start 14-day trial →</Link>
              <Link to="/case-studies" className="btn-outline">See results</Link>
            </div>
            {['No credit card required','Live in 48 hours','SOC 2 certified'].map((t,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#7A7A7A',padding:'8px 0',borderBottom:'1px solid #E2E2E2',borderTop:i===0?'1px solid #E2E2E2':'none'}}>
                <span style={{color:'#1B4FD8',fontWeight:700}}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <div className="au d3" style={{maxWidth:1280,margin:'52px auto 0',padding:'0 40px'}}>
        <div style={{fontSize:11,fontWeight:600,color:'#B8B8B8',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:10}}>
          <span style={{flex:1,height:1,background:'#E2E2E2',display:'block'}}/>Live automation workflow<span style={{flex:1,height:1,background:'#E2E2E2',display:'block'}}/>
        </div>
        <WorkflowCanvas/>
      </div>

      {/* ── LOGOS ── */}
      <div className="logos-wrap" style={{marginTop:68}}>
        <div className="logos-label">Trusted by</div>
        <div className="logos-track-wrap">
          <div className="logos-track">
            {[...LOGOS,...LOGOS].map((l,i)=><div key={i} className="logo-item">{l}</div>)}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-row">
        {[{n:'500+',t:'B2B companies',s:'trust our platform'},{n:'40%',t:'More qualified leads',s:'average pipeline lift'},{n:'$50M+',t:'Revenue generated',s:'across our clients'},{n:'48h',t:'To go live',s:'from signup to pipeline'}].map((s,i)=>(
          <div key={i} className={`stat-cell reveal d${i+1}`}>
            <div style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:'clamp(40px,5vw,60px)',fontWeight:400,color:'#0A0A0A',lineHeight:1,marginBottom:8,letterSpacing:'-.03em'}}>{s.n}</div>
            <div style={{fontSize:14,fontWeight:600,color:'#0A0A0A',marginBottom:4}}>{s.t}</div>
            <div style={{fontSize:13,color:'#7A7A7A'}}>{s.s}</div>
          </div>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <section style={{padding:'80px 40px',maxWidth:1280,margin:'0 auto'}}>
        <div className="section-ruled reveal">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:'clamp(30px,4vw,48px)',fontWeight:400,lineHeight:1.05,letterSpacing:'-.025em'}}>
              Everything your revenue team needs.<br/><em style={{fontStyle:'italic',color:'#1B4FD8'}}>All in one place.</em>
            </h2>
          </div>
          <p className="section-ruled-note desktop-only">One platform. Six capabilities. Zero switching between tools.</p>
        </div>
        <div className="grid-3" style={{border:'1px solid #E2E2E2',borderRadius:12,overflow:'hidden',marginTop:40}}>
          {FEATURES.map((f,i)=>(
            <div key={i} className={`feat-card reveal d${(i%3)+1}`} style={{['--accent-color']:f.accent}}>
              <style>{`.feat-card:nth-child(${i+1})::before{background:${f.accent}}`}</style>
              <div style={{fontSize:11,fontWeight:700,color:'#B8B8B8',letterSpacing:'.1em',marginBottom:18}}>{f.num} — {f.tag}</div>
              <div style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:21,fontWeight:400,color:'#0A0A0A',marginBottom:10,lineHeight:1.2}}>{f.title}</div>
              <div style={{fontSize:13,color:'#7A7A7A',lineHeight:1.7}}>{f.body}</div>
              <div className="feat-arrow" style={{marginTop:16,fontSize:13,color:f.accent,fontWeight:600,opacity:0,transition:'opacity .2s'}}>
                <Link to="/services" style={{color:f.accent}}>Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{background:'#F7F7F5',borderTop:'1px solid #E2E2E2',borderBottom:'1px solid #E2E2E2'}}>
        <div className="how-split" style={{maxWidth:1280,margin:'0 auto'}}>
          <div className="how-left reveal-left">
            <div className="eyebrow">How it works</div>
            <h2 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:'clamp(26px,3.5vw,40px)',fontWeight:400,lineHeight:1.1,letterSpacing:'-.03em',marginBottom:18}}>
              From signup to pipeline <em style={{fontStyle:'italic',color:'#1B4FD8'}}>in 48 hours.</em>
            </h2>
            <p style={{fontSize:14,color:'#7A7A7A',lineHeight:1.7,marginBottom:24}}>No lengthy onboarding. No professional services. Our process gets you live and generating pipeline faster than anything else.</p>
            <Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'12px 22px'}}>Start your trial →</Link>
          </div>
          <div>
            {STEPS.map((s,i)=>(
              <div key={i} className={`proc-step reveal d${i+1}`}>
                <div className="proc-num">{s.num}</div>
                <div className="proc-content">
                  <div className="proc-title">{s.title}</div>
                  <div className="proc-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARE ── */}
      <section style={{padding:'72px 40px'}}>
        <div style={{maxWidth:760,margin:'0 auto'}}>
          <div className="eyebrow reveal">Why choose us</div>
          <h2 className="reveal" style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:'clamp(26px,3.5vw,40px)',fontWeight:400,letterSpacing:'-.03em',marginBottom:40}}>
            We do what <em style={{fontStyle:'italic',color:'#1B4FD8'}}>others cannot.</em>
          </h2>
          <div className="reveal" style={{border:'1px solid #E2E2E2',borderRadius:12,overflow:'hidden'}}>
            <div className="compare-row" style={{background:'#F7F7F5',borderBottom:'1px solid #E2E2E2'}}>
              <div style={{padding:'13px 20px',fontSize:11,fontWeight:700,color:'#7A7A7A',letterSpacing:'.06em',textTransform:'uppercase'}}>Feature</div>
              <div style={{padding:'13px 20px',fontSize:12,fontWeight:700,color:'#1B4FD8',background:'#EEF2FF',textAlign:'center'}}>AIB2B</div>
              <div style={{padding:'13px 20px',fontSize:11,fontWeight:700,color:'#7A7A7A',letterSpacing:'.06em',textTransform:'uppercase',textAlign:'center'}}>Others</div>
            </div>
            {COMPARE.map(([feat,us,them],i)=>(
              <div key={i} className="compare-row">
                <div style={{padding:'14px 20px',fontSize:13.5,color:'#3A3A3A'}}>{feat}</div>
                <div style={{padding:'14px 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {us===true?<span style={{color:'#16A34A',fontSize:17,fontWeight:700}}>✓</span>:us}
                </div>
                <div style={{padding:'14px 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {them===false?<span style={{color:'#EF4444',fontSize:17,fontWeight:700}}>✕</span>:<span style={{color:'#D97706',fontSize:12,fontWeight:600}}>{them}</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:24}} className="reveal">
            <Link to="/contact" className="btn-blue" style={{fontSize:14,padding:'11px 22px'}}>See the difference yourself →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{background:'#F7F7F5',borderTop:'1px solid #E2E2E2',borderBottom:'1px solid #E2E2E2',padding:'72px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div className="eyebrow reveal">Customer results</div>
          <h2 className="reveal" style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:'clamp(26px,3.5vw,40px)',fontWeight:400,letterSpacing:'-.03em',marginBottom:44}}>
            Real companies.<br/><em style={{fontStyle:'italic',color:'#1B4FD8'}}>Real numbers.</em>
          </h2>
          <div className="grid-3" style={{gap:18}}>
            {TESTIMONIALS.map((t,i)=>(
              <div key={i} className={`tcard reveal d${i+1}`}>
                <div className="tcard-bar"/>
                <div style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:52,lineHeight:.8,color:'#1B4FD8',marginBottom:14}}>"</div>
                <p style={{fontSize:14,color:'#3A3A3A',lineHeight:1.75,marginBottom:18,fontStyle:'italic'}}>{t.q}</p>
                <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'#F0FDF4',color:'#16A34A',border:'1px solid #BBF7D0',borderRadius:6,padding:'4px 11px',fontSize:12,fontWeight:700,marginBottom:18}}>↑ {t.metric}</div>
                <div style={{display:'flex',alignItems:'center',gap:12,paddingTop:16,borderTop:'1px solid #E2E2E2'}}>
                  <div style={{width:34,height:34,borderRadius:'50%',background:'#EEF2FF',border:'1px solid #C7D4FF',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:'#1B4FD8',flexShrink:0}}>{t.ini}</div>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:'#0A0A0A'}}>{t.name}</div>
                    <div style={{fontSize:12,color:'#7A7A7A',marginTop:2}}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{padding:'72px 40px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div className="cta-strip reveal">
            <div>
              <h2>Ready to build a<br/><em>predictable pipeline?</em></h2>
              <p>Join 500+ B2B companies scaling with AIB2B Automation. Start free — no credit card, no lock-in.</p>
            </div>
            <div className="cta-right">
              <Link to="/contact" className="btn-white">Start free trial →</Link>
              <Link to="/pricing" style={{color:'rgba(255,255,255,.45)',fontSize:14}}>View pricing first</Link>
              <div style={{fontSize:12,color:'rgba(255,255,255,.28)',textAlign:'right'}}>14-day trial · No card · Live in 48h</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
