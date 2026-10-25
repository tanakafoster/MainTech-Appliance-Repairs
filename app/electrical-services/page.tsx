import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("electrical-services")

export default function ElectricalServicesPage() {
  return <ServiceTemplate slug="electrical-services" />
}
