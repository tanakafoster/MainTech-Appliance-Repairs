import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Rosebank",
  description: "Air conditioning, refrigeration, and appliance repairs in Rosebank. Serving Parktown, Saxonwold, Dunkeld, Forest Town, Killarney and northern Johannesburg suburbs. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/rosebank",
})

export default function RosebankPage() {
  return (
    <ServiceAreaTemplate
      areaName="Rosebank"
      description="MainTech Appliance Repairs serves Rosebank's mix of heritage homes, modern apartments, offices, and retail spaces with reliable air conditioning, refrigeration, and appliance repairs. We keep your cooling and appliances running with fast, professional service."
      introImage="/hvac-maintenance-technician.png"
      suburbs={["Parktown", "Saxonwold", "Dunkeld", "Forest Town", "Parkhurst", "Greenside", "Westcliff", "Killarney"]}
      introduction="Rosebank sits at the centre of Johannesburg's northern suburbs, combining older homes with modern apartment blocks, offices, and busy retail. MainTech Appliance Repairs helps residents and businesses in Rosebank with everything from a fridge that has stopped cooling to full air conditioning servicing for an office. Our technicians know the area well and respond quickly with quality work that lasts."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and office refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Technicians reaching Rosebank quickly for on-site visits",
        "Experience with apartments, offices, and retail spaces",
        "Quotes are explained before repair work starts",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "Call when a fridge, freezer, or cold room stops cooling",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Morningside", href: "/service-areas/morningside" },
      ]}
    />
  )
}
