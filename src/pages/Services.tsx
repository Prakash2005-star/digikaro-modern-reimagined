import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Share2, Edit, Megaphone, Camera, BarChart3, Palette, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servicesImage from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      id: "social-media",
      icon: Share2,
      title: "SOCIAL MEDIA MANAGEMENT",
      description: "Comprehensive social media management that builds your brand presence and engages your audience across all major platforms.",
      features: [
        "Content Strategy Development", "Daily Content Creation", "Community Management", 
        "Hashtag Research & Optimization", "Influencer Collaboration", "Social Media Analytics", 
        "Paid Social Advertising", "Brand Reputation Management"
      ],
      pricing: "Starting from $499/month"
    },
    {
      id: "content-creation",
      icon: Edit,
      title: "CONTENT CREATION",
      description: "High-quality, engaging content that tells your brand story and converts viewers into customers.",
      features: [
        "Blog Writing & SEO Content", "Visual Design & Graphics", "Video Production & Editing", 
        "Copywriting for All Channels", "Email Marketing Content", "Website Content", 
        "Product Descriptions", "Brand Storytelling"
      ],
      pricing: "Starting from $299/month"
    },
    {
      id: "brand-marketing",
      icon: Megaphone,
      title: "BRAND MARKETING",
      description: "Strategic marketing campaigns that increase brand awareness and drive qualified leads to your business.",
      features: [
        "Brand Strategy Development", "Digital Marketing Campaigns", "Market Research & Analysis", 
        "Competitor Analysis", "Target Audience Research", "Brand Positioning", 
        "Marketing Automation", "ROI Optimization"
      ],
      pricing: "Starting from $799/month"
    },
    {
      id: "photography",
      icon: Camera,
      title: "PHOTOGRAPHY & VIDEOGRAPHY",
      description: "Professional visual content that captures your brand's essence and creates lasting impressions.",
      features: [
        "Product Photography", "Corporate Headshots", "Brand Photography", "Event Coverage", 
        "Promotional Videos", "Social Media Content", "Behind-the-Scenes Content", 
        "Video Editing & Post-Production"
      ],
      pricing: "Starting from $199/session"
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "ANALYTICS & INSIGHTS",
      description: "Data-driven insights that help you make informed decisions and optimize your marketing performance.",
      features: [
        "Performance Tracking", "Audience Analytics", "Conversion Rate Optimization", 
        "A/B Testing", "Custom Reporting", "ROI Analysis", "Competitor Benchmarking", 
        "Strategic Recommendations"
      ],
      pricing: "Starting from $199/month"
    },
    {
      id: "design",
      icon: Palette,
      title: "CREATIVE DESIGN",
      description: "Stunning visual identity and design solutions that make your brand memorable and impactful.",
      features: [
        "Logo Design & Branding", "Brand Guidelines", "Marketing Materials", "Website Design", 
        "UI/UX Design", "Print Design", "Packaging Design", "Brand Refresh & Redesign"
      ],
      pricing: "Starting from $399/project"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${servicesImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero animate-fade-in">
            OUR SERVICES
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Comprehensive digital solutions designed to elevate your brand, engage your audience, 
            and drive measurable results for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="glass-card border-white/10 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gradient">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gradient">
                          {service.pricing}
                        </div>
                        <Button className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-6 py-3 rounded-full">
                          GET QUOTE
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="glass-card border-white/10 p-8 rounded-2xl text-center">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gradient mb-4">
                      PROFESSIONAL {service.title.split(' ')[0]} SOLUTIONS
                    </h3>
                    <p className="text-muted-foreground">
                      Transform your brand with our expert {service.title.toLowerCase()} services 
                      that deliver measurable results and exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6 animate-fade-in">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Let's discuss your project and create a customized solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-8 py-4 rounded-full shadow-glow"
            >
              START YOUR PROJECT
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="glass-card border-white/20 text-foreground hover:bg-white/10 font-bold tracking-wider px-8 py-4 rounded-full"
            >
              SCHEDULE CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;