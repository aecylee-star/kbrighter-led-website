import type { MetadataRoute } from "next";
import { applications } from "./applications/shared";
import { productCategories } from "./products/shared";

const baseUrl = "https://www.kbrighter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/products/smd-led/2835-smd-led",
    "/applications",
    "/about-factory",
    "/download-center",
    "/faq"
  ];

  const pages: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...applications.map((item) => ({
      url: `${baseUrl}/applications/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...productCategories.map((item) => ({
      url: `${baseUrl}/products/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];

  return pages;
}
