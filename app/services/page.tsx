import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallActions } from "@/components/site/call-actions"
import { CtaBand, Eyebrow, Framed, SectionHeading, ServiceCard } from "@/components/site/blocks"
import { illustrations, photos } from "@/content/media"
import { homeServices, moreServices } from "@/content/services"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Appliance Repair Services in Gauteng",
  description: "Fridge, washing machine, tumble dryer, dishwasher and oven repairs at your home in Gauteng, plus commercial fridges and aircons. Call 065 650 8504.",
  path: "/services",
  image: illustrations.appliances.src,
  imageAlt: illustrations.appliances.alt,
  imageWidth: illustrations.appliances.width,
  imageHeight: illustrations.appliances.height,
})

export default function ServicesPage() {
  return (
    <article>
      <header className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-4 md:pb-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs variant="onDark" currentPath="/services" items={[{ label: "Services" }]} />
            <Eyebrow onDark>Our services</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">Appliance repair services in Gauteng</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-on-navy">
              Household appliances come first: fridges, washing machines, tumble dryers, dishwashers, ovens and stoves, repaired at your home. The same team also looks after commercial fridges, cold rooms and aircons.
            </p>
            <CallActions className="mt-8" onDark />
          </div>
          <Framed picture={illustrations.appliances} priority className="ring-white/10" />
        </div>
      </header>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading
            eyebrow="Home appliances"
            title="Repairs at your home"
            intro="Pick the appliance that has stopped working. Each page lists the common faults, how the visit works and what to check before we arrive."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.slug} service={service} headingLevel="h3" />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading
            eyebrow="Also from MainTech"
            title="Businesses, aircons and connections"
            intro="Shop fridges and cold rooms, aircon repairs and maintenance, urgent breakdowns, and the water and power connections your appliances need."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {moreServices.map((service) => (
              <ServiceCard key={service.slug} service={service} headingLevel="h3" />
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure which one you need?"
        text={`Call ${site.phoneDisplay} or WhatsApp us and describe what the appliance is doing. We will point you in the right direction.`}
        picture={photos.team_sm}
      />
    </article>
  )
}
