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
    <article className="mx-auto max-w-6xl px-4 py-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumbs currentPath={`/service-areas/${area.slug}`} items={[{ label: "Areas", href: "/service-areas" }, { label: area.name }]} />
      <header className="grid items-center gap-8 md:grid-cols-2">
        <div className="max-w-[var(--measure)]">
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">{area.h1}</h1>
          <p className="mt-4 leading-7">{area.intro}</p>
          <CallActions className="mt-6" />
        </div>
        <Image src={area.image} alt={area.imageAlt} width={area.width} height={area.height} priority className="h-auto w-full rounded-lg object-cover" />
      </header>
      <section className="mt-section max-w-[var(--measure)]">
        <h2 className="text-2xl font-bold text-primary">This area</h2>
        <p className="mt-4 leading-7">{area.local}</p>
        <p className="mt-4 leading-7">Suburbs already named for {area.name}: {area.suburbs.join(", ")}.</p>
      </section>
      <section className="mt-section">
        <h2 className="text-2xl font-bold text-primary">Services available in {area.name}</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link className="inline-flex min-h-11 items-center text-primary underline" href={`/${service.slug}`}>
                {service.nav} in {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-section max-w-[var(--measure)]">
        <h2 className="text-2xl font-bold text-primary">How it works</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      <section className="mt-section">
        <h2 className="text-2xl font-bold text-primary">Nearby areas</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {nearby.map((item) => (
            <li key={item.slug}>
              <Link className="inline-flex min-h-11 items-center text-primary underline" href={`/service-areas/${item.slug}`}>
                Appliance repairs in {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-section max-w-[var(--measure)]">
        <h2 className="text-2xl font-bold text-primary">Questions about {area.name}</h2>
        <div className="mt-4 space-y-4">
          {area.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-1 leading-7 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-section rounded-lg bg-primary px-6 py-8 text-primary-foreground">
        <h2 className="text-2xl font-bold">Book a visit in {area.name}</h2>
        <p className="mt-3 max-w-[var(--measure)] leading-7">Call {site.name} and say you are in {area.name}. Describe the appliance and the fault.</p>
        <CallActions className="mt-6" onDark />
      </section>
    </article>
  )
}
