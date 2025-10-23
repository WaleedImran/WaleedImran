import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import palestineFlag from "@/assets/palestine-flag.png";
import keffiyehPattern from "@/assets/keffiyeh-pattern.webp";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Impact", href: "#impact" },
    { label: "Skills", href: "#skills" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50">
        <div className="bg-white text-black py-1.5 text-center text-xs md:text-sm font-medium border-b border-border">
          <div className="container mx-auto px-4 flex items-center justify-center gap-2">
            <img src={palestineFlag} alt="Palestine" className="w-5 h-3 object-cover rounded-sm" />
            <span>Free Palestine</span>
          </div>
        </div>
        <div className="bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm transition-all duration-300 relative"
      >
        {/* Keffiyeh Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: `url(${keffiyehPattern})`, backgroundSize: '200px', backgroundRepeat: 'repeat' }} 
        />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold gradient-text">Waleed Imran</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                size="sm" 
                className="rounded-md"
                onClick={() => document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Book a session with Waleed"
              >
                Book Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                size="sm" 
                className="w-full rounded-md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Book a session with Waleed"
              >
                Book Session
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Floating CTA */}
      <Button
        size="lg"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 rounded-md shadow-2xl z-40 hidden sm:flex text-sm md:text-base"
        onClick={() => document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Quick access to book a session"
      >
        📅 Book Session
      </Button>
    </>
  );
};

export default Navigation;
