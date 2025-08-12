import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ClipboardList, Hammer, Brush, PaintRoller, Sparkles, CheckCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function CabinetPaintingPage() {
  const steps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
    title: "1. Consultation & Quote",
    description:
      "We begin with an in-home consultation to assess your cabinets, discuss your goals, and review finish and color options. You’ll receive a clear, detailed quote outlining each step of the project.",
  },
  {
    icon: <Hammer className="h-10 w-10 text-emerald-500" />,
    title: "2. Preparation & Protection",
    description:
      "Our team carefully removes hardware, protects surrounding surfaces, and thoroughly cleans all cabinet areas to remove grease and residue. Proper preparation ensures a smooth, durable finish.",
  },
  {
    icon: <Brush className="h-10 w-10 text-emerald-500" />,
    title: "3. Sanding & Priming",
    description:
      "Cabinet doors and drawer fronts are sanded and primed in preparation for spraying. Fixed cabinet boxes are also sanded and primed on-site to ensure consistent adhesion.",
  },
  {
    icon: <PaintRoller className="h-10 w-10 text-emerald-500" />,
    title: "4. Spraying & Finishing",
    description:
      "All cabinet doors and drawers are taken to our professional spray shop for a factory-quality finish. Fixed cabinet boxes are sprayed on-site in your home with the same premium products and techniques to ensure a seamless look.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
    title: "5. Detailing & Reassembly",
    description:
      "Once cured, all cabinet doors, drawers, and hardware are reinstalled. We inspect every surface and complete any final touch-ups to ensure your cabinets look flawless.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
    title: "6. Cleanup & Walkthrough",
    description:
      "We remove all coverings, clean the workspace thoroughly, and conduct a final walkthrough with you to confirm you’re completely satisfied with your newly refinished cabinets.",
  },
]


  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cabinet-painting-splash.webp"
            alt="Professional cabinet painting services by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cabinet Painting
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Refresh your kitchen or bathroom with professional cabinet painting that delivers a smooth, modern finish. Our team uses premium products and meticulous techniques to transform worn cabinets into beautiful, like-new surfaces you’ll love.
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

      {/* Cabinet Painting Process Section */}
      <section id="cabinet-painting-process" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Cabinet Painting Process
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our cabinet painting process is designed to deliver high-quality, durable results with minimal disruption to your home. From preparation to final reassembly, we focus on clear communication and professional workmanship every step of the way.
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
          <p className="text-sm text-gray-700 max-w-3xl px-8 mx-auto mb-6">
            Ready to transform your kitchen or bathroom with beautifully painted cabinets? C&C Painting in Saskatoon delivers high-quality finishes that refresh your space and add value to your home. Contact us today for a free estimate and see why homeowners trust our experienced team.
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
