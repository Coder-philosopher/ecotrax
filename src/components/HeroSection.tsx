import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ecotrax.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden" id="hero" >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Organic overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-green/30 via-transparent to-ocean-blue/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Ecotrax
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-bamboo-beige font-medium">
            Building Smart, Green Roads for Remote India
          </p>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Revolutionary bamboo-reinforced modular road panels that transform terrain, 
            reduce plastic waste, and connect rural communities sustainably.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <Button
    variant="hero"
    size="lg"
    className="text-lg px-8 py-4"
    onClick={() => {
      const el = document.querySelector("#solution");
      el?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Explore Our Solution
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-forest-green"
    onClick={() => {
      const el = document.querySelector("#impact");
      el?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    View Impact Data
  </Button>
</div>

        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-bamboo-beige rounded-full animate-float opacity-60" />
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-8 w-4 h-4 bg-bamboo-beige/50 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;