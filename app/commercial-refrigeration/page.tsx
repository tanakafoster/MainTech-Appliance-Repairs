import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("commercial-refrigeration")

export default function CommercialRefrigerationPage() {
  return <ServiceTemplate slug="commercial-refrigeration" />
}
