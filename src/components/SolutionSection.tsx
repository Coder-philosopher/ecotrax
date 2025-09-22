import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SolutionSection = () => {
  const features = [
    {
      title: "Bamboo-Reinforced Core",
      description: "High-tensile bamboo fibers provide natural strength and flexibility, adapting to terrain movements.",
      icon: "🎋"
    },
    {
      title: "Recycled Plastic Matrix",
      description: "Upcycled plastic creates a durable, waterproof composite that resists erosion and weathering.",
      icon: "♻️"
    },
    {
      title: "Modular Design",
      description: "Interlocking hexagonal panels enable rapid assembly and easy maintenance or replacement.",
      icon: "🔧"
    },
    {
      title: "Integrated Drainage",
      description: "Built-in water management system prevents pooling and reduces erosion risk.",
      icon: "💧"
    }
  ];

  const benefits = [
    { metric: "50%", label: "Cost Reduction", description: "vs traditional methods" },
    { metric: "10x", label: "Faster Installation", description: "modular assembly" },
    { metric: "80%", label: "Plastic Waste Reused", description: "per kilometer" },
    { metric: "25yr", label: "Lifespan", description: "with minimal maintenance" }
  ];

  return (
    <section className="py-20 bg-gradient-solution relative">
      <div className="absolute inset-0 bg-white/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Revolutionary Solution
          </h2>
          <p className="text-xl text-bamboo-beige max-w-3xl mx-auto leading-relaxed">
            Ecotrax modular road panels combine traditional bamboo strength with 
            modern composite technology for sustainable infrastructure.
          </p>
        </div>
        
        {/* Solution Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white/95 text-lg leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Interactive Panel Diagram */}
        
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-bamboo-beige mb-2">
                {benefit.metric}
              </div>
              <div className="font-semibold text-white mb-1">
                {benefit.label}
              </div>
              <div className="text-white/95 text-lg">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;