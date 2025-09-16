import heroBg from "@/assets/brown-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32 lg:py-48 text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          ELEVATE YOUR BRAND WITH DIGIKARO CREATIVES
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
          Innovative digital solutions for organic growth, impactful content, and strategic marketing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-400">
          <a
            href="#contact"
            className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            GET STARTED
          </a>
          <a
            href="#services"
            className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
