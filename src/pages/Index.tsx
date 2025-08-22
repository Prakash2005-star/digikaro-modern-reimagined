import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandMission from "@/components/BrandMission";
import ServicesSection from "@/components/ServicesSection";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientLogos from "@/components/ClientLogos";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BrandMission />
      <ServicesSection />
      <WhatMakesUsDifferent />
      <WhyChooseUs />
      <ClientLogos />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
