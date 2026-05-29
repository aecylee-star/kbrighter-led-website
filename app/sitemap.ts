import type { MetadataRoute } from "next";
import { applications } from "./applications/shared";
import { chipProducts } from "./products/chip-led/data";
import { productCategories } from "./products/shared";

const baseUrl = "https://www.kbrighter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/products/smd-led/2835-smd-led",
    "/products/smd-led/2835-0-5w-smd-led",
    "/products/smd-led/3030-smd-led",
    "/products/smd-led/3535-smd-led",
    "/products/cob-led/1414-cob-led",
    "/products/cob-led/1919-cob-led",
    "/products/cob-led/2828-cob-led",
    "/applications",
    "/about-factory",
    "/quality-control",
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
    })),
    ...chipProducts.map((item) => ({
      url: `${baseUrl}/products/chip-led/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.72
    }))
  ];

  return pages;
}
