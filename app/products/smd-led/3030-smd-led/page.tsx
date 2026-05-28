import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CircuitBoard,
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
  title: "3030 SMD LED Manufacturer | KINGBRIGHT",
  description:
    "KINGBRIGHT 3030 SMD LED / 3030 6V150mA SMD LED, product code 9.3030W3V32F, VF 5.8-6.4V, 120 degree viewing angle, Ra70/Ra80/Ra90 and 2700K-6500K CCT options.",
  keywords: [
    "3030 SMD LED",
    "3030 6V150mA SMD LED",
    "SMD3030 LED",
    "3030 LED manufacturer",
    "3030 white SMD LED",
    "surface mount LED supplier",
    "solar street light LED component",
    "high bay light LED component"
  ],
  openGraph: {
    title: "3030 SMD LED Manufacturer | KINGBRIGHT",
    description:
      "KINGBRIGHT 3030 6V150mA SMD LED with VF 5.8-6.4V, 120 degree viewing angle, Ra70/Ra80/Ra90 and high luminous flux options.",
    url: "/products/smd-led/3030-smd-led",
    type: "website"
  }
};

const specs = [
  ["Product Code", "9.3030W3V32F"],
  ["Code Structure", "9.3030XXV32XC-HC4-XX series, 3030 package, 6V class, 2 chips, Ra70/Ra80/Ra90 options"],
  ["Package Size", "3.0 x 3.0 x 0.6 mm, tolerance +/-0.15 mm unless otherwise noted"],
  ["Forward Voltage", "5.8V min / 6.4V max at IF=150mA"],
  ["Forward Current", "150mA rated forward current"],
  ["Maximum Operating Current", "240mA max operating current"],
  ["Pulse Forward Current", "180mA max, 10kHz frequency, duty ratio <=10%"],
  ["Power Dissipation", "1000mW / 1.0W rated power"],
  ["Maximum Power", "1.5W max power"],
  ["Color Temperature", "2700K / 3000K / 3500K / 4000K / 4500K / 5000K / 5700K / 6500K"],
  ["Viewing Angle", "120 degrees at IF=150mA"],
  ["Luminous Flux", "105-165 lm range by CCT and CRI bin at IF=150mA"],
  ["CRI", "Ra70 / Ra80 / Ra90 options"],
  ["Color Tolerance", "SDCM <=6 at IF=150mA"],
  ["ESD", "HBM 2000V"],
  ["Operating Temperature", "-40 C to +85 C"],
  ["Storage Temperature", "-40 C to +85 C"],
  ["Junction Temperature", "125 C max"],
  ["Thermal Resistance", "18 C/W"],
  ["Reverse Voltage", "10V"],
  ["Soldering Temperature", "260 C for 10 sec"],
  ["Packaging", "Tape and reel packaging; label includes part number, lot number, IV, VF/IF, CCT/XY, Ra/SD/R9, quantity, date and code"]
];

const fluxBins = [
  ["6500K / 5700K / 5000K / 4000K", "Ra70", "155-165 lm"],
  ["6500K / 5700K / 5000K / 4000K", "Ra80", "145-155 lm"],
  ["6500K / 5700K / 5000K / 4000K", "Ra90", "125-135 lm"],
  ["3500K / 3000K", "Ra70", "145-155 lm"],
  ["3500K / 3000K", "Ra80", "135-145 lm"],
  ["3500K / 3000K", "Ra90", "115-125 lm"],
  ["2700K", "Ra70", "135-145 lm"],
  ["2700K", "Ra80", "125-135 lm"],
  ["2700K", "Ra90", "105-115 lm"]
];

const features = [
  {
    title: "Stable Brightness",
    text: "Mass production bins support consistent luminous flux and color performance.",
    icon: Sparkles
  },
  {
    title: "Low Light Decay",
    text: "Silicone encapsulation and process control support reliable long-term operation.",
    icon: Gauge
  },
  {
    title: "High Efficiency",
    text: "3030 6V package delivers up to 155-165 lm depending on CCT and CRI bin.",
    icon: Zap
  },
  {
    title: "Long Lifespan",
    text: "Designed for operation under rated current, temperature and soldering conditions.",
    icon: ShieldCheck
  },
  {
    title: "Good Consistency",
    text: "VF, XY, brightness and Ra bin control helps reduce color and brightness variation.",
    icon: BadgeCheck
  }
];

