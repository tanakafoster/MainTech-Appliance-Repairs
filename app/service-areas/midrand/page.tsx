import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("midrand")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/midrand",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function MidrandAreaPage() {
  return <AreaTemplate area={area} />
}
