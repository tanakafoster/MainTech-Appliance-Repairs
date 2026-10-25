import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Centurion",
  description: "Air conditioning, refrigeration, and appliance repairs in Centurion. Serving Highveld, Eldoraigne, Irene, Wierdapark, Zwartkop and all Centurion suburbs. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/centurion",
})

export default function CenturionPage() {
  return (
    <ServiceAreaTemplate
      areaName="Centurion"
      description="MainTech Appliance Repairs provides trusted air conditioning, refrigeration, and appliance repairs throughout Centurion. From family homes in established suburbs to modern developments and businesses, we keep your cooling and appliances running reliably."
      introImage="/appliance_repairs_centurion.jpg"
      suburbs={[
        "Highveld",
        "Eldoraigne",
        "Irene",
        "Wierdapark",
        "Zwartkop",
        "Die Hoewes",
        "Wierda Park",
        "Rooihuiskraal",
        "Lyttelton",
        "Clubview",
      ]}
      introduction="Centurion offers suburban living with easy access to both Pretoria and Johannesburg. MainTech Appliance Repairs has become a reliable choice in the area for households and businesses that need fast fridge, freezer, air conditioning, and appliance repairs. Our local presence means prompt service and a real understanding of what Centurion homes and businesses need to stay cool and comfortable."
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
        "Local technicians reaching Centurion quickly for on-site visits",
        "Quotes are explained before repair work starts",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "Call when a fridge, freezer, or cold room stops cooling",
        "Trusted by Centurion homes and businesses",
      ]}
      nearbyAreas={[
        { name: "Pretoria", href: "/service-areas/pretoria" },
        { name: "Midrand", href: "/service-areas/midrand" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
      ]}
    />
  )
}
