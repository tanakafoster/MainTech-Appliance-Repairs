import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("oven-repairs")

export default function OvenRepairsPage() {
  return <ServiceTemplate slug="oven-repairs" />
}
