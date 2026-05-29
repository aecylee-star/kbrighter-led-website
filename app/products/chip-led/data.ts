export type ChipLedSpecRow = {
  model: string;
  color: string;
  size: string;
  wavelength: string;
  intensity: string;
  voltage: string;
  current: string;
  angle: string;
  reel: string;
};

export type ChipLedProduct = {
  slug: string;
  name: string;
  shortName: string;
  modelFamily: string;
  lightingType: "Front Light" | "Side Light" | "Mono Color" | "Dual Color";
  description: string;
  image: string;
  imageAlt: string;
  packageSize: string;
  current: string;
  reel: string;
  colors: string;
  specs: ChipLedSpecRow[];
  features: string[];
  applications: string[];
};

const monoColors = ["Red", "Yellow", "Orange", "Green", "Purple", "Blue", "White"];
const monoWavelengths = ["620-630", "585-595", "600-610", "515-525", "390-400", "460-470", "/"];
const monoVoltages = ["1.8-2.1", "1.8-2.1", "1.8-2.1", "2.5-2.9", "2.6-3.0", "2.6-3.0", "2.6-3.0"];

function monoSpecs(model: string, size: string, intensity: string[], current: string, reel: string): ChipLedSpecRow[] {
  return monoColors.map((color, index) => ({
    model,
    color,
    size,
    wavelength: monoWavelengths[index],
    intensity: intensity[index],
    voltage: monoVoltages[index],
    current,
    angle: "120",
    reel
  }));
}

function dualSpecs(modelPrefix: string, size: string, reel: string, pairs: Array<[string, Array<"Red" | "Yellow" | "Green" | "Blue">]>): ChipLedSpecRow[] {
  const data: Record<string, Omit<ChipLedSpecRow, "model" | "size" | "reel" | "angle" | "current">> = {
    Red: { color: "Red", wavelength: "620-630", intensity: "100-2000", voltage: "1.8-2.1" },
    Yellow: { color: "Yellow", wavelength: "585-595", intensity: "100-2000", voltage: "1.8-2.1" },
    Green: { color: "Green", wavelength: "515-525", intensity: "100-3000", voltage: "2.5-2.9" },
    Blue: { color: "Blue", wavelength: "460-470", intensity: "100-2000", voltage: "2.6-3.0" }
  };

  return pairs.flatMap(([pair, colors]) =>
    colors.map((color) => ({
      model: `${modelPrefix} ${pair}`,
      size,
      reel,
      angle: "120",
      current: "IF=5",
      ...data[color]
    }))
  );
}

