import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("plumbing-services")

export default function PlumbingServicesPage() {
  return <ServiceTemplate slug="plumbing-services" />
}
