import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const BookSession = () => {
  const { ref, isVisible } = useScrollAnimation();
  const sessions = [
    {
      icon: GraduationCap,
      title: "Product Mentorship",
      description: "Get guidance on product strategy, career growth, or breaking into product management",
      cta: "Book Mentorship Session",
      gradient: "from-primary to-secondary",
      link: "https://calendar.app.google/bXKm9XGckq7Bwu3h7",
    },
    {
      icon: Briefcase,
      title: "Product Consulting",
      description: "Unlock growth, improve unit economics, or launch new products with expert consulting",
      cta: "Book Consulting Call",
      gradient: "from-secondary to-primary",
      link: "https://calendar.app.google/bXKm9XGckq7Bwu3h7",
    },
    {
      icon: Handshake,
      title: "Hiring Discussion",
      description: "Exploring opportunities? Let's discuss how I can drive impact at your organization",
      cta: "Schedule Interview",
      gradient: "from-primary via-secondary to-primary",
      link: "https://calendar.app.google/bXKm9XGckq7Bwu3h7",
    },
  ];

  return (
    <section ref={ref} id="book-session" className={`py-10 md:py-14 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 px-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-1 px-4">
            Ready to Transform Your Product?
          </p>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Book a complimentary 15-minute session to discuss:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {sessions.map((session, index) => (
            <Card
              key={index}
              className="card-hover rounded-2xl border-none shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${session.gradient}`} />
              <CardContent className="p-6 md:p-8 text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${session.gradient} mb-4`}>
                  <session.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3">{session.title}</h3>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed min-h-[3rem] md:min-h-[4rem]">
                  {session.description}
                </p>
                <Button className="w-full rounded-full text-sm md:text-base" size="lg" asChild>
                  <a href={session.link} target="_blank" rel="noopener noreferrer">
                    {session.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="inline-block rounded-2xl border-none shadow-lg max-w-2xl w-full">
            <CardContent className="p-6 md:p-8">
          <p className="text-sm md:text-base lg:text-lg mb-4">Prefer to reach out directly?</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button variant="outline" size="lg" className="rounded-full text-xs sm:text-sm md:text-base" asChild>
                  <a href="mailto:waleedimran24@gmail.com">
                    📧 waleedimran24@gmail.com
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full text-xs sm:text-sm md:text-base" asChild>
                  <a href="https://www.linkedin.com/in/m-waleed-imran/" target="_blank" rel="noopener noreferrer">
                    💼 Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
