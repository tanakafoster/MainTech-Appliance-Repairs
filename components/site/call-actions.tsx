"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    gtag?: (event: "event", name: "conversion", params: { send_to: string; value: number; currency: string }) => void
  }
}

function trackWhatsApp() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: site.whatsappConversionLabel,
      value: 1,
      currency: "ZAR",
    })
  }
}

const callClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber px-6 text-base font-bold text-navy shadow-sm transition hover:bg-amber-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
const whatsappClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-navy bg-transparent px-6 text-base font-bold text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"

export function CallActions({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <a href={`tel:${site.phoneTel}`} className={callClass}>
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call {site.phoneDisplay}
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(whatsappClass, onDark && "border-white/70 bg-transparent text-white hover:bg-white hover:text-navy")}
        onClick={trackWhatsApp}
      >
        <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <a href={`tel:${site.phoneTel}`} className={callClass}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={whatsappClass} onClick={trackWhatsApp}>
          <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
