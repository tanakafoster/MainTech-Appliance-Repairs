import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Sandton",
  description: "Air conditioning, refrigeration, and appliance repairs in Sandton. Serving Morningside, Rivonia, Sunninghill, Bryanston, Hyde Park and surrounding suburbs. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/sandton",
})

export default function SandtonPage() {
  return (
    <ServiceAreaTemplate
      areaName="Sandton"
      description="MainTech Appliance Repairs keeps Sandton homes, apartments, offices, and businesses cool and running with professional air conditioning, refrigeration, and appliance repairs. From executive homes to corporate buildings, we deliver reliable service that matches the high standards expected in the area."
      introImage="/air-conditioning-technician-installing-ac-unit-in-.jpg"
      suburbs={["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park", "Sandown", "Atholl", "Inanda"]}
      introduction="As the financial and business heart of Johannesburg, Sandton depends on reliable cooling and appliances every day of the year. MainTech Appliance Repairs helps households, offices, restaurants, and retailers in Sandton with fast air conditioning, refrigeration, and appliance repairs. Whether it is a fridge that has stopped cooling in an apartment or an aircon that needs servicing in a corporate office, our technicians respond quickly with professional, lasting work."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Chest freezer and bar fridge repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and office refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
      ]}
      whyChooseUs={[
        "Technicians reaching Sandton quickly for on-site visits",
        "Experience with executive homes and corporate buildings",
        "Quotes are explained before repair work starts",
        "Discrete, professional service with minimal disruption",
        "Honest, upfront quotes with no hidden costs",
        "Call when a fridge, freezer, or cold room stops cooling",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Morningside", href: "/service-areas/morningside" },
        { name: "Randburg", href: "/service-areas/randburg" },
      ]}
    />
  )
}
