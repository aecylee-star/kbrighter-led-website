import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Download, FileText, FolderDown, Mail, ShieldCheck, Wrench } from "lucide-react";
import { resourceStyles } from "../resources/styles";

export const metadata: Metadata = {
  title: "Download Center | KINGBRIGHT LED Datasheets, Catalogs & Certificates",
  description:
    "Download KINGBRIGHT LED product catalogs, SMD LED datasheets, company profile, certifications and technical documents for engineering and purchasing teams.",
  keywords: [
    "KINGBRIGHT download center",
    "LED datasheets",
    "SMD LED datasheet",
    "LED product catalog",
    "LED certificates",
    "LED technical documents"
  ],
  openGraph: {
    title: "Download Center | KINGBRIGHT LED Datasheets, Catalogs & Certificates",
    description:
      "Download KINGBRIGHT LED product catalogs, SMD LED datasheets, company profile, certifications and technical documents for engineering and purchasing teams.",
    url: "/download-center",
    type: "website"
  }
};

const sections = [
  {
    title: "Product Catalog",
    text: "Overview catalog for SMD LED, DIP LED, high power LED, infrared LED, display components and PCBA support.",
    icon: FolderDown
  },
  {
    title: "LED Datasheets",
    text: "Product-specific datasheets for 2835 0.2W, 2835 0.5W, 3030 SMD LED, 3535 SMD LED and other LED component models.",
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
      <style dangerouslySetInnerHTML={{ __html: resourceStyles }} />
      <header className="res-hero">
        <div className="res-wrap res-hero-grid">
          <div>
            <p className="res-eyebrow">Download Center</p>
            <h1>LED Datasheets, Catalogs and Technical Documents</h1>
            <p className="res-lead">
              Access KINGBRIGHT product documents for LED component selection, engineering
              review, purchasing evaluation and OEM project communication.
            </p>
            <div className="res-cta-row">
              <a className="res-btn res-btn-primary" href="#downloads">Browse Technical Documents <ArrowRight size={18} /></a>
              <a className="res-btn res-btn-ghost" href="mailto:sales@kbrighter.com">Get Product Datasheet</a>
            </div>
          </div>
          <div className="res-panel">
            <Download size={44} />
            <strong>Technical Files for B2B Buyers</strong>
            <p>Use this page to support engineering review, sample approval and purchasing decisions.</p>
          </div>
        </div>
      </header>

      <section id="downloads" className="res-section">
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
            <a className="res-btn" href="mailto:sales@kbrighter.com?subject=Request%20Product%20Catalog">Get Product Catalog</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="res-title">
      <p className="res-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
