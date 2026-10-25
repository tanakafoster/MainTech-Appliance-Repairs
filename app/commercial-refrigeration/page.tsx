import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("commercial-refrigeration")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/commercial-refrigeration",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function CommercialRefrigerationPage() {
  return <ServiceTemplate service={service} />
}
