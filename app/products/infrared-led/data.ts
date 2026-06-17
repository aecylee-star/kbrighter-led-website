export type InfraredSpecRow = {
  model: string;
  type: string;
  packageSize: string;
  wavelength: string;
  radiantPower: string;
  forwardVoltage: string;
  current: string;
  viewingAngle: string;
  packaging: string;
};

export type InfraredSeries = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
  packageSummary: string;
  wavelengthSummary: string;
  currentSummary: string;
  packagingSummary: string;
  specs: InfraredSpecRow[];
  features: string[];
  applications: string[];
};

const commonApplications = [
  "Remote Control Products",
  "Photoelectric Sensors",
  "Smart Home Devices",
  "Security Electronics",
  "Industrial Automation",
  "Medical and Wellness Devices",
  "Consumer Electronics",
  "Optical Detection Systems"
];

function irSeries(args: Omit<InfraredSeries, "imageAlt" | "features" | "applications"> & { features?: string[]; applications?: string[] }): InfraredSeries {
  return {
    ...args,
    imageAlt: `KINGBRIGHT ${args.name} infrared LED product image`,
    features: args.features ?? [
      "Infrared emitting and receiving options for sensing and transmission designs",
      "850nm, 940nm and extended wavelength selections from supplied product data",
      "SMD and DIP package formats support automated or through-hole assembly",
      "Multiple optical power, current and viewing angle ranges for project matching",
      "Suitable for OEM quotation, sample review and custom specification discussion"
    ],
    applications: args.applications ?? commonApplications
  };
}

