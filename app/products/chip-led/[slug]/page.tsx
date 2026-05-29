import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Boxes, Download, Mail, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { chipProducts, getChipProduct } from "../data";
import { catalogStyles } from "../../styles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return chipProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getChipProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} Manufacturer | KINGBRIGHT Chip LED`,
    description: `${product.name} from KINGBRIGHT, ${product.packageSize} chip LED, ${product.current}, ${product.colors}, 120 degree viewing angle and ${product.reel} SMT packaging for overseas B2B buyers.`,
    keywords: [
      product.name,
      `${product.modelFamily} chip LED`,
      `${product.modelFamily} SMD LED`,
      `${product.lightingType} LED`,
      "Chip LED manufacturer",
      "SMD indicator LED",
      "KINGBRIGHT LED"
    ],
    openGraph: {
      title: `${product.name} Manufacturer | KINGBRIGHT`,
      description: product.description,
      url: `/products/chip-led/${product.slug}`,
      type: "website",
      images: [{ url: product.image, alt: product.imageAlt }]
    }
  };
}

export default async function ChipLedProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getChipProduct(slug);

  if (!product) {
    notFound();
  }

  const related = chipProducts.filter((item) => item.slug !== product.slug).slice(0, 5);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://www.kbrighter.com${product.image}`,
    description: product.description,
    category: "Chip LED",
    brand: {
      "@type": "Brand",
      name: "KINGBRIGHT"
    },
    manufacturer: {
      "@type": "Organization",
      name: "KINGBRIGHT OPTO-ELECTRONIC CO., LTD",
      url: "https://www.kbrighter.com",
      email: "sales@kbrighter.com"
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Package Size", value: product.packageSize },
      { "@type": "PropertyValue", name: "Forward Current", value: product.current },
      { "@type": "PropertyValue", name: "Viewing Angle", value: "120 degree" },
      { "@type": "PropertyValue", name: "Packaging", value: product.reel }
    ]
  };

  return (
    <main className="catalog-page chip-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + chipStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="chip-hero">
        <div className="catalog-wrap chip-hero-grid">
          <div>
            <p className="catalog-eyebrow">Chip LED / {product.lightingType}</p>
            <h1>{product.name}</h1>
            <p className="catalog-lead">{product.description}</p>
            <div className="chip-spec-strip">
              <span>{product.packageSize}</span>
              <span>{product.current}</span>
              <span>120 degree</span>
              <span>{product.reel}</span>
            </div>
            <div className="catalog-cta-row">
              <a className="catalog-btn catalog-btn-primary" href="#inquiry">Request Quotation <ArrowRight size={18} /></a>
              <a className="catalog-btn catalog-btn-ghost" href="#specifications">Review Specifications</a>
              <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=Chip%20LED%20Sample%20Request">Request Samples</a>
            </div>
          </div>
          <div className="chip-hero-media">
            <img src={product.image} alt={product.imageAlt} loading="eager" />
          </div>
        </div>
      </section>

      <section id="specifications" className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Technical Specifications" title={`${product.name} Electrical and Optical Data`} />
          <div className="chip-table-wrap">
            <table className="chip-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Color</th>
                  <th>Product Size</th>
                  <th>Wavelength (nm)</th>
                  <th>Intensity (mcd)</th>
                  <th>Voltage (V)</th>
                  <th>Current (mA)</th>
                  <th>Viewing Angle</th>
                  <th>Reel</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((row, index) => (
                  <tr key={`${row.model}-${row.color}-${index}`}>
                    <td>{row.model}</td>
                    <td>{row.color}</td>
                    <td>{row.size}</td>
                    <td>{row.wavelength}</td>
                    <td>{row.intensity}</td>
                    <td>{row.voltage}</td>
                    <td>{row.current}</td>
                    <td>{row.angle} deg</td>
                    <td>{row.reel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap chip-two">
          <div>
            <SectionTitle eyebrow="Product Features" title="Built for SMT Indicator and Signal Applications" />
            <div className="chip-feature-list">
              {product.features.map((item) => (
                <div key={item}><BadgeCheck size={20} />{item}</div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Applications" title="Typical Use Scenarios" />
            <div className="chip-pill-grid">
              {product.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap chip-two">
          <div className="chip-info-card">
            <Boxes size={34} />
            <h2>Package and SMT Production Support</h2>
            <p>
              This {product.modelFamily} Chip LED is supplied in {product.reel} packing for automated SMT assembly.
              KINGBRIGHT can support color selection, brightness range review, footprint discussion and sample confirmation.
            </p>
          </div>
          <div className="chip-info-card">
            <ShieldCheck size={34} />
            <h2>Engineering Review</h2>
            <p>
              Share your PCB layout, drive current, target color, visibility distance and production demand.
              Our team can help confirm whether {product.shortName} is suitable for your application.
            </p>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="FAQ" title={`${product.name} Buyer Questions`} />
          <div className="chip-faq-grid">
            <Faq question={`What is the package size of ${product.name}?`} answer={`${product.name} uses a ${product.packageSize} SMD chip LED package.`} />
            <Faq question="Which colors are available?" answer={`Available options include ${product.colors}. Special colors or specifications can be discussed for project requirements.`} />
            <Faq question="What is the recommended current?" answer={`The listed specification table is based on ${product.current}. Please confirm the exact drive condition before mass production.`} />
            <Faq question="Can samples be provided?" answer="Yes. Please send target model, color, quantity, application and shipping information for sample review." />
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Related Chip LED Products" title="Compare Other Chip LED Packages" />
          <div className="chip-related-grid">
            {related.map((item) => (
              <Link href={`/products/chip-led/${item.slug}`} key={item.slug}>
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
                <strong>{item.name}</strong>
                <span>{item.packageSize}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="catalog-section catalog-dark">
        <div className="catalog-wrap catalog-two">
          <div>
            <p className="catalog-label">Chip LED Inquiry</p>
            <h2>Discuss {product.name} with KINGBRIGHT</h2>
            <p>
              Send your model, color, target brightness, PCB assembly requirement,
              sample quantity and annual demand. Our sales engineer can support quotation and sample arrangement.
            </p>
          </div>
          <div className="catalog-dark-actions">
            <a className="catalog-btn catalog-btn-primary" href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(product.name + " Quotation Request")}`}><Mail size={18} /> Contact Sales Engineer</a>
            <a className="catalog-btn catalog-btn-dark" href="https://wa.me/8613530144658"><MessageCircle size={18} /> Discuss Your Project</a>
            <a className="catalog-btn catalog-btn-dark" href="/download-center"><Download size={18} /> Download Catalog</a>
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
    <div className="chip-faq">
      <Sparkles size={20} />
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

const chipStyles = `
.catalog-white{background:#fff}.chip-hero{background:linear-gradient(135deg,#142033 0%,#1f314b 54%,#f05a28 54%,#f05a28 100%);color:#fff;padding:78px 0}.chip-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}.chip-hero h1{font-size:clamp(42px,6vw,76px);line-height:1.02;margin:0 0 24px}.chip-hero .catalog-lead{color:#dbe4ef}.chip-hero-media{background:#fff;border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(0,0,0,.22);padding:20px}.chip-hero-media img{display:block;width:100%;aspect-ratio:16/9;object-fit:contain}.chip-spec-strip{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}.chip-spec-strip span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);padding:10px 12px;font-weight:900}.chip-table-wrap{overflow-x:auto;background:#fff;border:1px solid #dde3eb;margin-top:34px}.chip-table{width:100%;border-collapse:collapse;min-width:980px}.chip-table th{background:#142033;color:#fff;text-align:left;font-size:13px;padding:14px 12px}.chip-table td{border-top:1px solid #dde3eb;padding:13px 12px;color:#536174;font-weight:700}.chip-table tr:nth-child(even) td{background:#f7f9fc}.chip-two{display:grid;grid-template-columns:1fr 1fr;gap:28px}.chip-feature-list{display:grid;gap:12px;margin-top:28px}.chip-feature-list div{display:flex;gap:10px;align-items:center;background:#f7f9fc;border:1px solid #dde3eb;padding:16px;font-weight:900;color:#142033}.chip-feature-list svg,.chip-info-card svg{color:#1e63d6}.chip-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.chip-pill-grid span{background:#f7f9fc;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.chip-info-card{background:#fff;border:1px solid #dde3eb;padding:26px;display:grid;gap:14px}.chip-info-card h2{margin:0;font-size:24px}.chip-info-card p{margin:0;color:#536174;line-height:1.75}.chip-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:34px}.chip-faq{background:#fff;border:1px solid #dde3eb;padding:22px}.chip-faq svg{color:#f05a28}.chip-faq h3{margin:12px 0 8px;font-size:20px}.chip-faq p{margin:0;color:#536174;line-height:1.7}.chip-related-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:34px}.chip-related-grid a{background:#fff;border:1px solid #dde3eb;padding:14px;text-decoration:none;color:#142033;display:grid;gap:10px}.chip-related-grid img{width:100%;aspect-ratio:16/9;object-fit:contain;background:#f7f9fc}.chip-related-grid strong{font-size:16px}.chip-related-grid span{color:#536174;font-size:13px;font-weight:800}@media(max-width:980px){.chip-hero-grid,.chip-two,.chip-faq-grid{grid-template-columns:1fr}.chip-related-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.chip-related-grid{grid-template-columns:1fr}.chip-hero{padding:54px 0}.chip-hero-media{padding:12px}}
`;
