import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = {
  title: "C&C Painting | Saskatoon Painting Contractors",
  description: "Professional residential and commercial painting services in Saskatoon. Interior painting, exterior painting, cabinet painting, and more. Get a free quote today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "C&C Painting | Saskatoon Painting Contractors",
    description: "Professional residential and commercial painting services in Saskatoon. Interior painting, exterior painting, cabinet painting, and more. Get a free quote today.",
    url: "https://www.ccpainting.co",
  },
}
import { Services } from "@/components/services"
import { AboutUs } from "@/components/about-us"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { QuoteForm } from "@/components/quote-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Testimonials />
      <Services />
      <AboutUs />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <ContactSection />
          <QuoteForm />
        </div>
      </div>
    </main>
  )
}
