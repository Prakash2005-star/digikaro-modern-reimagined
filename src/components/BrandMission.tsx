import { Target, Users, TrendingUp, Award, Lightbulb, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BrandMission = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "CREATIVITY",
      description: "Delivering innovative and unique content tailored to each brand's needs.",
    },
    {
      icon: Award,
      title: "RELIABILITY", 
      description: "Building trust by consistently exceeding expectations.",
    },
    {
      icon: TrendingUp,
      title: "ORGANIC GROWTH",
      description: "Focusing on authentic strategies to achieve sustainable success.",
    },
    {
      icon: Users,
      title: "CLIENT-FIRST APPROACH",
      description: "Putting the client's needs and goals at the center of everything we do.",
    },
    {
      icon: Target,
      title: "INNOVATION HUB",
      description: "Pioneering cutting-edge solutions to keep your brand ahead of the curve.",
    },
    {
      icon: Headphones,
      title: "HELP & SUPPORT",
      description: "Providing 24/7 assistance and personalized solutions to ensure a seamless customer experience.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-background opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            BRAND MISSION
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Digikaro Creatives, our mission is to empower startups & small businesses to achieve 
            organic growth and desired results. We aim to elevate brands to the next level through 
            impactful content creation that not only resonates with audiences but also goes viral, 
            driving meaningful engagement and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
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
  );
};

export default BrandMission;