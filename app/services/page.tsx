import { pageMetadata } from "@/lib/seo"
// File path: app/services/page.tsx
// URL: https://www.maintechappliancerepairs.co.za/services

import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Wind,
  Refrigerator,
  Warehouse,
  Store,
  WashingMachine,
  ClipboardCheck,
  Siren,
  Droplets,
  Zap,
  CalendarClock,
  ArrowRight,
  Phone,
  CheckCircle,
  Award,
  Clock,
  Star,
  MapPin,
  Shield,
} from "lucide-react"

export const metadata = pageMetadata({
  title: "Our Services | Air Conditioning, Refrigeration and Appliance Repairs in Gauteng",
  description: "Explore MainTech Appliance Repairs: air conditioning, refrigeration repairs, cold rooms, commercial refrigeration, appliance repairs, HVAC maintenance, and emergency callouts across Pretoria, Johannesburg and Midrand.",
  path: "/services",
  keywords: "air conditioning Gauteng, refrigeration repairs Pretoria, appliance repairs Johannesburg, cold room installation, commercial refrigeration, HVAC maintenance Midrand",
  image: "/og-image.png",
  imageAlt: "MainTech Appliance Repairs air conditioning and refrigeration technicians in Gauteng",
})

const services = [
  {
    icon: Wind,
    title: "Air Conditioning Services",
    description:
      "Supply, installation, servicing, and repair of split systems, midwall units, and ducted air conditioning for homes and businesses across Gauteng.",
    href: "/air-conditioning-services",
    features: ["Supply and installation", "Servicing and cleaning", "Gas refills and repairs", "Ducted systems", "Fault finding"],
    featured: true,
  },
  {
    icon: Refrigerator,
    title: "Refrigeration Repairs",
    description:
      "Fast repairs for fridges, freezers, and chest freezers with cooling faults, gas leaks, thermostat problems, and compressor failures.",
    href: "/refrigeration-repairs",
    features: ["Fridge repairs", "Freezer repairs", "Cooling fault finding", "Gas leak detection", "Compressor replacement"],
    featured: true,
  },
  {
    icon: Warehouse,
    title: "Cold Room Installation and Repair",
    description:
      "Design, installation, and repair of walk in cold rooms and freezer rooms for restaurants, shops, and industrial sites.",
    href: "/cold-room-installation-repair",
    features: ["Cold room installation", "Freezer rooms", "Panel and door repairs", "Refrigeration plant", "Temperature monitoring"],
    featured: false,
  },
  {
    icon: Store,
    title: "Commercial Refrigeration",
    description:
      "Servicing and repair of display fridges, under counter units, bottle coolers, and back of house refrigeration for businesses.",
    href: "/commercial-refrigeration",
    features: ["Display fridges", "Bottle coolers", "Under counter units", "Preventative servicing", "Breakdown callouts"],
    featured: false,
  },
  {
    icon: WashingMachine,
    title: "Appliance Repairs",
    description:
      "Repairs for washing machines, tumble dryers, dishwashers, ovens, stoves, and other household appliances.",
    href: "/appliance-repairs",
    features: ["Washing machines", "Tumble dryers", "Dishwashers", "Ovens and stoves", "Fault finding"],
    featured: false,
  },
  {
    icon: ClipboardCheck,
    title: "HVAC Maintenance Contracts",
    description:
      "Scheduled servicing agreements that keep your heating, ventilation, and air conditioning systems running efficiently all year.",
    href: "/hvac-maintenance-contracts",
    features: ["Scheduled servicing", "Filter cleaning", "Performance checks", "Priority callouts", "Detailed reports"],
    featured: false,
  },
  {
    icon: Siren,
    title: "Emergency Callout Service",
    description:
      "Rapid response when a fridge, freezer, cold room, or air conditioner fails and your food, stock, or comfort is at risk.",
    href: "/emergency-callout-service",
    features: ["Rapid response", "After hours support", "Breakdown repairs", "Stock protection", "Temporary solutions"],
    featured: false,
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description:
      "Water and drainage connections tied to appliance and refrigeration installs, including washing machines, dishwashers, and ice makers.",
    href: "/plumbing-services",
    features: ["Appliance water connections", "Drainage points", "Ice maker plumbing", "Leak repairs", "Isolation valves"],
    featured: false,
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Wiring, dedicated circuits, and fault finding tied to appliance, air conditioning, and refrigeration installations.",
    href: "/electrical-services",
    features: ["Dedicated circuits", "Isolators and plugs", "Fault finding", "Safe connections", "Compliance minded work"],
    featured: false,
  },
  {
    icon: CalendarClock,
    title: "Maintenance Contracts",
    description:
      "Scheduled servicing plans for homes and businesses that keep your appliances and cooling equipment reliable and efficient.",
    href: "/property-maintenance",
    features: ["Planned servicing", "Homes and businesses", "Priority response", "Flexible schedules", "Peace of mind"],
    featured: false,
  },
]

