import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallActions } from "@/components/site/call-actions"
import { areas } from "@/content/areas"
import { getService } from "@/content/services"
import type { ServiceContent } from "@/content/types"
import { absoluteUrl, site } from "@/lib/site"

export function ServiceTemplate({ service }: { service: ServiceContent }) {
  const related = service.related.map((slug) => getService(slug))
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.nav, path: `/${service.slug}` },
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
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    url: absoluteUrl(`/${service.slug}`),
    areaServed: site.areaServed,
    provider: { "@id": `${site.url}/#business` },
  }
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <article className="mx-auto max-w-6xl px-4 py-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumbs currentPath={`/${service.slug}`} items={[{ label: "Services", href: "/services" }, { label: service.nav }]} />
      <header className="grid items-center gap-8 md:grid-cols-2">
        <div className="max-w-[var(--measure)]">
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">{service.h1}</h1>
          <p className="mt-4 text-base leading-7 text-foreground">{service.intro}</p>
          <CallActions className="mt-6" />
        </div>
        <Image src={service.image} alt={service.imageAlt} width={service.width} height={service.height} priority className="h-auto w-full rounded-lg object-cover" />
      </header>

      <section className="mt-section max-w-[var(--measure)]">
        <h2 className="text-2xl font-bold text-primary">Signs you need a repair</h2>
        <div className="mt-4 space-y-4">
          {service.faults.map((fault) => (
            <div key={fault.name}>
              <h3 className="text-lg font-semibold">{fault.name}</h3>
              <p className="mt-1 leading-7 text-muted-foreground">{fault.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-section max-w-[var(--measure)]">
        <h2 className="text-2xl font-bold text-primary">What our technician does</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7">
          {service.work.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-section max-w-[var(--measure)]">
        <h2 className="text-2xl font-bold text-primary">Brands we work on</h2>
        {service.brands.length > 0 ? (
          <p className="mt-4 leading-7">This site already names {service.brands.join(", ")}. If yours is not in that list, tell us the make when you call and we will say if we can take the job.</p>
        ) : (
          <p className="mt-4 leading-7">This page does not name brands, because the old site did not publish a list for this work. Tell us the make when you call.</p>
        )}
      </section>

      {service.sections.map((section) => (
        <section key={section.heading} className="mt-section max-w-[var(--measure)]">
          <h2 className="text-2xl font-bold text-primary">{section.heading}</h2>
          <p className="mt-4 leading-7">{section.body}</p>
        </section>
      ))}

      <section className="mt-section">
        <h2 className="text-2xl font-bold text-primary">Areas we cover</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link className="inline-flex min-h-11 items-center text-primary underline" href={`/service-areas/${area.slug}`}>
                Appliance repairs in {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-section max-w-[var(--measure)]">
        <h2 className="text-2xl font-bold text-primary">Questions people ask</h2>
        <div className="mt-4 space-y-4">
          {service.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-1 leading-7 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-section">
        <h2 className="text-2xl font-bold text-primary">Related services</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {related.map((item) => (
            <li key={item.slug}>
              <Link className="inline-flex min-h-11 items-center text-primary underline" href={`/${item.slug}`}>
                {item.nav}
              </Link>
            </li>
          ))}
          <li>
            <Link className="inline-flex min-h-11 items-center text-primary underline" href="/services">
              All repair services
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-section rounded-lg bg-primary px-6 py-8 text-primary-foreground">
        <h2 className="text-2xl font-bold">Book this repair</h2>
        <p className="mt-3 max-w-[var(--measure)] leading-7">Call MainTech or send a WhatsApp with the fault. You can also use the contact form if you would rather write it down.</p>
        <CallActions className="mt-6" onDark />
      </section>
    </article>
  )
}
