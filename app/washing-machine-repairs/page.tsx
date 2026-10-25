import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("washing-machine-repairs")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/washing-machine-repairs",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function WashingMachineRepairsPage() {
  return <ServiceTemplate service={service} />
}
