export interface MccService {
  id: number;
  title: string;
  slug: string;
  price: number | null;
  original_price: number | null;
  duration: string | null;
  warranty: string | null;
  badge: string | null;
  recommended: boolean;
  short_description: string | null;
  features: string[];
  image_url: string | null;
  description: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
}

const MCC_API_URL = process.env.NEXT_PUBLIC_MCC_API_URL;

export async function getMccServices(): Promise<MccService[]> {
  if (!MCC_API_URL) {
    console.warn("NEXT_PUBLIC_MCC_API_URL is not configured.");
    return [];
  }

  try {
    const response = await fetch(`${MCC_API_URL}/services`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `MCC services API failed: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error("MCC services API returned an invalid response.");
      return [];
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch MCC services:", error);
    return [];
  }
}

export async function getMccServiceBySlug(
  slug: string
): Promise<MccService | null> {
  if (!MCC_API_URL) {
    console.warn("NEXT_PUBLIC_MCC_API_URL is not configured.");
    return null;
  }

  try {
    const response = await fetch(
      `${MCC_API_URL}/services/${encodeURIComponent(slug)}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch MCC service "${slug}":`, error);
    return null;
  }
}

export async function getMccServiceByTitle(
  title: string
): Promise<MccService | null> {
  const services = await getMccServices();

  const normalizedTitle = title.trim().toLowerCase();

  return (
    services.find(
      (service) => service.title.trim().toLowerCase() === normalizedTitle
    ) ?? null
  );
}

export interface MccPackage {
  name: string;
  duration: string;
  warranty: string;
  details: number;
  recommended?: boolean;
  badge?: string;
  description?: string;
  includes?: string[];
  price?: number;
  originalPrice?: number;
  image?: string;
}

export function mergePackageWithMccService(
  pkg: MccPackage,
  service: MccService | null
): MccPackage {
  if (!service) {
    return pkg;
  }

  return {
    ...pkg,
    price: service.price ?? pkg.price,
    originalPrice: service.original_price ?? pkg.originalPrice,
    duration: service.duration ?? pkg.duration,
    warranty: service.warranty ?? pkg.warranty,
    recommended: service.recommended,
    badge: service.badge ?? pkg.badge,
    description: service.short_description ?? pkg.description,
    image: service.image_url ?? pkg.image,
  };
}

export function mergePackagesWithMccServices(
  packages: MccPackage[],
  services: MccService[]
): MccPackage[] {
  return packages.map((pkg) => {
    const normalizedTitle = pkg.name.trim().toLowerCase();

    const service = services.find(
      (item) => item.title.trim().toLowerCase() === normalizedTitle
    );

    return mergePackageWithMccService(pkg, service ?? null);
  });
}