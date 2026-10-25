import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("electrical-services")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/electrical-services",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function ElectricalServicesPage() {
  return <ServiceTemplate service={service} />
}
