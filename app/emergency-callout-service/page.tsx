import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("emergency-callout-service")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/emergency-callout-service",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function EmergencyCalloutServicePage() {
  return <ServiceTemplate service={service} />
}
