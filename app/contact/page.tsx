import { ContactForm } from "@/components/contact-form"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Contact Us for a Repair",
  description: "Book a MainTech repair in Gauteng by phone, WhatsApp or the quote form. Name the appliance and the fault. We cover the province. Call 065 650 8504.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <article>
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-section">
          <p className="text-sm font-semibold uppercase tracking-wide text-ice">Contact</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">Contact MainTech</h1>
          <p className="mt-4 max-w-[var(--measure)] leading-7 text-on-navy">MainTech Appliance Repairs takes repair enquiries across Gauteng. Call, WhatsApp, email, or send the form. Say which appliance has failed and what it is doing.</p>
        </div>
      </header>
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-section lg:grid-cols-2">
          <div className="max-w-[var(--measure)]">
            <h2 className="text-2xl font-bold text-navy">Phone, WhatsApp and email</h2>
            <ul className="mt-6 space-y-3 leading-7 text-ink">
              <li><a className="font-semibold text-blue hover:underline" href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a></li>
              <li><a className="font-semibold text-blue hover:underline" href={site.whatsappHref}>WhatsApp {site.whatsappDisplay}</a></li>
              <li><a className="font-semibold text-blue hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li className="text-slate">Service area: {site.areaServed}</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-ice-tint p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </article>
  )
}
