import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Palette, ClipboardList, Eye, CheckCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function ColorConsultationPage() {
  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/color-consultation-splash.webp"
            alt="Professional color consultation by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Color Consultation
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Take the guesswork out of choosing the perfect colors for your home or business. Our professional color consultation service helps you select harmonious palettes that match your style, lighting, and vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="/#contact">Get a Consultation</a>
              </Button>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="tel:306-812-7066">Call Us: 306-812-7066</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Color Consultation Details Section */}
      <section id="color-consultation-details" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What to Expect During Your Color Consultation
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our color consultation is a collaborative, informative session designed to help you feel confident about your paint choices. We guide you through the process step by step:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            {[
              {
                icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
                title: "Discuss Your Vision",
                description:
                  "We start by listening to your ideas, preferences, and goals for each space to understand the look and mood you want to achieve.",
              },
              {
                icon: <Eye className="h-10 w-10 text-emerald-500" />,
                title: "Review Samples & Options",
                description:
                  "You’ll see curated color swatches, samples, and inspiration boards to help you compare shades, undertones, and finishes.",
              },
              {
                icon: <Palette className="h-10 w-10 text-emerald-500" />,
                title: "Create a Cohesive Palette",
                description:
                  "Together, we build a color palette that flows beautifully throughout your home or business, considering lighting, décor, and architecture.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
                title: "Finalize Recommendations",
                description:
                  "You’ll receive expert recommendations, paint samples if needed, and a detailed plan so you can move forward with confidence.",
              },
            ].map((step, index) => (
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
            Ready to choose colors you’ll love for years to come? Contact C&C Painting in Saskatoon to schedule your professional color consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-emerald-700 text-white"
              asChild
            >
              <a href="/#contact">Book a Consultation</a>
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
