import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Calendar, Sparkles, Brain, Zap, Linkedin } from "lucide-react";
import heroImage from "@/assets/profile-waleed.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background transition-all duration-700 py-16 md:py-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float-3d" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl float-3d" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-accent/10 rounded-full blur-3xl float-3d" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl float-3d" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-4 md:space-y-6 animate-fade-in perspective-container">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="text-xs md:text-sm font-semibold text-foreground">Top 1% Product & Growth Leader</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="gradient-text">Turning Complex Problems and Markets Into</span> $200M+ Revenue Products
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                <strong>Available for fractional, part-time, or project-based engagements.</strong> 6+ years building products for <span className="font-bold text-primary">50M+ users</span> across Marketplace, Fintech, SaaS & Mobility in MENAP.
              </p>

              {/* Founder Story Badge */}
              <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-foreground mb-1">Founder Journey: Ground-Up Understanding</p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Rode 110 km/day as delivery boy for 1 month to deeply understand users & food delivery operations. Raised <span className="font-bold text-primary">$50,000</span> in angel funding for CoKitchens.
                    </p>
                  </div>
                </div>
              </div>


              {/* Animated Metrics */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <div className="text-center p-2 md:p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border card-hover">
                  <div className="text-lg md:text-2xl font-bold text-primary">$200M+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Revenue</div>
                </div>
                <div className="text-center p-2 md:p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border card-hover">
                  <div className="text-lg md:text-2xl font-bold text-secondary">50M+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Users</div>
                </div>
                <div className="text-center p-2 md:p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border card-hover">
                  <div className="text-lg md:text-2xl font-bold text-accent">+31%</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">EBITDA</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-md text-sm md:text-base w-full sm:w-auto" asChild>
                  <a href="#contact" aria-label="Schedule a consultation with Waleed Imran">
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Schedule Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-md text-sm md:text-base w-full sm:w-auto" asChild>
                  <a href="#case-studies" aria-label="View Waleed's product case studies">
                    View Case Studies
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fade-in perspective-container lg:self-start" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-[2rem] md:rounded-[3rem] blur-3xl" />
                <img
                  src={heroImage}
                  alt="Waleed Imran - Product & Growth Manager specialized in product strategy, growth loops, and data-driven product management for marketplace, fintech, and SaaS products"
                  width="512"
                  height="512"
                  loading="eager"
                  className="relative rounded-[2rem] md:rounded-[3rem] w-full h-full object-cover shadow-2xl border-4 border-primary/20 card-hover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
