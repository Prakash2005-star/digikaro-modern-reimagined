import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="text-center relative z-10 animate-fade-in">
        <h1 className="text-8xl md:text-9xl font-bold mb-6 text-gradient-hero">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">PAGE NOT FOUND</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-8 py-4 rounded-full shadow-glow animate-smooth transition-opacity"
          >
            RETURN TO HOME
          </a>
          <a 
            href="/contact" 
            className="glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider px-8 py-4 rounded-full animate-smooth transition-all"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
