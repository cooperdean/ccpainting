import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutUs() {
  const benefits = [
    "Licensed & Insured Residential & Commercial Painting",
    "Over 10 years of industry experience",
    "Transparent pricing with no hidden fees",
    "Satisfaction guaranteed on all services",
    "Using only high-quality paints and materials",
    "Energy-efficient solutions",
  ]

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/exterior.png?height=600&width=600"
              alt="Exterior White Painted Stucco House"
              width={600}
              height={600}
              className="rounded-xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About C&C Painting</h2>
            <p className="text-lg text-gray-700 mb-6">
              At C&C Painting, we take pride in delivering high-quality painting services to both residential and commercial clients. 
              Our experienced team is dedicated to providing reliable, efficient, and affordable solutions that bring lasting beauty to every space.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you’re planning a new project, need touch-ups, 
              or a full repaint, we have the experience and tools to handle all your painting needs with precision and care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
