import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("tumble-dryer-repairs")

export default function TumbleDryerRepairsPage() {
  return <ServiceTemplate slug="tumble-dryer-repairs" />
}
