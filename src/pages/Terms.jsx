import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const SECTIONS=[
  {title:'1. Acceptance of terms',content:"By accessing or using AIB2B Automation's services, you agree to be bound by these Terms of Service. If you do not agree, you may not use the services. These terms form a legally binding agreement between you and AIB2B Automation, Inc."},
  {title:'2. Description of services',content:"AIB2B Automation provides B2B sales and marketing automation software, including lead enrichment, campaign management, CRM integrations, and analytics. Available features depend on your subscription plan. We reserve the right to modify or discontinue any aspect of the services at any time."},
  {title:'3. Account registration and security',content:"You must create an account with accurate, complete information. You are responsible for maintaining the confidentiality of your login credentials, all activity that occurs under your account, and notifying us immediately of any unauthorised access. We may suspend or terminate accounts that violate these terms."},
  {title:'4. Subscription, payment, and billing',content:"Services are billed monthly or annually in advance. Subscriptions auto-renew unless cancelled before the renewal date. Prices may change with 30 days notice. Payments are non-refundable except where required by law. All fees exclude applicable taxes."},
  {title:'5. Acceptable use',content:"You agree not to use the services to violate applicable laws, send unsolicited communications, collect data without consent, upload illegal content, interfere with platform operations, or gain unauthorised access to any system. Violations may result in immediate termination without refund."},
  {title:'6. Data ownership and licence',content:"You retain ownership of all data you upload to the platform. You grant us a limited, non-exclusive licence to process and store that data solely for the purpose of providing the services. AIB2B Automation retains all rights to the platform, software, and underlying technology."},
  {title:'7. Intellectual property',content:"All platform content, features, and functionality are owned by AIB2B Automation and protected by copyright, trademark, and other intellectual property laws. These terms grant you no rights to our trademarks or any proprietary technology."},
  {title:'8. Disclaimer of warranties',content:'THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE SERVICE. YOUR USE OF THE SERVICES IS AT YOUR OWN RISK.'},
  {title:'9. Limitation of liability',content:"TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIB2B AUTOMATION WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY WILL NOT EXCEED THE GREATER OF AMOUNTS YOU PAID IN THE PRECEDING 12 MONTHS OR $100."},
  {title:'10. Governing law and disputes',content:"These terms are governed by California law. Disputes will first be subject to good-faith negotiation between the parties, then binding arbitration in San Francisco, CA. You agree that arbitration will be conducted on an individual basis — not as a class action."},
  {title:'11. Changes to these terms',content:"We may update these terms with 14 days notice before material changes take effect. Continued use of the platform after the effective date constitutes acceptance of the updated terms."},
  {title:'12. Contact',content:"For questions about these terms: legal@aib2bautomation.com | AIB2B Automation, Inc., Legal Department, San Francisco, CA | +1 (555) 123-4567"},
]
export default function Terms() {
  useSEO({title:'Terms of Service | AIB2B Automation',description:'AIB2B Automation terms of service. Read our usage terms, subscription policies, data ownership, and legal agreements.',canonical:'https://aib2bautomation.com/terms'})
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <section className="page-hero" style={{paddingBottom:48}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><span>Terms</span></nav>
          <div className="hero-h-rule"/>
          <h1 style={{fontFamily:V.serif,fontSize:'clamp(40px,5vw,64px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em',marginBottom:16}}>Terms of Service</h1>
          <p style={{fontSize:14,color:V.ink4}}>Last updated: March 1, 2025</p>
        </div>
      </section>
      <section style={{padding:'48px 40px 80px'}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'column',gap:0,border:`1px solid ${V.rule}`,borderRadius:12,overflow:'hidden'}}>
            {SECTIONS.map((s,i)=>(
              <div key={i} style={{padding:'28px 32px',borderBottom:i<SECTIONS.length-1?`1px solid ${V.rule}`:'none'}}>
                <h2 style={{fontFamily:V.serif,fontSize:20,fontWeight:400,color:V.ink,marginBottom:12,letterSpacing:'-.01em'}}>{s.title}</h2>
                <p style={{fontSize:14,color:V.ink3,lineHeight:1.75}}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
