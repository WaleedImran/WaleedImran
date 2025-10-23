import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AIAssistant = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Generate dynamic response based on query
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let response = "";
      
      // Match query to relevant expertise
      if (lowerQuery.includes("growth") || lowerQuery.includes("revenue") || lowerQuery.includes("monetization")) {
        response = "✅ Yes! Waleed has driven $200M+ revenue across multiple products with proven PLG strategies and monetization expertise.";
      } else if (lowerQuery.includes("marketplace") || lowerQuery.includes("two-sided")) {
        response = "✅ Absolutely! Waleed scaled marketplaces like PakWheels (50M+ users) and ArabWheels with deep two-sided platform expertise.";
      } else if (lowerQuery.includes("saas") || lowerQuery.includes("subscription")) {
        response = "✅ Perfect fit! Waleed has extensive SaaS and subscription model experience, turning products EBITDA positive.";
      } else if (lowerQuery.includes("0-to-1") || lowerQuery.includes("launch") || lowerQuery.includes("startup")) {
        response = "✅ Yes! Waleed excels at 0-to-1 launches and finding product-market fit through data-driven iteration.";
      } else if (lowerQuery.includes("data") || lowerQuery.includes("analytics") || lowerQuery.includes("sql")) {
        response = "✅ Definitely! Waleed's data-driven approach (SQL, Python, Power BI) ensures every decision is backed by insights.";
      } else if (lowerQuery.includes("team") || lowerQuery.includes("leadership") || lowerQuery.includes("manage")) {
        response = "✅ Yes! Waleed has proven cross-functional leadership across engineering, design, ops, and business teams.";
      } else if (lowerQuery.includes("scale") || lowerQuery.includes("scaling")) {
        response = "✅ Perfect match! Waleed scaled products to 50M+ users and $200M+ revenue with proven scaling strategies.";
      } else if (lowerQuery.includes("fintech") || lowerQuery.includes("mobility") || lowerQuery.includes("food")) {
        response = "✅ Yes! Waleed has deep domain expertise in marketplaces, fintech, mobility, and food-tech with measurable success.";
      } else {
        response = "✅ Yes! With $200M+ revenue driven, 50M+ users reached, and expertise across marketplaces, SaaS, and fintech, Waleed can solve your challenge.";
      }

      setResponse(response);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section ref={ref} className={`py-10 md:py-14 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* 3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-36 h-36 bg-primary/10 rounded-full blur-3xl float-3d" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl float-3d" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-3 md:mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-semibold">AI-Powered Assistant</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 px-4">
              Will Waleed be the <span className="gradient-text">right guy for you?</span> Ask AI
            </h2>
            <p className="text-sm md:text-base text-muted-foreground px-4">
              Describe your product challenge and let AI analyze if Waleed's expertise is the perfect match
            </p>
          </div>

          <Card className="rounded-3xl border-2 border-border/50 shadow-2xl overflow-hidden animate-fade-in bg-card/80 backdrop-blur-sm" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6 md:p-8">
              <Textarea
                placeholder="Write what product do you want Waleed to solve"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-h-[120px] mb-4 rounded-2xl resize-none text-base"
              />
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={isLoading || !query.trim()}
                className="w-full rounded-full"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Is Waleed the right fit for me?
                  </>
                )}
              </Button>

              {response && (
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 animate-fade-in">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {response}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
