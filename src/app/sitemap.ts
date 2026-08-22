import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { guideSlugs } from "@/features/Guides/content";

const paths = [
  "",
  "/about",
  "/used-engines",
  "/used-transmissions",
  "/shipping-warranty",
  "/refunds-returns",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-22T00:00:00.000Z");
  return [...paths, ...guideSlugs.map((slug) => `/guides/${slug}`)].map((path) => ({
    url: `${business.siteUrl}${path}`,
    lastModified: updated,
    changeFrequency: path.startsWith("/guides") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/guides") ? 0.6 : 0.8,
  }));
}
