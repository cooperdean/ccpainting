import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="C&C Painting Logo"
                width={100}
                height={50}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-300">
              Professional painting services for residential and commercial properties in the YXE area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400">
                <Instagram className="h-5 w-5 text-emerald-400" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/interior-painting" className="text-gray-300 hover:text-emerald-400">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link href="/exterior-painting" className="text-gray-300 hover:text-emerald-400">
                  Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="/commercial-painting" className="text-gray-300 hover:text-emerald-400">
                  Commercial Painting
                </Link>
              </li>
              <li>
                <Link href="/drywall-repair" className="text-gray-300 hover:text-emerald-400">
                  Drywall Repair
                </Link>
              </li>
              <li>
                <Link href="/cabinet-painting" className="text-gray-300 hover:text-emerald-400">
                  Cabinet Painting
                </Link>
              </li>
              <li>
                <Link href="/texturing-stippling" className="text-gray-300 hover:text-emerald-400">
                  Texturing & Stippling
                </Link>
              </li>
              <li>
                <Link href="/property-maintenance" className="text-gray-300 hover:text-emerald-400">
                  Property Maintenance
                </Link>
              </li>
              <li>
                <Link href="/color-consultation" className="text-gray-300 hover:text-emerald-400">
                  Color Consultation
                </Link>
              </li>
              <li>
                <Link href="/staining" className="text-gray-300 hover:text-emerald-400">
                  Staining
                </Link>
              </li>              
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-emerald-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-emerald-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="text-gray-300 hover:text-emerald-400">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 mt-0.5" />
                <a href="tel:306-812-7066" className="text-gray-300 hover:text-emerald-400">
                  306-812-7066
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 mt-0.5" />
                <a href="mailto:contact@ccpainting.co" className="text-gray-300 hover:text-emerald-400">
                  contact@ccpainting.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} C&C Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
