import type { MetadataRoute } from "next";

import {
  getApprovedCanonicalUrl,
  isCanonicalProduction,
} from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  const approvedCanonicalUrl = getApprovedCanonicalUrl();

  if (!isCanonicalProduction(approvedCanonicalUrl)) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", approvedCanonicalUrl).toString(),
  };
}
