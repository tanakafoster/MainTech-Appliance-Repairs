import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Midrand",
  description: "Air conditioning, refrigeration, and appliance repairs in Midrand. Serving Carlswald, Halfway House, Vorna Valley, Kyalami, Waterfall and surrounding areas. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/midrand",
})

export default function MidrandPage() {
  return (
    <ServiceAreaTemplate
      areaName="Midrand"
      description="MainTech Appliance Repairs serves Midrand's growing residential and commercial communities with air conditioning, refrigeration, and appliance repairs. Our central location makes us ideal for fast callouts across this rapidly developing area."
      introImage="/refrigeration-repair-technician.png"
      suburbs={[
        "Carlswald",
        "Halfway House",
        "Vorna Valley",
        "Glen Austin",
        "Noordwyk",
        "Halfway Gardens",
        "Kyalami",
        "Waterfall",
      ]}
      introduction="Midrand's position between Pretoria and Johannesburg has made it one of Gauteng's fastest growing areas. MainTech Appliance Repairs is well placed to serve Midrand's mix of residential estates, office parks, and commercial developments with reliable cooling and appliance repairs. From a fridge that has stopped cooling in a townhouse to refrigeration servicing for a business, we respond quickly with quality work."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
        "Refrigeration for offices and estates",
      ]}
      whyChooseUs={[
        "Centrally located for fast response across Midrand",
        "Experience with security estates and office parks",
        "Quotes are explained before repair work starts",
        "Honest, upfront quotes with no hidden costs",
        "Call when a fridge, freezer, or cold room stops cooling",
        "Quality parts and lasting repairs on every job",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Pretoria", href: "/service-areas/pretoria" },
        { name: "Centurion", href: "/service-areas/centurion" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Fourways", href: "/service-areas/fourways" },
      ]}
    />
  )
}