const applications = [
  "Traditional lighting replacement",
  "Ordinary lighting",
  "Indoor and outdoor sign board backlight",
  "Solar street lighting",
  "High bay lighting",
  "Architectural lighting",
  "Decorative lighting"
];

const applicationImages = [
  {
    src: "/images/products/3030-smd-led/3030-smd-led-application-solar-street-light.png",
    alt: "3030 SMD LED application for solar street light fixture",
    label: "Solar Street Lighting"
  },
  {
    src: "/images/products/3030-smd-led/3030-smd-led-application-high-bay-light.png",
    alt: "3030 SMD LED application for high bay industrial lighting",
    label: "High Bay Lighting"
  },
  {
    src: "/images/products/3030-smd-led/3030-smd-led-application-ceiling-light.png",
    alt: "3030 SMD LED application for indoor ceiling light and decorative lighting",
    label: "Ceiling Lighting"
  }
];

const productImages = [
  {
    title: "3030 SMD LED Product Appearance",
    text: "Real 3030 square-cup SMD LED package photo for product appearance review.",
    src: "/images/products/3030-smd-led/3030-smd-led-product-image.png",
    alt: "KINGBRIGHT 3030 SMD LED product appearance close-up image"
  },
  {
    title: "3030 Package Dimensions",
    text: "Dimension drawing and recommended soldering pattern for engineering review.",
    src: "/images/products/3030-smd-led/3030-smd-led-dimension-drawing.png",
    alt: "KINGBRIGHT 3030 SMD LED package dimensions and soldering pattern drawing"
  },
  {
    title: "Lighting Application Reference",
    text: "Outdoor and industrial lighting application reference for 3030 SMD LED component selection.",
    src: "/images/products/3030-smd-led/3030-smd-led-application-solar-street-light.png",
    alt: "3030 SMD LED application image for solar street lighting projects"
  }
];

const faqs = [
  ["What is the rated current of this 3030 SMD LED?", "The rated forward current is IF=150mA. Maximum operating current is 240mA, and pulse forward current is 180mA max under 10kHz frequency and duty ratio <=10%."],
  ["What voltage range should engineers design for?", "The datasheet lists forward voltage from 5.8V min to 6.4V max at IF=150mA for this 6V 3030 LED."],
  ["Which CCT and CRI options are available?", "Available CCT options include 2700K, 3000K, 3500K, 4000K, 4500K, 5000K, 5700K and 6500K. CRI options include Ra70, Ra80 and Ra90."],
  ["What luminous flux can buyers expect?", "Flux depends on CCT and CRI bin. The mass production list ranges from 105-115 lm for 2700K Ra90 to 155-165 lm for several Ra70 cool/neutral white bins at IF=150mA."],
  ["What soldering precautions should be followed?", "The Pb-free reflow profile lists a 245-260 C peak temperature, 10-30 seconds within 5 C of peak, and total process time up to 480 seconds from 25 C to peak."],
  ["What packaging information is shown on the label?", "The label includes part number, lot number, luminous flux bin, VF/IF, CCT/XY, Ra/SD/R9, quantity, date and code for production traceability."],
  ["How should opened packages be stored?", "After opening, soldering should be completed as soon as possible, ideally within 12 hours. Remaining material should be sealed or stored at 5-40°C with humidity no more than 30%."],
  ["What applications are recommended for 3030 SMD LED?", "The datasheet recommends traditional lighting replacement, ordinary lighting, indoor and outdoor sign board backlight, architectural lighting and decorative lighting. It is also suitable for high-output lighting projects after thermal review."]
];

