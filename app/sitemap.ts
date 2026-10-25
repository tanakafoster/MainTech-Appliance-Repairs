import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export const dynamic = "force-static"

const baseUrl = site.url

const services = [
  "refrigeration-repairs",
  "appliance-repairs",
  "washing-machine-repairs",
  "tumble-dryer-repairs",
  "dishwasher-repairs",
  "oven-repairs",
  "commercial-refrigeration",
  "cold-room-installation-repair",
  "air-conditioning-services",
  "hvac-maintenance-contracts",
  "property-maintenance",
  "emergency-callout-service",
  "plumbing-services",
  "electrical-services",
]

const serviceAreas = [
  "pretoria",
  "johannesburg",
  "midrand",
  "sandton",
  "centurion",
  "fourways",
  "randburg",
  "bedfordview",
  "rosebank",
  "roodepoort",
  "morningside",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreas.map((slug) => ({
    url: `${baseUrl}/service-areas/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]

  return [...mainPages, ...servicePages, ...serviceAreaPages, ...legalPages]
}
