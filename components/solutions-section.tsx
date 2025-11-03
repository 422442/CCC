import { Card } from "@/components/ui/card"
import { Building2, Layers, Wrench, Shield } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const solutions = [
  {
    icon: Building2,
    title: "Curtain Wall Systems",
    description:
      "Advanced facade solutions combining structural integrity with aesthetic excellence. Our curtain wall systems deliver superior thermal performance and weather resistance.",
    features: ["Unitized Systems", "Stick Systems", "Point-Supported Glass"],
  },
  {
    icon: Layers,
    title: "Structural Glazing",
    description:
      "Seamless glass installations that maximize transparency and natural light. Engineered for strength, designed for beauty.",
    features: ["Frameless Glass", "Spider Glazing", "Cable Net Systems"],
  },
  {
    icon: Wrench,
    title: "Hardware Solutions",
    description:
      "Premium architectural hardware from world-leading manufacturers. Precision-engineered components for doors, windows, and facades.",
    features: ["Door Hardware", "Window Systems", "Facade Fittings"],
  },
  {
    icon: Shield,
    title: "Building Integration",
    description:
      "Comprehensive project management from concept to completion. We ensure seamless integration of all building envelope systems.",
    features: ["Design Consultation", "Installation", "Maintenance"],
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Comprehensive </span>
              <span className="gold-text-gradient">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              From concept to completion, we deliver integrated building envelope solutions that exceed expectations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
