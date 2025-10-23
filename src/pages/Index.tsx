import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Products from "@/components/Products";
import AIAssistant from "@/components/AIAssistant";
import BookSession from "@/components/BookSession";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HireWaleed from "@/components/HireWaleed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="space-y-0">
        <Hero />
        <AIAssistant />
        <HireWaleed />
        <div id="products">
          <Products />
        </div>
        <div id="impact">
          <ImpactMetrics />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="case-studies">
          <CaseStudies />
        </div>
        <BookSession />
        <Recognition />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
