import Link from "next/link"
import { services } from "@/content/services"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Our Repair Services in Gauteng",
  description: "See every MainTech repair page: fridges, laundry, ovens, cold rooms and aircons in Gauteng. Pick the machine that failed. Call 065 650 8504.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-section">
      <h1 className="max-w-[var(--measure)] text-3xl font-bold tracking-tight text-primary md:text-4xl">Repair services in Gauteng</h1>
      <p className="mt-4 max-w-[var(--measure)] leading-7">MainTech publishes a page for each repair. Open the one that matches the appliance. If you are unsure, call and describe the fault.</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug} className="rounded-lg border border-border p-4 shadow-[var(--shadow-card)]">
            <h2 className="text-xl font-semibold">
              <Link className="underline" href={`/${service.slug}`}>{service.nav}</Link>
            </h2>
            <p className="mt-2 leading-7 text-muted-foreground">{service.intro.split(". ")[0]}.</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
