import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("sandton")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/sandton",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function SandtonAreaPage() {
  return <AreaTemplate area={area} />
}
