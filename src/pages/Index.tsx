import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ImpactSection from "@/components/ImpactSection";
import DeploymentSection from "@/components/DeploymentSection";
import SmartFeaturesSection from "@/components/SmartFeaturesSection";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="problem">
          <ProblemSection />
        </section>
        
        <section id="solution">
          <SolutionSection />
        </section>
        
        <section id="impact">
          <ImpactSection />
        </section>
        
        <section id="deployment">
          <DeploymentSection />
        </section>
        
        <section id="features">
          <SmartFeaturesSection />
        </section>
        
        <section id="research">
          <ResearchSection />
        </section>
        
        <section id="team">
          <TeamSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
