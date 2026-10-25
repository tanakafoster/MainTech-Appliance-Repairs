import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Wind,
  Refrigerator,
  Warehouse,
  Store,
  WashingMachine,
  Clock,
  Wrench,
  Droplets,
  Zap,
  Home,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Wind,
    title: "Air Conditioning Services",
    description:
      "Installation, servicing, repairs, and gas refills for split systems, ducted units, and inverters across Gauteng homes and offices.",
    href: "/air-conditioning-services",
    image: "/air-conditioning-service-gauteng.png",
    keywords: "air conditioning, aircon installation, aircon repair",
  },
  {
    icon: Refrigerator,
    title: "Refrigeration Repairs",
    description:
      "Fast repairs for fridges, freezers, and chest freezers. We fix cooling faults, gas leaks, thermostats, and compressors.",
    href: "/refrigeration-repairs",
    image: "/refrigeration-repair-technician.png",
    keywords: "fridge repair, freezer repair, refrigeration",
  },
  {
    icon: Warehouse,
    title: "Cold Room Installation and Repair",
    description:
      "Walk in cold rooms and commercial cold storage designed, installed, and maintained for reliable performance.",
    href: "/cold-room-installation-repair",
    image: "/cold-room-installation.png",
    keywords: "cold room installation, cold storage, walk in cold room",
  },
  {
    icon: Store,
    title: "Commercial Refrigeration",
    description:
      "Display fridges, butchery equipment, and restaurant refrigeration serviced and repaired to keep your business running.",
    href: "/commercial-refrigeration",
    image: "/commercial-refrigeration-display.png",
    keywords: "commercial refrigeration, display fridge, restaurant equipment",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repairs",
    description:
      "Machines that will not start, drain, spin, or stop leaking. See also tumble dryers, dishwashers, and ovens.",
    href: "/washing-machine-repairs",
    image: "/Appliances-All-scaled-e1585943218453.webp",
    keywords: "appliance repair, washing machine repair, oven repair",
  },
  {
    icon: Clock,
    title: "Emergency Callout Service",
    description:
      "Same day and 24 hour breakdown response when your fridge, freezer, or cold room stops cooling.",
    href: "/emergency-callout-service",
    image: "/property-maintenance-worker-repairing-fixtures-in-a.jpg",
    keywords: "emergency repair, breakdown response, 24 hour callout",
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance Contracts",
    description:
      "Scheduled servicing for offices, retail, and industrial sites to keep cooling systems efficient and reliable.",
    href: "/hvac-maintenance-contracts",
    image: "/property-maintenance-worker-repairing-fixtures-in-a.jpg",
    keywords: "hvac maintenance, servicing contract, scheduled servicing",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description:
      "Gas and water connections for appliance installs, plus leak repairs tied to fridges, ice makers, and dishwashers.",
    href: "/plumbing-services",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    keywords: "plumbing, water connection, gas connection",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Wiring, fault finding, and safe power connections for appliance and air conditioning installations.",
    href: "/electrical-services",
    image: "/electrician-working-on-electrical-panel-wiring-sou.jpg",
    keywords: "electrical, wiring, fault finding",
  },
  {
    icon: Home,
    title: "Maintenance Contracts",
    description:
      "Scheduled upkeep for homes and businesses so your appliances and cooling equipment keep working year round.",
    href: "/property-maintenance",
    image: "/property-maintenance-worker-fixing-repairs-profess.jpg",
    keywords: "maintenance contracts, scheduled upkeep, servicing",
  },
]

export function ServicesOverview() {
  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            itemProp="name"
          >
            Appliance, Aircon and Refrigeration Repairs in Gauteng
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
            From fridges and freezers to air conditioning and cold rooms, <strong>MainTech Appliance Repairs</strong> keeps homes and businesses cool across <strong>Pretoria, Johannesburg, and Gauteng</strong>. One trusted team for all your cooling and appliance needs.
          </p>
        </div>

        {/* Featured Services - Cards with Images */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <Card
              key={service.href}
              className="group overflow-hidden border-border transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:-translate-y-1"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} in Gauteng by MainTech Appliance Repairs`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg ring-2 ring-white/20 transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3
                  className="mb-2 text-lg font-bold group-hover:text-secondary transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3"
                  itemProp="description"
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  itemProp="url"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services - Compact List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(6).map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-0.5"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 7)} />

              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-110">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3
                  className="text-sm font-semibold truncate group-hover:text-secondary transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground">View Details</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section with Stats */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary/90 p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need a Repair Today?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free, no obligation quote from Gauteng&apos;s trusted appliance and refrigeration team. Experienced technicians, on-site visits, and quality workmanship every time.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-white">
              <div>
                <div className="text-3xl font-bold text-accent">10</div>
                <div className="text-sm text-white/80">Service Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">local</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">Same Day</div>
                <div className="text-sm text-white/80">Callouts Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">weekday hours</div>
                <div className="text-sm text-white/80">Emergency Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 font-semibold transition-transform hover:scale-105"
              >
                <Link href="/services">
                  View All 10 Services
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
