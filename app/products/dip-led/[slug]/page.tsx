import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Download, Mail, MessageCircle, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { catalogStyles } from "../../styles";
import { dipProducts, getDipProduct } from "../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dipProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getDipProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} Manufacturer | KINGBRIGHT`,
    description: `${product.name} from KINGBRIGHT, ${product.packageSize} through-hole LED, ${product.current}, ${product.viewingAngle}, ${product.colors}, ${product.packaging} for overseas B2B buyers and OEM electronics projects.`,
    keywords: [
      product.name,
      `${product.family} manufacturer`,
      "DIP LED manufacturer",
      "through-hole LED supplier",
      "KINGBRIGHT LED",
      "LED indicator component",
      "OEM DIP LED"
    ],
    openGraph: {
      title: `${product.name} Manufacturer | KINGBRIGHT`,
      description: product.description,
      url: `/products/dip-led/${product.slug}`,
      type: "website",
      images: [{ url: product.image, alt: product.imageAlt }]
    }
  };
}

export default async function DipLedProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getDipProduct(slug);

  if (!product) {
    notFound();
  }

  const related = dipProducts.filter((item) => item.slug !== product.slug).slice(0, 6);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://www.kbrighter.com${product.image}`,
    description: product.description,
    url: `https://www.kbrighter.com/products/dip-led/${product.slug}`,
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
    <main className="catalog-page dip-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + dipStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="dip-hero">
        <div className="catalog-wrap">
          <nav className="dip-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href="/products/dip-led">DIP LED</Link>
            <span>/</span>
            <strong>{product.name}</strong>
          </nav>
          <div className="dip-hero-grid">
            <div>
              <p className="catalog-eyebrow">DIP LED / {product.lensType}</p>
              <h1>{product.name}</h1>
              <p className="catalog-lead">{product.description}</p>
              <div className="dip-spec-strip">
                <span>{product.packageSize}</span>
                <span>{product.current}</span>
                <span>{product.viewingAngle}</span>
                <span>{product.packaging}</span>
              </div>
              <div className="catalog-cta-row">
                <a className="catalog-btn catalog-btn-primary" href="#inquiry">Request Quotation <ArrowRight size={18} /></a>
                <a className="catalog-btn catalog-btn-ghost" href="#specifications">Review Specifications</a>
                <a className="catalog-btn catalog-btn-ghost" href="mailto:sales@kbrighter.com?subject=DIP%20LED%20Sample%20Request">Request Samples</a>
              </div>
            </div>
            <div className="dip-hero-media">
              <img src={product.image} alt={product.imageAlt} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap dip-two">
          <div>
            <SectionTitle eyebrow="Product Summary" title="Through-Hole LED for Stable Visual Indication" />
            <TechnicalContent product={product} />
          </div>
          <div className="dip-summary-card">
            <Ruler size={36} />
            <h2>Engineering Snapshot</h2>
            <dl>
              <div><dt>Model Family</dt><dd>{product.family}</dd></div>
              <div><dt>Package Size</dt><dd>{product.packageSize}</dd></div>
              <div><dt>Color Options</dt><dd>{product.colors}</dd></div>
              <div><dt>Packaging</dt><dd>{product.packaging}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="specifications" className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Technical Specifications" title={`${product.name} Electrical and Optical Data`} />
          <div className="dip-table-wrap">
            <table className="dip-table">
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

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap dip-two">
          <div>
            <SectionTitle eyebrow="Product Features" title="DIP LED Features for OEM Buyers" />
            <div className="dip-feature-list">
              {product.features.map((item) => (
                <div key={item}><BadgeCheck size={20} />{item}</div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Applications" title="Typical Application Areas" />
            <div className="dip-pill-grid">
              {product.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap dip-two">
          <div className="dip-info-card">
            <Download size={34} />
            <h2>Datasheet Support</h2>
            <p>
              The electrical table above is converted from the supplied KINGBRIGHT product specification image.
              For signed datasheets, binning confirmation or customized brightness/color requirements, please contact our sales engineer.
            </p>
            <a href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(product.name + " Datasheet Request")}`}>Get Product Datasheet <ArrowRight size={16} /></a>
          </div>
          <div className="dip-info-card">
            <ShieldCheck size={34} />
            <h2>Quality and Project Review</h2>
            <p>
              KINGBRIGHT can support DIP LED selection based on lens shape, brightness range, color, viewing angle,
              PCB mounting method, packaging requirement and export project schedule.
            </p>
            <a href="/quality-control">Review Quality Control <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="FAQ" title={`${product.name} Buyer Questions`} />
          <div className="dip-faq-grid">
            <Faq question={`What is the package size of ${product.name}?`} answer={`${product.name} uses a ${product.packageSize} through-hole LED package.`} />
            <Faq question="Which colors can be supplied?" answer={`The available options include ${product.colors}. Special color or brightness requirements can be reviewed for OEM orders.`} />
            <Faq question="What current is used for the listed data?" answer={`The listed specification table is based on ${product.current}. Please confirm your driving circuit before production.`} />
            <Faq question="Can KINGBRIGHT provide samples?" answer="Yes. Please send the target model, color, quantity, application and shipping information for sample arrangement." />
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Related DIP LED Products" title="Compare Other Through-Hole LED Options" />
          <div className="dip-related-grid">
            {related.map((item) => (
              <Link href={`/products/dip-led/${item.slug}`} key={item.slug}>
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
            <p className="catalog-label">DIP LED Inquiry</p>
            <h2>Discuss {product.name} with KINGBRIGHT</h2>
            <p>
              Send your model, color, target brightness, lens type, sample quantity and annual demand.
              Our sales engineer can support quotation, datasheet confirmation and sample arrangement.
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

function TechnicalContent({ product }: { product: NonNullable<ReturnType<typeof getDipProduct>> }) {
  return (
    <div className="dip-copy">
      <p>
        {product.name} is designed for overseas buyers and engineers who need a dependable through-hole LED component for
        visual indication, display electronics and equipment status lighting. Compared with surface-mount LEDs, DIP LED
        components provide a stronger mechanical mounting structure after soldering and are often selected for control
        panels, instruments, signal boards, appliance indicators and PCB assemblies that require visible lens height.
      </p>
      <p>
        This product belongs to the {product.family} range and uses a {product.lensType.toLowerCase()} with a package size of
        {` ${product.packageSize}`}. The specification table includes color, wavelength, luminous intensity, forward voltage,
        current, viewing angle and packaging data for engineering comparison. Buyers can use these parameters to match the
        LED with drive circuits, panel openings, viewing distance, color requirements and assembly method before confirming
        samples or mass production.
      </p>
      <p>
        For purchasing teams, the main selection points are emitted color, brightness range, lens shape, viewing angle and
        packing method. A narrow viewing angle can provide stronger front visibility, while a wider angle is useful when the
        indicator must remain visible from different positions. Multi-color versions are suitable for alarm, operating mode,
        charging, fault and status display designs where two or more signals need to be shown in a compact LED position.
      </p>
      <p>
        KINGBRIGHT supports OEM and ODM customers with sample review, datasheet confirmation, color matching, brightness
        discussion and export order communication. If your project needs a specific brightness bin, special lead length,
        customized color combination or PCBA integration support, please share the drawing, PCB layout, driving current,
        annual demand and target application so the engineering and sales team can recommend the proper DIP LED option.
      </p>
    </div>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="dip-faq">
      <Sparkles size={20} />
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

const dipStyles = `
.catalog-white{background:#fff}.dip-hero{background:linear-gradient(135deg,#142033 0%,#1f314b 58%,#f05a28 58%,#f05a28 100%);color:#fff;padding:34px 0 78px}.dip-breadcrumb{display:flex;flex-wrap:wrap;gap:9px;align-items:center;margin:0 0 36px;color:#d4deea;font-size:13px;font-weight:800}.dip-breadcrumb a{color:#fff}.dip-breadcrumb strong{color:#f7f9fc}.dip-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}.dip-hero h1{font-size:clamp(42px,6vw,76px);line-height:1.02;margin:0 0 24px}.dip-hero .catalog-lead{color:#dbe4ef}.dip-hero-media{background:#fff;border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(0,0,0,.22);padding:20px}.dip-hero-media img{display:block;width:100%;aspect-ratio:16/9;object-fit:contain}.dip-spec-strip{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}.dip-spec-strip span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);padding:10px 12px;font-weight:900}.dip-two{display:grid;grid-template-columns:1fr 1fr;gap:28px}.dip-copy p{color:#536174;line-height:1.8;margin:0 0 18px}.dip-summary-card,.dip-info-card{background:#fff;border:1px solid #dde3eb;padding:26px;display:grid;gap:14px}.dip-summary-card svg,.dip-info-card svg{color:#1e63d6}.dip-summary-card h2,.dip-info-card h2{margin:0;font-size:24px}.dip-summary-card dl{margin:0;display:grid;gap:12px}.dip-summary-card div{display:grid;grid-template-columns:150px 1fr;gap:12px;border-top:1px solid #dde3eb;padding-top:12px}.dip-summary-card dt{color:#536174;font-weight:800}.dip-summary-card dd{margin:0;color:#142033;font-weight:900}.dip-table-wrap{overflow-x:auto;background:#fff;border:1px solid #dde3eb;margin-top:34px}.dip-table{width:100%;border-collapse:collapse;min-width:1080px}.dip-table th{background:#142033;color:#fff;text-align:left;font-size:13px;padding:14px 12px}.dip-table td{border-top:1px solid #dde3eb;padding:13px 12px;color:#536174;font-weight:700}.dip-table tr:nth-child(even) td{background:#f7f9fc}.dip-feature-list{display:grid;gap:12px;margin-top:28px}.dip-feature-list div{display:flex;gap:10px;align-items:center;background:#f7f9fc;border:1px solid #dde3eb;padding:16px;font-weight:900;color:#142033}.dip-feature-list svg{color:#1e63d6}.dip-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.dip-pill-grid span{background:#f7f9fc;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.dip-info-card p{margin:0;color:#536174;line-height:1.75}.dip-info-card a{display:inline-flex;align-items:center;gap:8px;color:#f05a28;font-weight:900}.dip-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:34px}.dip-faq{background:#fff;border:1px solid #dde3eb;padding:22px}.dip-faq svg{color:#f05a28}.dip-faq h3{margin:12px 0 8px;font-size:20px}.dip-faq p{margin:0;color:#536174;line-height:1.7}.dip-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}.dip-related-grid a{background:#fff;border:1px solid #dde3eb;padding:14px;text-decoration:none;color:#142033;display:grid;gap:10px}.dip-related-grid img{width:100%;aspect-ratio:16/9;object-fit:contain;background:#f7f9fc}.dip-related-grid strong{font-size:16px}.dip-related-grid span{color:#536174;font-size:13px;font-weight:800}@media(max-width:980px){.dip-hero-grid,.dip-two,.dip-faq-grid{grid-template-columns:1fr}.dip-related-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.dip-related-grid{grid-template-columns:1fr}.dip-hero{padding:28px 0 54px}.dip-hero-media{padding:12px}.dip-summary-card div{grid-template-columns:1fr}.dip-breadcrumb{font-size:12px}}
`;
