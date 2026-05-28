import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Applications", "/applications"],
  ["About Factory", "/about-factory"],
  ["Download Center", "/download-center"],
  ["FAQ", "/faq"],
  ["Contact", "/#contact"]
];

const productLinks = [
  ["SMD LED", "/products/smd-led"],
  ["DIP LED", "/products/dip-led"],
  ["High Power LED", "/products/high-power-led"],
  ["Infrared LED", "/products/infrared-led"],
  ["LED Display Components", "/products/led-display-components"],
  ["PCBA Support", "/products/pcba-support"]
];

const applicationLinks = [
  ["Panel Lights", "/applications/led-for-panel-lights"],
  ["Tube Lights", "/applications/led-for-tube-lights"],
  ["Commercial Lighting", "/applications/led-for-commercial-lighting"],
  ["Display Systems", "/applications/led-for-display-systems"],
  ["Industrial Control", "/applications/led-for-industrial-control"]
];

export function SiteHeader() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: chromeStyles }} />
      <header className="site-header">
        <div className="site-wrap site-header-inner">
          <Link href="/" className="site-brand" aria-label="KINGBRIGHT home">
            <span>KB</span>
            <strong>
              KINGBRIGHT
              <small>LED Components & PCBA</small>
            </strong>
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            {navLinks.map(([label, href]) => (
              label === "Products" ? (
                <div className="site-product-menu" key={label}>
                  <Link href={href}>{label}</Link>
                  <div className="site-product-dropdown">
                    {productLinks.map(([productLabel, productHref]) => (
                      <Link key={productLabel} href={productHref}>{productLabel}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={label} href={href}>{label}</Link>
              )
            ))}
          </nav>

          <div className="site-actions">
            <Link className="site-btn site-btn-primary" href="/#contact">Request Quotation <ArrowRight size={16} /></Link>
            <Link className="site-btn site-btn-dark" href="/#contact">Request LED Samples</Link>
          </div>

          <details className="site-mobile-menu">
            <summary>Menu</summary>
            <div>
              {navLinks.map(([label, href]) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
              {productLinks.map(([label, href]) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
              <Link className="site-btn site-btn-primary" href="/#contact">Request Quotation</Link>
              <Link className="site-btn site-btn-dark" href="/#contact">Request LED Samples</Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-wrap site-footer-grid">
        <div className="site-footer-brand">
          <Link href="/" className="site-brand site-brand-footer">
            <span>KB</span>
            <strong>
              KINGBRIGHT
              <small>LED Components & PCBA</small>
            </strong>
          </Link>
          <p>
            LED components, LED packaging, display LED products and PCBA support
            for overseas lighting, electronics and OEM customers.
          </p>
          <div className="site-footer-cta">
            <Link className="site-btn site-btn-primary" href="/#contact">Request Quotation</Link>
            <a className="site-btn site-btn-outline" href="mailto:sales@kbrighter.com">Contact Sales Engineer</a>
          </div>
        </div>

        <FooterColumn title="Product Categories" links={productLinks} />
        <FooterColumn title="Applications" links={applicationLinks} />
        <FooterColumn
          title="Company"
          links={[
            ["About Factory", "/about-factory"],
            ["Quality Control", "/about-factory#quality"],
            ["Applications", "/applications"],
            ["FAQ", "/faq"]
          ]}
        />
        <FooterColumn
          title="Downloads"
          links={[
            ["Download Center", "/download-center"],
            ["2835 0.2W Datasheet", "/products/smd-led/2835-smd-led"],
            ["2835 0.5W Datasheet", "/products/smd-led/2835-0-5w-smd-led"],
            ["Company Profile", "/download-center"],
            ["Certifications", "/download-center"]
          ]}
        />

        <div className="site-footer-contact">
          <h3>Contact Information</h3>
          <a href="mailto:sales@kbrighter.com"><Mail size={18} /> sales@kbrighter.com</a>
          <a href="https://wa.me/8613530144658"><MessageCircle size={18} /> +86 135 3014 4658</a>
          <a href="https://www.kbrighter.com">www.kbrighter.com</a>
        </div>
      </div>
      <div className="site-wrap site-footer-bottom">
        <span>{"\u00A9"} KINGBRIGHT OPTO-ELECTRONIC CO., LTD.</span>
        <span>Professional LED components and PCBA support.</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div className="site-footer-col">
      <h3>{title}</h3>
      {links.map(([label, href]) => (
        <Link key={label} href={href}>{label}</Link>
      ))}
    </div>
  );
}

const chromeStyles = `
.site-wrap{width:min(1180px,calc(100% - 44px));margin:0 auto}.site-header{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.95);border-bottom:1px solid #dde3eb;backdrop-filter:blur(12px);font-family:Inter,Arial,Helvetica,sans-serif}.site-header-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 0}.site-brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:#142033}.site-brand span{display:grid;place-items:center;width:42px;height:42px;background:#142033;color:#fff;font-weight:900}.site-brand strong{display:block;font-size:18px;line-height:1.05;letter-spacing:.04em}.site-brand small{display:block;margin-top:4px;color:#536174;font-size:10px;letter-spacing:.14em;text-transform:uppercase}.site-nav{display:flex;align-items:center;gap:18px}.site-nav a{color:#536174;text-decoration:none;font-size:14px;font-weight:900}.site-nav a:hover{color:#142033}.site-product-menu{position:relative;padding:18px 0}.site-product-dropdown{position:absolute;left:-18px;top:50px;display:grid;min-width:240px;background:#fff;border:1px solid #dde3eb;box-shadow:0 18px 55px rgba(20,32,51,.15);padding:10px;opacity:0;visibility:hidden;transform:translateY(8px);transition:.16s ease}.site-product-menu:hover .site-product-dropdown,.site-product-menu:focus-within .site-product-dropdown{opacity:1;visibility:visible;transform:translateY(0)}.site-product-dropdown a{padding:11px 12px;color:#142033}.site-product-dropdown a:hover{background:#eef2f7}.site-actions{display:flex;gap:10px;align-items:center}.site-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;padding:11px 15px;font-size:14px;font-weight:900;text-decoration:none;white-space:nowrap}.site-btn-primary{background:#f05a28;color:#fff}.site-btn-primary:hover{background:#d94d20}.site-btn-dark{background:#142033;color:#fff}.site-btn-outline{border:1px solid rgba(255,255,255,.24);color:#fff;background:transparent}.site-mobile-menu{display:none;position:relative}.site-mobile-menu summary{list-style:none;cursor:pointer;background:#142033;color:#fff;padding:11px 14px;font-weight:900}.site-mobile-menu summary::-webkit-details-marker{display:none}.site-mobile-menu div{position:absolute;right:0;top:48px;width:260px;display:grid;gap:0;background:#fff;border:1px solid #dde3eb;box-shadow:0 18px 55px rgba(20,32,51,.15);padding:10px}.site-mobile-menu a{display:flex;align-items:center;justify-content:space-between;padding:12px;color:#142033;text-decoration:none;font-weight:900}.site-footer{background:#142033;color:#fff;font-family:Inter,Arial,Helvetica,sans-serif}.site-footer-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr) 1.25fr;gap:28px;padding:64px 0 36px}.site-brand-footer{color:#fff}.site-brand-footer span{background:#f05a28}.site-brand-footer small{color:#cbd7e5}.site-footer-brand p{max-width:360px;color:#cbd7e5;line-height:1.7}.site-footer-cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}.site-footer h3{margin:0 0 18px;font-size:15px;letter-spacing:.04em;text-transform:uppercase}.site-footer-col,.site-footer-contact{display:grid;align-content:start;gap:10px}.site-footer a{color:#cbd7e5;text-decoration:none;font-size:14px}.site-footer a:hover{color:#fff}.site-footer-contact a{display:flex;gap:9px;align-items:center}.site-footer-bottom{display:flex;justify-content:space-between;gap:16px;border-top:1px solid rgba(255,255,255,.12);padding:18px 0 24px;color:#90a0b4;font-size:13px}@media(max-width:1120px){.site-nav{gap:12px}.site-nav a{font-size:13px}.site-footer-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:920px){.site-nav,.site-actions{display:none}.site-mobile-menu{display:block}.site-footer-grid{grid-template-columns:1fr 1fr}.site-footer-bottom{flex-direction:column}}@media(max-width:640px){.site-wrap{width:min(100% - 32px,1180px)}.site-brand small{display:none}.site-footer-grid{grid-template-columns:1fr}.site-footer-cta .site-btn{width:100%}.site-mobile-menu div{right:-2px;width:calc(100vw - 32px)}}
`;
