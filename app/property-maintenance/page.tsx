import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("property-maintenance")

export default function PropertyMaintenancePage() {
  return <ServiceTemplate slug="property-maintenance" />
}
