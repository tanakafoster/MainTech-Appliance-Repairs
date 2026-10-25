import Link from "next/link"
import { site } from "@/lib/site"

export default function NotFound() {
  return (
    <article className="mx-auto max-w-[var(--measure)] px-4 py-section">
      <h1 className="text-3xl font-bold tracking-tight text-primary">Page not found</h1>
      <p className="mt-4 leading-7">That page is not on the {site.name} site. Try the home page, the service list, or the contact page.</p>
      <ul className="mt-6 space-y-2">
        <li><Link className="inline-flex min-h-11 items-center text-primary underline" href="/">Home</Link></li>
        <li><Link className="inline-flex min-h-11 items-center text-primary underline" href="/services">Services</Link></li>
        <li><Link className="inline-flex min-h-11 items-center text-primary underline" href="/contact">Contact</Link></li>
      </ul>
    </article>
  )
}
