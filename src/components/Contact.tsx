import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Message:
${formData.message}
    `.trim();

    try {
      // Open mailto link
      window.location.href = `mailto:waleedimran24@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
      
      toast({
        title: "Email Client Opened",
        description: "Please send the email from your email client to complete your message.",
      });
      
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please email directly at waleedimran24@gmail.com",
        variant: "destructive",
      });
    }
  };

  return (
    <section ref={ref} id="contact" className={`py-10 md:py-14 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 px-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="rounded-2xl border-none shadow-lg animate-fade-in">
            <CardContent className="p-5 md:p-6 lg:p-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl min-h-[120px] md:min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full text-sm md:text-base">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Resume */}
          <div className="space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="rounded-2xl border-none shadow-lg">
              <CardContent className="p-5 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">Direct Contact</h3>
                <div className="space-y-3 md:space-y-4">
                  <a 
                    href="mailto:waleedimran24@gmail.com" 
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-primary to-accent flex-shrink-0">
                      <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm md:text-base">Email</div>
                      <div className="text-xs md:text-sm text-muted-foreground truncate">waleedimran24@gmail.com</div>
                    </div>
                  </a>

                  <a 
                    href="tel:+923024531216" 
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-accent to-primary flex-shrink-0">
                      <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm md:text-base">Phone</div>
                      <div className="text-xs md:text-sm text-muted-foreground">+92-302-4531216</div>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/m-waleed-imran/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-primary to-accent flex-shrink-0">
                      <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm md:text-base">LinkedIn</div>
                      <div className="text-xs md:text-sm text-muted-foreground truncate">linkedin.com/in/m-waleed-imran</div>
                    </div>
                  </a>

                  <a 
                    href="https://behance.net/mwaleedimran" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-accent to-primary flex-shrink-0">
                      <Globe className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm md:text-base">Portfolio</div>
                      <div className="text-xs md:text-sm text-muted-foreground truncate">behance.net/mwaleedimran</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-none shadow-lg bg-gradient-to-br from-primary to-accent">
              <CardContent className="p-4 md:p-5">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md flex-shrink-0">
                    <Download className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div className="text-white min-w-0">
                    <h3 className="text-base md:text-lg font-bold">Download Resume</h3>
                    <p className="text-white/80 text-xs">Complete professional profile</p>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full rounded-full text-xs md:text-sm"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    Download Resume (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
