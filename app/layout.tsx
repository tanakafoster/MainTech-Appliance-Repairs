import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { MobileContactBar } from "@/components/site/call-actions"
import { site } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Page not found | MainTech",
    template: "%s | MainTech",
  },
  description:
    "That page is not on the MainTech website. Return to appliance repairs in Gauteng, or call and describe the fault right now. Call 065 650 8504.",
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
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0E2A47" },
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
        <meta name="theme-color" content="#0E2A47" />
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
              address: {
                "@type": "PostalAddress",
                addressRegion: site.areaServed,
                addressCountry: "ZA",
              },
              areaServed: site.areaServed,
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
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main" className="flex-grow pb-24 md:pb-0">{children}</main>
          <Footer />
        </div>
        <MobileContactBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
