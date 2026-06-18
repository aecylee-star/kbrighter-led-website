export type ProductCard = {
  name: string;
  description: string;
  href: string;
  specs: string[];
  image?: string;
  imageAlt?: string;
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

import { chipProducts } from "./chip-led/data";
import { dipProducts } from "./dip-led/data";
import { infraredSeries } from "./infrared-led/data";
import { indicatorProducts } from "./led-indicator-arrays/data";
import { uvSeriesList } from "./uv-led/data";

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
        specs: ["2.8 x 3.5 mm", "IF 60mA option", "White and mono-color options"],
        image: "/images/products/2835-smd-led/2835-smd-led-product-image.png",
        imageAlt: "KINGBRIGHT 2835 SMD LED product image"
      },
      {
        name: "2835 0.5W SMD LED",
        description: "Higher lumen 0.5W 2835 SMD LED for lighting replacement, sign board backlight and OEM lighting projects.",
        href: "/products/smd-led/2835-0-5w-smd-led",
        specs: ["2.8 x 3.5 x 0.70 mm", "IF 150mA", "55-85 lm by CCT/CRI bin"],
        image: "/images/products/2835-smd-led/2835-smd-led-product-image.png",
        imageAlt: "KINGBRIGHT 2835 0.5W SMD LED product image"
      },
      {
        name: "3030 SMD LED",
        description: "3030 6V150mA square-cup white SMD LED for high lumen lighting, street lighting, high bay lighting and OEM modules.",
        href: "/products/smd-led/3030-smd-led",
        specs: ["3.0 x 3.0 x 0.6 mm", "IF 150mA", "105-165 lm by CCT/CRI bin"],
        image: "/images/products/3030-smd-led/3030-smd-led-product-image.png",
        imageAlt: "KINGBRIGHT 3030 SMD LED product image"
      },
      {
        name: "3535 SMD LED",
        description: "3535 3W white SMD LED with ceramic package, RA90, 2700K-6500K CCT range and 90 degree beam angle for warm white, pure white and high power lighting.",
        href: "/products/smd-led/3535-smd-led",
        specs: ["3.5 x 3.5 mm", "Ra90 / 2700K-6500K", "75-185 lm at IF 350mA"],
        image: "/images/products/3535-smd-led/3535-smd-led-product-image.png",
        imageAlt: "KINGBRIGHT 3535 SMD LED product image"
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
        href: "/products/chip-led/1204-side-light-led",
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
    slug: "chip-led",
    name: "Chip LED",
    eyebrow: "Miniature Chip LED Components",
    title: "Chip LED Packages for Compact PCB Indicators and Side-Light Applications",
    description:
      "KINGBRIGHT Chip LED products cover ultra-compact front light, side light, mono-color and dual-color SMD packages for high-density PCB indicators, light guides, smart devices and industrial electronics.",
    seoTitle: "Chip LED Manufacturer | 0201, 0402, 0603, 0805, 1206 SMD Indicator LEDs",
    seoDescription:
      "KINGBRIGHT Chip LED category for overseas B2B buyers, including 0201 front light, 0402 mono color, 0602 side light, 0603 front light, 0805, 1204, 1206 and dual-color chip LEDs.",
    products: chipProducts.map((product) => ({
      name: product.name,
      description: product.description,
      href: `/products/chip-led/${product.slug}`,
      specs: [product.packageSize, product.current, product.reel],
      image: product.image,
      imageAlt: product.imageAlt
    })),
    applications: ["PCB indicators", "Industrial control panels", "Smart home devices", "Light guide backlight", "Consumer electronics", "Automotive interior electronics"],
    advantages: ["Ultra-compact SMD packages", "Front-light and side-light options", "Mono-color and dual-color selection", "Tape-and-reel SMT production support"],
    relatedApplications: [
      { label: "LED for Industrial Control", href: "/applications/led-for-industrial-control" },
      { label: "LED for Smart Home", href: "/applications/led-for-smart-home" },
      { label: "LED for PCB/PCBA Projects", href: "/applications/led-for-pcb-pcba-projects" }
    ]
  },
  {
    slug: "dip-led",
    name: "DIP LED",
    eyebrow: "Through-Hole LED Components",
    title: "DIP LED Components for Indicators, Displays and Industrial Electronics",
    description:
      "KINGBRIGHT DIP LED products include 1.8mm, 2mm, 3mm, 5mm, 8mm, 10mm, square-head, RGB, dual-color and long-lead through-hole LEDs for indicators, displays, signage and OEM electronics.",
    seoTitle: "DIP LED Manufacturer | Through-Hole LED Components and Indicator LEDs",
    seoDescription:
      "KINGBRIGHT DIP LED catalog for overseas buyers, including 1.8mm, 2mm, 3mm, 5mm, 8mm, 10mm, square, RGB, dual-color and long-lead through-hole LEDs.",
    products: dipProducts.map((product) => ({
      name: product.name,
      description: product.description,
      href: `/products/dip-led/${product.slug}`,
      specs: [product.packageSize, product.viewingAngle, product.packaging],
      image: product.image,
      imageAlt: product.imageAlt
    })),
    applications: ["Industrial control", "Signal indicators", "Display systems", "Automotive electronics", "Consumer electronics", "Signage and panel indicators"],
    advantages: ["Strong through-hole PCB mounting", "Multiple lens shapes and package sizes", "Mono-color, RGB and dual-color options", "Stable brightness and visible status indication", "OEM lead and color customization support"],
    relatedApplications: [
      { label: "LED for Industrial Control", href: "/applications/led-for-industrial-control" },
      { label: "LED for Display Systems", href: "/applications/led-for-display-systems" },
      { label: "LED for Automotive Electronics", href: "/applications/led-for-automotive-electronics" }
    ]
  },
  {
    slug: "led-indicator-arrays",
    name: "LED Indicator Arrays",
    eyebrow: "PCB-Mounted LED Indicators",
    title: "LED Indicator Arrays for Control Panels and Industrial Equipment",
    description:
      "KINGBRIGHT LED Indicator Arrays combine multiple 3mm LED positions in black housings for PLC systems, power cabinets, telecommunications equipment, instrumentation and automation status indication.",
    seoTitle: "LED Indicator Arrays Manufacturer | 3mm Multi-Hole LED Indicators",
    seoDescription:
      "KINGBRIGHT LED Indicator Arrays include 3mm one-hole, two-hole, three-hole and four-hole LED indicators for industrial control panels, PLC systems and automation equipment.",
    products: indicatorProducts.map((product) => ({
      name: product.name,
      description: product.description,
      href: `/products/led-indicator-arrays/${product.slug}`,
      specs: [product.packageSize, product.channels, product.packaging],
      image: product.image,
      imageAlt: product.imageAlt
    })),
    applications: ["Industrial control panels", "PLC systems", "Power distribution cabinets", "Telecommunications equipment", "Instrumentation systems", "Automation equipment"],
    advantages: ["Integrated multi-position housing", "Clear 3mm LED status indication", "Multiple color combinations", "Through-hole PCB mounting", "OEM customization support"],
    relatedApplications: [
      { label: "LED for Industrial Control", href: "/applications/led-for-industrial-control" },
      { label: "LED for PCB/PCBA Projects", href: "/applications/led-for-pcb-pcba-projects" },
      { label: "LED for Display Systems", href: "/applications/led-for-display-systems" }
    ]
  },
  {
    slug: "cob-led",
    name: "COB LED",
    eyebrow: "COB LED Components",
    title: "COB LED Modules for Spotlights, Downlights and Commercial Lighting",
    description:
      "KINGBRIGHT supplies mirror-aluminum COB LED products for spotlight, downlight, PAR lamp, bulb, restaurant lighting and outdoor landscape lighting projects.",
    seoTitle: "COB LED Manufacturer | 1414, 1919 and 2828 COB LED Modules",
    seoDescription:
      "KINGBRIGHT COB LED category page for overseas buyers, including 1414, 1919 and 2828 COB LED modules for spotlights, downlights, floodlights and commercial lighting projects.",
    products: [
      {
        name: "1414 COB LED",
        description:
          "CM14XX mirror-aluminum COB LED series with 13.5 x 13.5 mm substrate, 11 mm LES, 120 degree viewing angle and 7W / 12W / 20W options.",
        href: "/products/cob-led/1414-cob-led",
        specs: ["13.5 x 13.5 x 1.5 mm", "LES 11 mm", "7W / 12W / 20W options"],
        image: "/images/products/1414-cob-led/1414-cob-led-product-image.png",
        imageAlt: "KINGBRIGHT 1414 COB LED product image"
      },
      {
        name: "1919 COB LED",
        description:
          "CM19XX mirror-aluminum COB LED series with 19 x 19 mm substrate, 16 mm LES, 120 degree viewing angle and 22W / 25W options for higher lumen commercial lighting.",
        href: "/products/cob-led/1919-cob-led",
        specs: ["19 x 19 x 1.55 mm", "LES 16 mm", "22W / 25W options"],
        image: "/images/products/1919-cob-led/1919-cob-led-product-image.png",
        imageAlt: "KINGBRIGHT 1919 COB LED product image"
      },
      {
        name: "2828 COB LED",
        description:
          "CM28XX high power mirror-aluminum COB LED series with 28 x 28 mm substrate, 22 mm LES and 50W / 90W options for floodlights, studio lights and outdoor area lighting.",
        href: "/products/cob-led/2828-cob-led",
        specs: ["28 x 28 x 1.55 mm", "LES 22 mm", "50W / 90W options"],
        image: "/images/products/2828-cob-led/2828-cob-led-product-image.png",
        imageAlt: "KINGBRIGHT 2828 COB LED product image"
      }
    ],
    applications: ["Spotlights", "Downlights", "PAR lamps", "Bulb lamps", "Restaurant lighting", "Outdoor landscape lighting"],
    advantages: ["Mirror-aluminum substrate", "High reliability", "120 degree light output", "RoHS compliant", "Multiple power options"],
    relatedApplications: [
      { label: "LED for Commercial Lighting", href: "/applications/led-for-commercial-lighting" },
      { label: "LED for Panel Lights", href: "/applications/led-for-panel-lights" },
      { label: "LED for PCB/PCBA Projects", href: "/applications/led-for-pcb-pcba-projects" }
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
      ...infraredSeries.map((series) => ({
        name: series.name,
        description: series.description,
        href: `/products/infrared-led/${series.slug}`,
        specs: [series.packageSummary, series.wavelengthSummary, series.packagingSummary],
        image: series.image,
        imageAlt: series.imageAlt
      }))
    ],
    applications: ["Smart home", "Remote controls", "Industrial sensing", "Security electronics", "Optical detection", "Consumer electronics"],
    advantages: ["Chip, SMD and DIP packages", "Transmitting, receiving and reflective sensor options", "850nm, 940nm and long wavelength selections", "Engineering review and sample support"],
    relatedApplications: [
      { label: "LED for Smart Home", href: "/applications/led-for-smart-home" },
      { label: "LED for Industrial Control", href: "/applications/led-for-industrial-control" }
    ]
  },
  {
    slug: "uv-led",
    name: "UV LED",
    eyebrow: "UV LED Components",
    title: "UV LED Components for Sterilization, Curing and Detection",
    description:
      "KINGBRIGHT UV LED products include UVA LED, UVC LED and UVC+UVA dual wavelength packages for sterilization LED modules, UV curing, inspection, water purification, air treatment and OEM electronics.",
    seoTitle: "UV LED Manufacturer | UVC LED, UVA LED and Sterilization LED Components",
    seoDescription:
      "KINGBRIGHT UV LED catalog for overseas B2B buyers, including UVA LED, UVC LED and UVC+UVA sterilization LED series for curing, disinfection and detection applications.",
    products: uvSeriesList.map((series) => ({
      name: series.name,
      description: series.description,
      href: `/products/uv-led/${series.slug}`,
      specs: [series.packageSummary, series.wavelengthSummary, series.currentSummary],
      image: series.heroImage,
      imageAlt: series.heroImageAlt
    })),
    applications: ["UV sterilization", "Water purification", "Air treatment", "UV curing", "Fluorescence detection", "Industrial inspection"],
    advantages: ["UVA and UVC wavelength options", "Plane and ball-head lens structures", "3535, 5050 and 6868 packages", "Sterilization LED project support", "Sample and RFQ support"],
    relatedApplications: [
      { label: "LED for PCB/PCBA Projects", href: "/applications/led-for-pcb-pcba-projects" },
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
      { label: "LED for Smart Home", href: "/applications/led-for-smart-home" },
      { label: "Download PCBA Capability", href: "/download-center" }
    ]
  }
];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
