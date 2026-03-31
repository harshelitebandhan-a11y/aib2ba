import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
const V={ink:'#0A0A0A',ink2:'#3A3A3A',ink3:'#7A7A7A',ink4:'#B8B8B8',blue:'#1B4FD8',blueLight:'#EEF2FF',rule:'#E2E2E2',bg:'#FFFFFF',bg2:'#F7F7F5',serif:"'Instrument Serif',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif"}
const SECTIONS=[
  {title:'1. Information we collect',content:"We collect information you give us directly — when you create an account, fill out a form, request a demo, or contact us. This includes your name, email, company name, job title, and phone number. We also collect usage data about how you interact with our platform, any lead or contact data you upload, and technical data like IP address, browser type, and access logs."},
  {title:'2. How we use your information',content:"We use your information to provide and improve our services, process transactions, send you product and marketing communications (which you can opt out of anytime), respond to your questions, monitor for fraud, and comply with legal requirements. We never sell your personal data to third parties."},
  {title:'3. How we share your information',content:"We do not sell your personal information. We may share it with service providers who help us operate (cloud hosting, payments, analytics) under strict data processing agreements, with business partners in connection with a merger or acquisition, or when required by law. All providers are contractually prohibited from using your data for any other purpose."},
  {title:'4. Data retention',content:"We keep your personal information for as long as your account is active or as long as we need it to provide services. If you request account deletion, we will delete or anonymise your data within 30 days, unless we are legally required to keep it for longer."},
  {title:'5. Security',content:"We use TLS 1.2+ encryption in transit and AES-256 encryption at rest. We conduct regular security assessments and enforce role-based access controls. We are SOC 2 Type II certified and GDPR compliant. While no system is perfectly secure, we take every reasonable measure to protect your data."},
  {title:'6. Your rights and choices',content:"Depending on where you are located, you may have the right to access, correct, delete, or export your personal data. To exercise any of these rights, email us at privacy@aib2bautomation.com. EU and EEA residents may also file a complaint with their local data protection authority."},
  {title:'7. Cookies',content:"We use essential cookies required for the platform to function, analytics cookies to understand how people use our site (Google Analytics), and marketing cookies to measure campaign effectiveness. You can configure your browser to block cookies, though some features may not work as expected."},
  {title:'8. Contact us',content:"For any privacy questions or requests, email us at privacy@aib2bautomation.com. You can also write to us at AIB2B Automation, Privacy Team, San Francisco, CA 94105."},
]
export default function Privacy() {
  useSEO({title:'Privacy Policy | AIB2B Automation',description:'AIB2B Automation privacy policy. Learn how we collect, use, and protect your personal information. GDPR compliant, SOC 2 certified.',canonical:'https://aib2bautomation.com/privacy'})
  return (
    <div style={{fontFamily:V.sans,background:V.bg,color:V.ink}}>
      <section className="page-hero" style={{paddingBottom:48}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><span>Privacy</span></nav>
          <div className="hero-h-rule"/>
          <h1 style={{fontFamily:V.serif,fontSize:'clamp(40px,5vw,64px)',fontWeight:400,lineHeight:.97,letterSpacing:'-.03em',marginBottom:16}}>Privacy Policy</h1>
          <p style={{fontSize:14,color:V.ink4}}>Last updated: March 1, 2025</p>
        </div>
      </section>
      <section style={{padding:'48px 40px 80px'}}>
        <div style={{maxWidth:820,margin:'0 auto'}}>
          <div style={{padding:'20px 24px',background:V.blueLight,border:'1px solid #C7D4FF',borderRadius:10,fontSize:15,color:V.ink2,lineHeight:1.7,marginBottom:48}}>
            AIB2B Automation is committed to protecting your privacy. This policy explains exactly how we collect, use, and protect your information when you use our platform and services.
          </div>
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
