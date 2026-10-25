import Link from "next/link"
import { ArrowRight, Camera, CheckCircle2, ClipboardCheck, Home, MessageCircle, Search, Wrench } from "lucide-react"
import { CallActions } from "@/components/site/call-actions"
import {
  CompactServiceLink,
  CtaBand,
  Eyebrow,
  FaqList,
  Framed,
  JsonLd,
  SectionHeading,
  ServiceCard,
  faqJsonLd,
} from "@/components/site/blocks"
import { areas } from "@/content/areas"
import { gautengMap, photos } from "@/content/media"
import { homeServices, moreServices } from "@/content/services"
import { site } from "@/lib/site"

const promises = [
  { icon: Home, text: "We come to your home" },
  { icon: Search, text: "Fault found before any work" },
  { icon: Camera, text: "WhatsApp us a photo first" },
]

const steps = [
  {
    icon: MessageCircle,
    title: "Tell us what it is doing",
    detail: "Call or WhatsApp. Name the appliance, what it is doing and your suburb. A photo of the model sticker helps.",
  },
  {
    icon: Search,
    title: "We find the fault",
    detail: "A technician visits, tests the parts that match your symptom and finds what has actually failed.",
  },
  {
    icon: ClipboardCheck,
    title: "You decide",
    detail: "We explain the fault and the repair in plain words. Nothing is fitted until you say go ahead.",
  },
  {
    icon: Wrench,
    title: "Repaired and tested",
    detail: "We run the machine before we leave, so you can see it cooling, washing, drying or heating again.",
  },
]

const visitPoints = [
  "No need to carry a washing machine or stove anywhere. The repair happens where the appliance stands.",
  "We check the plug point, the water supply or the drain that feeds the machine, not only the machine itself.",
  "If a repair does not make sense for an older appliance, we tell you plainly instead of selling you parts.",
]

const faqs = [
  {
    question: "Which appliances do you repair?",
    answer:
      "Fridges and freezers, washing machines, tumble dryers, dishwashers, ovens and electric stoves. We also repair commercial display fridges, cold rooms and air conditioners, and connect appliances to water and power.",
  },
  {
    question: "Do you come to my house?",
    answer:
      "Yes. A technician visits your home or business in Gauteng and repairs the appliance where it stands, so you do not need to move a heavy machine.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover Gauteng, including Pretoria, Centurion, Midrand, Johannesburg, Sandton, Fourways, Randburg, Rosebank, Morningside, Bedfordview and Roodepoort. If your suburb is not listed, call and ask.",
  },
  {
    question: "What should I tell you when I call?",
    answer:
      "The appliance, the make and model if you can see the sticker, what it is doing, and how long it has been happening. Mention anything you have already tried.",
  },
  {
    question: "Will you tell me if it is not worth fixing?",
    answer:
      "Yes. We explain the fault and the repair before any work starts. If an older machine needs a repair that does not make sense, we say so.",
  },
]

export function HomeView() {
  const symptomGroups = homeServices
    .filter((service) => service.slug !== "appliance-repairs")
    .map((service) => ({ service, faults: service.faults.slice(0, 3) }))

  return (
    <div>
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow onDark>Repairs at your home</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Home appliance repairs in Gauteng
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-on-navy">
              Fridge not cooling? Washing machine full of water? Stove plate gone cold? A MainTech technician comes to your home, finds the fault and explains it before any work starts.
            </p>
            <CallActions className="mt-8" onDark />
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {promises.map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm font-semibold text-white">
                  <item.icon className="h-5 w-5 shrink-0 text-amber" aria-hidden="true" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Framed picture={photos.fridgeTechnician} priority className="ring-white/10" />
            <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl bg-surface p-4 text-ink shadow-[var(--shadow-lift)] sm:left-auto sm:right-6 sm:max-w-xs">
              <CheckCircle2 className="h-8 w-8 shrink-0 text-success" aria-hidden="true" />
              <p className="text-sm leading-5">
                <span className="block font-bold text-navy">Repaired where it stands</span>
                On site visits across {site.areaServed}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading
            eyebrow="What needs fixing?"
            title="Pick your appliance"
            intro="Each appliance has its own page with the faults we see most, what the visit involves and what to check before we arrive."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading eyebrow="How it works" title="From breakdown to working again" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-amber">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold text-slate">Step {index + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-section md:grid-cols-2">
          <Framed picture={photos.callout} />
          <div>
            <SectionHeading eyebrow="On site repairs" title="We bring the workshop to your kitchen" />
            <ul className="mt-6 space-y-4">
              {visitPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-ink">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-flex min-h-11 items-center gap-1 font-semibold text-blue hover:underline">
              More about how we work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading
            eyebrow="Common problems"
            title="Sound familiar?"
            intro="A few of the faults people call us about. Tap one to read what usually causes it and what the repair involves."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {symptomGroups.map(({ service, faults }) => (
              <li key={service.slug} className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
                <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-blue">{service.nav}</h3>
                <ul className="mt-3 space-y-1">
                  {faults.map((fault) => (
                    <li key={fault.name}>
                      <Link
                        href={`/${service.slug}`}
                        className="group flex min-h-11 items-center justify-between gap-2 rounded-lg font-semibold text-navy hover:text-blue"
                      >
                        {fault.name}
                        <ArrowRight className="h-4 w-4 shrink-0 text-blue transition group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading
            eyebrow="Also from MainTech"
            title="Shops, offices and aircons too"
            intro="The same team repairs commercial fridges, cold rooms and air conditioners, and connects appliances to water and power."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {moreServices.map((service) => (
              <CompactServiceLink key={service.slug} service={service} />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-section md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Areas we cover"
              title="Across Gauteng"
              intro="From Pretoria and Centurion through Midrand to Johannesburg, Sandton and the West Rand. If your suburb is not listed, call and ask."
            />
            <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex min-h-11 w-full items-center rounded-lg border border-border bg-surface px-3 text-sm font-semibold text-navy hover:border-blue hover:text-blue"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Framed picture={gautengMap} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-section lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Questions" title="Before you book" intro={`Still unsure? Call ${site.phoneDisplay} and describe the fault in your own words.`} />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand
        title="Appliance broken? Let us take a look."
        text={`Call ${site.phoneDisplay} or send a WhatsApp with the appliance, the fault and your suburb. We will tell you when we can come.`}
        picture={photos.team_sm}
      />
    </div>
  )
}
