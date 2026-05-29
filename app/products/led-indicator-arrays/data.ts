export type IndicatorSpecRow = {
  model: string;
  packageSize: string;
  color: string;
  wavelength: string;
  luminousIntensity: string;
  forwardVoltage: string;
  current: string;
  viewingAngle: string;
  packaging: string;
};

export type IndicatorProduct = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
  packageSize: string;
  current: string;
  viewingAngle: string;
  packaging: string;
  colors: string;
  channels: string;
  specs: IndicatorSpecRow[];
  features: string[];
  applications: string[];
};

const commonApplications = [
  "Industrial Control Panels",
  "PLC Systems",
  "Power Distribution Cabinets",
  "Telecommunications Equipment",
  "Instrumentation Systems",
  "Alarm Systems",
  "Status Indicators",
  "Automation Equipment"
];

const singleColorSpecs: IndicatorSpecRow[] = [
  { model: "3mm One holes", packageSize: "7.5*4.45*6.3", color: "Red", wavelength: "620-630", luminousIntensity: "100-15000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm One holes", packageSize: "7.5*4.45*6.3", color: "Yellow", wavelength: "585-595", luminousIntensity: "100-10000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm One holes", packageSize: "7.5*4.45*6.3", color: "Green", wavelength: "515-535", luminousIntensity: "200-10000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm One holes", packageSize: "7.5*4.45*6.3", color: "Purple", wavelength: "390-400", luminousIntensity: "100-1000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm One holes", packageSize: "7.5*4.45*6.3", color: "Blue", wavelength: "460-470", luminousIntensity: "100-8000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" }
];

const twoHoleSpecs: IndicatorSpecRow[] = [
  { model: "3mm Two holes Red+Yellow", packageSize: "9.5*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm Two holes Red+Yellow", packageSize: "9.5*4.45*8.9", color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm Two holes Red+Green", packageSize: "9.5*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm Two holes Red+Green", packageSize: "9.5*4.45*8.9", color: "Green", wavelength: "515-535", luminousIntensity: "100-3000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm Two holes Red+Blue", packageSize: "9.5*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm Two holes Red+Blue", packageSize: "9.5*4.45*8.9", color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm Two holes Green+Blue", packageSize: "9.5*4.45*8.9", color: "Green", wavelength: "515-535", luminousIntensity: "100-3000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" },
  { model: "3mm Two holes Green+Blue", packageSize: "9.5*4.45*8.9", color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "1000PCS/bag" }
];

const threeHoleSpecs: IndicatorSpecRow[] = [
  { model: "3mm Three holes Red+Red+Yellow", packageSize: "15.3*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Yellow", packageSize: "15.3*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Yellow", packageSize: "15.3*4.45*8.9", color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Green", packageSize: "15.3*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Green", packageSize: "15.3*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Green", packageSize: "15.3*4.45*8.9", color: "Green", wavelength: "515-535", luminousIntensity: "200-10000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Blue", packageSize: "15.3*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Blue", packageSize: "15.3*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Red+Blue", packageSize: "15.3*4.45*8.9", color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Green+Blue", packageSize: "15.3*4.45*8.9", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Green+Blue", packageSize: "15.3*4.45*8.9", color: "Green", wavelength: "515-535", luminousIntensity: "200-10000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Three holes Red+Green+Blue", packageSize: "15.3*4.45*8.9", color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" }
];

