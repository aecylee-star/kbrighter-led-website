import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Cpu, Mail, MessageCircle, RadioTower } from "lucide-react";
import { catalogStyles } from "../styles";
import { infraredSeries } from "./data";

export const metadata: Metadata = {
  title: "Infrared LED Manufacturer | IR Transmitting and Receiving Series",
  description:
    "KINGBRIGHT Infrared LED category for Chip IR, SMD IR, DIP IR, transmitter and receiver pairs, reflective IR sensors and long wavelength infrared series.",
  keywords: [
    "Infrared LED manufacturer",
    "IR LED",
    "SMD IR LED",
    "DIP IR LED",
    "IR transmitter receiver",
    "reflective IR sensor",
    "KINGBRIGHT infrared LED"
  ],
  openGraph: {
    title: "Infrared LED Manufacturer | KINGBRIGHT",
    description:
      "Infrared LED series for transmission, receiving, reflective sensing, remote control, optical detection and industrial electronics.",
    url: "/products/infrared-led",
    type: "website",
    images: [{ url: infraredSeries[1].image, alt: infraredSeries[1].imageAlt }]
  }
};

export default function InfraredLedPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Infrared LED",
    description:
      "KINGBRIGHT Infrared LED product series covering chip, SMD, DIP, transmitter receiver pairs, reflective sensors and long wavelength infrared components.",
    url: "https://www.kbrighter.com/products/infrared-led",
    hasPart: infraredSeries.map((series) => ({
      "@type": "Product",
      name: series.name,
      url: `https://www.kbrighter.com/products/infrared-led/${series.slug}`,
      image: `https://www.kbrighter.com${series.image}`
    }))
  };

  return (
    <main className="catalog-page infrared-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + infraredCategoryStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="infrared-hero">
        <div className="catalog-wrap infrared-hero-grid">
          <div>
            <p className="catalog-eyebrow">Infrared LED Components</p>
            <h1>Infrared LED Series for Sensing, Transmission and Optical Detection</h1>
            <p className="catalog-lead">
              KINGBRIGHT supplies chip, SMD, DIP, paired transmitter and receiver, reflective sensor and long wavelength
              infrared LED series for remote control, photoelectric sensing, smart devices and industrial electronics.
            </p>
            <div className="catalog-cta-row">
              <a className="catalog-btn catalog-btn-primary" href="#inquiry">Request Quotation <ArrowRight size={18} /></a>
              <a className="catalog-btn catalog-btn-ghost" href="#series">Review IR Series</a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=Infrared%20LED%20Sample%20Request">Request LED Samples</a>
            </div>
          </div>
          <div className="infrared-hero-card">
            <RadioTower size={44} />
            <h2>850nm / 940nm / 1400-1600nm Options</h2>
            <p>
              Select IR components by package type, wavelength, optical power, current range, viewing angle and packaging
              method using the specification tables converted from the supplied product files.
            </p>
          </div>
        </div>
      </section>

      <section id="series" className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Product Series" title="Infrared LED Product Series" />
          <div className="infrared-series-grid">
            {infraredSeries.map((series) => (
              <Link href={`/products/infrared-led/${series.slug}`} key={series.slug} className="infrared-card">
                <img src={series.image} alt={series.imageAlt} loading="lazy" />
                <p>{series.wavelengthSummary}</p>
                <h2>{series.name}</h2>
                <span>{series.description}</span>
                <ul>
                  <li>{series.packageSummary}</li>
                  <li>{series.currentSummary}</li>
                  <li>{series.packagingSummary}</li>
                </ul>
                <strong>View Specifications <ArrowRight size={16} /></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap infrared-two">
          <div>
            <SectionTitle eyebrow="Engineering Use" title="IR Components for Transmission and Detection" />
            <div className="infrared-copy">
              <p>
                Infrared LED components are used when equipment needs invisible or low-visible optical transmission,
                reflective sensing, remote control signaling or paired emitter and receiver detection. The series pages
                group models by package and application style so engineers can compare wavelength, power, voltage, current
                and viewing angle without opening separate model pages.
              </p>
              <p>
                The supplied specification data covers compact chip packages, higher-power SMD packages, through-hole DIP
                emitters, matched transmitter and receiver options, reflective IR sensors and long wavelength infrared
                components. For special wavelengths, optical power targets or customized sensing structures, KINGBRIGHT can
                review the project requirement before quotation and sample arrangement.
              </p>
            </div>
          </div>
          <div className="infrared-feature-box">
            <Cpu size={36} />
            <h2>OEM Selection Support</h2>
            <p>
              Share wavelength, package, drive current, detection distance, lens angle, annual demand and application
              environment. KINGBRIGHT can help match the right infrared LED series for your electronics project.
            </p>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap infrared-two">
          <div>
            <SectionTitle eyebrow="Applications" title="Typical Application Areas" />
            <div className="infrared-pill-grid">
              {[
                "Remote Controls",
                "Photoelectric Sensors",
                "Smart Home Devices",
                "Security Electronics",
                "Industrial Automation",
                "Optical Detection",
                "Medical Devices",
                "Consumer Electronics"
              ].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Advantages" title="Why Buyers Use KINGBRIGHT IR LEDs" />
            <div className="infrared-check-list">
              {[
                "Chip, SMD and DIP package coverage",
                "850nm, 940nm and long wavelength options",
                "Transmitting, receiving and reflective sensor series",
                "Specification tables converted from source files",
                "Sample and custom specification support",
                "B2B quotation workflow for OEM projects"
              ].map((item) => <div key={item}><BadgeCheck size={20} />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="catalog-section catalog-dark">
        <div className="catalog-wrap catalog-two">
          <div>
            <p className="catalog-label">Infrared LED Inquiry</p>
            <h2>Send Your IR LED Requirement</h2>
            <p>
              Send the target wavelength, package size, optical power, current, viewing angle, quantity and application.
              Our sales engineer can support quotation, datasheet confirmation and sample arrangement.
            </p>
          </div>
          <div className="catalog-dark-actions">
            <a className="catalog-btn catalog-btn-primary" href="mailto:sales@kbrighter.com?subject=Infrared%20LED%20Quotation"><Mail size={18} /> Contact Sales Engineer</a>
            <a className="catalog-btn catalog-btn-dark" href="https://wa.me/8613530144658"><MessageCircle size={18} /> Discuss Your Project</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="catalog-title">
      <p className="catalog-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

const infraredCategoryStyles = `
.catalog-white{background:#fff}.infrared-hero{background:linear-gradient(135deg,#142033 0%,#1f314b 62%,#f05a28 62%,#f05a28 100%);color:#fff}.infrared-hero-grid{display:grid;grid-template-columns:1.05fr .75fr;gap:44px;align-items:center;padding:86px 0}.infrared-hero h1{font-size:clamp(42px,6vw,74px);line-height:1.02;margin:24px 0 0}.infrared-hero .catalog-lead{color:#dce5f0}.infrared-hero-card{align-self:center;background:#fff;color:#142033;border:1px solid rgba(255,255,255,.22);padding:34px;box-shadow:0 18px 55px rgba(0,0,0,.18)}.infrared-hero-card svg{color:#1e63d6}.infrared-hero-card h2{margin:22px 0 12px;font-size:26px}.infrared-hero-card p{color:#536174;line-height:1.7}.infrared-series-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}.infrared-card{display:grid;gap:12px;background:#fff;border:1px solid #dde3eb;padding:16px;color:#142033;box-shadow:0 4px 16px rgba(20,32,51,.04)}.infrared-card img{width:100%;aspect-ratio:1.2/1;object-fit:contain;background:#fff;border:1px solid #eef2f7;padding:10px}.infrared-card p{margin:0;color:#f05a28;font-weight:900;font-size:13px}.infrared-card h2{font-size:22px;margin:0;line-height:1.2}.infrared-card span{color:#536174;line-height:1.65}.infrared-card ul{margin:0;padding:0;list-style:none;display:grid;gap:6px}.infrared-card li{color:#536174;font-weight:800}.infrared-card strong{display:inline-flex;align-items:center;gap:8px;color:#f05a28}.infrared-two{display:grid;grid-template-columns:1fr 1fr;gap:30px}.infrared-copy p{color:#536174;line-height:1.8;margin:0 0 18px}.infrared-feature-box{background:#fff;border:1px solid #dde3eb;padding:28px}.infrared-feature-box svg{color:#1e63d6}.infrared-feature-box h2{font-size:26px}.infrared-feature-box p{color:#536174;line-height:1.75}.infrared-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.infrared-pill-grid span{background:#fff;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.infrared-check-list{display:grid;gap:12px;margin-top:28px}.infrared-check-list div{display:flex;gap:10px;align-items:center;background:#fff;border:1px solid #dde3eb;padding:16px;font-weight:900;color:#142033}.infrared-check-list svg{color:#1e63d6}@media(max-width:980px){.infrared-hero-grid,.infrared-two{grid-template-columns:1fr}.infrared-series-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.infrared-hero-grid{padding:62px 0}.infrared-series-grid{grid-template-columns:1fr}.infrared-card img{aspect-ratio:1/1}}
`;
