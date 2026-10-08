import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { portfolio } from "@/content/portfolio";
import { resources } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/gallery",
    "/packages",
    "/booking",
    "/contact",
    "/faq",
    "/resources",
    "/privacy",
    ...portfolio.map((p) => `/portfolio/${p.slug}`),
    ...resources.map((r) => `/resources/${r.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-11"),
  }));
}