export const chipProducts: ChipLedProduct[] = [
  {
    slug: "0201-front-light-led",
    name: "0201 Front Light LED",
    shortName: "0201 Front Light",
    modelFamily: "0201",
    lightingType: "Front Light",
    description:
      "Ultra-compact 0201 front-emitting chip LED for high-density PCB indicators, miniature electronics, wearable devices and space-limited SMT assemblies.",
    image: "/images/products/chip-led/0201-front-light-chip-led.jpg",
    imageAlt: "KINGBRIGHT 0201 front light chip LED specification and product image",
    packageSize: "0.65 x 0.35 x 0.4 mm",
    current: "IF=5mA",
    reel: "10000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("0201", "0.65*0.35*0.4", ["30-1000", "30-1500", "30-1000", "500-2000", "10-200", "30-1000", "100-2000"], "IF=5", "10000PCS/Reel"),
    features: ["Ultra-miniature 0201 package for dense PCB layouts", "Front-emitting structure for visible top-side indication", "Multiple mono-color options for status and signal design", "Tape-and-reel packing for SMT production"],
    applications: ["Wearable electronics", "Mobile devices", "Miniature indicators", "IoT devices", "Medical and handheld electronics"]
  },
  {
    slug: "0402-mono-color-led",
    name: "0402 Mono Color LED",
    shortName: "0402 Mono Color",
    modelFamily: "0402",
    lightingType: "Mono Color",
    description:
      "0402 mono-color chip LED for compact indicator lights, control boards, consumer electronics and automated SMT production.",
    image: "/images/products/chip-led/0402-mono-color-chip-led.jpg",
    imageAlt: "KINGBRIGHT 0402 mono color chip LED specification and product image",
    packageSize: "1.0 x 0.5 x 0.45 mm",
    current: "IF=5mA",
    reel: "5000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("0402", "1.0*0.5*0.45", ["30-1000", "30-1500", "30-2000", "50-3000", "10-200", "100-2000", "100-3000"], "IF=5", "5000PCS/Reel"),
    features: ["Compact 0402 SMD package", "Mono-color options for electronic indicators", "120 degree viewing angle for broad visibility", "Stable reel packaging for pick-and-place assembly"],
    applications: ["Consumer electronics", "Industrial control boards", "Home appliance indicators", "Communication equipment", "Smart device PCBA"]
  },
  {
    slug: "0602-side-light-led",
    name: "0602 Side Light LED",
    shortName: "0602 Side Light",
    modelFamily: "0602",
    lightingType: "Side Light",
    description:
      "0602 side-emitting chip LED for light guide structures, edge indicators, compact backlight modules and narrow PCB designs.",
    image: "/images/products/chip-led/0602-side-light-chip-led.jpg",
    imageAlt: "KINGBRIGHT 0602 side light chip LED specification and product image",
    packageSize: "1.6 x 0.6 x 1.0 mm",
    current: "IF=5mA",
    reel: "4000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("0602", "1.6*0.6*1.0", ["30-1000", "30-1500", "30-1000", "50-2000", "10-200", "30-1000", "100-2000"], "IF=5", "4000PCS/Reel"),
    features: ["Side-emitting package for edge-lighting layouts", "Compact 1.6 mm class package", "Suitable for light-guide and backlight applications", "Color options for indication and decorative lighting"],
    applications: ["LCD backlight", "Light guide panels", "Edge indicators", "Automotive interior electronics", "Smart home controls"]
  },
  {
    slug: "0603-front-light-led",
    name: "0603 Front Light LED",
    shortName: "0603 Front Light",
    modelFamily: "0603",
    lightingType: "Front Light",
    description:
      "0603 front light chip LED for general PCB indication, industrial control panels, appliance displays and compact electronic assemblies.",
    image: "/images/products/chip-led/0603-front-light-chip-led.jpg",
    imageAlt: "KINGBRIGHT 0603 front light chip LED specification and product image",
    packageSize: "1.6 x 0.8 x 0.6/0.4 mm",
    current: "IF=5mA",
    reel: "4000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("0603", "1.6*0.8*0.6/0.4", ["30-1000", "30-1500", "30-1000", "50-2000", "20-200", "30-1000", "100-2000"], "IF=5", "4000PCS/Reel"),
    features: ["Popular 0603 top-view indicator package", "Wide 120 degree viewing angle", "Low-current IF=5mA operation", "Good fit for SMT indicator production"],
    applications: ["Industrial control", "Power supply indicators", "Home appliance displays", "Consumer electronics", "Communication equipment"]
  },
  {
    slug: "0802-side-light-led",
    name: "0802 Side Light LED",
    shortName: "0802 Side Light",
    modelFamily: "0802",
    lightingType: "Side Light",
    description:
      "0802 side-emitting chip LED for compact backlight, edge illumination and guide-light designs requiring a thin side-view LED package.",
    image: "/images/products/chip-led/0802-side-light-chip-led.jpg",
    imageAlt: "KINGBRIGHT 0802 side light chip LED specification and product image",
    packageSize: "2.1 x 0.6 x 1.0 mm",
    current: "IF=5mA",
    reel: "3000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("0802", "2.1*0.6*1.0", ["100-2000", "100-2000", "100-2000", "100-3000", "10-200", "100-2000", "1000-5000"], "IF=5", "3000PCS/Reel"),
    features: ["Side-view LED structure for edge lighting", "Higher white brightness range up to 5000 mcd", "Compact package for slim assemblies", "Multiple signal color options"],
    applications: ["Backlight strips", "Light guide systems", "Control panel edge lighting", "Automotive interior indicators", "Portable electronics"]
  },
  {
    slug: "0805-front-light-led",
    name: "0805 Front Light LED",
    shortName: "0805 Front Light",
    modelFamily: "0805",
    lightingType: "Front Light",
    description:
      "0805 front-emitting chip LED for brighter PCB indicators, control panels, appliance products and electronic modules.",
    image: "/images/products/chip-led/0805-front-light-chip-led.png",
    imageAlt: "KINGBRIGHT 0805 front light chip LED specification and product image",
    packageSize: "2.0 x 1.25 x 0.8/1.0 mm",
    current: "IF=5mA",
    reel: "3000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("0805", "2.0*1.25*0.8/1.0", ["100-2000", "100-2000", "100-2000", "100-3000", "10-200", "100-2000", "100-5000"], "IF=5", "3000PCS/Reel"),
    features: ["0805 top-view package with strong visual indication", "White brightness option up to 5000 mcd", "Standard tape-and-reel SMT packaging", "Suitable for high-volume electronics assembly"],
    applications: ["PCB status indicators", "Meter and instrument panels", "Home appliances", "Industrial electronics", "Security electronics"]
  },
  {
    slug: "0805-dual-color-led",
    name: "0805 Dual Color LED",
    shortName: "0805 Dual Color",
    modelFamily: "0805",
    lightingType: "Dual Color",
    description:
      "0805 dual-color chip LED for two-state indication, compact signal modules and PCB designs requiring red/yellow, red/green, red/blue or green/blue output.",
    image: "/images/products/chip-led/0805-dual-color-chip-led.jpg",
    imageAlt: "KINGBRIGHT 0805 dual color chip LED specification and product image",
    packageSize: "2.0 x 1.25 x 1.0 mm",
    current: "IF=5mA",
    reel: "3000PCS/Reel",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("0805", "2.0*1.25*1.0", "3000PCS/Reel", [["Red+Yellow", ["Red", "Yellow"]], ["Red+Green", ["Red", "Green"]], ["Red+Blue", ["Red", "Blue"]], ["Green+Blue", ["Green", "Blue"]]]),
    features: ["Dual-color output in compact 0805 package", "Supports two-state indication from one footprint", "Multiple color-pair options", "Good choice for status, alarm and mode display"],
    applications: ["Charging indicators", "Industrial alarm indicators", "Mode status lights", "Consumer electronics", "Control panels"]
  },
  {
    slug: "1204-side-light-led",
    name: "1204 Side Light LED",
    shortName: "1204 Side Light",
    modelFamily: "1204",
    lightingType: "Side Light",
    description:
      "1204 side light chip LED for guide-light, backlight and side-view indication applications requiring a larger side-emitting LED package.",
    image: "/images/products/chip-led/1204-side-light-chip-led.jpg",
    imageAlt: "KINGBRIGHT 1204 side light chip LED specification and product image",
    packageSize: "3.2 x 1.0 x 1.5 mm",
    current: "IF=5mA",
    reel: "3000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("1204", "3.2*1.0*1.5", ["100-2000", "100-2000", "100-2000", "100-3000", "10-200", "100-2000", "1000-5000"], "IF=5", "3000PCS/Reel"),
    features: ["Side-emitting 1204 package for light guide integration", "White brightness option up to 5000 mcd", "Suitable for larger edge-lighting designs", "Multiple mono-color options"],
    applications: ["Backlight modules", "Light pipes", "Automotive interior panels", "Smart control interfaces", "Display edge lighting"]
  },
  {
    slug: "1206-front-light-led",
    name: "1206 Front Light LED",
    shortName: "1206 Front Light",
    modelFamily: "1206",
    lightingType: "Front Light",
    description:
      "1206 front light chip LED for high-visibility PCB indicators, industrial electronics, instrument panels and larger SMT indication designs.",
    image: "/images/products/chip-led/1206-front-light-chip-led.jpg",
    imageAlt: "KINGBRIGHT 1206 front light chip LED specification and product image",
    packageSize: "3.2 x 1.6 x 0.9 mm",
    current: "IF=5mA",
    reel: "3000PCS/Reel",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("1206", "3.2*1.6*0.9", ["100-2000", "100-2000", "100-2000", "100-3000", "10-200", "100-2000", "1000-5000"], "IF=5", "3000PCS/Reel"),
    features: ["Larger 1206 top-view package for stronger indication", "High-brightness white option", "Reliable SMT reel packaging", "Good visibility for industrial products"],
    applications: ["Industrial instruments", "Power equipment indicators", "Home appliances", "Control boards", "Automation electronics"]
  },
  {
    slug: "1209-dual-color-led",
    name: "1209 Dual Color LED",
    shortName: "1209 Dual Color",
    modelFamily: "1209",
    lightingType: "Dual Color",
    description:
      "1209 dual-color chip LED for high-visibility two-color indication in industrial panels, controls, power electronics and signal modules.",
    image: "/images/products/chip-led/1209-dual-color-chip-led.jpg",
    imageAlt: "KINGBRIGHT 1209 dual color chip LED specification and product image",
    packageSize: "3.2 x 2.7 x 0.9 mm",
    current: "IF=5mA",
    reel: "3000PCS/Reel",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("1209", "3.2*2.7*0.9", "3000PCS/Reel", [["Red+Yellow", ["Red", "Yellow"]], ["Red+Green", ["Red", "Green"]], ["Red+Blue", ["Red", "Blue"]], ["Green+Blue", ["Green", "Blue"]]]),
    features: ["Dual-color indication in larger 1209 SMD package", "Multiple two-color combinations", "Strong visibility for panel indication", "Efficient IF=5mA drive condition"],
    applications: ["Industrial control panels", "Power modules", "Alarm status indication", "Communication equipment", "Automotive electronics"]
  },
  {
    slug: "1615-dual-color-led",
    name: "1615 Dual Color LED",
    shortName: "1615 Dual Color",
    modelFamily: "1615",
    lightingType: "Dual Color",
    description:
      "1615 dual-color chip LED for compact two-color signal indication in space-sensitive electronics and SMT assemblies.",
    image: "/images/products/chip-led/1615-dual-color-chip-led.jpg",
    imageAlt: "KINGBRIGHT 1615 dual color chip LED specification and product image",
    packageSize: "1.6 x 1.5 x 0.6 mm",
    current: "IF=5mA",
    reel: "4000PCS/Reel",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("1615", "1.6*1.5*0.6", "4000PCS/Reel", [["Red+Yellow", ["Red", "Yellow"]], ["Red+Green", ["Red", "Green"]], ["Red+Blue", ["Red", "Blue"]], ["Green+Blue", ["Green", "Blue"]]]),
    features: ["Compact dual-color SMD package", "Four two-color combinations", "Good fit for compact status indication", "4000PCS/Reel for SMT production"],
    applications: ["Portable electronics", "Smart home panels", "Battery and charging indicators", "Industrial modules", "Communication devices"]
  }
];

export function getChipProduct(slug: string) {
  return chipProducts.find((product) => product.slug === slug);
}
