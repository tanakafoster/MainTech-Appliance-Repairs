import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("fourways")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/fourways",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function FourwaysAreaPage() {
  return <AreaTemplate area={area} />
}
