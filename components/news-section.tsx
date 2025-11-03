import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    title: "HM Innovation Wins Excellence Award for Metropolitan Tower Project",
    date: "March 15, 2024",
    category: "Awards",
    excerpt:
      "Our team has been recognized with the Architectural Glass Excellence Award for outstanding achievement in the Metropolitan Tower curtain wall installation.",
    image: "/award-ceremony-architecture.jpg",
  },
  {
    title: "New Partnership with Leading European Glass Manufacturer",
    date: "March 8, 2024",
    category: "Partnership",
    excerpt:
      "We're excited to announce our strategic partnership with Guardian Glass Europe, expanding our product offerings with cutting-edge glazing solutions.",
    image: "/business-partnership-handshake.png",
  },
  {
    title: "Sustainable Building Practices: Our Commitment to Green Construction",
    date: "February 28, 2024",
    category: "Sustainability",
    excerpt:
      "Learn about our initiatives to reduce environmental impact through energy-efficient glazing systems and sustainable installation practices.",
    image: "/green-sustainable-building.jpg",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif mb-4">
            <span className="text-foreground">Latest </span>
            <span className="gold-text-gradient">News</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Stay updated with our latest projects, partnerships, and industry insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{item.category}</Badge>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}
