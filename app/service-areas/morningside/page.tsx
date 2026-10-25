import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("morningside")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/morningside",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function MorningsideAreaPage() {
  return <AreaTemplate area={area} />
}
