import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://adlogisticgb.com/";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/*", "/action/*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
