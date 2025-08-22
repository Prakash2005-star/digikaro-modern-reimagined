import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero animate-fade-in">
            CONTACT US
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Ready to elevate your brand? Let's discuss your project and create something amazing together. 
            We're here to help you achieve your digital marketing goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="glass-card border-white/10 animate-slide-up">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gradient mb-8">
                  SEND US A MESSAGE
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                        FIRST NAME *
                      </label>
                      <Input 
                        type="text"
                        placeholder="Your first name"
                        className="glass-card border-white/20 bg-transparent focus:border-primary h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                        LAST NAME *
                      </label>
                      <Input 
                        type="text"
                        placeholder="Your last name"
                        className="glass-card border-white/20 bg-transparent focus:border-primary h-12"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                      EMAIL ADDRESS *
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="glass-card border-white/20 bg-transparent focus:border-primary h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                      PHONE NUMBER
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="glass-card border-white/20 bg-transparent focus:border-primary h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                      COMPANY NAME
                    </label>
                    <Input 
                      type="text"
                      placeholder="Your company name"
                      className="glass-card border-white/20 bg-transparent focus:border-primary h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                      PROJECT BUDGET
                    </label>
                    <select className="w-full glass-card border-white/20 bg-background focus:border-primary h-12 px-4 rounded-lg">
                      <option value="">Select your budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-plus">$25,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                      PROJECT DETAILS *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project, goals, timeline, and how we can help you achieve success..."
                      rows={6}
                      className="glass-card border-white/20 bg-transparent focus:border-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider py-4 rounded-full shadow-glow animate-smooth group h-14"
                  >
                    SEND MESSAGE
                    <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-8">
                  GET IN TOUCH
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We're here to help you succeed. Choose the best way to reach out to us, 
                  and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gradient mb-2 uppercase text-lg">PHONE</h3>
                        <p className="text-muted-foreground mb-1">Main: +1 (555) 123-4567</p>
                        <p className="text-muted-foreground mb-3">Support: +1 (555) 987-6543</p>
                        <p className="text-sm text-accent">Available 24/7 for urgent matters</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gradient mb-2 uppercase text-lg">EMAIL</h3>
                        <p className="text-muted-foreground mb-1">General: hello@digikarocreatives.com</p>
                        <p className="text-muted-foreground mb-1">Projects: projects@digikarocreatives.com</p>
                        <p className="text-muted-foreground mb-3">Support: support@digikarocreatives.com</p>
                        <p className="text-sm text-accent">We respond within 2-4 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gradient mb-2 uppercase text-lg">ADDRESS</h3>
                        <p className="text-muted-foreground mb-1">123 Creative Street</p>
                        <p className="text-muted-foreground mb-1">Digital City, DC 12345</p>
                        <p className="text-muted-foreground mb-3">United States</p>
                        <p className="text-sm text-accent">Visit by appointment only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gradient mb-2 uppercase text-lg">BUSINESS HOURS</h3>
                        <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-muted-foreground mb-3">Sunday: Closed</p>
                        <p className="text-sm text-accent">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-4">
                <Button 
                  className="w-full glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider py-4 rounded-full animate-smooth h-14"
                  variant="outline"
                >
                  SCHEDULE A FREE CONSULTATION
                </Button>
                <Button 
                  className="w-full glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider py-4 rounded-full animate-smooth h-14"
                  variant="outline"
                >
                  REQUEST A CUSTOM QUOTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              FIND US ON THE MAP
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of Digital City, we're easily accessible for in-person meetings.
            </p>
          </div>
          
          <Card className="glass-card border-white/10 overflow-hidden animate-fade-in">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gradient-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gradient mb-2">INTERACTIVE MAP</h3>
                  <p className="text-muted-foreground">
                    Google Maps integration would be placed here<br />
                    123 Creative Street, Digital City, DC 12345
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;