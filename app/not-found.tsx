import Link from "next/link"
import { site } from "@/lib/site"

export default function NotFound() {
  return (
    <article>
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-[var(--measure)] px-4 py-section">
          <h1 className="text-3xl font-bold tracking-tight text-white">Page not found</h1>
          <p className="mt-4 leading-7 text-on-navy">That page is not on the {site.name} site. Try the home page, the service list, or the contact page.</p>
        </div>
      </header>
      <section className="bg-surface">
        <ul className="mx-auto max-w-[var(--measure)] space-y-2 px-4 py-section">
          <li><Link className="inline-flex min-h-11 items-center text-blue hover:underline" href="/">Home</Link></li>
          <li><Link className="inline-flex min-h-11 items-center text-blue hover:underline" href="/services">Services</Link></li>
          <li><Link className="inline-flex min-h-11 items-center text-blue hover:underline" href="/contact">Contact</Link></li>
        </ul>
      </section>
    </article>
  )
}
