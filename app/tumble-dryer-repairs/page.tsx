import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("tumble-dryer-repairs")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/tumble-dryer-repairs",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function TumbleDryerRepairsPage() {
  return <ServiceTemplate service={service} />
}
