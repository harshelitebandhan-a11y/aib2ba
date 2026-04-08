import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'
import './home.css'

const HERO_WORDS = ['pipeline', 'meetings', 'revenue']

const LOGOS = [
  'TechFlow',
  'NovaSaaS',
  'CloudVault',
  'Nexify',
  'DataBridge',
  'ProScale',
  'Elevate',
  'PipelineAI',
]

const SERVICES = [
  {
    num: '01',
    tag: 'AI REVOPS',
    title: 'Lead enrichment and qualification systems',
    body: 'Turn raw inbound and outbound leads into enriched buyer profiles with firmographics, qualification logic, routing rules, and clearer pipeline priority.',
  },
  {
    num: '02',
    tag: 'OUTBOUND SYSTEMS',
    title: 'Automated outbound workflows that convert',
    body: 'Launch multi-step email, LinkedIn, and follow-up systems built for B2B teams who want more qualified conversations without adding manual busywork.',
  },
  {
    num: '03',
    tag: 'GTM EXECUTION',
    title: 'A go-to-market engine your team can operate',
    body: 'We connect strategy, workflows, CRM process, and performance reporting so your team can run a repeatable system instead of disconnected tools.',
  },
]

const PROBLEMS = [
  {
    title: 'Leads come in, but qualification is messy',
    body: 'Most teams still rely on spreadsheets, guesswork, and slow manual checks before a lead reaches the right person.',
  },
  {
    title: 'Outbound is inconsistent and hard to scale',
    body: 'Campaigns often depend on one operator, one VA, or one sales rep instead of a structured workflow that can repeat and improve.',
  },
  {
    title: 'CRM data is incomplete or poorly routed',
    body: 'Bad handoffs, missing enrichment, and weak routing logic create slow response time and lower conversion quality.',
  },
  {
    title: 'Marketing and sales do not share one system',
    body: 'Without a connected GTM process, content, targeting, qualification, and follow-up stay fragmented across tools and people.',
  },
]

const PROCESS = [
  {
    week: 'Week 1',
    title: 'Strategy and GTM audit',
    body: 'We review your current funnel, lead flow, CRM process, targeting, and outbound motion to find where revenue leaks are happening.',
  },
  {
    week: 'Week 2',
    title: 'Build the workflow system',
    body: 'We set up enrichment logic, routing, automation, follow-up paths, data structure, and reporting foundations around your real process.',
  },
  {
    week: 'Week 3',
    title: 'Launch and activate',
    body: 'Campaigns, handoffs, lead actions, and automation flows go live so your team starts working inside one clearer GTM motion.',
  },
  {
    week: 'Week 4+',
    title: 'Refine and scale',
    body: 'We improve qualification quality, messaging performance, and funnel efficiency using real replies, meetings, and pipeline outcomes.',
  },
]

const RESULTS = [
  {
    quote:
      'We stopped wasting hours on low-fit leads and finally had a system that showed who to follow up with and when.',
    metric: '4.7× more qualified meetings',
    name: 'Sarah Mitchell',
    role: 'VP Revenue · CloudVault',
    initials: 'SM',
  },
  {
    quote:
      'The biggest difference was clarity. Leads were enriched, routed, and actioned faster, and the sales team trusted the process more.',
    metric: '35% better close rate',
    name: 'James Park',
    role: 'Head of Growth · Nexify',
    initials: 'JP',
  },
  {
    quote:
      'This felt less like buying another tool and more like installing a working go-to-market engine into the business.',
    metric: '9× ROI in 90 days',
    name: 'Priya Sharma',
    role: 'CEO · DataBridge',
    initials: 'PS',
  },
]

const COMPARE = [
  ['Lead enrichment + qualification', 'Yes', 'Limited'],
  ['Custom routing logic', 'Yes', 'Rare'],
  ['Outbound automation workflows', 'Yes', 'Partial'],
  ['CRM process integration', 'Yes', 'Usually separate'],
  ['Fast implementation', 'Weeks', 'Months'],
  ['System built for your GTM process', 'Yes', 'Mostly template-based'],
]

const FAQS = [
  {
    q: 'Who is this best for?',
    a: 'This is best for B2B SaaS teams, service businesses, agencies, founders, GTM teams, and RevOps-led teams that want more qualified pipeline with better systems.',
  },
  {
    q: 'Do you only provide software?',
    a: 'No. The goal is not just to hand over another tool. The goal is to build a working workflow system around your sales and go-to-market process.',
  },
  {
    q: 'Can this work with our existing CRM?',
    a: 'Yes. The setup is designed to fit into your current CRM and lead process rather than forcing a completely new operating model.',
  },
  {
    q: 'How fast can we launch?',
    a: 'Many teams can get a first usable version live within weeks, depending on workflow complexity, data quality, and CRM readiness.',
  },
]

