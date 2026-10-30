import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kyp.io";
  const currentDate = new Date().toISOString();

  const routesList = [
    "",
    "/platform",
    "/use-cases/onboarding",
    "/use-cases/anti-money-laundering",
    "/about",
    "/careers",
    "/faq",
    "/news",
    "/whitepapers",
    "/contact",
  ];

  return routesList.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" || route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/platform" ? 0.9 : 0.8,
  }));
}
