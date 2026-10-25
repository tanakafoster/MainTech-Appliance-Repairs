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
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
const whatsappClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary bg-background px-5 text-sm font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

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
        className={cn(whatsappClass, onDark && "border-white bg-transparent text-white")}
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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background p-3 md:hidden">
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