const relatedProducts = [
  {
    name: "020 Mono-Color SMD LED",
    image: "/images/smd-led/020-mono-color-smd-led.jpg",
    alt: "KINGBRIGHT 020 mono-color SMD LED specification image"
  },
  {
    name: "020 Full-Color SMD LED",
    image: "/images/smd-led/020-full-color-smd-led.jpg",
    alt: "KINGBRIGHT 020 full-color SMD LED specification image"
  },
  {
    name: "3030 White SMD LED",
    image: "/images/smd-led/3030-small-cup-white-smd-led.jpg",
    alt: "KINGBRIGHT 3030 small cup white SMD LED specification image"
  },
  {
    name: "3528 Mono-Color SMD LED",
    image: "/images/smd-led/3528-mono-color-smd-led.jpg",
    alt: "KINGBRIGHT 3528 mono-color SMD LED specification image"
  },
  {
    name: "3825 Ballhead SMD LED",
    image: "/images/smd-led/3825-ballhead-smd-led.jpg",
    alt: "KINGBRIGHT 3825 ballhead SMD LED specification image"
  },
  {
    name: "5050 Mono-Color SMD LED",
    image: "/images/smd-led/5050-mono-color-smd-led.jpg",
    alt: "KINGBRIGHT 5050 mono-color SMD LED specification image"
  },
  {
    name: "5050 Magic Color SMD LED",
    image: "/images/smd-led/5050-magic-color-smd-led.jpg",
    alt: "KINGBRIGHT 5050 magic color SMD LED with IC built in specification image"
  },
  {
    name: "5050 RGB SMD LED",
    image: "/images/smd-led/5050-full-color-smd-led.jpg",
    alt: "KINGBRIGHT 5050 full-color RGB SMD LED specification image"
  }
];

