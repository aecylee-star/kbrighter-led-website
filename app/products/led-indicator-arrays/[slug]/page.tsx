import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Download, Mail, MessageCircle, Rows3, ShieldCheck, Sparkles } from "lucide-react";
import { catalogStyles } from "../../styles";
import { getIndicatorProduct, indicatorProducts } from "../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return indicatorProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getIndicatorProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} Manufacturer | KINGBRIGHT`,
    description: `${product.name} with ${product.channels}, ${product.packageSize} package, ${product.current}, ${product.viewingAngle} viewing angle and ${product.colors} color options for industrial control panels and automation equipment.`,
    keywords: [
      product.name,
      "LED indicator array",
      "3mm LED indicator",
      "PCB mounted LED indicator",
      "industrial control panel LED",
      "KINGBRIGHT LED"
    ],
    openGraph: {
      title: `${product.name} Manufacturer | KINGBRIGHT`,
      description: product.description,
      url: `/products/led-indicator-arrays/${product.slug}`,
      type: "website",
      images: [{ url: product.image, alt: product.imageAlt }]
    }
  };
}

export default async function LedIndicatorProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getIndicatorProduct(slug);

  if (!product) {
    notFound();
  }

  const related = indicatorProducts.filter((item) => item.slug !== product.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://www.kbrighter.com${product.image}`,
    description: product.description,
    url: `https://www.kbrighter.com/products/led-indicator-arrays/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "KINGBRIGHT"
    },
    manufacturer: {
      "@type": "Organization",
      name: "KINGBRIGHT"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD"
    }
  };

  return (
    <main className="catalog-page indicator-product-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + indicatorProductStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="indicator-product-hero">
        <div className="catalog-wrap">
          <nav className="indicator-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href="/products/led-indicator-arrays">LED Indicator Arrays</Link>
            <span>/</span>
            <strong>{product.name}</strong>
          </nav>
          <div className="indicator-product-hero-grid">
            <div>
              <p className="catalog-eyebrow">LED Indicator Arrays / {product.channels}</p>
              <h1>{product.name}</h1>
              <p className="catalog-lead">{product.description}</p>
              <div className="indicator-spec-strip">
                <span>{product.packageSize}</span>
                <span>{product.current}</span>
                <span>{product.viewingAngle}</span>
                <span>{product.packaging}</span>
              </div>
              <div className="catalog-cta-row">
                <a className="catalog-btn catalog-btn-primary" href="#inquiry">Request Quotation <ArrowRight size={18} /></a>
                <a className="catalog-btn catalog-btn-ghost" href="#specifications">Review Specifications</a>
                <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=LED%20Indicator%20Array%20Sample%20Request">Request Samples</a>
              </div>
            </div>
            <div className="indicator-product-media">
              <img src={product.image} alt={product.imageAlt} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap indicator-two">
          <div>
            <SectionTitle eyebrow="Product Overview" title={`${product.name} for Equipment Status Display`} />
            <TechnicalContent product={product} />
          </div>
          <div className="indicator-summary-card">
            <Rows3 size={36} />
            <h2>Engineering Snapshot</h2>
            <img src={product.image} alt={`${product.name} product appearance for engineering reference`} loading="lazy" />
            <dl>
              <div><dt>LED Positions</dt><dd>{product.channels}</dd></div>
              <div><dt>Package Size</dt><dd>{product.packageSize}</dd></div>
              <div><dt>Color Options</dt><dd>{product.colors}</dd></div>
              <div><dt>Packaging</dt><dd>{product.packaging}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap indicator-two">
          <div>
            <SectionTitle eyebrow="Product Features" title="Features for B2B Engineering Projects" />
            <div className="indicator-feature-list">
              {product.features.map((item) => (
                <div key={item}><BadgeCheck size={20} />{item}</div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Applications" title="Typical Application Areas" />
            <div className="indicator-pill-grid">
              {product.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="specifications" className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Technical Specifications" title={`${product.name} Electrical and Optical Data`} />
          <div className="indicator-table-wrap">
            <table className="indicator-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Package Size</th>
                  <th>Color</th>
                  <th>Wavelength (nm)</th>
                  <th>Luminous Intensity (mcd)</th>
                  <th>Forward Voltage (V)</th>
                  <th>Current</th>
                  <th>Viewing Angle</th>
                  <th>Packaging</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((row, index) => (
                  <tr key={`${row.model}-${row.color}-${index}`}>
                    <td>{row.model}</td>
                    <td>{row.packageSize}</td>
                    <td>{row.color}</td>
                    <td>{row.wavelength}</td>
                    <td>{row.luminousIntensity}</td>
                    <td>{row.forwardVoltage}</td>
                    <td>{row.current}</td>
                    <td>{row.viewingAngle} deg</td>
                    <td>{row.packaging}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap indicator-two">
          <div className="indicator-info-card">
            <Download size={34} />
            <h2>Datasheet and Custom Specification Support</h2>
            <p>
              The specification table is converted from the supplied KINGBRIGHT product data image. Contact our sales
              engineer for formal datasheet confirmation, brightness bin review or customized color combinations.
            </p>
            <a href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(product.name + " Datasheet Request")}`}>Get Product Datasheet <ArrowRight size={16} /></a>
          </div>
          <div className="indicator-info-card">
            <ShieldCheck size={34} />
            <h2>Engineering Review for Control Panels</h2>
            <p>
              KINGBRIGHT can review the indicator array according to panel opening, PCB pitch, color logic, drive current,
              assembly process and export equipment schedule.
            </p>
            <a href="/quality-control">Review Quality Control <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="FAQ" title={`${product.name} Buyer Questions`} />
          <div className="indicator-faq-grid">
            <Faq question={`What is the package size of ${product.name}?`} answer={`${product.name} uses a ${product.packageSize} housing for PCB-mounted status indication.`} />
            <Faq question="Which applications are suitable?" answer="Typical use includes industrial control panels, PLC systems, power distribution cabinets, telecommunications equipment, instrumentation, alarms and automation systems." />
            <Faq question="Can the color combination be customized?" answer={`The listed options include ${product.colors}. Custom colors or brightness ranges can be reviewed for OEM projects.`} />
            <Faq question="Can KINGBRIGHT support samples and quotation?" answer="Yes. Please send the target model, color combination, quantity, PCB layout and application details for sample and quotation support." />
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Related Indicator Products" title="Compare LED Indicator Array Options" />
          <div className="indicator-related-grid">
            {related.map((item) => (
              <Link href={`/products/led-indicator-arrays/${item.slug}`} key={item.slug}>
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
            <p className="catalog-label">LED Indicator Array Inquiry</p>
            <h2>Discuss {product.name} with KINGBRIGHT</h2>
            <p>
              Send your color combination, target brightness, panel design, PCB requirement, annual demand and export schedule.
              Our team can support quotation, sample arrangement and engineering confirmation.
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

function TechnicalContent({ product }: { product: NonNullable<ReturnType<typeof getIndicatorProduct>> }) {
  return (
    <div className="indicator-copy">
      <p>
        {product.name} is designed for equipment builders that need a compact and repeatable LED status display on the
        same PCB. The integrated black housing keeps the {product.channels.toLowerCase()} aligned, improves visual contrast
        on the front panel and reduces the mechanical variation that can occur when separate indicator lamps are mounted
        one by one. This makes the component useful for overseas OEM projects where clear appearance, stable assembly and
        consistent operator visibility are important.
      </p>
      <p>
        The product uses a {product.packageSize} housing and 3mm LED lamp positions with {product.current} reference
        current. The available color range covers {product.colors}, giving engineers practical choices for power, run,
        fault, communication, alarm, mode and service indication. Red and yellow are commonly used for warning or alarm
        states, green is widely used for normal operation, and blue or purple can be selected for special equipment logic
        or brand-specific signal design.
      </p>
      <p>
        In industrial control panels and PLC systems, a grouped LED indicator array helps maintenance teams read equipment
        status quickly. It can be placed near terminal blocks, switch interfaces, communication ports or diagnostic labels
        to show channel state without requiring a large separate display. For power distribution cabinets and
        telecommunications equipment, the compact array format supports dense layouts while keeping the front view
        organized and easy to inspect during installation, service and field troubleshooting.
      </p>
      <p>
        From an engineering perspective, the main selection points are package size, color combination, wavelength,
        luminous intensity, forward voltage, viewing angle and packaging method. The specification table below converts
        the supplied KINGBRIGHT source data into an HTML table so purchasing teams and engineers can compare the options
        directly. The {product.viewingAngle} viewing angle range is suitable for typical panel viewing distances, while
        the black housing helps separate each signal position visually.
      </p>
      <p>
        KINGBRIGHT can support quotation, sample confirmation, brightness discussion and OEM customization review for
        LED indicator array projects. If your equipment requires a specific LED order, customized color logic, special
        brightness range, PCB integration support or export packing requirement, please share your drawing, circuit
        condition, target quantity and application environment. Our sales engineer can help confirm the best indicator
        configuration before prototype and mass production.
      </p>
    </div>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="indicator-faq">
      <Sparkles size={20} />
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

const indicatorProductStyles = `
.catalog-white{background:#fff}.indicator-product-hero{background:linear-gradient(135deg,#142033 0%,#1f314b 58%,#f05a28 58%,#f05a28 100%);color:#fff;padding:34px 0 78px}.indicator-breadcrumb{display:flex;flex-wrap:wrap;gap:9px;align-items:center;margin:0 0 36px;color:#d4deea;font-size:13px;font-weight:800}.indicator-breadcrumb a{color:#fff}.indicator-breadcrumb strong{color:#f7f9fc}.indicator-product-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}.indicator-product-hero h1{font-size:clamp(42px,6vw,76px);line-height:1.02;margin:0 0 24px}.indicator-product-hero .catalog-lead{color:#dbe4ef}.indicator-product-media{background:#fff;border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(0,0,0,.22);padding:20px}.indicator-product-media img{display:block;width:100%;aspect-ratio:1/1;object-fit:contain}.indicator-spec-strip{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}.indicator-spec-strip span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);padding:10px 12px;font-weight:900}.indicator-two{display:grid;grid-template-columns:1fr 1fr;gap:28px}.indicator-copy p{color:#536174;line-height:1.8;margin:0 0 18px}.indicator-summary-card,.indicator-info-card{background:#fff;border:1px solid #dde3eb;padding:26px;display:grid;gap:14px}.indicator-summary-card svg,.indicator-info-card svg{color:#1e63d6}.indicator-summary-card h2,.indicator-info-card h2{margin:0;font-size:24px}.indicator-summary-card img{width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff;border:1px solid #eef2f7;box-shadow:inset 0 0 0 10px #f8fafc;padding:12px}.indicator-summary-card dl{margin:0;display:grid;gap:12px}.indicator-summary-card div{display:grid;grid-template-columns:150px 1fr;gap:12px;border-top:1px solid #dde3eb;padding-top:12px}.indicator-summary-card dt{color:#536174;font-weight:800}.indicator-summary-card dd{margin:0;color:#142033;font-weight:900}.indicator-feature-list{display:grid;gap:12px;margin-top:28px}.indicator-feature-list div{display:flex;gap:10px;align-items:center;background:#fff;border:1px solid #dde3eb;padding:16px;font-weight:900;color:#142033}.indicator-feature-list svg{color:#1e63d6}.indicator-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.indicator-pill-grid span{background:#fff;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.indicator-table-wrap{overflow-x:auto;background:#fff;border:1px solid #dde3eb;margin-top:34px}.indicator-table{width:100%;border-collapse:collapse;min-width:1080px}.indicator-table th{background:#142033;color:#fff;text-align:left;font-size:13px;padding:14px 12px}.indicator-table td{border-top:1px solid #dde3eb;padding:13px 12px;color:#536174;font-weight:700}.indicator-table tr:nth-child(even) td{background:#f7f9fc}.indicator-info-card p{margin:0;color:#536174;line-height:1.75}.indicator-info-card a{display:inline-flex;align-items:center;gap:8px;color:#f05a28;font-weight:900}.indicator-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:34px}.indicator-faq{background:#fff;border:1px solid #dde3eb;padding:22px}.indicator-faq svg{color:#f05a28}.indicator-faq h3{margin:12px 0 8px;font-size:20px}.indicator-faq p{margin:0;color:#536174;line-height:1.7}.indicator-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}.indicator-related-grid a{background:#fff;border:1px solid #dde3eb;padding:14px;text-decoration:none;color:#142033;display:grid;gap:10px}.indicator-related-grid img{width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff}.indicator-related-grid strong{font-size:16px}.indicator-related-grid span{color:#536174;font-size:13px;font-weight:800}@media(max-width:980px){.indicator-product-hero-grid,.indicator-two,.indicator-faq-grid{grid-template-columns:1fr}.indicator-related-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.indicator-related-grid{grid-template-columns:1fr}.indicator-product-hero{padding:28px 0 54px}.indicator-product-media{padding:12px}.indicator-summary-card div{grid-template-columns:1fr}.indicator-breadcrumb{font-size:12px}}
`;
