import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ServiceAreasPreview } from "@/components/home/service-areas-preview"
import { HomeFaq } from "@/components/home/home-faq"
import { CTASection } from "@/components/home/cta-section"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "MainTech Appliance Repairs | Appliance Repairs in Gauteng",
  absolute: true,
  description:
    "MainTech Appliance Repairs fixes fridges, freezers, washing machines, tumble dryers, dishwashers, ovens, cold rooms and air conditioners across Gauteng. Call 065 650 8504.",
  path: "/",
  keywords: "appliance repairs Gauteng, fridge repairs Johannesburg, washing machine repairs Pretoria, air conditioner repairs",
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ServiceAreasPreview />
      <HomeFaq />
      <CTASection />
    </>
  )
}
