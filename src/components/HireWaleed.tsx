import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, TrendingUp, Target } from "lucide-react";

const HireWaleed = () => {
  const offerings = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Product Discovery",
      description: "User research, problem validation, opportunity sizing"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Roadmap & PRDs",
      description: "Prioritized roadmaps, detailed product requirements"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Growth & Analytics",
      description: "Product-led growth, metrics tracking, optimization"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Hire Waleed as Your Fractional Product & Growth Manager
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Hands-on product and growth expertise across discovery, strategy, and execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {offerings.map((offering, index) => (
            <Card key={index} className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                  {offering.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2">{offering.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent max-w-md mx-auto mt-6">
          <CardContent className="p-5 flex flex-col justify-center">
            <h3 className="text-base font-semibold mb-2 text-center">Work Together</h3>
            <p className="text-xs text-muted-foreground mb-4 text-center">
              Part-time, project-based, or contractual engagements
            </p>
            <div className="space-y-2">
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Call
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Proposal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HireWaleed;
