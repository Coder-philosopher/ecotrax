import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      title: "Challenging Terrain",
      description: "Mountainous landscapes and steep gradients make traditional road construction extremely difficult and costly.",
      icon: "🏔️"
    },
    {
      title: "Heavy Rainfall",
      description: "High precipitation causes frequent erosion, landslides, and infrastructure damage throughout the region.",
      icon: "🌧️"
    },
    {
      title: "Soil Erosion",
      description: "Unstable soil conditions lead to road degradation, requiring constant maintenance and reconstruction.",
      icon: "🌊"
    },
    {
      title: "Plastic Waste Crisis",
      description: "Growing plastic pollution with limited recycling infrastructure creates environmental challenges.",
      icon: "♻️"
    },
    {
      title: "Limited Connectivity",
      description: "Poor road infrastructure isolates rural communities, limiting access to markets and essential services.",
      icon: "🛤️"
    },
    {
      title: "High Construction Costs",
      description: "Traditional methods are expensive, making road development financially challenging for remote areas.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-gradient-problem relative">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The Northeast India Challenge
          </h2>
          <p className="text-xl text-bamboo-beige max-w-3xl mx-auto leading-relaxed">
            Remote communities face unique infrastructure challenges that traditional 
            road construction methods struggle to address effectively and sustainably.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-organic"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {problem.title}
                </h3>
                <p className="text-bamboo-beige/90 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Impact statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-bamboo-beige mb-2">70%</div>
              <div className="text-white/90">of NER villages lack proper road access</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-bamboo-beige mb-2">3000mm</div>
              <div className="text-white/90">annual rainfall in some regions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-bamboo-beige mb-2">40%</div>
              <div className="text-white/90">higher construction costs than plains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;