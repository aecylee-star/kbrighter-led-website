import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Download, FileText, FolderDown, Mail, ShieldCheck, Wrench } from "lucide-react";
import { resourceStyles } from "../resources/styles";

export const metadata: Metadata = {
  title: "Download Center | KINGBRIGHT LED Catalog & Company Profiles",
  description:
    "Download KINGBRIGHT LED product catalog, LED company profile, PCBA company profile, datasheets and technical documents for overseas B2B buyers and engineering teams.",
  keywords: [
    "KINGBRIGHT download center",
    "KINGBRIGHT LED catalog",
    "KINGBRIGHT company profile",
    "KINGBRIGHT PCBA profile",
    "LED datasheets",
    "SMD LED datasheet",
    "LED product catalog",
    "LED certificates",
    "LED technical documents"
  ],
  openGraph: {
    title: "Download Center | KINGBRIGHT LED Catalog & Company Profiles",
    description:
      "Download KINGBRIGHT LED product catalog, LED company profile, PCBA company profile and technical documents for B2B project review.",
    url: "/download-center",
    type: "website"
  }
};

const featuredDownloads = [
  {
    title: "KINGBRIGHT LED Product Catalog",
    description:
      "Product overview for LED components including SMD LED, DIP LED, high power LED, infrared LED, display LED components and related product categories.",
    href: "/downloads/kingbright-led-product-catalog.pdf",
    cta: "Download Catalog",
    meta: "PDF / Product catalog",
    icon: FolderDown
  },
  {
    title: "KINGBRIGHT LED Company Profile",
    description:
      "Factory and capability introduction for LED packaging, LED component supply, quality control, engineering support and export cooperation.",
    href: "/downloads/kingbright-led-company-profile.pdf",
    cta: "Download Company Profile",
    meta: "PDF / LED company profile",
    icon: Building2
  },
  {
    title: "KINGBRIGHT PCBA Company Profile",
    description:
      "PCBA capability overview for SMT production, inspection, testing, LED module support and OEM electronics project communication.",
    href: "/downloads/kingbright-pcba-company-profile.pdf",
    cta: "Download PCBA Capability",
    meta: "PDF / PCBA capability profile",
    icon: ShieldCheck
  }
];

const sections = [
  {
    title: "Product Catalog",
    text: "Overview catalog for SMD LED, DIP LED, high power LED, infrared LED, display components and PCBA support.",
    icon: FolderDown
  },
  {
    title: "LED Datasheets",
    text: "Product-specific datasheets for 2835 0.2W, 2835 0.5W, 3030 SMD LED, 3535 SMD LED, 1414 COB LED, 1919 COB LED, 2828 COB LED and other LED component models.",
    icon: FileText
  },
  {
    title: "Company Profile",
    text: "Factory introduction, LED packaging capability, engineering support and OEM/ODM service overview.",
    icon: Building2
  },
  {
    title: "Certifications",
    text: "Placeholders for ISO, RoHS, CE and other certificates for buyer review.",
    icon: ShieldCheck
  },
  {
    title: "Technical Documents",
    text: "Reflow soldering guidance, packaging instructions, binning information and handling precautions.",
    icon: Wrench
  }
];

export default function DownloadCenterPage() {
  return (
    <main className="res-page">
      <style dangerouslySetInnerHTML={{ __html: resourceStyles + downloadStyles }} />
      <header className="res-hero">
        <div className="res-wrap res-hero-grid">
          <div>
            <p className="res-eyebrow">Download Center</p>
            <h1>LED Product Catalog, Company Profiles and Technical Documents</h1>
            <p className="res-lead">
              Download KINGBRIGHT documents for LED component selection, factory review,
              PCBA capability evaluation, purchasing approval and OEM project communication.
            </p>
            <div className="res-cta-row">
              <a className="res-btn res-btn-primary" href="#featured-downloads">Download Company Files <ArrowRight size={18} /></a>
              <a className="res-btn res-btn-ghost" href="#datasheets">Review Product Datasheets</a>
            </div>
          </div>
          <div className="res-panel">
            <Download size={44} />
            <strong>Download Files for B2B Buyers</strong>
            <p>Use these official PDF documents to support supplier review, engineering approval, sourcing comparison and project communication.</p>
          </div>
        </div>
      </header>

      <section id="featured-downloads" className="res-section">
        <div className="res-wrap">
          <SectionTitle eyebrow="Official PDF Documents" title="Download KINGBRIGHT Catalog and Company Profiles" />
          <div className="download-card-grid">
            {featuredDownloads.map((item) => (
              <article className="download-card" key={item.title}>
                <div className="download-icon">
                  <item.icon size={34} />
                  <span>PDF</span>
                </div>
                <p className="download-meta">{item.meta}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a className="res-btn res-btn-primary" href={item.href} download>
                  <Download size={18} /> {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="datasheets" className="res-section res-white">
        <div className="res-wrap">
          <SectionTitle eyebrow="Document Categories" title="Download Files for Engineering and Purchasing Teams" />
          <div className="res-grid">
            {sections.map((section) => (
              <article className="res-card" key={section.title}>
                <section.icon size={34} />
                <h3>{section.title}</h3>
                <p>{section.text}</p>
                <a href="mailto:sales@kbrighter.com?subject=Technical%20Document%20Request">Request Technical File <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
          <div className="res-link-row">
            <Link href="/products/smd-led/2835-smd-led">2835 0.2W SMD LED Datasheet</Link>
            <Link href="/products/smd-led/2835-0-5w-smd-led">2835 0.5W SMD LED Datasheet</Link>
            <Link href="/products/smd-led/3030-smd-led">3030 SMD LED Datasheet</Link>
            <Link href="/products/smd-led/3535-smd-led">3535 SMD LED Datasheet</Link>
            <Link href="/products/cob-led/1414-cob-led">1414 COB LED Datasheet</Link>
            <Link href="/products/cob-led/1919-cob-led">1919 COB LED Datasheet</Link>
            <Link href="/products/cob-led/2828-cob-led">2828 COB LED Datasheet</Link>
            <Link href="/applications">Applications</Link>
            <Link href="/about-factory">Factory & Quality</Link>
          </div>
        </div>
      </section>

      <section className="res-section res-white">
        <div className="res-wrap res-contact">
          <div>
            <p className="res-label">Need a Specific File?</p>
            <h2>Request Catalogs, Samples or Engineering Documents</h2>
            <p>Tell us the product model, application and required document type. KINGBRIGHT can help provide relevant datasheets and support materials.</p>
          </div>
          <div className="res-actions">
            <a className="res-btn res-btn-primary" href="mailto:sales@kbrighter.com"><Mail size={18} /> Contact Sales Engineer</a>
            <a className="res-btn" href="/downloads/kingbright-led-product-catalog.pdf" download>Download Catalog</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const downloadStyles = `
.download-card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}.download-card{display:grid;gap:16px;background:#fff;border:1px solid #dde3eb;padding:28px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.download-icon{display:flex;align-items:center;justify-content:space-between}.download-icon svg{color:#1e63d6}.download-icon span{background:#142033;color:#fff;padding:7px 10px;font-size:12px;font-weight:900}.download-meta{margin:0;color:#f05a28!important;font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.download-card h2{margin:0!important;font-size:25px!important;line-height:1.2}.download-card p{color:#536174;line-height:1.7}.download-card .res-btn{align-self:end;margin-top:8px}@media(max-width:920px){.download-card-grid{grid-template-columns:1fr 1fr}}@media(max-width:640px){.download-card-grid{grid-template-columns:1fr}}
`;

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="res-title">
      <p className="res-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
