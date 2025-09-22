import { Card } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Deepika Singh",
      role: "Team Lead & Project Manager",
      expertise: "Environmental Impact, Waste Management",
      image: "👩‍🌾",
      description: "Environmental engineering student specializing in plastic waste solutions"
    },
    {
      name: "Mohd Saqlain Khan",
      role: "Sustainability Director",
      expertise: "Civil Engineering, Infrastructure Design",
      image: "👨‍🔬",
      description: "NIT Raipur student specializing in sustainable infrastructure solutions"
    },
    {
      name: "Shahid Alam",
      role: "Financial Analyst",
      expertise: "Materials Science, Composite Engineering",
      image: "👨‍💻",
      description: "Engineering student focused on bamboo composite research and development"
    },
    {
      name: "Satakshi Tripathi",
      role: "Research Analyst",
      expertise: "IoT Integration, Smart Systems",
      image: "👩‍💼",
      description: "Technology student with expertise in sensor networks and data analytics"
    },
    {
      name: "Abhishek Tripathi",
      role: "Operations Coordinator",
      expertise: "Project Management, Community Engagement",
      image: "👨‍🏭",
      description: "Student with focus on community liaison and project implementation"
    },
    {
      name: "Shivang Baranwan",
      role: "Technical Lead",
      expertise: "Cost Modeling, Economic Impact",
      image: "👨‍💻",
      description: "Student focused on economic modeling and impact assessment for rural projects"
    }
  ];

  const values = [
    {
      title: "Local Innovation",
      description: "Solutions designed by and for local communities",
      icon: "🏘️"
    },
    {
      title: "Sustainability First",
      description: "Environmental responsibility in every design decision",
      icon: "🌱"
    },
    {
      title: "Inclusive Development",
      description: "Ensuring benefits reach the most remote communities",
      icon: "🤝"
    },
    {
      title: "Technical Excellence",
      description: "Rigorous engineering backed by scientific research",
      icon: "🔬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-team relative">
      {/* Background texture overlay */}
      <div className="absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Team Nexus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate team of engineering students from NIT Raipur 
            dedicated to transforming rural infrastructure through innovative sustainable solutions.
          </p>
        </div>
        
        {/* Mission Statement */}
        <div className="bg-forest-green/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-forest-green/20 text-center">
          <h3 className="text-2xl font-bold text-forest-green mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-foreground/80 italic leading-relaxed max-w-4xl mx-auto">
            "Local innovation for local needs — Team Nexus from NIT Raipur envisions sustainable, modular roadways 
            that empower farmers, reduce plastic waste, and adapt to Northeast India's unique terrain. 
            We believe in technology that serves communities, not the other way around."
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-eco transition-all duration-300 hover:scale-105 group bg-card border-border"
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-forest-green font-semibold mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-muted-foreground mb-3 font-medium">
                  {member.expertise}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-forest-green/20 hover:bg-forest-green/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recognition Section */}
        
      </div>
    </section>
  );
};

export default TeamSection;