import type { Metadata } from "next";
import { business } from "@/lib/business";

export const siteUrl = new URL(business.siteUrl);

export function pageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: business.name, type: "website" },
  };
}
