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

export async function getMccServices(): Promise<MccService[]> {
  if (!MCC_API_URL) {
    console.warn("NEXT_PUBLIC_MCC_API_URL is not configured.");
    return [];
  }

  try {
    const firstResponse = await fetch(`${MCC_API_URL}/services`, {
      cache: "no-store",
    });

    if (!firstResponse.ok) {
      console.error(
        `MCC services API failed: ${firstResponse.status} ${firstResponse.statusText}`
      );
      return [];
    }

    const firstPage = await firstResponse.json();

    if (!Array.isArray(firstPage)) {
      console.error("MCC services API returned an invalid response.");
      return [];
    }

    const totalPages = Number(
      firstResponse.headers.get("X-WP-TotalPages") ?? "1"
    );

    if (totalPages <= 1) {
      return firstPage;
    }

    const remainingPages = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, index) => {
        const page = index + 2;

        return fetch(`${MCC_API_URL}/services?page=${page}`, {
          cache: "no-store",
        }).then(async (response) => {
          if (!response.ok) {
            console.error(
              `MCC services API page ${page} failed: ${response.status}`
            );
            return [];
          }

          const data = await response.json();

          return Array.isArray(data) ? data : [];
        });
      })
    );

    return [firstPage, ...remainingPages].flat();
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
    image: service.image_url ?? pkg.image,
  };
}
export function getActiveMccService(
  title: string,
  services: MccService[]
): MccService | null {
  const normalizedTitle = title.trim().toLowerCase();

  return (
    services.find(
      (service) =>
        service.title.trim().toLowerCase() === normalizedTitle &&
        service.is_active
    ) ?? null
  );
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

