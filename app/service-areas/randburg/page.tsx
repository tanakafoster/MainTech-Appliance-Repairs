import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Randburg",
  description: "Air conditioning, refrigeration, and appliance repairs in Randburg. Serving Ferndale, Blairgowrie, Northcliff, Boskruin, Fairland and surrounding suburbs. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/randburg",
})

export default function RandburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Randburg"
      description="MainTech Appliance Repairs provides trusted air conditioning, refrigeration, and appliance repairs across Randburg. From established family homes and townhouse complexes to shops and offices, we keep your cooling and appliances working reliably."
      introImage="/washing_machine_repairs.jpg"
      suburbs={[
        "Ferndale",
        "Blairgowrie",
        "Northcliff",
        "Boskruin",
        "Fairland",
        "Bordeaux",
        "Randpark Ridge",
        "Fontainebleau",
      ]}
      introduction="Randburg blends established family homes, townhouse complexes, and busy commercial areas, and all of them rely on working fridges, freezers, air conditioners, and appliances. MainTech Appliance Repairs has become a dependable choice in Randburg for fast repairs and honest advice. Whether it is a washing machine that has stopped mid cycle or an aircon that needs a gas refill, our technicians arrive prepared to get things running again."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Chest freezer and bar fridge repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Local technicians reaching Randburg quickly for on-site visits",
        "Experience with body corporate and complex work",
        "Quotes are explained before repair work starts",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "Call when a fridge, freezer, or cold room stops cooling",
      ]}
      nearbyAreas={[
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
      ]}
    />
  )
}
