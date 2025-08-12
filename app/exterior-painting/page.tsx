import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Paintbrush, ClipboardList, Hammer, PaintRoller, Trash2, CheckCircle, DoorClosed, Home, BrickWall, Layers, Grip, Anvil, Blinds, Shovel, Fence } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function ExteriorPaintingPage() {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-emerald-500" />,
      title: "1. Consultation & Quote",
      description:
        "During your consultation, our exterior painting experts visit your property to evaluate siding, trim, and surfaces that need attention. We discuss your goals, recommend high-quality paint products and color options, and provide a clear, detailed quote outlining every step of the process so you know exactly what to expect.",
    },
    {
      icon: <Hammer className="h-10 w-10 text-emerald-500" />,
      title: "2. Surface Preparation",
      description:
        "Proper preparation is the key to long-lasting exterior painting projects. We thoroughly power wash all surfaces to remove dirt, mildew, and peeling paint. Loose or flaking areas are scraped, glossy surfaces are sanded for better adhesion, and cracks or gaps are filled with professional-grade caulk to create a clean, stable base for paint application.",
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-emerald-500" />,
      title: "3. Priming",
      description:
        "To ensure optimal adhesion and weather resistance, we apply premium primers to all bare wood, metal, and repaired areas. This crucial step seals the surface, prevents stains from bleeding through, and helps your exterior paint withstand harsh weather conditions, moisture, and UV exposure for years to come.",
    },
    {
      icon: <PaintRoller className="h-10 w-10 text-emerald-500" />,
      title: "4. Painting",
      description:
        "Our skilled painters use high-quality exterior paints to deliver smooth, even coverage on siding, trim, doors, and architectural details. With professional brushing, rolling, and spraying techniques, we achieve durable finishes that enhance curb appeal and protect your home from the elements.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
      title: "5. Detailing & Touch-Ups",
      description:
        "After the main painting is complete, we inspect every surface closely, addressing any missed spots or inconsistencies. Trim work, edges, and decorative features are carefully detailed and touched up to create a flawless, uniform appearance across your entire exterior.",
    },
    {
      icon: <Trash2 className="h-10 w-10 text-emerald-500" />,
      title: "6. Cleanup & Walkthrough",
      description:
        "When painting is finished, we remove all masking, coverings, and equipment, restoring your landscaping and property to its original condition. Finally, we conduct a thorough walkthrough with you to review every detail and ensure you’re completely satisfied with your freshly painted exterior.",
    },
  ]

  const types = [
    {
      icon: <Home className="h-10 w-10 text-emerald-500" />,
      title: "Wood & Vinyl Siding",
      description:
        "Professional preparation and painting to protect and refresh wood and vinyl siding with durable, lasting finishes.",
    },
    {
      icon: <Grip className="h-10 w-10 text-emerald-500" />,
      title: "Stucco",
      description:
        "Consistent, high-quality finishes for stucco exteriors, including repairs and color updates.",
    },
    {
      icon: <BrickWall className="h-10 w-10 text-emerald-500" />,
      title: "Brick Siding",
      description:
        "Specialized coatings for brick surfaces to seal, protect, and update your exterior.",
    },
    {
      icon: <Anvil className="h-10 w-10 text-emerald-500" />,
      title: "Metal Siding",
      description:
        "Rust-resistant paints and coatings for metal siding that stand up to the elements.",
    },
    {
      icon: <DoorClosed className="h-10 w-10 text-emerald-500" />,
      title: "Wood & Vinyl Trim",
      description:
        "Detailed painting for wood and vinyl trim, fascia, and architectural details to protect and enhance your exterior.",
    },
    {
      icon: <Blinds className="h-10 w-10 text-emerald-500" />,
      title: "Soffits & Fascia",
      description:
        "Careful preparation and painting to keep soffits and fascia protected and looking their best.",
    },
    {
      icon: <Shovel className="h-10 w-10 text-emerald-500" />,
      title: "Concrete Surfaces",
      description:
        "Protective coatings for concrete foundations, patios, and walls.",
    },
    {
      icon: <Fence className="h-10 w-10 text-emerald-500" />,
      title: "Decks & Fences",
      description:
        "Staining and painting for decks and fences to extend their lifespan and improve their appearance.",
    },
  ]

  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/exterior-painting-splash.webp"
            alt="Professional exterior painting of a modern home with crisp white siding by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Exterior Painting
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Enhance your property’s curb appeal with our professional exterior painting services. Whether you’re updating siding, trim, or the entire exterior, our team delivers smooth, durable finishes and precise attention to detail for results that protect and beautify your home or business for years to come.
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

      {/* Exterior Painting Process Section */}
      <section id="exterior-painting-process" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Exterior Painting Process
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our exterior painting process is designed to deliver exceptional results with minimal disruption to your home or business. From start to finish, we prioritize clear communication, thorough surface preparation, and professional workmanship to protect and enhance your property.
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
          <div className="text-center mb-12 mt-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              Exterior Surfaces We Paint
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              From wood siding and stucco to decks and fences, our team provides professional exterior painting services for a wide range of surfaces. No matter the material, we deliver smooth, durable finishes that protect and enhance your property.
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
            Ready to transform your home with a professional exterior paint job? C&C Painting in Saskatoon delivers high-quality, durable finishes that protect, refresh, and enhance your property’s curb appeal. Contact us today for a free estimate and discover why homeowners trust our experienced team for reliable, beautiful results.
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
