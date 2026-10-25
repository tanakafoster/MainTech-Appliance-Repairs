import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("hvac-maintenance-contracts")

export default function HvacMaintenanceContractsPage() {
  return <ServiceTemplate slug="hvac-maintenance-contracts" />
}
