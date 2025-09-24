import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Slider } from "@/components/ui/slider.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Flame, Droplets, TreePine, Factory, Zap, Map } from "lucide-react";

const ClimateAtlas = () => {
  const [selectedYear, setSelectedYear] = useState([2020]);
  const [selectedLayer, setSelectedLayer] = useState("fires");

  // Sample data for different years
  const atlasData = {
    2000: { fires: 1200, pollutionIndex: 40, floodEvents: 3, deforestation: 5 },
    2005: { fires: 1800, pollutionIndex: 50, floodEvents: 5, deforestation: 8 },
    2010: { fires: 2400, pollutionIndex: 65, floodEvents: 7, deforestation: 12 },
    2015: { fires: 3500, pollutionIndex: 75, floodEvents: 10, deforestation: 18 },
    2020: { fires: 4100, pollutionIndex: 80, floodEvents: 12, deforestation: 22 },
    2025: { fires: 5000, pollutionIndex: 95, floodEvents: 15, deforestation: 30 }
  };

  const layers = [
    { id: "fires", label: "Wildfire Hotspots", icon: Flame, color: "terra-fire", data: "fires" },
    { id: "pollution", label: "CO Pollution", icon: Factory, color: "terra-space", data: "pollutionIndex" },
    { id: "floods", label: "Flood Events", icon: Droplets, color: "terra-ocean", data: "floodEvents" },
    { id: "forest", label: "Deforestation", icon: TreePine, color: "terra-forest", data: "deforestation" },
  ];

  const currentData = atlasData[selectedYear[0] as keyof typeof atlasData];

  return (
    <section id="atlas" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="terra-text-gradient">Interactive Climate Atlas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore 25 years of Terra satellite data through interactive maps and time-based visualization
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Time Slider */}
            <Card className="terra-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span>Time Control</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{selectedYear[0]}</div>
                  <div className="text-sm text-muted-foreground">Selected Year</div>
                </div>
                <Slider
                  value={selectedYear}
                  onValueChange={setSelectedYear}
                  min={1999}
                  max={2025}
                  step={5}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1999</span>
                  <span>2025</span>
                </div>
              </CardContent>
            </Card>

            {/* Layer Selection */}
            <Card className="terra-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="h-5 w-5 text-accent" />
                  <span>Data Layers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  const isSelected = selectedLayer === layer.id;
                  return (
                    <Button
                      key={layer.id}
                      variant={isSelected ? "default" : "ghost"}
                      className={`w-full justify-start ${isSelected ? 'bg-accent text-accent-foreground' : ''}`}
                      onClick={() => setSelectedLayer(layer.id)}
                    >
                      <Icon className={`mr-2 h-4 w-4 ${isSelected ? '' : `text-${layer.color}`}`} />
                      {layer.label}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Current Data Display */}
            <Card className="terra-card">
              <CardHeader>
                <CardTitle>Data Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  const value = currentData[layer.data as keyof typeof currentData];
                  const suffix = layer.data === 'pollutionIndex' ? ' AQI' : layer.data === 'deforestation' ? '%' : '';
                  return (
                    <div key={layer.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className={`h-4 w-4 text-${layer.color}`} />
                        <span className="text-sm">{layer.label}</span>
                      </div>
                      <Badge variant={selectedLayer === layer.id ? "default" : "outline"}>
                        {value}{suffix}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <Card className="terra-card h-full">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-lg relative overflow-hidden">
                  {/* Simulated Map Interface */}
                  <div className="absolute inset-0 bg-terra-space opacity-90"></div>
                  
                  {/* Animated Data Points */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-80">
                      {/* Central Earth representation */}
                      <div className="absolute inset-0 bg-terra-earth rounded-full opacity-30 animate-pulse-glow"></div>
                      
                      {/* Dynamic data points based on selected layer */}
                      {Array.from({ length: Math.floor(currentData[layers.find(l => l.id === selectedLayer)?.data as keyof typeof currentData] / 200) }).map((_, i) => {
                        const Icon = layers.find(l => l.id === selectedLayer)?.icon || Flame;
                        const angle = (i * 360) / Math.floor(currentData[layers.find(l => l.id === selectedLayer)?.data as keyof typeof currentData] / 200);
                        const radius = 120 + (i % 3) * 20;
                        const x = Math.cos(angle * Math.PI / 180) * radius;
                        const y = Math.sin(angle * Math.PI / 180) * radius;
                        
                        return (
                          <div
                            key={i}
                            className="absolute animate-pulse-glow"
                            style={{
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                              transform: 'translate(-50%, -50%)',
                              animationDelay: `${i * 0.2}s`
                            }}
                          >
                            <Icon className={`h-4 w-4 text-${layers.find(l => l.id === selectedLayer)?.color} drop-shadow-lg`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <div className="terra-card p-2 text-xs">
                      <div className="font-semibold text-accent">{layers.find(l => l.id === selectedLayer)?.label}</div>
                      <div className="text-muted-foreground">Year: {selectedYear[0]}</div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 right-4 terra-card p-3">
                    <div className="text-xs font-semibold mb-2">Legend</div>
                    <div className="flex items-center space-x-2 text-xs">
                      {(() => {
                        const Icon = layers.find(l => l.id === selectedLayer)?.icon || Flame;
                        return (
                          <>
                            <Icon className={`h-3 w-3 text-${layers.find(l => l.id === selectedLayer)?.color}`} />
                            <span className="text-muted-foreground">
                              {layers.find(l => l.id === selectedLayer)?.label} Events
                            </span>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                {/* Time Series Preview */}
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold">Trend Analysis</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(atlasData).map(([year, data]) => {
                      const currentLayerData = layers.find(l => l.id === selectedLayer);
                      const value = data[currentLayerData?.data as keyof typeof data];
                      const isSelected = parseInt(year) === selectedYear[0];
                      
                      return (
                        <div
                          key={year}
                          className={`terra-card p-3 text-center cursor-pointer transition-all duration-300 ${
                            isSelected ? 'terra-glow border-accent' : 'hover:border-accent/50'
                          }`}
                          onClick={() => setSelectedYear([parseInt(year)])}
                        >
                          <div className="text-lg font-bold text-accent">{year}</div>
                          <div className="text-sm text-muted-foreground">{value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateAtlas;