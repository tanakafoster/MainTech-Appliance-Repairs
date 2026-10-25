import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Fourways",
  description: "Air conditioning, refrigeration, and appliance repairs in Fourways. Serving Lonehill, Dainfern, Broadacres, Cedar Lakes, Douglasdale and surrounding areas. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/fourways",
})

export default function FourwaysPage() {
  return (
    <ServiceAreaTemplate
      areaName="Fourways"
      description="MainTech Appliance Repairs delivers air conditioning, refrigeration, and appliance repairs across Fourways' residential estates and commercial developments. From luxury homes to shopping centres and offices, we keep your cooling and appliances running reliably."
      introImage="/technician-team-in-gauteng.png"
      suburbs={[
        "Lonehill",
        "Dainfern",
        "Broadacres",
        "Cedar Lakes",
        "Chartwell",
        "Pineslopes",
        "Douglasdale",
        "Magaliesig",
      ]}
      introduction="Fourways has grown into one of Johannesburg's most sought after areas, with premier residential estates, modern shopping centres, and busy commercial developments. MainTech Appliance Repairs provides the reliable cooling and appliance repairs that Fourways property owners expect, from aircon servicing in an estate home to refrigeration repairs for a restaurant or shop. Our technicians understand estate access and work efficiently to get you back up and running."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and retail refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Technicians reaching Fourways quickly for on-site visits",
        "Experience working within security estates and their rules",
        "Quotes are explained before repair work starts",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "Call when a fridge, freezer, or cold room stops cooling",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
