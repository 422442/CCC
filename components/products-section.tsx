import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const products = [
  {
    category: "Glass Systems",
    items: [
      { name: "Low-E Insulated Glass", spec: "U-value: 0.28" },
      { name: "Laminated Safety Glass", spec: "PVB Interlayer" },
      { name: "Tempered Glass Panels", spec: "Heat Strengthened" },
      { name: "Acoustic Glass Solutions", spec: "STC Rating: 45+" },
    ],
  },
  {
    category: "Door Hardware",
    items: [
      { name: "Panic Exit Devices", spec: "UL Listed" },
      { name: "Automatic Door Operators", spec: "ADA Compliant" },
      { name: "Access Control Systems", spec: "Smart Integration" },
      { name: "Hinges & Pivots", spec: "Heavy Duty" },
    ],
  },
  {
    category: "Window Systems",
    items: [
      { name: "Aluminum Window Frames", spec: "Thermal Break" },
      { name: "Sliding Window Systems", spec: "Multi-Point Lock" },
      { name: "Casement Windows", spec: "Energy Star" },
      { name: "Fixed Window Units", spec: "Custom Sizes" },
    ],
  },
  {
    category: "Facade Components",
    items: [
      { name: "Spider Fittings", spec: "Stainless Steel" },
      { name: "Point Fixings", spec: "Load Tested" },
      { name: "Structural Sealants", spec: "Weather Resistant" },
      { name: "Gaskets & Seals", spec: "EPDM/Silicone" },
    ],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Premium </span>
              <span className="gold-text-gradient">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              World-class products from leading manufacturers, backed by our expertise and commitment to quality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((category, index) => (
            <ScrollReveal key={index} delay={index * 75}>
              <Card className="p-6 bg-background border-border hover:border-primary/50 transition-colors h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {category.category}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="space-y-1">
                        <div className="text-sm font-medium text-foreground">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.spec}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              View Full Product Catalog
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
