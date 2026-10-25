"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { services } from "@/content/services"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image src="/logo-icon.png" alt="MainTech logo mark" width={40} height={40} className="h-10 w-10 rounded-md object-cover" priority />
          <span className="truncate text-base font-bold text-primary">
            MAIN<span className="text-accent">TECH</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="relative">
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <ChevronDown className={cn("ml-1 h-4 w-4", servicesOpen && "rotate-180")} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-80 overflow-auto rounded-md border border-border bg-background p-2 shadow-[var(--shadow-card)]">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.nav}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/service-areas" className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium">Areas</Link>
          <Link href="/about" className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium">About</Link>
          <Link href="/contact" className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${site.phoneTel}`} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="font-bold text-primary">{site.shortName}</p>
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="max-h-[calc(100vh-8rem)] overflow-auto px-4 py-2" aria-label="Mobile">
            <button type="button" className="flex min-h-11 w-full items-center justify-between text-left text-base font-semibold" aria-expanded={mobileServices} onClick={() => setMobileServices((value) => !value)}>
              Services
              <ChevronDown className={cn("h-4 w-4", mobileServices && "rotate-180")} aria-hidden="true" />
            </button>
            {mobileServices && (
              <div className="pb-2">
                {services.map((service) => (
                  <Link key={service.slug} href={`/${service.slug}`} className="block min-h-11 py-2 pl-3 text-sm" onClick={() => setOpen(false)}>
                    {service.nav}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/service-areas" className="block min-h-11 py-3 text-base font-semibold" onClick={() => setOpen(false)}>Areas</Link>
            <Link href="/about" className="block min-h-11 py-3 text-base font-semibold" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="block min-h-11 py-3 text-base font-semibold" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
