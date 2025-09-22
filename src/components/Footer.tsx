const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Company": [
      { label: "About Us", href: "#team" },
      { label: "Our Mission", href: "#team" },
      { label: "Research", href: "#solution" },
      { label: "Partnerships", href: "#team" }
    ],
    "Solutions": [
      { label: "Modular Panels", href: "#solution" },
      { label: "Smart Features", href: "#features" },
      { label: "Deployment", href: "#deployment" },
      { label: "Impact Analysis", href: "#impact" }
    ],
    "Resources": [
      { label: "Technical Docs", href: "#" },
      { label: "Case Studies", href: "#impact" },
      { label: "Roadmap", href: "#deployment" },
      { label: "Contact", href: "#" }
    ]
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-green text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-bamboo-beige">
              Ecotrax
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Sustainable modular road solutions for Northeast India. 
              Connecting communities through innovative bamboo-plastic composite technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-bamboo-beige/20 rounded-full flex items-center justify-center hover:bg-bamboo-beige/30 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-8 h-8 bg-bamboo-beige/20 rounded-full flex items-center justify-center hover:bg-bamboo-beige/30 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-8 h-8 bg-bamboo-beige/20 rounded-full flex items-center justify-center hover:bg-bamboo-beige/30 transition-colors cursor-pointer">
                <span className="text-sm">🔗</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-bamboo-beige">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-bamboo-beige transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/20 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-bamboo-beige mb-1">50+</div>
            <div className="text-white/80 text-sm">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-bamboo-beige mb-1">15km</div>
            <div className="text-white/80 text-sm">Roads Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-bamboo-beige mb-1">5000+</div>
            <div className="text-white/80 text-sm">Tons CO₂ Saved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-bamboo-beige mb-1">8</div>
            <div className="text-white/80 text-sm">States Covered</div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Team Nexus - NIT Raipur. Building sustainable infrastructure for tomorrow.
          </div>
        </div>
        
        {/* Sustainability Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-bamboo-beige/10 rounded-full px-4 py-2 border border-bamboo-beige/20">
            <span className="text-lg">🌱</span>
            <span className="text-bamboo-beige text-sm font-medium">
              Carbon Neutral Website
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;