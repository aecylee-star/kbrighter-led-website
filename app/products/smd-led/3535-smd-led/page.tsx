import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Factory,
  Gauge,
  Mail,
  MessageCircle,
  Microscope,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "3535 SMD LED Manufacturer | KINGBRIGHT",
  description:
    "KINGBRIGHT 3535 SMD LED / 3535 3W white LED, RA90, 2700K-6500K, 90 degree viewing angle, ceramic package, suitable for warm white, pure white and high power lighting projects.",
  keywords: [
    "3535 SMD LED",
    "3535 3W white LED",
    "3535 RA90 LED",
    "warm white 3535 LED",
    "pure white SMD LED",
    "high power lighting LED",
    "3535 ceramic LED package",
    "SMD LED manufacturer"
  ],
  openGraph: {
    title: "3535 SMD LED Manufacturer | KINGBRIGHT",
    description:
      "3535 3W white SMD LED with RA90, 2700K-6500K CCT range, 90 degree viewing angle and ceramic package for high power lighting applications.",
    url: "/products/smd-led/3535-smd-led",
    type: "website"
  }
};

const specs = [
  ["Product Code", "KB-SMD3535HR90A"],
  ["Product Name", "3535 3W White LED / 3535 SMD LED"],
  ["Package Type", "3535 ceramic SMD LED package with transparent silicone + phosphor encapsulation"],
  ["Package Size", "3.5 x 3.5 mm, ceramic body; tolerances +/-0.1 mm unless otherwise specified"],
  ["Color Temperature", "2700K-6500K, covering warm white, neutral white and pure white options"],
  ["CRI", "Ra90"],
  ["Forward Current", "IF=350mA test condition; maximum continuous working current IF <=700mA"],
  ["Forward Voltage", "2.8V min / 3.4V max at IF=350mA"],
  ["Luminous Flux", "75 lm min / 125 lm typical / 185 lm max at IF=350mA"],
  ["Viewing Angle", "90 degrees"],
  ["Peak Wavelength", "450 nm at IF=350mA"],
  ["Reverse Current", "10 uA max at VR=5.0V"],
  ["Reverse Voltage", "10V reverse breakdown voltage"],
  ["Pulse Current", "IFP 5A max at Ta=25 C"],
  ["Operating Temperature", "-40 C to +100 C"],
  ["Storage Temperature", "-40 C to +100 C"],
  ["Junction Temperature", "115 C max"],
  ["Reflow Soldering", "245 C for 10 sec; reflow soldering is allowed once"],
  ["Packaging", "1000 pcs per reel"]
];

const features = [
  {
    title: "RA90 High CRI Output",
    text: "High color rendering supports warm white and pure white lighting projects where object color and visual comfort matter.",
    icon: Sparkles
  },
  {
    title: "3535 Ceramic Package",
    text: "Ceramic package construction helps support thermal performance for high power lighting and compact LED module designs.",
    icon: ShieldCheck
  },
  {
    title: "3W Class LED Design",
    text: "Designed for high output lighting systems when paired with proper current control, PCB layout and heat dissipation design.",
    icon: Zap
  },
  {
    title: "90 Degree Beam Angle",
    text: "A focused 90 degree viewing angle supports optical matching for fixtures, camera illumination and directed lighting.",
    icon: Gauge
  },
  {
    title: "Engineering Support",
    text: "KINGBRIGHT supports datasheet review, sample discussion, thermal path checks and OEM lighting project communication.",
    icon: Microscope
  }
];

const applications = [
  "High power lighting modules",
  "Warm white commercial lighting",
  "Pure white equipment lighting",
  "Camera illumination",
  "Security monitoring lighting",
  "Stage and architectural lighting",
  "Automotive auxiliary lighting"
];

const applicationImages = [
  {
    src: "/images/products/3535-smd-led/3535-smd-led-application-studio-panel-light.jpg",
    alt: "3535 SMD LED application for high CRI studio panel light and pure white lighting",
    label: "Studio / Panel Lighting"
  },
  {
    src: "/images/products/3535-smd-led/3535-smd-led-application-stage-light.jpg",
    alt: "3535 SMD LED application for stage lighting and high power color lighting fixtures",
    label: "Stage Lighting"
  },
  {
    src: "/images/products/3535-smd-led/3535-smd-led-application-automotive-headlight.jpg",
    alt: "3535 SMD LED application for automotive auxiliary lighting and high power lighting module",
    label: "Automotive Lighting"
  }
];

