export type Faq = { question: string; answer: string }

export type Picture = {
  src: string
  alt: string
  width: number
  height: number
}

/** "home" services are the household appliances the site leads with. */
export type ServiceGroup = "home" | "more"

export type ServiceContent = {
  slug: string
  group: ServiceGroup
  nav: string
  title: string
  metaDescription: string
  eyebrow: string
  h1: string
  lead: string
  short: string
  faults: { name: string; detail: string }[]
  work: { title: string; detail: string }[]
  brands: string[]
  sections: { heading: string; paragraphs: string[] }[]
  tips: string[]
  faqs: Faq[]
  related: string[]
}

export type AreaContent = {
  slug: string
  name: string
  title: string
  metaDescription: string
  h1: string
  lead: string
  local: string[]
  suburbs: string[]
  nearby: string[]
  faqs: Faq[]
}

export type ServiceMedia = {
  hero: Picture
  card: Picture
  photo?: Picture & { caption: string }
}
