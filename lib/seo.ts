import type { Metadata } from "next"
import { absoluteUrl, site } from "@/lib/site"

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  absolute?: boolean
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = site.ogImage,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  absolute = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const socialTitle = absolute || title.endsWith("| MainTech") ? title : `${title} | MainTech`
  const alt = imageAlt || `${title} | ${site.name}`

  return {
    title: absolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url: canonical,
      siteName: site.name,
      title: socialTitle,
      description,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  }
}
