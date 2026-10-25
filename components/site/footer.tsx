import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { Logo } from "@/components/site/header"
import { areas } from "@/content/areas"
import { homeServices, moreServices } from "@/content/services"
import { site } from "@/lib/site"

const linkClass = "text-sm text-on-navy hover:text-white hover:underline"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-section md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-block">
            <Logo />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-on-navy">
            Home appliance repairs across Gauteng. We come to you, find the fault and explain it before any work starts.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a className="inline-flex items-center gap-2 text-white hover:underline" href={`tel:${site.phoneTel}`}>
                <Phone className="h-4 w-4 text-amber" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 text-white hover:underline" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4 text-amber" aria-hidden="true" />
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 break-all text-white hover:underline" href={`mailto:${site.email}`}>
                <Mail className="h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-on-navy">
              <MapPin className="h-4 w-4 text-amber" aria-hidden="true" />
              {site.areaServed}, South Africa
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ice">Home appliances</h2>
          <ul className="mt-4 space-y-2.5">
            {homeServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className={linkClass}>
                  {service.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ice">More services</h2>
          <ul className="mt-4 space-y-2.5">
            {moreServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className={linkClass}>
                  {service.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ice">Areas</h2>
          <ul className="mt-4 space-y-2.5">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/service-areas/${area.slug}`} className={linkClass}>
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-on-navy md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white hover:underline">About</Link>
            <Link href="/contact" className="hover:text-white hover:underline">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-white hover:underline">Privacy policy</Link>
            <Link href="/terms-of-service" className="hover:text-white hover:underline">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
