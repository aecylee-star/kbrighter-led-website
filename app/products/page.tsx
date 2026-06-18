import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, CircuitBoard, Cpu, Lightbulb, Mail, Radio, Sparkles, Zap } from "lucide-react";
import { productCategories } from "./shared";
import { catalogStyles } from "./styles";

export const metadata: Metadata = {
  title: "LED Product Catalog | SMD LED, DIP LED, IR LED and PCBA Support",
  description:
    "KINGBRIGHT LED product catalog for overseas B2B buyers, including SMD LED, Chip LED, DIP LED, COB LED, high power LED, infrared LED, LED display components and PCBA support.",
  keywords: [
    "LED product catalog",
    "SMD LED manufacturer",
    "Chip LED manufacturer",
    "DIP LED supplier",
    "COB LED manufacturer",
    "high power LED",
    "infrared LED",
    "LED display components",
    "LED PCBA support"
  ],
  openGraph: {
    title: "LED Product Catalog | KINGBRIGHT LED Components",
    description:
      "Browse KINGBRIGHT LED product categories for lighting, display, industrial control, smart home and OEM PCBA projects.",
    url: "/products",
    type: "website",
    images: [{ url: "/images/products/chip-led/0201-front-light-led.png", alt: "KINGBRIGHT LED product catalog preview" }]
  }
};

const categoryIcons = [Sparkles, Cpu, Lightbulb, Boxes, Zap, Radio, Boxes, CircuitBoard];

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "KINGBRIGHT LED Product Catalog",
    url: "https://www.kbrighter.com/products",
    description:
      "Category-based LED product catalog covering SMD LED, Chip LED, DIP LED, COB LED, high power LED, infrared LED, LED display components and PCBA support."
  };

  return (
    <main className="catalog-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="catalog-hero">
        <div className="catalog-wrap catalog-hero-grid">
          <div>
            <p className="catalog-eyebrow">LED Product Catalog</p>
            <h1>LED Components and PCBA Support Organized by Product Category</h1>
            <p className="catalog-lead">
              Browse KINGBRIGHT product categories for SMD LED, Chip LED, DIP LED, COB LED,
              high power LED, infrared LED, LED display components and LED PCBA support. Each category is
              structured for overseas buyers, engineers and OEM sourcing teams.
            </p>
            <div className="catalog-cta-row">
              <a className="catalog-btn catalog-btn-primary" href="#categories">Review Product Categories <ArrowRight size={18} /></a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com">Request Product Recommendation</a>
            </div>
          </div>
          <div className="catalog-panel">
            <Cpu size={44} />
            <strong>Engineering-Oriented LED Selection</strong>
            <p>Choose products by package, application, electrical parameters, assembly method and project requirement.</p>
          </div>
        </div>
      </section>

      <section id="categories" className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Product Categories" title="Select the Right LED Product Family" />
          <div className="catalog-category-grid">
            {productCategories.map((category, index) => {
              const Icon = categoryIcons[index] ?? Sparkles;
              const previewProduct = category.products.find((product) => product.image);
              return (
                <Link className="catalog-category-card" href={`/products/${category.slug}`} key={category.slug}>
                  {previewProduct?.image ? (
                    <img
                      className="catalog-category-image"
                      src={previewProduct.image}
                      alt={previewProduct.imageAlt ?? category.name}
                      loading="lazy"
                    />
                  ) : (
                    <Icon size={34} />
                  )}
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <span>Open Category <ArrowRight size={16} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-dark">
        <div className="catalog-wrap catalog-two">
          <div>
            <p className="catalog-label">B2B Product Selection</p>
            <h2>Need Help Matching LED Components to Your Application?</h2>
            <p>
              Send your LED package, color, CCT, CRI, wavelength, voltage, current,
              application and annual demand. KINGBRIGHT can help review suitable product
              categories and next-step sample options.
            </p>
          </div>
          <div className="catalog-dark-actions">
            <a className="catalog-btn catalog-btn-primary" href="mailto:sales@kbrighter.com"><Mail size={18} /> Contact Sales Engineer</a>
            <a className="catalog-btn catalog-btn-dark" href="mailto:sales@kbrighter.com?subject=OEM%20LED%20Inquiry">OEM Inquiry</a>
            <a className="catalog-btn catalog-btn-dark" href="mailto:sales@kbrighter.com?subject=Request%20LED%20Samples">Request Samples</a>
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
