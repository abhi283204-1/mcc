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
  is_active: boolean;
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
function normalizeServiceTitle(title: string): string {
  return title
    .replace(/&#0*38;|&amp;/gi, "&")
    .replace(/&trade;|&#0*8482;/gi, "")
    .replace(/[™®©]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export async function getMccServices(): Promise<MccService[]> {
  if (!MCC_API_URL) {
    console.warn("NEXT_PUBLIC_MCC_API_URL is not configured.");
    return [];
  }

  const fetchPage = async (page: number): Promise<MccService[]> => {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const response = await fetch(
          `${MCC_API_URL}/services?per_page=100&page=${page}`,
          {
            next: { revalidate: 60 },
          }
        );

        if (!response.ok) {
          console.error(
            `MCC services API page ${page} failed: ${response.status}, attempt ${attempt}`
          );
        } else {
          const data = await response.json();

          if (Array.isArray(data)) {
            return data;
          }

          console.error(
            `MCC services API page ${page} returned invalid data.`
          );
        }
      } catch (error) {
        console.error(
          `MCC services API page ${page} error, attempt ${attempt}:`,
          error
        );
      }

      if (attempt < 3) {
        await new Promise((resolve) =>
          setTimeout(resolve, attempt * 1000)
        );
      }
    }

    console.error(
      `MCC services API page ${page} failed after 3 attempts.`
    );

    return [];
  };

  try {
    const firstResponse = await fetchPage(1);

    if (firstResponse.length === 0) {
      console.error("MCC services API first page returned no data.");
      return [];
    }

    const secondPage = await fetchPage(2);

    return [...firstResponse, ...secondPage];
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

  const normalizedTitle = normalizeServiceTitle(title);

return (
  services.find(
    (service) =>
      normalizeServiceTitle(service.title) === normalizedTitle
  ) ?? null
);
}

export interface MccPackage {
  id?: number;
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
    id: service.id,
    price: service.price ?? pkg.price,
    originalPrice: service.original_price ?? pkg.originalPrice,
    duration: service.duration ?? pkg.duration,
    warranty: service.warranty ?? pkg.warranty,
    recommended: service.recommended,
    badge: service.badge ?? pkg.badge,
    description: service.short_description ?? pkg.description,
    image: service.image_url
  ? service.image_url.replace(
      /\/images\/Icons\//g,
      "/images/Icons/"
    )
  : pkg.image,
  };
}
export function getActiveMccService(
  title: string,
  services: MccService[]
): MccService | null {
  const normalizedTitle = normalizeServiceTitle(title);

  return (
    services.find(
      (service) =>
        normalizeServiceTitle(service.title) === normalizedTitle &&
        service.is_active
    ) ?? null
  );
}
export function mergePackagesWithMccServices(
  packages: MccPackage[],
  services: MccService[]
): MccPackage[] {
  return packages.map((pkg) => {
   const normalizedTitle = normalizeServiceTitle(pkg.name);

const service = services.find(
  (item) =>
    normalizeServiceTitle(item.title) === normalizedTitle
);

    return mergePackageWithMccService(pkg, service ?? null);
  });
}

