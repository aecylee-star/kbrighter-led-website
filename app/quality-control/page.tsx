import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Factory, Mail, Microscope, PackageCheck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "LED Manufacturing & Quality Control | KINGBRIGHT",
  description:
    "Review KINGBRIGHT LED manufacturing process and quality control workflow, including LED die bonding, wire bonding, dispensing, binning, incoming inspection, in-process QC and final shipment inspection.",
  keywords: [
    "LED quality control",
    "LED manufacturing process",
    "LED die bonding process",
    "LED wire bonding process",
    "LED dispensing process",
    "LED binning process",
    "SMD LED factory inspection",
    "LED packaging manufacturer"
  ],
  openGraph: {
    title: "LED Manufacturing & Quality Control | KINGBRIGHT",
    description:
      "KINGBRIGHT LED packaging and quality control workflow for overseas B2B buyers, engineers and OEM customers.",
    url: "/quality-control",
    type: "website"
  }
};

const processSteps = [
  {
    title: "LED Die Bonding Process",
    text: "LED chips are placed and bonded with controlled positioning to support stable electrical contact, thermal transfer and consistent optical output.",
    src: "/images/led-production-line/led-die-bonding-process.jpg",
    alt: "KINGBRIGHT LED die bonding process for SMD LED packaging",
    icon: Factory
  },
  {
    title: "LED Wire Bonding Process",
    text: "Wire bonding is controlled to maintain reliable chip-to-electrode connection and reduce electrical failure risk during long-term operation.",
    src: "/images/led-production-line/led-wire-bonding-process.jpg",
    alt: "KINGBRIGHT LED wire bonding process for LED component manufacturing",
    icon: Microscope
  },
  {
    title: "LED Dispensing Process",
    text: "Dispensing and encapsulation control help manage lens shape, phosphor distribution, color consistency and protection of the LED chip.",
    src: "/images/led-production-line/led-dispensing-process.png",
    alt: "KINGBRIGHT LED dispensing process and encapsulation production line",
    icon: PackageCheck
  },
  {
    title: "LED Binning Process",
    text: "Photoelectric binning separates LEDs by voltage, brightness and color parameters, helping OEM buyers receive more consistent production batches.",
    src: "/images/led-production-line/led-binning-process.png",
    alt: "KINGBRIGHT LED binning process for brightness and color consistency",
    icon: ClipboardCheck
  }
];

const qualitySteps = [
  {
    title: "Incoming Material Inspection",
    text: "Incoming materials are checked before production release, including LED chips, brackets, packaging materials and key purchased components.",
    src: "/images/led-production-line/led-incoming-quality-control.png",
    alt: "KINGBRIGHT incoming material inspection for LED packaging quality control"
  },
  {
    title: "In-Process Quality Control",
    text: "Process inspection is performed during LED packaging to monitor workmanship, process conditions, appearance and parameter stability.",
    src: "/images/led-production-line/led-in-process-quality-control.png",
    alt: "KINGBRIGHT in-process quality control for LED manufacturing"
  },
  {
    title: "Final Shipment Inspection",
    text: "Final inspection confirms appearance, labels, packing method, documentation and shipment readiness before products are released.",
    src: "/images/led-production-line/led-final-inspection.png",
    alt: "KINGBRIGHT final shipment inspection for LED components"
  }
];

const buyerControls = [
  "Specification review for package size, voltage, current, wavelength, CCT, CRI and luminous flux",
  "Process control for die bonding, wire bonding, dispensing, curing, binning and packing",
  "Batch consistency review for brightness, color and electrical parameters",
  "Sample, datasheet and quality document support for overseas engineering teams"
];

