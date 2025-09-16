import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT US", path: "/about" },
    { name: "BLOG", path: "/blog" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground leading-none">
                DIGIKARO
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                CREATIVES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wider transition-colors ${
                  isActive(item.path)
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Book Now Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-primary hover:opacity-90 text-primary-foreground font-bold tracking-wider px-6 py-2 rounded-full shadow-glow animate-smooth"
              asChild
            >
              <a href="https://wa.link/rf31vp" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 text-primary-foreground" />
                <span>BOOK NOW</span>
              </a>
            </Button>
            
            <button
              className="lg:hidden p-2 text-primary-foreground hover:bg-primary transition-colors rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-lg text-sm font-medium tracking-wider transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;