import { PaintRoller, Sun, Drill, Grip, Building2, DoorOpen, House, Palette, Paintbrush } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";

export function Services() {
  const services = [
    {
      icon: <PaintRoller className="h-10 w-10 text-emerald-500" />,
      title: "Interior Painting",
      description: "Our professional repainting services are perfect for giving your home or business a fresh, renewed appearance—whether you're updating colors or restoring worn surfaces.",
      href: "/interior-painting",
    },
    {
      icon: <Sun className="h-10 w-10 text-emerald-500" />,
      title: "Exterior Painting",
      description: "Boost your property's curb appeal with our professional exterior painting services. We handle everything from siding and stucco to trim and doors, delivering clean, durable finishes that stand up to the elements and leave a lasting impression.",
      href: "/exterior-painting",
    },
    {
      icon: <Building2 className="h-10 w-10 text-emerald-500" />,
      title: "Commercial Projects",
      description: "Revitalize your business with our expert commercial painting services. We deliver professional-grade results that enhance the look and feel of offices, retail spaces, and commercial properties. Using durable finishes and precise application, we help create an inviting, polished environment that reflects your brand.",
      href: "/commercial-painting",
    },
    {
      icon: <Drill className="h-10 w-10 text-emerald-500" />,
      title: "Drywall Repair",
      description: "We offer professional drywall repair, boarding, and taping services to restore and prepare your walls for a flawless finish. From patching holes to full wall replacements, our team ensures clean, smooth results that are ready for paint.",
      href: "/drywall-repair",
    },
    {
      icon: <Grip className="h-10 w-10 text-emerald-500" />,
      title: "Texturing & Stippling",
      description: "Add depth and character to your ceilings and walls with our expert texturing and stippling services. Whether you're matching an existing finish or starting fresh, we deliver consistent, high-quality textures that enhance the overall look of your space.",
      href: "/texturing-stippling",
    },
    {
      icon: <House className="h-10 w-10 text-emerald-500" />,
      title: "Property Maintenance",
      description: "Keep your property in top condition with our reliable property maintenance services. From routine touch-ups and repairs to seasonal upkeep, we help homeowners and businesses maintain clean, safe, and visually appealing spaces year-round.",
      href: "/property-maintenance",
    },
    {
      icon: <DoorOpen className="h-10 w-10 text-emerald-500" />,
      title: "Cabinets",
      description: "Refresh your kitchen or bathroom with our professional cabinet painting services. We use high-quality finishes and precise techniques to transform worn or outdated cabinets into clean, modern focal points—without the cost of a full replacement.",
      href: "/cabinet-painting",
    },
    {
      icon: <Palette className="h-10 w-10 text-emerald-500" />,
      title: "Color Consulation",
      description: "Take the guesswork out of choosing the perfect palette with our professional color consultation services. We’ll help you select harmonious colors and finishes that reflect your vision and enhance your space, ensuring a cohesive and beautiful result you’ll love.",
      href: "/color-consultation",
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-emerald-500" />,
      title: "Staining",
      description: "Enhance the natural beauty of your wood surfaces with our expert staining services. From decks and fences to cabinets and trim, we apply premium stains that protect, enrich, and showcase the unique character of the wood for a warm, lasting finish.",
      href: "/staining",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive interior and exterior painting, staining, spraying, drywalling, texturing, stippling, and cabinet services for residential 
            and commercial properties—specializing in new builds and repaints with a focus on quality, precision, and long-lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
            >
            <Card key={index} className="border-none shadow-lg hover:shadow-2xl duration-300 ease-in-out transition-shadow block h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
