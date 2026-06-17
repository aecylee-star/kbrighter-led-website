import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Boxes, Mail, Settings, ShieldCheck } from "lucide-react";
import { getProductCategory, productCategories } from "../shared";
import { catalogStyles } from "../styles";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    keywords: [
      category.name,
      `${category.name} manufacturer`,
      `${category.name} supplier`,
      "LED components",
      "LED packaging",
      "OEM LED supplier"
    ],
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      url: `/products/${category.slug}`,
      type: "website"
    }
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    url: `https://www.kbrighter.com/products/${category.slug}`,
    description: category.description,
    hasPart: category.products.map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      url: `https://www.kbrighter.com${product.href}`
    }))
  };

  return (
    <main className={`catalog-page category-${category.slug}`}>
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + categoryStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="catalog-hero">
        <div className="catalog-wrap catalog-hero-grid">
          <div>
            <p className="catalog-eyebrow">{category.eyebrow}</p>
            <h1>{category.title}</h1>
            <p className="catalog-lead">{category.description}</p>
            <div className="catalog-cta-row">
              <a className="catalog-btn catalog-btn-primary" href="#products">Review Product List <ArrowRight size={18} /></a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com">Request Product Recommendation</a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=OEM%20LED%20Inquiry">OEM Inquiry</a>
            </div>
          </div>
          <div className="catalog-panel">
            <Boxes size={44} />
            <strong>{category.name} Selection Support</strong>
            <p>Share your application, package size, electrical parameters, color requirements and quantity for engineering review.</p>
          </div>
        </div>
      </section>

      <section id="products" className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Product List" title={`${category.name} Product Options`} />
          <div className="category-product-grid">
            {category.products.map((product) => (
              <Link className="category-product-card" href={product.href} key={product.name}>
                {product.image ? (
                  <img className="category-product-image" src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" />
                ) : (
                  <Settings size={30} />
                )}
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
        <div className="catalog-wrap category-two">
          <div>
            <SectionTitle eyebrow="Typical Applications" title={`Where ${category.name} Products Are Used`} />
            <div className="category-pill-grid">
              {category.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Key Advantages" title="Engineering and Supply Benefits" />
            <div className="category-advantage-list">
              {category.advantages.map((item) => (
                <div key={item}><BadgeCheck size={20} />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Related Applications" title="Application Pages for Technical Review" />
          <div className="category-link-row">
            {category.relatedApplications.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}<ArrowRight size={16} /></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-dark">
        <div className="catalog-wrap catalog-two">
          <div>
            <p className="catalog-label">Product Inquiry</p>
            <h2>Discuss {category.name} Requirements with KINGBRIGHT</h2>
            <p>
              Send your product model, target specification, datasheet needs, sample request,
              application and annual demand. Our team can support RFQ review and product matching.
            </p>
          </div>
          <div className="catalog-dark-actions">
            <a className="catalog-btn catalog-btn-primary" href="mailto:sales@kbrighter.com"><Mail size={18} /> Contact Sales Engineer</a>
            <a className="catalog-btn catalog-btn-dark" href="mailto:sales@kbrighter.com?subject=Request%20LED%20Samples">Request Samples</a>
            <a className="catalog-btn catalog-btn-dark" href="mailto:sales@kbrighter.com?subject=Request%20Engineering%20Support"><ShieldCheck size={18} /> Request Engineering Support</a>
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

const categoryStyles = `
.catalog-white{background:#fff}.category-product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}.category-product-card{display:grid;gap:14px;background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.category-product-card svg{color:#1e63d6}.category-product-image{width:100%;aspect-ratio:16/9;object-fit:contain;background:#f7f9fc;border:1px solid #eef2f7;padding:8px}.category-chip-led .category-product-image{background:#fff;padding:12px}.category-product-card h2{margin:0;font-size:23px}.category-product-card p{margin:0;color:#536174;line-height:1.7}.category-product-card div{display:flex;flex-wrap:wrap;gap:8px}.category-product-card span{background:#eef2f7;color:#142033;padding:7px 9px;font-size:12px;font-weight:900}.category-product-card strong{display:inline-flex;align-items:center;gap:8px;margin-top:6px;color:#f05a28}.category-two{display:grid;grid-template-columns:1fr 1fr;gap:36px}.category-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.category-pill-grid span{background:#fff;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.catalog-white .category-pill-grid span{background:#f7f9fc}.category-advantage-list{display:grid;gap:12px;margin-top:28px}.category-advantage-list div{display:flex;gap:10px;align-items:center;background:#f7f9fc;border:1px solid #dde3eb;padding:16px;font-weight:900}.category-advantage-list svg{color:#1e63d6}.category-link-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:32px}.category-link-row a{display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid #dde3eb;padding:18px;font-weight:900;color:#142033}@media(max-width:920px){.category-product-grid,.category-two,.category-link-row{grid-template-columns:1fr 1fr}}@media(max-width:640px){.category-product-grid,.category-two,.category-link-row{grid-template-columns:1fr}}
`;