export const infraredSeries: InfraredSeries[] = [
  irSeries({
    slug: "chip-ir-series",
    name: "Chip IR Series",
    shortName: "Chip IR",
    description:
      "Chip infrared transmitting and receiving series for compact PCB sensing, miniature photoelectric detection and space-limited IR electronics.",
    image: "/images/products/infrared-led/chip-ir-series.png",
    packageSummary: "1.6*0.8 to 3.5*2.8",
    wavelengthSummary: "400-1100 nm",
    currentSummary: "20mA",
    packagingSummary: "2000-3000PCS/Reel",
    specs: [
      { model: "603triode", type: "Infrared light IR LED", packageSize: "1.6*0.8", wavelength: "400-1100", radiantPower: "70", forwardVoltage: "2-5", current: "20", viewingAngle: "-", packaging: "3000PCS/Reel" },
      { model: "603triode", type: "Infrared light IR LED", packageSize: "1.6*0.8", wavelength: "700-1100", radiantPower: "70", forwardVoltage: "2-5", current: "20", viewingAngle: "-", packaging: "3000PCS/Reel" },
      { model: "805triode", type: "Infrared light IR LED", packageSize: "2.0*1.25", wavelength: "400-1100", radiantPower: "70", forwardVoltage: "2-5", current: "20", viewingAngle: "-", packaging: "3000PCS/Reel" },
      { model: "805triode", type: "Infrared light IR LED", packageSize: "2.0*1.25", wavelength: "700-1100", radiantPower: "70", forwardVoltage: "2-5", current: "20", viewingAngle: "-", packaging: "3000PCS/Reel" },
      { model: "1206", type: "Infrared light IR LED", packageSize: "3.2*1.5", wavelength: "400-1100", radiantPower: "70", forwardVoltage: "2-5", current: "20", viewingAngle: "-", packaging: "2000PCS/Reel" },
      { model: "3528", type: "Infrared light IR LED", packageSize: "3.5*2.8", wavelength: "400-1100", radiantPower: "70", forwardVoltage: "2-5", current: "20", viewingAngle: "-", packaging: "2000PCS/Reel" }
    ]
  }),
  irSeries({
    slug: "smd-ir-transmitting-receiving-series",
    name: "SMD IR Transmitting & Receiving Series",
    shortName: "SMD IR",
    description:
      "SMD infrared transmitting and receiving series for high-volume SMT assembly, sensing modules, IR illumination and compact electronics.",
    image: "/images/products/infrared-led/smd-ir-transmitting-receiving-series.png",
    packageSummary: "2.8*3.5 to 5.0*5.0",
    wavelengthSummary: "850 / 940 nm",
    currentSummary: "500-1500mA",
    packagingSummary: "1000-3000PCS/Reel",
    specs: [
      { model: "2835", type: "Infrared light IR LED", packageSize: "2.8*3.5", wavelength: "850/940", radiantPower: "160", forwardVoltage: "4-5", current: "1000", viewingAngle: "15-120", packaging: "3000PCS/Reel" },
      { model: "3030", type: "Infrared light IR LED", packageSize: "3.0*3.0", wavelength: "850/940", radiantPower: "750", forwardVoltage: "4-5", current: "600", viewingAngle: "60-120", packaging: "1000PCS/Reel" },
      { model: "3535", type: "Infrared light IR LED", packageSize: "3.5*3.5", wavelength: "850/940", radiantPower: "600-1600", forwardVoltage: "4-5", current: "500-1500", viewingAngle: "60-120", packaging: "1000PCS/Reel" },
      { model: "5050", type: "Infrared light IR LED", packageSize: "5.0*5.0", wavelength: "850/940", radiantPower: "160", forwardVoltage: "4-5", current: "500", viewingAngle: "120", packaging: "1000PCS/Reel" }
    ]
  }),
  irSeries({
    slug: "dip-ir-transmitting-receiving-series",
    name: "DIP IR Transmitting & Receiving Series",
    shortName: "DIP IR",
    description:
      "DIP infrared transmitting and receiving series for through-hole sensing, remote control, industrial electronics and stable PCB mounting.",
    image: "/images/products/infrared-led/dip-ir-transmitting-receiving-series.png",
    packageSummary: "F3 / F5",
    wavelengthSummary: "850 / 940 nm",
    currentSummary: "20-100mA",
    packagingSummary: "1000PCS/bag",
    specs: [
      { model: "3mm", type: "Infrared light IR LED", packageSize: "F3", wavelength: "850/940", radiantPower: "40-100", forwardVoltage: "1.2-3.5", current: "20-100", viewingAngle: "30-120", packaging: "1000PCS/bag" },
      { model: "5mm", type: "Infrared light IR LED", packageSize: "F5", wavelength: "850/940", radiantPower: "40-100", forwardVoltage: "1.2-3.5", current: "20-100", viewingAngle: "30-120", packaging: "1000PCS/bag" }
    ]
  }),
  irSeries({
    slug: "ir-transmitter-receiver-pair-series",
    name: "IR Transmitter & Receiver Pair Series",
    shortName: "IR Pair",
    description:
      "Matched through-hole infrared transmitter and receiver pair series for optical detection, interrupter circuits and paired sensing applications.",
    image: "/images/products/infrared-led/ir-transmitter-receiver-pair-series.png",
    packageSummary: "F3 / F5",
    wavelengthSummary: "850-1100 nm",
    currentSummary: "20-100mA",
    packagingSummary: "1000PCS/bag",
    specs: [
      { model: "3mm", type: "Transmitter", packageSize: "F3", wavelength: "850/940", radiantPower: "40-100", forwardVoltage: "1.2-3.5", current: "20-100", viewingAngle: "30-120", packaging: "1000PCS/bag" },
      { model: "3mm", type: "Receiver", packageSize: "F3", wavelength: "850-1100", radiantPower: "40-100", forwardVoltage: "1.2-3.5", current: "20-100", viewingAngle: "30-120", packaging: "1000PCS/bag" },
      { model: "5mm", type: "Transmitter", packageSize: "F5", wavelength: "850/940", radiantPower: "40-100", forwardVoltage: "1.2-3.5", current: "20-100", viewingAngle: "30-120", packaging: "1000PCS/bag" },
      { model: "5mm", type: "Receiver", packageSize: "F5", wavelength: "850/1100", radiantPower: "40-100", forwardVoltage: "1.2-3.5", current: "20-100", viewingAngle: "30-120", packaging: "1000PCS/bag" }
    ],
    features: [
      "Transmitter and receiver options listed together for paired optical designs",
      "3mm and 5mm through-hole formats support common sensing structures",
      "850/940nm transmitter data and 850-1100nm receiver coverage from source table",
      "Suitable for beam-break, detection and control electronics projects"
    ]
  }),
  irSeries({
    slug: "reflective-ir-sensor-series",
    name: "Reflective IR Sensor Series",
    shortName: "Reflective IR Sensor",
    description:
      "Reflective infrared sensor series integrating IR emission and sensing for object detection, proximity sensing and control electronics.",
    image: "/images/products/infrared-led/reflective-ir-sensor-series.png",
    packageSummary: "6.5*6.4",
    wavelengthSummary: "940 nm",
    currentSummary: "20-50mA",
    packagingSummary: "1000PCS/bag",
    specs: [
      { model: "0640", type: "Reflective IR sensor", packageSize: "6.5*6.4", wavelength: "940", radiantPower: "50-100", forwardVoltage: "1.0-3.0", current: "20-50", viewingAngle: "30-120", packaging: "1000PCS/bag" }
    ],
    applications: [
      "Object Detection",
      "Proximity Sensing",
      "Smart Appliances",
      "Automation Equipment",
      "Paper and Media Detection",
      "Security Electronics",
      "Control Panels",
      "Consumer Electronics"
    ]
  }),
  irSeries({
    slug: "long-wavelength-infrared-series",
    name: "Long Wavelength Infrared Series",
    shortName: "Long Wavelength IR",
    description:
      "Long wavelength infrared transmitting and receiving series for 1400-1600nm sensing projects and special optical detection applications.",
    image: "/images/products/infrared-led/long-wavelength-infrared-series.png",
    packageSummary: "4.65*3.0",
    wavelengthSummary: "1400-1600 nm",
    currentSummary: "50-100mA",
    packagingSummary: "1000PCS/bag",
    specs: [
      { model: "LSD300K", type: "Long wavelength IR emitter/receiver", packageSize: "4.65*3.0", wavelength: "1400-1600", radiantPower: "100-300", forwardVoltage: "1.0-3.0", current: "50-100", viewingAngle: "15-60", packaging: "1000PCS/bag" }
    ],
    applications: [
      "Long Wavelength Optical Sensing",
      "Special IR Detection",
      "Industrial Instruments",
      "Medical and Wellness Devices",
      "Analytical Equipment",
      "OEM Sensor Modules",
      "Security Electronics",
      "Custom Electronics"
    ]
  })
];

export function getInfraredSeries(slug: string) {
  return infraredSeries.find((series) => series.slug === slug);
}
