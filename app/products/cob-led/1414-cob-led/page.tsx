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
  title: "1414 COB LED Manufacturer | KINGBRIGHT",
  description:
    "KINGBRIGHT 1414 COB LED / CM14XX mirror-aluminum COB LED series with 13.5 x 13.5 mm substrate, 11 mm LES, 120 degree viewing angle and 7W, 12W, 20W options for spotlights, downlights and commercial lighting.",
  keywords: [
    "1414 COB LED",
    "CM14XX COB LED",
    "COB LED manufacturer",
    "mirror aluminum COB LED",
    "COB LED for spotlights",
    "COB LED for downlights",
    "commercial lighting COB LED"
  ],
  openGraph: {
    title: "1414 COB LED Manufacturer | KINGBRIGHT",
    description:
      "1414 COB LED / CM14XX series for spotlights, downlights, PAR lamps, restaurant lighting and outdoor landscape lighting.",
    url: "/products/cob-led/1414-cob-led",
    type: "website"
  }
};

const seriesSpecs = [
  ["Product Series", "CM14XX"],
  ["Product Type", "1414 COB LED / mirror-aluminum COB LED"],
  ["Package Size", "13.5 x 13.5 x 1.5 mm"],
  ["Light Emitting Surface", "11 mm LES"],
  ["Substrate", "Mirror aluminum substrate with silicone package"],
  ["Viewing Angle", "120 degrees"],
  ["Voltage Options", "36V option listed in typical electrical table; coding rules also define 9V / 18V / 36V voltage codes"],
  ["CCT Range", "2700K, 3000K, 3500K, 4000K, 4500K, 5000K, 5700K, 6500K color ranks"],
  ["CRI Coding", "Ra70 / Ra80 / Ra90 / Ra95 options by product code"],
  ["ESD", "HBM 4000V"],
  ["Operating Temperature", "-30 C to +80 C"],
  ["Storage Temperature", "-40 C to +80 C"],
  ["Junction Temperature", "125 C max"],
  ["Hand Soldering", "350 +/-20 C for 3-5 sec"],
  ["Packaging", "25 pcs x 4; label includes product model, lot no., flux/power, voltage/current, CCT/XY, Ra/SD/R9 and quantity"],
  ["Compliance", "RoHS compliant"]
];

const electricalSpecs = [
  {
    model: "CM1407",
    power: "7W",
    maxPower: "12W",
    current: "200mA",
    maxCurrent: "360mA",
    pulse: "450mA",
    flux80: "1155 lm typ @ 4000K / Ra80",
    flux90: "985 lm typ @ 3000K / Ra90",
    efficacy80: "160 lm/W typ",
    efficacy90: "140 lm/W typ",
    thermal: "2.4 C/W"
  },
  {
    model: "CM1412",
    power: "12W",
    maxPower: "18W",
    current: "350mA",
    maxCurrent: "550mA",
    pulse: "700mA",
    flux80: "1950 lm typ @ 4000K / Ra80",
    flux90: "1700 lm typ @ 3000K / Ra90",
    efficacy80: "155 lm/W typ",
    efficacy90: "135 lm/W typ",
    thermal: "1.4 C/W"
  },
  {
    model: "CM1420",
    power: "20W",
    maxPower: "30W",
    current: "550mA",
    maxCurrent: "750mA",
    pulse: "820mA",
    flux80: "2980 lm typ @ 4000K / Ra80",
    flux90: "2620 lm typ @ 3000K / Ra90",
    efficacy80: "155 lm/W typ",
    efficacy90: "135 lm/W typ",
    thermal: "0.85 C/W"
  }
];

const features = [
  {
    title: "Mirror-Aluminum COB Structure",
    text: "Specular aluminum substrate supports efficient light extraction and a professional COB lighting module structure.",
    icon: Sparkles
  },
  {
    title: "Multiple Power Options",
    text: "CM1407, CM1412 and CM1420 options cover 7W, 12W and 20W project requirements with the same 1414 platform.",
    icon: Zap
  },
  {
    title: "120 Degree Beam Output",
    text: "Wide COB light emission is suitable for spotlights, downlights, PAR lamps and commercial fixture optical design.",
    icon: Gauge
  },
  {
    title: "High Reliability Design",
    text: "The datasheet specifies HBM 4000V ESD sensitivity, 125 C junction temperature and RoHS compliant construction.",
    icon: ShieldCheck
  },
  {
    title: "Engineering Support",
    text: "KINGBRIGHT can support model selection, CCT/CRI review, thermal design communication and OEM lighting projects.",
    icon: Microscope
  }
];

