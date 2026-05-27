import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { resourceStyles } from "../resources/styles";

export const metadata: Metadata = {
  title: "FAQ | KINGBRIGHT LED Components, OEM/ODM & PCBA Support",
  description:
    "FAQ for overseas LED buyers: SMD LED basics, CCT, CRI, lifespan, OEM/ODM, PCBA support, MOQ, lead time, samples and certifications.",
  keywords: [
    "LED components FAQ",
    "What is SMD LED",
    "LED color temperature",
    "LED CRI",
    "LED lifespan",
    "LED OEM ODM",
    "LED PCBA support",
    "LED MOQ lead time"
  ],
  openGraph: {
    title: "FAQ | KINGBRIGHT LED Components, OEM/ODM & PCBA Support",
    description:
      "FAQ for overseas LED buyers: SMD LED basics, CCT, CRI, lifespan, OEM/ODM, PCBA support, MOQ, lead time, samples and certifications.",
    url: "/faq",
    type: "website"
  }
};

const faqs = [
  ["What is SMD LED?", "SMD LED means Surface Mount Device LED. It is mounted directly onto a PCB and is widely used in LED tube lights, panel lights, display systems, indicators, smart devices and PCBA projects."],
  ["How do I choose LED color temperature?", "Color temperature depends on the application. 2700K-3000K is warm white, 4000K is neutral white, and 5000K-6500K is cool white. Lighting buyers usually choose CCT based on environment, comfort and regional market requirements."],
  ["What is CRI?", "CRI, or Color Rendering Index, measures how accurately a light source shows object colors. Ra80 is common for general lighting, while Ra90 is used for higher color quality applications."],
  ["What is the lifespan of your LEDs?", "LED lifespan depends on current, temperature, thermal design and application conditions. Many LED components are designed for long-term operation when used within rated electrical and thermal limits."],
  ["Do you support OEM/ODM?", "Yes. KINGBRIGHT supports OEM/ODM discussions for LED component selection, packaging options, CCT/CRI requirements, product matching and project-specific needs."],
  ["Can you support PCB/PCBA projects?", "Yes. KINGBRIGHT can support LED component selection, footprint discussion, soldering guidance and PCBA integration communication for lighting, display and electronics projects."],
  ["What is your MOQ?", "MOQ depends on product type, package, bin requirement and customization level. Please send your target model, specifications and estimated quantity for confirmation."],
  ["What is your lead time?", "Lead time depends on sample availability, production schedule, quantity and whether the order requires custom bins or OEM support. KINGBRIGHT can confirm timing after reviewing your RFQ."],
  ["Can samples be provided?", "Yes. Samples can be provided for qualified projects. Please share the LED type, CCT/color, CRI, voltage/current, application and target order quantity."],
  ["What certifications do you have?", "Certification documents such as ISO, RoHS, CE and other certificates can be provided or displayed as available for buyer review. Please request the specific document needed for your market."]
];

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return (
    <main className="res-page">
      <style dangerouslySetInnerHTML={{ __html: resourceStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="res-hero">
        <div className="res-wrap res-hero-grid">
          <div>
            <p className="res-eyebrow">LED Buyer FAQ</p>
            <h1>Frequently Asked Questions for LED Components and PCBA Projects</h1>
            <p className="res-lead">
              Practical answers for engineers, overseas buyers, distributors and OEM customers
              evaluating KINGBRIGHT LED components, datasheets, samples and production support.
            </p>
            <div className="res-cta-row">
              <a className="res-btn res-btn-primary" href="#faq">Read FAQ <ArrowRight size={18} /></a>
              <a className="res-btn res-btn-ghost" href="mailto:sales@kbrighter.com">Ask a Question</a>
            </div>
          </div>
          <div className="res-panel">
            <HelpCircle size={44} />
            <strong>Engineering and Purchasing Support</strong>
            <p>Use this FAQ to prepare clearer RFQs, sample requests and technical discussions.</p>
          </div>
        </div>
      </header>

      <section id="faq" className="res-section">
        <div className="res-wrap">
          <SectionTitle eyebrow="FAQ" title="Common Questions from Overseas LED Buyers" />
          <div className="res-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <div className="res-link-row">
            <Link href="/products/2835-smd-led">View 2835 SMD LED</Link>
            <Link href="/applications">View Applications</Link>
            <Link href="/download-center">Download Center</Link>
            <Link href="/about-factory">Factory & Quality</Link>
          </div>
        </div>
      </section>

      <section className="res-section res-white">
        <div className="res-wrap res-contact">
          <div>
            <p className="res-label">Still Have Questions?</p>
            <h2>Contact KINGBRIGHT for Technical and Sales Support</h2>
            <p>Send your product requirements, application, datasheet needs or PCBA questions. Our team can help with next-step communication.</p>
          </div>
          <div className="res-actions">
            <a className="res-btn res-btn-primary" href="mailto:sales@kbrighter.com"><Mail size={18} /> Contact Sales</a>
            <a className="res-btn" href="https://wa.me/8613530144658"><MessageCircle size={18} /> WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="res-title">
      <p className="res-label">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
