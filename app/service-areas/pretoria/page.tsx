import { AreaTemplate, areaMetadata } from "@/components/templates/area-template"

export const metadata = areaMetadata("pretoria")

export default function PretoriaAreaPage() {
  return <AreaTemplate slug="pretoria" />
}
