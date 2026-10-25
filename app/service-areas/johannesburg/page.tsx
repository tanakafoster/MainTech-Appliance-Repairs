import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("johannesburg")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/johannesburg",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function JohannesburgAreaPage() {
  return <AreaTemplate area={area} />
}
