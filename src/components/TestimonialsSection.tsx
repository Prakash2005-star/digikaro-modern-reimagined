import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "PRIYA SHARMA",
      position: "CEO, INFOTECH SOLUTIONS",
      company: "InfoTech Solutions",
      rating: 5,
      text: "Digikaro Creatives completely transformed our social media presence. Their AI-powered content strategy increased our engagement by 300% and helped us go viral multiple times. Absolutely phenomenal results!",
      avatar: "PS"
    },
    {
      name: "AMIT PATEL",
      position: "MARKETING HEAD, CREATIVE NEST",
      company: "Creative Nest Digital",
      rating: 5,
      text: "The team at Digikaro is incredibly professional and creative. They understood our brand vision perfectly and delivered content that truly resonates with our audience. Our follower count doubled in just 2 months!",
      avatar: "AP"
    },
    {
      name: "NEHA SINGH",
      position: "FOUNDER, GROWDIGITAL",
      company: "GrowDigital Agency",
      rating: 5,
      text: "Working with Digikaro Creatives was the best decision we made for our digital marketing. Their strategic approach and creative execution helped us achieve a 250% increase in qualified leads.",
      avatar: "NS"
    },
    {
      name: "RAHUL VERMA",
      position: "CMO, SMART BRAND",
      company: "Smart Brand Marketing", 
      rating: 5,
      text: "Exceptional service and outstanding results! Digikaro's team created a comprehensive content strategy that not only increased our brand awareness but also significantly improved our conversion rates.",
      avatar: "RV"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            CLIENT TESTIMONIALS
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with us 
            and the results they've achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/30" />
                
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Client info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gradient text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-accent font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              BECOME OUR NEXT SUCCESS STORY
            </h3>
            <p className="text-muted-foreground mb-6">
              Join these satisfied clients and see how we can transform your brand's digital presence.
            </p>
            <button className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-8 py-4 rounded-full shadow-glow animate-smooth">
              GET YOUR FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;