const productImages = [
  {
    title: "3535 SMD LED Product Appearance",
    text: "Real product photo for the 3535 high power white SMD LED ceramic package.",
    src: "/images/products/3535-smd-led/3535-smd-led-product-image.png",
    alt: "KINGBRIGHT 3535 SMD LED 3W white LED ceramic package product image"
  },
  {
    title: "3535 Package Dimensions",
    text: "Package outline, polarity and recommended solder pad reference for engineering review.",
    src: "/images/products/3535-smd-led/3535-smd-led-dimension-drawing.png",
    alt: "KINGBRIGHT 3535 SMD LED package dimensions and solder pad drawing"
  },
  {
    title: "High Power Lighting Application",
    text: "Application reference for pure white, warm white and high power lighting fixture designs.",
    src: "/images/products/3535-smd-led/3535-smd-led-application-studio-panel-light.jpg",
    alt: "3535 SMD LED high power lighting application reference image"
  }
];

const faqs = [
  ["What is the main positioning of this 3535 SMD LED?", "This is a 3535 3W class white SMD LED with ceramic package, RA90 color rendering and 2700K-6500K CCT coverage for warm white, neutral white and pure white lighting projects."],
  ["What current and voltage should engineers review?", "The optical and electrical characteristics are tested at IF=350mA. The forward voltage range is 2.8V to 3.4V, and the maximum continuous working current is listed as IF <=700mA."],
  ["What luminous flux range is listed in the datasheet?", "The datasheet lists 75 lm minimum, 125 lm typical and 185 lm maximum at IF=350mA. Final output depends on selected bin, CCT, thermal design and drive conditions."],
  ["Is this product suitable for warm white lighting?", "Yes. The CCT range covers 2700K-6500K, so it can support warm white lighting, neutral white lighting and pure white lighting requirements with RA90 color rendering."],
  ["What applications are recommended?", "The datasheet lists application systems, camera illumination and security monitoring. Based on the 3535 ceramic high power package, it is also suitable for lighting modules, stage lights, architectural lights and OEM high power lighting projects after thermal review."],
  ["What are the reflow soldering precautions?", "The datasheet lists 245 C for 10 seconds and notes that reflow soldering is allowed once. Do not apply pressure to the LED body or lens during and after reflow."],
  ["How should this LED be handled after opening?", "Before opening, store at 30 C / 60%RH or below. After opening, use under 20-30 C / 30%RH or below, and use opened SMD LEDs within 24 hours or vacuum seal remaining material."],
  ["Do you support samples and datasheet review?", "Yes. KINGBRIGHT can support sample discussion, datasheet review, bin selection and application matching for overseas buyers and OEM lighting teams."]
];

