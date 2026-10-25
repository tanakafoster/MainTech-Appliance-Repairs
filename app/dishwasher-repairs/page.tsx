import { ServicePageTemplate } from "@/components/service-page-template"
import { pageMetadata } from "@/lib/seo"
import { Droplets, WashingMachine, Wind, Zap } from "lucide-react"

export const metadata = pageMetadata({
  title: "Dishwasher Repairs in Gauteng",
  description:
    "Dishwasher repairs across Gauteng for machines that will not fill, drain, wash, or dry. MainTech Appliance Repairs finds the fault on site and quotes before the repair starts.",
  path: "/dishwasher-repairs",
  keywords: "dishwasher repairs Gauteng, dishwasher not draining Johannesburg, dishwasher not cleaning Pretoria",
  image: "/Appliances-All-scaled-e1585943218453.webp",
  imageAlt: "Appliance repair visit by MainTech Appliance Repairs",
})

export default function DishwasherRepairsPage() {
  return (
    <ServicePageTemplate
      path="/dishwasher-repairs"
      title="Dishwasher Repairs in Gauteng"
      description="Standing water, a wash that stays dirty, or a door that will not lock are different faults. MainTech Appliance Repairs tests dishwashers in Gauteng homes and quotes the repair before parts are fitted."
      icon={Droplets}
      heroImage="/Appliances-All-scaled-e1585943218453.webp"
      priceRange="Quote before work"
      features={[
        "Will not start or complete a programme",
        "Not filling or overfilling",
        "Not draining",
        "Poor wash or blocked spray arms",
        "Leaks from the door or base",
        "Not heating the wash water",
        "Not drying",
        "Door latch and lock faults",
        "Pump, inlet valve, and heater checks",
        "Advice when repair is not the better option",
      ]}
      benefits={[
        {
          title: "Drain and fill kept separate",
          description: "A dishwasher full of water is not always a failed pump. Filters, hoses, and the drain path are checked first.",
          icon: Droplets,
        },
        {
          title: "Wash quality inspected",
          description: "Dirty results can come from blocked spray arms, a weak wash pump, or water that never gets hot.",
          icon: WashingMachine,
        },
        {
          title: "Leaks located",
          description: "Door seals, hose joints, and the base are inspected so a leak is not guessed from the puddle alone.",
          icon: Zap,
        },
      ]}
      process={[
        { step: 1, title: "Tell us the programme", description: "Say whether it fills, washes, drains, or stops with an error." },
        { step: 2, title: "Inspect filters and components", description: "The technician checks the parts that match the symptom, including the pump and inlet where relevant." },
        { step: 3, title: "Quote the repair", description: "Parts and labour are quoted before the repair goes ahead." },
        { step: 4, title: "Run a test", description: "After an approved repair, the machine is run far enough to confirm the fault has changed." },
      ]}
      relatedServices={[
        { title: "All Appliance Repairs", href: "/appliance-repairs", icon: WashingMachine },
        { title: "Washing Machine Repairs", href: "/washing-machine-repairs", icon: Droplets },
        { title: "Tumble Dryer Repairs", href: "/tumble-dryer-repairs", icon: Wind },
        { title: "Appliance Plumbing Connections", href: "/plumbing-services", icon: Droplets },
      ]}
      serviceAreas={["Pretoria", "Johannesburg", "Midrand", "Sandton", "Centurion", "Fourways", "Randburg", "Rosebank", "Bedfordview", "Roodepoort"]}
    >
      <section className="bg-muted py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold">What a dishwasher visit covers</h2>
          <p className="mb-4 text-muted-foreground">
            Many poor washes start with a blocked filter or spray arm, not a failed control board. We check those simple restrictions before recommending electronic parts. If the machine does not heat, the heater and its protection devices are tested rather than assumed.
          </p>
          <p className="mb-4 text-muted-foreground">
            A leak at the door is different from water in the base tray. The first may be a seal or alignment issue. The second can be a hose, pump, or inlet fault. Water and waste connections that belong to the appliance can be checked with the repair. This is not a general plumbing service for the rest of the kitchen.
          </p>
          <h2 className="mb-4 mt-10 text-2xl font-bold">Questions about dishwasher repairs</h2>
          <h3 className="font-semibold">The dishwasher is full of water. Is the pump always the problem?</h3>
          <p className="mb-4 text-muted-foreground">No. A blocked filter, hose, or non-return path can stop it draining. The pump is tested if those are clear.</p>
          <h3 className="font-semibold">Will every leak be repaired on the day?</h3>
          <p className="text-muted-foreground">Only if the required part is identified and available for that repair. Otherwise we explain what is needed before any work is approved.</p>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
