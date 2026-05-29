export type DipLedSpecRow = {
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

export type DipLedProduct = {
  slug: string;
  name: string;
  shortName: string;
  family: string;
  lensType: string;
  description: string;
  image: string;
  imageAlt: string;
  packageSize: string;
  viewingAngle: string;
  packaging: string;
  current: string;
  colors: string;
  specs: DipLedSpecRow[];
  features: string[];
  applications: string[];
};

const monoColors = ["Red", "Yellow", "Orange", "Green", "Purple", "Blue", "White"];
const dipWavelengths = ["620-630", "585-595", "600-610", "510-535", "390-400", "460-470", "/"];
const dipVoltages = ["1.8-2.4", "1.8-2.4", "1.8-2.4", "2.6-3.2", "3.0-3.6", "2.6-3.2", "2.6-3.2"];

function monoSpecs(model: string, packageSize: string, intensities: string[], viewingAngle: string, packaging: string): DipLedSpecRow[] {
  return monoColors.map((color, index) => ({
    model,
    packageSize,
    color,
    wavelength: dipWavelengths[index],
    luminousIntensity: intensities[index],
    forwardVoltage: dipVoltages[index],
    current: "IF=20",
    viewingAngle,
    packaging
  }));
}

type DipColor = "Red" | "Yellow" | "Green" | "Blue";

function dualSpecs(modelPrefix: string, packageSize: string, viewingAngle: string, packaging: string, greenWavelength = "515-535"): DipLedSpecRow[] {
  const colorData: Record<DipColor, Omit<DipLedSpecRow, "model" | "packageSize" | "current" | "viewingAngle" | "packaging">> = {
    Red: { color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4" },
    Yellow: { color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4" },
    Green: { color: "Green", wavelength: greenWavelength, luminousIntensity: greenWavelength === "515-525" ? "100-10000" : "100-3000", forwardVoltage: "2.6-3.2" },
    Blue: { color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2" }
  };
  const pairs: Array<[string, DipColor[]]> = [
    ["Red+Yellow", ["Red", "Yellow"]],
    ["Red+Green", ["Red", "Green"]],
    ["Red+Blue", ["Red", "Blue"]],
    ["Green+Blue", ["Green", "Blue"]]
  ];

  return pairs.flatMap(([pair, colors]) =>
    colors.map((color) => ({
      model: `${modelPrefix} ${pair}`,
      packageSize,
      current: "IF=20",
      viewingAngle,
      packaging,
      ...colorData[color]
    }))
  );
}

function rgbSpecs(modelPrefix: string, packageSize: string, viewingAngle: string, packaging: string): DipLedSpecRow[] {
  const colorData: Record<DipColor, Omit<DipLedSpecRow, "model" | "packageSize" | "current" | "viewingAngle" | "packaging">> = {
    Red: { color: "Red", wavelength: "620-630", luminousIntensity: "100-7000", forwardVoltage: "1.8-2.4" },
    Yellow: { color: "Yellow", wavelength: "585-595", luminousIntensity: "200-2000", forwardVoltage: "1.8-2.4" },
    Green: { color: "Green", wavelength: "515-535", luminousIntensity: "200-10000", forwardVoltage: "2.6-3.2" },
    Blue: { color: "Blue", wavelength: "460-470", luminousIntensity: "100-2000", forwardVoltage: "2.6-3.2" }
  };
  const groups: Array<[string, DipColor[]]> = [
    ["R+Y+B", ["Red", "Yellow", "Blue"]],
    ["R+G+B", ["Red", "Green", "Blue"]],
    ["R+Y+G", ["Red", "Yellow", "Green"]]
  ];

  return groups.flatMap(([group, colors]) =>
    colors.map((color) => ({
      model: `${modelPrefix} ${group}`,
      packageSize,
      current: "IF=20",
      viewingAngle,
      packaging,
      ...colorData[color]
    }))
  );
}

function product(args: Omit<DipLedProduct, "image" | "imageAlt" | "features" | "applications" | "current"> & { file: string }): DipLedProduct {
  const hasMultiColor = args.name.includes("Dual") || args.name.includes("RGB") || args.name.includes("Full Color");
  return {
    ...args,
    current: "IF=20mA",
    image: `/images/products/dip-led/${args.file}`,
    imageAlt: `KINGBRIGHT ${args.name} product image and specification table`,
    features: [
      "Through-hole package with stable mechanical mounting on PCB assemblies",
      "Multiple emitted color options for signal, status and display indication",
      "Standard IF=20mA electrical data for engineering comparison",
      "Custom color, brightness and lead options can be reviewed for OEM projects",
      hasMultiColor ? "Multi-color output options support compact two-state or RGB indicator designs" : "Mono-color versions support clear and reliable visual indication"
    ],
    applications: [
      "Industrial control panels",
      "Signal indicators",
      "Display and signage electronics",
      "Consumer electronics",
      "Automotive and equipment status indication",
      "OEM PCB assemblies"
    ]
  };
}

export const dipProducts: DipLedProduct[] = [
  product({
    slug: "1-8mm-teat-shape-dip-led",
    name: "1.8mm Teat Shape DIP LED",
    shortName: "1.8mm Teat Shape",
    family: "1.8mm DIP LED",
    lensType: "Teat shape lens",
    description: "Compact 1.8mm teat shape DIP LED for small through-hole indicators, control panels and OEM electronics requiring a narrow package with visible signal output.",
    file: "1.8mm-teat-shape-dip-led.webp",
    packageSize: "1.8 x 3.0 mm",
    viewingAngle: "70-150 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("1.8mm", "1.8*3.0", ["100-5000", "100-4000", "100-2000", "100-10000", "20-200", "100-2000", "200-10000"], "70-150", "1000PCS/bag")
  }),
  product({
    slug: "2mm-tower-type-dip-led",
    name: "2mm Tower Type DIP LED",
    shortName: "2mm Tower Type",
    family: "2mm DIP LED",
    lensType: "Tower type lens",
    description: "2mm tower type through-hole LED for compact panel indication, electronic equipment and signal products requiring a slim vertical DIP package.",
    file: "2mm-tower-type-dip-led.webp",
    packageSize: "2.0 x 8.0 mm",
    viewingAngle: "70-150 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("2mm", "2*8.0", ["100-5000", "100-4000", "100-3000", "100-10000", "20-200", "100-1000", "200-10000"], "70-150", "1000PCS/bag")
  }),
  product({
    slug: "3mm-flat-head-dip-led",
    name: "3mm Flat Head DIP LED",
    shortName: "3mm Flat Head",
    family: "3mm DIP LED",
    lensType: "Flat head lens",
    description: "3mm flat head DIP LED with broad viewing angle for panel lights, indicator windows and applications where low-profile through-hole indication is needed.",
    file: "3mm-flat-head-dip-led.webp",
    packageSize: "3.0 x 3.85 mm",
    viewingAngle: "80-160 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("3mm", "3*3.85", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-2000"], "80-160", "1000PCS/bag")
  }),
  product({
    slug: "3mm-round-head-dip-led",
    name: "3mm Round Head DIP LED",
    shortName: "3mm Round Head",
    family: "3mm DIP LED",
    lensType: "Round head lens",
    description: "3mm round head DIP LED for bright front-panel indication, instrumentation, display modules and electronic signal applications.",
    file: "3mm-round-head-dip-led.webp",
    packageSize: "3.0 x 5.3 mm",
    viewingAngle: "10-70 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("3mm", "3*5.3", ["100-15000", "100-10000", "100-10000", "200-10000", "100-1000", "100-8000", "500-20000"], "10-70", "1000PCS/bag")
  }),
  product({
    slug: "3mm-round-dual-color-dip-led",
    name: "3mm Round Dual Color DIP LED",
    shortName: "3mm Round Dual Color",
    family: "3mm DIP LED",
    lensType: "Round dual-color lens",
    description: "3mm round dual color DIP LED for two-state indication, alarm display, charging status and compact control-panel signal designs.",
    file: "3mm-round-dual-color-dip-led.webp",
    packageSize: "3.0 x 5.3 mm",
    viewingAngle: "10-90 degree",
    packaging: "1000PCS/bag",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("3MM", "3*5.3", "10-90", "1000PCS/bag")
  }),
  product({
    slug: "5mm-straw-hat-dip-led",
    name: "5mm Straw Hat DIP LED",
    shortName: "5mm Straw Hat",
    family: "5mm DIP LED",
    lensType: "Straw hat lens",
    description: "5mm straw hat DIP LED with wide light distribution for signage, indicators, decorative electronics and visibility-focused through-hole designs.",
    file: "5mm-straw-hat-dip-led.webp",
    packageSize: "4.8 x 4.8 mm",
    viewingAngle: "70-150 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("5mm", "4.8*4.8", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-5000"], "70-150", "1000PCS/bag")
  }),
  product({
    slug: "5mm-straw-hat-rgb-dip-led",
    name: "5mm Straw Hat RGB DIP LED",
    shortName: "5mm Straw Hat RGB",
    family: "5mm DIP LED",
    lensType: "Straw hat RGB lens",
    description: "5mm straw hat RGB DIP LED for full-color indication, decorative signal lights and through-hole products requiring multiple color outputs.",
    file: "5mm-straw-hat-rgb-dip-led.webp",
    packageSize: "4.8 x 4.8 mm",
    viewingAngle: "60-120 degree",
    packaging: "1000PCS/bag",
    colors: "R+Y+B, R+G+B and R+Y+G",
    specs: rgbSpecs("5MM", "4.8*4.8", "60-120", "1000PCS/bag")
  }),
  product({
    slug: "5mm-straw-hat-dual-color-dip-led",
    name: "5mm Straw Hat Dual Color DIP LED",
    shortName: "5mm Straw Hat Dual Color",
    family: "5mm DIP LED",
    lensType: "Straw hat dual-color lens",
    description: "5mm straw hat dual color DIP LED for wide-angle two-color status indication in control boards, signage and OEM electronic equipment.",
    file: "5mm-straw-hat-dual-color-dip-led.webp",
    packageSize: "4.8 x 4.8 mm",
    viewingAngle: "60-120 degree",
    packaging: "1000PCS/bag",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("5MM", "4.8*4.8", "60-120", "1000PCS/bag")
  }),
  product({
    slug: "5mm-helmet-dip-led",
    name: "5mm Helmet DIP LED",
    shortName: "5mm Helmet",
    family: "5mm DIP LED",
    lensType: "Helmet lens",
    description: "5mm helmet DIP LED for through-hole indicator assemblies requiring a durable lens shape and stable brightness options.",
    file: "5mm-helmet-dip-led.webp",
    packageSize: "4.8 x 4.8 mm",
    viewingAngle: "70-150 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("5mm", "4.8*4.8", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-5000"], "70-150", "1000PCS/bag")
  }),
  product({
    slug: "5mm-flat-head-dip-led",
    name: "5mm Flat Head DIP LED",
    shortName: "5mm Flat Head",
    family: "5mm DIP LED",
    lensType: "Flat head lens",
    description: "5mm flat head DIP LED for broad viewing-angle indication, display panels and lighting products requiring a low-profile lens.",
    file: "5mm-flat-head-dip-led.webp",
    packageSize: "5.0 x 5.3 mm",
    viewingAngle: "80-160 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("5mm", "5*5.3", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-3000"], "80-160", "1000PCS/bag")
  }),
  product({
    slug: "5mm-round-head-dip-led",
    name: "5mm Round Head DIP LED",
    shortName: "5mm Round Head",
    family: "5mm DIP LED",
    lensType: "Round head lens",
    description: "5mm round head DIP LED for high-visibility panel indicators, signage, instruments and industrial electronics.",
    file: "5mm-round-head-dip-led.webp",
    packageSize: "5.0 x 8.7 mm",
    viewingAngle: "10-70 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("5mm", "5*8.7", ["100-15000", "100-10000", "100-10000", "200-10000", "100-1000", "100-8000", "500-20000"], "10-70", "1000PCS/bag")
  }),
  product({
    slug: "5mm-round-rgb-dip-led",
    name: "5mm Round RGB DIP LED",
    shortName: "5mm Round RGB",
    family: "5mm DIP LED",
    lensType: "Round RGB lens",
    description: "5mm round RGB DIP LED for full-color through-hole indication, decorative displays and multi-color electronics.",
    file: "5mm-round-rgb-dip-led.webp",
    packageSize: "5.0 x 8.7 mm",
    viewingAngle: "10-90 degree",
    packaging: "1000PCS/bag",
    colors: "R+Y+B, R+G+B and R+Y+G",
    specs: rgbSpecs("5MM", "5*8.7", "10-90", "1000PCS/bag")
  }),
  product({
    slug: "5mm-round-dual-color-dip-led",
    name: "5mm Round Dual Color DIP LED",
    shortName: "5mm Round Dual Color",
    family: "5mm DIP LED",
    lensType: "Round dual-color lens",
    description: "5mm round dual color DIP LED for bright two-state indication in industrial panels, charging devices and signal display assemblies.",
    file: "5mm-round-dual-color-dip-led.jpg",
    packageSize: "5.0 x 8.7 mm",
    viewingAngle: "10-90 degree",
    packaging: "1000PCS/bag",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("5MM", "5*8.7", "10-90", "1000PCS/bag")
  }),
  product({
    slug: "8mm-straw-hat-dip-led",
    name: "8mm Straw Hat DIP LED",
    shortName: "8mm Straw Hat",
    family: "8mm DIP LED",
    lensType: "Straw hat lens",
    description: "8mm straw hat DIP LED for larger wide-angle indicators, sign lamps and equipment where broader light output is required.",
    file: "8mm-straw-hat-dip-led.jpg",
    packageSize: "8.0 x 6.0 mm",
    viewingAngle: "70-150 degree",
    packaging: "500PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("8mm", "8*6", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-5000"], "70-150", "500PCS/bag")
  }),
  product({
    slug: "10mm-flat-head-dip-led",
    name: "10mm Flat Head DIP LED",
    shortName: "10mm Flat Head",
    family: "10mm DIP LED",
    lensType: "Flat head lens",
    description: "10mm flat head DIP LED for large format indicators, display panels and products needing a broad viewing angle.",
    file: "10mm-flat-head-dip-led.jpg",
    packageSize: "10.0 x 10.2 mm",
    viewingAngle: "80-160 degree",
    packaging: "200PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("10mm", "10*10.2", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-3000"], "80-160", "200PCS/bag")
  }),
  product({
    slug: "10mm-round-head-dip-led",
    name: "10mm Round Head DIP LED",
    shortName: "10mm Round Head",
    family: "10mm DIP LED",
    lensType: "Round head lens",
    description: "10mm round head DIP LED for high-visibility indicators, signal lamps and equipment panels requiring a larger front lens.",
    file: "10mm-round-head-dip-led.jpg",
    packageSize: "5.0 x 8.7 mm",
    viewingAngle: "10-70 degree",
    packaging: "200PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("10mm", "5*8.7", ["100-15000", "100-10000", "100-10000", "200-10000", "100-1000", "100-8000", "500-20000"], "10-70", "200PCS/bag")
  }),
  product({
    slug: "10mm-round-rgb-dip-led",
    name: "10mm Round RGB DIP LED",
    shortName: "10mm Round RGB",
    family: "10mm DIP LED",
    lensType: "Round RGB lens",
    description: "10mm round RGB DIP LED for large full-color indicators, decorative display lights and through-hole signal assemblies.",
    file: "10mm-round-rgb-dip-led.jpg",
    packageSize: "10.0 x 13.7 mm",
    viewingAngle: "10-90 degree",
    packaging: "200PCS/bag",
    colors: "R+Y+B, R+G+B and R+Y+G",
    specs: rgbSpecs("10MM", "10*13.7", "10-90", "200PCS/bag")
  }),
  product({
    slug: "10mm-round-dual-color-dip-led",
    name: "10mm Round Dual Color DIP LED",
    shortName: "10mm Round Dual Color",
    family: "10mm DIP LED",
    lensType: "Round dual-color lens",
    description: "10mm round dual color DIP LED for large two-color status displays and equipment indication where a bigger lens is required.",
    file: "10mm-round-dual-color-dip-led.jpg",
    packageSize: "10.0 x 13.7 mm",
    viewingAngle: "10-90 degree",
    packaging: "250PCS/bag",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("10MM", "10*13.7", "10-90", "250PCS/bag")
  }),
  product({
    slug: "234mm-square-head-dip-led",
    name: "234mm Square Head DIP LED",
    shortName: "234mm Square Head",
    family: "234 Square DIP LED",
    lensType: "Square head lens",
    description: "234mm square head DIP LED for rectangular indication windows, display panels and compact through-hole signal positions.",
    file: "234mm-square-head-dip-led.jpg",
    packageSize: "2.0 x 3.0 x 4.0 mm",
    viewingAngle: "70-150 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("234mm", "2*3*4", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-5000"], "70-150", "1000PCS/bag")
  }),
  product({
    slug: "234mm-square-dual-color-dip-led",
    name: "234mm Square Dual Color DIP LED",
    shortName: "234mm Square Dual Color",
    family: "234 Square DIP LED",
    lensType: "Square dual-color lens",
    description: "234mm square dual color DIP LED for compact two-color signal indication in display boards and industrial panel assemblies.",
    file: "234mm-square-dual-color-dip-led.jpg",
    packageSize: "2.0 x 3.0 x 4.0 mm",
    viewingAngle: "60-120 degree",
    packaging: "1000PCS/Reel",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("234", "2*3*4", "60-120", "1000PCS/Reel", "515-525")
  }),
  product({
    slug: "257mm-square-head-dip-led",
    name: "257mm Square Head DIP LED",
    shortName: "257mm Square Head",
    family: "257 Square DIP LED",
    lensType: "Square head lens",
    description: "257mm square head DIP LED for larger rectangular indication windows, PCB indicators and display products.",
    file: "257mm-square-head-dip-led.jpg",
    packageSize: "2.0 x 5.0 x 7.0 mm",
    viewingAngle: "70-150 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("257mm", "2*5*7", ["100-1000", "100-1000", "100-1000", "100-2000", "20-200", "100-800", "200-5000"], "70-150", "1000PCS/bag")
  }),
  product({
    slug: "257mm-square-full-color-dip-led",
    name: "257mm Square Full Color DIP LED",
    shortName: "257mm Square Full Color",
    family: "257 Square DIP LED",
    lensType: "Square full-color lens",
    description: "257mm square full color DIP LED for RGB signal indication, display modules and through-hole multi-color electronics.",
    file: "257mm-square-full-color-dip-led.jpg",
    packageSize: "2.0 x 5.0 x 7.0 mm",
    viewingAngle: "60-120 degree",
    packaging: "1000PCS/bag",
    colors: "R+Y+B, R+G+B and R+Y+G",
    specs: rgbSpecs("257", "2*5*7", "60-120", "1000PCS/bag")
  }),
  product({
    slug: "257mm-square-dual-color-dip-led",
    name: "257mm Square Dual Color DIP LED",
    shortName: "257mm Square Dual Color",
    family: "257 Square DIP LED",
    lensType: "Square dual-color lens",
    description: "257mm square dual color DIP LED for two-state rectangular indicators, display boards and industrial control electronics.",
    file: "257mm-square-dual-color-dip-led.jpg",
    packageSize: "2.0 x 5.0 x 7.0 mm",
    viewingAngle: "60-120 degree",
    packaging: "1000PCS/Reel",
    colors: "Red+Yellow, Red+Green, Red+Blue and Green+Blue",
    specs: dualSpecs("257", "2*5*7", "60-120", "1000PCS/Reel", "515-525")
  }),
  product({
    slug: "long-lead-dip-led-series",
    name: "Long Lead DIP LED Series",
    shortName: "Long Lead DIP LED",
    family: "Long Lead DIP LED",
    lensType: "Extended lead options",
    description: "Long lead DIP LED series for 3mm, 5mm, 8mm and 10mm through-hole LED assemblies requiring extended leads for special mounting conditions.",
    file: "long-lead-dip-led-series.jpg",
    packageSize: "3mm / 5mm / 8mm / 10mm",
    viewingAngle: "70-150 degree",
    packaging: "1000PCS/bag",
    colors: "Red, yellow, orange, green, purple, blue and white",
    specs: monoSpecs("All Series with long feet", "3MM / 5MM / 8mm / 10mm", ["100-15000", "100-10000", "100-10000", "200-10000", "100-1000", "100-8000", "500-20000"], "70-150", "1000PCS/bag")
  })
];

export function getDipProduct(slug: string) {
  return dipProducts.find((product) => product.slug === slug);
}