export default function ProductTemplatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "3030 SMD LED / 3030 6V150mA SMD LED",
    brand: {
      "@type": "Brand",
      name: "KINGBRIGHT"
    },
    description:
      "KINGBRIGHT 3030 SMD LED with IF=150mA, VF 5.8-6.4V, 120 degree viewing angle, Ra70/Ra80/Ra90 and 2700K-6500K CCT options.",
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
            <p className="pd-eyebrow">3030 SMD LED</p>
            <h1>3030 6V150mA SMD LED for High Lumen Lighting Projects</h1>
            <p className="pd-lead">
              KINGBRIGHT 3030 SMD LED, code 9.3030W3V32F, is a 6V high-lumen square-cup
              surface mount LED with IF=150mA drive current, designed for lighting replacement,
              ordinary lighting, sign board backlight, solar street lighting and high bay lighting projects.
            </p>
            <div className="pd-spec-pills">
              <span>Code: 9.3030W3V32F</span>
              <span>Rated Power: 1.0W</span>
              <span>Max Power: 1.5W</span>
              <span>IF: 150mA</span>
              <span>VF: 5.8-6.4V</span>
              <span>CCT: 2700K-6500K</span>
              <span>CRI: Ra70 / Ra80 / Ra90</span>
            </div>
            <div className="pd-cta-row">
              <a className="pd-btn pd-btn-primary" href="#inquiry">Request 3030 LED Quotation <ArrowRight size={18} /></a>
              <a className="pd-btn pd-btn-ghost" href="#inquiry">Request 3030 Samples</a>
              <a className="pd-btn pd-btn-ghost" href="#datasheet">Get 3030 Datasheet</a>
              <a className="pd-btn pd-btn-ghost" href="#inquiry">Contact Sales Engineer</a>
              <a className="pd-btn pd-btn-ghost" href="/products/smd-led/3535-smd-led">Compare 3535 3W LED</a>
              <a className="pd-btn pd-btn-ghost" href="/products/smd-led/2835-0-5w-smd-led">Compare 2835 0.5W</a>
            </div>
          </div>
          <div className="pd-visual-panel">
            <span className="pd-badge">Engineering Review</span>
            <div className="pd-hero-photo-frame">
              <img
                src="/images/products/3030-smd-led/3030-smd-led-product-image.png"
                alt="KINGBRIGHT 3030 SMD LED product image for overseas B2B buyer review"
                width="1024"
                height="958"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="pd-visual-info">
              <Factory size={24} />
              <div>
                <strong>3030 LED Package + Engineering Support</strong>
                <p>Small package, high efficiency, low-voltage operation, instant light response, long operation life, lead-free and RoHS compliant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Product Images" title="3030 SMD LED Photos, Package Views and Application Context" />
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
            <SectionTitle eyebrow="Technical Specifications" title="Real 3030 SMD LED Datasheet Parameters" />
            <p className="pd-muted">
              These values are taken from the KINGBRIGHT 3030 6V150mA LED specification for
              mass production supply at TA=25 C. Flux and color values should be
              confirmed by selected CCT, CRI and bin requirements.
            </p>
            <figure className="pd-tech-image">
              <img
                src="/images/products/3030-smd-led/3030-smd-led-dimension-drawing.png"
                alt="KINGBRIGHT 3030 SMD LED technical package dimensions and soldering pattern drawing"
                width="1426"
                height="1600"
                loading="lazy"
              />
              <figcaption>3030 SMD LED package dimensions and recommended soldering pattern for engineering review.</figcaption>
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
            <SectionTitle eyebrow="Dimensions" title="3030 Square-Cup Package and Solder Pad Reference" />
            <p className="pd-muted">
              The 3030 product family uses a compact square-cup SMD package for high-lumen
              lighting projects. Final dimensions, solder pad information and recommended PCB layout
              should be confirmed from the official datasheet before PCB design.
            </p>
          </div>
          <figure className="pd-dimension-image">
            <img
              src="/images/products/3030-smd-led/3030-smd-led-dimension-drawing.png"
              alt="KINGBRIGHT 3030 SMD LED dimension drawing with package outline polarity and solder pad pattern"
              width="1426"
              height="1600"
              loading="lazy"
            />
            <figcaption>Package outline, polarity reference and soldering pattern. Request the official datasheet before PCB layout confirmation.</figcaption>
          </figure>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Mass Production Bins" title="CCT, CRI and Luminous Flux Options at IF=150mA" />
          <div className="pd-bin-table">
            <div className="pd-bin-head">
              <strong>CCT Option</strong>
              <strong>CRI</strong>
              <strong>Luminous Flux</strong>
            </div>
            {fluxBins.map(([cct, cri, flux]) => (
              <div key={`${cct}-${cri}`}>
                <span>{cct}</span>
                <span>{cri}</span>
                <span>{flux}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Features & Advantages" title="Built for Stable Brightness and Mass Production Consistency" />
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
            <h2>Recommended for High Lumen Lighting and Backlight Projects</h2>
            <p>
              The datasheet recommends this 3030 SMD LED for traditional lighting
              replacement, ordinary lighting, indoor and outdoor sign board backlight,
              architectural lighting and decorative lighting. Its 6V high-lumen output also
              supports solar street lights, high bay lights and ceiling lighting projects.
            </p>
            <div className="pd-application-gallery">
              {applicationImages.map((image) => (
                <figure className="pd-application-image" key={image.label}>
                  <img src={image.src} alt={image.alt} width="367" height="205" loading="lazy" />
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
            <h2>Request the Official 3030 SMD LED Datasheet</h2>
            <p>
              The datasheet includes package dimensions, coding rules, electro-optical
              characteristics, absolute maximum ratings, mass production list, CIE binning,
              packaging specifications, reflow soldering instructions and handling precautions.
            </p>
          </div>
          <a className="pd-btn pd-btn-primary" href="/downloads/3030-6v150ma-smd-led-datasheet.pdf"><Download size={18} /> Download 3030 Datasheet</a>
        </div>
      </section>

      <section className="pd-section pd-white">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Packaging & Reflow" title="Tape-and-Reel Packaging and Pb-Free Reflow Profile" />
          <div className="pd-grid-5">
            <article className="pd-card">
              <PackageCheck className="pd-blue" size={30} />
              <h3>Packaging Information</h3>
              <p>Tape-and-reel packaging is used for SMT assembly. Labels include part number, lot number, IV, VF/IF, CCT/XY, Ra/SD/R9, quantity, date and code.</p>
            </article>
            <article className="pd-card">
              <Gauge className="pd-blue" size={30} />
              <h3>Reflow Profile</h3>
              <p>Pb-free SnAgCu assembly profile with 245-260 C peak temperature and 10-30 seconds within 5 C of peak.</p>
            </article>
            <article className="pd-card">
              <Zap className="pd-blue" size={30} />
              <h3>Thermal Control</h3>
              <p>Ramp-up and ramp-down rates should be controlled according to the datasheet profile to protect LED package reliability.</p>
            </article>
            <article className="pd-card">
              <ShieldCheck className="pd-blue" size={30} />
              <h3>Moisture Handling</h3>
              <p>After opening, soldering should be completed quickly. Remaining material should be sealed or stored under controlled humidity.</p>
            </article>
            <article className="pd-card">
              <Microscope className="pd-blue" size={30} />
              <h3>Engineering Review</h3>
              <p>Confirm solder pad design, thermal path, bin selection and application temperature before mass production.</p>
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

      <section className="pd-section">
        <div className="pd-wrap">
          <SectionTitle eyebrow="Related Products" title="Related LED Components for Lighting Projects" />
          <div className="pd-related">
            {relatedProducts.map((item) => (
              <a href="#inquiry" key={item.name}>
                <span className="pd-related-image">
                  <img src={item.image} alt={item.alt} width="1080" height="440" loading="lazy" />
                </span>
                <strong>{item.name}</strong>
                <span>Request technical comparison</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="pd-section">
        <div className="pd-wrap pd-inquiry">
          <div className="pd-inquiry-info">
            <p className="pd-label">Product Inquiry</p>
            <h2>Send Your 3030 SMD LED Requirement</h2>
            <p>
              Share your required CCT, CRI, luminous flux bin, quantity, application,
              storage or soldering requirements and sample request details.
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
            <Field label="Product Requirement" name="product_requirement" placeholder="3030 SMD LED 6V150mA, CCT, CRI, flux bin, quantity..." />
            <label>
              Message
              <textarea name="message" placeholder="Please describe CCT, CRI, flux range, application, quantity, sample request, datasheet needs and any soldering or storage requirements." />
            </label>
            <button className="pd-btn pd-btn-primary" type="submit">Submit 3030 LED RFQ <ArrowRight size={18} /></button>
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
        <img src={src} alt={alt} width="1080" height="440" loading="lazy" />
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
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.pd-page{min-height:100vh;background:#f7f9fc;color:#142033;font-family:Inter,Arial,Helvetica,sans-serif}.pd-page a{text-decoration:none;color:inherit}.pd-wrap{width:min(1180px,calc(100% - 44px));margin:0 auto}.pd-nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.95);border-bottom:1px solid #dde3eb;backdrop-filter:blur(12px)}.pd-nav-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:16px 0}.pd-brand{display:flex;align-items:center;gap:12px;font-weight:900}.pd-brand span{display:grid;place-items:center;width:42px;height:42px;background:#142033;color:#fff}.pd-nav nav{display:flex;gap:25px;color:#536174;font-size:14px;font-weight:800}.pd-nav nav a:hover{color:#142033}.pd-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;padding:13px 20px;font-weight:900;font-size:15px;background:#142033;color:#fff;cursor:pointer}.pd-btn-primary{background:#f05a28;color:#fff}.pd-btn-primary:hover{background:#d94d20}.pd-btn-ghost{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.1);color:#fff}.pd-hero{position:relative;background:#142033;color:#fff}.pd-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px),radial-gradient(circle at 78% 22%,rgba(30,99,214,.34),transparent 36%),linear-gradient(120deg,rgba(20,32,51,.96),rgba(20,32,51,.78));background-size:44px 44px,44px 44px,auto,auto}.pd-hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;padding:86px 0}.pd-eyebrow,.pd-label{margin:0;color:#f05a28;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.pd-eyebrow{display:inline-block;color:#dce5f0;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);padding:9px 12px}.pd-hero h1{margin:24px 0 0;max-width:860px;font-size:56px;line-height:1.05}.pd-lead{max-width:680px;margin:24px 0 0;color:#d4deea;font-size:18px;line-height:1.75}.pd-spec-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.pd-spec-pills span{border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.08);padding:10px 12px;color:#dce5f0;font-size:13px;font-weight:800}.pd-cta-row{display:flex;flex-wrap:wrap;gap:13px;margin-top:34px}.pd-visual-panel{background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(244,247,251,.92)),repeating-linear-gradient(90deg,rgba(83,97,116,.08) 0 1px,transparent 1px 8px);border:1px solid rgba(255,255,255,.22);box-shadow:0 18px 55px rgba(20,32,51,.2);color:#142033;min-height:520px;padding:28px}.pd-badge{float:right;background:#10b981;color:#fff;padding:7px 11px;font-size:12px;font-weight:900;text-transform:uppercase}.pd-package{clear:both;margin:76px auto 36px;width:min(330px,90%);height:230px;position:relative}.pd-led-top{position:absolute;left:50%;top:12px;width:168px;height:118px;transform:translateX(-50%);background:radial-gradient(circle at 50% 46%,#fff8c5 0 22%,#f7b72c 23% 36%,#dfe7f2 37% 100%);border:10px solid #c9d3df;box-shadow:0 14px 35px rgba(20,32,51,.22)}.pd-led-base{position:absolute;left:50%;bottom:12px;width:280px;height:82px;transform:translateX(-50%);background:#eef2f7;border:1px solid #cbd5e1}.pd-led-base span{position:absolute;top:24px;width:82px;height:28px;background:#aeb9c7}.pd-led-base span:first-child{left:-62px}.pd-led-base span:last-child{right:-62px}.pd-visual-info{display:flex;gap:14px;background:#142033;color:#fff;padding:22px}.pd-visual-info svg{color:#f05a28}.pd-visual-info strong{display:block;font-size:18px}.pd-visual-info p{margin:8px 0 0;color:#cbd7e5;line-height:1.6}.pd-section{padding:82px 0}.pd-white{background:#fff}.pd-section-title{max-width:820px}.pd-section h2{margin:14px 0 0;font-size:40px;line-height:1.15}.pd-muted,.pd-card p,.pd-image-block p{color:#536174;line-height:1.7}.pd-image-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}.pd-image-block{background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-image-block div{display:grid;place-items:center;min-height:220px;background:linear-gradient(135deg,#eef2f7,#fff);border:1px solid #dde3eb;color:#1e63d6}.pd-image-block h3{font-size:21px}.pd-two{display:grid;grid-template-columns:.85fr 1.15fr;gap:46px}.pd-spec-table{background:#fff;border:1px solid #dde3eb}.pd-spec-table div{display:grid;grid-template-columns:220px 1fr;border-bottom:1px solid #e5ebf2}.pd-spec-table div:last-child{border-bottom:0}.pd-spec-table strong,.pd-spec-table span{padding:16px}.pd-spec-table strong{background:#eef2f7}.pd-grid-5{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin-top:40px}.pd-card{background:#fff;border:1px solid #dde3eb;padding:24px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-card h3{font-size:19px}.pd-blue{color:#1e63d6}.pd-dark{background:#142033;color:#fff}.pd-dark h2{color:#fff}.pd-dark p:not(.pd-label){color:#d4deea;line-height:1.7}.pd-app-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.pd-app-grid a{display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);padding:20px;font-weight:900}.pd-download{display:flex;align-items:center;justify-content:space-between;gap:30px;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.1)}.pd-download h2{margin-top:12px}.pd-download p{max-width:720px;color:#536174;line-height:1.7}.pd-faq{display:grid;gap:14px;margin-top:36px}.pd-faq details{background:#fff;border:1px solid #dde3eb;padding:20px}.pd-faq summary{font-weight:900;cursor:pointer}.pd-faq p{color:#536174;line-height:1.7}.pd-related{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin-top:38px}.pd-related a{background:#fff;border:1px solid #dde3eb;padding:22px;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-related svg{color:#1e63d6}.pd-related strong,.pd-related span{display:block}.pd-related strong{margin-top:18px}.pd-related span{margin-top:8px;color:#536174;font-size:13px}.pd-inquiry{display:grid;grid-template-columns:.9fr 1.1fr;gap:28px;background:#fff;padding:34px;box-shadow:0 18px 55px rgba(20,32,51,.12)}.pd-inquiry-info{background:#eef2f7;padding:30px}.pd-inquiry-info h2{margin:14px 0 0;font-size:34px}.pd-inquiry-info p{color:#536174;line-height:1.7}.pd-inquiry-info a{display:flex;align-items:center;gap:11px;margin-top:17px;font-weight:800}.pd-inquiry-info svg{color:#1e63d6}.pd-form{display:grid;gap:16px}.pd-form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}.pd-form label{display:grid;gap:8px;font-size:14px;font-weight:900}.pd-form input,.pd-form textarea{width:100%;border:1px solid #cbd5e1;background:#fff;padding:14px;font:inherit;outline:none}.pd-form input:focus,.pd-form textarea:focus{border-color:#1e63d6}.pd-form textarea{min-height:145px;resize:vertical}@media(max-width:1050px){.pd-grid-5,.pd-related{grid-template-columns:repeat(3,1fr)}}@media(max-width:920px){.pd-nav nav{display:none}.pd-hero-grid,.pd-two,.pd-inquiry{grid-template-columns:1fr}.pd-hero h1{font-size:42px}.pd-image-grid,.pd-grid-5,.pd-related{grid-template-columns:1fr 1fr}.pd-download{align-items:flex-start;flex-direction:column}.pd-visual-panel{min-height:auto}.pd-form-row{grid-template-columns:1fr}}@media(max-width:640px){.pd-wrap{width:min(100% - 32px,1180px)}.pd-hero-grid{padding:62px 0}.pd-hero h1{font-size:34px}.pd-lead{font-size:16px}.pd-section{padding:62px 0}.pd-section h2{font-size:30px}.pd-image-grid,.pd-grid-5,.pd-related,.pd-app-grid{grid-template-columns:1fr}.pd-spec-table div{grid-template-columns:1fr}.pd-inquiry{padding:20px}.pd-inquiry-info{padding:24px}.pd-btn{width:100%}}
.pd-bin-table{margin-top:36px;background:#fff;border:1px solid #dde3eb;box-shadow:0 4px 16px rgba(20,32,51,.04)}.pd-bin-table>div{display:grid;grid-template-columns:2fr .7fr 1fr;border-bottom:1px solid #e5ebf2}.pd-bin-table>div:last-child{border-bottom:0}.pd-bin-table span,.pd-bin-table strong{padding:15px}.pd-bin-head{background:#142033;color:#fff}@media(max-width:640px){.pd-bin-table>div{grid-template-columns:1fr}.pd-bin-head{display:none!important}}
.pd-image-block div{overflow:hidden}.pd-image-block div span{display:block;margin-top:12px;color:#536174;font-weight:900}
.pd-hero-photo-frame,.pd-image-frame,.pd-tech-image,.pd-dimension-image,.pd-application-image,.pd-related-image{display:block;overflow:hidden;background:#fff;border:1px solid #dde3eb}.pd-hero-photo-frame{clear:both;margin:70px 0 28px;aspect-ratio:1.15/1;box-shadow:0 14px 35px rgba(20,32,51,.12)}.pd-hero-photo-frame img,.pd-image-frame img,.pd-tech-image img,.pd-dimension-image img,.pd-application-image img,.pd-related-image img{display:block;width:100%;height:100%;object-fit:contain}.pd-image-frame{aspect-ratio:1.7/1;min-height:0!important;padding:0!important;background:#fff!important}.pd-tech-image,.pd-dimension-image{margin:24px 0 0;aspect-ratio:1/1.12}.pd-application-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px}.pd-application-image{margin:0;aspect-ratio:1.79/1;background:#fff}.pd-application-image img{object-fit:cover}.pd-tech-image figcaption,.pd-dimension-image figcaption,.pd-application-image figcaption{margin:0;padding:12px 14px;background:#eef2f7;color:#536174;font-size:13px;line-height:1.5}.pd-related-image{aspect-ratio:2.45/1;margin-bottom:18px}.pd-related a{overflow:hidden}.pd-related strong{margin-top:0}@media(max-width:640px){.pd-application-gallery{grid-template-columns:1fr}}
`;
