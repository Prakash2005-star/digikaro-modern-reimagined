import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, Building, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "SARAH JOHNSON",
      position: "CEO",
      company: "TECHCORP SOLUTIONS",
      industry: "TECHNOLOGY",
      rating: 5,
      testimonial: "Digikaro Creatives completely transformed our social media presence. Their AI-powered content strategy increased our engagement by 300% and helped us go viral multiple times. The team's creativity and strategic thinking are absolutely phenomenal. They don't just create content; they craft experiences that resonate with our audience.",
      results: ["300% increase in engagement", "50K new followers in 3 months", "Generated $2M in leads"],
      logo: "TC",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "MICHAEL CHEN",
      position: "MARKETING DIRECTOR",
      company: "INNOVATE DIGITAL",
      industry: "MARKETING AGENCY",
      rating: 5,
      testimonial: "Working with Digikaro Creatives was a game-changer for our agency. They understood our brand vision perfectly and delivered content that truly represents who we are. Our follower count doubled, but more importantly, our engagement quality improved dramatically. They're not just service providers; they're strategic partners.",
      results: ["100% follower growth", "Enhanced brand recognition", "Improved client acquisition"],
      logo: "ID",
      avatar: "MC"
    },
    {
      id: 3,
      name: "EMMA RODRIGUEZ",
      position: "FOUNDER",
      company: "BRANDMAX AGENCY",
      industry: "CREATIVE SERVICES",
      rating: 5,
      testimonial: "The strategic approach and creative execution from Digikaro Creatives helped us achieve a 250% increase in qualified leads. Their team's attention to detail and understanding of market trends is impressive. Every campaign they've run for us has exceeded expectations and delivered measurable ROI.",
      results: ["250% increase in qualified leads", "Enhanced market positioning", "Improved conversion rates"],
      logo: "BA",
      avatar: "ER"
    },
    {
      id: 4,
      name: "DAVID THOMPSON",
      position: "CMO",
      company: "DIGITECH SOLUTIONS",
      industry: "SOFTWARE DEVELOPMENT",
      rating: 5,
      testimonial: "Exceptional service and outstanding results! Digikaro's team created a comprehensive content strategy that not only increased our brand awareness but also significantly improved our conversion rates. Their data-driven approach and creative storytelling helped us connect with our target audience like never before.",
      results: ["Increased brand awareness by 400%", "Improved conversion rates", "Enhanced customer engagement"],
      logo: "DS",
      avatar: "DT"
    },
    {
      id: 5,
      name: "LISA ANDERSON",
      position: "BRAND MANAGER",
      company: "CREATIVE STUDIO",
      industry: "DESIGN & CREATIVITY",
      rating: 5,
      testimonial: "Digikaro Creatives brought our brand vision to life in ways we never imagined. Their ability to understand our aesthetic and translate it into engaging social content is remarkable. The authenticity and creativity in every post they create truly represents our brand's essence and values.",
      results: ["Viral content creation", "Enhanced brand identity", "Increased client inquiries"],
      logo: "CS",
      avatar: "LA"
    },
    {
      id: 6,
      name: "JAMES WILSON",
      position: "OPERATIONS DIRECTOR",
      company: "NEXUS VENTURES",
      industry: "VENTURE CAPITAL",
      rating: 5,
      testimonial: "The ROI we've seen from our partnership with Digikaro Creatives is incredible. Their strategic content marketing approach helped us reach and engage with startups and entrepreneurs effectively. The quality of leads generated through their campaigns has been consistently high.",
      results: ["High-quality lead generation", "Improved industry positioning", "Enhanced networking opportunities"],
      logo: "NV",
      avatar: "JW"
    },
  ];

  const stats = [
    { number: "500+", label: "SATISFIED CLIENTS" },
    { number: "98%", label: "CLIENT RETENTION RATE" },
    { number: "300%", label: "AVERAGE ENGAGEMENT INCREASE" },
    { number: "250%", label: "AVERAGE LEAD GROWTH" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero animate-fade-in">
            CLIENT TESTIMONIALS
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Don't just take our word for it. Hear from our satisfied clients about how we've helped 
            transform their brands and achieve remarkable results through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium tracking-wider">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gradient-hero mb-4">
              SUCCESS STORIES
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real clients, real results. These testimonials showcase the transformative impact 
              of our digital marketing strategies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 animate-slide-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />
                  
                  {/* Company logo & rating */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.logo}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gradient">
                          {testimonial.company}
                        </h3>
                        <p className="text-sm text-accent font-medium">
                          {testimonial.industry}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial text */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gradient mb-3 uppercase tracking-wider">
                      KEY RESULTS:
                    </h4>
                    <div className="space-y-2">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gradient">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Card className="glass-card border-white/10 p-12 max-w-4xl mx-auto animate-fade-in">
            <CardContent className="p-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
                READY TO BE OUR NEXT SUCCESS STORY?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join these satisfied clients and discover how we can transform your brand's digital 
                presence with our proven strategies and creative excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-8 py-4 rounded-full shadow-glow animate-smooth">
                  START YOUR PROJECT
                </button>
                <button className="glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider px-8 py-4 rounded-full animate-smooth">
                  SCHEDULE CONSULTATION
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-accent">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>500+ SUCCESSFUL PROJECTS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>98% CLIENT SATISFACTION</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>PROVEN RESULTS</span>
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

export default Testimonials;