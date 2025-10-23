import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, GraduationCap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Recognition = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlights = [
    { icon: Trophy, title: "Winner - Pak Tech Summit 2020", subtitle: "1M PKR Award" },
    { icon: Award, title: "AWS & GCP Credits Grant", subtitle: "$25,000" },
    { icon: GraduationCap, title: "Product-Led Growth Certification", subtitle: "(PLGC)™" },
    { icon: Users, title: "Founding Member - Product Soch", subtitle: "Pakistan's 1st Product Community" },
    { icon: Award, title: "VC Scout - AWS Stonks", subtitle: "" },
    { icon: Trophy, title: "Founding President - COMSATS Entrepreneurial Society", subtitle: "7 startups founded, 3 funded" },
  ];

  return (
    <section ref={ref} className={`py-10 md:py-14 bg-muted/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 px-4">
            Recognized <span className="gradient-text">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="card-hover rounded-2xl border-none animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4 md:p-5 flex items-start gap-2.5 md:gap-3">
                <div className="p-2 md:p-2.5 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
                  <item.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-xs md:text-sm leading-tight mb-0.5">{item.title}</h4>
                  {item.subtitle && <p className="text-[10px] md:text-xs text-muted-foreground">{item.subtitle}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
