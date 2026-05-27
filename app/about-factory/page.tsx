import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, ClipboardCheck, Cpu, Factory, Globe2, Mail, Microscope, PackageCheck, ShieldCheck, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "About KINGBRIGHT Factory | LED Packaging & Quality Control",
  description:
    "Learn about KINGBRIGHT LED component manufacturing, LED packaging capability, PCBA support, OEM/ODM service, quality control, engineering support and export cooperation.",
  keywords: [
    "KINGBRIGHT factory",
    "LED components manufacturer",
    "LED packaging factory",
    "LED quality control",
    "LED PCBA support",
    "OEM ODM LED supplier",
    "SMD LED manufacturer"
  ],
  openGraph: {
    title: "About KINGBRIGHT Factory | LED Packaging & Quality Control",
    description:
      "Learn about KINGBRIGHT LED component manufacturing, LED packaging capability, PCBA support, OEM/ODM service, quality control, engineering support and export cooperation.",
    url: "/about-factory",
    type: "website"
  }
};

const factoryStats = [
  ["LED Packaging", "SMD, DIP, high power, infrared and display LED support"],
  ["PCBA Support", "Component selection, board-level discussion and project coordination"],
  ["OEM/ODM", "Custom LED and application-driven manufacturing support"],
  ["Export Service", "Communication for overseas buyers, distributors and OEM customers"]
];

const factoryOverview = [
  {
    title: "Production Workshop",
    text: "Organized LED component production environment for mass production and project-based supply.",
    icon: Factory
  },
  {
    title: "SMT Production Lines",
    text: "SMT and board-level support for LED modules, lighting electronics and PCBA projects.",
    icon: ClipboardCheck
  },
  {
    title: "LED Packaging Lines",
    text: "LED packaging process support for SMD LEDs, DIP LEDs, infrared LEDs and display components.",
    icon: PackageCheck
  },
  {
    title: "Engineering Capability",
    text: "Technical communication for package selection, current, voltage, CCT, CRI, brightness and PCBA needs.",
    icon: Cpu
  },
  {
    title: "Production Capacity",
    text: "Scalable production coordination for samples, pilot orders and repeat mass production demand.",
    icon: Wrench
  }
];

const qcSteps = [
  ["Incoming Material Inspection", "Inspect chips, brackets, phosphor, packaging materials and key incoming components before production."],
  ["Production Quality Control", "Monitor LED packaging, SMT, process parameters, bin consistency and production traceability."],
  ["Aging Test", "Use aging and burn-in processes to evaluate stability before delivery for selected products and projects."],
  ["Reliability Testing", "Support optical, electrical, thermal, ESD, soldering and environmental reliability checks according to project needs."],
  ["Final Inspection", "Confirm appearance, electrical parameters, optical bins, packaging and shipment information before dispatch."]
];

const engineering = [
  "LED package selection and specification review",
  "Custom CCT, CRI, brightness and wavelength discussion",
  "PCB footprint, soldering and PCBA integration support",
  "OEM project communication for lighting, display and electronics customers"
];

const certificates = ["ISO", "RoHS", "CE", "Other Certificates"];
const markets = ["Europe", "North America", "Southeast Asia", "Middle East", "South America", "OEM / ODM Projects"];

