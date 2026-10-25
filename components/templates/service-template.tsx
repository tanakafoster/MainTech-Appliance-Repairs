import Image from "next/image"
import Link from "next/link"
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallActions } from "@/components/site/call-actions"
import {
  ChipLinks,
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
import { areas } from "@/content/areas"
import { getServiceMedia, photos } from "@/content/media"
import { getService } from "@/content/services"
import { pageMetadata } from "@/lib/seo"
import { absoluteUrl, site } from "@/lib/site"

export function serviceMetadata(slug: string) {
  const service = getService(slug)
  const media = getServiceMedia(slug)
  return pageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/${slug}`,
    image: media.hero.src,
    imageAlt: media.hero.alt,
    imageWidth: media.hero.width,
    imageHeight: media.hero.height,
  })
}

export function ServiceTemplate({ slug }: { slug: string }) {
  const service = getService(slug)
  const media = getServiceMedia(slug)
  const related = service.related.map((item) => getService(item))
  const isHome = service.group === "home"
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    serviceType: service.nav,
    description: service.metaDescription,
    url: absoluteUrl(`/${service.slug}`),
    image: absoluteUrl(media.hero.src),
    areaServed: { "@type": "AdministrativeArea", name: site.areaServed },
    provider: { "@id": `${site.url}/#business` },
  }

  return (
    <article>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <header className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-4 md:pb-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs
              variant="onDark"
              currentPath={`/${service.slug}`}
              items={[{ label: "Services", href: "/services" }, { label: service.nav }]}
            />
            <Eyebrow onDark>{service.eyebrow}</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">{service.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-on-navy">{service.lead}</p>
            <CallActions className="mt-8" onDark />
          </div>
          <Framed picture={media.hero} priority className="ring-white/10" />
        </div>
      </header>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading eyebrow="Common faults" title="What is it doing?" intro="Find the symptom that matches yours. Each one points to a different set of parts, which is why we test before we name a repair." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.faults.map((fault) => (
              <li key={fault.name} className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ice-tint text-blue">
                    <AlertCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">{fault.name}</h3>
                </div>
                <p className="mt-3 leading-7 text-slate">{fault.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading eyebrow="The visit" title="How the repair works" />
          <div className="mt-10">
            <StepList steps={service.work} />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-section lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            {service.sections.map((section) => (
              <div key={section.heading} className="max-w-[var(--measure)]">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-8 text-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
            {service.brands.length > 0 && (
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-navy md:text-3xl">Brands we work on</h2>
                <p className="mt-4 text-lg leading-8 text-ink">Including the makes below. If yours is not listed, tell us the make and model when you call.</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.brands.map((brand) => (
                    <li key={brand} className="rounded-full border border-border bg-ice-tint px-4 py-2 text-sm font-semibold text-navy">
                      {brand}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {media.photo && (
              <figure>
                <Image
                  src={media.photo.src}
                  alt={media.photo.alt}
                  width={media.photo.width}
                  height={media.photo.height}
                  className="aspect-[4/3] h-auto w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                />
                <figcaption className="mt-2 text-sm text-slate">{media.photo.caption}</figcaption>
              </figure>
            )}
            <div className="rounded-2xl border border-border bg-ice-tint p-6">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-hover" aria-hidden="true" />
                <h2 className="text-lg font-bold text-navy">Before we arrive</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {service.tips.map((tip) => (
                  <li key={tip} className="flex gap-3 leading-7 text-ink">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-section lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Questions" title="People also ask" />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading eyebrow="Related" title="You might also need" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </ul>
          <Link href="/services" className="mt-8 inline-flex min-h-11 items-center font-semibold text-blue hover:underline">
            See all services
          </Link>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading eyebrow="Areas" title={`${service.nav} across Gauteng`} intro="We visit homes and businesses in these areas and the suburbs around them." />
          <div className="mt-8">
            <ChipLinks links={areas.map((area) => ({ href: `/service-areas/${area.slug}`, label: area.name }))} />
          </div>
        </div>
      </section>

      <CtaBand
        title={isHome ? "Ready to book a repair?" : "Talk to us about the job"}
        text={`Call ${site.phoneDisplay} or WhatsApp us with the make, the model and what it is doing. We will tell you when we can come.`}
        picture={isHome ? photos.team_sm : photos.callout_sm}
      />
    </article>
  )
}
