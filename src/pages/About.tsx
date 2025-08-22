import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    { name: "GAURAV DORAHA", role: "FOUNDER", expertise: "Brand Strategy & Vision", initials: "GD" },
    { name: "M. PRAKASH", role: "TECHNOLOGY HEAD AND DEVELOPER", expertise: "Web Development & AI Integration", initials: "MP" },
    { name: "PRIYA SHARMA", role: "CREATIVE DIRECTOR", expertise: "Visual Design & Content", initials: "PS" },
    { name: "AMIT PATEL", role: "MARKETING SPECIALIST", expertise: "Digital Campaigns & SEO", initials: "AP" },
  ];

  const values = [
    {
      icon: Target,
      title: "OUR MISSION",
      description: "To empower startups & small businesses to achieve organic growth and desired results through impactful content creation that resonates with audiences and drives meaningful engagement and trust."
    },
    {
      icon: Users,
      title: "OUR VISION",
      description: "To become the leading digital creative agency that transforms brands through innovative storytelling, authentic engagement, and data-driven strategies that create lasting impact."
    },
    {
      icon: Award,
      title: "OUR VALUES",
      description: "Creativity, reliability, organic growth, client-first approach, innovation, and dedicated support. These principles guide everything we do and every relationship we build."
    },
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
            ABOUT US
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
            We are Digikaro Creatives - a passionate team of digital innovators, creative storytellers, 
            and strategic thinkers dedicated to elevating your brand organically.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
                WHO WE ARE
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Digikaro Creatives is more than just a digital agency - we're your partners in growth. 
                  Founded with the vision to help startups and small businesses thrive in the digital landscape, 
                  we combine cutting-edge technology with human creativity to deliver exceptional results.
                </p>
                <p>
                  Our team of experienced professionals brings together expertise in social media management, 
                  content creation, brand marketing, and digital strategy. We believe in the power of authentic 
                  storytelling and data-driven decisions to create meaningful connections between brands and their audiences.
                </p>
                <p>
                  Since our inception, we've helped over 500 brands transform their digital presence, 
                  increase engagement, and achieve sustainable growth through organic strategies that build lasting relationships.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="glass-card border-white/10 p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                      <div className="text-sm text-muted-foreground uppercase">PROJECTS COMPLETED</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                      <div className="text-sm text-muted-foreground uppercase">CLIENT SATISFACTION</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                      <div className="text-sm text-muted-foreground uppercase">YEARS EXPERIENCE</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground uppercase">SUPPORT AVAILABLE</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              OUR FOUNDATION
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              MEET OUR TEAM
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team of creative professionals brings together years of experience 
              and a passion for helping brands succeed in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <span className="text-white font-bold text-xl">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gradient mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              GET IN TOUCH
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey with us? We'd love to hear about your project 
              and discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gradient mb-4">CALL US</h3>
                <p className="text-muted-foreground">+919310457577</p>
                <p className="text-muted-foreground">+919878653380</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gradient mb-4">EMAIL US</h3>
                <p className="text-muted-foreground">info@digikarocreatives.com</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gradient mb-4">VISIT US</h3>
                <p className="text-muted-foreground">123 Creative Street</p>
                <p className="text-muted-foreground">Digital City, DC 12345</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-bold tracking-wider px-8 py-4 rounded-full shadow-glow"
            >
              START YOUR PROJECT TODAY
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;