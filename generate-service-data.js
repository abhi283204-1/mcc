const fs = require("fs");
const path = require("path");

const servicesDir = path.join(process.cwd(), "app", "services");

const serviceMap = {
  "car-services": "Car Services",
  "ac-service-repair": "AC Service & Repair",
  "denting-painting": "Denting & Painting",
  "tyres-wheel-care": "Tyres & Wheel Care",
  "batteries": "Batteries",
  "car-detailing": "Detailing Services",
  "car-inspections": "Car Inspections",
  "windshields-lights": "Windshield & Lights",
  "suspension-fitments": "Suspension & Fitments",
  "clutch-body-parts": "Clutch & Body Parts",
  "sos-service": "SOS Service",
  "insurance-claims": "Insurance Claims",
};

const sectionNameMap = {
  "ac-service-repair": {
    servicePackages: "Service Packages",
    fitments: "AC Fitments",
    radiator: "Radiator",
    under49: "Under 49",
    under99: "Under 99",
    under199: "Under 199",
  },
  batteries: {
    amaron: "Amaron",
    exide: "Exide",
    livguard: "Livguard",
    alternator: "Alternator",
  },
  "car-detailing": {
    polishing: "Polishing",
    ceramicCoating: "Ceramic Coating",
    teflonCoating: "Teflon Coating",
    ppf: "PPF",
    antiRustCoating: "Anti Rust Coating",
  },
  "car-inspections": {
    inspections: "Inspections",
    radiator: "Radiator",
  },
  "car-services": {
    scheduledPackages: "Scheduled Packages",
    brakeMaintenancePackages: "Brake Maintenance",
  },
  "car-spa-cleaning": {
    spa: "Spa",
    winterSpecial: "Winter Special",
    sunroof: "Sunroof",
  },
  "clutch-body-parts": {
    clutch: "Clutch",
    bodyParts: "Body Parts",
  },
  "denting-painting": {
    frontSide: "Front Side",
    rearSide: "Rear Side",
    leftSide: "Left Side",
    rightSide: "Right Side",
    wholeBody: "Whole Body",
    alloyPaint: "Alloy Paint",
  },
  "insurance-claims": {
    knowYourPolicy: "Know Your Policy",
    accidentalRepairs: "Accidental Repairs",
    theftLost: "Theft / Lost",
    inspection: "Inspection",
  },
  "sos-service": {
    sosServices: "Emergency Services",
  },
  "suspension-fitments": {
    steering: "Steering",
    suspension: "Suspension",
    fitments: "Fitments",
  },
  "tyres-wheel-care": {
    apolloTyres: "Apollo",
    mrfTyres: "MRF",
    jkTyres: "JK",
    bridgestoneTyres: "Bridgestone",
    goodyearTyres: "GoodYear",
    wheelCare: "Wheel Care Services",
  },
  "windshields-lights": {
    windshields: "Windshields",
    glasses: "Glasses",
    lights: "Lights",
    sideMirror: "Side Mirror",
  },
};
const files = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((slug) => fs.existsSync(path.join(servicesDir, slug, "page.tsx")));

function extractArrays(source) {
  const results = [];
  const regex = /const\s+([A-Za-z0-9_]+)\s*=\s*\[/g;

  let match;
  while ((match = regex.exec(source)) !== null) {
    const name = match[1];
    const start = match.index + match[0].length;

    let depth = 1;
    let quote = null;
    let escaped = false;
    let end = start;

    for (; end < source.length; end++) {
      const ch = source[end];

      if (quote) {
        if (escaped) {
          escaped = false;
        } else if (ch === "\\") {
          escaped = true;
        } else if (ch === quote) {
          quote = null;
        }
        continue;
      }

      if (ch === '"' || ch === "'" || ch === "`") {
        quote = ch;
        continue;
      }

      if (ch === "[") depth++;
      if (ch === "]") {
        depth--;
        if (depth === 0) break;
      }
    }

    const body = source.slice(start, end);

    results.push({
      name,
      body,
    });

    regex.lastIndex = end + 1;
  }

  return results;
}

function parseArray(body, file, variable) {
  const wrapped = `[${body}]`;

  try {
    // Frontend files contain JavaScript object literals.
    // Evaluate only the extracted array in a controlled Function scope.
    return Function(`"use strict"; return (${wrapped});`)();
  } catch (error) {
    throw new Error(
      `Could not parse ${file} -> ${variable}: ${error.message}`
    );
  }
}

const services = [];

for (const slug of files) {
  const filePath = path.join(servicesDir, slug, "page.tsx");
  const source = fs.readFileSync(filePath, "utf8");

  const arrays = extractArrays(source);

  const sections = [];

  for (const array of arrays) {
    let packages;

    try {
      packages = parseArray(array.body, slug, array.name);
    } catch (error) {
      throw error;
    }

    if (!Array.isArray(packages) || packages.length === 0) {
      continue;
    }

    if (!packages.some((item) => item && typeof item === "object" && item.name)) {
      continue;
    }

    sections.push({
      name: (sectionNameMap[slug] && sectionNameMap[slug][array.name]) || array.name,
      packages: packages.map((item) => ({
        name: item.name || "",
        price: Number(item.price || 0),
        originalPrice:
          item.originalPrice === undefined || item.originalPrice === null
            ? null
            : Number(item.originalPrice),
        duration: item.duration || "",
        warranty: item.warranty || "",
        badge: item.badge || "",
        recommended: Boolean(item.recommended),
        description: item.description || "",
        includes: Array.isArray(item.includes) ? item.includes : [],
      })),
    });
  }

  if (sections.length === 0) {
    console.warn(`WARNING: No package arrays found in ${slug}`);
    continue;
  }

  services.push({
    serviceSlug: slug,
    name: serviceMap[slug] || slug,
    sections,
  });
}

const totalPackages = services.reduce(
  (total, service) =>
    total +
    service.sections.reduce(
      (sectionTotal, section) => sectionTotal + section.packages.length,
      0
    ),
  0
);

const output = {
  version: 1,
  generatedAt: new Date().toISOString(),
  services,
};

const outputPath = path.join(process.cwd(), "service-data.json");

fs.writeFileSync(
  outputPath,
  JSON.stringify(output, null, 2),
  "utf8"
);

console.log("");
console.log("Mittal Car Care — Service Data Generator");
console.log("========================================");
console.log(`Services : ${services.length}`);
console.log(
  `Sections : ${services.reduce((n, s) => n + s.sections.length, 0)}`
);
console.log(`Packages : ${totalPackages}`);
console.log(`Output   : ${outputPath}`);
console.log("");

for (const service of services) {
  const count = service.sections.reduce(
    (n, section) => n + section.packages.length,
    0
  );

  console.log(
    `${service.serviceSlug.padEnd(25)} ${String(service.sections.length).padStart(2)} sections   ${String(count).padStart(3)} packages`
  );
}

console.log("");

if (services.length !== 13) {
  throw new Error(`Expected 13 services, found ${services.length}`);
}

if (totalPackages !== 149) {
  throw new Error(`Expected 149 packages, found ${totalPackages}`);
}

console.log("VALIDATION PASSED: 13 services / 149 packages");

