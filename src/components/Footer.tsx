import { Linkedin, Mail, Globe, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className={`py-12 md:py-16 border-t border-border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/m-waleed-imran/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:waleedimran24@gmail.com"
              className="p-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://behance.net/mwaleedimran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Portfolio"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/resume.pdf" download className="hover:text-primary transition-colors">
              Resume
            </a>
            <a href="https://www.linkedin.com/in/m-waleed-imran/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#case-studies" className="hover:text-primary transition-colors">
              Case Studies
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Waleed Imran | Top 1% Product Leader in MENAP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
