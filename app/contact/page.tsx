import { pageMetadata } from "@/lib/seo"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, CheckCircle, Award, Zap, Shield } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Contact Us for a Repair Quote in Gauteng",
  description: "Contact MainTech Appliance Repairs for air conditioning, refrigeration, cold rooms, or appliance repairs in Gauteng. Free consultation and same day quotes. Call 065 650 8504.",
  path: "/contact",
  keywords: "contact MainTech Appliance Repairs, air conditioning quote Gauteng, refrigeration repair Pretoria, appliance repair Johannesburg, Midrand cooling company, emergency callout",
  image: "/og-image.png",
  imageAlt: "Contact MainTech Appliance Repairs",
})

const contactInfo = [
  {
    icon: MapPin,
    title: "Coverage Area",
    details: ["Gauteng, South Africa", "Serving Pretoria & Johannesburg"],
    href: "https://www.google.com/maps?q=MainTech+Appliance+Repairs+Gauteng+South+Africa",
    highlight: true,
  },
  {
    icon: Phone,
    title: "Phone and WhatsApp",
    details: [site.phoneDisplay],
    href: `tel:${site.phoneTel}`,
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    details: [site.email],
    href: `mailto:${site.email}`,
    highlight: false,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday to Friday, 8:00 to 17:00"],
    highlight: false,
  },
]

const serviceAreas = [
  { name: "Pretoria", featured: true },
  { name: "Johannesburg", featured: true },
  { name: "Midrand", featured: true },
  { name: "Sandton", featured: false },
  { name: "Centurion", featured: false },
  { name: "Fourways", featured: false },
  { name: "Randburg", featured: false },
  { name: "Bedfordview", featured: false },
  { name: "Rosebank", featured: false },
  { name: "Roodepoort", featured: false },
]

const benefits = [
  {
    icon: CheckCircle,
    text: "Call or email for a quote",
  },
  {
    icon: Shield,
    text: "Quote before the repair starts",
  },
  {
    icon: Award,
    text: "Homes and businesses in Gauteng",
  },
  {
    icon: Zap,
    text: "Monday to Friday, 8:00 to 17:00",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "Contact Us" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Phone className="h-4 w-4 text-accent animate-pulse" aria-hidden="true" />
              <span>Available weekday hours for Emergencies</span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Get Your <span className="text-accent">Free Quote</span> Today
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
              For air conditioning, refrigeration, cold rooms, or appliance repairs in <strong className="text-white">Gauteng</strong>,
              contact <strong className="text-white">MainTech Appliance Repairs</strong> today. Our expert team provides free consultations, same day quotes, and honest advice
              tailored to your needs.
            </p>

            {/* Quick Benefits */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2 text-sm text-white/90">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                    <benefit.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-16 lg:py-24" itemScope itemType="https://schema.org/ContactPage">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Request Quote
              </span>
              <h2 className="mb-2 text-3xl font-bold">Get Your Free Quote in 24 Hours</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Fill out the form below with your details. Our team will review your requirements and get back to you within 24 hours with a clear, no obligation quote and expert recommendations.
              </p>
              
              <ContactForm />

              {/* Trust Indicators Below Form */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">No Hidden Fees</p>
                    <p className="text-xs text-muted-foreground">Transparent pricing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Quote first</p>
                    <p className="text-xs text-muted-foreground">Certified Technicians</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Contact Details
              </span>
              <h2 className="mb-2 text-3xl font-bold">Get in Touch With Us</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Have questions or need urgent assistance? Reach out to us through any of the channels below. We&apos;re here to help with immediate support.
              </p>

              <div className="mb-8 space-y-4" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <meta itemProp="contactType" content="Customer Service" />
                <meta itemProp="areaServed" content="Gauteng, South Africa" />
                <meta itemProp="availableLanguage" content="English" />
                
                {contactInfo.map((info) => (
                  <div 
                    key={info.title} 
                    className={`group flex items-start gap-4 p-4 rounded-xl transition-all ${
                      info.highlight 
                        ? 'bg-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-lg' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                      info.highlight ? 'bg-secondary text-secondary-foreground' : 'bg-secondary/10 text-secondary'
                    } group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      {info.details.map((detail, index) =>
                        info.href ? (
                          <a 
                            key={detail} 
                            href={info.href} 
                            className={`block transition-colors ${
                              info.highlight 
                                ? 'text-secondary font-semibold hover:text-secondary/80' 
                                : 'text-muted-foreground hover:text-secondary'
                            }`}
                            target={info.icon === MapPin ? "_blank" : undefined}
                            rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                            itemProp={info.icon === Phone ? "telephone" : info.icon === Mail ? "email" : undefined}
                          >
                            {detail}
                            {index === 1 && info.title === "Business Hours" && (
                              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                                <Zap className="h-3 w-3" aria-hidden="true" /> URGENT
                              </span>
                            )}
                          </a>
                        ) : (
                          <p key={detail} className="text-muted-foreground">
                            {detail}
                            {index === 1 && info.title === "Business Hours" && (
                              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                                <Zap className="h-3 w-3" aria-hidden="true" /> EMERGENCY
                              </span>
                            )}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-muted to-muted/50">
                <h3 className="mb-4 font-bold flex items-center gap-2">
                  <span>Connect With Us</span>
                </h3>
                <div className="flex gap-3">
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all hover:bg-[#25D366] hover:text-white hover:scale-110 hover:shadow-lg"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Follow us for project updates, tips, and special offers
                </p>
              </div>

              {/* Service Areas - Enhanced */}
              <div className="rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 p-6 border border-border">
                <h3 className="mb-4 font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" aria-hidden="true" />
                  We Serve All of Gauteng
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {serviceAreas.map((area) => (
                    <span 
                      key={area.name} 
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                        area.featured
                          ? 'bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:scale-105'
                          : 'bg-card hover:bg-secondary/10 hover:scale-105'
                      }`}
                    >
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {area.name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Don&apos;t see your area? <a href="tel:+27656508504" className="text-secondary font-semibold hover:underline">Call us</a>, we cover the entire province!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
