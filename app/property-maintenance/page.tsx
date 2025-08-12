import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ClipboardList, ShieldCheck, Wrench, RefreshCw, Sparkles, CheckCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function PropertyMaintenancePage() {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
      title: "1. Consultation & Assessment",
      description:
        "We start by meeting with you to understand your property’s needs and assess any areas requiring maintenance, repairs, or improvements. You’ll receive a clear, detailed quote outlining recommended services and timelines.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
      title: "2. Protection & Preparation",
      description:
        "Our team protects floors, fixtures, and surfaces as needed, and prepares all areas to ensure work can be completed safely and efficiently with minimal disruption.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-emerald-500" />,
      title: "3. Repairs & Touch-Ups",
      description:
        "We handle everything from drywall patching and paint touch-ups to caulking, minor carpentry, ceiling repairs, ceiling texturing and routine maintenance tasks to keep your property in top condition.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-emerald-500" />,
      title: "4. Painting & Finishes",
      description:
        "When needed, we repaint or refresh surfaces using high-quality materials and professional techniques to maintain a clean, polished appearance throughout your space.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
      title: "5. Detailing & Quality Check",
      description:
        "After completing the work, we inspect all areas carefully and address any final details or adjustments to ensure everything meets our standards for quality and durability.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
      title: "6. Cleanup & Walkthrough",
      description:
        "We remove all materials, clean up thoroughly, and walk through the project with you to confirm you’re completely satisfied with the results.",
    },
  ]

  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/property-maintenance-splash.webp"
            alt="Professional property maintenance services by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Property Maintenance
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Keep your property looking its best year-round with reliable maintenance services from C&C Painting. From repairs and touch-ups to repainting and regular upkeep, we help homeowners and businesses maintain clean, safe, and welcoming spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="/#contact">Get a Quote</a>
              </Button>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="tel:306-812-7066">Call Us: 306-812-7066</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Maintenance Process Section */}
      <section id="property-maintenance-process" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Property Maintenance Process
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our property maintenance services are designed to deliver high-quality, dependable results with minimal disruption. From routine touch-ups to full repairs, we focus on clear communication, attention to detail, and professional workmanship every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl duration-300 ease-in-out transition-shadow h-full"
              >
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-sm text-gray-700 max-w-3xl px-8 mx-auto mb-6 px-8">
            Ready to protect and refresh your property? C&C Painting in Saskatoon offers reliable property maintenance services that keep your spaces clean, safe, and looking their best. Contact us today for a free estimate and discover why so many property owners trust our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-emerald-700 text-white"
              asChild
            >
              <a href="/#contact">Get a Quote</a>
            </Button>
            <Button size="lg" className="bg-gray-900 hover:bg-emerald-700 text-white" asChild>
              <a href="tel:306-812-7066">Call Us: 306-812-7066</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
