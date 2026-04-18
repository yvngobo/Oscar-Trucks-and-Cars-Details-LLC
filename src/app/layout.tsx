import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oscar Trucks and Cars Details LLC | Auto Detailing Grayson GA",
  description:
    "Professional car detailing, truck detailing, paint correction, and interior deep cleaning in Grayson, GA. Serving Gwinnett County. Call (470) 966-1113.",
  keywords: [
    "Car Detailing Grayson GA",
    "Truck Repair Grayson",
    "Mobile Auto Detailing Gwinnett County",
    "Professional Paint Correction",
    "Auto Detailing Grayson Georgia",
    "Interior Car Cleaning Grayson",
    "Ceramic Coating Gwinnett County",
  ],
  openGraph: {
    title: "Oscar Trucks and Cars Details LLC",
    description: "Premium auto detailing in Grayson, GA. 29 five-star reviews.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Oscar Trucks and Cars Details LLC",
  description:
    "Professional auto detailing, paint correction, interior deep cleaning, and truck fleet services in Grayson, GA.",
  telephone: "+14709661113",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Grayson",
    addressRegion: "GA",
    postalCode: "30017",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.8918,
    longitude: -83.9577,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "29",
  },
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 33.8918,
      longitude: -83.9577,
    },
    geoRadius: "30000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
