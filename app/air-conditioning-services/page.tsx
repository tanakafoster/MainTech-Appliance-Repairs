import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("air-conditioning-services")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/air-conditioning-services",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function AirConditioningServicesPage() {
  return <ServiceTemplate service={service} />
}
