import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { CallActions } from "@/components/site/call-actions"
import { getServiceMedia } from "@/content/media"
import type { Faq, Picture, ServiceContent } from "@/content/types"
import { cn } from "@/lib/utils"

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

export function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={cn("text-sm font-bold uppercase tracking-[0.14em]", onDark ? "text-ice" : "text-blue")}>{children}</p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string
  title: string
  intro?: string
  className?: string
}) {
  return (
    <div className={cn("max-w-[var(--measure)]", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={cn("text-3xl font-extrabold tracking-tight text-navy md:text-4xl", eyebrow && "mt-2")}>{title}</h2>
      {intro && <p className="mt-4 text-lg leading-8 text-slate">{intro}</p>}
    </div>
  )
}

/** A picture in a rounded frame. */
export function Framed({
  picture,
  priority = false,
  className,
}: {
  picture: Picture
  priority?: boolean
  className?: string
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl bg-ice-tint shadow-[var(--shadow-lift)] ring-1 ring-navy/10", className)}>
      <Image
        src={picture.src}
        alt={picture.alt}
        width={picture.width}
        height={picture.height}
        priority={priority}
        className="aspect-[4/3] h-auto w-full object-cover"
      />
    </div>
  )
}

export function ServiceCard({ service, headingLevel = "h3" }: { service: ServiceContent; headingLevel?: "h2" | "h3" }) {
  const media = getServiceMedia(service.slug)
  const Heading = headingLevel
  return (
    <li className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
      <Image
        src={media.card.src}
        alt={media.card.alt}
        width={media.card.width}
        height={media.card.height}
        className="aspect-[4/3] h-auto w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <Heading className="text-lg font-bold text-navy">
          <Link href={`/${service.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {service.nav}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
          See common faults
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </li>
  )
}

export function CompactServiceLink({ service }: { service: ServiceContent }) {
  const media = getServiceMedia(service.slug)
  return (
    <li>
      <Link
        href={`/${service.slug}`}
        className="group flex min-h-11 items-center gap-4 rounded-xl border border-border bg-surface p-3 shadow-[var(--shadow-card)] transition hover:border-blue"
      >
        <Image
          src={media.card.src}
          alt=""
          width={media.card.width}
          height={media.card.height}
          className="h-16 w-20 shrink-0 rounded-lg object-cover"
        />
        <span>
          <span className="block font-semibold text-navy group-hover:text-blue">{service.nav}</span>
          <span className="mt-0.5 block text-sm leading-5 text-slate">{service.short}</span>
        </span>
      </Link>
    </li>
  )
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy hover:bg-ice-tint [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-blue transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="px-5 pb-5 leading-7 text-slate">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function StepList({ steps }: { steps: { title: string; detail: string }[] }) {
  return (
    <ol className={cn("grid gap-4 sm:grid-cols-2", steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-amber" aria-hidden="true">
            {index + 1}
          </span>
          <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
          <p className="mt-2 leading-7 text-slate">{step.detail}</p>
        </li>
      ))}
    </ol>
  )
}

export function CtaBand({
  title,
  text,
  picture,
}: {
  title: string
  text: string
  picture?: Picture
}) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-section">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-6 text-white shadow-[var(--shadow-lift)] sm:p-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow onDark>Book a repair</Eyebrow>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-[var(--measure)] text-lg leading-8 text-on-navy">{text}</p>
            <CallActions className="mt-8" onDark />
          </div>
          {picture && (
            <Image
              src={picture.src}
              alt={picture.alt}
              width={picture.width}
              height={picture.height}
              className="aspect-[4/3] h-auto w-full rounded-2xl object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export function ChipLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-navy transition hover:border-blue hover:text-blue"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
