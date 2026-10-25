import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Johannesburg",
  description: "Air conditioning, refrigeration, and appliance repairs across Johannesburg. Serving Sandton, Rosebank, Fourways, Randburg, Bryanston and all JHB suburbs. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/johannesburg",
})

export default function JohannesburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Johannesburg"
      description="MainTech Appliance Repairs delivers air conditioning, refrigeration, and appliance repairs throughout Johannesburg. From homes in the northern suburbs to shops, offices, and restaurants in the city, we keep your cooling and appliances running with fast, professional service."
      introImage="/commercial-refrigeration-display.png"
      suburbs={[
        "Sandton",
        "Rosebank",
        "Fourways",
        "Randburg",
        "Parktown",
        "Melrose",
        "Hyde Park",
        "Bryanston",
        "Norwood",
        "Houghton",
        "Johannesburg CBD",
        "Melville",
        "Greenside",
        "Parkhurst",
        "Illovo",
      ]}
      introduction="Johannesburg is a fast moving city where a broken fridge, cold room, or air conditioner can quickly become a real problem for a home or business. MainTech Appliance Repairs has built a strong reputation across Johannesburg, helping households, shops, offices, and restaurants keep their cooling and appliances working. With one trusted team for aircon, refrigeration, and appliance repairs, you only need to make one call."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and bar refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Technicians positioned across Johannesburg for rapid response",
        "Quotes are explained before repair work starts",
        "Experience with both homes and commercial refrigeration",
        "Honest, upfront quotes with no hidden costs",
        "Call when a fridge, freezer, or cold room stops cooling",
        "Quality parts and lasting repairs on every job",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Morningside", href: "/service-areas/morningside" },
        { name: "Roodepoort", href: "/service-areas/roodepoort" },
        { name: "Bedfordview", href: "/service-areas/bedfordview" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
