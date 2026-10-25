"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, ChevronDown, X, MapPin, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

type NavLink = { title: string; href: string; description: string }

const applianceLinks: NavLink[] = [
  { title: "All Appliance Repairs", href: "/appliance-repairs", description: "Laundry, kitchen and household appliances" },
  { title: "Washing Machine Repairs", href: "/washing-machine-repairs", description: "Machines that will not start, drain, or spin" },
  { title: "Tumble Dryer Repairs", href: "/tumble-dryer-repairs", description: "Dryers that will not heat, tumble, or finish a cycle" },
  { title: "Dishwasher Repairs", href: "/dishwasher-repairs", description: "Wash, drain, and dry faults" },
  { title: "Oven Repairs", href: "/oven-repairs", description: "Ovens, stoves, and hobs" },
]

const commercialLinks: NavLink[] = [
  { title: "Commercial Refrigeration", href: "/commercial-refrigeration", description: "Display fridges, coolers, and ice machines" },
  { title: "Cold Room Installation and Repair", href: "/cold-room-installation-repair", description: "Walk-in cold rooms and freezer rooms" },
]

const airconLinks: NavLink[] = [
  { title: "Air Conditioner Repairs", href: "/air-conditioning-services", description: "Repairs, servicing, installation, and gas refills" },
  { title: "HVAC Maintenance Contracts", href: "/hvac-maintenance-contracts", description: "Scheduled air conditioning service plans" },
]

const supportingLinks = [
  { title: "Emergency Callouts", href: "/emergency-callout-service" },
  { title: "Maintenance Contracts", href: "/property-maintenance" },
  { title: "Appliance Plumbing", href: "/plumbing-services" },
  { title: "Appliance Electrical", href: "/electrical-services" },
  { title: "About", href: "/about" },
]

function useDismiss(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const onPointer = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) close()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    document.addEventListener("mousedown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [open, close])
  return ref
}

function DesktopDropdown({ label, links }: { label: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const ref = useDismiss(open, close)

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-lg border border-border bg-background p-2 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="block rounded-md p-3 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="block text-sm font-semibold">{link.title}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{link.description}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileGroup({ label, links, onNavigate }: { label: string; links: NavLink[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open && (
        <div className="space-y-1 px-4 pb-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="block rounded-md px-2 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background", scrolled && "border-border shadow-sm")}>
      <div className="hidden border-b border-white/10 bg-primary text-primary-foreground lg:block">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6 text-sm">
            <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <WhatsAppIcon className="h-3.5 w-3.5" aria-hidden="true" />
              WhatsApp: {site.whatsappDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {site.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Gauteng, South Africa
            </span>
          </div>
          <p className="text-xs text-white/80">{site.areaServed}, South Africa</p>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4 lg:h-20 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <Image src="/logo-icon.png" alt={`${site.name} logo`} width={44} height={44} className="h-11 w-11 rounded-xl object-cover" priority />
          <span className="min-w-0">
            <span className="block text-lg font-bold leading-tight text-primary">
              MAIN<span className="text-accent">TECH</span>
            </span>
            <span className="block truncate text-xs text-muted-foreground">Appliance Repairs</span>
          </span>
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <Link href="/" className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Home
          </Link>
          <Link href="/refrigeration-repairs" className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Fridge & Freezer
          </Link>
          <DesktopDropdown label="Appliances" links={applianceLinks} />
          <DesktopDropdown label="Commercial" links={commercialLinks} />
          <DesktopDropdown label="Air Conditioning" links={airconLinks} />
          <Link href="/service-areas" className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Service Areas
          </Link>
          <Link href="/contact" className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex">
            <a href={`tel:${site.phoneTel}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md overflow-y-auto p-0">
              <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
                <p className="font-bold">{site.name}</p>
                <Button variant="ghost" size="icon" onClick={closeMenu} className="text-white" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-2 border-b p-4 text-sm">
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 font-semibold">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phoneDisplay}
                </a>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" aria-hidden="true" /> WhatsApp {site.whatsappDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
                </a>
              </div>
              <nav aria-label="Mobile">
                <Link href="/" onClick={closeMenu} className="block border-b px-4 py-3 text-sm font-semibold">Home</Link>
                <Link href="/refrigeration-repairs" onClick={closeMenu} className="block border-b px-4 py-3 text-sm font-semibold">Fridge & Freezer</Link>
                <MobileGroup label="Appliances" links={applianceLinks} onNavigate={closeMenu} />
                <MobileGroup label="Commercial" links={commercialLinks} onNavigate={closeMenu} />
                <MobileGroup label="Air Conditioning" links={airconLinks} onNavigate={closeMenu} />
                <Link href="/service-areas" onClick={closeMenu} className="block border-b px-4 py-3 text-sm font-semibold">Service Areas</Link>
                <Link href="/contact" onClick={closeMenu} className="block border-b px-4 py-3 text-sm font-semibold">Contact</Link>
              </nav>
              <div className="space-y-2 p-4 text-sm text-muted-foreground">
                {supportingLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenu} className="block py-1 hover:text-foreground">
                    {link.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
