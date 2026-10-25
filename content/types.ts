export type Faq = { question: string; answer: string }

export type ServiceContent = {
  slug: string
  nav: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  faults: { name: string; detail: string }[]
  work: string[]
  brands: string[]
  sections: { heading: string; body: string }[]
  faqs: Faq[]
  related: string[]
  image: string
  imageAlt: string
  width: number
  height: number
}

export type AreaContent = {
  slug: string
  name: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  local: string
  suburbs: string[]
  nearby: string[]
  faqs: Faq[]
  image: string
  imageAlt: string
  width: number
  height: number
}
