import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("roodepoort")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/roodepoort",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function RoodepoortAreaPage() {
  return <AreaTemplate area={area} />
}
