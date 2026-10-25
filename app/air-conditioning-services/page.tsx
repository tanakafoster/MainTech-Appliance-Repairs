import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("air-conditioning-services")

export default function AirConditioningServicesPage() {
  return <ServiceTemplate slug="air-conditioning-services" />
}
