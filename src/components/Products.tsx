import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import pakwheelsLogo from "@/assets/logos/pakwheels.png";
import arabwheelsLogo from "@/assets/logos/arabwheels.png";
import imagineLogo from "@/assets/logos/imagine.png";
import eilagoLogo from "@/assets/logos/eilago.jpg";
import swvlLogo from "@/assets/logos/swvl.png";
import bookmeLogo from "@/assets/logos/bookme.png";
import cokitchensLogo from "@/assets/logos/cokitchens.png";

const Products = () => {
  const { ref, isVisible } = useScrollAnimation();
  const products = [
    {
      name: "PakWheels.com",
      description: "Pakistan's #1 Automobile Marketplace",
      url: "https://www.pakwheels.com",
      gradient: "from-primary to-secondary",
      category: "Product & Growth",
      logo: pakwheelsLogo
    },
    {
      name: "ArabWheels.com",
      description: "MENAP's Emerging Auto Platform | UAE & KSA",
      url: "https://www.arabwheels.com",
      gradient: "from-secondary to-accent",
      category: "Product & Growth",
      logo: arabwheelsLogo
    },
    {
      name: "Certijaz",
      description: "Digital Certification & Verification Platform",
      url: "#",
      gradient: "from-accent to-primary",
      category: "Product & Growth",
      logo: null
    },
    {
      name: "Imagine AI",
      description: "AI-Powered Creative & Automation Tools",
      url: "#",
      gradient: "from-primary via-secondary to-accent",
      category: "Product & Growth",
      logo: imagineLogo
    },
    {
      name: "Eilago",
      description: "AI-Powered Travel Super App | MENAP",
      url: "#",
      gradient: "from-secondary to-primary",
      category: "Product & Growth",
      logo: eilagoLogo
    },
    {
      name: "Swvl",
      description: "Mass Transit as a Service | Global",
      url: "https://www.swvl.com",
      gradient: "from-accent via-secondary to-primary",
      category: "Product & Growth",
      logo: swvlLogo
    },
    {
      name: "Bookme.pk",
      description: "Pakistan's Travel & Booking Platform",
      url: "https://bookme.pk",
      gradient: "from-primary to-accent",
      category: "Product & Growth",
      logo: bookmeLogo
    },
    {
      name: "CoKitchens",
      description: "Cloud Kitchen Network | Foodtech Startup",
      url: "#",
      gradient: "from-secondary to-accent",
      category: "Product & Growth",
      logo: cokitchensLogo
    },
  ];

  return (
    <section ref={ref} id="products" className={`py-12 md:py-16 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl float-3d" />
        <div className="absolute bottom-20 left-10 w-36 h-36 bg-secondary/10 rounded-full blur-3xl float-3d" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-8 animate-fade-in perspective-container">
          <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 font-medium">
            Trusted by MENAP's Leading Tech Companies
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 px-4">
            Products I've <span className="gradient-text">Built & Scaled</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            From 0-to-1 launches to scaling existing platforms — delivered measurable growth across Product & Growth initiatives
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 perspective-container">
          {products.map((product, index) => (
            <Card
              key={index}
              className="card-hover rounded-2xl border overflow-hidden group animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-20 md:h-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-2 md:p-3">
                  {product.logo ? (
                    <img 
                      src={product.logo} 
                      alt={product.name} 
                      className="max-h-10 md:max-h-12 max-w-[90%] object-contain"
                    />
                  ) : (
                    <h3 className="text-base md:text-lg font-bold" style={{ color: '#1e3a8a' }}>certijaz.com</h3>
                  )}
                </div>
              </div>
              <CardContent className="p-3 md:p-4">
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2 min-h-[2rem]">{product.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  asChild
                >
                  <a href={product.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${product.name}`}>
                    View
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
