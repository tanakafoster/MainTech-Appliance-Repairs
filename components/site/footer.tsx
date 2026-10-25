import Link from "next/link"
import { areas } from "@/content/areas"
import { services } from "@/content/services"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-section md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Services</h2>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="text-sm text-primary-foreground/80 hover:text-accent">
                  {service.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Areas</h2>
          <ul className="mt-3 space-y-2">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/service-areas/${area.slug}`} className="text-sm text-primary-foreground/80 hover:text-accent">
                  Appliance repairs in {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><a className="hover:text-accent" href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a></li>
            <li><a className="hover:text-accent" href={site.whatsappHref}>WhatsApp {site.whatsappDisplay}</a></li>
            <li><a className="hover:text-accent" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.areaServed}, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-accent">Privacy policy</Link>
            <Link href="/terms-of-service" className="hover:text-accent">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
