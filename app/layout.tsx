import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const SITE_URL = "https://www.loylegal.ph";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "LoyLegal PH — Legal Support, When You Need It.",
    template: "%s | LoyLegal PH",
  },
  description:
    "LoyLegal PH is a broad-practice law office providing reliable, accessible, and practical legal support to individuals and businesses across the Philippines and beyond. Led by Atty. Marilou S. Dumadag — Attorney-at-Law & Notary Public with nearly three decades of experience.",
  keywords: [
    "law office Philippines",
    "lawyer Philippines",
    "attorney Philippines",
    "legal services Philippines",
    "corporate law Philippines",
    "notary public Philippines",
    "family law Philippines",
    "real estate lawyer Philippines",
    "estate planning Philippines",
    "business registration Philippines",
    "legal consultation Philippines",
    "Atty Marilou Dumadag",
    "LoyLegal PH",
    "Valencia City lawyer",
    "Bukidnon lawyer",
    "remote lawyer Philippines",
  ],
  authors: [{ name: "Atty. Marilou S. Dumadag", url: SITE_URL }],
  creator: "LoyLegal PH",
  publisher: "LoyLegal PH",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "LoyLegal PH",
    title: "LoyLegal PH — Legal Support, When You Need It.",
    description:
      "Broad-practice law office led by Atty. Marilou S. Dumadag. Corporate law, contracts, family law, real estate, estate planning, notarial services, and more — serving clients across the Philippines and beyond.",
    images: [
      {
        url: "/attorney-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Atty. Marilou S. Dumadag — LoyLegal PH",
      },
    ],
    locale: "en_PH",
  },

  twitter: {
    card: "summary_large_image",
    title: "LoyLegal PH — Legal Support, When You Need It.",
    description:
      "Broad-practice law office led by Atty. Marilou S. Dumadag. Serving clients across the Philippines and beyond.",
    images: ["/attorney-profile.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "LoyLegal PH",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/attorney-profile.jpg`,
  description:
    "Broad-practice law office providing reliable, accessible, and practical legal support to individuals and businesses across the Philippines and beyond.",
  telephone: "+63-917-701-2235",
  email: "info@loylegal.ph",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1, Inocencia Row, Guinoyuran Road, P4A-Poblacion",
    addressLocality: "Valencia City",
    addressRegion: "Bukidnon",
    postalCode: "8709",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.9062,
    longitude: 125.0942,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  founder: {
    "@type": "Person",
    name: "Atty. Marilou S. Dumadag",
    jobTitle: "Attorney-at-Law & Notary Public",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Ateneo de Manila University School of Law" },
      { "@type": "CollegeOrUniversity", name: "Harvard Law School" },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Integrated Bar of the Philippines",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      "Corporate & Business Law",
      "Contracts",
      "Business Setup & Registration",
      "Regulatory Compliance",
      "Family Law",
      "Real Estate Transactions",
      "Estate Planning",
      "Interim Legal Counsel",
      "Notarial Services",
      "Legal Consultations",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
  areaServed: {
    "@type": "Country",
    name: "Philippines",
  },
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&d)){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
