import Link from "next/link"
import { CheckCircle2, Eye, MessageSquareText, ShieldCheck, Wrench } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallActions } from "@/components/site/call-actions"
import { CompactServiceLink, CtaBand, Eyebrow, Framed, SectionHeading } from "@/components/site/blocks"
import { photos } from "@/content/media"
import { homeServices, moreServices } from "@/content/services"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "About MainTech Appliance Repairs",
  description: "Meet MainTech, the home appliance repair team for fridges, washing machines, dryers, dishwashers and ovens across Gauteng. Call 065 650 8504.",
  path: "/about",
  image: photos.team.src,
  imageAlt: photos.team.alt,
  imageWidth: photos.team.width,
  imageHeight: photos.team.height,
})

const values = [
  {
    icon: Eye,
    title: "We look before we quote",
    detail: "A warm fridge or a full washing machine can have several causes. We test the parts that match the symptom before we name a repair.",
  },
  {
    icon: MessageSquareText,
    title: "Plain words, no surprises",
    detail: "You hear what has failed and what the repair involves before any work starts. Nothing is fitted without your go ahead.",
  },
  {
    icon: Wrench,
    title: "Tested before we leave",
    detail: "After a repair we run the appliance so you can see it cooling, washing, drying or heating again.",
  },
  {
    icon: ShieldCheck,
    title: "Honest about old machines",
    detail: "If a repair does not make sense for an older appliance, we tell you, so you can decide on a replacement instead.",
  },
]

export default function AboutPage() {
  return (
    <article>
      <header className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-4 md:pb-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs variant="onDark" currentPath="/about" items={[{ label: "About" }]} />
            <Eyebrow onDark>About us</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">About MainTech Appliance Repairs</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-on-navy">
              We are an appliance repair team working across Gauteng. Our job is simple: get your fridge, washing machine, tumble dryer, dishwasher or stove working again, at your home, with no guesswork.
            </p>
            <CallActions className="mt-8" onDark />
          </div>
          <Framed picture={photos.team} priority className="ring-white/10" />
        </div>
      </header>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-section lg:grid-cols-2">
          <div className="max-w-[var(--measure)]">
            <SectionHeading eyebrow="What we do" title="Repairs where the appliance stands" />
            <p className="mt-4 text-lg leading-8 text-ink">
              When a household appliance fails, the whole house feels it. Food spoils, washing piles up and dinner waits. Most of these machines are too heavy to carry anywhere, so we come to you.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink">
              Our technicians repair fridges and freezers, washing machines, tumble dryers, dishwashers, ovens and electric stoves in homes across {site.areaServed}. We also look after display fridges and cold rooms for shops and restaurants, repair and service air conditioners, and connect appliances to water and power.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink">
              You can reach us by phone, WhatsApp or email. A photo of the model sticker or a short video of the fault helps us arrive ready for the job.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Home appliances</h2>
            <ul className="mt-4 grid gap-3">
              {homeServices.map((service) => (
                <CompactServiceLink key={service.slug} service={service} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ice-tint">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading eyebrow="How we work" title="What you can expect from us" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li key={value.title} className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-amber">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 leading-7 text-slate">{value.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-section md:grid-cols-2">
          <Framed picture={photos.callout} />
          <div>
            <SectionHeading eyebrow="Beyond the kitchen" title="Also on our list" />
            <ul className="mt-6 space-y-3">
              {moreServices.map((service) => (
                <li key={service.slug} className="flex gap-3 leading-7 text-ink">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  <Link href={`/${service.slug}`} className="font-semibold text-navy hover:text-blue hover:underline">
                    {service.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to the team"
        text={`Call ${site.phoneDisplay}, WhatsApp the same number, or email ${site.email}. Tell us the appliance and what it is doing.`}
        picture={photos.fridgeTechnician}
      />
    </article>
  )
}
