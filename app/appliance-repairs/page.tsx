import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("appliance-repairs")

export default function ApplianceRepairsPage() {
  return <ServiceTemplate slug="appliance-repairs" />
}
