import {
  ArrowRight,
  BadgeCheck,
  CircuitBoard,
  Clock3,
  Cpu,
  Factory,
  Gauge,
  Layers3,
  Mail,
  MessageCircle,
  Microscope,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";

const products = [
  ["SMD LED", "Surface-mount LED packages for lighting, display backlight, signage and electronics, including 2835, 3030, 3535 and 5050 formats.", Sparkles, "/products/smd-led"],
  ["Chip LED", "Miniature front light, side light, mono-color and dual-color chip LEDs for compact PCB indicators and SMT assemblies.", Cpu, "/products/chip-led"],
  ["DIP LED", "Through-hole LED components for indicators, control panels, meters, signage and electronic assemblies.", Layers3, "/products/dip-led"],
  ["High Power LED", "High-output LED components for commercial lighting, industrial illumination and demanding thermal environments.", Zap, "/products/high-power-led"],
  ["Infrared LED", "IR LED solutions for sensing, remote control, security equipment, industrial detection and smart systems.", Gauge, "/products/infrared-led"],
  ["LED Display Components", "LED components for display systems, indicators, signage modules and visual communication products.", PackageCheck, "/products/led-display-components"],
  ["PCBA Support", "PCBA integration support for LED lighting, display electronics and custom projects.", CircuitBoard, "/products/pcba-support"]
] as const;

const applications = [
  "Commercial Lighting",
  "Display Systems",
  "Industrial Control",
  "Automotive Electronics",
  "Smart Home",
  "PCB/PCBA Projects"
];

const reasons = [
  ["Stable Quality", "Controlled packaging and inspection processes for consistent brightness, color and electrical performance.", ShieldCheck],
  ["OEM/ODM Support", "Project-specific LED selection, package matching, module design and customized production support.", Cpu],
  ["Fast Delivery", "Responsive sample, trial order and repeat-order coordination for overseas procurement schedules.", Clock3],
  ["Cost-Effective Solutions", "Practical LED and PCBA solutions designed to balance performance, reliability and purchasing cost.", BadgeCheck],
  ["Engineering Support", "Technical communication for wavelength, color, brightness, voltage, current, thermal and application needs.", Microscope],
  ["PCBA Integration", "Support from LED components to board-level integration for lighting, display and electronics projects.", CircuitBoard]
] as const;

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KINGBRIGHT OPTO-ELECTRONIC CO., LTD",
    url: "https://www.kbrighter.com",
    email: "sales@kbrighter.com",
    telephone: "+86-135-3014-4658",
    makesOffer: ["SMD LED", "Chip LED", "DIP LED", "High Power LED", "Infrared LED", "LED Display Components", "PCBA Support"]
  };

  return (
    <main className="kb-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="kb-hero">
        <div className="kb-wrap kb-hero-grid">
          <div>
            <p className="kb-eyebrow">LED Components Manufacturer</p>
            <h1>LED Components, Display LEDs & PCBA Support for Global Buyers</h1>
            <p className="kb-hero-text">
              KINGBRIGHT supplies SMD LED, Chip LED, DIP LED, high power LED, infrared LED,
              LED display components and PCBA support for lighting manufacturers,
              display system builders, industrial electronics companies and OEM projects.
            </p>
            <div className="kb-cta-row">
              <a className="kb-btn kb-btn-primary" href="#contact">Request Quotation <ArrowRight size={18} /></a>
              <a className="kb-btn kb-btn-ghost" href="#contact">Request LED Samples</a>
              <a className="kb-btn kb-btn-ghost" href="/download-center">Download Catalog</a>
              <a className="kb-btn kb-btn-ghost" href="#contact">Contact Sales Engineer</a>
            </div>
            <div className="kb-proof">
              {["LED Components", "OEM/ODM", "PCBA Support"].map((item) => (
                <div key={item}>
                  <strong>{item}</strong>
                  <span>For overseas buyers</span>
                </div>
              ))}
            </div>
          </div>

          <div className="kb-industrial-card" aria-label="KINGBRIGHT manufacturing support overview">
            <span className="kb-badge">Factory Direct</span>
            <div className="kb-chip-grid">
              {["SMD", "DIP", "IR", "PCBA"].map((item) => (
                <div className="kb-chip" key={item}>
                  <span />
                  <strong>{item}</strong>
                  <p>Project supply support</p>
                </div>
              ))}
            </div>
            <div className="kb-dark-box">
              <Factory className="kb-orange" />
              <div>
                <strong>Components + Quality + Integration</strong>
                <p>Fast RFQ communication for component matching, datasheet requests, sample coordination and PCBA project discussion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="kb-section">
        <div className="kb-wrap">
          <SectionTitle eyebrow="Product Categories" title="LED Components and PCBA Support for B2B Projects" />
          <div className="kb-grid-3">
            {products.map(([title, text, Icon, href]) => (
              <article className="kb-card" key={title}>
                <Icon className="kb-blue" size={34} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={href}>Review Product Category <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="kb-section kb-white">
        <div className="kb-wrap">
          <SectionTitle eyebrow="Applications" title="Component Supply for Lighting, Display and Electronics Markets" />
          <div className="kb-grid-3">
            {applications.map((item) => (
              <a className="kb-app" href="#contact" key={item}>{item}<ArrowRight size={20} /></a>
            ))}
          </div>
        </div>
      </section>

      <section className="kb-section">
        <div className="kb-wrap kb-two">
          <div>
            <SectionTitle eyebrow="Why Choose KINGBRIGHT" title="Reliable LED Supply Support for Overseas Buyers" />
            <p className="kb-muted">
              KINGBRIGHT helps purchasing teams and engineers source suitable LED components,
              request datasheets, arrange samples and discuss PCBA integration with clear technical communication.
            </p>
            <a className="kb-btn kb-btn-primary" href="/download-center">Download Catalog & Company Profiles <ArrowRight size={18} /></a>
          </div>
          <div className="kb-reason-grid">
            {reasons.map(([title, text, Icon]) => (
              <div className="kb-reason" key={title}>
                <Icon className="kb-blue" size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quality" className="kb-section kb-dark">
        <div className="kb-wrap kb-two">
          <div>
            <p className="kb-label">Factory & Quality Control</p>
            <h2>Production Capability Backed by Process Control</h2>
            <p>
              KINGBRIGHT focuses on stable LED component supply, process control and
              testing support so overseas customers can evaluate products with greater confidence.
            </p>
          </div>
          <div className="kb-steps">
            {["Incoming material inspection", "LED packaging process control", "Photoelectric parameter testing", "Aging and reliability verification"].map((step, index) => (
              <div className="kb-step" key={step}><span>0{index + 1}</span>{step}</div>
            ))}
            <a className="kb-btn kb-btn-primary" href="/quality-control">Review Manufacturing & Quality Control <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section id="contact" className="kb-section">
        <div className="kb-wrap kb-contact">
          <div className="kb-contact-info">
            <p className="kb-label">Contact KINGBRIGHT</p>
            <h2>Send Your LED or PCBA Inquiry</h2>
            <p>
              Tell us the LED type, wavelength or color, electrical parameters,
              application, quantity target and datasheet requirements.
            </p>
            <a href="mailto:sales@kbrighter.com"><Mail size={20} /> sales@kbrighter.com</a>
            <a href="https://wa.me/8613530144658"><MessageCircle size={20} /> WhatsApp: +86 135 3014 4658</a>
            <a href="tel:+8613530144658"><Phone size={20} /> +86 135 3014 4658</a>
            <a href="https://www.kbrighter.com"><Factory size={20} /> www.kbrighter.com</a>
          </div>
          <form className="kb-form" action="mailto:sales@kbrighter.com" method="post" encType="text/plain">
            <div className="kb-form-row">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Company" name="company" placeholder="Company name" />
            </div>
            <div className="kb-form-row">
              <Field label="Email" name="email" placeholder="name@company.com" type="email" />
              <Field label="WhatsApp" name="whatsapp" placeholder="+86 135 3014 4658" />
            </div>
            <Field label="Product Interest" name="product_interest" placeholder="SMD LED, DIP LED, infrared LED, display LED, PCBA..." />
            <label>
              Message
              <textarea name="message" placeholder="Please share application, specifications, wavelength/color, voltage/current, quantity, datasheet request or sample needs..." />
            </label>
            <button className="kb-btn kb-btn-primary" type="submit">Submit RFQ to Sales Engineer <ArrowRight size={18} /></button>
          </form>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="kb-section-title">
      <p className="kb-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder: string; type?: string }) {
  return (
    <label>
      {label}
      <input name={name} placeholder={placeholder} type={type} />
    </label>
  );
}

const styles = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.kb-page{min-height:100vh;overflow:hidden;background:#f7f9fc;color:#142033;font-family:Inter,Arial,Helvetica,sans-serif}.kb-page a{text-decoration:none;color:inherit}.kb-wrap{width:min(1180px,calc(100% - 44px));margin:0 auto}.kb-nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);border-bottom:1px solid #dde3eb;backdrop-filter:blur(12px)}.kb-nav-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:16px 0}.kb-brand{display:flex;align-items:center;gap:12px}.kb-logo{display:grid;place-items:center;width:42px;height:42px;background:#142033;color:#fff;font-weight:800}.kb-brand strong{display:block;font-size:19px;letter-spacing:.04em}.kb-brand small{display:block;margin-top:2px;color:#536174;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.kb-links{display:flex;gap:28px;color:#536174;font-size:14px;font-weight:800}.kb-links a:hover{color:#142033}.kb-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;padding:13px 20px;font-weight:800;font-size:15px;line-height:1;background:#142033;color:#fff;cursor:pointer}.kb-btn-primary{background:#f05a28;color:#fff}.kb-btn-primary:hover{background:#d94d20}.kb-btn-ghost{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.1);color:#fff}.kb-btn-ghost:hover{background:rgba(255,255,255,.18)}.kb-hero{position:relative;background:#142033;color:#fff}.kb-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px),radial-gradient(circle at 75% 20%,rgba(30,99,214,.36),transparent 36%),linear-gradient(120deg,rgba(20,32,51,.96),rgba(20,32,51,.78));background-size:44px 44px,44px 44px,auto,auto}.kb-hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;padding:88px 0}.kb-eyebrow,.kb-label{margin:0;color:#f05a28;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.kb-eyebrow{display:inline-block;color:#dce5f0;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);padding:9px 12px}.kb-hero h1{max-width:850px;margin:24px 0 0;font-size:58px;line-height:1.05;letter-spacing:0}.kb-hero-text{max-width:680px;margin:24px 0 0;color:#d4deea;font-size:18px;line-height:1.75}.kb-cta-row{display:flex;flex-wrap:wrap;gap:13px;margin-top:34px}.kb-proof{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:650px;margin-top:36px}.kb-proof div{border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.08);padding:16px}.kb-proof strong,.kb-proof span{display:block}.kb-proof span{margin-top:6px;color:#cbd7e5;font-size:12px}.kb-industrial-card{background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(244,247,251,.92)),repeating-linear-gradient(90deg,rgba(83,97,116,.08) 0 1px,transparent 1px 8px);border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(20,32,51,.2);color:#142033;min-height:520px;padding:28px}.kb-badge{float:right;background:#10b981;color:#fff;padding:7px 11px;font-size:12px;font-weight:900;text-transform:uppercase}.kb-chip-grid{clear:both;display:grid;grid-template-columns:1fr 1fr;gap:16px;padding-top:48px}.kb-chip{min-height:140px;background:#fff;border:1px solid #dde3eb;padding:22px;box-shadow:0 4px 16px rgba(20,32,51,.06)}.kb-chip span{display:block;width:64px;height:8px;margin-bottom:28px;background:#1e63d6}.kb-chip strong{display:block;font-size:34px}.kb-chip p{margin:8px 0 0;color:#536174}.kb-dark-box{display:flex;gap:14px;margin-top:16px;padding:22px;background:#142033;color:#fff}.kb-dark-box strong{display:block;font-size:18px}.kb-dark-box p{margin:8px 0 0;color:#cbd7e5;line-height:1.6}.kb-orange{color:#f05a28}.kb-blue{color:#1e63d6}.kb-section{padding:82px 0}.kb-white{background:#fff}.kb-section-title{max-width:820px}.kb-section h2{margin:14px 0 0;font-size:40px;line-height:1.15}.kb-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}.kb-card{background:#fff;border:1px solid #dde3eb;padding:28px;box-shadow:0 4px 16px rgba(20,32,51,.04);transition:transform .18s,box-shadow .18s}.kb-card:hover{transform:translateY(-4px);box-shadow:0 18px 55px rgba(20,32,51,.12)}.kb-card h3{margin:22px 0 0;font-size:21px}.kb-card p,.kb-muted,.kb-reason p{color:#536174;line-height:1.7}.kb-card a{display:inline-flex;align-items:center;gap:7px;margin-top:18px;color:#f05a28;font-weight:900}.kb-app{display:flex;align-items:center;justify-content:space-between;min-height:112px;background:#f7f9fc;border:1px solid #dde3eb;padding:25px;font-size:19px;font-weight:900}.kb-app:hover{border-color:#1e63d6;background:#fff;box-shadow:0 4px 16px rgba(20,32,51,.06)}.kb-two{display:grid;grid-template-columns:.85fr 1.15fr;gap:46px}.kb-reason-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.kb-reason{background:#fff;border-left:4px solid #f05a28;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.kb-reason h3{margin:18px 0 0}.kb-dark{background:#142033;color:#fff}.kb-dark h2{color:#fff}.kb-dark p:not(.kb-label){color:#d4deea;line-height:1.7}.kb-steps{display:grid;gap:14px}.kb-step{display:flex;align-items:center;gap:18px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);padding:20px;font-weight:900}.kb-step span{display:grid;place-items:center;width:42px;height:42px;background:#1e63d6;color:#fff}.kb-contact{display:grid;grid-template-columns:.9fr 1.1fr;gap:28px;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.12)}.kb-contact-info{background:#eef2f7;padding:30px}.kb-contact-info h2{margin:14px 0 0;font-size:34px;line-height:1.15}.kb-contact-info p{color:#536174;line-height:1.7}.kb-contact-info a{display:flex;align-items:center;gap:11px;margin-top:17px;font-weight:800}.kb-contact-info svg{color:#1e63d6}.kb-form{display:grid;gap:16px}.kb-form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}.kb-form label{display:grid;gap:8px;font-size:14px;font-weight:900}.kb-form input,.kb-form textarea{width:100%;border:1px solid #cbd5e1;background:#fff;padding:14px;font:inherit;outline:none}.kb-form input:focus,.kb-form textarea:focus{border-color:#1e63d6}.kb-form textarea{min-height:145px;resize:vertical}@media(max-width:960px){.kb-links{display:none}.kb-hero-grid,.kb-two,.kb-contact{grid-template-columns:1fr}.kb-hero h1{font-size:42px}.kb-grid-3{grid-template-columns:1fr 1fr}.kb-industrial-card{min-height:auto}.kb-proof{grid-template-columns:1fr}.kb-form-row{grid-template-columns:1fr}}@media(max-width:640px){.kb-wrap{width:min(100% - 32px,1180px)}.kb-nav-inner{gap:12px}.kb-brand small{display:none}.kb-nav-cta{padding:11px 14px}.kb-hero-grid{padding:64px 0}.kb-hero h1{font-size:34px}.kb-hero-text{font-size:16px}.kb-grid-3,.kb-reason-grid,.kb-chip-grid{grid-template-columns:1fr}.kb-section{padding:62px 0}.kb-section h2{font-size:30px}.kb-contact{padding:20px}.kb-contact-info{padding:24px}.kb-btn{width:100%}}
`;
