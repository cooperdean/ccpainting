import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Paintbrush, ClipboardList, Hammer, Sparkles, RectangleHorizontal, DoorClosed, ChartNoAxesColumnIncreasing, SquareDashed, Columns, Ruler, CheckCircle, Palette,  Square, MoveVertical, Separators, DoorOpen, Building2, Stairs, Library } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function InteriorPaintingPage() {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
      title: "1. Consultation & Quote",
      description:
        "During your consultation, our site manager will assess your space, discuss color options, and provide a detailed, transparent quote. We take time to understand your vision so you can feel confident about your project before any work begins.",
    },
    {
      icon: <Palette className="h-10 w-10 text-emerald-500" />,
      title: "2. Color Consultation",
      description:
        "Our team provides expert color consultation to help you select shades and finishes that suit your style and space. We offer samples, guidance, and recommendations so you feel confident about your choices before painting begins.",
    },
    {
      icon: <Hammer className="h-10 w-10 text-emerald-500" />,
      title: "3. Preparation",
      description:
        "We carefully move and protect your furniture, repair holes or cracks in the drywall, sand all surfaces for a smooth finish, and remove cover plates and light fixtures. Our thorough preparation ensures clean edges, flawless adhesion, and exceptional results.",
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-emerald-500" />,
      title: "4. Painting",
      description:
        "Using premium primers and high-quality paints, our professional painters apply smooth, even coats in your chosen colors. We use precise techniques—brushing, rolling, and spraying as needed—to achieve beautiful, consistent coverage throughout your home.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
      title: "5. Detailing & Touch-Ups",
      description:
        "We inspect every surface to ensure flawless results, addressing any missed spots or uneven areas with meticulous touch-ups. Trim, edges, and details are carefully finished so your interior looks clean, polished, and professionally painted.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
      title: "6. Cleanup & Walkthrough",
      description:
        "After painting is complete, we remove all protective coverings, reassemble your space, and thoroughly clean the work area. During the final walkthrough, we review every detail with you to ensure you’re 100% satisfied with your freshly painted interior.",
    },
  ]

  const types = [
    {
      icon: <Square className="h-10 w-10 text-emerald-500" />,
      title: "Walls",
      description:
        "Smooth, consistent finishes for walls in any room, from bedrooms to living spaces.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
      title: "Accent Walls",
      description:
        "Create a focal point in any room with expertly painted accent walls that add style and dimension.",
    },
    {
      icon: <SquareDashed className="h-10 w-10 text-emerald-500" />,
      title: "Ceilings",
      description:
        "Professional ceiling painting and texturing to brighten and refresh your interiors.",
    },
    {
      icon: <RectangleHorizontal className="h-10 w-10 text-emerald-500" />,
      title: "Trim & Baseboards",
      description:
        "Clean, detailed painting for trim, crown molding, and baseboards.",
    },
    {
      icon: <DoorOpen className="h-10 w-10 text-emerald-500" />,
      title: "Doors",
      description:
        "Smooth, durable finishes for interior doors in any style or material.",
    },
    {
      icon: <DoorClosed className="h-10 w-10 text-emerald-500" />,
      title: "Cabinets",
      description:
        "Professional cabinet painting to update kitchens, bathrooms, and built-ins.",
    },
    {
      icon: <ChartNoAxesColumnIncreasing className="h-10 w-10 text-emerald-500" />,
      title: "Railings & Staircases",
      description:
        "Detailed preparation and painting for railings, spindles, and stairs.",
    },
    {
      icon: <Library className="h-10 w-10 text-emerald-500" />,
      title: "Built-Ins & Shelving",
      description:
        "Custom painting for built-in shelves and storage to match your décor.",
    },
  ]


  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior-painting-splash.webp"
            alt="Professional interior painting with off-white walls by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Interior Painting
            </h1>
            <p className="text-md md:text-xl mb-8">
              Transform your living spaces with our professional interior painting services. Whether you’re refreshing a single room or updating your entire home, our team delivers smooth, flawless finishes and precise attention to detail for results that make every room feel brand new.
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

      {/* Interior Painting Process Section */}
      <section id="interior-painting-process" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Interior Painting Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our painting process is designed to deliver exceptional results with minimal disruption to your home or business. From start to finish, we prioritize clear communication, careful preparation, and professional workmanship.
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

        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mt-16">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              Interior Surfaces We Paint
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              From walls and ceilings to cabinets and built-ins, our team provides professional interior painting services for every surface in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {types.map((type, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl duration-300 ease-in-out transition-shadow h-full"
              >
                <CardHeader>
                  <div className="mb-4">{type.icon}</div>
                  <CardTitle>{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-6 px-8">
            Ready to transform your home with a professional paint job? C&amp;C Painting in Saskatoon delivers high-quality, flawless finishes that refresh and brighten any space. Contact us today for a free estimate and discover why homeowners trust our experienced team for reliable, beautiful results.
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
