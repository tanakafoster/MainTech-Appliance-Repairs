import { site } from "@/lib/site"

const faqs = [
  {
    question: "Which appliances does MainTech repair?",
    answer:
      "MainTech Appliance Repairs works on fridges, freezers, washing machines, tumble dryers, dishwashers, ovens, stoves, hobs, commercial refrigeration, cold rooms, and air conditioners.",
  },
  {
    question: "Where do you work?",
    answer:
      "The published service area is Gauteng, including Pretoria, Johannesburg, Midrand, Sandton, Centurion, Fourways, Randburg, Bedfordview, Rosebank, Roodepoort, and Morningside.",
  },
  {
    question: "How do I ask for a quote?",
    answer: `Call ${site.phoneDisplay}, email ${site.email}, or use the contact form. If the form cannot send, WhatsApp is at ${site.whatsappHref}.`,
  },
  {
    question: "Do you repair both homes and businesses?",
    answer:
      "Yes. Domestic fridge and appliance repairs are separate from commercial refrigeration and cold room work, and each has its own page so you can request the right visit.",
  },
]

export function HomeFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <section className="bg-background py-20" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <h2 id="faq-heading" className="mb-8 text-3xl font-bold tracking-tight">
          Questions before you book
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
