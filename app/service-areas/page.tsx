import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallActions } from "@/components/site/call-actions"
import { CtaBand, Eyebrow, Framed, SectionHeading } from "@/components/site/blocks"
import { areas } from "@/content/areas"
import { areaMap, gautengMap, photos } from "@/content/media"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Areas We Cover in Gauteng",
  description: "MainTech repairs home appliances in Pretoria, Centurion, Midrand, Johannesburg, Sandton, Randburg and more of Gauteng. Find your area. Call 065 650 8504.",
  path: "/service-areas",
  image: gautengMap.src,
  imageAlt: gautengMap.alt,
  imageWidth: gautengMap.width,
  imageHeight: gautengMap.height,
})

export default function ServiceAreasPage() {
  return (
    <article>
      <header className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-4 md:pb-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs variant="onDark" currentPath="/service-areas" items={[{ label: "Areas" }]} />
            <Eyebrow onDark>Areas we cover</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">Appliance repairs across Gauteng</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-on-navy">
              Our technicians visit homes and businesses from Pretoria in the north to Johannesburg in the south, and from Roodepoort across to Bedfordview. Find your area below.
            </p>
            <CallActions className="mt-8" onDark />
          </div>
          <Framed picture={gautengMap} priority className="ring-white/10" />
        </div>
      </header>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <SectionHeading
            eyebrow="Find your area"
            title="Where we work"
            intro={`If your suburb is not listed, call ${site.phoneDisplay} and ask. We cover the province, not only these areas.`}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => {
              const map = areaMap(area.slug, area.name, true)
              return (
                <li key={area.slug} className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                  <Image src={map.src} alt={map.alt} width={map.width} height={map.height} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-navy">
                      <Link href={`/service-areas/${area.slug}`} className="after:absolute after:inset-0">
                        Appliance repairs in {area.name}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate">{area.suburbs.slice(0, 4).join(", ")} and nearby.</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                      View area
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Tell us where you are"
        text={`Call ${site.phoneDisplay} or WhatsApp us with your suburb, the appliance and the fault. We will tell you when we can come.`}
        picture={photos.callout_sm}
      />
    </article>
  )
}
