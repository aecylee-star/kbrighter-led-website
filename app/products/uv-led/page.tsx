import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Boxes } from "lucide-react";
import { catalogStyles } from "../styles";
import { getProductCategory } from "../shared";

const category = getProductCategory("uv-led");

export const metadata: Metadata = {
  title: category?.seoTitle ?? "UV LED Manufacturer | KINGBRIGHT",
  description:
    category?.seoDescription ??
    "KINGBRIGHT UV LED catalog including UVA LED, UVC LED and UVC+UVA sterilization LED components.",
  openGraph: {
    title: category?.seoTitle ?? "UV LED Manufacturer | KINGBRIGHT",
    description:
      category?.seoDescription ??
      "KINGBRIGHT UV LED catalog including UVA LED, UVC LED and UVC+UVA sterilization LED components.",
    url: "/products/uv-led",
    type: "website",
    images: [{ url: "/images/products/uv-led/3535-uva-plane.png", alt: "KINGBRIGHT UV LED product image" }]
  }
};

export default function UvLedCategoryPage() {
  if (!category) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    url: "https://www.kbrighter.com/products/uv-led",
    description: category.description,
    hasPart: category.products.map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      url: `https://www.kbrighter.com${product.href}`
    }))
  };

  return (
    <main className="catalog-page uv-category-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + uvCategoryStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="catalog-hero">
        <div className="catalog-wrap catalog-hero-grid">
          <div>
            <p className="catalog-eyebrow">{category.eyebrow}</p>
            <h1>{category.title}</h1>
            <p className="catalog-lead">{category.description}</p>
            <div className="catalog-cta-row">
              <a className="catalog-btn catalog-btn-primary" href="#products">Review UV LED Series <ArrowRight size={18} /></a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=UV%20LED%20Quotation%20Request">Request Quotation</a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=UV%20LED%20Sample%20Request">Sample Request</a>
            </div>
          </div>
          <div className="catalog-panel">
            <Boxes size={44} />
            <strong>UV LED Selection Support</strong>
            <p>Share wavelength, package size, radiant power, lens style, current and application for UV LED engineering review.</p>
          </div>
        </div>
      </section>

      <section id="products" className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Product List" title="UV LED Product Options" />
          <div className="uv-category-grid">
            {category.products.map((product) => (
              <Link className="uv-category-card" href={product.href} key={product.name}>
                {product.image ? <img src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" /> : null}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div>
                  {product.specs.map((spec) => <span key={spec}>{spec}</span>)}
                </div>
                <strong>Review Product Details <ArrowRight size={16} /></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap uv-category-two">
          <div>
            <SectionTitle eyebrow="Typical Applications" title="Where UV LED Products Are Used" />
            <div className="uv-category-pill-grid">
              {category.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Key Advantages" title="UV LED Engineering and Supply Benefits" />
            <div className="uv-category-advantage-list">
              {category.advantages.map((item) => (
                <div key={item}><BadgeCheck size={20} />{item}</div>
              ))}
            </div>
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

const uvCategoryStyles = `
.catalog-white{background:#fff}.uv-category-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}.uv-category-card{display:grid;gap:14px;background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.uv-category-card img{width:100%;aspect-ratio:16/9;object-fit:contain;background:#fff;border:1px solid #eef2f7;padding:12px}.uv-category-card h2{margin:0;font-size:23px}.uv-category-card p{margin:0;color:#536174;line-height:1.7}.uv-category-card div{display:flex;flex-wrap:wrap;gap:8px}.uv-category-card span{background:#eef2f7;color:#142033;padding:7px 9px;font-size:12px;font-weight:900}.uv-category-card strong{display:inline-flex;align-items:center;gap:8px;margin-top:6px;color:#f05a28}.uv-category-two{display:grid;grid-template-columns:1fr 1fr;gap:36px}.uv-category-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.uv-category-pill-grid span{background:#f7f9fc;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.uv-category-advantage-list{display:grid;gap:12px;margin-top:28px}.uv-category-advantage-list div{display:flex;gap:10px;align-items:center;background:#f7f9fc;border:1px solid #dde3eb;padding:16px;font-weight:900}.uv-category-advantage-list svg{color:#1e63d6}@media(max-width:920px){.uv-category-grid,.uv-category-two{grid-template-columns:1fr 1fr}}@media(max-width:640px){.uv-category-grid,.uv-category-two{grid-template-columns:1fr}}
`;
