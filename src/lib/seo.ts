import type { Metadata } from "next";
import { site } from "@/content/site";

const defaultTitle = "HS Films & Photography | Wedding Photography & Videography";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;
  const fullTitle = title ? `${title} | ${site.name}` : defaultTitle;

  return {
    title: title ? { absolute: `${title} | ${site.shortName}` } : defaultTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}