const WORKFLOW_NODES = [
  { id: 'lead', x: 30, y: 155, w: 170, label: 'NEW LEAD', sub: 'Form / list / CRM', accent: '#175cd3' },
  { id: 'enrich', x: 300, y: 70, w: 180, label: 'ENRICH', sub: 'Firmographics + context', accent: '#7f56d9' },
  { id: 'score', x: 300, y: 155, w: 180, label: 'QUALIFY', sub: 'Fit + intent scoring', accent: '#12b76a' },
  { id: 'route', x: 300, y: 240, w: 180, label: 'ROUTE', sub: 'Owner / segment logic', accent: '#f79009' },
  { id: 'decision', x: 590, y: 155, w: 180, label: 'DECISION', sub: 'High intent?', accent: '#175cd3' },
  { id: 'hot', x: 860, y: 90, w: 185, label: 'HOT FLOW', sub: 'Sales follow-up', accent: '#175cd3' },
  { id: 'nurture', x: 860, y: 220, w: 185, label: 'NURTURE', sub: 'Stay in market', accent: '#7f56d9' },
]

const WORKFLOW_STEPS = [
  { path: 'M200,185 C250,185 250,100 300,100', nodeId: 'enrich', color: '#7f56d9' },
  { path: 'M200,185 L300,185', nodeId: 'score', color: '#12b76a' },
  { path: 'M200,185 C250,185 250,270 300,270', nodeId: 'route', color: '#f79009' },
  { path: 'M480,100 C535,100 535,185 590,185', nodeId: 'decision', color: '#7f56d9' },
  { path: 'M480,185 L590,185', nodeId: 'decision', color: '#12b76a' },
  { path: 'M770,185 C815,185 815,120 860,120', nodeId: 'hot', color: '#175cd3' },
  { path: 'M770,185 C815,185 815,250 860,250', nodeId: 'nurture', color: '#7f56d9' },
]

const IDLE_PATHS = [
  'M200,185 C250,185 250,100 300,100',
  'M200,185 L300,185',
  'M200,185 C250,185 250,270 300,270',
  'M480,100 C535,100 535,185 590,185',
  'M480,185 L590,185',
  'M480,270 C535,270 535,185 590,185',
  'M770,185 C815,185 815,120 860,120',
  'M770,185 C815,185 815,250 860,250',
]

function useTypingWord() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = HERO_WORDS[index]
    let timeout

    if (phase === 'typing') {
      if (text.length < word.length) {
        timeout = setTimeout(() => {
          setText(word.slice(0, text.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1500)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 300)
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, 45)
      } else {
        setIndex((prev) => (prev + 1) % HERO_WORDS.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [index, text, phase])

  return text
}

function useCounter(target, duration = 1600) {
  const [count, setCount] = useState('0')
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        let start = null
        const numeric = parseFloat(target.replace(/[^0-9.]/g, ''))
        const hasDollar = target.includes('$')
        const hasPlus = target.includes('+')
        const hasPercent = target.includes('%')
        const hasHours = target.toLowerCase().includes('h')

        const animate = (timestamp) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const value = numeric * eased

          let formatted = `${Math.round(value)}`
          if (hasDollar) formatted = `$${Math.round(value).toLocaleString()}`
          else formatted = `${Math.round(value).toLocaleString()}`
          if (hasPercent) formatted += '%'
          if (hasHours) formatted += 'h'
          if (hasPlus) formatted += '+'

          setCount(formatted)

          if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
      },
      { threshold: 0.45 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target, duration])

  return [count, ref]
}

function StatCard({ value, label, sub }) {
  const [display, ref] = useCounter(value)

  return (
    <div ref={ref} className="stat-card reveal">
      <div className="stat-value">{display}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  )
}

