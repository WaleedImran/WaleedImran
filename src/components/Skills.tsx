import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart3, Rocket, Sparkles, Users2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skills = [
    {
      number: "01",
      icon: Target,
      title: "Product-Led Growth & Monetization",
      description: "Expertise in growth loops, viral mechanics, retention strategies, and turning products EBITDA positive",
      gradient: "from-primary to-secondary",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Product Strategy & Data-driven Decision Science",
      description: "Crafting winning product strategies through rigorous data analysis, user research, and market insights to drive sustainable growth",
      gradient: "from-secondary to-primary",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Right Problems to Solve, Right Features to Build",
      description: "Expert at identifying the right problems to solve, prioritizing high-impact features, and achieving product-market fit while scaling efficiently",
      gradient: "from-primary via-secondary to-primary",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Marketplace & SaaS Product Expertise",
      description: "Deep expertise in building and scaling two-sided marketplaces, SaaS platforms, and subscription-based business models",
      gradient: "from-secondary via-primary to-secondary",
    },
    {
      number: "05",
      icon: Users2,
      title: "Cross-Functional Leadership & Execution",
      description: "Leading diverse teams across engineering, design, ops, and business to deliver measurable business impact",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section ref={ref} className={`py-12 md:py-16 bg-muted/30 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 px-4">
            Core Expertise That <span className="gradient-text">Drives Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="card-hover rounded-2xl border-none overflow-hidden animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${skill.gradient}`} />
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-muted-foreground/20">{skill.number}</div>
                  <div className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${skill.gradient} group-hover:scale-110 transition-transform`}>
                    <skill.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 leading-tight">{skill.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
