import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, CircuitBoard, FileText, Mail } from "lucide-react";
import { applications, appStyles } from "../shared";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = applications.find((item) => item.slug === slug);
  if (!app) return {};
  return {
    title: app.seoTitle,
    description: app.seoDescription,
    keywords: [app.keywords, ...app.products, ...app.scenarios],
    openGraph: {
      title: app.seoTitle,
      description: app.seoDescription,
      url: `/applications/${app.slug}`,
      type: "website"
    }
  };
}

export default async function ApplicationDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = applications.find((item) => item.slug === slug);
  if (!app) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: app.title,
    provider: {
      "@type": "Organization",
      name: "KINGBRIGHT OPTO-ELECTRONIC CO., LTD",
      url: "https://www.kbrighter.com",
      email: "sales@kbrighter.com"
    },
    description: app.seoDescription,
    areaServed: "Worldwide"
  };

  return (
    <main className="app-page">
      <style dangerouslySetInnerHTML={{ __html: detailStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="app-hero">
        <div className="app-wrap app-hero-grid">
          <div>
            <p className="app-eyebrow">Application Solution</p>
            <h1>{app.title}</h1>
            <p className="app-lead">{app.intro}</p>
            <div className="app-cta-row">
              <a className="app-btn app-btn-primary" href="#inquiry">Get Quote <ArrowRight size={18} /></a>
              <a className="app-btn app-btn-ghost" href="#products">Recommended LEDs</a>
              <a className="app-btn app-btn-ghost" href="#technical">Technical Highlights</a>
            </div>
          </div>
          <div className="app-hero-panel">
            <CircuitBoard size={44} />
            <strong>Engineering-Friendly LED Selection</strong>
            <p>{app.keywords}</p>
          </div>
        </div>
      </header>

      <section className="app-section">
        <div className="app-wrap detail-grid">
          <div className="detail-block">
            <p className="app-label">Industry Introduction</p>
            <h2>Application Requirements</h2>
            <p>{app.intro} Overseas buyers usually evaluate LED package size, optical output, color consistency, thermal conditions, soldering process and long-term supplier stability before sampling.</p>
          </div>
          <div className="detail-block">
            <p className="app-label">Typical Usage Scenarios</p>
            <h2>Where These LEDs Are Used</h2>
            <ul>{app.scenarios.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="products" className="app-section app-white">
        <div className="app-wrap">
          <p className="app-label">Recommended LED Products</p>
          <h2>Product Options for {app.title}</h2>
          <div className="detail-card-grid">
            {app.products.map((product) => (
              <Link href="/products/2835-smd-led" className="detail-product" key={product}>
                <FileText size={26} />
                <strong>{product}</strong>
                <span>View product details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="app-section">
        <div className="app-wrap detail-grid">
          <div>
            <p className="app-label">Product Advantages</p>
            <h2>Why KINGBRIGHT LEDs Fit This Application</h2>
            <div className="detail-list">{app.advantages.map((item) => <div key={item}>{item}</div>)}</div>
          </div>
          <div id="technical">
            <p className="app-label">Technical Highlights</p>
            <h2>Engineering Points to Confirm</h2>
            <div className="detail-list">{app.highlights.map((item) => <div key={item}>{item}</div>)}</div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="app-section app-dark">
        <div className="app-wrap app-two">
          <div>
            <p className="app-label">Send RFQ</p>
            <h2>Discuss {app.title} with KINGBRIGHT</h2>
            <p>Share drawings, target LED type, CCT/color, current, voltage, brightness, quantity and PCBA requirements. We can help prepare datasheet and sample recommendations.</p>
          </div>
          <div className="detail-inquiry">
            <a className="app-btn app-btn-primary" href="mailto:sales@kbrighter.com"><Mail size={18} /> Contact Sales</a>
            <a className="app-btn app-btn-ghost" href="/products/2835-smd-led">View 2835 SMD LED</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const detailStyles = appStyles + `
.app-white{background:#fff}.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}.detail-block,.detail-product{background:#fff;border:1px solid #dde3eb;padding:28px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.detail-block p{color:#536174;line-height:1.7}.detail-block ul{display:grid;gap:12px;padding:0;margin:22px 0 0;list-style:none}.detail-block li{display:flex;gap:10px;align-items:center;font-weight:800}.detail-block li svg,.detail-product svg{color:#1e63d6}.detail-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:32px}.detail-product strong,.detail-product span{display:block}.detail-product strong{margin-top:18px}.detail-product span{margin-top:8px;color:#536174;font-size:13px}.detail-list{display:grid;gap:14px;margin-top:24px}.detail-list div{background:#fff;border-left:4px solid #f05a28;padding:18px;font-weight:900;box-shadow:0 4px 16px rgba(20,32,51,.04)}.detail-inquiry{display:flex;flex-wrap:wrap;gap:14px;align-content:start}@media(max-width:920px){.detail-grid{grid-template-columns:1fr}.detail-card-grid{grid-template-columns:1fr 1fr}}@media(max-width:640px){.detail-card-grid{grid-template-columns:1fr}}
`;
