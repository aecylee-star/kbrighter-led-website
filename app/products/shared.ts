export type ProductCard = {
  name: string;
  description: string;
  href: string;
  specs: string[];
};

export type ProductCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  products: ProductCard[];
  applications: string[];
  advantages: string[];
  relatedApplications: { label: string; href: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "smd-led",
    name: "SMD LED",
    eyebrow: "SMD LED Components",
    title: "SMD LED Packages for Lighting, Display and Electronics Projects",
    description:
      "KINGBRIGHT supplies surface-mount LED packages for automated assembly, LED lighting, display backlight, indicator, smart device and PCBA integration projects.",
    seoTitle: "SMD LED Manufacturer | 2835, 3528, 5050, 5730 and Side Light LEDs",
    seoDescription:
      "KINGBRIGHT SMD LED catalog for overseas B2B buyers, including 2835 SMD LED, 3528 SMD LED, 5050 SMD LED, 5730 SMD LED and 1204 side light LED.",
    products: [
      {
        name: "2835 SMD LED",
        description: "0.2W high-efficiency SMD LED package for tube lights, panel lights, sign board backlight and general lighting.",
        href: "/products/smd-led/2835-smd-led",
        specs: ["2.8 x 3.5 mm", "IF 60mA option", "White and mono-color options"]
      },
      {
        name: "3528 SMD LED",
        description: "Compact SMD LED package for indicators, decorative lighting, display backlight and electronics assemblies.",
        href: "/products/smd-led",
        specs: ["3.5 x 2.8 mm", "Mono-color options", "Wide viewing angle"]
      },
      {
        name: "5050 SMD LED",
        description: "Larger SMD LED package for RGB, full-color, decorative lighting and display-related applications.",
        href: "/products/smd-led",
        specs: ["5.0 x 5.0 mm", "RGB / full-color", "High visibility"]
      },
      {
        name: "5730 SMD LED",
        description: "High-output SMD LED package for lighting projects requiring higher brightness and stable thermal design.",
        href: "/products/smd-led",
        specs: ["5.7 x 3.0 mm", "Lighting applications", "High luminous output"]
      },
      {
        name: "1204 Side Light LED",
        description: "Side-emitting SMD LED for compact light guide, indicator, backlight and space-limited PCB designs.",
        href: "/products/smd-led",
        specs: ["Side-emitting design", "Compact package", "Backlight support"]
      }
    ],
    applications: ["Panel lights", "Tube lights", "Display systems", "Industrial control panels", "Smart home devices", "PCB/PCBA projects"],
    advantages: ["Automated SMT assembly support", "Multiple package sizes", "CCT and color options", "Binning and consistency control"],
    relatedApplications: [
      { label: "LED for Panel Lights", href: "/applications/led-for-panel-lights" },
      { label: "LED for Tube Lights", href: "/applications/led-for-tube-lights" },
      { label: "LED for PCB/PCBA Projects", href: "/applications/led-for-pcb-pcba-projects" }
    ]
  },
  {
    slug: "dip-led",
    name: "DIP LED",
    eyebrow: "Through-Hole LED Components",
    title: "DIP LED Components for Indicators, Displays and Industrial Electronics",
    description:
      "DIP LEDs are suitable for through-hole assembly, indicator lamps, control panels, signage, display products and electronics requiring strong mechanical mounting.",
    seoTitle: "DIP LED Manufacturer | Through-Hole LED Components for B2B Buyers",
    seoDescription:
      "KINGBRIGHT DIP LED category page for overseas buyers, covering through-hole LED components for indicators, displays, industrial control and OEM projects.",
    products: [
      { name: "Round DIP LED", description: "Common through-hole LED for indicators, panels and electronics assemblies.", href: "/products/dip-led", specs: ["3mm / 5mm options", "Mono-color", "Through-hole mounting"] },
      { name: "Oval DIP LED", description: "Directional LED package for signage and display visibility applications.", href: "/products/dip-led", specs: ["Oval lens", "High visibility", "Signal indication"] },
      { name: "Rectangular DIP LED", description: "Package option for light bars, display indicators and industrial panels.", href: "/products/dip-led", specs: ["Rectangular lens", "Panel indication", "Custom colors"] }
    ],
    applications: ["Industrial control", "Signal indicators", "Display systems", "Automotive electronics", "Consumer electronics"],
    advantages: ["Strong PCB mounting", "Multiple lens shapes", "Long operating life", "Stable indication performance"],
    relatedApplications: [
      { label: "LED for Industrial Control", href: "/applications/led-for-industrial-control" },
      { label: "LED for Display Systems", href: "/applications/led-for-display-systems" }
    ]
  },
  {
    slug: "high-power-led",
    name: "High Power LED",
    eyebrow: "High Brightness LED Packages",
    title: "High Power LED Components for Lighting and Industrial Applications",
    description:
      "High power LED packages support lighting applications that require higher luminous output, thermal management and reliable long-term operation.",
    seoTitle: "High Power LED Manufacturer | LED Components for Lighting Projects",
    seoDescription:
      "KINGBRIGHT high power LED components for commercial lighting, architectural lighting, industrial lighting and OEM LED projects.",
    products: [
      { name: "1W High Power LED", description: "High-output LED package for focused lighting and lighting module projects.", href: "/products/high-power-led", specs: ["1W class", "Thermal design required", "White/color options"] },
      { name: "3W High Power LED", description: "Higher power LED package for lighting systems and industrial illumination.", href: "/products/high-power-led", specs: ["3W class", "Heat sink required", "High luminous output"] },
      { name: "COB / Module Support", description: "Project support for LED modules and board-level integration.", href: "/products/high-power-led", specs: ["Module discussion", "PCBA support", "OEM inquiry"] }
    ],
    applications: ["Commercial lighting", "Architectural lighting", "Industrial lighting", "Outdoor fixtures", "OEM lighting modules"],
    advantages: ["Higher output options", "Thermal design communication", "Lighting-grade support", "OEM module discussion"],
    relatedApplications: [
      { label: "LED for Commercial Lighting", href: "/applications/led-for-commercial-lighting" },
      { label: "LED for Panel Lights", href: "/applications/led-for-panel-lights" }
    ]
  },
  {
    slug: "infrared-led",
    name: "Infrared LED",
    eyebrow: "IR LED Components",
    title: "Infrared LED Components for Sensing, Remote Control and Electronics",
    description:
      "Infrared LEDs support IR transmission, sensing, remote control, security electronics, smart devices and industrial control applications.",
    seoTitle: "Infrared LED Manufacturer | IR LED Components for Electronics",
    seoDescription:
      "KINGBRIGHT infrared LED components for remote control, sensing, smart home, security electronics and industrial control projects.",
    products: [
      { name: "850nm IR LED", description: "Infrared LED option for sensing and camera-related applications.", href: "/products/infrared-led", specs: ["850nm wavelength", "SMD / DIP options", "Sensing support"] },
      { name: "940nm IR LED", description: "Common IR LED wavelength for remote control and consumer electronics.", href: "/products/infrared-led", specs: ["940nm wavelength", "Remote control", "Low visible red glow"] },
      { name: "IR Receiver / Emitter Support", description: "Project discussion for infrared transmission and receiving applications.", href: "/products/infrared-led", specs: ["Emitter selection", "Viewing angle", "Drive current review"] }
    ],
    applications: ["Smart home", "Remote controls", "Industrial sensing", "Security electronics", "Automotive electronics"],
    advantages: ["Wavelength selection", "SMD and DIP packages", "Engineering review", "Application matching"],
    relatedApplications: [
      { label: "LED for Smart Home", href: "/applications/led-for-smart-home" },
      { label: "LED for Industrial Control", href: "/applications/led-for-industrial-control" }
    ]
  },
  {
    slug: "led-display-components",
    name: "LED Display Components",
    eyebrow: "Display LED Components",
    title: "LED Display Components for Signage, Indicators and Display Systems",
    description:
      "KINGBRIGHT supports LED display components for display modules, signage, indicators, control panels and application-specific display projects.",
    seoTitle: "LED Display Components Manufacturer | Display LED and Signage LEDs",
    seoDescription:
      "LED display components for display systems, signage, indicators, control panels and OEM display projects from KINGBRIGHT.",
    products: [
      { name: "RGB SMD LED", description: "Full-color SMD LED for display pixels, decorative lighting and color indication.", href: "/products/led-display-components", specs: ["RGB options", "5050 package", "Display support"] },
      { name: "Segment Display LED", description: "LED component support for numeric display and indicator systems.", href: "/products/led-display-components", specs: ["Segment display", "High visibility", "Custom discussion"] },
      { name: "Indicator LED Components", description: "LED selection for control panels, electronics and display indicators.", href: "/products/led-display-components", specs: ["Mono-color", "SMD / DIP", "Panel applications"] }
    ],
    applications: ["Display systems", "Commercial signage", "Industrial panels", "Smart devices", "Automotive electronics"],
    advantages: ["Color consistency", "Viewing angle selection", "Brightness rank control", "Application-driven package choices"],
    relatedApplications: [
      { label: "LED for Display Systems", href: "/applications/led-for-display-systems" },
      { label: "LED for Industrial Control", href: "/applications/led-for-industrial-control" }
    ]
  },
  {
    slug: "pcba-support",
    name: "PCBA Support",
    eyebrow: "LED PCBA Integration",
    title: "PCBA Support for LED Modules, Lighting Electronics and OEM Projects",
    description:
      "KINGBRIGHT supports LED component selection, SMT coordination, PCB footprint discussion, soldering review and PCBA integration for LED-based electronics projects.",
    seoTitle: "LED PCBA Support | LED Component Selection and Board Integration",
    seoDescription:
      "KINGBRIGHT LED PCBA support for LED modules, lighting electronics, display electronics, smart home and OEM PCB projects.",
    products: [
      { name: "LED Module PCBA", description: "Board-level support for LED module projects requiring component matching and SMT coordination.", href: "/products/pcba-support", specs: ["LED selection", "SMT support", "Module discussion"] },
      { name: "Lighting PCBA Support", description: "Support for lighting electronics, LED layout and production communication.", href: "/products/pcba-support", specs: ["Lighting projects", "PCB review", "OEM coordination"] },
      { name: "Custom OEM PCBA", description: "Project communication for custom LED-based PCB and PCBA requirements.", href: "/products/pcba-support", specs: ["Custom discussion", "Engineering support", "Sample review"] }
    ],
    applications: ["PCB/PCBA projects", "LED modules", "Lighting electronics", "Display electronics", "Smart home devices"],
    advantages: ["Component-to-board coordination", "Soldering and footprint support", "Engineering communication", "Sample-to-production workflow"],
    relatedApplications: [
      { label: "LED for PCB/PCBA Projects", href: "/applications/led-for-pcb-pcba-projects" },
      { label: "LED for Smart Home", href: "/applications/led-for-smart-home" }
    ]
  }
];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
