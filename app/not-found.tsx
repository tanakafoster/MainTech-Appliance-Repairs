import Image from "next/image"
import Link from "next/link"
import { CallActions } from "@/components/site/call-actions"
import { illustrations } from "@/content/media"
import { homeServices } from "@/content/services"
import { site } from "@/lib/site"

export default function NotFound() {
  return (
    <article className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-section lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue">Error 404</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">Page not found</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink">
            That page is not on the {site.name} website. Pick an appliance below, or call us and describe the fault.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {[{ slug: "", nav: "Home" }, ...homeServices, { slug: "contact", nav: "Contact" }].map((item) => (
              <li key={item.slug || "home"}>
                <Link
                  href={`/${item.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold text-navy hover:border-blue hover:text-blue"
                >
                  {item.nav}
                </Link>
              </li>
            ))}
          </ul>
          <CallActions className="mt-8" />
        </div>
        <Image
          src={illustrations.appliances.src}
          alt={illustrations.appliances.alt}
          width={illustrations.appliances.width}
          height={illustrations.appliances.height}
          className="aspect-[4/3] h-auto w-full rounded-2xl object-cover"
          priority
        />
      </div>
    </article>
  )
}
