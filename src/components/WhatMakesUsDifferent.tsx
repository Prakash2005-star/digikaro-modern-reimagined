import { Zap, Rocket, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhatMakesUsDifferent = () => {
  const differentiators = [
    {
      icon: Zap,
      title: "AI-POWERED CREATIVITY",
      description: "We leverage cutting-edge AI tools and human creativity to produce content that stands out in the digital landscape.",
      stats: "300% faster content creation"
    },
    {
      icon: Rocket,
      title: "VIRAL CONTENT STRATEGY",
      description: "Our proven methodology combines data analytics with creative storytelling to create content with viral potential.",
      stats: "85% increase in engagement"
    },
    {
      icon: Shield,
      title: "RESULT-DRIVEN APPROACH",
      description: "Every strategy is backed by measurable KPIs and continuous optimization to ensure maximum ROI for your investment.",
      stats: "200% average growth rate"
    },
    {
      icon: Heart,
      title: "AUTHENTIC BRAND VOICE",
      description: "We don't just create content - we craft your brand's authentic voice that resonates with your target audience.",
      stats: "95% client retention rate"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            WHAT MAKES US DIFFERENT
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're not just another digital agency. Here's what sets us apart from the competition 
            and why brands choose us to elevate their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <Card 
              key={item.title}
              className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gradient mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
                      <span className="text-sm font-semibold text-accent">{item.stats}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              EXPERIENCE THE DIFFERENCE
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of successful brands who have transformed their digital presence with our unique approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-accent">
              <span>🚀 FASTER GROWTH</span>
              <span>💡 CREATIVE EXCELLENCE</span>
              <span>📈 PROVEN RESULTS</span>
              <span>🎯 TARGETED STRATEGIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;