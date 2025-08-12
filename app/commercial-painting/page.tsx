import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TrafficCone, Clock, CalendarCheck2, CalendarClock, LampDesk, Barcode, BedDouble, HousePlus, Warehouse, School } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function CommercialPaintingPage() {
  const whys = [
    {
      icon: <Clock className="h-10 w-10 text-emerald-500" />,
      title: "Experience You Can Trust",
      description:
        "With over 10 years of experience serving Saskatoon businesses, we understand the unique demands of commercial painting. Our fully insured team uses premium materials and proven techniques to deliver consistent, long-lasting results.",
    },
    {
      icon: <CalendarCheck2 className="h-10 w-10 text-emerald-500" />,
      title: "Minimal Disruption",
      description:
        "We work around your schedule—including evenings and weekends—to keep your operations running smoothly.",
    },
    {
      icon: <TrafficCone className="h-10 w-10 text-emerald-500" />,
      title: "Clean, Professional Approach",
      description:
        "From thorough preparation to meticulous cleanup, we maintain safe, organized job sites and respect your property.",
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-emerald-500" />,
      title: "Ongoing Maintenance Options",
      description:
        "Keep your space looking its best with scheduled maintenance painting and touch-ups.",
    },
  ]

  const types = [
    {
      icon: <LampDesk className="h-10 w-10 text-emerald-500" />,
      title: "Offices & Corporate Spaces",
      description:
        "Fresh, modern finishes to impress clients and create a productive environment.",
    },
    {
      icon: <Barcode className="h-10 w-10 text-emerald-500" />,
      title: "Retail Stores & Showrooms:",
      description:
        "Professional painting that reflects your brand and attracts customers.",
    },
    {
      icon: <BedDouble className="h-10 w-10 text-emerald-500" />,
      title: "Restaurants & Hospitality",
      description:
        "Clean, inviting spaces your guests will love.",
    },
    {
      icon: <HousePlus className="h-10 w-10 text-emerald-500" />,
      title: "Multi-Unit Residential",
      description:
        "Reliable repainting for apartments, condos, and rental properties.",
    },
    {
      icon: <Warehouse className="h-10 w-10 text-emerald-500" />,
      title: "Industrial Facilities & Warehouses",
      description:
        "Durable coatings that stand up to heavy use.",
    },
    {
      icon: <School className="h-10 w-10 text-emerald-500" />,
      title: "Schools & Institutions",
      description:
        "Safe, efficient painting for educational and public facilities.",
    },
  ]

  return (
    <>
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/commercial-painting-splash.webp"
            alt="Professional commercial painting job inside a new office space by C&C Painting Saskatoon"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Painting
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Professional painting for offices, retail spaces, apartments, and industrial buildings. C&C Painting delivers durable finishes, minimal disruption, and reliable scheduling to keep your business looking polished and professional. We also offer ongoing maintenance painting and reliable service for repeat projects to keep your space looking its best.
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
      <section id="commercial-painting-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Our experienced team delivers professional commercial painting with minimal disruption. We use premium materials, safe practices, and flexible scheduling to ensure your business looks its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {whys.map((why, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl duration-300 ease-in-out transition-shadow h-full"
              >
                <CardHeader>
                  <div className="mb-4">{why.icon}</div>
                  <CardTitle>{why.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {why.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mt-16">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              Types of Commercial Projects We Handle
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              From offices and retail spaces to multi-unit buildings and industrial facilities, we provide expert painting solutions tailored to your unique commercial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
        
        <div className="mt-1 flex flex-col items-center text-center">
          <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-6 mt-12 px-8">
            Ready to refresh your business with a professional commercial paint job? C&C Painting in Saskatoon delivers high-quality, durable finishes that protect, update, and elevate your property’s appearance. Contact us today for a free estimate and discover why local businesses trust our experienced team for reliable, beautiful results.
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
