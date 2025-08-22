import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: "SOCIAL MEDIA MANAGEMENT", path: "/services#social-media" },
    { name: "CONTENT CREATION", path: "/services#content-creation" },
    { name: "BRAND MARKETING", path: "/services#brand-marketing" },
    { name: "PHOTOGRAPHY & VIDEOGRAPHY", path: "/services#photography" },
    { name: "ANALYTICS & INSIGHTS", path: "/services#analytics" },
    { name: "CREATIVE DESIGN", path: "/services#design" },
  ];

  const quickLinks = [
    { name: "ABOUT US", path: "/about" },
    { name: "OUR SERVICES", path: "/services" },
    { name: "BLOG", path: "/blog" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "CONTACT US", path: "/contact" },
    { name: "PRIVACY POLICY", path: "/privacy" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-primary/5 border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-hero leading-none">
                  DIGIKARO
                </h1>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  CREATIVES
                </p>
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Elevating brands organically through innovative digital solutions, 
              creative content, and strategic marketing that drives meaningful engagement and growth.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 glass-card border-white/20 rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass-card border-white/20 rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass-card border-white/20 rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass-card border-white/20 rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-gradient mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-gradient mb-6">OUR SERVICES</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold text-gradient mb-6">CONTACT INFO</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>123 Creative Street</p>
                  <p>Digital City, DC 12345</p>
                  <p>United States</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@digikarocreatives.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@digikarocreatives.com
                </a>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-sm font-bold text-gradient mb-4 uppercase tracking-wider">
                STAY UPDATED
              </h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 glass-card border-white/20 bg-transparent px-4 py-2 text-sm rounded-lg focus:border-primary focus:outline-none"
                />
                <button className="bg-gradient-primary hover:opacity-90 text-white px-4 py-2 rounded-lg transition-opacity">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 DIGIKARO CREATIVES. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              TERMS OF SERVICE
            </Link>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 glass-card border-white/20 rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors group"
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;