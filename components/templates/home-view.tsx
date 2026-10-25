import Image from "next/image"
import Link from "next/link"
import { CallActions } from "@/components/site/call-actions"
import { areas } from "@/content/areas"
import { services } from "@/content/services"
import { site } from "@/lib/site"

const problems = [
  "Fridge not cooling, or a freezer icing up.",
  "Washing machine not draining, not spinning, or leaking.",
  "Tumble dryer not heating or not tumbling.",
  "Dishwasher not cleaning or standing full of water.",
  "Stove plate not heating, or an oven that stays cold.",
  "Display fridge warm, or a cold room that will not hold temperature.",
  "Aircon not cooling, or water leaking indoors.",
]

const faqs = [
  {
    question: "Can you fix my appliance?",
    answer: "Tell us the machine and the fault. We repair fridges, freezers, washing machines, tumble dryers, dishwashers, ovens, commercial refrigeration, cold rooms and air conditioners. We will say if a repair does not make sense.",
  },
  {
    question: "Do you cover my area?",
    answer: "We cover Gauteng. Open the area pages for Pretoria, Johannesburg, Midrand, Sandton, Centurion, Fourways, Randburg, Bedfordview, Rosebank, Roodepoort and Morningside.",
  },
  {
    question: "How do I get you out?",
    answer: `Call ${site.phoneDisplay}, send a WhatsApp, or use the contact form. Say what the appliance is doing and where you are.`,
  },
  {
    question: "Do you publish prices or a time promise?",
    answer: "No. This site does not list prices, call-out fees, or a promised arrival time. We explain the fault before repair work starts.",
  },
]

export function HomeView() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-section md:grid-cols-2">
          <div className="max-w-[var(--measure)]">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Appliance repairs in Gauteng</h1>
            <p className="mt-4 text-lg leading-7">MainTech fixes fridges, laundry machines, ovens, cold rooms and aircons, and tells you the fault before any work starts.</p>
            <CallActions className="mt-6" onDark />
          </div>
          <Image src="/technicians-servicing-air-conditioner.png" alt="Two technicians working on an outdoor air conditioning unit" width={1024} height={768} priority className="h-auto w-full rounded-lg object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-section">
        <h2 className="text-2xl font-bold text-primary">Services</h2>
        <p className="mt-3 max-w-[var(--measure)] leading-7">Every repair we publish has its own page. Start with the machine that has failed. If you are not sure, call and name it. A household fridge is not a shop display fridge, and a cold room is not a freezer in a kitchen. Laundry machines, ovens and aircons are separate jobs as well. Pick the page that matches what has stopped working, then tell us the symptom in your own words.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-semibold">
                <Link className="underline" href={`/${service.slug}`}>{service.nav}</Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.intro.split(". ")[0]}.</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <h2 className="text-2xl font-bold text-primary">How it works</h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            <li className="rounded-lg border border-border bg-card p-4"><h3 className="font-semibold">1. Contact us</h3><p className="mt-2 leading-7">Call, WhatsApp, or send the form. Say what is wrong and where you are in Gauteng.</p></li>
            <li className="rounded-lg border border-border bg-card p-4"><h3 className="font-semibold">2. We diagnose</h3><p className="mt-2 leading-7">The technician checks the parts that match the symptom and explains the fault before any repair starts.</p></li>
            <li className="rounded-lg border border-border bg-card p-4"><h3 className="font-semibold">3. We repair and test</h3><p className="mt-2 leading-7">If you go ahead, we do the repair and test it. If a repair does not make sense, we say so.</p></li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-section">
        <h2 className="text-2xl font-bold text-primary">Common problems we fix</h2>
        <ul className="mt-4 max-w-[var(--measure)] list-disc space-y-2 pl-5 leading-7">
          {problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
        <p className="mt-4 max-w-[var(--measure)] leading-7">A warm fridge is not the same job as a washer that will not drain, and a household fridge is not a walk-in cold room. Use the page that matches the machine. Commercial refrigeration stays separate from domestic fridge repairs. Aircon repairs, servicing and installation stay on the aircon page. Maintenance plans are separate again: one for air conditioners and one for a wider appliance list.</p>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <h2 className="text-2xl font-bold text-primary">Areas we cover</h2>
          <p className="mt-3 max-w-[var(--measure)] leading-7">We cover Gauteng. These are the area pages already on the site. If your suburb is not named, call and ask.</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link className="inline-flex min-h-11 items-center text-primary underline" href={`/service-areas/${area.slug}`}>Appliance repairs in {area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-section">
        <h2 className="text-2xl font-bold text-primary">Questions before you book</h2>
        <div className="mt-4 max-w-[var(--measure)] space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-1 leading-7 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <h2 className="text-2xl font-bold">Talk to MainTech</h2>
          <p className="mt-3 max-w-[var(--measure)] leading-7">Call {site.phoneDisplay} or WhatsApp the same number. If you prefer to write, use the contact form. Include the appliance, the fault, and your area.</p>
          <CallActions className="mt-6" onDark />
        </div>
      </section>
    </div>
  )
}
