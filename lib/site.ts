export const site = {
  name: "MainTech Appliance Repairs",
  shortName: "MainTech",
  tagline: "Appliance repairs in Gauteng",
  url: "https://www.coldfix.co.za",
  email: "info@maintechappliancerepairs.co.za",
  phoneDisplay: "065 650 8504",
  phoneTel: "+27656508504",
  phoneSchema: "+27-65-650-8504",
  whatsappNumber: "27656508504",
  whatsappDisplay: "065 650 8504",
  whatsappHref: "https://wa.me/27656508504",
  areaServed: "Gauteng",
  googleAdsId: "AW-18395132504",
  whatsappConversionLabel: "AW-18395132504/VSWzCMGu--UcENjkvcNE",
  logo: "/logo-square.png",
  ogImage: "/og-image.png",
  hours: "Monday to Friday, 8:00 to 17:00",
  areas: [
    "Pretoria",
    "Johannesburg",
    "Midrand",
    "Sandton",
    "Centurion",
    "Fourways",
    "Randburg",
    "Bedfordview",
    "Rosebank",
    "Roodepoort",
    "Morningside",
  ],
} as const

export function absoluteUrl(path: string) {
  if (path === "/") return site.url
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`
}
