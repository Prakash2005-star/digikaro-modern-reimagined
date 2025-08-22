const ClientLogos = () => {
  // Sample client logos (in a real app, these would be actual client logos)
  const clients = [
    "TECHCORP", "INNOVATE", "BRANDMAX", "DIGITECH", "CREATIVELAB", 
    "NEXUSTECH", "PIXELCRAFT", "WEBSTUDIO", "DESIGNHUB", "MEDIAFLOW",
    "SMARTBRAND", "FUTURETECH", "CREATIVEPRO", "DIGITALOFT", "BRANDSYNC"
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            TRUSTED BY LEADING BRANDS
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied clients who have transformed their digital presence with us
          </p>
        </div>

        {/* Scrolling logos container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-12 whitespace-nowrap">
              {/* First set */}
              {clients.map((client, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex items-center justify-center min-w-[200px] h-16 glass-card border-white/10 rounded-xl px-6 hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-lg font-bold text-muted-foreground tracking-wider">
                    {client}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex items-center justify-center min-w-[200px] h-16 glass-card border-white/10 rounded-xl px-6 hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-lg font-bold text-muted-foreground tracking-wider">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        {/* Client testimonial highlight */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="glass-card border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              "DIGIKARO CREATIVES TRANSFORMED OUR BRAND"
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              "Working with Digikaro Creatives was a game-changer for our startup. Their innovative 
              approach to social media management increased our engagement by 300% within just 3 months."
            </p>
            <div className="text-sm text-accent font-semibold tracking-wider">
              - SARAH JOHNSON, CEO OF TECHCORP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;