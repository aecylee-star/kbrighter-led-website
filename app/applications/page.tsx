import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Car, CircuitBoard, Cpu, Factory, Home, Lightbulb, Monitor, PanelsTopLeft } from "lucide-react";
import { applications, appStyles } from "./shared";

export const metadata: Metadata = {
  title: "LED Applications | LED Components for Lighting, Display, Control & PCBA",
  description:
    "Explore KINGBRIGHT LED applications for panel lights, tube lights, commercial lighting, display systems, industrial control, smart home, automotive electronics and PCB/PCBA projects.",
  keywords: [
    "LED for panel lights",
    "LED for tube lights",
    "LED for commercial lighting",
    "LED for display systems",
    "LED for industrial control",
    "LED for smart home",
    "LED for automotive electronics",
    "LED PCBA projects"
  ],
  openGraph: {
    title: "LED Applications | LED Components for Lighting, Display, Control & PCBA",
    description:
      "Explore KINGBRIGHT LED applications for panel lights, tube lights, commercial lighting, display systems, industrial control, smart home, automotive electronics and PCB/PCBA projects.",
    url: "/applications",
    type: "website"
  }
};

const icons = [PanelsTopLeft, Lightbulb, Building2, Monitor, Factory, Home, Car, CircuitBoard];

export default function ApplicationsPage() {
  return (
    <main className="app-page">
      <style dangerouslySetInnerHTML={{ __html: appStyles }} />
      <header className="app-hero">
        <div className="app-wrap app-hero-grid">
          <div>
            <p className="app-eyebrow">LED Application Solutions</p>
            <h1>LED Components for Lighting, Display, Control and PCBA Projects</h1>
            <p className="app-lead">
              KINGBRIGHT helps overseas lighting manufacturers, electronics engineers and
              purchasing teams select suitable SMD LEDs, DIP LEDs, high power LEDs, infrared
              LEDs, display LEDs and PCBA support for real application requirements.
            </p>
            <div className="app-cta-row">
              <a className="app-btn app-btn-primary" href="#inquiry">Request Application Engineering Support <ArrowRight size={18} /></a>
              <a className="app-btn app-btn-ghost" href="#applications">Explore LED Application Solutions</a>
            </div>
          </div>
          <div className="app-hero-panel">
            <Cpu size={44} />
            <strong>Application-Driven LED Selection</strong>
            <p>Match package, CCT, CRI, current, viewing angle, brightness bin and PCBA needs before sampling.</p>
          </div>
        </div>
      </header>

      <section id="applications" className="app-section">
        <div className="app-wrap">
          <SectionTitle eyebrow="Application Pages" title="Choose the LED Application Closest to Your Project" />
          <div className="app-grid">
            {applications.map((item, index) => {
              const Icon = icons[index];
              return (
                <article className="app-card" key={item.slug}>
                  <Icon className="app-blue" size={34} />
                  <h2>{item.title}</h2>
                  <p>{item.intro}</p>
                  <div className="app-tags">
                    {item.products.slice(0, 3).map((product) => <span key={product}>{product}</span>)}
                  </div>
                  <Link href={`/applications/${item.slug}`}>Review Application Solution <ArrowRight size={16} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="app-section app-dark">
        <div className="app-wrap app-two">
          <div>
            <p className="app-label">Why Application Pages Matter</p>
            <h2>Better LED Selection for Overseas B2B Buyers</h2>
            <p>
              Application-driven pages help buyers understand which LED package fits their
              project, what technical parameters matter, and how to prepare a useful RFQ.
            </p>
          </div>
          <div className="app-list">
            <div>Product selection by use case</div>
            <div>Long-tail SEO coverage for LED buyers</div>
            <div>Clear CTA path to datasheets and samples</div>
            <div>Engineering-friendly technical highlights</div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="app-section">
        <div className="app-wrap app-inquiry">
          <div>
            <p className="app-label">Application Inquiry</p>
            <h2>Need Help Choosing LED Components?</h2>
            <p>Send your application, target specifications, quantity and PCBA needs. KINGBRIGHT can help match suitable LED products.</p>
          </div>
          <a className="app-btn app-btn-primary" href="mailto:sales@kbrighter.com">Discuss Your Application Project <ArrowRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="app-title">
      <p className="app-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
