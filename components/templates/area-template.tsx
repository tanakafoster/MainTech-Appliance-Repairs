import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallActions } from "@/components/site/call-actions"
import { getArea } from "@/content/areas"
import { services } from "@/content/services"
import type { AreaContent } from "@/content/types"
import { absoluteUrl, site } from "@/lib/site"

const steps = [
  "Contact us and name the appliance, the fault, and that you are in this area.",
  "We diagnose the fault on site. We tell you what we found before any repair starts.",
  "If you go ahead, we repair and test. If a repair does not make sense, we say so.",
]

export function AreaTemplate({ area }: { area: AreaContent }) {
  const nearby = area.nearby.map((slug) => getArea(slug))
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas", path: "/service-areas" },
    { name: area.name, path: `/service-areas/${area.slug}` },
  ]
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <header className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-section md:grid-cols-2">
          <div className="max-w-[var(--measure)]">
            <Breadcrumbs variant="onDark" currentPath={`/service-areas/${area.slug}`} items={[{ label: "Areas", href: "/service-areas" }, { label: area.name }]} />
            <p className="text-sm font-semibold uppercase tracking-wide text-ice">{area.name}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">{area.h1}</h1>
            <p className="mt-4 leading-7 text-on-navy">{area.intro}</p>
            <CallActions className="mt-6" onDark />
          </div>
          <Image src={area.image} alt={area.imageAlt} width={area.width} height={area.height} priority className="h-auto w-full rounded-lg object-cover" />
        </div>
      </header>
      <section className="bg-surface">
        <div className="mx-auto max-w-[var(--measure)] px-4 py-section">
          <h2 className="text-2xl font-bold text-navy">This area</h2>
          <p className="mt-4 leading-7 text-ink">{area.local}</p>
          <p className="mt-4 leading-7 text-ink">Suburbs already named for {area.name}: {area.suburbs.join(", ")}.</p>
        </div>
      </section>
      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <h2 className="text-2xl font-bold text-navy">Services available in {area.name}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="inline-flex min-h-11 items-center text-blue hover:underline" href={`/${service.slug}`}>
                  {service.nav} in {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-surface">
        <div className="mx-auto max-w-[var(--measure)] px-4 py-section">
          <h2 className="text-2xl font-bold text-navy">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-ink">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <h2 className="text-2xl font-bold text-navy">Nearby areas</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {nearby.map((item) => (
              <li key={item.slug}>
                <Link className="inline-flex min-h-11 items-center text-blue hover:underline" href={`/service-areas/${item.slug}`}>
                  Appliance repairs in {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-surface">
        <div className="mx-auto max-w-[var(--measure)] px-4 py-section">
          <h2 className="text-2xl font-bold text-navy">Questions about {area.name}</h2>
          <div className="mt-4 space-y-4">
            {area.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
                <p className="mt-1 leading-7 text-slate">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <p className="text-sm font-semibold uppercase tracking-wide text-ice">Book a visit</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Book a visit in {area.name}</h2>
          <p className="mt-3 max-w-[var(--measure)] leading-7 text-on-navy">Call {site.name} and say you are in {area.name}. Describe the appliance and the fault.</p>
          <CallActions className="mt-6" onDark />
        </div>
      </section>
    </article>
  )
}
