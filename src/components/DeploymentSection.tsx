import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DeploymentSection = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Prototype & Testing",
      timeline: "2024 Q1-Q2",
      status: "completed",
      description: "Lab testing, material optimization, and initial prototype development",
      deliverables: ["Material strength testing", "Weather resistance validation", "Cost analysis"]
    },
    {
      phase: "Phase 2", 
      title: "Pilot Projects",
      timeline: "2024 Q3-Q4",
      status: "current",
      description: "Real-world deployment in 3 villages across Assam and Manipur",
      deliverables: ["5km trial roads", "Community feedback", "Performance monitoring"]
    },
    {
      phase: "Phase 3",
      title: "PMGSY Integration",
      timeline: "2025 Q1-Q2",
      status: "planned",
      description: "Partnership with government rural road schemes for wider deployment",
      deliverables: ["Government approvals", "Scaled manufacturing", "Training programs"]
    },
    {
      phase: "Phase 4",
      title: "Smart Features",
      timeline: "2025 Q3-Q4",
      status: "planned", 
      description: "IoT integration for real-time monitoring and predictive maintenance",
      deliverables: ["Sensor integration", "Data dashboard", "AI-powered analytics"]
    }
  ];

  const deploymentSteps = [
    {
      step: "1",
      title: "Site Assessment",
      description: "Terrain analysis and material requirements calculation",
      icon: "📍"
    },
    {
      step: "2", 
      title: "Panel Manufacturing",
      description: "Local production using regional bamboo and collected plastic waste",
      icon: "🏭"
    },
    {
      step: "3",
      title: "Rapid Assembly",
      description: "Modular installation with minimal heavy machinery required",
      icon: "⚡"
    },
    {
      step: "4",
      title: "Quality Testing",
      description: "Load testing and drainage verification before handover",
      icon: "✅"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-accent/20 relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-contour-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Deployment Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From prototype to nationwide implementation - our phased approach ensures 
            scalable, sustainable infrastructure development.
          </p>
        </div>
        
        {/* Roadmap Timeline */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapPhases.map((phase, index) => (
              <Card 
                key={index}
                className={`p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  phase.status === 'completed' 
                    ? 'bg-forest-green/10 border-forest-green' 
                    : phase.status === 'current'
                    ? 'bg-ocean-blue/10 border-ocean-blue shadow-tech'
                    : 'bg-muted border-muted-foreground/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {phase.phase}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${
                    phase.status === 'completed' 
                      ? 'bg-forest-green' 
                      : phase.status === 'current'
                      ? 'bg-ocean-blue animate-pulse'
                      : 'bg-muted-foreground/30'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {phase.title}
                </h3>
                
                <div className="text-sm text-muted-foreground mb-3">
                  {phase.timeline}
                </div>
                
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {phase.description}
                </p>
                
                <ul className="space-y-1">
                  {phase.deliverables.map((deliverable, delivIndex) => (
                    <li key={delivIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Deployment Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Deployment Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {deploymentSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-eco">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  
                  {index < deploymentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-muted-foreground/30" />
                  )}
                </div>
                
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-forest-green to-ocean-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Partner With Us
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join the sustainable infrastructure revolution. Connect with Team Ecotrax 
            to explore deployment opportunities in your region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="eco" size="lg">
              Request Pilot Project
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-forest-green">
              Download Technical Brief
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;