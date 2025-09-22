import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">404</h1>
          <p className="text-xl text-bamboo-beige max-w-3xl mx-auto leading-relaxed">
            Oops! Page not found. It seems like you've encountered a broken link or a missing page.
          </p>
        </div>

        {/* Card for Return to Home */}
        <div className="flex justify-center mt-12">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <a href="/" className="text-blue-800 underline hover:text-blue-900 text-lg font-semibold">
              Return to Home
            </a>
          </Card>
        </div>

        {/* Quote Section (Optional, to match Impact Section) */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed mb-4">
              "It's not just about finding the right page, it's about finding the right path!"
            </blockquote>
            <cite className="text-bamboo-beige font-semibold">- The 404 Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
