"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServicesDropdown from "@/components/ServicesDropdown"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="relative max-w-7xl mx-auto flex items-center justify-center md:justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="C&C Painting logo"
              width={200}
              height={50}
              className=""
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <ServicesDropdown/>
            <Link href="/#about" className="text-white hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-white hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:306-812-7066" className="flex items-center space-x-2 text-white hover:text-emerald-600">
              <Phone className="h-5 w-5 text-emerald-500" />
              <span className="font-medium">306-812-7066</span>
            </a>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          <button className="absolute right-4 md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute right-0 md:hidden bg-black">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="block text-white hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="block text-white hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block text-white hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:306-812-7066"
              className="flex items-center space-x-2 text-white hover:text-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">306-812-7066</span>
            </a>
            <Button asChild className="w-full bg-emerald-600" onClick={() => setIsMenuOpen(false)}>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
