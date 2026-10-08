import { site } from "@/content/site";
import { services } from "@/content/services";

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}#studio`,
        name: site.name,
        image: `${site.url}/images/studio/cover.jpg`,
        email: site.email,
        telephone: site.phone,
        url: site.url,
        description: site.description,
        areaServed: site.location.country,
        address: {
          "@type": "PostalAddress",
          addressCountry: site.location.country,
          addressRegion: site.location.region,
          addressLocality: site.location.city,
        },
        priceRange: "$$",
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.summary,
        provider: { "@id": `${site.url}#studio` },
      })),
    ],
  };
}
