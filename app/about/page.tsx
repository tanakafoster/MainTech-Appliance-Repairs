import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Target, Eye, CheckCircle, Users, Shield, Award, Leaf, Handshake, ArrowRight, Phone, Star, Snowflake, Clock } from "lucide-react"

export const metadata = pageMetadata({
  title: "About Our Repair Team in Gauteng",
  description: "Learn about MainTech Appliance Repairs, the trusted name in Gauteng for air conditioning, refrigeration, and appliance repairs. Over 10 years serving Pretoria, Johannesburg, and Midrand.",
  path: "/about",
  keywords: "about MainTech Appliance Repairs, air conditioning company Gauteng, refrigeration technicians Pretoria, appliance repairs Johannesburg, company history, mission vision values",
  image: "/technician-team-in-gauteng.png",
  imageAlt: "MainTech Appliance Repairs technician team in Gauteng",
})

const values = [
  {
    icon: Award,
    title: "Excellence in Every Repair",
    description:
      "We deliver the highest standards of workmanship, making sure every unit we touch is fixed properly and built to last. Quality is never compromised.",
  },
  {
    icon: Shield,
    title: "Safety and Full Compliance",
    description:
      "We follow correct refrigerant handling and electrical safety standards on every job, protecting your family, your staff, and your equipment.",
  },
  {
    icon: Leaf,
    title: "Efficient and Sustainable",
    description:
      "We help you run cooling and appliances that use less energy, saving you money on running costs while being kinder to the environment.",
  },
  {
    icon: Handshake,
    title: "Long Term Relationships",
    description:
      "We build lasting relationships through trust, transparency, and consistent service. Your comfort and peace of mind are our priority.",
  },
]

const team = [
  { role: "Certified refrigeration technicians", icon: Snowflake },
  { role: "Air conditioning specialists", icon: Award },
  { role: "Appliance repair experts", icon: Users },
  { role: "Qualified electricians", icon: Shield },
  { role: "Cold room installers", icon: Award },
  { role: "Dedicated support team", icon: Users },
]

const stats = [
  { value: "100s", label: "Clients Served", sublabel: "Across Gauteng" },
  { value: "10+", label: "Years Experience", sublabel: "In Cooling" },
  { value: "5 Star", label: "Client Rating", sublabel: "Trusted Service" },
  { value: "weekday hours", label: "Emergency Support", sublabel: "Always Available" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "About Us" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Award className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Gauteng&apos;s Trusted Cooling Partner for Local</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              About <span className="text-accent">MainTech Appliance Repairs</span>
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
              Founded with the goal to keep homes and businesses cool, comfortable, and running, {" "}
              <strong className="text-white">MainTech Appliance Repairs</strong> has become a trusted partner for residential, commercial, and industrial clients across{" "}
              <strong className="text-white">Pretoria, Johannesburg, and Midrand</strong>.
            </p>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                  <p className="text-xs text-white/70">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24" itemScope itemType="https://schema.org/Organization">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Who We Are
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl" itemProp="name">
                Your Trusted Partner for Cooling and Appliances in Gauteng
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed" itemProp="description">
                <strong>MainTech Appliance Repairs</strong> is a proudly South African company delivering air conditioning, refrigeration repairs, cold room installation, commercial refrigeration, appliance repairs, and maintenance contracts for clients in{" "}
                <strong>Gauteng</strong>, including <strong>Pretoria, Johannesburg, and Midrand</strong>.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We specialise in reliable, high quality service for homes and businesses. Our team keeps your fridges, freezers, cold rooms, air conditioners, and appliances running so you never have to worry about spoiled stock or an uncomfortable space.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With <strong>over 10 years of experience</strong>, we are committed to honest advice, lasting repairs, and exceeding client expectations on every callout.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Shield className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Quote first</p>
                    <p className="text-xs text-muted-foreground">Certified Technicians</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">weekday hours Available</p>
                    <p className="text-xs text-muted-foreground">Emergency Support</p>
                  </div>
                </div>
              </div>

              <meta itemProp="address" content="Johannesburg, Gauteng, South Africa" />
              <meta itemProp="areaServed" content="Gauteng, Pretoria, Johannesburg, Midrand" />
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/technician-team-in-gauteng.png"
                  alt="MainTech Appliance Repairs technicians preparing for air conditioning and refrigeration work in Gauteng, South Africa"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-semibold">Years</p>
                <p className="text-xs opacity-90">Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gradient-to-b from-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl group-hover:text-secondary transition-colors">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Deliver excellence on every callout, ensuring <strong>client satisfaction, safety, and long term value</strong> through quality workmanship.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Maintain the highest standards of <strong>safety, compliance, and quality</strong> in line with South African regulations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Offer <strong>energy efficient and reliable solutions</strong> that benefit our clients and the environment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Build <strong>long lasting relationships</strong> based on trust, transparency, and exceptional service.
                  </span>
                </li>
              </ul>
            </div>

            <div className="group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl group-hover:text-secondary transition-colors">Our Vision</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Become the <strong>most trusted and sought after</strong> air conditioning and refrigeration company in Gauteng and beyond.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    <strong>Support communities</strong> by keeping homes comfortable and businesses running without interruption.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Lead in <strong>reliability, efficiency, and service excellence</strong> within the South African cooling industry.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Set the benchmark for <strong>honest, dependable cooling services</strong> that deliver exceptional value.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/technicians-servicing-air-conditioner.png"
                  alt="MainTech Appliance Repairs technicians servicing an air conditioning unit in Gauteng"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute bottom-4 left-4 rounded-xl bg-primary/95 backdrop-blur-sm px-4 py-3 shadow-xl ring-2 ring-white/20">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Users className="h-5 w-5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold">Skilled Technicians</p>
                    <p className="text-xs opacity-90">Expert Team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Our Team
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                A Team <span className="text-secondary">Committed to Excellence</span>
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We bring together a team of <strong>skilled, certified professionals</strong> committed to excellence. Our years of experience in air conditioning, refrigeration, and appliance repair let us provide tailored solutions for residential, commercial, and industrial clients across Gauteng.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {team.map((member) => (
                  <div key={member.role} className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-secondary/10 hover:border-secondary/30 border border-transparent transition-all">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 flex-shrink-0">
                      <member.icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium">{member.role}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
                  <Link href="/contact">
                    Work With Our Team
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10 transition-transform hover:scale-105">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Our Core Values
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              The Principles That <span className="text-secondary">Guide Everything We Do</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values shape every decision we make, every repair we deliver, and every relationship we build.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative rounded-2xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-sm font-bold text-secondary-foreground shadow-lg ring-2 ring-white/20">
                  {index + 1}
                </div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-110 transition-all">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-bold group-hover:text-secondary transition-colors">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Ready to Work with <span className="text-accent">MainTech Appliance Repairs?</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact us today to discuss your air conditioning, refrigeration, or appliance repair needs. We are here to provide expert guidance, transparent quotes, and lasting solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold transition-transform hover:scale-105">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Get Your Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold transition-transform hover:scale-105">
                <Link href="tel:+27656508504">Call: 065 650 8504</Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              Serving Gauteng • Licensed and Insured • Monday to Friday, 8:00 to 17:00
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
