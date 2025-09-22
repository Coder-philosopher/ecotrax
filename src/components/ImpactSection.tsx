import { Card } from "@/components/ui/card";

const ImpactSection = () => {
  const impactMetrics = [
    { 
      value: "2.5M", 
      label: "kg of Plastic Waste", 
      sublabel: "recycled per 100km",
      icon: "♻️"
    },
    { 
      value: "60%", 
      label: "CO₂ Reduction", 
      sublabel: "vs traditional concrete",
      icon: "🌱"
    },
    { 
      value: "50K+", 
      label: "Farmers Connected", 
      sublabel: "to markets annually",
      icon: "🚜"
    },
    { 
      value: "₹40L", 
      label: "Cost Savings", 
      sublabel: "per kilometer built",
      icon: "💰"
    }
  ];

  const benefits = [
    {
      category: "Environmental",
      items: [
        "Plastic waste reduction and upcycling",
        "Lower carbon footprint than concrete",
        "Bamboo promotes reforestation",
        "Reduced soil erosion and runoff"
      ],
      color: "from-forest-green to-bamboo-beige"
    },
    {
      category: "Economic", 
      items: [
        "50% lower construction costs",
        "Faster deployment saves time",
        "Local material sourcing",
        "Reduced long-term maintenance"
      ],
      color: "from-ocean-blue to-clay-brown"
    },
    {
      category: "Social",
      items: [
        "Improved rural connectivity",
        "Access to healthcare and education", 
        "Market linkage for farmers",
        "Employment in local communities"
      ],
      color: "from-clay-brown to-forest-green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-impact relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-16 w-24 h-24 border-2 border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white/20 rounded-full" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Measurable Impact
          </h2>
          <p className="text-xl text-bamboo-beige max-w-3xl mx-auto leading-relaxed">
            Real data from our pilot projects showcases the transformative potential 
            of sustainable modular infrastructure across multiple dimensions.
          </p>
        </div>
        
        {/* Impact Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-bamboo-beige mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-white/80">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
        
        {/* Benefits Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${benefit.color} mb-6`} />
              
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-bamboo-beige transition-colors duration-300">
                {benefit.category}
              </h3>
              
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-bamboo-beige rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        {/* Quote Section */}
        
      </div>
    </section>
  );
};

export default ImpactSection;