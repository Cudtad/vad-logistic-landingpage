import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vadlogisticgb.com/";
  const paths = [
    "about",
    "service/delivery",
    "service/fulfillment",
    "service/warehouse",
    "service/order",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));
}
