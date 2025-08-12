"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [serviceType, setServiceType] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    console.log("Submitting form...")

    // Log all form values for debugging
    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType,
      message: formData.get("message"),
    })

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          serviceType,
          message: formData.get("message"),
        }),
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Failed to send email: ${res.status} ${errorText}`)
      }

      setIsSubmitted(true)

      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote" className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-300 ease-in-out transition-shadow p-8">
      <h2 className="text-3xl font-bold mb-6">Request a Free Quote</h2>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-green-100 rounded-full p-3 mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Quote Request Submitted!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for contacting C&C Painting. We'll get back to you shortly with a free quote.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type</Label>
            <Select required value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="interior-repaint">Interior Repaint</SelectItem>
                <SelectItem value="exterior-repaint">Exterior Repaint</SelectItem>
                <SelectItem value="drywall-repair">Drywall Repair</SelectItem>
                <SelectItem value="cabinets">Cabinets</SelectItem>
                <SelectItem value="commercial-services">Commercial Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please describe your painting needs or issues"
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Quote"}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to be contacted regarding your painting service request.
          </p>
        </form>
      )}
    </section>
  )
}
