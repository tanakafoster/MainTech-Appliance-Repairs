import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { site } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Appliance Repairs in Gauteng`,
    template: `%s | ${site.name}`,
  },
  description:
    "MainTech Appliance Repairs repairs fridges, freezers, washing machines, tumble dryers, dishwashers, ovens, cold rooms and air conditioners across Gauteng.",
  keywords:
    "appliance repairs Gauteng, fridge repairs Johannesburg, washing machine repairs Pretoria, tumble dryer repairs, dishwasher repairs, oven repairs, commercial refrigeration, cold room repairs, air conditioner repairs",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0F2C59" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Appliance Repairs in Gauteng`,
    description:
      "Fridge, freezer, laundry, kitchen, cold room and air conditioner repairs across Pretoria, Johannesburg and Gauteng.",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name}, appliance and refrigeration repairs in Gauteng`,
      },
      {
        url: site.logo,
        width: 512,
        height: 512,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Appliance Repairs in Gauteng`,
    description:
      "Fridge, freezer, laundry, kitchen, cold room and air conditioner repairs across Gauteng.",
    images: [site.ogImage],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Appliance and Refrigeration Repair",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    "geo.position": "-26.1076;28.0567",
    "ICBM": "-26.1076, 28.0567",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="theme-color" content="#0F2C59" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.googleAdsId}');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${site.url}/#business`,
              name: site.name,
              url: site.url,
              image: `${site.url}${site.logo}`,
              logo: `${site.url}${site.logo}`,
              telephone: site.phoneSchema,
              email: site.email,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              areaServed: ["Gauteng", ...site.areas],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: site.phoneSchema,
                email: site.email,
                contactType: "customer service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