const applications = [
  "Spotlights",
  "Downlights",
  "PAR lamps",
  "LED bulbs",
  "Restaurant lighting",
  "Commercial track lighting",
  "Outdoor landscape lighting"
];

const applicationImages = [
  {
    src: "/images/products/1414-cob-led/1414-cob-led-application-video-light.jpg",
    alt: "1414 COB LED application for professional video light and high CRI fixture design",
    label: "Video / Studio Lighting"
  },
  {
    src: "/images/products/1414-cob-led/1414-cob-led-application-track-light.jpg",
    alt: "1414 COB LED application for commercial track light and spotlight fixture",
    label: "Track Light / Spotlight"
  },
  {
    src: "/images/products/1414-cob-led/1414-cob-led-application-landscape-lighting.jpg",
    alt: "1414 COB LED application for outdoor landscape lighting and architectural lighting",
    label: "Landscape Lighting"
  }
];

const faqs = [
  ["What is the 1414 COB LED product series?", "This page covers the KINGBRIGHT CM14XX 1414 COB LED series, a mirror-aluminum COB LED platform with 13.5 x 13.5 mm substrate size and 11 mm light emitting surface."],
  ["Which power options are available?", "The datasheet lists CM1407, CM1412 and CM1420 options, corresponding to typical 7W, 12W and 20W COB LED configurations."],
  ["What color temperatures can be selected?", "The datasheet includes color ranks from 2700K to 6500K, covering warm white, neutral white and cool white commercial lighting needs."],
  ["What CRI options are supported?", "The product coding rules define Ra70, Ra80, Ra90 and Ra95 options. Final availability should be confirmed with the sales engineer during quotation."],
  ["What applications are recommended?", "The datasheet recommends spotlights, downlights, PAR lamps, bulbs, restaurant lights and outdoor landscape lighting."],
  ["What should engineers review before mass production?", "Please confirm CCT, CRI, voltage option, drive current, heat dissipation, soldering process, optical structure and reliability requirements before mass production."],
  ["Can KINGBRIGHT provide datasheet and samples?", "Yes. Send your target model, power, CCT, CRI, quantity and application details to request datasheet confirmation and sample support."]
];

