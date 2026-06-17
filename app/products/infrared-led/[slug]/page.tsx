import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Download, Mail, MessageCircle, RadioTower, ShieldCheck, Sparkles } from "lucide-react";
import { catalogStyles } from "../../styles";
import { getInfraredSeries, infraredSeries } from "../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return infraredSeries.map((series) => ({ slug: series.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const series = getInfraredSeries(slug);

  if (!series) {
    return {};
  }

  return {
    title: `${series.name} Manufacturer | KINGBRIGHT`,
    description: `${series.name} from KINGBRIGHT with ${series.packageSummary} package range, ${series.wavelengthSummary} wavelength, ${series.currentSummary} current and ${series.packagingSummary} packaging for infrared sensing and transmission projects.`,
    keywords: [
      series.name,
      "Infrared LED manufacturer",
      "IR LED supplier",
      "IR transmitting receiving series",
      "KINGBRIGHT IR LED",
      "infrared sensor LED"
    ],
    openGraph: {
      title: `${series.name} Manufacturer | KINGBRIGHT`,
      description: series.description,
      url: `/products/infrared-led/${series.slug}`,
      type: "website",
      images: [{ url: series.image, alt: series.imageAlt }]
    }
  };
}

export default async function InfraredSeriesPage({ params }: PageProps) {
  const { slug } = await params;
  const series = getInfraredSeries(slug);

  if (!series) {
    notFound();
  }

  const related = infraredSeries.filter((item) => item.slug !== series.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: series.name,
    image: `https://www.kbrighter.com${series.image}`,
    description: series.description,
    url: `https://www.kbrighter.com/products/infrared-led/${series.slug}`,
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
    <main className="catalog-page infrared-product-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + infraredProductStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="infrared-product-hero">
        <div className="catalog-wrap">
          <nav className="infrared-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href="/products/infrared-led">Infrared LED</Link>
            <span>/</span>
            <strong>{series.name}</strong>
          </nav>
          <div className="infrared-product-hero-grid">
            <div>
              <p className="catalog-eyebrow">Infrared LED / {series.shortName}</p>
              <h1>{series.name}</h1>
              <p className="catalog-lead">{series.description}</p>
              <div className="infrared-spec-strip">
                <span>{series.packageSummary}</span>
                <span>{series.wavelengthSummary}</span>
                <span>{series.currentSummary}</span>
                <span>{series.packagingSummary}</span>
              </div>
              <div className="catalog-cta-row">
                <a className="catalog-btn catalog-btn-primary" href="#inquiry">Request Quotation <ArrowRight size={18} /></a>
                <a className="catalog-btn catalog-btn-ghost" href="#specifications">Review Specifications</a>
                <a className="catalog-btn catalog-btn-ghost" href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(series.name + " LED Sample Request")}`}>Request LED Samples</a>
              </div>
            </div>
            <div className="infrared-product-media">
              <img src={series.image} alt={series.imageAlt} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap infrared-two">
          <div>
            <SectionTitle eyebrow="Product Overview" title={`${series.name} for IR Electronics Projects`} />
            <TechnicalContent series={series} />
          </div>
          <div className="infrared-summary-card">
            <RadioTower size={36} />
            <h2>Engineering Snapshot</h2>
            <img src={series.image} alt={`${series.name} product appearance for engineering reference`} loading="lazy" />
            <dl>
              <div><dt>Package Range</dt><dd>{series.packageSummary}</dd></div>
              <div><dt>Wavelength</dt><dd>{series.wavelengthSummary}</dd></div>
              <div><dt>Current Range</dt><dd>{series.currentSummary}</dd></div>
              <div><dt>Packaging</dt><dd>{series.packagingSummary}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="specifications" className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Technical Specifications" title={`${series.name} Electrical and Optical Data`} />
          <div className="infrared-table-wrap">
            <table className="infrared-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Package Size</th>
                  <th>Wavelength (nm)</th>
                  <th>Radiant Power (mW)</th>
                  <th>Forward Voltage (V)</th>
                  <th>Current (mA)</th>
                  <th>Viewing Angle</th>
                  <th>Packaging</th>
                </tr>
              </thead>
              <tbody>
                {series.specs.map((row, index) => (
                  <tr key={`${row.model}-${row.type}-${row.wavelength}-${index}`}>
                    <td>{row.model}</td>
                    <td>{row.type}</td>
                    <td>{row.packageSize}</td>
                    <td>{row.wavelength}</td>
                    <td>{row.radiantPower}</td>
                    <td>{row.forwardVoltage}</td>
                    <td>{row.current}</td>
                    <td>{row.viewingAngle === "-" ? "-" : `${row.viewingAngle} deg`}</td>
                    <td>{row.packaging}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap infrared-two">
          <div>
            <SectionTitle eyebrow="Product Features" title="Infrared LED Features for OEM Buyers" />
            <div className="infrared-feature-list">
              {series.features.map((item) => (
                <div key={item}><BadgeCheck size={20} />{item}</div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Applications" title="Typical Applications" />
            <div className="infrared-pill-grid">
              {series.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap infrared-two">
          <div className="infrared-info-card">
            <Download size={34} />
            <h2>Datasheet and Sample Support</h2>
            <p>
              The table above is converted from the supplied KINGBRIGHT Excel product data. For formal datasheets,
              wavelength confirmation, optical power review or custom requirements, please contact our sales engineer.
            </p>
            <a href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(series.name + " Datasheet Request")}`}>Get Product Datasheet <ArrowRight size={16} /></a>
          </div>
          <div className="infrared-info-card">
            <ShieldCheck size={34} />
            <h2>Engineering Review for IR Projects</h2>
            <p>
              KINGBRIGHT can review infrared LED selection by wavelength, package size, viewing angle, current, optical
              power, detection distance, drive circuit and export project schedule.
            </p>
            <a href="/quality-control">Review Quality Control <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="FAQ" title={`${series.name} Buyer Questions`} />
          <div className="infrared-faq-grid">
            <Faq question={`What wavelength range does ${series.name} cover?`} answer={`${series.name} covers ${series.wavelengthSummary} according to the supplied specification data.`} />
            <Faq question="Can KINGBRIGHT provide samples?" answer="Yes. Please send the target series, model, wavelength, quantity, application and shipping information for sample arrangement." />
            <Faq question="Can the specification be customized?" answer="Special wavelength, optical power, current, package or viewing angle requirements can be reviewed for OEM projects." />
            <Faq question="Which applications are suitable?" answer={`Typical applications include ${series.applications.slice(0, 5).join(", ")} and other IR electronics projects.`} />
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Related Infrared LED Series" title="Compare Other IR LED Options" />
          <div className="infrared-related-grid">
            {related.map((item) => (
              <Link href={`/products/infrared-led/${item.slug}`} key={item.slug}>
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
                <strong>{item.name}</strong>
                <span>{item.wavelengthSummary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="catalog-section catalog-dark">
        <div className="catalog-wrap catalog-two">
          <div>
            <p className="catalog-label">Infrared LED Inquiry</p>
            <h2>Discuss {series.name} with KINGBRIGHT</h2>
            <p>
              Send your target wavelength, optical power, package, current, quantity and application. Our sales engineer
              can support quotation, datasheet confirmation and sample arrangement.
            </p>
          </div>
          <div className="catalog-dark-actions">
            <a className="catalog-btn catalog-btn-primary" href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(series.name + " Quotation Request")}`}><Mail size={18} /> Request Quotation</a>
            <a className="catalog-btn catalog-btn-dark" href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(series.name + " Sample Request")}`}><Mail size={18} /> Request LED Samples</a>
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

function TechnicalContent({ series }: { series: NonNullable<ReturnType<typeof getInfraredSeries>> }) {
  return (
    <div className="infrared-copy">
      <p>
        {series.name} is organized as a product series page so engineers and purchasing teams can review the complete
        model range in one place. The series covers {series.packageSummary} package options with {series.wavelengthSummary}
        wavelength data and {series.currentSummary} current range from the supplied KINGBRIGHT Excel file.
      </p>
      <p>
        Infrared LED selection depends on wavelength, radiant power, forward voltage, drive current, optical angle,
        package style and the required assembly method. The specification table below keeps those fields visible in the
        same format used across the KINGBRIGHT product pages, making it easier to compare models before quotation or
        sample request.
      </p>
      <p>
        This series can be reviewed for remote control transmission, sensing, reflective detection, receiver pairing,
        smart device modules, industrial electronics and other B2B applications. If your design requires a custom
        wavelength, detection distance, viewing angle, package configuration or special packing request, please share the
        circuit condition and application environment for engineering review.
      </p>
    </div>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="infrared-faq">
      <Sparkles size={20} />
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

const infraredProductStyles = `
.catalog-white{background:#fff}.infrared-product-hero{background:linear-gradient(135deg,#142033 0%,#1f314b 58%,#f05a28 58%,#f05a28 100%);color:#fff;padding:34px 0 78px}.infrared-breadcrumb{display:flex;flex-wrap:wrap;gap:9px;align-items:center;margin:0 0 36px;color:#d4deea;font-size:13px;font-weight:800}.infrared-breadcrumb a{color:#fff}.infrared-breadcrumb strong{color:#f7f9fc}.infrared-product-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}.infrared-product-hero h1{font-size:clamp(42px,6vw,76px);line-height:1.02;margin:0 0 24px}.infrared-product-hero .catalog-lead{color:#dbe4ef}.infrared-product-media{background:#fff;border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(0,0,0,.22);padding:20px}.infrared-product-media img{display:block;width:100%;aspect-ratio:1/1;object-fit:contain}.infrared-spec-strip{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}.infrared-spec-strip span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);padding:10px 12px;font-weight:900}.infrared-two{display:grid;grid-template-columns:1fr 1fr;gap:28px}.infrared-copy p{color:#536174;line-height:1.8;margin:0 0 18px}.infrared-summary-card,.infrared-info-card{background:#fff;border:1px solid #dde3eb;padding:26px;display:grid;gap:14px}.infrared-summary-card svg,.infrared-info-card svg{color:#1e63d6}.infrared-summary-card h2,.infrared-info-card h2{margin:0;font-size:24px}.infrared-summary-card img{width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff;border:1px solid #eef2f7;box-shadow:inset 0 0 0 10px #f8fafc;padding:12px}.infrared-summary-card dl{margin:0;display:grid;gap:12px}.infrared-summary-card div{display:grid;grid-template-columns:150px 1fr;gap:12px;border-top:1px solid #dde3eb;padding-top:12px}.infrared-summary-card dt{color:#536174;font-weight:800}.infrared-summary-card dd{margin:0;color:#142033;font-weight:900}.infrared-table-wrap{overflow-x:auto;background:#fff;border:1px solid #dde3eb;margin-top:34px}.infrared-table{width:100%;border-collapse:collapse;min-width:1080px}.infrared-table th{background:#142033;color:#fff;text-align:left;font-size:13px;padding:14px 12px}.infrared-table td{border-top:1px solid #dde3eb;padding:13px 12px;color:#536174;font-weight:700}.infrared-table tr:nth-child(even) td{background:#f7f9fc}.infrared-feature-list{display:grid;gap:12px;margin-top:28px}.infrared-feature-list div{display:flex;gap:10px;align-items:center;background:#fff;border:1px solid #dde3eb;padding:16px;font-weight:900;color:#142033}.infrared-feature-list svg{color:#1e63d6}.infrared-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.infrared-pill-grid span{background:#fff;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.infrared-info-card p{margin:0;color:#536174;line-height:1.75}.infrared-info-card a{display:inline-flex;align-items:center;gap:8px;color:#f05a28;font-weight:900}.infrared-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:34px}.infrared-faq{background:#fff;border:1px solid #dde3eb;padding:22px}.infrared-faq svg{color:#f05a28}.infrared-faq h3{margin:12px 0 8px;font-size:20px}.infrared-faq p{margin:0;color:#536174;line-height:1.7}.infrared-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}.infrared-related-grid a{background:#fff;border:1px solid #dde3eb;padding:14px;text-decoration:none;color:#142033;display:grid;gap:10px}.infrared-related-grid img{width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff}.infrared-related-grid strong{font-size:16px}.infrared-related-grid span{color:#536174;font-size:13px;font-weight:800}@media(max-width:980px){.infrared-product-hero-grid,.infrared-two,.infrared-faq-grid{grid-template-columns:1fr}.infrared-related-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.infrared-related-grid{grid-template-columns:1fr}.infrared-product-hero{padding:28px 0 54px}.infrared-product-media{padding:12px}.infrared-summary-card div{grid-template-columns:1fr}.infrared-breadcrumb{font-size:12px}}
`;