const stats = [
  { value: "10+", label: "Service Categories", icon: Award },
  { value: "100s", label: "Clients Served", icon: CheckCircle },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "weekday hours", label: "Emergency Support", icon: Phone },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "One Stop Cooling Partner",
    description: "Air conditioning, refrigeration, and appliances handled by one trusted team",
  },
  {
    icon: Award,
    title: "Cooling and appliance repairs",
    description: "Technicians with the right skills and tools",
  },
  {
    icon: Shield,
    title: "Quote before work",
    description: "You approve the quote before the repair goes ahead",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Call 065 650 8504 to ask about a visit in Gauteng",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "Services" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Award className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Complete Cooling and Appliance Solutions</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              <span className="text-accent">10</span> Professional Services <br />Across Gauteng
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed mb-8">
              <strong className="text-white">MainTech Appliance Repairs</strong> keeps your home and business cool and running. From air conditioning and refrigeration to appliance repairs and maintenance contracts, we serve{" "}
              <strong className="text-white">Pretoria, Johannesburg, Midrand</strong>, and the greater Gauteng region.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" aria-hidden="true" />
                  <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <benefit.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">
              Our <span className="text-secondary">Complete Service Range</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From air conditioning to appliance repairs, we keep your home and business comfortable and running
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className={`group flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  service.featured ? "border-2 border-secondary ring-1 ring-secondary/20" : "border-border"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all group-hover:scale-110 ${
                        service.featured
                          ? "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg"
                          : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                      }`}
                    >
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    {service.featured && (
                      <span className="rounded-full bg-gradient-to-r from-accent to-accent/80 px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="mb-4 flex-1 leading-relaxed">{service.description}</CardDescription>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-bold text-secondary hover:text-secondary/80 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border">
            <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-2">Serving All of Gauteng</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              All services available across Pretoria, Johannesburg, Midrand, Sandton, Centurion, and many more areas in the Gauteng province
            </p>
            <Button asChild variant="outline" size="lg" className="border-secondary/30 hover:bg-secondary/10">
              <Link href="/service-areas">
                View Service Areas
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold mb-6 md:text-4xl">
                The <span className="text-secondary">MainTech Appliance Repairs</span> Advantage
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over <strong>10 years of experience</strong> and hundreds of satisfied clients, we have become the trusted name in Gauteng for air conditioning, refrigeration, and appliance care.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Integrated Services</h3>
                    <p className="text-sm text-muted-foreground">One company for cooling, refrigeration, and appliances with clear accountability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Certified Professionals</h3>
                    <p className="text-sm text-muted-foreground">Technicians who explain the fault before a repair is approved</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">Clear quotes, no hidden fees, and honest advice on every job</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/technician-team-in-gauteng.png"
                  alt="MainTech Appliance Repairs technicians ready for air conditioning and refrigeration work in Gauteng"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20">
                <p className="text-4xl font-bold">100s</p>
                <p className="text-sm font-semibold">Clients</p>
                <p className="text-xs opacity-90">Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Need a Service <span className="text-accent">Not Listed?</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              If it cools, chills, or keeps your home running, we can most likely help. Contact us to discuss your specific needs and receive a tailored, no obligation quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Request Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold">
                <Link href="tel:+27656508504">Call: 065 650 8504</Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              Monday to Friday, 8:00 to 17:00 • Same day Quotes • Licensed and Insured • Serving All Gauteng
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
