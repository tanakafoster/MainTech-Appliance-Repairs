import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("oven-repairs")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/oven-repairs",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function OvenRepairsPage() {
  return <ServiceTemplate service={service} />
}
