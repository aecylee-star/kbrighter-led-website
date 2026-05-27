import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kbrighter.com"),
  title: "KINGBRIGHT | LED Components, LED Packaging & PCBA Support",
  description:
    "KINGBRIGHT supplies SMD LEDs, DIP LEDs, high power LEDs, infrared LEDs, LED display components and PCBA support for global lighting and electronics manufacturers.",
  keywords: [
    "LED components manufacturer",
    "SMD LED manufacturer",
    "DIP LED supplier",
    "LED packaging",
    "LED display components",
    "PCBA support",
    "High Power LED",
    "Infrared LED"
  ],
  openGraph: {
    title: "KINGBRIGHT | LED Components & PCBA Support",
    description:
      "Professional LED components, LED display components and PCBA integration support for overseas buyers.",
    url: "https://www.kbrighter.com",
    siteName: "KINGBRIGHT",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "KINGBRIGHT | LED Components & PCBA Support",
    description:
      "Professional LED components, LED display components and PCBA integration support for overseas buyers."
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
