import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("emergency-callout-service")

export default function EmergencyCalloutServicePage() {
  return <ServiceTemplate slug="emergency-callout-service" />
}
