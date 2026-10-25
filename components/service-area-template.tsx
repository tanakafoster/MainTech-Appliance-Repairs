import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowRight, MapPin, Wind, Refrigerator, WashingMachine, Clock } from "lucide-react"
import { site } from "@/lib/site"

interface ServiceAreaTemplateProps {
  areaName: string
  description: string
  suburbs: string[]
  heroImage?: string
  introImage?: string
  introduction: string
  servicesOffered: string[]
  whyChooseUs: string[]
  nearbyAreas: { name: string; href: string }[]
  responseTime?: string
  projectsCompleted?: number
  children?: ReactNode
}

const popularServices = [
  { icon: Refrigerator, title: "Fridge and Freezer Repairs", href: "/refrigeration-repairs" },
  { icon: WashingMachine, title: "Washing Machine Repairs", href: "/washing-machine-repairs" },
  { icon: Wind, title: "Air Conditioner Repairs", href: "/air-conditioning-services" },
  { icon: Clock, title: "Cold Room Repairs", href: "/cold-room-installation-repair" },
]

export function ServiceAreaTemplate({
  areaName,
  description,
  suburbs,
  heroImage,
  introImage,
  introduction,
  servicesOffered,
  whyChooseUs,
  nearbyAreas,
  children,
}: ServiceAreaTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src={heroImage || "/map-of-gauteng-south-africa-highlighting-pretoria-.jpg"}
            alt={`MainTech Appliance Repairs appliance and refrigeration repairs in ${areaName}`}
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <Breadcrumbs
            variant="onDark"
            currentPath={`/service-areas/${areaName.toLowerCase()}`}
            items={[{ label: "Service Areas", href: "/service-areas" }, { label: areaName }]}
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
                <MapPin className="h-4 w-4 text-accent" />
                Service Area
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Appliance, Aircon and Refrigeration Repairs in {areaName}
              </h1>
              <p className="mb-8 text-pretty text-lg text-primary-foreground/90 leading-relaxed">{description}</p>

              {/* Quick Stats */}
              <div className="mb-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-xs text-white/70">Weekday hours</div>
                    <div className="text-sm font-semibold text-white">Mon to Fri, 8:00 to 17:00</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 shadow-2xl">
                <h3 className="mb-4 text-lg font-semibold text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Suburbs We Cover in {areaName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90 border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/80 mb-3">
                    <strong className="text-white">Fast response times:</strong> We serve every suburb in {areaName} with quick, professional service.
                  </p>
                  <p className="text-xs text-white/60">
                    Based in Gauteng and positioned to reach {areaName} efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                About Our Services
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Your Trusted Repair Team in {areaName}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">{introduction}</p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  MainTech Appliance Repairs visits homes and businesses in {areaName} for appliance, refrigeration, and air conditioning faults. The published suburb list on this page is the local coverage we describe for this area.
                </p>
              </div>

              <div className="mb-6 lg:hidden">
                <h3 className="mb-3 text-sm font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  Suburbs We Cover:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => (
                    <span key={suburb} className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground border border-border">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-border">
                <Image
                  src={introImage || "/technicians-servicing-air-conditioner.png"}
                  alt={`Professional appliance and refrigeration repairs in ${areaName} by MainTech Appliance Repairs`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Comprehensive Services
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Repair Services Available in {areaName}
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide a full range of appliance, air conditioning, and refrigeration services to homes and businesses throughout {areaName} and surrounding suburbs.
            </p>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((service) => (
              <div key={service} className="flex items-start gap-3 rounded-xl bg-card p-5 border border-border hover:border-secondary hover:shadow-lg transition-all group">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="mb-6 text-center text-xl font-bold">Popular Services in {areaName}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex items-center gap-3 rounded-xl bg-card p-5 border border-border transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold group-hover:text-secondary transition-colors block">
                      {service.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="border-border hover:border-secondary hover:shadow-lg transition-all group">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Why {areaName} Homes and Businesses Trust MainTech Appliance Repairs
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With years of experience serving {areaName} and surrounding areas, we understand the needs of local homes and businesses. Our commitment to quality workmanship, honest pricing, and friendly service has made us the preferred choice for appliance, aircon, and refrigeration repairs.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Based in <strong>Gauteng</strong>, we visit {areaName} for the appliance, refrigeration, and air conditioning work listed on this page.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      {/* Nearby Areas */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-3 text-2xl font-bold">We Also Serve Nearby Areas</h2>
            <p className="text-muted-foreground">
              MainTech Appliance Repairs provides appliance, aircon, and refrigeration repairs throughout Gauteng.
              Explore our other service areas:
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="flex items-center justify-between gap-2 rounded-xl bg-card px-5 py-4 text-sm font-medium transition-all hover:bg-secondary hover:text-secondary-foreground border border-border hover:shadow-lg group"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary group-hover:text-secondary-foreground" />
                  {area.name}
                </div>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Need a Repair in {areaName}?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact MainTech Appliance Repairs today for a free quote. Our experienced technicians are ready to help with your appliance, air conditioning, or refrigeration needs in {areaName}, whether at home or at your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Request a Free Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="tel:+27656508504">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Weekday hours are Monday to Friday, 8:00 to 17:00. Call {site.phoneDisplay} to ask about a visit in {areaName}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
