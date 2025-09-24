import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ClimateAtlas from "../components/ClimateAtlas";
import StoriesHub from "../components/StoriesHub";
import VRExperience from "../components/VRExperience";
import Dashboard from "../components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ClimateAtlas />
        <StoriesHub />
        <VRExperience />
        <Dashboard />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold terra-text-gradient">TerraX</h3>
                  <p className="text-xs text-muted-foreground">Voices of Earth</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                25 years of Terra satellite data reimagined through human climate stories
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <div className="space-y-2 text-sm">
                <a href="#atlas" className="block text-muted-foreground hover:text-accent transition-colors">Climate Atlas</a>
                <a href="#stories" className="block text-muted-foreground hover:text-accent transition-colors">Story Hub</a>
                <a href="#vr" className="block text-muted-foreground hover:text-accent transition-colors">VR Experience</a>
                <a href="#dashboard" className="block text-muted-foreground hover:text-accent transition-colors">Data Dashboard</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Data Sources</h4>
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground">MODIS - Land & Atmosphere</div>
                <div className="text-muted-foreground">CERES - Energy Balance</div>
                <div className="text-muted-foreground">MISR - Aerosols & Clouds</div>
                <div className="text-muted-foreground">ASTER - Land Surface</div>
                <div className="text-muted-foreground">MOPITT - Atmospheric Chemistry</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground">nasa.gov/terra</div>
                <div className="text-muted-foreground">Climate Stories Blog</div>
                <div className="text-muted-foreground">Research Papers</div>
                <div className="text-muted-foreground">Community Forum</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 TerraX: Voices of Earth. Built with Terra satellite data from NASA's Earth Observing System.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
