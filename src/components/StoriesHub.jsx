import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog.jsx";
import { Play, MapPin, Calendar, Database, Globe, X } from "lucide-react";

const StoriesHub = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  // Sample stories data
  const stories = [
    {
      id: 1,
      region: "Bangladesh",
      title: "Rising Tides in Coastal Villages",
      summary: "Sea-level rise has displaced thousands of families along the Bay of Bengal. MODIS data reveals accelerating coastal erosion patterns.",
      terraData: { modis: "flood_extent", aster: "elevation_loss" },
      videoUrl: "/videos/bangladesh_flood.mp4",
      languages: ["English", "Bengali"],
      coordinates: [22.3569, 91.7832],
      year: 2023,
      category: "floods",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
      dataPoints: ["Flood extent mapping", "Elevation change", "Coastal erosion"]
    },
    {
      id: 2,
      region: "California, USA",
      title: "Wildfire Smoke & Health Crisis",
      summary: "MODIS fire hotspots combined with MISR plume tracking reveal how wildfire smoke travels hundreds of miles to urban centers.",
      terraData: { modis: "fire_hotspots", misr: "aerosol_plumes" },
      videoUrl: "/videos/california_fire.mp4",
      languages: ["English", "Spanish"],
      coordinates: [36.7783, -119.4179],
      year: 2023,
      category: "fires",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      dataPoints: ["Fire hotspot detection", "Smoke plume tracking", "Air quality impact"]
    },
    {
      id: 3,
      region: "Amazon, Brazil",
      title: "Deforestation & Climate Flux",
      summary: "CERES energy imbalance measurements show how Amazon deforestation affects regional and global climate patterns.",
      terraData: { modis: "vegetation_loss", ceres: "energy_flux" },
      videoUrl: "/videos/amazon_deforestation.mp4",
      languages: ["English", "Portuguese"],
      coordinates: [-3.4653, -62.2159],
      year: 2022,
      category: "forest",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
      dataPoints: ["Vegetation loss", "Energy flux changes", "Carbon emissions"]
    },
    {
      id: 4,
      region: "Siberia, Russia",
      title: "Permafrost Melt & Methane Release",
      summary: "Increasing temperatures documented by Terra satellites reveal accelerating permafrost thaw and greenhouse gas emissions.",
      terraData: { modis: "fire_hotspots", mopitt: "co_emissions" },
      videoUrl: "/videos/siberia_permafrost.mp4",
      languages: ["English", "Russian"],
      coordinates: [61.5240, 105.3188],
      year: 2023,
      category: "climate",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
      dataPoints: ["Temperature trends", "Permafrost mapping", "Methane detection"]
    },
    {
      id: 5,
      region: "Maldives",
      title: "Disappearing Islands",
      summary: "ASTER elevation data documents the gradual submersion of low-lying atolls as sea levels continue to rise.",
      terraData: { aster: "elevation_change", modis: "water_extent" },
      videoUrl: "/videos/maldives_islands.mp4",
      languages: ["English", "Dhivehi"],
      coordinates: [3.2028, 73.2207],
      year: 2023,
      category: "sea-level",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      dataPoints: ["Elevation monitoring", "Coastline changes", "Sea level rise"]
    },
    {
      id: 6,
      region: "Sahel, Africa",
      title: "Desert Expansion & Migration",
      summary: "MODIS vegetation indices track desertification patterns forcing communities to migrate across national borders.",
      terraData: { modis: "vegetation_index", aster: "land_surface_temp" },
      videoUrl: "/videos/sahel_migration.mp4",
      languages: ["English", "French", "Arabic"],
      coordinates: [15.7797, 2.1097],
      year: 2022,
      category: "desertification",
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400",
      dataPoints: ["Vegetation health", "Land surface temperature", "Drought monitoring"]
    }
  ];

  const categories = [
    { id: "all", label: "All Stories", count: stories.length },
    { id: "floods", label: "Floods", count: stories.filter(s => s.category === "floods").length },
    { id: "fires", label: "Wildfires", count: stories.filter(s => s.category === "fires").length },
    { id: "forest", label: "Deforestation", count: stories.filter(s => s.category === "forest").length },
    { id: "climate", label: "Climate Change", count: stories.filter(s => s.category === "climate").length },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredStories = selectedCategory === "all" 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="terra-text-gradient">Voices of Terra</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Human stories powered by 25 years of satellite data - where climate science meets lived experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${selectedCategory === category.id ? 'bg-accent text-accent-foreground' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, index) => (
            <Card 
              key={story.id} 
              className="terra-card cursor-pointer group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={`${story.region} climate story`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {story.year}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{story.region}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {story.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Database className="h-4 w-4" />
                    <span>{story.dataPoints.length} datasets</span>
                  </div>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-4 w-4 mr-1" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Modal */}
        {selectedStory && (
          <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto terra-card">
              <DialogHeader>
                <DialogTitle className="text-2xl terra-text-gradient">
                  {selectedStory.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Video/Media Section */}
                <div className="space-y-4">
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Play className="h-16 w-16 mx-auto text-accent" />
                      <div>
                        <div className="font-semibold">Video Story</div>
                        <div className="text-sm text-muted-foreground">
                          {selectedStory.region} • {selectedStory.year}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.languages.map((lang: string) => (
                      <Badge key={lang} variant="outline">
                        <Globe className="h-3 w-3 mr-1" />
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Story Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Story Summary</h4>
                    <p className="text-muted-foreground">{selectedStory.summary}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Terra Data Sources</h4>
                    <div className="space-y-2">
                      {selectedStory.dataPoints.map((point: string) => (
                        <div key={point} className="flex items-center space-x-2">
                          <Database className="h-4 w-4 text-accent" />
                          <span className="text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{selectedStory.region}</span>
                      <span className="text-muted-foreground">
                        ({selectedStory.coordinates[0].toFixed(4)}, {selectedStory.coordinates[1].toFixed(4)})
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-accent hover:bg-accent/90">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Full Story
                    </Button>
                    <Button variant="outline">
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Map
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default StoriesHub;