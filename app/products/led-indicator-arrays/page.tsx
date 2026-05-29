import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Cpu, Factory, Mail, MessageCircle, Rows3, ShieldCheck } from "lucide-react";
import { catalogStyles } from "../styles";
import { indicatorProducts } from "./data";

export const metadata: Metadata = {
  title: "LED Indicator Arrays Manufacturer | 3mm Multi-Hole LED Indicators",
  description:
    "KINGBRIGHT LED Indicator Arrays for industrial control panels, PLC systems, power cabinets, telecommunications equipment and automation status indication.",
  keywords: [
    "LED indicator arrays",
    "3mm LED indicator",
    "multi hole LED indicator",
    "PCB LED indicator",
    "industrial control panel LED",
    "KINGBRIGHT LED indicator"
  ],
  openGraph: {
    title: "LED Indicator Arrays Manufacturer | KINGBRIGHT",
    description:
      "3mm one-hole, two-hole, three-hole and four-hole LED indicator arrays for industrial equipment and control panel applications.",
    url: "/products/led-indicator-arrays",
    type: "website"
  }
};

export default function LedIndicatorArraysPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LED Indicator Arrays",
    description:
      "KINGBRIGHT 3mm LED indicator array catalog for industrial control panels, PLC systems, instrumentation and automation equipment.",
    url: "https://www.kbrighter.com/products/led-indicator-arrays"
  };

  return (
    <main className="catalog-page indicator-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + indicatorCategoryStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="indicator-hero">
        <div className="catalog-wrap indicator-hero-grid">
          <div>
            <p className="catalog-eyebrow">LED Indicator Arrays</p>
            <h1>3mm LED Indicator Arrays for Industrial Control Panels</h1>
            <p className="catalog-lead">
              KINGBRIGHT supplies one-hole, two-hole, three-hole and four-hole LED indicator arrays for PCB-mounted
              status indication in control cabinets, PLC systems, instrumentation and automation equipment.
            </p>
            <div className="catalog-cta-row">
              <a className="catalog-btn catalog-btn-primary" href="#inquiry">Request Quotation <ArrowRight size={18} /></a>
              <a className="catalog-btn catalog-btn-ghost" href="#products">Review Indicator Models</a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=LED%20Indicator%20Array%20Sample%20Request">Request Samples</a>
            </div>
          </div>
          <div className="indicator-hero-card">
            <Rows3 size={42} />
            <h2>Compact Multi-Status LED Display</h2>
            <p>
              Black housing, 3mm LED lamps, multiple color combinations and PCB-friendly package options help engineers
              build clear equipment status displays without using separate discrete indicators.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Product Range" title="LED Indicator Array Product Series" />
          <div className="indicator-product-grid">
            {indicatorProducts.map((product) => (
              <Link href={`/products/led-indicator-arrays/${product.slug}`} key={product.slug} className="indicator-card">
                <img src={product.image} alt={product.imageAlt} loading="lazy" />
                <p>{product.channels}</p>
                <h2>{product.name}</h2>
                <span>{product.description}</span>
                <ul>
                  <li>{product.packageSize}</li>
                  <li>{product.viewingAngle}</li>
                  <li>{product.packaging}</li>
                </ul>
                <strong>View Specifications <ArrowRight size={16} /></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap indicator-two">
          <div>
            <SectionTitle eyebrow="Engineering Use" title="Built for Clear Machine Status Indication" />
            <div className="indicator-copy">
              <p>
                LED indicator arrays are used when engineers need several visible signal points in a compact, repeatable
                mechanical format. Instead of placing several separate lamps on the PCB, the integrated black housing
                keeps the LED positions aligned and gives panel builders a cleaner front-view appearance.
              </p>
              <p>
                The 3mm lamp format is suitable for red, yellow, green, purple and blue status indication. Typical use
                cases include power, run, fault, communication, charging, alarm and mode indication in export-oriented
                equipment. Color combinations can be selected according to customer logic and panel labeling.
              </p>
            </div>
          </div>
          <div className="indicator-feature-box">
            <Factory size={36} />
            <h2>OEM Project Support</h2>
            <p>
              KINGBRIGHT can support color combination review, brightness matching, sample confirmation, export packing
              communication and PCBA integration discussion for industrial electronics projects.
            </p>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap indicator-two">
          <div>
            <SectionTitle eyebrow="Applications" title="Typical Application Areas" />
            <div className="indicator-pill-grid">
              {[
                "Industrial Control Panels",
                "PLC Systems",
                "Power Distribution Cabinets",
                "Telecommunications Equipment",
                "Instrumentation Systems",
                "Alarm Systems",
                "Status Indicators",
                "Automation Equipment"
              ].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Advantages" title="Why Buyers Choose Indicator Arrays" />
            <div className="indicator-check-list">
              {[
                "Aligned multi-position LED layout",
                "Black housing improves panel contrast",
                "Multiple color combinations for signal logic",
                "Through-hole mounting for stable PCB assembly",
                "Compact design for dense control equipment",
                "OEM customization discussion available"
              ].map((item) => <div key={item}><BadgeCheck size={20} />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="FAQ" title="LED Indicator Array Buyer Questions" />
          <div className="indicator-faq-grid">
            <Faq question="What is an LED indicator array?" answer="It is a compact PCB-mounted indicator component that combines multiple 3mm LED positions in one black housing for clear equipment status display." />
            <Faq question="Can the colors be customized?" answer="Standard combinations are listed on each product page. Special color combinations or brightness requirements can be reviewed for OEM projects." />
            <Faq question="Where are these indicators typically used?" answer="They are commonly used in PLC systems, industrial control panels, power cabinets, instrumentation, alarm systems and automation equipment." />
            <Faq question="Can KINGBRIGHT provide samples?" answer="Yes. Please send the target model, color combination, quantity, application and shipping details for sample support." />
          </div>
        </div>
      </section>

      <section id="inquiry" className="catalog-section catalog-dark">
        <div className="catalog-wrap catalog-two">
          <div>
            <p className="catalog-label">Indicator Array Inquiry</p>
            <h2>Send Your Panel Indicator Requirement</h2>
            <p>
              Share the hole count, color combination, target brightness, PCB layout, annual demand and application.
              KINGBRIGHT can support quotation, sample arrangement and engineering review.
            </p>
          </div>
          <div className="catalog-dark-actions">
            <a className="catalog-btn catalog-btn-primary" href="mailto:sales@kbrighter.com?subject=LED%20Indicator%20Array%20Quotation"><Mail size={18} /> Contact Sales Engineer</a>
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

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="indicator-faq">
      <ShieldCheck size={20} />
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

const indicatorCategoryStyles = `
.catalog-white{background:#fff}.indicator-hero{background:linear-gradient(135deg,#142033 0%,#1f314b 64%,#f05a28 64%,#f05a28 100%);color:#fff;padding:72px 0}.indicator-hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center}.indicator-hero h1{font-size:clamp(42px,6vw,76px);line-height:1.02;margin:0 0 24px}.indicator-hero .catalog-lead{color:#dbe4ef}.indicator-hero-card{background:#fff;color:#142033;border:1px solid rgba(255,255,255,.24);box-shadow:0 18px 55px rgba(0,0,0,.22);padding:32px}.indicator-hero-card svg{color:#f05a28}.indicator-hero-card h2{margin:18px 0 12px;font-size:28px}.indicator-hero-card p{margin:0;color:#536174;line-height:1.75}.indicator-product-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:34px}.indicator-card{background:#fff;border:1px solid #dde3eb;padding:18px;text-decoration:none;color:#142033;display:grid;gap:12px;transition:.16s ease}.indicator-card:hover{border-color:#f05a28;transform:translateY(-3px);box-shadow:0 18px 42px rgba(20,32,51,.12)}.indicator-card img{width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff}.indicator-card p{margin:0;color:#f05a28;font-weight:900;text-transform:uppercase;font-size:12px;letter-spacing:.08em}.indicator-card h2{margin:0;font-size:20px}.indicator-card span{color:#536174;line-height:1.6}.indicator-card ul{margin:0;padding:0;list-style:none;display:grid;gap:6px;color:#536174;font-size:13px;font-weight:800}.indicator-card strong{display:flex;gap:8px;align-items:center;color:#f05a28}.indicator-two{display:grid;grid-template-columns:1fr 1fr;gap:28px}.indicator-copy p{color:#536174;line-height:1.8;margin:0 0 18px}.indicator-feature-box{background:#fff;border:1px solid #dde3eb;padding:28px}.indicator-feature-box svg{color:#1e63d6}.indicator-feature-box h2{margin:16px 0 10px}.indicator-feature-box p{margin:0;color:#536174;line-height:1.75}.indicator-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.indicator-pill-grid span{background:#f7f9fc;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.indicator-check-list{display:grid;gap:12px;margin-top:28px}.indicator-check-list div{display:flex;gap:10px;align-items:center;background:#f7f9fc;border:1px solid #dde3eb;padding:16px;font-weight:900;color:#142033}.indicator-check-list svg{color:#1e63d6}.indicator-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:34px}.indicator-faq{background:#fff;border:1px solid #dde3eb;padding:22px}.indicator-faq svg{color:#f05a28}.indicator-faq h3{margin:12px 0 8px;font-size:20px}.indicator-faq p{margin:0;color:#536174;line-height:1.7}@media(max-width:1080px){.indicator-product-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:860px){.indicator-hero-grid,.indicator-two,.indicator-faq-grid{grid-template-columns:1fr}.indicator-hero{padding:52px 0}}@media(max-width:560px){.indicator-product-grid{grid-template-columns:1fr}.indicator-hero-card{padding:24px}}
`;
