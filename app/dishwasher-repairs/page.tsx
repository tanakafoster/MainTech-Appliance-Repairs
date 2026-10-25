import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("dishwasher-repairs")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/dishwasher-repairs",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function DishwasherRepairsPage() {
  return <ServiceTemplate service={service} />
}
