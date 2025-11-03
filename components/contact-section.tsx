"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      content: ["1234 Innovation Drive", "Suite 500", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["Main: (555) 123-4567", "Toll Free: (800) 123-4567"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["General: info@hminnovation.com", "Sales: sales@hminnovation.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Get In </span>
              <span className="gold-text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Ready to start your project? Contact us today for a free consultation and discover how we can bring your
              vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <Card
                        key={index}
                        className="p-6 bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground mb-1">{info.title}</div>
                            <div className="text-muted-foreground text-sm">
                              {info.content.map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-card border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-card border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="bg-card border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-card border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="bg-card border-border resize-none focus:border-primary transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gold-gradient text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
