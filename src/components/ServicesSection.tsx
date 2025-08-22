import { Share2, Edit, Megaphone, Camera, BarChart3, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servicesImage from "@/assets/services-hero.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Share2,
      title: "SOCIAL MEDIA MANAGEMENT",
      description: "Boost your online presence with expert social media management. We craft engaging content, manage campaigns, and build meaningful connections with your audience.",
      features: ["Content Strategy", "Campaign Management", "Community Building", "Analytics & Reporting"]
    },
    {
      icon: Edit,
      title: "CONTENT CREATION",
      description: "Transform your brand story with compelling content that resonates. From visual design to copywriting, we create content that converts.",
      features: ["Visual Design", "Copywriting", "Video Production", "Brand Storytelling"]
    },
    {
      icon: Megaphone,
      title: "BRAND MARKETING",
      description: "Elevate your brand with strategic marketing campaigns that drive results. We help you reach your target audience effectively.",
      features: ["Brand Strategy", "Digital Campaigns", "Market Research", "ROI Optimization"]
    },
    {
      icon: Camera,
      title: "PHOTOGRAPHY & VIDEOGRAPHY",
      description: "Professional visual content that captures your brand essence. High-quality photos and videos that tell your story.",
      features: ["Product Photography", "Brand Videos", "Social Media Content", "Event Coverage"]
    },
    {
      icon: BarChart3,
      title: "ANALYTICS & INSIGHTS",
      description: "Data-driven decisions for better results. We provide comprehensive analytics and insights to optimize your digital presence.",
      features: ["Performance Tracking", "Audience Analytics", "Conversion Optimization", "Strategic Insights"]
    },
    {
      icon: Palette,
      title: "CREATIVE DESIGN",
      description: "Stunning visual identity that makes your brand memorable. From logos to complete brand guidelines, we've got you covered.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "UI/UX Design"]
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            OUR CORE SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 group animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service CTA */}
        <div className="relative">
          <div 
            className="rounded-2xl p-12 text-center relative overflow-hidden"
            style={{ backgroundImage: `url(${servicesImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                READY TO TRANSFORM YOUR BRAND?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help elevate your brand to the next level with our comprehensive digital solutions.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold tracking-wider px-8 py-4 rounded-full shadow-lg animate-smooth"
              >
                START YOUR PROJECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;