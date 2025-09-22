import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SmartFeaturesSection = () => {
  const iotFeatures = [
    {
      title: "Real-time Monitoring",
      description: "Embedded sensors track load distribution, wear patterns, and structural integrity",
      icon: "📊",
      metrics: ["Load capacity", "Surface wear", "Drainage flow"]
    },
    {
      title: "Weather Integration", 
      description: "Rainfall and temperature sensors provide predictive maintenance alerts",
      icon: "🌦️",
      metrics: ["Precipitation levels", "Temperature cycles", "Humidity tracking"]
    },
    {
      title: "Traffic Analytics",
      description: "Vehicle counting and weight analysis optimize road usage and planning",
      icon: "🚛",
      metrics: ["Vehicle count", "Weight distribution", "Peak usage times"]
    },
    {
      title: "Predictive Maintenance",
      description: "AI algorithms predict maintenance needs before critical failures occur",
      icon: "🔮",
      metrics: ["Failure prediction", "Maintenance scheduling", "Cost optimization"]
    }
  ];

  const dashboardFeatures = [
    "Real-time road health status",
    "Maintenance alert system", 
    "Usage analytics and reports",
    "Environmental impact tracking",
    "Cost-benefit analysis",
    "Multi-road fleet management"
  ];

  return (
    <section className="py-20 bg-gradient-features relative overflow-hidden">
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-px h-32 bg-white" />
        <div className="absolute top-20 left-10 w-32 h-px bg-white" />
        <div className="absolute bottom-32 right-16 w-px h-24 bg-white" />
        <div className="absolute bottom-32 right-16 w-24 h-px bg-white" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Smart Road Technology
          </h2>
          <p className="text-xl text-bamboo-beige max-w-3xl mx-auto leading-relaxed">
            Future-ready infrastructure with IoT sensors and AI-powered analytics 
            for intelligent road management and predictive maintenance.
          </p>
        </div>
        
        {/* IoT Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {iotFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-bamboo-beige/90 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {feature.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center text-xs text-white/80">
                    <div className="w-1.5 h-1.5 bg-bamboo-beige rounded-full mr-2" />
                    {metric}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Dashboard Mockup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            IoT Management Dashboard
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dashboard preview */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Road Network Status</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-forest-green rounded-full" />
                  <div className="w-3 h-3 bg-bamboo-beige rounded-full" />
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                </div>
              </div>
              
              {/* Mock chart */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Road A-1</span>
                  <span className="text-forest-green">98% Health</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-forest-green h-2 rounded-full w-[98%]" />
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Road B-2</span>
                  <span className="text-bamboo-beige">85% Health</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-bamboo-beige h-2 rounded-full w-[85%]" />
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Road C-3</span>
                  <span className="text-red-400">72% Health</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-red-400 h-2 rounded-full w-[72%]" />
                </div>
              </div>
              
              <div className="text-xs text-white/60">
                Last updated: 2 minutes ago
              </div>
            </div>
            
            {/* Features list */}
            <div>
              <h4 className="text-white font-semibold mb-4">Dashboard Capabilities</h4>
              <div className="space-y-3">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-bamboo-beige rounded-full mr-3" />
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-forest-green/20 rounded-lg border border-forest-green/30">
                <h5 className="text-bamboo-beige font-semibold mb-2">AI-Powered Insights</h5>
                <p className="text-white/80 text-sm">
                  Machine learning algorithms analyze patterns to predict maintenance 
                  needs up to 6 months in advance, reducing costs by 40%.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="tech" size="lg">
              Request Demo Access
            </Button>
          </div>
        </div>
        
        {/* Integration Timeline */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Smart Features Integration Timeline
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-bamboo-beige mb-2">Q1 2025</div>
              <div className="text-white font-semibold mb-2">Sensor Integration</div>
              <div className="text-white/80 text-sm">Basic monitoring sensors embedded in new panels</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-bamboo-beige mb-2">Q3 2025</div>
              <div className="text-white font-semibold mb-2">Dashboard Launch</div>
              <div className="text-white/80 text-sm">Real-time monitoring platform with mobile app</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-bamboo-beige mb-2">Q1 2026</div>
              <div className="text-white font-semibold mb-2">AI Analytics</div>
              <div className="text-white/80 text-sm">Predictive maintenance and optimization algorithms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeaturesSection;