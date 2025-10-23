import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, DollarSign, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();
  const cases = [
    {
      company: "PakWheels & ArabWheels",
      title: "Breaking a 2-Year Plateau: 2X Growth Through Product-Led Strategy",
      challenge: "Car inspection sales stagnant for 2 years, low e-payment adoption, manual operations",
      solution: "Built growth loops, AI-driven personalization, inspector app, better payment gateways, marketing automation",
      results: [
        "2X sales growth in 1 year",
        "21% increase in self-checkout",
        "10% MoM growth in car inspections",
        "25% improvement in NPS and operational KPIs",
        "Expanded to UAE and Saudi Arabia (ArabWheels)"
      ],
      tech: ["MoEngage", "OneSignal", "GA4", "Power BI", "Figma", "AWS"],
      links: [
        { label: "Visit PakWheels.com", url: "https://www.pakwheels.com" },
        { label: "Visit ArabWheels.com", url: "https://www.arabwheels.com" }
      ],
      icon: TrendingUp,
      gradient: "from-primary to-accent",
    },
    {
      company: "Swvl",
      title: "EBITDA Turnaround: From -30% to +1% Profitability in 3 Quarters",
      challenge: "Massive losses in B2B vertical, inefficient operations, low digitization",
      solution: "Built SaaS platform for supply side, dynamic routing engine, launched Swvl University B2B2C, product-led sales",
      results: [
        "EBITDA growth from -30% to +1% in 3 quarters",
        "2X MRR growth reaching $500K in 12 months",
        "Launched $1B market opportunity product (Swvl University)",
        "15% net margin improvement"
      ],
      tech: ["Dynamic routing AI", "SaaS platform", "B2B user app"],
      links: [
        { label: "Learn about Swvl", url: "https://www.swvl.com" }
      ],
      icon: DollarSign,
      gradient: "from-accent to-primary",
    },
    {
      company: "Eilago",
      title: "Launching Travel Fintech: $5M+ Revenue in 2 Quarters",
      challenge: "Price fragmentation in travel, low platform stickiness, supply inefficiencies",
      solution: "Re-launched platform in KSA/UAE/Egypt, integrated Skyscanner/Wego/Farecompare, built BNPL fintech and AI price prediction",
      results: [
        "$4M topline in flights in 2 quarters",
        "$1.3M in hotel booking revenue",
        "20% conversion from meta platforms to direct bookings",
        "Launched AI-powered price prediction engine"
      ],
      tech: ["Travel AI", "Expedia B2B API", "BNPL fintech", "Price prediction ML"],
      links: [
        { label: "Explore Eilago", url: "#" }
      ],
      icon: Users,
      gradient: "from-primary via-accent to-primary",
    }
  ];

  return (
    <section ref={ref} id="case-studies" className={`py-10 md:py-14 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-36 h-36 bg-accent/10 rounded-full blur-3xl float-3d" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10 animate-fade-in perspective-container">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 px-4">
            How I Drive <span className="gradient-text">Millions in Revenue</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">Real problems solved. Real impact delivered. Real growth achieved.</p>
        </div>

        <div className="space-y-4 md:space-y-6 perspective-container">
          {cases.map((study, index) => (
            <Card
              key={index}
              className="card-hover rounded-3xl border-2 border-border/50 shadow-xl overflow-hidden animate-fade-in bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
              <CardContent className="p-5 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className={`p-2 md:p-2.5 lg:p-3 rounded-xl bg-gradient-to-br ${study.gradient} flex-shrink-0`}>
                          <study.icon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{study.company}</h3>
                      </div>
                      <h4 className="text-base md:text-lg lg:text-xl font-semibold text-primary mb-3 md:mb-4">{study.title}</h4>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-xs md:text-sm lg:text-base">Challenge:</h5>
                      <p className="text-xs md:text-sm lg:text-base text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-xs md:text-sm lg:text-base">Solution:</h5>
                      <p className="text-xs md:text-sm lg:text-base text-muted-foreground">{study.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, i) => (
                        <span key={i} className="px-2.5 md:px-3 py-0.5 md:py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {study.links.map((link, i) => (
                        <Button key={i} variant="outline" size="sm" className="rounded-full text-xs md:text-sm" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${study.company} - ${link.label}`}>
                            {link.label}
                            <ExternalLink className="ml-1.5 md:ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h5 className="font-semibold text-sm md:text-base lg:text-lg">Results:</h5>
                    <ul className="space-y-2 md:space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <div className="mt-1 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                          <span className="text-xs md:text-sm lg:text-base text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
