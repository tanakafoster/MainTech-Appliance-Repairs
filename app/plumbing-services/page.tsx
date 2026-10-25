import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("plumbing-services")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/plumbing-services",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function PlumbingServicesPage() {
  return <ServiceTemplate service={service} />
}
