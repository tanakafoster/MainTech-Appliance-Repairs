import { HomeView } from "@/components/templates/home-view"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Appliance Repairs in Gauteng | MainTech",
  description: "Fridge not cooling or washer not draining in Gauteng? MainTech repairs appliances and explains the fault before work starts. Call 065 650 8504.",
  path: "/",
  absolute: true,
  image: "/technicians-servicing-air-conditioner.png",
  imageAlt: "Technicians working on an air conditioning unit",
})

export default function HomePage() {
  return <HomeView />
}
