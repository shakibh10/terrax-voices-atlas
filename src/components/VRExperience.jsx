import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Camera, Globe, Download, Play, Smartphone, Headphones } from "lucide-react";

const VRExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState("globe");

  const vrExperiences = [
    {
      id: "globe",
      title: "Earth in Motion",
      description: "360° journey around Earth showing 25 years of climate change through Terra satellite data",
      duration: "8 minutes",
      features: ["Wildfire progression", "Glacier retreat", "Urban heat islands", "Deforestation patterns"],
      compatibility: ["Cardboard VR", "Oculus", "WebVR"],
      thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400"
    },
    {
      id: "atmosphere",
      title: "Atmosphere Explorer",
      description: "Fly through Earth's atmosphere layers and visualize greenhouse gas concentrations",
      duration: "6 minutes",
      features: ["CO2 visualization", "Aerosol tracking", "Weather patterns", "Climate feedback loops"],
      compatibility: ["Mobile VR", "Desktop 360°", "AR Mode"],
      thumbnail: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400"
    },
    {
      id: "hotspots",
      title: "Climate Hotspots",
      description: "Visit the most climate-impacted regions through immersive storytelling",
      duration: "12 minutes",
      features: ["Arctic ice loss", "Amazon fires", "Rising seas", "Human stories"],
      compatibility: ["All VR devices", "360° video", "Interactive hotspots"],
      thumbnail: "https://images.unsplash.com/photo-1570126618781-d43e3d9b3c6d?w=400"
    }
  ];

  const vrHotspots = [
    { location: "Himalayas", description: "Glacier retreat 1999–2025", coordinates: [27.9878, 86.9250] },
    { location: "Sahara Desert", description: "Increasing desertification", coordinates: [23.4162, 25.6628] },
    { location: "Amazon Basin", description: "Deforestation impact on energy flux", coordinates: [-3.4653, -62.2159] },
    { location: "Arctic Ocean", description: "Sea ice decline and feedback loops", coordinates: [90.0000, 0.0000] },
    { location: "Great Barrier Reef", description: "Coral bleaching and ocean warming", coordinates: [-18.2871, 147.6992] }
  ];

  const selectedExp = vrExperiences.find(exp => exp.id === selectedExperience);

  return (
    <section id="vr" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="terra-text-gradient">Earth in Motion VR</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience 25 years of climate data through immersive virtual reality and 360° storytelling
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Selection */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Choose Your Journey</h3>
            {vrExperiences.map((exp) => (
              <Card 
                key={exp.id}
                className={`terra-card cursor-pointer transition-all duration-300 ${
                  selectedExperience === exp.id ? 'terra-glow border-accent' : 'hover:border-accent/50'
                }`}
                onClick={() => setSelectedExperience(exp.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Camera className={`h-6 w-6 ${
                        selectedExperience === exp.id ? 'text-accent' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{exp.description}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {exp.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main VR Preview */}
          <div className="lg:col-span-2">
            <Card className="terra-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{selectedExp?.title}</span>
                  <Badge className="bg-accent text-accent-foreground">
                    VR Ready
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* VR Preview */}
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-lg relative overflow-hidden group">
                  <img 
                    src={selectedExp?.thumbnail} 
                    alt={`${selectedExp?.title} VR experience`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-terra-atmosphere opacity-60"></div>
                  
                  {/* VR Overlay Effects */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Rotating VR indicator */}
                      <div className="w-32 h-32 border-4 border-accent rounded-full animate-rotate-slow opacity-60"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="h-16 w-16 text-accent animate-float" />
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-terra-glow">
                      <Play className="h-6 w-6 mr-2" />
                      Launch VR Experience
                    </Button>
                  </div>

                  {/* VR Hotspots */}
                  {vrHotspots.slice(0, 3).map((hotspot, index) => (
                    <div
                      key={hotspot.location}
                      className="absolute w-4 h-4 bg-accent rounded-full animate-pulse-glow cursor-pointer hover:scale-150 transition-transform"
                      style={{
                        left: `${20 + index * 25}%`,
                        top: `${30 + index * 15}%`,
                        animationDelay: `${index * 0.5}s`
                      }}
                      title={`${hotspot.location}: ${hotspot.description}`}
                    />
                  ))}
                </div>

                {/* Experience Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Experience Features</h4>
                    <div className="space-y-2">
                      {selectedExp?.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Compatibility</h4>
                    <div className="space-y-2">
                      {selectedExp?.compatibility.map((device) => (
                        <div key={device} className="flex items-center space-x-2">
                          <Headphones className="h-4 w-4 text-accent" />
                          <span className="text-sm">{device}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Camera className="h-4 w-4 mr-2" />
                    Launch VR Experience
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Mobile 360° View
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download for VR
                  </Button>
                </div>

                {/* VR Instructions */}
                <div className="terra-card p-4 bg-secondary/50">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Headphones className="h-4 w-4 mr-2 text-accent" />
                    VR Setup Instructions
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>1. Put on your VR headset or insert phone into Cardboard viewer</p>
                    <p>2. Use headphones for immersive spatial audio experience</p>
                    <p>3. Look around to explore interactive data hotspots</p>
                    <p>4. Use controller or gaze to select story elements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* VR Hotspots Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="terra-text-gradient">Interactive Climate Hotspots</span>
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {vrHotspots.map((hotspot, index) => (
              <Card 
                key={hotspot.location} 
                className="terra-card cursor-pointer hover:terra-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{hotspot.location}</h4>
                  <p className="text-xs text-muted-foreground">{hotspot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VRExperience;