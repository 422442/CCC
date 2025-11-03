"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Michael Chen",
    role: "Project Director",
    company: "Skyline Developments",
    rating: 5,
    text: "HM Innovation delivered exceptional results on our Metropolitan Tower project. Their attention to detail and commitment to quality exceeded our expectations. The curtain wall installation was flawless.",
    image: "/professional-businessman-portrait.png",
  },
  {
    name: "Sarah Williams",
    role: "Facilities Manager",
    company: "Riverside Medical Center",
    rating: 5,
    text: "Working with HM Innovation was a pleasure from start to finish. Their team's expertise in healthcare facility requirements ensured our project met all regulatory standards while staying on schedule.",
    image: "/professional-businesswoman-portrait.png",
  },
  {
    name: "David Rodriguez",
    role: "VP of Construction",
    company: "TechCorp Properties",
    rating: 5,
    text: "The level of professionalism and technical expertise demonstrated by HM Innovation is unmatched. They successfully managed our complex multi-building campus project with precision and efficiency.",
    image: "/executive-portrait.png",
  },
  {
    name: "Jennifer Park",
    role: "Owner",
    company: "Grand Hotel Group",
    rating: 5,
    text: "HM Innovation transformed our historic hotel with modern glass systems while respecting the building's heritage. Their innovative solutions and craftsmanship were outstanding.",
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Robert Thompson",
    role: "Director of Facilities",
    company: "State University",
    rating: 5,
    text: "The team's commitment to sustainability and energy efficiency aligned perfectly with our LEED Platinum goals. HM Innovation delivered a world-class science building that serves as a model for future projects.",
    image: "/professional-man-portrait.png",
  },
  {
    name: "Lisa Anderson",
    role: "Development Manager",
    company: "Urban Retail Partners",
    rating: 5,
    text: "HM Innovation's expertise in retail environments was evident throughout our project. The storefront glazing systems they installed have significantly enhanced our tenant spaces and customer experience.",
    image: "/professional-woman-executive.png",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif mb-4">
            <span className="text-foreground">Client </span>
            <span className="gold-text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed text-sm">{review.text}</p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {review.role}, {review.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-card border-border">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-5xl font-bold text-primary">5.0</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">Excellent</div>
                <div className="text-muted-foreground">Based on 250+ reviews</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
