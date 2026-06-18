export type UvSpecRow = {
  product: string;
  model: string;
  partNo: string;
  productSize: string;
  wavelength: string;
  radiantPower: string;
  forwardVoltage: string;
  current: string;
  viewingAngle: string;
  reel: string;
};

export type UvVariant = {
  name: string;
  image: string;
  imageAlt: string;
};

export type UvSeries = {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  modelList: string[];
  wavelengthSummary: string;
  packageSummary: string;
  currentSummary: string;
  variants: UvVariant[];
  specs: UvSpecRow[];
  applications: string[];
};

const uvApplications = [
  "UV sterilization and disinfection equipment",
  "Water and air purification modules",
  "Medical and hygiene electronics",
  "UV curing and printing systems",
  "Fluorescence detection and inspection",
  "Industrial sensing and instrumentation"
];

function uvSeries(args: UvSeries): UvSeries {
  return args;
}

export const uvSeriesList: UvSeries[] = [
  uvSeries({
    slug: "uva-led",
    name: "UVA LED Series",
    shortName: "UVA LED",
    seoTitle: "UVA LED Manufacturer | 3535 UVA LED for UV Curing and Detection",
    seoDescription:
      "KINGBRIGHT UVA LED series with 3535 plane and ball-head packages, 365-400nm wavelength, high radiant power and SMT reel packaging for UV curing, detection and inspection projects.",
    description:
      "3535 UVA LED products for 365-400nm ultraviolet curing, fluorescence detection, inspection equipment and OEM UV electronics.",
    intro:
      "UVA LEDs emit ultraviolet light in the near-UV range and are commonly used for UV curing, fluorescence excitation, inspection, counterfeit detection and specialty lighting. KINGBRIGHT 3535 UVA LEDs provide 365-380nm and 380-400nm wavelength options in plane and ball-head package styles for engineers who need compact SMT UV LED components with stable output.",
    heroImage: "/images/products/uv-led/3535-uva-plane.png",
    heroImageAlt: "KINGBRIGHT 3535 UVA plane UV LED product photo",
    modelList: ["3535 UVA Plane", "3535 UVA Ball Head"],
    wavelengthSummary: "365-400 nm",
    packageSummary: "3.6*3.6",
    currentSummary: "IF=700mA",
    variants: [
      { name: "3535 UVA Plane", image: "/images/products/uv-led/3535-uva-plane.png", imageAlt: "3535 UVA plane UV LED product photo" },
      { name: "3535 UVA Ball Head", image: "/images/products/uv-led/3535-uva-ball-head.png", imageAlt: "3535 UVA ball head UV LED product photo" }
    ],
    specs: [
      { product: "3535 UVA Plane", model: "3535 UVA", partNo: "KB-3535.365", productSize: "3.6*3.6", wavelength: "365-380", radiantPower: "800-1200", forwardVoltage: "3.4-3.8", current: "IF=700", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVA Plane", model: "3535 UVA", partNo: "KB-3535.395", productSize: "3.6*3.6", wavelength: "380-400", radiantPower: "800-1200", forwardVoltage: "3.4-3.8", current: "IF=700", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVA Ball Head", model: "3535 UVA", partNo: "KB-3535.365", productSize: "3.6*3.6", wavelength: "365-380", radiantPower: "800-1200", forwardVoltage: "3.4-3.8", current: "IF=700", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVA Ball Head", model: "3535 UVA", partNo: "KB-3535.395", productSize: "3.6*3.6", wavelength: "380-400", radiantPower: "800-1200", forwardVoltage: "3.4-3.8", current: "IF=700", viewingAngle: "120", reel: "1000PCS/Reel" }
    ],
    applications: [
      "UV curing and printing",
      "Fluorescence excitation",
      "Industrial inspection",
      "Counterfeit detection",
      "Medical and beauty devices",
      "Specialty UV lighting"
    ]
  }),
  uvSeries({
    slug: "uvc-led",
    name: "UVC LED Series",
    shortName: "UVC LED",
    seoTitle: "UVC LED Manufacturer | 270-280nm Sterilization LED Components",
    seoDescription:
      "KINGBRIGHT UVC LED series including 3535, 5050 and 6868 plane and ball-head UV sterilization LEDs at 270-280nm for water, air and surface disinfection equipment.",
    description:
      "270-280nm UVC LED packages for sterilization LED modules, disinfection equipment, purification products and industrial UV systems.",
    intro:
      "UVC LEDs emit deep ultraviolet light used in sterilization and disinfection applications. The 270-280nm range is widely selected for water purification, air treatment, surface disinfection and hygiene electronics. KINGBRIGHT UVC LED products include 3535, 5050 and 6868 package options with plane and ball-head lens structures for different optical angle and module design requirements.",
    heroImage: "/images/products/uv-led/3535-uvc-plane.png",
    heroImageAlt: "KINGBRIGHT 3535 UVC plane sterilization LED product photo",
    modelList: ["3535 UVC Plane", "3535 UVC Ball Head", "5050 UVC Plane", "5050 UVC Ball Head", "6868 UVC Plane", "6868 UVC Ball Head"],
    wavelengthSummary: "270-280 nm",
    packageSummary: "3.6*3.6 / 5.0*5.0 / 6.8*6.8",
    currentSummary: "IF=40-400mA",
    variants: [
      { name: "3535 UVC Plane", image: "/images/products/uv-led/3535-uvc-plane.png", imageAlt: "3535 UVC plane UV LED product photo" },
      { name: "3535 UVC Ball Head", image: "/images/products/uv-led/3535-uvc-ball-head.png", imageAlt: "3535 UVC ball head UV LED product photo" },
      { name: "5050 UVC Plane", image: "/images/products/uv-led/5050-uvc-plane.png", imageAlt: "5050 UVC plane UV LED product photo" },
      { name: "5050 UVC Ball Head", image: "/images/products/uv-led/5050-uvc-ball-head.png", imageAlt: "5050 UVC ball head UV LED product photo" },
      { name: "6868 UVC Plane", image: "/images/products/uv-led/6868-uvc-plane.png", imageAlt: "6868 UVC plane UV LED product photo" },
      { name: "6868 UVC Ball Head", image: "/images/products/uv-led/6868-uvc-ball-head.png", imageAlt: "6868 UVC ball head UV LED product photo" }
    ],
    specs: [
      { product: "3535 UVC Plane", model: "3535 UVC", partNo: "KB-3535.1020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC Plane", model: "3535 UVC", partNo: "KB-3535.2020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC Plane", model: "3535 UVC", partNo: "KB-3535.3030", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "30-60", forwardVoltage: "5-7", current: "IF=300", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC Plane", model: "3535 UVC", partNo: "KB-3535.4040", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "60-100", forwardVoltage: "5-7", current: "IF=400", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC Ball Head", model: "3535 UVC", partNo: "KB-3535.1020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "3535 UVC Ball Head", model: "3535 UVC", partNo: "KB-3535.2020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "3535 UVC Ball Head", model: "3535 UVC", partNo: "KB-3535.3030", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "30-60", forwardVoltage: "5-7", current: "IF=300", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "3535 UVC Ball Head", model: "3535 UVC", partNo: "KB-3535.4040", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "60-100", forwardVoltage: "5-7", current: "IF=400", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "5050 UVC Plane", model: "5050 UVC", partNo: "KB-5050.1020", productSize: "5.0*5.0*1.7", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "5050 UVC Plane", model: "5050 UVC", partNo: "KB-5050.2020", productSize: "5.0*5.0*1.7", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "5050 UVC Plane", model: "5050 UVC", partNo: "KB-5050.3030", productSize: "5.0*5.0*1.7", wavelength: "270-280", radiantPower: "30-60", forwardVoltage: "5-7", current: "IF=300", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "5050 UVC Plane", model: "5050 UVC", partNo: "KB-5050.4040", productSize: "5.0*5.0*1.7", wavelength: "270-280", radiantPower: "60-100", forwardVoltage: "5-7", current: "IF=400", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "5050 UVC Ball Head", model: "5050 UVC", partNo: "KB-5050.1020", productSize: "5.0*5.0", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "5050 UVC Ball Head", model: "5050 UVC", partNo: "KB-5050.2020", productSize: "5.0*5.0", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "5050 UVC Ball Head", model: "5050 UVC", partNo: "KB-50505.3030", productSize: "5.0*5.0", wavelength: "270-280", radiantPower: "30-60", forwardVoltage: "5-7", current: "IF=300", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "5050 UVC Ball Head", model: "5050 UVC", partNo: "KB-5050.4040", productSize: "5.0*5.0", wavelength: "270-280", radiantPower: "60-100", forwardVoltage: "5-7", current: "IF=400", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "6868 UVC Plane", model: "6868 UVC", partNo: "KB-6868.1020", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "6868 UVC Plane", model: "6868 UVC", partNo: "KB-6868.2020", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "6868 UVC Plane", model: "6868 UVC", partNo: "KB-6868.3030", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "30-60", forwardVoltage: "5-7", current: "IF=300", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "6868 UVC Plane", model: "6868 UVC", partNo: "KB-6868.4040", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "60-100", forwardVoltage: "5-7", current: "IF=400", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "6868 UVC Ball Head", model: "6868 UVC", partNo: "KB-6868.1020", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "60-90", reel: "1000PCS/Reel" },
      { product: "6868 UVC Ball Head", model: "6868 UVC", partNo: "KB-6868.2020", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "60-90", reel: "1000PCS/Reel" },
      { product: "6868 UVC Ball Head", model: "6868 UVC", partNo: "KB-6868.3030", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "30-60", forwardVoltage: "5-7", current: "IF=300", viewingAngle: "60-90", reel: "1000PCS/Reel" },
      { product: "6868 UVC Ball Head", model: "6868 UVC", partNo: "KB-6868.4040", productSize: "6.8*6.8", wavelength: "270-280", radiantPower: "60-100", forwardVoltage: "5-7", current: "IF=400", viewingAngle: "60-90", reel: "1000PCS/Reel" }
    ],
    applications: uvApplications
  }),
  uvSeries({
    slug: "uvc-uva-led",
    name: "UVC + UVA LED Series",
    shortName: "UVC + UVA LED",
    seoTitle: "UVC + UVA LED Manufacturer | Dual Wavelength Sterilization LED",
    seoDescription:
      "KINGBRIGHT UVC+UVA LED series combines 270-280nm UVC and 390-400nm UVA output in 3535 plane and ball-head packages for sterilization LED and UV module projects.",
    description:
      "Dual wavelength 3535 UVC+UVA LED products for UV sterilization modules, auxiliary UVA output and compact OEM UV electronics.",
    intro:
      "UVC+UVA LEDs combine deep-UV sterilization wavelengths with near-UV auxiliary output in one product family. The UVC channel supports disinfection-focused designs, while the UVA channel can support complementary activation, monitoring or application-specific UV response. KINGBRIGHT 3535 UVC+UVA LEDs are available in plane and ball-head styles for compact UV LED modules.",
    heroImage: "/images/products/uv-led/3535-uvc-uva-plane.png",
    heroImageAlt: "KINGBRIGHT 3535 UVC plus UVA plane UV LED product photo",
    modelList: ["3535 UVC+UVA Plane", "3535 UVC+UVA Ball Head"],
    wavelengthSummary: "270-280 nm + 390-400 nm",
    packageSummary: "3.6*3.6",
    currentSummary: "IF=40-100mA / IF=60mA",
    variants: [
      { name: "3535 UVC+UVA Plane", image: "/images/products/uv-led/3535-uvc-uva-plane.png", imageAlt: "3535 UVC plus UVA plane UV LED product photo" },
      { name: "3535 UVC+UVA Ball Head", image: "/images/products/uv-led/3535-uvc-uva-ball-head.png", imageAlt: "3535 UVC plus UVA ball head UV LED product photo" }
    ],
    specs: [
      { product: "3535 UVC+UVA Plane", model: "3535 UVC+UVA", partNo: "KB-3535.1020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC+UVA Plane", model: "3535 UVC+UVA", partNo: "KB-3535.1020", productSize: "3.6*3.6", wavelength: "390-400", radiantPower: "10-25", forwardVoltage: "3.0-3.4", current: "IF=60", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC+UVA Plane", model: "3535 UVC+UVA", partNo: "KB-3535.2020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC+UVA Plane", model: "3535 UVC+UVA", partNo: "KB-3535.2020", productSize: "3.6*3.6", wavelength: "390-400", radiantPower: "10-25", forwardVoltage: "3.0-3.4", current: "IF=60", viewingAngle: "120", reel: "1000PCS/Reel" },
      { product: "3535 UVC+UVA Ball Head", model: "3535 UVC+UVA", partNo: "KB-3535.1020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "6-8", forwardVoltage: "5-7", current: "IF=40", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "3535 UVC+UVA Ball Head", model: "3535 UVC+UVA", partNo: "KB-3535.1020", productSize: "3.6*3.6", wavelength: "390-400", radiantPower: "10-25", forwardVoltage: "3.0-3.4", current: "IF=60", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "3535 UVC+UVA Ball Head", model: "3535 UVC+UVA", partNo: "KB-3535.2020", productSize: "3.6*3.6", wavelength: "270-280", radiantPower: "15-20", forwardVoltage: "5-7", current: "IF=100", viewingAngle: "30-90", reel: "1000PCS/Reel" },
      { product: "3535 UVC+UVA Ball Head", model: "3535 UVC+UVA", partNo: "KB-3535.2020", productSize: "3.6*3.6", wavelength: "390-400", radiantPower: "10-25", forwardVoltage: "3.0-3.4", current: "IF=60", viewingAngle: "30-90", reel: "1000PCS/Reel" }
    ],
    applications: [
      "UV sterilization LED modules",
      "Water and air treatment devices",
      "Smart disinfection products",
      "Dual wavelength UV electronics",
      "Medical and hygiene equipment",
      "OEM UV module development"
    ]
  })
];

export function getUvSeries(slug: string) {
  return uvSeriesList.find((series) => series.slug === slug);
}
