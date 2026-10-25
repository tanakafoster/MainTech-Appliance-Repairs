import { MapPin } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallActions } from "@/components/site/call-actions"
import {
  ChipLinks,
  CompactServiceLink,
  CtaBand,
  Eyebrow,
  FaqList,
  Framed,
  JsonLd,
  SectionHeading,
  ServiceCard,
  StepList,
  faqJsonLd,
} from "@/components/site/blocks"
import { getArea } from "@/content/areas"
import { areaMap, photos } from "@/content/media"
import { homeServices, moreServices } from "@/content/services"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export function areaMetadata(slug: string) {
  const area = getArea(slug)
  const map = areaMap(area.slug, area.name)
  return pageMetadata({
    title: area.title,
    description: area.metaDescription,
    path: `/service-areas/${slug}`,
    image: map.src,
    imageAlt: map.alt,
    imageWidth: map.width,
    imageHeight: map.height,
  })
}

export function AreaTemplate({ slug }: { slug: string }) {
  const area = getArea(slug)
  const nearby = area.nearby.map((item) => getArea(item))
  const steps = [
    {
      title: "Call or WhatsApp",
      detail: `Tell us the appliance, what it is doing and that you are in ${area.name}. Add the suburb and the make if you can.`,
    },
    {
      title: "We find the fault",
      detail: "A technician comes to you and tests the parts that match the symptom, then explains what has failed.",
    },
    {
      title: "Repair and test",
      detail: "With your go ahead we repair the appliance and run it before we leave. If a repair is not worth it, we say so.",
    },
  ]

  return (
    <article>
      <JsonLd data={faqJsonLd(area.faqs)} />

      <header className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-4 md:pb-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs
              variant="onDark"
              currentPath={`/service-areas/${area.slug}`}
              items={[{ label: "Areas", href: "/service-areas" }, { label: area.name }]}
            />
            <Eyebrow onDark>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {area.name}, Gauteng
              </span>
            </Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">{area.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-on-navy">{area.lead}</p>
            <CallActions className="mt-8" onDark />
          </div>
          <Framed picture={areaMap(area.slug, area.name)} priority className="ring-white/10" />
        </div>
      </header>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-section lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-[var(--measure)]">
            <SectionHeading eyebrow={`Repairs in ${area.name}`} title={`Getting your appliance fixed in ${area.name}`} />
            {area.local.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-8 text-ink">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="rounded-2xl border border-border bg-ice-tint p-6 lg:self-start">
            <h2 className="text-lg font-bold text-navy">Suburbs we visit around {area.name}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {area.suburbs.map((suburb) => (
                <li key={suburb} className="rounded-full bg-surface px-3 py-1.5 text-sm font-semibold text-navy ring-1 ring-border">
                  {suburb}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate">Not on the list? Call {site.phoneDisplay} and ask.</p>
          </aside>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading
            eyebrow="Home appliances"
            title={`What we repair in ${area.name}`}
            intro="Pick the appliance to see the common faults and what the visit involves."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </ul>
          <h3 className="mt-14 text-xl font-bold text-navy">Also available in {area.name}</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {moreServices.map((service) => (
              <CompactServiceLink key={service.slug} service={service} />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading eyebrow="How it works" title="Three steps to working again" />
          <div className="mt-10">
            <StepList steps={steps} />
          </div>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-section lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Questions" title={`Repairs in ${area.name}`} />
            <h3 className="mt-10 text-lg font-bold text-navy">Nearby areas</h3>
            <div className="mt-4">
              <ChipLinks links={nearby.map((item) => ({ href: `/service-areas/${item.slug}`, label: item.name }))} />
            </div>
          </div>
          <FaqList faqs={area.faqs} />
        </div>
      </section>

      <CtaBand
        title={`Book a repair in ${area.name}`}
        text={`Call ${site.phoneDisplay} or WhatsApp us. Say you are in ${area.name}, name the appliance and describe the fault.`}
        picture={photos.callout_sm}
      />
    </article>
  )
}