const fourHoleSpecs: IndicatorSpecRow[] = [
  { model: "3mm Four holes Red+Red+Yellow+Yellow", packageSize: "20.2*4.45*10.5", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Yellow+Yellow", packageSize: "20.2*4.45*10.5", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Yellow+Yellow", packageSize: "20.2*4.45*10.5", color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Yellow+Yellow", packageSize: "20.2*4.45*10.5", color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Green+Green", packageSize: "20.2*4.45*10.5", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Green+Green", packageSize: "20.2*4.45*10.5", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Green+Green", packageSize: "20.2*4.45*10.5", color: "Green", wavelength: "515-535", luminousIntensity: "200-10000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Green+Green", packageSize: "20.2*4.45*10.5", color: "Green", wavelength: "515-535", luminousIntensity: "200-10000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Blue+Blue", packageSize: "20.2*4.45*10.5", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Blue+Blue", packageSize: "20.2*4.45*10.5", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Blue+Blue", packageSize: "20.2*4.45*10.5", color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Red+Blue+Blue", packageSize: "20.2*4.45*10.5", color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Yellow+Yellow+Green", packageSize: "20.2*4.45*10.5", color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Yellow+Yellow+Green", packageSize: "20.2*4.45*10.5", color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Yellow+Yellow+Green", packageSize: "20.2*4.45*10.5", color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" },
  { model: "3mm Four holes Red+Yellow+Yellow+Green", packageSize: "20.2*4.45*10.5", color: "Green", wavelength: "515-535", luminousIntensity: "200-10000", forwardVoltage: "2.6-3.2", current: "IF=20", viewingAngle: "10-90", packaging: "200PCS/Reel" }
];

function indicatorProduct(args: Omit<IndicatorProduct, "features" | "applications" | "current" | "imageAlt">): IndicatorProduct {
  return {
    ...args,
    current: "IF=20mA",
    imageAlt: `KINGBRIGHT ${args.name} black housing LED indicator array product image`,
    features: [
      "Integrated black housing supports neat PCB-mounted status indication",
      "3mm LED lamps provide clear front-panel visibility for equipment operators",
      "Available red, yellow, green, purple and blue configurations for signal logic",
      "10-90 degree viewing angle range supports control panel and cabinet designs",
      "OEM color combinations and special specifications can be reviewed for projects",
      "Suitable for manual insertion, PCB assembly and export equipment manufacturing"
    ],
    applications: commonApplications
  };
}

export const indicatorProducts: IndicatorProduct[] = [
  indicatorProduct({
    slug: "3mm-one-hole-led-indicator",
    name: "3mm One Hole LED Indicator",
    shortName: "One Hole Indicator",
    description:
      "Single-position 3mm LED indicator array with black housing for control panels, equipment status indication and PCB-mounted signal display.",
    image: "/images/products/led-indicator-arrays/3mm-one-hole-led-indicator.webp",
    packageSize: "7.5*4.45*6.3",
    viewingAngle: "10-90 deg",
    packaging: "1000PCS/bag",
    colors: "Red, Yellow, Green, Purple, Blue",
    channels: "1 LED position",
    specs: singleColorSpecs
  }),
  indicatorProduct({
    slug: "3mm-two-hole-led-indicator",
    name: "3mm Two Hole LED Indicator",
    shortName: "Two Hole Indicator",
    description:
      "Two-position 3mm LED indicator array for compact multi-status display in PLC equipment, power cabinets and industrial control boards.",
    image: "/images/products/led-indicator-arrays/3mm-two-hole-led-indicator.webp",
    packageSize: "9.5*4.45*8.9",
    viewingAngle: "10-90 deg",
    packaging: "1000PCS/bag",
    colors: "Red+Yellow, Red+Green, Red+Blue, Green+Blue",
    channels: "2 LED positions",
    specs: twoHoleSpecs
  }),
  indicatorProduct({
    slug: "3mm-three-hole-led-indicator",
    name: "3mm Three Hole LED Indicator",
    shortName: "Three Hole Indicator",
    description:
      "Three-position 3mm LED indicator array for grouped status indication, alarm states and multi-channel equipment feedback.",
    image: "/images/products/led-indicator-arrays/3mm-three-hole-led-indicator.webp",
    packageSize: "15.3*4.45*8.9",
    viewingAngle: "10-90 deg",
    packaging: "200PCS/Reel",
    colors: "Red+Red+Yellow, Red+Red+Green, Red+Red+Blue, Red+Green+Blue",
    channels: "3 LED positions",
    specs: threeHoleSpecs
  }),
  indicatorProduct({
    slug: "3mm-four-hole-led-indicator",
    name: "3mm Four Hole LED Indicator",
    shortName: "Four Hole Indicator",
    description:
      "Four-position 3mm LED indicator array for dense status indication in automation equipment, cabinet electronics and instrumentation systems.",
    image: "/images/products/led-indicator-arrays/3mm-four-hole-led-indicator.webp",
    packageSize: "20.2*4.45*10.5",
    viewingAngle: "10-90 deg",
    packaging: "200PCS/Reel",
    colors: "Red+Red+Yellow+Yellow, Red+Red+Green+Green, Red+Red+Blue+Blue, Red+Yellow+Yellow+Green",
    channels: "4 LED positions",
    specs: fourHoleSpecs
  })
];

export function getIndicatorProduct(slug: string) {
  return indicatorProducts.find((product) => product.slug === slug);
}
