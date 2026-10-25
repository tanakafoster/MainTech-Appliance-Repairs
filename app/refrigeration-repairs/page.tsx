import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("refrigeration-repairs")

export default function RefrigerationRepairsPage() {
  return <ServiceTemplate slug="refrigeration-repairs" />
}
