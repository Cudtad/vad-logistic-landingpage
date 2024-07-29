import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
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