function WorkflowCanvas() {
  const svgRef = useRef(null)
  const dotRef = useRef(null)
  const [litNodes, setLitNodes] = useState(new Set(['lead']))
  const [litEdges, setLitEdges] = useState([])

  useEffect(() => {
    let stepIndex = 0
    let cancelled = false

    const animatePath = (pathData, color, callback) => {
      const svg = svgRef.current
      const dot = dotRef.current
      if (!svg || !dot || cancelled) return callback()

      const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      tempPath.setAttribute('d', pathData)
      tempPath.style.display = 'none'
      svg.appendChild(tempPath)

      const length = tempPath.getTotalLength()
      svg.removeChild(tempPath)

      const motionPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      motionPath.setAttribute('d', pathData)
      motionPath.style.display = 'none'
      svg.appendChild(motionPath)

      dot.setAttribute('fill', color)
      dot.style.opacity = '1'

      let start = null
      const duration = Math.max(Math.min(length * 2.2, 900), 380)

      const frame = (timestamp) => {
        if (cancelled) {
          dot.style.opacity = '0'
          try {
            svg.removeChild(motionPath)
          } catch {}
          return
        }

        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress

        try {
          const point = motionPath.getPointAtLength(eased * length)
          dot.setAttribute('cx', point.x)
          dot.setAttribute('cy', point.y)
        } catch {}

        if (progress < 1) {
          requestAnimationFrame(frame)
        } else {
          dot.style.opacity = '0'
          try {
            svg.removeChild(motionPath)
          } catch {}
          callback()
        }
      }

      requestAnimationFrame(frame)
    }

    const run = () => {
      if (cancelled) return

      if (stepIndex >= WORKFLOW_STEPS.length) {
        setTimeout(() => {
          if (cancelled) return
          stepIndex = 0
          setLitNodes(new Set(['lead']))
          setLitEdges([])
          setTimeout(run, 500)
        }, 1400)
        return
      }

      const step = WORKFLOW_STEPS[stepIndex]
      animatePath(step.path, step.color, () => {
        if (cancelled) return
        setLitEdges((prev) => [...prev, { path: step.path, color: step.color }])
        setLitNodes((prev) => new Set([...prev, step.nodeId]))
        stepIndex += 1
        setTimeout(run, 200)
      })
    }

    const timer = setTimeout(run, 800)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="workflow-canvas reveal">
      <div className="workflow-topbar">
        <div className="workflow-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <div className="workflow-topbar-title">AIB2B Workflow Engine</div>

        <div className="workflow-status">
          <span className="live-dot" />
          Live
        </div>
      </div>

      <div className="workflow-svg-wrap">
        <svg
          ref={svgRef}
          viewBox="0 0 1080 360"
          width="100%"
          aria-label="Lead workflow engine"
        >
          <defs>
            <pattern id="wf-grid" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="1.2" cy="1.2" r="1" fill="#d0d5dd" />
            </pattern>

            <marker id="idle-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#d0d5dd" strokeWidth="1.4" strokeLinecap="round" />
            </marker>

            <marker id="live-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#175cd3" strokeWidth="1.6" strokeLinecap="round" />
            </marker>
          </defs>

          <rect width="1080" height="360" fill="#ffffff" />
          <rect width="1080" height="360" fill="url(#wf-grid)" opacity=".55" />

          {IDLE_PATHS.map((path, i) => (
            <path
              key={i}
              d={path}
              fill="none"
              stroke="#d0d5dd"
              strokeWidth="1"
              strokeDasharray="5 5"
              markerEnd="url(#idle-arrow)"
            />
          ))}

          {litEdges.map((edge, i) => (
            <path
              key={i}
              d={edge.path}
              fill="none"
              stroke={edge.color}
              strokeWidth="2"
              markerEnd="url(#live-arrow)"
              style={{ filter: `drop-shadow(0 0 6px ${edge.color}45)` }}
            />
          ))}

          <text x="815" y="145" textAnchor="middle" fontSize="11" fill="#667085" fontFamily="Inter, sans-serif" fontWeight="700">
            YES
          </text>
          <text x="815" y="250" textAnchor="middle" fontSize="11" fill="#667085" fontFamily="Inter, sans-serif" fontWeight="700">
            NO
          </text>

          {WORKFLOW_NODES.map((node) => {
            const active = litNodes.has(node.id)

            return (
              <g key={node.id}>
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height="60"
                  rx="12"
                  fill={active ? '#f8fbff' : '#ffffff'}
                  stroke={active ? node.accent : '#eaecf0'}
                  strokeWidth={active ? 1.8 : 1}
                  style={{
                    transition: 'all .3s ease',
                    filter: active ? `drop-shadow(0 8px 18px ${node.accent}18)` : 'none',
                  }}
                />
                <rect x={node.x} y={node.y} width="4" height="60" rx="2" fill={node.accent} />
                <text
                  x={node.x + 16}
                  y={node.y + 22}
                  fontSize="11"
                  fontWeight="700"
                  fill="#101828"
                  fontFamily="Inter, sans-serif"
                  letterSpacing=".05em"
                >
                  {node.label}
                </text>
                <text
                  x={node.x + 16}
                  y={node.y + 41}
                  fontSize="12"
                  fill="#667085"
                  fontFamily="Inter, sans-serif"
                >
                  {node.sub}
                </text>

                {active && (
                  <circle cx={node.x + node.w - 14} cy={node.y + 14} r="4" fill={node.accent} opacity=".9">
                    <animate attributeName="r" values="3;5;3" dur="1.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values=".9;.45;.9" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            )
          })}

          <circle
            ref={dotRef}
            r="6"
            fill="#175cd3"
            opacity="0"
            style={{ filter: 'drop-shadow(0 0 8px #175cd3)' }}
          />
        </svg>
      </div>

      <div className="workflow-metrics">
        <div className="workflow-metric">
          <span>Leads enriched</span>
          <strong>1,284</strong>
        </div>
        <div className="workflow-metric">
          <span>Qualified accounts</span>
          <strong>312</strong>
        </div>
        <div className="workflow-metric">
          <span>Meetings booked</span>
          <strong>23</strong>
        </div>
        <div className="workflow-metric">
          <span>Pipeline added</span>
          <strong>$412K</strong>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-button" onClick={onClick}>
        <span>{item.q}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq-answer">
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function Home() {
  useSEO({
    title: 'AIB2B Automation — GTM Systems, AI RevOps & Qualified Pipeline Growth',
    description:
      'AIB2B helps B2B teams build lead enrichment, qualification, routing, and outbound workflow systems that generate more qualified pipeline.',
    canonical: 'https://aib2bautomation.com/',
  })

  useReveal()

  const typedWord = useTypingWord()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge au d1">
              <span className="hero-badge-dot" />
              GTM systems for B2B teams
            </div>

            <h1 className="hero-title au d2">
              Build go-to-market systems
              <br />
              that generate qualified{' '}
              <span className="hero-typed">
                {typedWord}
                <span className="hero-cursor">|</span>
              </span>
            </h1>

            <p className="hero-text au d3">
              We help B2B teams improve lead quality, outbound execution, CRM flow,
              and revenue operations with AI-powered systems that are built to be used
              by real teams, not just admired in dashboards.
            </p>

            <div className="hero-actions au d3">
              <Link to="/contact" className="btn btn-primary">
                Book a strategy call
              </Link>
              <Link to="/case-studies" className="btn btn-secondary">
                See results
              </Link>
            </div>

            <div className="hero-proof au d4">
              <div className="proof-box">
                <strong>500+</strong>
                <span>B2B teams supported</span>
              </div>
              <div className="proof-box">
                <strong>40%</strong>
                <span>avg. qualified pipeline lift</span>
              </div>
              <div className="proof-box">
                <strong>48h</strong>
                <span>first launch window</span>
              </div>
            </div>
          </div>

          <div className="hero-visual au d4">
            <div className="hero-panel">
              <div className="hero-panel-top">
                <div className="hero-window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-live-pill">
                  <span className="hero-live-dot" />
                  Live pipeline
                </div>
              </div>

              <div className="hero-kpi-grid">
                <div className="hero-kpi">
                  <p>Pipeline added</p>
                  <h3>$412K</h3>
                  <span>Last 30 days</span>
                </div>
                <div className="hero-kpi">
                  <p>Qualified leads</p>
                  <h3>1,284</h3>
                  <span>Enriched + scored</span>
                </div>
                <div className="hero-kpi">
                  <p>Reply rate</p>
                  <h3>18.6%</h3>
                  <span>Across workflows</span>
                </div>
                <div className="hero-kpi">
                  <p>Meetings booked</p>
                  <h3>23</h3>
                  <span>This week</span>
                </div>
              </div>

              <div className="hero-chart">
                <div className="hero-chart-head">
                  <div>
                    <small>Performance overview</small>
                    <h4>Qualified pipeline trend</h4>
                  </div>
                  <span className="hero-chart-badge">+40%</span>
                </div>

                <div className="hero-bars">
                  <span style={{ height: '34%' }} />
                  <span style={{ height: '44%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '65%' }} />
                  <span style={{ height: '72%' }} />
                  <span style={{ height: '86%' }} />
                  <span style={{ height: '96%' }} />
                </div>
              </div>

              {/* <div className="hero-floating-card hero-floating-card-a">
                <span className="floating-label">New lead</span>
                <strong>Score: 91 / 100</strong>
                <p>Routed to high-intent sequence</p>
              </div> */}

              {/* <div className="hero-floating-card hero-floating-card-b">
                <span className="floating-label">Automation</span>
                <strong>Follow-up launched</strong>
                <p>Email + LinkedIn touch active</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="logos-section">
        <div className="section-container">
          <div className="section-mini-head center">Trusted by modern revenue teams</div>
          <div className="logos-marquee">
            <div className="logos-track">
              {[...LOGOS, ...LOGOS].map((logo, index) => (
                <div key={index} className="logo-item">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-container stats-grid">
          <StatCard value="500+" label="B2B teams" sub="using better GTM systems" />
          <StatCard value="40%" label="Pipeline lift" sub="average improvement seen" />
          <StatCard value="$50+" label="Revenue impact" sub="across supported accounts" />
          <StatCard value="48h" label="Time to first launch" sub="for many setups" />
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Built into your workflow</div>
              <h2 className="section-title">
                One system for enrichment, qualification, routing, and action.
              </h2>
            </div>
            <p className="section-copy">
              Instead of adding another disconnected tool, we help build a revenue workflow
              that moves leads from capture to conversion with more clarity and speed.
            </p>
          </div>

          <WorkflowCanvas />
        </div>
      </section>

      <section className="services-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">What we build</div>
              <h2 className="section-title">
                Systems for GTM, RevOps, and outbound execution.
              </h2>
            </div>
            <p className="section-copy">
              We combine process thinking, automation, CRM structure, and AI workflow logic
              to help your team generate better-fit pipeline with less manual friction.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <article key={index} className={`service-card reveal d${(index % 3) + 1}`}>
                <div className="service-number">{service.num}</div>
                <div className="service-tag">{service.tag}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <Link to="/services" className="service-link">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="problems-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Why GTM breaks</div>
              <h2 className="section-title">
                Most growth problems are actually workflow problems.
              </h2>
            </div>
            <p className="section-copy">
              Poor lead handling, unclear routing, disconnected sales motions, and weak data
              structure create pipeline problems long before performance dashboards reveal them.
            </p>
          </div>

          <div className="problems-grid">
            {PROBLEMS.map((item, index) => (
              <article key={index} className={`problem-card reveal d${(index % 4) + 1}`}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">How we launch</div>
              <h2 className="section-title">
                A practical rollout designed for weeks, not months.
              </h2>
            </div>
            <p className="section-copy">
              The process is structured enough to move fast, but flexible enough to match
              your CRM, targeting model, and sales workflow.
            </p>
          </div>

          <div className="process-list">
            {PROCESS.map((step, index) => (
              <div key={index} className={`process-item reveal d${(index % 4) + 1}`}>
                <div className="process-week">{step.week}</div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compare-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Why AIB2B</div>
              <h2 className="section-title">
                Not another tool. A system your team can actually run.
              </h2>
            </div>
            <p className="section-copy">
              Most solutions solve one piece of the funnel. We focus on the operating system
              that connects lead quality, action logic, CRM flow, and conversion visibility.
            </p>
          </div>

          <div className="compare-table reveal">
            <div className="compare-row compare-header">
              <div>Capability</div>
              <div>AIB2B</div>
              <div>Typical alternative</div>
            </div>

            {COMPARE.map(([feature, ours, theirs], index) => (
              <div className="compare-row" key={index}>
                <div>{feature}</div>
                <div className="compare-good">{ours}</div>
                <div className="compare-neutral">{theirs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="results-section">
        <div className="section-container">
          <div className="section-head reveal">
            <div>
              <div className="section-mini-head">Results</div>
              <h2 className="section-title">
                Better systems create better conversations and better pipeline.
              </h2>
            </div>
            <p className="section-copy">
              The value is not just automation. It is having a repeatable GTM system that
              improves qualification quality, follow-up speed, and sales confidence.
            </p>
          </div>

          <div className="results-grid">
            {RESULTS.map((item, index) => (
              <article key={index} className={`result-card reveal d${(index % 3) + 1}`}>
                <div className="quote-mark">“</div>
                <p className="result-text">{item.quote}</p>
                <div className="result-metric">{item.metric}</div>
                <footer className="result-footer">
                  <div className="result-avatar">{item.initials}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container faq-layout">
          <div className="faq-left reveal">
            <div className="section-mini-head">FAQ</div>
            <h2 className="section-title">
              Common questions before teams get started.
            </h2>
            <p className="section-copy left">
              These are the questions we usually hear from founders, operators, and revenue teams
              evaluating a workflow-led GTM system.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container">
          <div className="cta-card reveal">
            <div className="cta-copy">
              <div className="section-mini-head light">Book a 30-minute strategy call</div>
              <h2>Turn lead chaos into a cleaner revenue system.</h2>
              <p>
                If your team needs better lead qualification, stronger outbound systems,
                cleaner CRM flow, and more qualified pipeline, let’s map the right workflow.
              </p>
            </div>

            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">
                Book your strategy call
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}