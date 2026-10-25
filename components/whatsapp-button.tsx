"use client"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { site } from "@/lib/site"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

declare global {
  interface Window {
    gtag?: (event: "event", name: "conversion", params: { send_to: string; value: number; currency: string }) => void
  }
}

export function WhatsAppButton({
  phoneNumber = site.whatsappNumber,
  message = `Hi ${site.name}, I'd like to get a quote for a repair.`,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: site.whatsappConversionLabel,
        value: 1.0,
        currency: "ZAR",
      })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Chat with MainTech Appliance Repairs on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110 hover:bg-[#25D366]/90 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
    </a>
  )
}
