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
    <article>
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <p className="text-sm font-semibold uppercase tracking-wide text-ice">Services</p>
          <h1 className="max-w-[var(--measure)] text-3xl font-bold tracking-tight text-white md:text-4xl">Repair services in Gauteng</h1>
          <p className="mt-4 max-w-[var(--measure)] leading-7 text-on-navy">MainTech publishes a page for each repair. Open the one that matches the appliance. If you are unsure, call and describe the fault.</p>
        </div>
      </header>
      <section className="bg-surface">
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 py-section md:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug} className="rounded-lg border border-border bg-ice-tint p-4 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold text-navy">
                <Link className="text-blue hover:underline" href={`/${service.slug}`}>{service.nav}</Link>
              </h2>
              <p className="mt-2 leading-7 text-slate">{service.intro.split(". ")[0]}.</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
