import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("dishwasher-repairs")

export default function DishwasherRepairsPage() {
  return <ServiceTemplate slug="dishwasher-repairs" />
}
