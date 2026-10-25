import { HomeView } from "@/components/templates/home-view"
import { photos } from "@/content/media"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Appliance Repairs at Home in Gauteng | MainTech",
  description: "Fridge not cooling or washing machine not draining? MainTech repairs home appliances across Gauteng and explains the fault first. Call 065 650 8504.",
  path: "/",
  absolute: true,
  image: photos.fridgeTechnician.src,
  imageAlt: photos.fridgeTechnician.alt,
  imageWidth: photos.fridgeTechnician.width,
  imageHeight: photos.fridgeTechnician.height,
})

export default function HomePage() {
  return <HomeView />
}
