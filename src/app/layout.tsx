import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"; // ✅ Imported here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream X Diamond - Premium IT Services & Software Solutions",
  description:
    "Transform your business with premium IT solutions. We offer web development, mobile apps, cloud services, cybersecurity, and AI/ML solutions. Luxury technology services for elite businesses.",
  keywords: [
    "IT services",
    "web development",
    "mobile app development",
    "cloud services",
    "cybersecurity",
    "AI solutions",
    "software development",
    "digital marketing",
    "IT consulting",
    "database management",
    "tech solutions",
    "business transformation",
  ],
  authors: [{ name: "Dream X Diamond Team" }],
  creator: "Dream X Diamond",
  publisher: "Dream X Diamond",
  robots: "index, follow",
  openGraph: {
    title: "Dream X Diamond - Premium IT Services & Software Solutions",
    description:
      "Transform your business with premium IT solutions. Expert web development, mobile apps, cloud services, and cybersecurity.",
    url: "https://dreamxdiamond.com",
    siteName: "Dream X Diamond",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dream X Diamond - Premium IT Services Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream X Diamond - Premium IT Services & Software Solutions",
    description:
      "Transform your business with premium IT solutions. Expert web development, mobile apps, cloud services, and cybersecurity.",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dream X Diamond",
    "url": "https://dreamxdiamond.com",
    "logo": "https://dreamxdiamond.com/logo.png",
    "description":
      "Premium IT services and software development company providing web development, mobile apps, cloud services, cybersecurity, and AI/ML solutions for elite businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94000",
      "addressCountry": "US",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "info@dreamxdiamond.com",
    },
    "sameAs": [
      "https://linkedin.com/company/dreamxdiamond",
      "https://twitter.com/dreamxdiamond",
      "https://facebook.com/dreamxdiamond",
      "https://instagram.com/dreamxdiamond",
    ],
    "foundingDate": "2008",
    "numberOfEmployees": "50-100",
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web applications using modern frameworks",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile solutions",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Services",
            "description": "Scalable cloud infrastructure and migration",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "Comprehensive security solutions and audits",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI/ML Solutions",
            "description": "Artificial intelligence and machine learning",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO, SEM, and digital marketing strategies",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Database Management",
            "description": "Database design, optimization, and management",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting",
            "description": "Strategic IT consulting and advisory services",
          },
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SpeedInsights /> {/* ✅ Added here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
