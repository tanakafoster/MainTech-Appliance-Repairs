import { AreaTemplate } from "@/components/templates/area-template"
import { getArea } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

const area = getArea("randburg")

export const metadata = pageMetadata({
  title: area.title,
  description: area.metaDescription,
  path: "/service-areas/randburg",
  image: area.image,
  imageAlt: area.imageAlt,
})

export default function RandburgAreaPage() {
  return <AreaTemplate area={area} />
}
