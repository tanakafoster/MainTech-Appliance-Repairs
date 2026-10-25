import Link from "next/link"
import { areas } from "@/content/areas"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Repair Areas in Gauteng",
  description: "MainTech covers Gauteng, with pages for Pretoria, Johannesburg, Midrand and Sandton. Find your area and book a visit today. Call 065 650 8504.",
  path: "/service-areas",
})

export default function ServiceAreasPage() {
  return (
    <article>
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <p className="text-sm font-semibold uppercase tracking-wide text-ice">Areas</p>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Areas we cover in Gauteng</h1>
          <p className="mt-4 max-w-[var(--measure)] leading-7 text-on-navy">MainTech repairs appliances across Gauteng. These pages are the areas already published. If your suburb is not listed, call and ask.</p>
        </div>
      </header>
      <section className="bg-surface">
        <ul className="mx-auto grid max-w-6xl gap-3 px-4 py-section sm:grid-cols-2 md:grid-cols-3">
          {areas.map((area) => (
            <li key={area.slug} className="rounded-lg border border-border bg-ice-tint">
              <Link className="inline-flex min-h-11 items-center px-4 text-blue hover:underline" href={`/service-areas/${area.slug}`}>
                Appliance repairs in {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
