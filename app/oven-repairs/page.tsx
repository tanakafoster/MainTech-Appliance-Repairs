import { ServicePageTemplate } from "@/components/service-page-template"
import { pageMetadata } from "@/lib/seo"
import { Flame, WashingMachine, Zap, Refrigerator } from "lucide-react"

export const metadata = pageMetadata({
  title: "Oven, Stove and Hob Repairs in Gauteng",
  description:
    "Oven, stove, and hob repairs across Gauteng. MainTech Appliance Repairs traces no-heat, uneven cooking, and faulty element or ignition problems and quotes before the repair starts.",
  path: "/oven-repairs",
  keywords: "oven repairs Gauteng, stove repairs Johannesburg, hob repairs Pretoria, oven not heating",
  image: "/Appliances-All-scaled-e1585943218453.webp",
  imageAlt: "Kitchen appliance repairs by MainTech Appliance Repairs",
})

export default function OvenRepairsPage() {
  return (
    <ServicePageTemplate
      path="/oven-repairs"
      title="Oven, Stove and Hob Repairs in Gauteng"
      description="An oven that will not heat, a stove plate that stays cold, or a hob that clicks and never lights needs the failed part identified first. MainTech Appliance Repairs covers ovens, stoves, and hobs for homes in Gauteng. Gas stove repairs are not offered as a separate service."
      icon={Flame}
      heroImage="/Appliances-All-scaled-e1585943218453.webp"
      priceRange="Quote before work"
      features={[
        "Oven not heating",
        "Uneven cooking or a failed fan",
        "Stove plates and solid hobs",
        "Ceramic and coil hob faults",
        "Element replacement where required",
        "Thermostat and selector checks",
        "Door seal and hinge problems",
        "Grill not working",
        "Control and wiring faults on the appliance",
        "A clear quote before parts are fitted",
      ]}
      benefits={[
        {
          title: "Oven heat faults isolated",
          description: "No heat can be an element, thermostat, selector, or supply fault at the appliance. Those are tested instead of swapping parts in sequence.",
          icon: Flame,
        },
        {
          title: "Stoves and hobs included",
          description: "Stove plates and hobs are covered on this page when the fault is in the appliance, not as a separate thin page.",
          icon: Zap,
        },
        {
          title: "Door and seal problems",
          description: "A door that will not close, or a seal that lets heat escape, is inspected because it changes how the oven cooks.",
          icon: Flame,
        },
      ]}
      process={[
        { step: 1, title: "Say which zone failed", description: "Tell us if it is the oven, grill, a stove plate, or one hob zone." },
        { step: 2, title: "Test the appliance", description: "The technician checks the elements, controls, and connections that belong to that symptom." },
        { step: 3, title: "Quote", description: "You approve the quote before the repair proceeds." },
        { step: 4, title: "Heat test", description: "After the repair, the oven or plate is tested to confirm it heats as expected." },
      ]}
      relatedServices={[
        { title: "All Appliance Repairs", href: "/appliance-repairs", icon: WashingMachine },
        { title: "Dishwasher Repairs", href: "/dishwasher-repairs", icon: Flame },
        { title: "Appliance Electrical Connections", href: "/electrical-services", icon: Zap },
        { title: "Fridge and Freezer Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
      ]}
      serviceAreas={["Pretoria", "Johannesburg", "Midrand", "Sandton", "Centurion", "Fourways", "Randburg", "Rosebank", "Bedfordview", "Roodepoort"]}
    >
      <section className="bg-muted py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold">Ovens, stoves, and hobs</h2>
          <p className="mb-4 text-muted-foreground">
            Oven repairs and stove repairs often share elements, selectors, and wiring, so they stay on one page. A single cold plate is not the same job as an oven that never reaches temperature, and the quote follows the part that actually failed.
          </p>
          <p className="mb-4 text-muted-foreground">
            Electrical connections that serve the appliance can be checked with the repair. That does not make MainTech a general electrical contractor for the rest of the house. Gas appliance overhaul is not listed as its own service. If the fault is a gas supply issue beyond the appliance connection, we will say so rather than take on unrelated gas work.
          </p>
          <h2 className="mb-4 mt-10 text-2xl font-bold">Questions about oven repairs</h2>
          <h3 className="font-semibold">Do you repair hobs as well as ovens?</h3>
          <p className="mb-4 text-muted-foreground">Yes. Hob zones and stove plates are included when the fault is in the cooking appliance.</p>
          <h3 className="font-semibold">Is a separate stove page available?</h3>
          <p className="text-muted-foreground">No. Stove and hob searches are answered here so the site does not publish two near-identical repair pages.</p>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
