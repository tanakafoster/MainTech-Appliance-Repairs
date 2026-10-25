import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("rosebank")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/rosebank",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function RosebankAreaPage() {
  return <AreaTemplate area={area} />
}
