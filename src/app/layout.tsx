import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "roofing Melbourne",
    "roof repairs Melbourne",
    "roof replacement Melbourne",
    "roofing contractors Melbourne",
    "roof maintenance Melbourne",
    "gutter installation Melbourne",
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: "https://apexroofingsolutions.com.au",
    siteName: SITE.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Apex Roofing Solutions - Professional Roofing Services Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://apexroofingsolutions.com.au" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE.name,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Melbourne",
                addressRegion: "VIC",
                addressCountry: "AU",
              },
              url: "https://apexroofingsolutions.com.au",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-amber-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
