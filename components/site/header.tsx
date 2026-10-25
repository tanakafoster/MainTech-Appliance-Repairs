"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { getServiceMedia } from "@/content/media"
import { homeServices, moreServices } from "@/content/services"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { href: "/service-areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Logo({ onDark = true }: { onDark?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <Image src="/logo-mark.svg" alt="" width={40} height={40} className="h-10 w-10 shrink-0" priority />
      <span className="min-w-0 leading-none">
        <span className={cn("block text-lg font-extrabold tracking-wide", onDark ? "text-white" : "text-navy")}>
          MAIN<span className="text-ice">TECH</span>
        </span>
        <span className={cn("mt-1 block truncate text-[11px] font-semibold uppercase tracking-[0.18em]", onDark ? "text-on-navy" : "text-slate")}>
          Appliance Repairs
        </span>
      </span>
    </span>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!servicesOpen) return
    const onClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setServicesOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [servicesOpen])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" aria-label={`${site.name} home`} className="min-w-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-semibold text-on-navy hover:text-white"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <ChevronDown className={cn("ml-1 h-4 w-4 transition", servicesOpen && "rotate-180")} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div
                id="services-menu"
                className="absolute left-1/2 top-full z-50 mt-3 grid w-[44rem] -translate-x-1/2 grid-cols-[1.5fr_1fr] gap-6 rounded-2xl border border-border bg-surface p-5 text-ink shadow-[var(--shadow-lift)]"
              >
                <div>
                  <p className="px-2 text-xs font-bold uppercase tracking-[0.14em] text-blue">Home appliances</p>
                  <ul className="mt-2 grid grid-cols-2 gap-1">
                    {homeServices.map((service) => {
                      const media = getServiceMedia(service.slug)
                      return (
                        <li key={service.slug}>
                          <Link
                            href={`/${service.slug}`}
                            className="flex items-center gap-3 rounded-xl p-2 text-sm font-semibold text-navy hover:bg-ice-tint"
                            onClick={() => setServicesOpen(false)}
                          >
                            <Image src={media.card.src} alt="" width={64} height={48} className="h-12 w-16 rounded-lg object-cover" />
                            {service.nav}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="border-l border-border pl-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">Also from MainTech</p>
                  <ul className="mt-2 space-y-0.5">
                    {moreServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/${service.slug}`}
                          className="block rounded-lg px-2 py-1.5 text-sm text-ink hover:bg-ice-tint hover:text-blue"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.nav}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        className="mt-2 block rounded-lg px-2 py-1.5 text-sm font-semibold text-blue hover:bg-ice-tint"
                        onClick={() => setServicesOpen(false)}
                      >
                        All services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-semibold text-on-navy hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${site.phoneTel}`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-amber px-4 text-sm font-bold text-navy hover:bg-amber-hover">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/25 text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-navy text-white lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex h-[4.5rem] items-center justify-between border-b border-white/10 px-4">
            <Logo />
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center text-white" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex-1 overflow-auto px-4 pb-28 pt-4" aria-label="Mobile">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ice">Home appliances</p>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              {homeServices.map((service) => {
                const media = getServiceMedia(service.slug)
                return (
                  <li key={service.slug}>
                    <Link href={`/${service.slug}`} className="block rounded-xl bg-white/5 p-2 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                      <Image src={media.card.src} alt="" width={160} height={120} className="aspect-[4/3] h-auto w-full rounded-lg object-cover" />
                      <span className="mt-2 block">{service.nav}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-ice">Also from MainTech</p>
            <ul className="mt-1">
              {moreServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="flex min-h-11 items-center text-on-navy hover:text-white" onClick={() => setOpen(false)}>
                    {service.nav}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-white/10 pt-2">
              {[{ href: "/services", label: "All services" }, ...links].map((link) => (
                <Link key={link.href} href={link.href} className="flex min-h-12 items-center text-lg font-semibold text-white" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