export default function Product1414CobPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "1414 COB LED / CM14XX COB LED",
    brand: { "@type": "Brand", name: "KINGBRIGHT" },
    description:
      "KINGBRIGHT 1414 COB LED CM14XX mirror-aluminum COB series for spotlights, downlights, PAR lamps, bulbs and commercial lighting projects.",
    category: "COB LED Components",
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
            <p className="pd-eyebrow">1414 COB LED</p>
            <h1>1414 COB LED for Spotlights, Downlights and Commercial Lighting</h1>
            <p className="pd-lead">
              KINGBRIGHT CM14XX 1414 COB LED is a mirror-aluminum COB LED series
              with 13.5 x 13.5 mm substrate, 11 mm light emitting surface, 120 degree
              viewing angle and 7W / 12W / 20W options for professional lighting projects.
            </p>
            <div className="pd-spec-pills">
              <span>Series: CM14XX</span>
              <span>Size: 13.5 x 13.5 x 1.5 mm</span>
              <span>LES: 11 mm</span>
              <span>Power: 7W / 12W / 20W</span>
              <span>Angle: 120 deg</span>
              <span>CCT: 2700K-6500K</span>
              <span>ESD: HBM 4000V</span>
            </div>
            <div className="pd-cta-row">
              <a className="pd-btn pd-btn-primary" href="#inquiry">Request 1414 COB LED Quotation <ArrowRight size={18} /></a>
              <a className="pd-btn pd-btn-ghost" href="#inquiry">Request COB LED Samples</a>
              <a className="pd-btn pd-btn-ghost" href="#datasheet">Get COB Datasheet</a>
              <a className="pd-btn pd-btn-ghost" href="/products/smd-led/3535-smd-led">Compare 3535 SMD LED</a>
            </div>
          </div>
          <div className="pd-visual-panel">
            <span className="pd-badge">COB LED Module</span>
            <div className="pd-hero-photo-frame">
              <img
                src="/images/products/1414-cob-led/1414-cob-led-product-image.png"
                alt="KINGBRIGHT 1414 COB LED CM14XX mirror aluminum COB product image"
                width="406"
                height="402"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="pd-visual-info">
              <Factory size={24} />
              <div>
                <strong>Mirror-Aluminum COB LED Platform</strong>
                <p>Designed for commercial fixtures that require stable COB output, CCT/CRI selection and thermal review.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Product Images" title="1414 COB LED Product, Dimensions and Application Views" />
          <div className="pd-image-grid">
            <ImageBlock
              title="1414 COB LED Product Appearance"
              text="Real product image for the CM14XX mirror-aluminum COB LED package."
              src="/images/products/1414-cob-led/1414-cob-led-product-image.png"
              alt="1414 COB LED product appearance image from KINGBRIGHT"
            />
            <ImageBlock
              title="1414 COB LED Dimensions"
              text="Package outline with 13.5 mm body size, 11 mm light emitting surface and 1.55 mm side reference."
              src="/images/products/1414-cob-led/1414-cob-led-dimension-drawing.png"
              alt="1414 COB LED package dimension drawing showing 13.5 mm substrate and 11 mm LES"
            />
            <ImageBlock
              title="Commercial Lighting Application"
              text="Application reference for spotlights, downlights, track lights and landscape lighting fixtures."
              src="/images/products/1414-cob-led/1414-cob-led-application-track-light.jpg"
              alt="1414 COB LED application image for commercial track light and spotlight"
            />
          </div>
        </div>
      </section>

      <section id="specs" className="pd-section pd-white">
        <div className="pd-wrap pd-two">
          <div>
            <SectionTitle eyebrow="Technical Specifications" title="Real CM14XX 1414 COB LED Datasheet Parameters" />
            <p className="pd-muted">
              The following values are extracted from the KINGBRIGHT CM14XX datasheet.
              Final product code should be confirmed by power, CCT, CRI, voltage code,
              color tolerance and suffix requirements.
            </p>
            <figure className="pd-tech-image">
              <img
                src="/images/products/1414-cob-led/1414-cob-led-dimension-drawing.png"
                alt="KINGBRIGHT 1414 COB LED technical dimension drawing"
                width="1993"
                height="1267"
                loading="lazy"
              />
              <figcaption>1414 COB LED package dimensions. All dimensions are in mm; tolerance is +/-0.2 mm unless otherwise noted.</figcaption>
            </figure>
          </div>
          <div className="pd-spec-table">
            {seriesSpecs.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Electrical & Optical Options" title="CM1407, CM1412 and CM1420 COB LED Options" />
          <div className="pd-responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Typical Power</th>
                  <th>Max Power</th>
                  <th>Binning Current</th>
                  <th>Max IF</th>
                  <th>Pulse IF</th>
                  <th>Typical Lumens</th>
                  <th>Thermal Resistance</th>
                </tr>
              </thead>
              <tbody>
                {electricalSpecs.map((item) => (
                  <tr key={item.model}>
                    <td>{item.model}</td>
                    <td>{item.power}</td>
                    <td>{item.maxPower}</td>
                    <td>{item.current} / 36V</td>
                    <td>{item.maxCurrent}</td>
                    <td>{item.pulse}</td>
                    <td>{item.flux80}; {item.flux90}</td>
                    <td>{item.thermal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pd-section pd-white">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Features & Advantages" title="COB LED Features for B2B Lighting Projects" />
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
            <h2>Recommended 1414 COB LED Applications</h2>
            <p>
              The CM14XX series is designed for lighting products that need compact
              COB emission, wide viewing angle and selectable CCT/CRI. Typical use
              cases include spotlights, downlights, PAR lamps, bulbs, restaurant
              lights and outdoor landscape lighting.
            </p>
            <div className="pd-application-gallery">
              {applicationImages.map((image) => (
                <figure className="pd-application-image" key={image.label}>
                  <img src={image.src} alt={image.alt} width="900" height="700" loading="lazy" />
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
            <h2>Download the Official CM14XX 1414 COB LED Datasheet</h2>
            <p>
              The datasheet includes product coding rules, package dimensions, optical
              and electrical characteristics, CCT color ranks, packaging specifications
              and storage / handling precautions.
            </p>
          </div>
          <a className="pd-btn pd-btn-primary" href="/downloads/cm14xx-1414-cob-led-datasheet.pdf"><Download size={18} /> Download COB Datasheet</a>
        </div>
      </section>

      <section className="pd-section pd-white">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Process Notes" title="Packaging, Storage and Handling Guidance" />
          <div className="pd-grid-5">
            <article className="pd-card">
              <PackageCheck className="pd-blue" size={30} />
              <h3>Packaging Label</h3>
              <p>Labels include product model, lot number, flux/power, voltage/current, CCT/XY, Ra/SD/R9 and quantity.</p>
            </article>
            <article className="pd-card">
              <ShieldCheck className="pd-blue" size={30} />
              <h3>Moisture Control</h3>
              <p>Store in a drying cabinet with desiccant at 5 C to 30 C and humidity below 60%RH.</p>
            </article>
            <article className="pd-card">
              <Microscope className="pd-blue" size={30} />
              <h3>Silicone Surface</h3>
              <p>Avoid strong pressure on the silicone surface. Use suitable tools and handle from the side surface.</p>
            </article>
            <article className="pd-card">
              <Zap className="pd-blue" size={30} />
              <h3>ESD Protection</h3>
              <p>Operators should use anti-static wrist straps or gloves. Equipment and instruments should be properly grounded.</p>
            </article>
            <article className="pd-card">
              <Gauge className="pd-blue" size={30} />
              <h3>Thermal Review</h3>
              <p>COB LEDs require proper heat dissipation design. Confirm substrate, fixture structure and drive current before production.</p>
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
            <h2>Send Your 1414 COB LED Requirement</h2>
            <p>
              Share your required model, power, CCT, CRI, voltage, quantity,
              fixture type and sample request details. KINGBRIGHT can support
              datasheet review and OEM lighting project communication.
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
            <Field label="Product Requirement" name="product_requirement" placeholder="1414 COB LED, CM1407 / CM1412 / CM1420, CCT, CRI, quantity..." />
            <label>
              Message
              <textarea name="message" placeholder="Please describe power, CCT, CRI, voltage option, fixture type, sample request, datasheet needs and annual demand." />
            </label>
            <button className="pd-btn pd-btn-primary" type="submit">Submit 1414 COB LED RFQ <ArrowRight size={18} /></button>
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
        <img src={src} alt={alt} width="1024" height="700" loading="lazy" />
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
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.pd-page{min-height:100vh;background:#f7f9fc;color:#142033;font-family:Inter,Arial,Helvetica,sans-serif}.pd-page a{text-decoration:none;color:inherit}.pd-wrap{width:min(1180px,calc(100% - 44px));margin:0 auto}.pd-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;padding:13px 20px;font-weight:900;font-size:15px;background:#142033;color:#fff;cursor:pointer}.pd-btn-primary{background:#f05a28;color:#fff}.pd-btn-primary:hover{background:#d94d20}.pd-btn-ghost{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.1);color:#fff}.pd-hero{position:relative;background:#142033;color:#fff}.pd-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px),radial-gradient(circle at 78% 22%,rgba(30,99,214,.34),transparent 36%),linear-gradient(120deg,rgba(20,32,51,.96),rgba(20,32,51,.78));background-size:44px 44px,44px 44px,auto,auto}.pd-hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;padding:86px 0}.pd-eyebrow,.pd-label{margin:0;color:#f05a28;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.pd-eyebrow{display:inline-block;color:#dce5f0;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);padding:9px 12px}.pd-hero h1{margin:24px 0 0;max-width:860px;font-size:56px;line-height:1.05}.pd-lead{max-width:680px;margin:24px 0 0;color:#d4deea;font-size:18px;line-height:1.75}.pd-spec-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.pd-spec-pills span{border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.08);padding:10px 12px;color:#dce5f0;font-size:13px;font-weight:800}.pd-cta-row{display:flex;flex-wrap:wrap;gap:13px;margin-top:34px}.pd-visual-panel{background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(244,247,251,.92)),repeating-linear-gradient(90deg,rgba(83,97,116,.08) 0 1px,transparent 1px 8px);border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(20,32,51,.2);color:#142033;min-height:520px;padding:28px}.pd-badge{float:right;background:#10b981;color:#fff;padding:7px 11px;font-size:12px;font-weight:900;text-transform:uppercase}.pd-hero-photo-frame{clear:both;margin:70px 0 28px;aspect-ratio:1.15/1;overflow:hidden;background:#fff;border:1px solid #dde3eb;box-shadow:0 14px 35px rgba(20,32,51,.12)}.pd-hero-photo-frame img{display:block;width:100%;height:100%;object-fit:contain}.pd-visual-info{display:flex;gap:14px;background:#142033;color:#fff;padding:22px}.pd-visual-info svg{color:#f05a28}.pd-visual-info strong{display:block;font-size:18px}.pd-visual-info p{margin:8px 0 0;color:#cbd7e5;line-height:1.6}.pd-section{padding:82px 0}.pd-white{background:#fff}.pd-section-title{max-width:820px}.pd-section h2{margin:14px 0 0;font-size:40px;line-height:1.15}.pd-muted,.pd-card p,.pd-image-block p{color:#536174;line-height:1.7}.pd-image-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}.pd-image-block{background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-image-block h3{font-size:21px}.pd-image-frame{display:block;overflow:hidden;aspect-ratio:1.7/1;background:#fff;border:1px solid #dde3eb}.pd-image-frame img{display:block;width:100%;height:100%;object-fit:contain}.pd-two{display:grid;grid-template-columns:.85fr 1.15fr;gap:46px}.pd-spec-table{background:#fff;border:1px solid #dde3eb}.pd-spec-table div{display:grid;grid-template-columns:220px 1fr;border-bottom:1px solid #e5ebf2}.pd-spec-table div:last-child{border-bottom:0}.pd-spec-table strong,.pd-spec-table span{padding:16px}.pd-spec-table strong{background:#eef2f7}.pd-tech-image{display:block;overflow:hidden;margin:24px 0 0;aspect-ratio:1.55/1;background:#fff;border:1px solid #dde3eb}.pd-tech-image img{display:block;width:100%;height:100%;object-fit:contain}.pd-tech-image figcaption,.pd-application-image figcaption{margin:0;padding:12px 14px;background:#eef2f7;color:#536174;font-size:13px;line-height:1.5}.pd-responsive-table{margin-top:32px;overflow:auto;background:#fff;border:1px solid #dde3eb}.pd-responsive-table table{width:100%;border-collapse:collapse;min-width:980px}.pd-responsive-table th,.pd-responsive-table td{padding:15px;text-align:left;border-bottom:1px solid #e5ebf2;vertical-align:top}.pd-responsive-table th{background:#142033;color:#fff;font-size:13px}.pd-grid-5{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin-top:40px}.pd-card{background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-card h3{font-size:19px}.pd-blue{color:#1e63d6}.pd-dark{background:#142033;color:#fff}.pd-dark h2{color:#fff}.pd-dark p:not(.pd-label){color:#d4deea;line-height:1.7}.pd-app-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.pd-app-grid a{display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);padding:20px;font-weight:900}.pd-application-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px}.pd-application-image{display:block;overflow:hidden;margin:0;aspect-ratio:1.2/1;background:#fff;border:1px solid #dde3eb}.pd-application-image img{display:block;width:100%;height:100%;object-fit:cover}.pd-download{display:flex;align-items:center;justify-content:space-between;gap:30px;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.1)}.pd-download h2{margin-top:12px}.pd-download p{max-width:720px;color:#536174;line-height:1.7}.pd-faq{display:grid;gap:14px;margin-top:36px}.pd-faq details{background:#fff;border:1px solid #dde3eb;padding:20px}.pd-faq summary{font-weight:900;cursor:pointer}.pd-faq p{color:#536174;line-height:1.7}.pd-inquiry{display:grid;grid-template-columns:.9fr 1.1fr;gap:28px;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.12)}.pd-inquiry-info{background:#eef2f7;padding:30px}.pd-inquiry-info h2{margin:14px 0 0;font-size:34px}.pd-inquiry-info p{color:#536174;line-height:1.7}.pd-inquiry-info a{display:flex;align-items:center;gap:11px;margin-top:17px;font-weight:800}.pd-inquiry-info svg{color:#1e63d6}.pd-form{display:grid;gap:16px}.pd-form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}.pd-form label{display:grid;gap:8px;font-size:14px;font-weight:900}.pd-form input,.pd-form textarea{width:100%;border:1px solid #cbd5e1;background:#fff;padding:14px;font:inherit;outline:none}.pd-form input:focus,.pd-form textarea:focus{border-color:#1e63d6}.pd-form textarea{min-height:145px;resize:vertical}@media(max-width:1050px){.pd-grid-5{grid-template-columns:repeat(3,1fr)}}@media(max-width:920px){.pd-hero-grid,.pd-two,.pd-inquiry{grid-template-columns:1fr}.pd-hero h1{font-size:42px}.pd-image-grid,.pd-grid-5{grid-template-columns:1fr 1fr}.pd-download{align-items:flex-start;flex-direction:column}.pd-visual-panel{min-height:auto}.pd-form-row{grid-template-columns:1fr}}@media(max-width:640px){.pd-wrap{width:min(100% - 32px,1180px)}.pd-hero-grid{padding:62px 0}.pd-hero h1{font-size:34px}.pd-lead{font-size:16px}.pd-section{padding:62px 0}.pd-section h2{font-size:30px}.pd-image-grid,.pd-grid-5,.pd-app-grid,.pd-application-gallery{grid-template-columns:1fr}.pd-spec-table div{grid-template-columns:1fr}.pd-inquiry{padding:20px}.pd-inquiry-info{padding:24px}.pd-btn{width:100%}}
`;
