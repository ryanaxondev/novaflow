import type { Metadata } from "next";
import { Geist } from "next/font/google";

import {
  getApprovedCanonicalUrl,
  isCanonicalProduction,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/site-metadata";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const approvedCanonicalUrl = getApprovedCanonicalUrl();
const canonicalProduction = isCanonicalProduction(approvedCanonicalUrl);

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    ...(canonicalProduction ? { url: "/" } : {}),
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: canonicalProduction,
    follow: canonicalProduction,
  },
  ...(canonicalProduction
    ? {
        metadataBase: new URL(approvedCanonicalUrl.origin),
        alternates: {
          canonical: "/",
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
