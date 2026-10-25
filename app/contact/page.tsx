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
    <article className="mx-auto grid max-w-6xl gap-10 px-4 py-section lg:grid-cols-2">
      <div className="max-w-[var(--measure)]">
        <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Contact MainTech</h1>
        <p className="mt-4 leading-7">MainTech Appliance Repairs takes repair enquiries across Gauteng. Call, WhatsApp, email, or send the form. Say which appliance has failed and what it is doing.</p>
        <ul className="mt-6 space-y-3 leading-7">
          <li><a className="font-semibold text-primary underline" href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a></li>
          <li><a className="font-semibold text-primary underline" href={site.whatsappHref}>WhatsApp {site.whatsappDisplay}</a></li>
          <li><a className="font-semibold text-primary underline" href={`mailto:${site.email}`}>{site.email}</a></li>
          <li>Service area: {site.areaServed}</li>
        </ul>
      </div>
      <ContactForm />
    </article>
  )
}
