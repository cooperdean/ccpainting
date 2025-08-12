import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ClipboardList, Hammer, Droplets, Paintbrush, Sparkles, CheckCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function StainingPage() {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
      title: "1. Consultation & Quote",
      description:
        "We begin by assessing your wood surfaces, discussing your goals, and helping you choose the right stain colors and finishes. You’ll receive a detailed quote outlining the entire process.",
    },
    {
      icon: <Hammer className="h-10 w-10 text-emerald-500" />,
      title: "2. Preparation & Protection",
      description:
        "Our team carefully cleans/pressure washes, sands, and preps all wood surfaces to ensure the stain absorbs evenly. We also protect surrounding areas and fixtures for a clean work environment.",
    },
    {
      icon: <Droplets className="h-10 w-10 text-emerald-500" />,
      title: "3. Conditioning & Testing",
      description:
        "If needed, we apply wood conditioners and test stain samples to confirm color and consistency before full application.",
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-emerald-500" />,
      title: "4. Stain Application",
      description:
        "Using professional techniques, we apply your chosen stain in even coats, carefully wiping excess and ensuring a consistent, rich finish that enhances the natural beauty of the wood.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
      title: "5. Sealing & Protection",
      description:
        "Once the stain dries, if desired we can apply protective sealers or clear coats to lock in color and provide lasting durability against wear and moisture.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
      title: "6. Cleanup & Walkthrough",
      description:
        "We remove all coverings, clean the workspace, and walk through the project with you to ensure you’re completely satisfied with the results.",
    },
  ]

  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/staining-splash.webp"
            alt="Professional wood staining services by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Staining
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Enhance the natural beauty of your wood surfaces with professional staining services. From decks and fences to cabinets and trim, our team delivers rich, lasting finishes that protect and elevate any space.
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

      {/* Staining Process Section */}
      <section id="staining-process" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Staining Process
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our staining process is designed to deliver beautiful, durable results with minimal disruption to your home or business. From careful preparation to protective sealing, we focus on clear communication and expert workmanship every step of the way.
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
          <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-6 px-8">
            Ready to bring out the best in your wood surfaces? C&C Painting in Saskatoon delivers professional staining services that protect and enhance your space. Contact us today for a free estimate and discover why homeowners trust our experienced team.
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
