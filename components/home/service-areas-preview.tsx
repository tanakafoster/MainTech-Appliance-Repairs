import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, CheckCircle, Clock, Phone, Navigation } from "lucide-react"

const areas = [
  { 
    name: "Pretoria", 
    href: "/service-areas/pretoria", 
    highlight: true, 
    suburbs: ["Centurion", "Montana", "Hatfield", "Silverton", "Brooklyn"],
    responseTime: "30 min"
  },
  {
    name: "Johannesburg",
    href: "/service-areas/johannesburg",
    highlight: true,
    suburbs: ["Sandton", "Rosebank", "Fourways", "Randburg", "Roodepoort"],
    responseTime: "30 min"
  },
  { 
    name: "Midrand", 
    href: "/service-areas/midrand", 
    suburbs: ["Carlswald", "Halfway House", "Waterfall Estate"],
    responseTime: "20 min"
  },
  { 
    name: "Sandton", 
    href: "/service-areas/sandton", 
    suburbs: ["Morningside", "Rivonia", "Bryanston"],
    responseTime: "25 min"
  },
  { 
    name: "Centurion", 
    href: "/service-areas/centurion", 
    suburbs: ["Highveld", "Eldoraigne", "Irene"],
    responseTime: "25 min"
  },
  { 
    name: "Fourways", 
    href: "/service-areas/fourways", 
    suburbs: ["Lonehill", "Dainfern", "Cedar Lakes"],
    responseTime: "30 min"
  },
  { 
    name: "Randburg", 
    href: "/service-areas/randburg", 
    suburbs: ["Ferndale", "Blairgowrie", "Northcliff"],
    responseTime: "35 min"
  },
  { 
    name: "Bedfordview", 
    href: "/service-areas/bedfordview", 
    suburbs: ["Edenvale", "Germiston", "Kensington"],
    responseTime: "40 min"
  },
  { 
    name: "Rosebank", 
    href: "/service-areas/rosebank", 
    suburbs: ["Parktown", "Saxonwold", "Melrose"],
    responseTime: "35 min"
  },
  { 
    name: "Roodepoort", 
    href: "/service-areas/roodepoort", 
    suburbs: ["Northgate", "Florida", "Constantia Kloof"],
    responseTime: "40 min"
  },
]

const benefits = [
  {
    icon: Clock,
    text: "Same day response for emergency callouts",
    highlight: true,
  },
  {
    icon: CheckCircle,
    text: "Free quotes across Gauteng",
    highlight: false,
  },
  {
    icon: Navigation,
    text: "Strategically located teams for rapid deployment",
    highlight: false,
  },
  {
    icon: Phone,
    text: "Monday to Friday, 8:00 to 17:00 hotline available",
    highlight: false,
  },
]

export function ServiceAreasPreview() {
  return (
    <section 
      className="py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/20 relative"
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby="service-areas-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Service Coverage
            </span>
            <h2 
              id="service-areas-heading"
              className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              itemProp="name"
            >
              Proudly Serving All of <span className="text-secondary">Gauteng Province</span>
            </h2>
            <p className="mb-6 text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
              <strong>MainTech Appliance Repairs</strong> delivers appliance, air conditioning, and refrigeration repairs throughout Gauteng. Our teams are positioned to serve clients across <strong>Pretoria, Johannesburg</strong>, and all major suburbs with fast response times.
            </p>

            {/* Benefits List - Enhanced */}
            <div className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    benefit.highlight 
                      ? 'bg-accent/10 border border-accent/20' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    benefit.highlight ? 'bg-accent/20' : 'bg-secondary/10'
                  }`}>
                    <benefit.icon className={`h-4 w-4 ${
                      benefit.highlight ? 'text-accent' : 'text-secondary'
                    }`} aria-hidden="true" />
                  </div>
                  <span className={`${benefit.highlight ? 'font-semibold' : 'text-muted-foreground'}`}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Area Pills - Enhanced */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
                Our Primary Service Areas:
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      area.highlight
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/25 hover:scale-105"
                        : "bg-muted text-foreground hover:bg-secondary/10 hover:text-secondary border border-border hover:border-secondary/30 hover:scale-105"
                    }`}
                    itemProp="areaServed"
                  >
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {area.name}
                    {area.highlight && (
                      <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">
                        FEATURED
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="/service-areas">
                  View All Service Areas
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-secondary/30 hover:bg-secondary/10 h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="tel:+27656508504">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Call: 065 650 8504
                </Link>
              </Button>
            </div>
          </div>

          {/* Map Side - Enhanced */}
          <div className="relative" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            {/* Main Map */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-border shadow-2xl ring-1 ring-black/5 transition-transform hover:scale-[1.02]">
              <Image
                src="/gauteng-service-areas-map.webp"
                alt="MainTech Appliance Repairs coverage map showing Gauteng province including Pretoria, Johannesburg, Midrand, Sandton, and Centurion areas"
                width={800}
                height={600}
                className="w-full"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                itemProp="contentUrl"
              />
              
              {/* Animated Map Points */}
              <div className="absolute inset-0" aria-hidden="true">
                {/* Midrand - Main Office */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative animate-pulse">
                    <div className="h-5 w-5 rounded-full bg-accent shadow-lg ring-2 ring-white" />
                    <div className="absolute inset-0 h-5 w-5 animate-ping rounded-full bg-accent opacity-75" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                    Main Office
                  </div>
                </div>

                {/* Pretoria */}
                <div className="absolute top-1/4 left-1/3 animate-pulse" style={{ animationDelay: "0.3s" }}>
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-secondary shadow-lg ring-2 ring-white" />
                    <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-secondary opacity-75" />
                  </div>
                </div>

                {/* Johannesburg */}
                <div className="absolute top-2/3 left-2/3 animate-pulse" style={{ animationDelay: "0.6s" }}>
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-secondary shadow-lg ring-2 ring-white" />
                    <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-secondary opacity-75" />
                  </div>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Statistics Badge - Bottom Right */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20 transition-transform hover:scale-110">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-semibold">Major Areas</p>
              <p className="text-xs opacity-90">Across Gauteng</p>
            </div>

            {/* Floating Location Card - Top Left */}
            <div className="absolute -top-4 -left-4 rounded-xl bg-card p-4 shadow-xl border border-border ring-1 ring-black/5 transition-transform hover:scale-110">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80">
                  <MapPin className="h-5 w-5 text-secondary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold">Gauteng Province</p>
                  <p className="text-xs text-muted-foreground">Full Coverage</p>
                </div>
              </div>
            </div>

            {/* Response Time Badge - Top Right */}
            <div className="absolute top-4 right-4 rounded-lg bg-primary/95 backdrop-blur-sm px-3 py-2 shadow-lg ring-1 ring-white/20">
              <div className="flex items-center gap-2 text-primary-foreground">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold">20-40 min</p>
                  <p className="text-[10px] opacity-90">Response Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Suburbs Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              We Also Serve These Suburbs & Surrounding Areas
            </h3>
            <p className="text-muted-foreground">
              Can&apos;t find your area? Contact us - we cover the entire Gauteng province!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="group p-4 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors flex-shrink-0">
                    <MapPin className="h-4 w-4 text-secondary group-hover:text-secondary-foreground" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm group-hover:text-secondary transition-colors truncate">
                      {area.name}
                    </h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {area.responseTime}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground line-clamp-2">
                  {area.suburbs.join(", ")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