export default function AboutFactoryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KINGBRIGHT OPTO-ELECTRONIC CO., LTD",
    url: "https://www.kbrighter.com",
    email: "sales@kbrighter.com",
    description:
      "LED components manufacturer with LED packaging, PCBA support, OEM/ODM service and quality control capability."
  };

  return (
    <main className="factory-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="factory-hero">
        <div className="factory-wrap factory-hero-grid">
          <div>
            <p className="factory-eyebrow">About KINGBRIGHT Factory</p>
            <h1>LED Components Manufacturing, Packaging and Quality Control</h1>
            <p className="factory-lead">
              KINGBRIGHT supports overseas B2B buyers with LED components, LED packaging
              experience, PCBA project discussion, OEM/ODM cooperation and export-oriented
              communication for lighting, display, industrial control and electronics applications.
            </p>
            <div className="factory-cta-row">
              <a className="factory-btn factory-btn-primary" href="#contact">Contact Sales <ArrowRight size={18} /></a>
              <a className="factory-btn factory-btn-ghost" href="#quality">View Quality Control</a>
              <a className="factory-btn factory-btn-ghost" href="#engineering">Engineering Support</a>
            </div>
          </div>
          <div className="factory-panel">
            <Factory size={48} />
            <strong>Manufacturer Trust for Global Buyers</strong>
            <p>Factory capability, technical communication and quality control built for distributors, engineers and OEM customers.</p>
          </div>
        </div>
      </header>

      <section className="factory-section">
        <div className="factory-wrap">
          <SectionTitle eyebrow="Company Introduction" title="LED Components Manufacturer with Packaging and PCBA Support" />
          <div className="factory-stat-grid">
            {factoryStats.map(([title, text]) => (
              <div className="factory-stat" key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="factory-section factory-white">
        <div className="factory-wrap">
          <SectionTitle eyebrow="Factory Overview" title="Production Capability for LED and Electronics Projects" />
          <div className="factory-grid">
            {factoryOverview.map((item) => (
              <article className="factory-card" key={item.title}>
                <item.icon className="factory-blue" size={34} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quality" className="factory-section">
        <div className="factory-wrap factory-two">
          <div>
            <SectionTitle eyebrow="Quality Control System" title="Process Control from Incoming Materials to Final Inspection" />
            <p className="factory-muted">
              KINGBRIGHT presents quality control as a practical manufacturing system:
              material inspection, process monitoring, aging, reliability testing and final
              shipment checks for stable B2B cooperation.
            </p>
          </div>
          <div className="factory-qc-list">
            {qcSteps.map(([title, text], index) => (
              <div className="factory-qc" key={title}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engineering" className="factory-section factory-dark">
        <div className="factory-wrap factory-two">
          <div>
            <p className="factory-label">Engineering & R&D</p>
            <h2>Technical Support for Custom LED and PCBA Projects</h2>
            <p>
              KINGBRIGHT works with engineers and purchasing teams to clarify LED
              specifications, application requirements, packaging choices and board-level
              integration needs before sample approval and production.
            </p>
          </div>
          <div className="factory-dark-list">
            {engineering.map((item) => (
              <div key={item}><Microscope size={20} />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="factory-section">
        <div className="factory-wrap">
          <SectionTitle eyebrow="Certifications" title="Certificate Placeholders for Buyer Review" />
          <div className="factory-cert-grid">
            {certificates.map((item) => (
              <div className="factory-cert" key={item}>
                <ShieldCheck size={34} />
                <strong>{item}</strong>
                <span>Certificate image / PDF placeholder</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="factory-section factory-white">
        <div className="factory-wrap factory-two">
          <div>
            <SectionTitle eyebrow="Global Market" title="Export Cooperation and Long-Term OEM Partnerships" />
            <p className="factory-muted">
              KINGBRIGHT supports overseas buyers, distributors and OEM customers with
              responsive communication, sample coordination, technical documentation and
              repeat-order production support.
            </p>
          </div>
          <div className="factory-market-grid">
            {markets.map((item) => <div key={item}><Globe2 size={20} />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="factory-section">
        <div className="factory-wrap">
          <SectionTitle eyebrow="Factory Gallery" title="Workshop, Production and Testing Image Placeholders" />
          <div className="factory-gallery">
            {["Production Workshop", "SMT Production Lines", "LED Packaging Lines", "Aging Test", "Reliability Testing", "Final Inspection"].map((item) => (
              <div key={item}>
                <Factory size={38} />
                <strong>{item}</strong>
                <span>Image placeholder</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="factory-section factory-contact">
        <div className="factory-wrap factory-contact-box">
          <div>
            <p className="factory-label">Work with KINGBRIGHT</p>
            <h2>Send Your LED Component or PCBA Requirement</h2>
            <p>Contact sales for samples, catalog, datasheets or engineering support for your next OEM project.</p>
          </div>
          <div className="factory-contact-actions">
            <a className="factory-btn factory-btn-primary" href="mailto:sales@kbrighter.com"><Mail size={18} /> Contact Sales</a>
            <a className="factory-btn factory-btn-dark" href="mailto:sales@kbrighter.com?subject=Request%20Samples">Request Samples</a>
            <a className="factory-btn factory-btn-dark" href="mailto:sales@kbrighter.com?subject=Request%20Catalog">Request Catalog</a>
            <a className="factory-btn factory-btn-dark" href="mailto:sales@kbrighter.com?subject=Engineering%20Support">Engineering Support</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="factory-title">
      <p className="factory-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

const styles = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.factory-page{min-height:100vh;background:#f7f9fc;color:#142033;font-family:Inter,Arial,Helvetica,sans-serif}.factory-page a{text-decoration:none;color:inherit}.factory-wrap{width:min(1180px,calc(100% - 44px));margin:0 auto}.factory-hero{position:relative;background:#142033;color:#fff}.factory-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px),radial-gradient(circle at 75% 20%,rgba(30,99,214,.34),transparent 36%),linear-gradient(120deg,rgba(20,32,51,.96),rgba(20,32,51,.78));background-size:44px 44px,44px 44px,auto,auto}.factory-hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .75fr;gap:56px;padding:88px 0}.factory-eyebrow,.factory-label{margin:0;color:#f05a28;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.factory-eyebrow{display:inline-block;color:#dce5f0;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);padding:9px 12px}.factory-hero h1{margin:24px 0 0;font-size:56px;line-height:1.05}.factory-lead{max-width:720px;margin:24px 0 0;color:#d4deea;font-size:18px;line-height:1.75}.factory-cta-row{display:flex;flex-wrap:wrap;gap:13px;margin-top:34px}.factory-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;padding:13px 20px;font-weight:900;font-size:15px;background:#142033;color:#fff}.factory-btn-primary{background:#f05a28;color:#fff}.factory-btn-ghost{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.1);color:#fff}.factory-btn-dark{background:#142033;color:#fff}.factory-panel{align-self:center;background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(244,247,251,.92));color:#142033;border:1px solid rgba(255,255,255,.22);padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.2)}.factory-panel svg{color:#1e63d6}.factory-panel strong{display:block;margin-top:24px;font-size:27px;line-height:1.15}.factory-panel p{color:#536174;line-height:1.7}.factory-section{padding:82px 0}.factory-white{background:#fff}.factory-title{max-width:840px}.factory-section h2{margin:14px 0 0;font-size:40px;line-height:1.15}.factory-muted,.factory-card p,.factory-stat p{color:#536174;line-height:1.7}.factory-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}.factory-stat{background:#fff;border:1px solid #dde3eb;border-left:4px solid #f05a28;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.factory-stat strong{font-size:20px}.factory-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin-top:40px}.factory-card{background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.factory-card h2{font-size:20px}.factory-blue{color:#1e63d6}.factory-two{display:grid;grid-template-columns:.9fr 1.1fr;gap:46px}.factory-qc-list{display:grid;gap:14px}.factory-qc{display:flex;gap:18px;background:#fff;border:1px solid #dde3eb;padding:20px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.factory-qc span{display:grid;place-items:center;flex:0 0 42px;height:42px;background:#1e63d6;color:#fff;font-weight:900}.factory-qc p{margin:8px 0 0;color:#536174;line-height:1.6}.factory-dark{background:#142033;color:#fff}.factory-dark h2{color:#fff}.factory-dark p:not(.factory-label){color:#d4deea;line-height:1.7}.factory-dark-list{display:grid;gap:14px}.factory-dark-list div{display:flex;gap:12px;align-items:center;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);padding:18px;font-weight:900}.factory-cert-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}.factory-cert{background:#fff;border:1px solid #dde3eb;padding:26px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.factory-cert svg{color:#1e63d6}.factory-cert strong,.factory-cert span{display:block}.factory-cert strong{margin-top:18px;font-size:20px}.factory-cert span{margin-top:8px;color:#536174}.factory-market-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.factory-market-grid div{display:flex;gap:10px;align-items:center;background:#fff;border:1px solid #dde3eb;padding:18px;font-weight:900}.factory-market-grid svg{color:#1e63d6}.factory-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}.factory-gallery div{display:grid;place-items:center;min-height:220px;background:linear-gradient(135deg,#eef2f7,#fff);border:1px solid #dde3eb;text-align:center;padding:22px}.factory-gallery svg{color:#1e63d6}.factory-gallery strong,.factory-gallery span{display:block}.factory-gallery strong{margin-top:16px}.factory-gallery span{margin-top:8px;color:#536174}.factory-contact{padding-top:0}.factory-contact-box{display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.12)}.factory-contact-box p:not(.factory-label){color:#536174;line-height:1.7}.factory-contact-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:1100px){.factory-grid{grid-template-columns:repeat(3,1fr)}.factory-stat-grid,.factory-cert-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:900px){.factory-hero-grid,.factory-two,.factory-contact-box{grid-template-columns:1fr}.factory-hero h1{font-size:42px}.factory-contact-actions{justify-content:flex-start}.factory-gallery{grid-template-columns:1fr 1fr}}@media(max-width:640px){.factory-wrap{width:min(100% - 32px,1180px)}.factory-hero-grid{padding:62px 0}.factory-hero h1{font-size:34px}.factory-lead{font-size:16px}.factory-section{padding:62px 0}.factory-section h2{font-size:30px}.factory-grid,.factory-stat-grid,.factory-cert-grid,.factory-market-grid,.factory-gallery{grid-template-columns:1fr}.factory-btn{width:100%}}
`;
