import { ServiceTemplate } from "@/components/templates/service-template"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

const service = getService("cold-room-installation-repair")

export const metadata = pageMetadata({
  title: service.title,
  description: service.metaDescription,
  path: "/cold-room-installation-repair",
  image: service.image,
  imageAlt: service.imageAlt,
})

export default function ColdRoomInstallationRepairPage() {
  return <ServiceTemplate service={service} />
}
