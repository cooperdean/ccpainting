import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Real Life Rentals",
      location: "Saskatoon, SK",
      content:
        "We've had the pleasure of working with Colt and Cooper (C&C) for just over a year, and their service has been exceptional. From the outset, they quickly grasped our needs with minimal direction and have consistently delivered results that exceed our expectations. Their communication is clear and consistent throughout every project, and they always go above and beyond to ensure success. We're truly grateful to have found a partner like C&C and look forward to many more years of collaboration.",
      rating: 5,
      logo: "/rlr-logo.png",
      alt: "Real Life Rentals Logo",
      website: "https://www.realliferentals.ca/"
    },
    {
      name: "Ozmun Exteriors Inc.",
      location: "Saskatoon, SK",
      content:
        "We’ve used the guys at C&C on a number of painting projects over the years and they always have done a great job. Sites always clean, never gotten a complaint. Flexible on schedule as well, which is hard to find in the industry. Would definitely recommend them to other generals as well as private clients.",
      rating: 5,
      logo: "/ozmun-logo.png",
      alt: "Ozmun Exteriors Inc. Logo",
      website: "https://www.ozmunexteriors.com/"
    },
    {
      name: "Carroll Homes Ltd.",
      location: "Saskatoon, SK",
      content:
        "We’ve worked with C&C Painting on numerous projects and they’ve consistently delivered excellent results. Their pricing is competitive, their team is professional, and the quality of their work speaks for itself. We’ve never had a single issue or complaint — They show up, do the job right, and leave our clients happy. Highly recommend C&C Painting if you’re looking for reliable, high quality painters.",
      rating: 5,
      logo: "/carroll-homes-logo.png",
      alt: "Carroll Homes Ltd. Logo",
      website: "https://www.carrollhomes.ca/"
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between border-none shadow-lg hover:shadow-2xl duration-300 ease-in-out transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <i className="text-gray-700 mb-6">"{testimonial.content}"</i>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Link target="_blank" rel="noopener noreferrer" href={testimonial.website} className="flex items-center">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.alt}
                      width={150}
                      height={25}
                      className=""
                    />
                  </Link>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
