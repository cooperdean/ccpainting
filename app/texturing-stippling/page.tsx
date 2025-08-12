import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ClipboardList, Grip, Layers, PaintRoller, CheckCircle, Sparkles } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function TexturingStipplingPage() {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
      title: "1. Consultation & Quote",
      description:
        "We start by meeting with you to understand your goals, review existing surfaces, and help you choose textures and finishes that suit your style. You’ll receive a clear, detailed quote outlining every step of the process.",
    },
    {
      icon: <Layers className="h-10 w-10 text-emerald-500" />,
      title: "2. Surface Preparation",
      description:
        "Our team protects floors and fixtures, repairs any damage, and preps your ceilings or walls to ensure the new texture adheres properly and looks consistent.",
    },
    {
      icon: <PaintRoller className="h-10 w-10 text-emerald-500" />,
      title: "3. Priming & Masking",
      description:
        "We apply primers if needed and mask off adjacent areas to maintain clean edges. This step is essential for a professional result that blends seamlessly with existing finishes.",
    },
    {
      icon: <Grip className="h-10 w-10 text-emerald-500" />,
      title: "4. Texture Application",
      description:
        "Using professional tools and techniques, we apply your chosen texture or stipple pattern evenly across the surface, achieving the look you envisioned.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
      title: "5. Detailing & Touch-Ups",
      description:
        "Once the texture dries, we inspect and touch up any uneven areas to ensure a uniform finish that enhances your space.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
      title: "6. Cleanup & Walkthrough",
      description:
        "We remove all masking, clean up thoroughly, and complete a final walkthrough with you to ensure you’re completely satisfied with your new textured surfaces.",
    },
  ]

  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/texture-ceiling-splash.webp"
            alt="Professional ceiling texturing and stippling by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Texturing & Stippling
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Add depth, character, and style to your ceilings and walls with professional texturing and stippling. From matching existing patterns to creating fresh new looks, our team delivers consistent, high-quality finishes that transform any space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="/#contact">Request a Quote</a>
              </Button>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="tel:306-812-7066">Call Us: 306-812-7066</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Texturing & Stippling Process Section */}
      <section id="texturing-process" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Texturing & Stippling Process
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our texturing and stippling process is designed to deliver beautiful, consistent results with minimal disruption to your home or business. From surface preparation to final detailing, we focus on clear communication and professional workmanship every step of the way.
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
            Ready to refresh your ceilings or walls with professional texturing or stippling? C&C Painting in Saskatoon delivers high-quality finishes that add style and dimension to any space. Contact us today for a free estimate and discover why homeowners and businesses trust our experienced team.
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
