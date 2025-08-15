import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const headingId = "hero-heading"
  return (
    <section
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/saskatoon.webp"
          alt="A wide view of Saskatoon, Saskatchewan"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        {/* Contrast overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Serving Saskatoon and surrounding areas for over 10 years.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Expert residential and commercial painting services, delivered with precision, reliability, and attention to detail. With over 10 years of experience and more than 1,000 satisfied clients, we’ve built a reputation for quality, reliability, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
              <a href="tel:306-812-7066">Call Us: 306-812-7066</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
