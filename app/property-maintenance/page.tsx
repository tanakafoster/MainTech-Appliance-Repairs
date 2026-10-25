import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("property-maintenance")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/property-maintenance",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function PropertyMaintenancePage() {
  return <ServiceTemplate service={service} />
}
