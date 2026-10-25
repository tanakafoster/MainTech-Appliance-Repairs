import Image from "next/image"
import { CheckCircle, Shield, Users, Clock, Award, Snowflake, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: Users,
    title: "Experienced Technicians",
    description:
      "The team repairs appliances, air conditioners, and refrigeration equipment for homes and businesses across Gauteng.",
  },
  {
    icon: Shield,
    title: "Quote before work",
    description:
      "The technician explains the fault and the quote before repair work starts.",
  },
  {
    icon: CheckCircle,
    title: "Honest, Upfront Pricing",
    description:
      "No hidden costs or surprises. We give you a clear quote before any work starts and stick to it, with transparent service from start to finish.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "We use quality parts and proven repair methods to deliver lasting fixes that keep your appliances and cooling systems running.",
  },
  {
    icon: Clock,
    title: "Fast, On-site visits",
    description:
      "We know a broken fridge or freezer cannot wait. Our teams respond quickly with same day and urgent breakdown callouts across Gauteng.",
  },
  {
    icon: Snowflake,
    title: "Cooling Specialists",
    description:
      "From walk in cold rooms to household fridges and split unit air conditioners, cooling is what we do best every single day.",
  },
]

const stats = [
  { value: "local", label: "Clients Served", sublabel: "Across Gauteng" },
  { value: "Same Day", label: "Callouts", sublabel: "For Most Bookings" },
  { value: "clear", label: "Client Satisfaction", sublabel: "5 Star Reviews" },
  { value: "weekday hours", label: "Emergency Support", sublabel: "Always Available" },
]

export function WhyChooseUs() {
  return (
    <section
      className="bg-muted py-20 lg:py-28 overflow-hidden relative"
      itemScope
      itemType="https://schema.org/Organization"
      aria-labelledby="why-choose-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header Section with Image */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2
              id="why-choose-heading"
              className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              itemProp="name"
            >
              Why <span className="text-accent">MainTech Appliance Repairs</span> is Gauteng&apos;s Trusted Choice
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
              We bring together technical skill, reliability, and a commitment to doing the job right for appliance, air conditioning, and refrigeration repairs across <strong>Pretoria, Johannesburg, Midrand, and greater Gauteng</strong>.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group text-center sm:text-left bg-card border border-border rounded-xl p-4 transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1"
                  itemProp="award"
                >
                  <p className="text-3xl font-bold text-secondary mb-1 group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  {index === 2 && (
                    <div className="flex items-center justify-center sm:justify-start gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary/30 hover:bg-secondary/5 h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Images Section */}
          <div className="relative" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
              <Image
                src="/air-conditioning-service-gauteng.png"
                alt="MainTech Appliance Repairs technician installing an air conditioning unit in Gauteng"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                itemProp="contentUrl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Secondary Image - Bottom Left */}
            <div className="absolute -bottom-6 -left-6 aspect-square w-40 overflow-hidden rounded-2xl border-4 border-background shadow-xl ring-1 ring-border transition-transform hover:scale-105">
              <Image
                src="/property-maintenance-worker-fixing-repairs-profess.jpg"
                alt="MainTech Appliance Repairs technician repairing a household appliance in Gauteng"
                fill
                className="object-cover"
                loading="lazy"
                quality={80}
                sizes="160px"
              />
            </div>

            {/* Quality Badge - Top Right */}
            <div className="absolute -top-4 -right-4 rounded-xl bg-gradient-to-br from-accent to-accent/90 p-5 shadow-xl ring-2 ring-white/20 transition-transform hover:scale-110">
              <Award className="h-8 w-8 mb-1 text-white" aria-hidden="true" />
              <p className="text-xs font-bold text-white">Quality</p>
              <p className="text-xs font-bold text-white">Assured</p>
            </div>

            {/* Trust Badge - Bottom Right */}
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-secondary px-4 py-3 shadow-xl ring-2 ring-white/20 transition-transform hover:scale-110">
              <div className="flex items-center gap-1">
                <Shield className="h-5 w-5 text-secondary-foreground" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold text-secondary-foreground">Quote first</p>
                  <p className="text-[10px] text-secondary-foreground/80">Callouts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              What Sets MainTech Appliance Repairs Apart
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality, reliability, and customer care makes us the go to choice for homes and businesses across Gauteng.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative rounded-2xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 hover:-translate-y-2"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-sm font-bold text-secondary-foreground shadow-lg ring-2 ring-white/20">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-110 group-hover:rotate-6">
                  <reason.icon className="h-7 w-7" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-bold group-hover:text-secondary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Experience the MainTech Appliance Repairs Difference?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients across Gauteng who trust us to keep their appliances and cooling systems running.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="/contact">
                Request Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary/30 hover:bg-secondary/10 h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="tel:+27656508504">
                Call Us: 065 650 8504
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
