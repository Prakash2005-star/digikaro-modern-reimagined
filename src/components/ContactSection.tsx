import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-card opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Let's discuss how we can help elevate your brand 
            and achieve your digital marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card border-white/10 animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                START YOUR PROJECT
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      FIRST NAME
                    </label>
                    <Input 
                      type="text"
                      placeholder="Your first name"
                      className="glass-card border-white/20 bg-transparent focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      LAST NAME
                    </label>
                    <Input 
                      type="text"
                      placeholder="Your last name"
                      className="glass-card border-white/20 bg-transparent focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                    EMAIL ADDRESS
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="glass-card border-white/20 bg-transparent focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                    PHONE NUMBER
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="glass-card border-white/20 bg-transparent focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                    PROJECT DETAILS
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and how we can help you..."
                    rows={4}
                    className="glass-card border-white/20 bg-transparent focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider py-4 rounded-full shadow-glow animate-smooth group"
                >
                  SEND MESSAGE
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2 uppercase">PHONE</h4>
                    <p className="text-muted-foreground">+91 9878653380</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2 uppercase">EMAIL</h4>
                    <p className="text-muted-foreground">info@digikarocreatives.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2 uppercase">ADDRESS</h4>
                    <p className="text-muted-foreground">123 Creative Street</p>
                    <p className="text-muted-foreground">Digital City, DC 12345</p>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient mb-2 uppercase">BUSINESS HOURS</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick action buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider py-4 rounded-full animate-smooth"
                variant="outline"
              >
                SCHEDULE A FREE CONSULTATION
              </Button>
              <Button 
                className="w-full glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider py-4 rounded-full animate-smooth"
                variant="outline"
              >
                REQUEST A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;