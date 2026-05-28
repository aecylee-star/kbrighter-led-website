import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { resourceStyles } from "../resources/styles";

export const metadata: Metadata = {
  title: "LED Components FAQ | SMD LED, CRI, CCT, OEM/ODM & PCBA Support",
  description:
    "Professional LED FAQ for overseas buyers and engineers covering SMD LED selection, CRI, color temperature, lifespan, reliability, OEM/ODM, MOQ, lead time, datasheets, export support and PCB/PCBA projects.",
  keywords: [
    "LED components FAQ",
    "What is SMD LED",
    "LED color temperature",
    "LED CRI",
    "LED lifespan",
    "LED OEM ODM",
    "LED PCBA support",
    "LED MOQ lead time",
    "SMD LED selection",
    "LED datasheet support",
    "LED reliability testing"
  ],
  openGraph: {
    title: "LED Components FAQ | SMD LED, CRI, CCT, OEM/ODM & PCBA Support",
    description:
      "Professional LED FAQ for overseas buyers and engineers covering SMD LED selection, CRI, color temperature, lifespan, reliability, OEM/ODM, MOQ, lead time, datasheets, export support and PCB/PCBA projects.",
    url: "/faq",
    type: "website"
  }
};

const faqs = [
  ["What is an SMD LED?", "SMD LED means Surface Mount Device LED. It is designed to be mounted directly on a PCB, making it suitable for automated assembly, compact lighting designs, LED modules, indicators, display systems, smart devices and PCBA projects."],
  ["How should I select the right SMD LED package?", "Start with the application, PCB space, target brightness, operating current, thermal design and viewing angle. Common packages such as 2835, 3528, 5050 and 3030 are chosen for different power levels, optical output and board layouts."],
  ["What information should I provide for an SMD LED RFQ?", "Please provide package size, color or CCT, CRI requirement, forward voltage, operating current, luminous flux or intensity target, viewing angle, application, estimated quantity and any binning or brand requirements. Clear RFQ details help us recommend the correct part faster."],
  ["How do I choose LED color temperature?", "Color temperature depends on the lighting environment and market preference. 2700K-3000K is warm white, 4000K is neutral white, and 5000K-6500K is cool white. Commercial lighting, office lighting, retail display and industrial lighting may each require different CCT choices."],
  ["What is CRI and why does it matter?", "CRI, or Color Rendering Index, describes how naturally a light source shows object colors. Ra80 is commonly used for general lighting, while Ra90 or higher is preferred for retail, hospitality, display lighting and applications where color accuracy is important."],
  ["What is the difference between luminous flux and luminous intensity?", "Luminous flux, measured in lumens, describes total visible light output. Luminous intensity, measured in candela or millicandela, describes light strength in a specific direction. The correct value depends on whether the LED is used for general illumination, indication or display."],
  ["What affects LED lifespan?", "LED lifespan is affected by drive current, junction temperature, heat dissipation, PCB design, operating environment and power supply stability. LEDs should be used within rated electrical and thermal limits to reduce light decay and maintain long-term performance."],
  ["Do you provide reliability testing?", "Reliability checks can include aging test, electrical and optical testing, solderability review, ESD-related checks, thermal evaluation and environmental testing according to product type and project needs. Testing requirements can be discussed before sample approval."],
  ["How do you control LED consistency?", "Consistency is managed through material control, production process monitoring, electrical and optical binning, appearance inspection and final verification. For lighting and display projects, bin requirements should be confirmed before production."],
  ["Do you support OEM/ODM LED projects?", "Yes. KINGBRIGHT supports OEM/ODM discussions for package selection, CCT, CRI, wavelength, brightness range, bin requirements, product matching, labeling, packing and project-specific production needs."],
  ["Can you support custom LED specifications?", "Custom specifications may be discussed depending on the package, chip, phosphor, color, binning target, order quantity and technical feasibility. Please share the application and target specification so our team can evaluate the best direction."],
  ["Can KINGBRIGHT support PCB/PCBA projects?", "Yes. We can support LED component selection, PCB footprint discussion, soldering guidance, LED module planning and PCBA integration communication for lighting, display, industrial control, smart home and electronics projects."],
  ["What should engineers consider when designing LEDs into a PCB?", "Important points include pad design, polarity, soldering profile, thermal path, current setting, spacing, optical layout and protection against ESD or voltage surge. Sharing the PCB design conditions helps us provide more practical support."],
  ["What is your MOQ?", "MOQ depends on product type, package, stock availability, bin requirements and customization level. Standard parts usually have more flexible MOQ, while special bins or OEM items may require higher quantities."],
  ["What is your usual lead time?", "Lead time depends on sample availability, production schedule, quantity, customization, binning requirements and export preparation. Standard products may be faster, while custom or project-based orders require confirmation after RFQ review."],
  ["Can samples be provided before mass production?", "Yes. Samples can be arranged for qualified projects. Please share the LED type, target specification, application, expected quantity and delivery address so we can confirm sample availability and timing."],
  ["Can you provide datasheets?", "Yes. Datasheets can be provided for available products and project review. If a customer needs specific parameters such as CCT, CRI, luminous flux, viewing angle, voltage or current, please mention them when requesting the datasheet."],
  ["What is a COB LED and when should I use it?", "COB LED means chip-on-board LED. It is commonly used in spotlights, downlights, PAR lamps and commercial lighting where a compact high-output light emitting surface is required. For COB selection, engineers should review power, voltage, CCT, CRI, LES size, beam angle and heat dissipation."],
  ["Can you help compare or replace an existing LED model?", "Yes. Please provide the existing part number, datasheet, package size, electrical parameters, optical requirements and application. We can review possible alternatives or recommend a suitable KINGBRIGHT option."],
  ["Do you support export orders?", "Yes. KINGBRIGHT supports overseas buyers with English communication, quotation, sample coordination, export packing, shipping document support and long-term repeat order communication."],
  ["What certifications can you provide?", "Certification documents such as ISO, RoHS, CE and other available certificates can be provided for buyer review depending on the product and market requirement. Please request the specific document needed for your application or region."]
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
              evaluating SMD LEDs, LED packaging options, datasheets, samples, reliability,
              OEM/ODM service and PCB/PCBA production support.
            </p>
            <div className="res-cta-row">
              <a className="res-btn res-btn-primary" href="#faq">Review LED Buying Questions <ArrowRight size={18} /></a>
              <a className="res-btn res-btn-ghost" href="mailto:sales@kbrighter.com">Ask a Sales Engineer</a>
            </div>
          </div>
          <div className="res-panel">
            <HelpCircle size={44} />
            <strong>Engineering and Purchasing Support</strong>
            <p>Use this FAQ to prepare clearer RFQs, sample requests, datasheet reviews and technical discussions.</p>
          </div>
        </div>
      </header>

      <section id="faq" className="res-section">
        <div className="res-wrap">
          <SectionTitle eyebrow="FAQ" title="Common LED Questions from Engineers and Overseas Buyers" />
          <div className="res-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <div className="res-link-row">
            <Link href="/products/smd-led/2835-smd-led">Review 2835 0.2W SMD LED Specs</Link>
            <Link href="/products/smd-led/2835-0-5w-smd-led">Review 2835 0.5W SMD LED Specs</Link>
            <Link href="/products/smd-led/3030-smd-led">Review 3030 SMD LED Specs</Link>
            <Link href="/products/smd-led/3535-smd-led">Review 3535 SMD LED Specs</Link>
            <Link href="/products/cob-led/1414-cob-led">Review 1414 COB LED Specs</Link>
            <Link href="/products/cob-led/1919-cob-led">Review 1919 COB LED Specs</Link>
            <Link href="/applications">Explore LED Applications</Link>
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
            <p>Send your LED package, CCT, CRI, current, voltage, application, datasheet needs or PCBA questions. Our team can help review the next step.</p>
          </div>
          <div className="res-actions">
            <a className="res-btn res-btn-primary" href="mailto:sales@kbrighter.com"><Mail size={18} /> Contact Sales Engineer</a>
            <a className="res-btn" href="https://wa.me/8613530144658"><MessageCircle size={18} /> Discuss Your Project</a>
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
