import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cleartitlega.com'),
  title: "Clear Title GA - Property Title Issue Resolution & Co-Ownership Solutions",
  description: "Stuck with title issues or co-ownership problems in Georgia? We specialize in resolving complex property disputes, inheritance issues, and title problems that block your sale. Licensed experts with proven results.",
  keywords: "property title issues Georgia, co-ownership problems, inheritance disputes, title dispute resolution, property liens, Georgia real estate law, probate property issues, divorce property settlement, clear title services",
  authors: [{ name: "Clear Title GA" }],
  creator: "Clear Title GA",
  publisher: "Clear Title GA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cleartitlega.com',
    siteName: 'Clear Title GA',
    title: 'Clear Title GA - Resolve Property Title Issues & Co-Ownership Problems',
    description: 'Expert property title issue resolution in Georgia. We solve inheritance disputes, co-ownership problems, and complex title issues that prevent property sales.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clear Title GA - Property Title Issue Resolution Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cleartitlega',
    creator: '@cleartitlega',
    title: 'Clear Title GA - Property Title Issue Resolution',
    description: 'Resolve property title issues and co-ownership problems in Georgia. Expert legal solutions for inheritance disputes and complex title problems.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Real Estate Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Clear Title GA",
    "alternateName": "Clear Title Georgia",
    "description": "Expert property title issue resolution and co-ownership problem solutions in Georgia. We specialize in inheritance disputes, title problems, and complex property legal issues.",
    "url": "https://www.cleartitlega.com",
    "logo": "https://www.cleartitlega.com/logo.png",
    "image": "https://www.cleartitlega.com/og-image.jpg",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "martin@homeowner-support.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "State",
      "name": "Georgia"
    },
    "serviceType": [
      "Property Title Resolution",
      "Co-Ownership Dispute Resolution",
      "Inheritance Property Issues",
      "Real Estate Legal Services",
      "Title Insurance Services",
      "Probate Property Solutions"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Title Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Title Issue Resolution",
            "description": "Clear liens, disputes, and ownership problems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Co-Ownership Solutions",
            "description": "Handle multiple heirs and divorce situations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Legal Expertise",
            "description": "Navigate complex inheritance and property law"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
