import { CheckCircle, Clock, Award, Users, TrendingUp, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "PROVEN TRACK RECORD",
      description: "Over 500+ successful projects delivered with measurable results and satisfied clients across various industries."
    },
    {
      icon: Clock,
      title: "QUICK TURNAROUND",
      description: "We deliver high-quality results within tight deadlines without compromising on creativity or effectiveness."
    },
    {
      icon: Award,
      title: "INDUSTRY EXPERTISE",
      description: "Our team consists of certified professionals with years of experience in digital marketing and creative design."
    },
    {
      icon: Users,
      title: "DEDICATED SUPPORT",
      description: "24/7 customer support with a dedicated account manager for seamless communication and project management."
    },
    {
      icon: TrendingUp,
      title: "SCALABLE SOLUTIONS",
      description: "From startups to enterprises, our solutions grow with your business needs and adapt to market changes."
    },
    {
      icon: Sparkles,
      title: "INNOVATIVE APPROACH",
      description: "We stay ahead of trends and leverage the latest technologies to give your brand a competitive edge."
    },
  ];

  const stats = [
    { number: "500+", label: "PROJECTS COMPLETED" },
    { number: "98%", label: "CLIENT SATISFACTION" },
    { number: "200%", label: "AVERAGE GROWTH" },
    { number: "24/7", label: "SUPPORT AVAILABLE" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            WHY CHOOSE US
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            When you partner with Digikaro Creatives, you're not just hiring a service provider - 
            you're gaining a dedicated team committed to your success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card border-white/10 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 group h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gradient mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="relative">
            <div className="glass-card border-white/10 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                  READY TO GET STARTED?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join the ranks of successful businesses who trust us with their digital growth. 
                  Let's discuss how we can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-8 py-4 rounded-full shadow-glow animate-smooth">
                    START YOUR PROJECT
                  </button>
                  <button className="glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider px-8 py-4 rounded-full animate-smooth">
                    SCHEDULE A CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;