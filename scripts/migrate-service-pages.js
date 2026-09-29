const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SERVICES_DIR = path.join(ROOT, "app", "services");
const APPLY = process.argv.includes("--apply");

const CMS_IMPORT = `import {
  getMccServices,
  getActiveMccService,
  mergePackageWithMccService,
  type MccPackage,
} from "@/lib/mcc-api";`;

const HELPER = `
  const mccServices = await getMccServices();

  const mergeActivePackages = (packages: MccPackage[]): MccPackage[] =>
    packages
      .map((pkg) => {
        const service = getActiveMccService(pkg.name, mccServices);
        return mergePackageWithMccService(pkg, service);
      })
      .filter((pkg) => {
        const service = getActiveMccService(pkg.name, mccServices);
        return service !== null;
      });
`;

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function getServicePages() {
  return fs
    .readdirSync(SERVICES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(SERVICES_DIR, entry.name, "page.tsx"))
    .filter((file) => fs.existsSync(file))
    .sort();
}

function alreadyMigrated(source) {
  return (
    source.includes('from "@/lib/mcc-api"') &&
    source.includes("mergeActivePackages")
  );
}

function findPackageArrays(source) {
  const names = [];

  // Detect the simple package-array structure used by these service pages.
  const regex =
    /^const\s+([A-Za-z_$][\w$]*)\s*=\s*\[\s*\{\s*$/gm;

  let match;

  while ((match = regex.exec(source)) !== null) {
    const name = match[1];

    // Make sure this array actually contains a package-like object.
    const remainder = source.slice(match.index, match.index + 5000);

    if (
      remainder.includes("name:") &&
      remainder.includes("price:") &&
      remainder.includes("originalPrice:")
    ) {
      names.push(name);
    }
  }

  return [...new Set(names)];
}

function addImport(source) {
  if (source.includes('from "@/lib/mcc-api"')) {
    return source;
  }

  const importLines = [...source.matchAll(/^import .*?;$/gm)];

  if (!importLines.length) {
    return `${CMS_IMPORT}\n${source}`;
  }

  const last = importLines[importLines.length - 1];

  return (
    source.slice(0, last.index + last[0].length) +
    `\n${CMS_IMPORT}` +
    source.slice(last.index + last[0].length)
  );
}

function makeAsync(source) {
  if (/export\s+default\s+async\s+function\s+/.test(source)) {
    return source;
  }

  return source.replace(
    /export\s+default\s+function\s+([A-Za-z_$][\w$]*)\s*\(/,
    "export default async function $1("
  );
}

function addMergeCode(source, packageArrays) {
  const returnIndex = source.indexOf("  return (");

  if (returnIndex === -1) {
    throw new Error("Could not find `return (` in page component.");
  }

  const declarations = packageArrays
    .map(
      (name) =>
        `  const merged${capitalize(name)} = mergeActivePackages(${name});`
    )
    .join("\n");

  const block = `${HELPER}\n${declarations}\n`;

  return (
    source.slice(0, returnIndex) +
    block +
    source.slice(returnIndex)
  );
}

function replacePackageMaps(source, packageArrays) {
  let result = source;

  for (const name of packageArrays) {
    const mergedName = `merged${capitalize(name)}`;

    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    result = result.replace(
      new RegExp(`\\b${escapedName}\\.map\\(`, "g"),
      `${mergedName}.map(`
    );
  }

  return result;
}

function processPage(file) {
  const source = fs.readFileSync(file, "utf8");
  const relative = path.relative(ROOT, file);

  if (alreadyMigrated(source)) {
    return {
      status: "SKIP",
      relative,
      reason: "already migrated",
    };
  }

  const packageArrays = findPackageArrays(source);

  if (packageArrays.length === 0) {
    return {
      status: "SKIP",
      relative,
      reason: "no safe package arrays detected",
    };
  }

  if (
    !/export\s+default\s+function\s+[A-Za-z_$][\w$]*\s*\(/.test(source)
  ) {
    return {
      status: "SKIP",
      relative,
      reason: "page component pattern not recognized",
    };
  }

  let next = source;

  next = addImport(next);
  next = makeAsync(next);
  next = addMergeCode(next, packageArrays);
  next = replacePackageMaps(next, packageArrays);

  if (next === source) {
    return {
      status: "SKIP",
      relative,
      reason: "no changes generated",
    };
  }

  if (APPLY) {
    const backup = `${file}.bak`;

    if (!fs.existsSync(backup)) {
      fs.copyFileSync(file, backup);
    }

    fs.writeFileSync(file, next, "utf8");
  }

  return {
    status: APPLY ? "UPDATED" : "WOULD UPDATE",
    relative,
    arrays: packageArrays,
  };
}

console.log("");
console.log("Mittal Car Care — Service CMS Migration");
console.log("========================================");

if (APPLY) {
  console.log("MODE: APPLY");
} else {
  console.log("MODE: DRY RUN");
}

console.log("");

const pages = getServicePages();

for (const file of pages) {
  try {
    const result = processPage(file);

    if (result.status === "SKIP") {
      console.log(
        `SKIP        ${result.relative} — ${result.reason}`
      );
    } else {
      console.log(
        `${result.status.padEnd(11)} ${result.relative}`
      );

      console.log(
        `            Package arrays: ${result.arrays.join(", ")}`
      );
    }
  } catch (error) {
    console.log(
      `ERROR       ${path.relative(ROOT, file)} — ${error.message}`
    );
  }
}

console.log("");

if (APPLY) {
  console.log("Migration changes applied.");
  console.log("Backup files were created as .bak where needed.");
  console.log("Next: run npm run build.");
} else {
  console.log("DRY RUN COMPLETE — no files were changed.");
  console.log("");
  console.log(
    "If the list looks correct, run:"
  );
  console.log(
    "node .\\scripts\\migrate-service-pages.js --apply"
  );
}