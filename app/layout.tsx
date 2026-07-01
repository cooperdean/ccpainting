import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "C&C Painting | Saskatoon Painting Contractors",
    template: "%s | C&C Painting Saskatoon",
  },
  description: "Professional residential and commercial painting services in Saskatoon. Interior painting, exterior painting, cabinet painting, and more. Get a free quote today.",
  metadataBase: new URL("https://www.ccpainting.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "C&C Painting",
    title: "C&C Painting | Saskatoon Painting Contractors",
    description: "Professional residential and commercial painting services in Saskatoon. Interior painting, exterior painting, cabinet painting, and more. Get a free quote today.",
    url: "https://www.ccpainting.co",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ccpainting.co",
  name: "C&C Painting",
  description: "Professional residential and commercial painting services in Saskatoon, Saskatchewan.",
  url: "https://www.ccpainting.co",
  telephone: "+13068127066",
  email: "contact@ccpainting.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "City",
    name: "Saskatoon",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Staining" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Texturing & Stippling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Color Consultation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Maintenance" } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
