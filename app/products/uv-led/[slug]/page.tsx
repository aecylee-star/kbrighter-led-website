import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, Mail, MessageCircle, ShieldCheck, SunMedium } from "lucide-react";
import { catalogStyles } from "../../styles";
import { getUvSeries, uvSeriesList } from "../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return uvSeriesList.map((series) => ({ slug: series.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const series = getUvSeries(slug);

  if (!series) {
    return {};
  }

  return {
    title: series.seoTitle,
    description: series.seoDescription,
    keywords: [
      series.name,
      "UV LED",
      "UVC LED",
      "UVA LED",
      "sterilization LED",
      "UV LED manufacturer",
      "KINGBRIGHT UV LED"
    ],
    openGraph: {
      title: series.seoTitle,
      description: series.seoDescription,
      url: `/products/uv-led/${series.slug}`,
      type: "website",
      images: [{ url: series.heroImage, alt: series.heroImageAlt }]
    }
  };
}

export default async function UvLedSeriesPage({ params }: PageProps) {
  const { slug } = await params;
  const series = getUvSeries(slug);

  if (!series) {
    notFound();
  }

  const related = uvSeriesList.filter((item) => item.slug !== series.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: series.name,
    image: `https://www.kbrighter.com${series.heroImage}`,
    description: series.description,
    url: `https://www.kbrighter.com/products/uv-led/${series.slug}`,
    brand: {
      "@type": "Brand",
      name: "KINGBRIGHT"
    },
    manufacturer: {
      "@type": "Organization",
      name: "KINGBRIGHT"
    }
  };

  return (
    <main className="catalog-page uv-page">
      <style dangerouslySetInnerHTML={{ __html: catalogStyles + uvStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="uv-hero">
        <div className="catalog-wrap">
          <nav className="uv-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href="/products/uv-led">UV LED</Link>
            <span>/</span>
            <strong>{series.name}</strong>
          </nav>
          <div className="uv-hero-grid">
            <div>
              <p className="catalog-eyebrow">UV LED / {series.shortName}</p>
              <h1>{series.name} Manufacturer</h1>
              <p className="catalog-lead">{series.description}</p>
              <div className="uv-spec-strip">
                <span>{series.packageSummary}</span>
                <span>{series.wavelengthSummary}</span>
                <span>{series.currentSummary}</span>
              </div>
              <div className="catalog-cta-row">
                <a className="catalog-btn catalog-btn-primary" href="#inquiry">Request Quotation <ArrowRight size={18} /></a>
                <a className="catalog-btn catalog-btn-ghost" href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(series.name + " Sample Request")}`}>Sample Request</a>
              </div>
            </div>
            <div className="uv-hero-media">
              <img src={series.heroImage} alt={series.heroImageAlt} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap uv-two">
          <div>
            <SectionTitle eyebrow="Technical Introduction" title={`What Is ${series.shortName}?`} />
            <div className="uv-copy">
              <p>{series.intro}</p>
              <p>
                UV LED selection depends on wavelength, radiant power, forward voltage, drive current, viewing angle,
                thermal design and the required sterilization LED or UV curing application. The table below keeps model,
                part number and electrical data visible for purchasing and engineering review.
              </p>
            </div>
          </div>
          <div className="uv-model-card">
            <SunMedium size={36} />
            <h2>Product Name and Model List</h2>
            <ul>
              {series.modelList.map((model) => <li key={model}>{model}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Product Photos" title={`${series.name} Product Image Gallery`} />
          <div className="uv-image-grid">
            {series.variants.map((variant) => (
              <figure key={variant.name}>
                <img src={variant.image} alt={variant.imageAlt} loading="lazy" />
                <figcaption>{variant.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="specifications" className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Specification Table" title={`${series.name} Electrical and Optical Data`} />
          <div className="uv-table-wrap">
            <table className="uv-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Model</th>
                  <th>Part No</th>
                  <th>Product Size</th>
                  <th>Wavelength (nm)</th>
                  <th>Radiant Power (mW)</th>
                  <th>Voltage (V)</th>
                  <th>Current (mA)</th>
                  <th>Angle</th>
                  <th>Reel</th>
                </tr>
              </thead>
              <tbody>
                {series.specs.map((row, index) => (
                  <tr key={`${row.product}-${row.partNo}-${row.wavelength}-${index}`}>
                    <td>{row.product}</td>
                    <td>{row.model}</td>
                    <td>{row.partNo}</td>
                    <td>{row.productSize}</td>
                    <td>{row.wavelength}</td>
                    <td>{row.radiantPower}</td>
                    <td>{row.forwardVoltage}</td>
                    <td>{row.current}</td>
                    <td>{row.viewingAngle} deg</td>
                    <td>{row.reel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-wrap uv-two">
          <div>
            <SectionTitle eyebrow="Applications" title="UV LED Application Scenarios" />
            <div className="uv-pill-grid">
              {series.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="uv-info-card">
            <ShieldCheck size={34} />
            <h2>Engineering Review</h2>
            <p>
              Send wavelength, target radiant power, package, lens style, drive current, working distance and module
              structure. KINGBRIGHT can support UV LED selection for sterilization LED, curing, inspection and OEM projects.
            </p>
          </div>
        </div>
      </section>

      <section className="catalog-section catalog-white">
        <div className="catalog-wrap">
          <SectionTitle eyebrow="Related UV LED Series" title="Compare UV LED Options" />
          <div className="uv-related-grid">
            {related.map((item) => (
              <Link href={`/products/uv-led/${item.slug}`} key={item.slug}>
                <img src={item.heroImage} alt={item.heroImageAlt} loading="lazy" />
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
            <p className="catalog-label">UV LED Inquiry</p>
            <h2>Request {series.name} Quotation and Samples</h2>
            <p>
              Share your model, wavelength, optical power, lens type, sample quantity, annual demand and application.
              We can support quotation, sample arrangement and UV LED technical review.
            </p>
          </div>
          <div className="catalog-dark-actions">
            <a className="catalog-btn catalog-btn-primary" href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(series.name + " Quotation Request")}`}><Mail size={18} /> Request Quotation</a>
            <a className="catalog-btn catalog-btn-dark" href={`mailto:sales@kbrighter.com?subject=${encodeURIComponent(series.name + " Sample Request")}`}><Mail size={18} /> Request Samples</a>
            <a className="catalog-btn catalog-btn-dark" href="https://wa.me/8613530144658"><MessageCircle size={18} /> Discuss Project</a>
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

const uvStyles = `
.catalog-white{background:#fff}.uv-hero{background:linear-gradient(135deg,#142033 0%,#1f314b 58%,#f05a28 58%,#f05a28 100%);color:#fff;padding:34px 0 78px}.uv-breadcrumb{display:flex;flex-wrap:wrap;gap:9px;align-items:center;margin:0 0 36px;color:#d4deea;font-size:13px;font-weight:800}.uv-breadcrumb a{color:#fff}.uv-breadcrumb strong{color:#f7f9fc}.uv-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}.uv-hero h1{font-size:clamp(42px,6vw,76px);line-height:1.02;margin:0 0 24px}.uv-hero .catalog-lead{color:#dbe4ef}.uv-hero-media{background:#fff;border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(0,0,0,.22);padding:20px}.uv-hero-media img{display:block;width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff;padding:12px}.uv-spec-strip{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}.uv-spec-strip span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);padding:10px 12px;font-weight:900}.uv-two{display:grid;grid-template-columns:1fr 1fr;gap:28px}.uv-copy p{color:#536174;line-height:1.8;margin:0 0 18px}.uv-model-card,.uv-info-card{background:#fff;border:1px solid #dde3eb;padding:26px;display:grid;gap:14px}.uv-model-card svg,.uv-info-card svg{color:#1e63d6}.uv-model-card h2,.uv-info-card h2{margin:0;font-size:24px}.uv-model-card ul{margin:0;padding-left:20px;color:#142033;font-weight:900;line-height:1.9}.uv-info-card p{margin:0;color:#536174;line-height:1.75}.uv-image-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}.uv-image-grid figure{margin:0;background:#fff;border:1px solid #dde3eb;padding:16px}.uv-image-grid img{display:block;width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff;padding:12px}.uv-image-grid figcaption{margin-top:12px;color:#142033;font-weight:900}.uv-table-wrap{overflow-x:auto;background:#fff;border:1px solid #dde3eb;margin-top:34px}.uv-table{width:100%;border-collapse:collapse;min-width:1180px}.uv-table th{background:#142033;color:#fff;text-align:left;font-size:13px;padding:14px 12px}.uv-table td{border-top:1px solid #dde3eb;padding:13px 12px;color:#536174;font-weight:700}.uv-table tr:nth-child(even) td{background:#f7f9fc}.uv-pill-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.uv-pill-grid span{background:#fff;border:1px solid #dde3eb;padding:11px 13px;font-weight:900;color:#536174}.uv-related-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:34px}.uv-related-grid a{background:#fff;border:1px solid #dde3eb;padding:14px;text-decoration:none;color:#142033;display:grid;gap:10px}.uv-related-grid img{width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff;padding:12px}.uv-related-grid strong{font-size:18px}.uv-related-grid span{color:#536174;font-size:13px;font-weight:800}@media(max-width:980px){.uv-hero-grid,.uv-two{grid-template-columns:1fr}.uv-image-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.uv-related-grid,.uv-image-grid{grid-template-columns:1fr}.uv-hero{padding:28px 0 54px}.uv-hero-media{padding:12px}.uv-breadcrumb{font-size:12px}}
`;
