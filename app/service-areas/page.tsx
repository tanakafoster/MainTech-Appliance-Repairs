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
    <article className="mx-auto max-w-6xl px-4 py-section">
      <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Areas we cover in Gauteng</h1>
      <p className="mt-4 max-w-[var(--measure)] leading-7">MainTech repairs appliances across Gauteng. These pages are the areas already published. If your suburb is not listed, call and ask.</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link className="inline-flex min-h-11 items-center text-primary underline" href={`/service-areas/${area.slug}`}>
              Appliance repairs in {area.name}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