export default function QualityControlPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "LED Manufacturing & Quality Control",
    url: "https://www.kbrighter.com/quality-control",
    description:
      "KINGBRIGHT LED manufacturing process and quality control workflow for SMD LED, DIP LED, LED packaging and PCBA support."
  };

  return (
    <main className="qc-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="qc-hero">
        <div className="qc-wrap qc-hero-grid">
          <div>
            <p className="qc-eyebrow">Manufacturing & Quality Control</p>
            <h1>LED Packaging Process and Quality Control for Stable Batch Supply</h1>
            <p className="qc-lead">
              KINGBRIGHT supports overseas buyers with process-controlled LED packaging,
              photoelectric binning and practical inspection workflow from incoming materials
              to final shipment release.
            </p>
            <div className="qc-cta-row">
              <a className="qc-btn qc-btn-primary" href="#contact">Request Quality Documents <ArrowRight size={18} /></a>
              <a className="qc-btn qc-btn-ghost" href="#process">Review Manufacturing Process</a>
              <a className="qc-btn qc-btn-ghost" href="#inspection">Review Inspection Workflow</a>
            </div>
          </div>
          <figure className="qc-hero-card">
            <img
              src="/images/led-production-line/led-binning-process.png"
              alt="KINGBRIGHT LED binning and production process for quality controlled LED packaging"
              width="720"
              height="460"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>
              <strong>Controlled LED Production Workflow</strong>
              <span>Process control, binning and inspection for stable LED component supply.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="process" className="qc-section">
        <div className="qc-wrap">
          <SectionTitle eyebrow="Manufacturing Process" title="Key LED Packaging Steps Controlled in Production" />
          <div className="qc-grid-4">
            {processSteps.map((item) => (
              <article className="qc-card" key={item.title}>
                <img src={item.src} alt={item.alt} width="720" height="460" loading="lazy" />
                <div>
                  <item.icon size={28} />
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="inspection" className="qc-section qc-white">
        <div className="qc-wrap">
          <SectionTitle eyebrow="Quality Control" title="Inspection Workflow from Materials to Shipment" />
          <div className="qc-grid-3">
            {qualitySteps.map((item, index) => (
              <article className="qc-inspection" key={item.title}>
                <img src={item.src} alt={item.alt} width="720" height="460" loading="lazy" />
                <div>
                  <span>0{index + 1}</span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qc-section qc-dark">
        <div className="qc-wrap qc-two">
          <div>
            <p className="qc-label">For Overseas Buyers</p>
            <h2>Quality Communication Built Around Engineering Requirements</h2>
            <p>
              LED buyers often need more than a price list. KINGBRIGHT helps review
              technical requirements, application conditions, binning expectations and
              quality documentation before sample approval and repeat production.
            </p>
          </div>
          <div className="qc-check-list">
            {buyerControls.map((item) => (
              <div key={item}><ShieldCheck size={20} />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="qc-section qc-contact">
        <div className="qc-wrap qc-contact-box">
          <div>
            <p className="qc-label">Discuss Your Requirement</p>
            <h2>Request LED Samples, Datasheets or Quality Documents</h2>
            <p>
              Send your LED package, color, electrical rating, target application and annual
              demand. Our sales engineer can help provide datasheet support, sample direction
              and project communication.
            </p>
          </div>
          <div className="qc-actions">
            <a className="qc-btn qc-btn-primary" href="mailto:sales@kbrighter.com?subject=Request%20Quality%20Documents"><Mail size={18} /> Request Quality Documents</a>
            <a className="qc-btn qc-btn-dark" href="mailto:sales@kbrighter.com?subject=Request%20LED%20Samples">Request LED Samples</a>
            <Link className="qc-btn qc-btn-dark" href="/about-factory">Review About Factory</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="qc-title">
      <p className="qc-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

const styles = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.qc-page{min-height:100vh;background:#f7f9fc;color:#142033;font-family:Inter,Arial,Helvetica,sans-serif}.qc-page a{text-decoration:none;color:inherit}.qc-wrap{width:min(1180px,calc(100% - 44px));margin:0 auto}.qc-hero{position:relative;background:#142033;color:#fff}.qc-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px),radial-gradient(circle at 75% 20%,rgba(30,99,214,.34),transparent 36%),linear-gradient(120deg,rgba(20,32,51,.96),rgba(20,32,51,.78));background-size:44px 44px,44px 44px,auto,auto}.qc-hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .75fr;gap:56px;padding:88px 0}.qc-eyebrow,.qc-label{margin:0;color:#f05a28;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.qc-eyebrow{display:inline-block;color:#dce5f0;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);padding:9px 12px}.qc-hero h1{margin:24px 0 0;font-size:56px;line-height:1.05}.qc-lead{max-width:720px;margin:24px 0 0;color:#d4deea;font-size:18px;line-height:1.75}.qc-cta-row{display:flex;flex-wrap:wrap;gap:13px;margin-top:34px}.qc-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;padding:13px 20px;font-weight:900;font-size:15px;background:#142033;color:#fff}.qc-btn-primary{background:#f05a28;color:#fff}.qc-btn-ghost{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.1);color:#fff}.qc-btn-dark{background:#142033;color:#fff}.qc-hero-card{align-self:center;margin:0;background:#fff;color:#142033;box-shadow:0 18px 55px rgba(20,32,51,.2);overflow:hidden}.qc-hero-card img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:#e8eef6}.qc-hero-card figcaption{padding:24px}.qc-hero-card strong,.qc-hero-card span{display:block}.qc-hero-card strong{font-size:24px;line-height:1.2}.qc-hero-card span{margin-top:8px;color:#536174;line-height:1.6}.qc-section{padding:82px 0}.qc-white{background:#fff}.qc-title{max-width:860px}.qc-section h2{margin:14px 0 0;font-size:40px;line-height:1.15}.qc-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}.qc-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}.qc-card,.qc-inspection{background:#fff;border:1px solid #dde3eb;box-shadow:0 4px 16px rgba(20,32,51,.05);overflow:hidden}.qc-card img,.qc-inspection img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:#e8eef6}.qc-card div,.qc-inspection div{padding:20px}.qc-card svg{color:#1e63d6}.qc-card h2,.qc-inspection h2{font-size:20px}.qc-card p,.qc-inspection p,.qc-contact p{color:#536174;line-height:1.7}.qc-inspection span{display:grid;place-items:center;width:42px;height:42px;background:#1e63d6;color:#fff;font-weight:900}.qc-dark{background:#142033;color:#fff}.qc-dark h2{color:#fff}.qc-dark p:not(.qc-label){color:#d4deea;line-height:1.7}.qc-two{display:grid;grid-template-columns:.9fr 1.1fr;gap:46px}.qc-check-list{display:grid;gap:14px}.qc-check-list div{display:flex;gap:12px;align-items:center;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);padding:18px;font-weight:900}.qc-contact{padding-top:0}.qc-contact-box{display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.12)}.qc-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}@media(max-width:1100px){.qc-grid-4{grid-template-columns:repeat(2,1fr)}}@media(max-width:900px){.qc-hero-grid,.qc-two,.qc-contact-box{grid-template-columns:1fr}.qc-hero h1{font-size:42px}.qc-grid-3{grid-template-columns:1fr 1fr}.qc-actions{justify-content:flex-start}}@media(max-width:640px){.qc-wrap{width:min(100% - 32px,1180px)}.qc-hero-grid{padding:62px 0}.qc-hero h1{font-size:34px}.qc-lead{font-size:16px}.qc-section{padding:62px 0}.qc-section h2{font-size:30px}.qc-grid-4,.qc-grid-3{grid-template-columns:1fr}.qc-btn{width:100%}}
`;
