import type { MetadataRoute } from "next";

import {
  getApprovedCanonicalUrl,
  isCanonicalProduction,
} from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const approvedCanonicalUrl = getApprovedCanonicalUrl();

  if (!isCanonicalProduction(approvedCanonicalUrl)) {
    return [];
  }

  return [
    {
      url: approvedCanonicalUrl.toString(),
    },
  ];
}
