import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Layout, ClipboardList, Slice, Scroll, CheckCircle, Cuboid } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function DrywallRepairPage() {
const steps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
    title: "1. Consultation & Quote",
    description:
      "During your consultation, our drywall specialists assess the condition of your walls, measure the repair or installation areas, and provide a clear, detailed quote. We take time to understand your goals so you feel confident about the project from the very start.",
  },
  {
    icon: <Slice className="h-10 w-10 text-emerald-500" />,
    title: "2. Surface Preparation",
    description:
      "We prepare your space by removing damaged drywall, protecting floors and furniture, and cleaning surfaces to ensure a stable base for installation or repair.",
  },
  {
    icon: <Layout className="h-10 w-10 text-emerald-500" />,
    title: "3. Drywall Installation or Repair",
    description:
      "Our team installs new drywall panels or repairs existing sections with precise cutting, fitting, and fastening techniques. All seams, joints, and fasteners are secured with screws to create an even, solid surface.",
  },
  {
    icon: <Scroll className="h-10 w-10 text-emerald-500" />,
    title: "4. Taping & Mudding",
    description:
      "We apply joint tape and multiple coats of professional-grade joint compound over seams and repairs. Each layer is carefully smoothed and allowed to dry, building a seamless finish that blends perfectly with surrounding areas.",
  },
  {
    icon: <Cuboid className="h-10 w-10 text-emerald-500" />,
    title: "5. Sanding & Smoothing",
    description:
      "After the compound has fully cured, all surfaces are sanded to a consistent, smooth texture. This critical step ensures your walls are flawless and ready for primer and paint.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
    title: "6. Cleanup & Walkthrough",
    description:
      "We remove dust, debris, and protective coverings, leaving your space clean and ready for finishing. Finally, we walk through the completed work with you to ensure you’re completely satisfied with the results.",
  },
]

  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/drywall-repair-splash.webp"
            alt="Professional drywalling job of a new home with by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Drywall Repair & Installation
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Restore and enhance your living spaces with our professional drywall repair and installation services. Whether you’re fixing a single damaged area or updating entire rooms, our team delivers smooth, seamless finishes and precise attention to detail for results that make your walls look brand new.
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

      {/* Drywall Repair Process Section */}
      <section id="drywall-repair-process" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Drywalling & Drywall Repair Process
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our drywall repair and installation process is designed to deliver exceptional results with minimal disruption to your home or business. From start to finish, we prioritize clear communication, precise surface preparation, and professional workmanship to restore and improve your space.
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
            Ready to restore your home or commercial building with some professional drywall repair or installation? C&C Painting in Saskatoon delivers high-quality, seamless finishes that repair damage, refresh your walls, and create a perfect foundation for paint. Contact us today for a free estimate and discover why home and business owners trust our experienced team for reliable results.
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
