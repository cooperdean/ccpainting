import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-300 ease-in-out transition-shadow p-8 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        Have questions or need service? Reach out to our friendly team using any of the methods below.
      </p>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-emerald-500 mt-1" />
          <div>
            <h3 className="font-medium text-lg">Phone</h3>
            <a href="tel:306-812-7066" className="text-emerald-500 hover:underline">
              306-812-7066
            </a>
            <p className="text-sm text-gray-500 mt-1">Available until 6pm every day.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-emerald-500 mt-1" />
          <div>
            <h3 className="font-medium text-lg">Email</h3>
            <a href="mailto:contact@ccpainting.co" className="text-emerald-500 hover:underline">
              contact@ccpainting.co
            </a>
            <p className="text-sm text-gray-500 mt-1">For quotes and general inquiries</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-emerald-500 mt-1" />
          <div>
            <h3 className="font-medium text-lg">Service Area</h3>
            <p className="text-gray-700">Saskatoon & Surrounding Area</p>
            <p className="text-sm text-gray-500 mt-1">
              Serving residential and commercial clients throughout the YXE area
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="h-6 w-6 text-emerald-500 mt-1" />
          <div>
            <h3 className="font-medium text-lg">Business Hours</h3>
            <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm text-gray-500 mt-1">Email us at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
