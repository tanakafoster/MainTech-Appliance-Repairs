import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("hvac-maintenance-contracts")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/hvac-maintenance-contracts",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function HvacMaintenanceContractsPage() {
  return <ServiceTemplate service={service} />
}
