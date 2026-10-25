import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("pretoria")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/pretoria",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function PretoriaAreaPage() {
  return <AreaTemplate area={area} />
}
