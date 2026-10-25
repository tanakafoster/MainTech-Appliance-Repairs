import { CallActions } from "@/components/site/call-actions"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "About Our Repair Team",
  description: "MainTech Appliance Repairs fixes fridges, laundry, ovens, cold rooms and aircons across Gauteng. Ask us to visit you now. Call 065 650 8504.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[var(--measure)] px-4 py-section">
      <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">About MainTech Appliance Repairs</h1>
      <p className="mt-4 leading-7">MainTech Appliance Repairs fixes appliances in Gauteng. We work on fridges, freezers, washing machines, tumble dryers, dishwashers, ovens, commercial refrigeration, cold rooms and air conditioners.</p>
      <h2 className="mt-8 text-2xl font-bold text-primary">How we work</h2>
      <p className="mt-4 leading-7">You contact us and describe the fault. A technician looks at the machine, explains what is wrong, and waits for your go-ahead before a repair starts. After a repair, we test it. If a repair does not make sense, we say so.</p>
      <p className="mt-4 leading-7">We do not publish prices, call-out fees, arrival times, years in business, review scores or certificates on this site. Those details are not confirmed here.</p>
      <h2 className="mt-8 text-2xl font-bold text-primary">How to reach us</h2>
      <p className="mt-4 leading-7">Call {site.phoneDisplay}, WhatsApp the same number, or email {site.email}. The website address is {site.url}. Cover is {site.areaServed}.</p>
      <CallActions className="mt-6" />
    </article>
  )
}
