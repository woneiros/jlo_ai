import { HeroSection } from "@/components/hero-section"
import { AdvisorySection } from "@/components/advisory-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AdvisorySection />
      <ContactSection />
    </main>
  )
}
