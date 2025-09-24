import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Play, Globe, Database } from "lucide-react";
import heroEarth from "@/assets/hero-earth.jpg";

const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroEarth} 
          alt="Earth from space showing climate data visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-terra-atmosphere opacity-80"></div>
        <div className="absolute inset-0 terra-hero-bg"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-terra-fire rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-terra-forest rounded-full animate-float opacity-70" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-slide-up">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="terra-text-gradient">TerraX</span>
              <br />
              <span className="text-foreground">Voices of Earth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              25 years of Terra satellite data reimagined through human stories
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="terra-card p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-accent">25</div>
              <div className="text-sm text-muted-foreground">Years of Data</div>
            </div>
            <div className="terra-card p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-terra-forest">500+</div>
              <div className="text-sm text-muted-foreground">Stories</div>
            </div>
            <div className="terra-card p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-terra-fire">1.2M</div>
              <div className="text-sm text-muted-foreground">Data Points</div>
            </div>
            <div className="terra-card p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-terra-ocean">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-terra-glow hover:shadow-terra-deep transition-all duration-300"
              onClick={() => scrollToSection('#atlas')}
            >
              <Globe className="mr-2 h-5 w-5" />
              Explore Atlas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg transition-all duration-300"
              onClick={() => scrollToSection('#stories')}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Stories
            </Button>
            
            <Button 
              variant="ghost"
              size="lg"
              className="text-foreground hover:text-accent px-8 py-6 text-lg transition-all duration-300"
              onClick={() => scrollToSection('#vr')}
            >
              <Database className="mr-2 h-5 w-5" />
              Try VR Demo
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;