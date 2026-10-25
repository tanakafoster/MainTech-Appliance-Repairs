import Link from "next/link"
import { areas } from "@/content/areas"
import { services } from "@/content/services"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-on-navy bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-section md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ice">Services</h2>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="text-sm text-on-navy hover:text-white hover:underline">
                  {service.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ice">Areas</h2>
          <ul className="mt-3 space-y-2">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/service-areas/${area.slug}`} className="text-sm text-on-navy hover:text-white hover:underline">
                  Appliance repairs in {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ice">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-on-navy">
            <li><a className="hover:text-white hover:underline" href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a></li>
            <li><a className="hover:text-white hover:underline" href={site.whatsappHref}>WhatsApp {site.whatsappDisplay}</a></li>
            <li><a className="hover:text-white hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.areaServed}, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-navy">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-on-navy md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white hover:underline">Privacy policy</Link>
            <Link href="/terms-of-service" className="hover:text-white hover:underline">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
