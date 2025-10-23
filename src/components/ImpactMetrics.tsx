import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Target, Zap, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ImpactMetrics = () => {
  const { ref, isVisible } = useScrollAnimation();
  const primaryMetrics = [
    { icon: DollarSign, value: "$200M+", label: "Total Revenue Generated Across Products" },
    { icon: Users, value: "50M+", label: "Users Reached Across MENAP Markets" },
    { icon: TrendingUp, value: "200%", label: "MRR Growth in 12 Months at Swvl" },
    { icon: Target, value: "-30% → +1%", label: "EBITDA Turnaround in 3 Quarters" },
  ];

  const secondaryMetrics = [
    { icon: Zap, value: "21%", label: "Growth in digital payment adoption at PakWheels" },
    { icon: TrendingUp, value: "2X", label: "PakWheels Car Inspection sales growth breaking 2-year plateau" },
    { icon: Rocket, value: "$4M", label: "Topline achieved in 2 quarters (Eilago)" },
    { icon: DollarSign, value: "$50K", label: "Angel funding raised for CoKitchens" },
  ];

  return (
    <section ref={ref} id="impact" className={`py-12 md:py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* 3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl float-3d" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl float-3d" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10 animate-fade-in perspective-container">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 px-4">
            Proven Track Record of <span className="gradient-text">Transformational Growth</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">Measurable results across revenue, user growth, and profitability</p>
        </div>

        {/* Primary Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-5 perspective-container">
          {primaryMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className="card-hover rounded-2xl border overflow-hidden animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-5 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent mb-2 md:mb-3">
                  <metric.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{metric.value}</div>
                <p className="text-xs text-muted-foreground leading-tight">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 perspective-container">
          {secondaryMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className="card-hover rounded-xl border bg-card animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <CardContent className="p-3 md:p-4 flex items-center gap-2 md:gap-3">
                <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
                  <metric.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg md:text-xl font-bold text-primary mb-0.5">{metric.value}</div>
                  <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">{metric.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
