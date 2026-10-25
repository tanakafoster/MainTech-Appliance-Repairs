import { Mail, MapPin, Phone } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { Eyebrow, Framed } from "@/components/site/blocks"
import { photos } from "@/content/media"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Contact MainTech for a Repair",
  description: "Book a home appliance repair in Gauteng by phone, WhatsApp, email or the form. Tell us the appliance, the fault and your suburb. Call 065 650 8504.",
  path: "/contact",
  image: photos.callout.src,
  imageAlt: photos.callout.alt,
  imageWidth: photos.callout.width,
  imageHeight: photos.callout.height,
})

const channels = [
  { icon: Phone, label: "Call", value: site.phoneDisplay, href: `tel:${site.phoneTel}`, note: "Talk us through the fault." },
  { icon: WhatsAppIcon, label: "WhatsApp", value: site.whatsappDisplay, href: site.whatsappHref, note: "Send a photo or a short video." },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, note: "Good for business enquiries." },
]

const checklist = [
  "The appliance, and the make and model if you can see the sticker",
  "What it is doing, or not doing, and when it started",
  "Your suburb in Gauteng",
  "Anything you have already tried",
]

export default function ContactPage() {
  return (
    <article>
      <header className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-4 md:pb-16">
          <Breadcrumbs variant="onDark" currentPath="/contact" items={[{ label: "Contact" }]} />
          <Eyebrow onDark>Contact</Eyebrow>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">Book a repair with MainTech</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-on-navy">
            Call, WhatsApp, email or send the form. Tell us which appliance has stopped working and what it is doing, and we will tell you when we can come.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.label === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-full items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber text-navy">
                    <channel.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ice">{channel.label}</span>
                    <span className="block break-words text-lg font-bold text-white">{channel.value}</span>
                    <span className="mt-1 block text-sm text-on-navy">{channel.note}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-section lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">What to tell us</h2>
            <p className="mt-4 text-lg leading-8 text-ink">A few details help the technician arrive ready for your machine.</p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item, index) => (
                <li key={item} className="flex gap-3 leading-7 text-ink">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-amber">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <Framed picture={photos.callout_sm} className="mt-10" />
            <p className="mt-4 flex items-center gap-2 text-sm text-slate">
              <MapPin className="h-4 w-4 text-blue" aria-hidden="true" />
              We visit homes and businesses across {site.areaServed}.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-ice-tint p-6 shadow-[var(--shadow-card)] sm:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">Send us the details</h2>
            <p className="mt-2 leading-7 text-slate">We will get back to you on the number you give us.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
