import { pageMetadata } from "@/lib/seo"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata = pageMetadata({
  title: "Appliance, Aircon and Refrigeration Repairs in Roodepoort",
  description: "Air conditioning, refrigeration, and appliance repairs in Roodepoort. Serving Wilgeheuwel, Honeydew, Constantia Kloof, Ruimsig, Florida and surrounding suburbs. Call 065 650 8504 to arrange a visit.",
  path: "/service-areas/roodepoort",
  keywords: "air conditioning Roodepoort, fridge repairs Roodepoort, appliance repairs Wilgeheuwel, refrigeration Honeydew, aircon repairs Constantia Kloof",
  image: "/appliance_repairs.jpg",
  imageAlt: "Professional appliance and refrigeration repairs in Roodepoort by MainTech Appliance Repairs",
})

export default function RoodepoortPage() {
  return (
    <ServiceAreaTemplate
      areaName="Roodepoort"
      description="MainTech Appliance Repairs provides air conditioning, refrigeration, and appliance repairs throughout Roodepoort and its surrounding suburbs. From family homes to shops, offices, and industrial units, we keep your cooling and appliances running with honest pricing and professional service."
      introImage="/appliance_repairs.jpg"
      suburbs={[
        "Wilgeheuwel",
        "Honeydew",
        "Constantia Kloof",
        "Ruimsig",
        "Featherbrooke Estate",
        "Radiokop",
        "Florida",
        "Weltevredenpark",
        "Little Falls",
        "Strubensvalley",
        "Laser Park",
        "Quellerina",
      ]}
      introduction="Roodepoort covers a broad mix of residential suburbs, commercial districts, and industrial areas, and all of them rely on working fridges, freezers, air conditioners, and appliances. MainTech Appliance Repairs serves Roodepoort homeowners and businesses with fast, reliable repairs and installations. Whether you are in the estates of Ruimsig, the established neighbourhoods of Constantia Kloof, or the commercial hubs of Radiokop, our technicians deliver quality work you can trust."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Chest freezer and bar fridge repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and retail refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
      ]}
      whyChooseUs={[
        "Local technicians reaching Roodepoort quickly for on-site visits",
        "Experience with homes, retail, and industrial refrigeration",
        "Quotes are explained before repair work starts",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "Call when a fridge, freezer, or cold room stops cooling",
      ]}
      nearbyAreas={[
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    >
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">
              Air Conditioning, Refrigeration, and Appliance Repairs Throughout Roodepoort
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort combines residential neighbourhoods, commercial developments, and industrial zones, and each
                one has its own cooling and appliance needs. MainTech Appliance Repairs brings hands on experience to every job,
                whether you are repairing a fridge in a family home in Wilgeheuwel, servicing air conditioning in a
                commercial building in Radiokop, or maintaining refrigeration for a business in Laser Park.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Serving Roodepoort&apos;s Diverse Suburbs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our service coverage reaches across Roodepoort and all surrounding suburbs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Residential Areas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We look after cooling and appliances in Roodepoort&apos;s established and upmarket suburbs including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Ruimsig and Featherbrooke Estate, premium homes and estates</li>
                    <li>Constantia Kloof and Little Falls, family neighbourhoods</li>
                    <li>Wilgeheuwel and Weltevredenpark, established suburbs</li>
                    <li>Honeydew and Florida, diverse residential properties</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial and Industrial Zones</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Refrigeration and cooling services for Roodepoort&apos;s business and industrial districts:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Radiokop, offices, retail, and display fridges</li>
                    <li>Laser Park, industrial units and cold rooms</li>
                    <li>Strubensvalley, mixed commercial developments</li>
                    <li>Quellerina, business parks and offices</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Home Cooling and Appliance Repairs in Roodepoort</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort homeowners trust us for fridge and freezer repairs, air conditioning installation and
                servicing, washing machine and tumble dryer repairs, and oven, stove, and dishwasher repairs. We arrive
                prepared with common parts so many repairs can be completed on the first visit.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial and Business Refrigeration</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort&apos;s shops, restaurants, and offices depend on reliable refrigeration. We service and repair
                display fridges, walk in cold rooms, ice machines, and commercial air conditioning, and we work around
                your trading hours to keep disruption to a minimum.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Emergency Callouts and Fast Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A fridge or cold room that stops cooling can put stock and food at risk within hours. Our emergency
                callout service covers Roodepoort around the clock, so a cooling breakdown never has to wait until the
                next working day.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <h4 className="font-bold text-lg mb-3">Need a Repair in Roodepoort?</h4>
                <p className="text-muted-foreground mb-4">
                  Contact us today for a free, no obligation quote. Whether you are in Wilgeheuwel, Honeydew, Constantia
                  Kloof, or any other Roodepoort suburb, our team is ready to help.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Based in:</strong> Gauteng, South Africa<br />
                  <strong>Response Time:</strong> Same day across Roodepoort<br />
                  <strong>Emergency Service:</strong> Available weekday hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceAreaTemplate>
  )
}
