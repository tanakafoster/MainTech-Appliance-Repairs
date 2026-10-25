import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("appliance-repairs")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/appliance-repairs",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function ApplianceRepairsPage() {
  return <ServiceTemplate service={service} />
}
