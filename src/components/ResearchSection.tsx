import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResearchSection = () => {
  const researchPapers = [
    {
      title: "BAMBO & PLASTIC BASED ROAD CONSTRUCTION",
      authors: "KIRUTHIK S.K",
      journal: "Academia.edu",
      year: "2024",
      description: "Modular panel system for roads using bamboo and plastic waste in hilly rural areas.",
      abstract:
        "This paper proposes using prefabricated modular panels made of bamboo and recycled plastic for eco-friendly roads in Odisha. It shows benefits like faster deployment, durability, and environmental impact reduction.",
      keywords: [
        "Bamboo composite",
        "Plastic waste",
        "Modular panels",
        "Eco-roads"
      ],
      downloadUrl: "https://www.academia.edu/143967465/BAMBO_and_PLASTIC_BASED_ROAD_CONSTRUCTION",
      icon: "🛣️"
    },
    {
      title: "Bamboo Waste as Part of The Aggregate Pavement",
      authors: "Mudjanarko Sri Wiwoho et al.",
      journal: "MATEC Web of Conferences",
      year: "2017",
      description: "Evaluates bamboo waste as a partial replacement for aggregates in concrete paving.",
      abstract:
        "Bamboo waste improves the compressive strength of paving blocks. The study shows that bamboo fiber and fly ash mixtures meet quality standards and promote sustainable pavement alternatives.",
      keywords: [
        "Bamboo waste",
        "Pavement",
        "Green infrastructure",
        "Concrete"
      ],
      downloadUrl:
        "https://www.researchgate.net/publication/322269224_Bamboo_Waste_as_Part_of_The_Aggregate_Pavement_The_Way_Green_Infrastructure_in_The_Future",
      icon: "🧱"
    },
    {
      title: "Development of Sustainable Interlocking Concrete Using Bamboo Leaf Ash",
      authors: "Ayobami A. Busari et al.",
      journal: "Elsevier",
      year: "2024",
      description: "Creates eco-friendly paving blocks with bamboo leaf ash and metakaolin as additives.",
      abstract:
        "Concrete blocks with bamboo leaf ash and metakaolin improve strength and sustainability. Results show that replacing 5–10% cement yields strong, semi-rigid pavements suitable for eco-friendly construction.",
      keywords: [
        "Bamboo leaf ash",
        "Metakaolin",
        "Paving blocks",
        "Eco construction"
      ],
      downloadUrl:
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC11152713/pdf/main.pdf",
      icon: "🧪"
    }
  ];

  return (
    <section className="py-20 bg-gradient-solution relative" id="research">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Research Publications
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Peer-reviewed studies supporting Ecotrax’s materials and design
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <Card
              key={index}
              className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-tech transition-all duration-300 hover:scale-105 group border-ocean-blue/20"
            >
              <div className="mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 text-center">
                  {paper.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  {paper.title}
                </h3>
                <div className="text-sm text-ocean-blue font-semibold mb-2">
                  {paper.authors}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {paper.journal} • {paper.year}
                </div>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {paper.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-2">
                  Abstract:
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-2">
                  Keywords:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {paper.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-forest-green/10 text-forest-green px-2 py-1 rounded-full border border-forest-green/20"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-ocean-blue group-hover:text-white group-hover:border-ocean-blue transition-all duration-300"
                  onClick={() => window.open(paper.downloadUrl, "_blank")}
                >
                  📄 Download PDF
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
