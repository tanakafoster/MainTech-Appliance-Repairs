import { ServicePageTemplate } from "@/components/service-page-template"
import { pageMetadata } from "@/lib/seo"
import { Wind, WashingMachine, Refrigerator, Clock } from "lucide-react"

export const metadata = pageMetadata({
  title: "Tumble Dryer Repairs in Gauteng",
  description:
    "Tumble dryer repairs across Gauteng for dryers that will not heat, tumble, or finish a cycle. MainTech Appliance Repairs diagnoses the fault on site and quotes before repair work starts.",
  path: "/tumble-dryer-repairs",
  keywords: "tumble dryer repairs Gauteng, dryer not heating Johannesburg, dryer not tumbling Pretoria",
  image: "/Appliances-All-scaled-e1585943218453.webp",
  imageAlt: "Household appliances repaired by MainTech Appliance Repairs in Gauteng",
})

export default function TumbleDryerRepairsPage() {
  return (
    <ServicePageTemplate
      path="/tumble-dryer-repairs"
      title="Tumble Dryer Repairs in Gauteng"
      description="A dryer that leaves clothes wet, trips the power, or scrapes through a cycle needs a fault found before parts are replaced. MainTech Appliance Repairs inspects vented and condenser tumble dryers in homes across Gauteng."
      icon={Wind}
      heroImage="/Appliances-All-scaled-e1585943218453.webp"
      priceRange="Quote before work"
      features={[
        "Dryer will not start",
        "No heat or weak heat",
        "Drum not turning",
        "Long cycles that never finish",
        "Burning smell or unusual noise",
        "Door switch and lock faults",
        "Condenser and filter blockage checks",
        "Belt, roller, and motor checks",
        "Element and thermostat checks",
        "Advice when a repair is not worthwhile",
      ]}
      benefits={[
        {
          title: "Heat faults traced properly",
          description: "No heat can come from the element, thermostat, airflow, or a blocked filter. The visit starts by finding which one it is.",
          icon: Wind,
        },
        {
          title: "Mechanical noise checked",
          description: "Squealing, thumping, or a drum that will not turn is checked against the belt, rollers, and motor before parts are ordered.",
          icon: WashingMachine,
        },
        {
          title: "Moisture and lint considered",
          description: "Blocked filters, ducts, and condenser paths are part of the diagnosis because poor airflow stops a dryer finishing.",
          icon: Clock,
        },
      ]}
      process={[
        { step: 1, title: "Describe the cycle", description: "Tell us whether the dryer starts, heats, tumbles, or stops early." },
        { step: 2, title: "On-site tests", description: "The technician tests the electrical and mechanical parts that match those symptoms." },
        { step: 3, title: "Quote", description: "You get a quote for the recommended repair before that work starts." },
        { step: 4, title: "Repair and a test cycle", description: "If you accept the quote, the repair is completed and the dryer is run to confirm the change." },
      ]}
      relatedServices={[
        { title: "Washing Machine Repairs", href: "/washing-machine-repairs", icon: WashingMachine },
        { title: "All Appliance Repairs", href: "/appliance-repairs", icon: Wind },
        { title: "Fridge and Freezer Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "Emergency Callouts", href: "/emergency-callout-service", icon: Clock },
      ]}
      serviceAreas={["Pretoria", "Johannesburg", "Midrand", "Sandton", "Centurion", "Fourways", "Randburg", "Rosebank", "Bedfordview", "Roodepoort"]}
    >
      <section className="bg-muted py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold">Common tumble dryer faults</h2>
          <p className="mb-4 text-muted-foreground">
            Not every dryer fault is the heating element. A machine that runs cold may have a failed stat, a blocked airway, or a control fault. A machine that heats but leaves clothes damp may be struggling to move air, especially on a condenser model with a packed filter.
          </p>
          <p className="mb-4 text-muted-foreground">
            Noise usually points to the belt, drum rollers, or motor rather than the heater. We do not replace those parts until the inspection shows which one is failing. Some machines are worn in more than one place, and in that case we will say if replacement of the appliance makes more sense than the repair.
          </p>
          <h2 className="mb-4 mt-10 text-2xl font-bold">Questions about dryer repairs</h2>
          <h3 className="font-semibold">Do you repair both vented and condenser dryers?</h3>
          <p className="mb-4 text-muted-foreground">Yes. Tell us the brand and whether the dryer vents outside or collects water in a tank or condenser.</p>
          <h3 className="font-semibold">Can every noisy dryer be repaired?</h3>
          <p className="text-muted-foreground">No. If the drum, housing, or several mechanical parts are badly worn, we will explain that before any repair is approved.</p>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