export default function Product3535Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "3535 SMD LED / 3535 3W White LED",
    brand: {
      "@type": "Brand",
      name: "KINGBRIGHT"
    },
    description:
      "KINGBRIGHT 3535 3W white SMD LED with RA90, 2700K-6500K CCT range, 90 degree viewing angle and ceramic package for high power lighting.",
    category: "SMD LED Components",
    manufacturer: {
      "@type": "Organization",
      name: "KINGBRIGHT OPTO-ELECTRONIC CO., LTD",
      url: "https://www.kbrighter.com",
      email: "sales@kbrighter.com"
    }
  };

  return (
    <main className="pd-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pd-hero">
        <div className="pd-wrap pd-hero-grid">
          <div>
            <p className="pd-eyebrow">3535 SMD LED</p>
            <h1>3535 3W White SMD LED for Warm White, Pure White and High Power Lighting</h1>
            <p className="pd-lead">
              KINGBRIGHT 3535 SMD LED, product code KB-SMD3535HR90A, is a
              ceramic-package high power white LED with RA90 color rendering,
              2700K-6500K CCT coverage and a 90 degree viewing angle for lighting
              modules, camera illumination, security monitoring and OEM fixture projects.
            </p>
            <div className="pd-spec-pills">
              <span>Code: KB-SMD3535HR90A</span>
              <span>3W White LED</span>
              <span>IF: 350mA test</span>
              <span>VF: 2.8-3.4V</span>
              <span>CCT: 2700K-6500K</span>
              <span>CRI: Ra90</span>
              <span>Angle: 90 deg</span>
            </div>
            <div className="pd-cta-row">
              <a className="pd-btn pd-btn-primary" href="#inquiry">Request 3535 LED Quotation <ArrowRight size={18} /></a>
              <a className="pd-btn pd-btn-ghost" href="#inquiry">Request 3535 Samples</a>
              <a className="pd-btn pd-btn-ghost" href="#datasheet">Get 3535 Datasheet</a>
              <a className="pd-btn pd-btn-ghost" href="/products/smd-led/3030-smd-led">Compare 3030 SMD LED</a>
              <a className="pd-btn pd-btn-ghost" href="/products/smd-led/2835-0-5w-smd-led">Compare 2835 0.5W</a>
              <a className="pd-btn pd-btn-ghost" href="/products/cob-led/1414-cob-led">Compare 1414 COB LED</a>
            </div>
          </div>
          <div className="pd-visual-panel">
            <span className="pd-badge">High Power LED</span>
            <div className="pd-hero-photo-frame">
              <img
                src="/images/products/3535-smd-led/3535-smd-led-product-image.png"
                alt="KINGBRIGHT 3535 SMD LED 3W white LED product image for high power lighting"
                width="800"
                height="800"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="pd-visual-info">
              <Factory size={24} />
              <div>
                <strong>3535 Ceramic Package + RA90 White Light</strong>
                <p>Designed for warm white, pure white and high power lighting systems that need thermal review and reliable LED selection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Product Images" title="3535 SMD LED Product Photo, Dimensions and Application Views" />
          <div className="pd-image-grid">
            {productImages.map((image) => (
              <ImageBlock key={image.title} {...image} />
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="pd-section pd-white">
        <div className="pd-wrap pd-two">
          <div>
            <SectionTitle eyebrow="Technical Specifications" title="Real 3535 SMD LED Datasheet Parameters" />
            <p className="pd-muted">
              The following values are extracted from the KINGBRIGHT 3535 3W white LED
              RA90 datasheet. Final bin selection should be confirmed by CCT, luminous
              flux, drive current and thermal design requirements.
            </p>
            <figure className="pd-tech-image">
              <img
                src="/images/products/3535-smd-led/3535-smd-led-dimension-drawing.png"
                alt="KINGBRIGHT 3535 SMD LED technical dimensions and pad configuration drawing"
                width="1345"
                height="1573"
                loading="lazy"
              />
              <figcaption>3535 SMD LED package dimensions, polarity and pad configuration for engineering review.</figcaption>
            </figure>
          </div>
          <div className="pd-spec-table">
            {specs.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap pd-two">
          <div>
            <SectionTitle eyebrow="Dimensions" title="3535 Ceramic Package and Pad Configuration" />
            <p className="pd-muted">
              The 3535 package uses a compact ceramic body with clear polarity reference.
              For high power lighting projects, confirm solder pad design, heat dissipation
              area and assembly process before mass production.
            </p>
          </div>
          <figure className="pd-dimension-image">
            <img
              src="/images/products/3535-smd-led/3535-smd-led-dimension-drawing.png"
              alt="3535 SMD LED dimension drawing showing package outline cathode anode and recommended pad size"
              width="1345"
              height="1573"
              loading="lazy"
            />
            <figcaption>Package outline and recommended solder pad size. Request the official datasheet before PCB layout confirmation.</figcaption>
          </figure>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Features & Advantages" title="RA90 High Power White LED for Engineering-Led Lighting Projects" />
          <div className="pd-grid-5">
            {features.map((feature) => (
              <article className="pd-card" key={feature.title}>
                <feature.icon className="pd-blue" size={30} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-section pd-dark">
        <div className="pd-wrap pd-two">
          <div>
            <p className="pd-label">Applications</p>
            <h2>Recommended for Warm White, Pure White and High Power Lighting Applications</h2>
            <p>
              This 3535 RA90 white LED supports high power lighting designs that require
              good color rendering, controlled beam direction and ceramic package thermal
              performance. Typical use cases include camera illumination, security monitoring,
              studio lighting, architectural lighting and OEM lighting modules.
            </p>
            <div className="pd-application-gallery">
              {applicationImages.map((image) => (
                <figure className="pd-application-image" key={image.label}>
                  <img src={image.src} alt={image.alt} width="1024" height="1024" loading="lazy" />
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="pd-app-grid">
            {applications.map((item) => (
              <a href="#inquiry" key={item}>{item}<ArrowRight size={18} /></a>
            ))}
          </div>
        </div>
      </section>

      <section id="datasheet" className="pd-section">
        <div className="pd-wrap pd-download">
          <div>
            <p className="pd-label">Datasheet Download</p>
            <h2>Download the Official 3535 3W White LED RA90 Datasheet</h2>
            <p>
              The datasheet includes exterior structure, package dimensions, absolute
              maximum ratings, optical characteristics, reliability tests, reel information,
              handling precautions and reflow soldering instructions.
            </p>
          </div>
          <a className="pd-btn pd-btn-primary" href="/downloads/3535-3w-white-led-ra90-datasheet.pdf"><Download size={18} /> Download 3535 Datasheet</a>
        </div>
      </section>

      <section className="pd-section pd-white">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Packaging & Process Notes" title="Storage, Thermal Design and Reflow Soldering Guidance" />
          <div className="pd-grid-5">
            <article className="pd-card">
              <PackageCheck className="pd-blue" size={30} />
              <h3>Reel Packaging</h3>
              <p>The datasheet lists 1000 pcs per reel for SMT assembly and production handling.</p>
            </article>
            <article className="pd-card">
              <Gauge className="pd-blue" size={30} />
              <h3>Thermal Design</h3>
              <p>For 3W LEDs, the datasheet recommends metal substrate heat dissipation area above 80cm2 and good thermal conductivity.</p>
            </article>
            <article className="pd-card">
              <Zap className="pd-blue" size={30} />
              <h3>Current Limiting</h3>
              <p>Current limiting is required because small voltage changes can create large current variation and LED failure risk.</p>
            </article>
            <article className="pd-card">
              <ShieldCheck className="pd-blue" size={30} />
              <h3>ESD Handling</h3>
              <p>The LED is electrostatic sensitive. Operators, worktables, equipment and packaging should follow anti-static controls.</p>
            </article>
            <article className="pd-card">
              <Microscope className="pd-blue" size={30} />
              <h3>Reflow Control</h3>
              <p>Reflow soldering is allowed once. Avoid pressure on the LED body or lens during and after reflow.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="pd-section pd-white">
        <div className="pd-wrap">
          <SectionTitle eyebrow="FAQ" title="Common Buyer Questions" />
          <div className="pd-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="pd-section">
        <div className="pd-wrap pd-inquiry">
          <div className="pd-inquiry-info">
            <p className="pd-label">Product Inquiry</p>
            <h2>Send Your 3535 SMD LED Requirement</h2>
            <p>
              Share your required CCT, warm white or pure white target, CRI, luminous flux,
              quantity, application, thermal design and sample request details.
            </p>
            <a href="mailto:sales@kbrighter.com"><Mail size={20} /> sales@kbrighter.com</a>
            <a href="https://wa.me/8613530144658"><MessageCircle size={20} /> WhatsApp: +86 135 3014 4658</a>
          </div>
          <form className="pd-form" action="mailto:sales@kbrighter.com" method="post" encType="text/plain">
            <div className="pd-form-row">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Company" name="company" placeholder="Company name" />
            </div>
            <div className="pd-form-row">
              <Field label="Email" name="email" placeholder="name@company.com" type="email" />
              <Field label="WhatsApp" name="whatsapp" placeholder="+86 135 3014 4658" />
            </div>
            <Field label="Product Requirement" name="product_requirement" placeholder="3535 SMD LED, 3W white, RA90, CCT, flux, quantity..." />
            <label>
              Message
              <textarea name="message" placeholder="Please describe CCT, warm white / pure white target, CRI, flux range, application, quantity, sample request, datasheet needs and thermal requirements." />
            </label>
            <button className="pd-btn pd-btn-primary" type="submit">Submit 3535 LED RFQ <ArrowRight size={18} /></button>
          </form>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="pd-section-title">
      <p className="pd-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function ImageBlock({ title, text, src, alt }: { title: string; text: string; src: string; alt: string }) {
  return (
    <div className="pd-image-block">
      <div className="pd-image-frame">
        <img src={src} alt={alt} width="1024" height="1024" loading="lazy" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder: string; type?: string }) {
  return (
    <label>
      {label}
      <input name={name} placeholder={placeholder} type={type} />
    </label>
  );
}

const styles = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.pd-page{min-height:100vh;background:#f7f9fc;color:#142033;font-family:Inter,Arial,Helvetica,sans-serif}.pd-page a{text-decoration:none;color:inherit}.pd-wrap{width:min(1180px,calc(100% - 44px));margin:0 auto}.pd-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;padding:13px 20px;font-weight:900;font-size:15px;background:#142033;color:#fff;cursor:pointer}.pd-btn-primary{background:#f05a28;color:#fff}.pd-btn-primary:hover{background:#d94d20}.pd-btn-ghost{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.1);color:#fff}.pd-hero{position:relative;background:#142033;color:#fff}.pd-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px),radial-gradient(circle at 78% 22%,rgba(30,99,214,.34),transparent 36%),linear-gradient(120deg,rgba(20,32,51,.96),rgba(20,32,51,.78));background-size:44px 44px,44px 44px,auto,auto}.pd-hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;padding:86px 0}.pd-eyebrow,.pd-label{margin:0;color:#f05a28;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.pd-eyebrow{display:inline-block;color:#dce5f0;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);padding:9px 12px}.pd-hero h1{margin:24px 0 0;max-width:860px;font-size:56px;line-height:1.05}.pd-lead{max-width:680px;margin:24px 0 0;color:#d4deea;font-size:18px;line-height:1.75}.pd-spec-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.pd-spec-pills span{border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.08);padding:10px 12px;color:#dce5f0;font-size:13px;font-weight:800}.pd-cta-row{display:flex;flex-wrap:wrap;gap:13px;margin-top:34px}.pd-visual-panel{background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(244,247,251,.92)),repeating-linear-gradient(90deg,rgba(83,97,116,.08) 0 1px,transparent 1px 8px);border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(20,32,51,.2);color:#142033;min-height:520px;padding:28px}.pd-badge{float:right;background:#10b981;color:#fff;padding:7px 11px;font-size:12px;font-weight:900;text-transform:uppercase}.pd-hero-photo-frame{clear:both;margin:70px 0 28px;aspect-ratio:1.15/1;overflow:hidden;background:#fff;border:1px solid #dde3eb;box-shadow:0 14px 35px rgba(20,32,51,.12)}.pd-hero-photo-frame img{display:block;width:100%;height:100%;object-fit:contain}.pd-visual-info{display:flex;gap:14px;background:#142033;color:#fff;padding:22px}.pd-visual-info svg{color:#f05a28}.pd-visual-info strong{display:block;font-size:18px}.pd-visual-info p{margin:8px 0 0;color:#cbd7e5;line-height:1.6}.pd-section{padding:82px 0}.pd-white{background:#fff}.pd-section-title{max-width:820px}.pd-section h2{margin:14px 0 0;font-size:40px;line-height:1.15}.pd-muted,.pd-card p,.pd-image-block p{color:#536174;line-height:1.7}.pd-image-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}.pd-image-block{background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-image-block h3{font-size:21px}.pd-image-frame{display:block;overflow:hidden;aspect-ratio:1.7/1;background:#fff;border:1px solid #dde3eb}.pd-image-frame img{display:block;width:100%;height:100%;object-fit:contain}.pd-two{display:grid;grid-template-columns:.85fr 1.15fr;gap:46px}.pd-spec-table{background:#fff;border:1px solid #dde3eb}.pd-spec-table div{display:grid;grid-template-columns:220px 1fr;border-bottom:1px solid #e5ebf2}.pd-spec-table div:last-child{border-bottom:0}.pd-spec-table strong,.pd-spec-table span{padding:16px}.pd-spec-table strong{background:#eef2f7}.pd-tech-image,.pd-dimension-image{display:block;overflow:hidden;margin:24px 0 0;aspect-ratio:1/1.12;background:#fff;border:1px solid #dde3eb}.pd-tech-image img,.pd-dimension-image img{display:block;width:100%;height:100%;object-fit:contain}.pd-tech-image figcaption,.pd-dimension-image figcaption,.pd-application-image figcaption{margin:0;padding:12px 14px;background:#eef2f7;color:#536174;font-size:13px;line-height:1.5}.pd-grid-5{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin-top:40px}.pd-card{background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-card h3{font-size:19px}.pd-blue{color:#1e63d6}.pd-dark{background:#142033;color:#fff}.pd-dark h2{color:#fff}.pd-dark p:not(.pd-label){color:#d4deea;line-height:1.7}.pd-app-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.pd-app-grid a{display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);padding:20px;font-weight:900}.pd-application-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px}.pd-application-image{display:block;overflow:hidden;margin:0;aspect-ratio:1.2/1;background:#fff;border:1px solid #dde3eb}.pd-application-image img{display:block;width:100%;height:100%;object-fit:cover}.pd-download{display:flex;align-items:center;justify-content:space-between;gap:30px;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.1)}.pd-download h2{margin-top:12px}.pd-download p{max-width:720px;color:#536174;line-height:1.7}.pd-faq{display:grid;gap:14px;margin-top:36px}.pd-faq details{background:#fff;border:1px solid #dde3eb;padding:20px}.pd-faq summary{font-weight:900;cursor:pointer}.pd-faq p{color:#536174;line-height:1.7}.pd-inquiry{display:grid;grid-template-columns:.9fr 1.1fr;gap:28px;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.12)}.pd-inquiry-info{background:#eef2f7;padding:30px}.pd-inquiry-info h2{margin:14px 0 0;font-size:34px}.pd-inquiry-info p{color:#536174;line-height:1.7}.pd-inquiry-info a{display:flex;align-items:center;gap:11px;margin-top:17px;font-weight:800}.pd-inquiry-info svg{color:#1e63d6}.pd-form{display:grid;gap:16px}.pd-form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}.pd-form label{display:grid;gap:8px;font-size:14px;font-weight:900}.pd-form input,.pd-form textarea{width:100%;border:1px solid #cbd5e1;background:#fff;padding:14px;font:inherit;outline:none}.pd-form input:focus,.pd-form textarea:focus{border-color:#1e63d6}.pd-form textarea{min-height:145px;resize:vertical}@media(max-width:1050px){.pd-grid-5{grid-template-columns:repeat(3,1fr)}}@media(max-width:920px){.pd-hero-grid,.pd-two,.pd-inquiry{grid-template-columns:1fr}.pd-hero h1{font-size:42px}.pd-image-grid,.pd-grid-5{grid-template-columns:1fr 1fr}.pd-download{align-items:flex-start;flex-direction:column}.pd-visual-panel{min-height:auto}.pd-form-row{grid-template-columns:1fr}}@media(max-width:640px){.pd-wrap{width:min(100% - 32px,1180px)}.pd-hero-grid{padding:62px 0}.pd-hero h1{font-size:34px}.pd-lead{font-size:16px}.pd-section{padding:62px 0}.pd-section h2{font-size:30px}.pd-image-grid,.pd-grid-5,.pd-app-grid,.pd-application-gallery{grid-template-columns:1fr}.pd-spec-table div{grid-template-columns:1fr}.pd-inquiry{padding:20px}.pd-inquiry-info{padding:24px}.pd-btn{width:100%}}
`;
