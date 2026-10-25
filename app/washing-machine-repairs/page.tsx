import { ServiceTemplate, serviceMetadata } from "@/components/templates/service-template"

export const metadata = serviceMetadata("washing-machine-repairs")

export default function WashingMachineRepairsPage() {
  return <ServiceTemplate slug="washing-machine-repairs" />
}
