import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://smart-home-vergleich.de/sitemap.xml",
    host: "https://smart-home-vergleich.de",
  };
}
