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