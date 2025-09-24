import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import { TrendingUp, TrendingDown, AlertTriangle, Leaf, Flame, Waves, Thermometer } from "lucide-react";

const Dashboard = () => {
  // Sample dashboard data
  const dashboardData = {
    co2Levels: [380, 400, 415, 425, 430, 435],
    energyFlux: [240, 245, 250, 260, 265, 270],
    vegetationLoss: [5, 10, 20, 25, 28, 30],
    fireHotspots: [1200, 1800, 2400, 3500, 4100, 5000],
    floodEvents: [3, 5, 7, 10, 12, 15]
  };

  const currentYear = 2025;
  const previousYear = 2020;
  
  const metrics = [
    {
      title: "CO₂ Concentration",
      current: dashboardData.co2Levels[dashboardData.co2Levels.length - 1],
      previous: dashboardData.co2Levels[dashboardData.co2Levels.length - 2],
      unit: "ppm",
      icon: Thermometer,
      color: "terra-fire",
      trend: "up",
      description: "Atmospheric CO₂ levels from MOPITT data"
    },
    {
      title: "Energy Flux",
      current: dashboardData.energyFlux[dashboardData.energyFlux.length - 1],
      previous: dashboardData.energyFlux[dashboardData.energyFlux.length - 2],
      unit: "W/m²",
      icon: TrendingUp,
      color: "terra-earth",
      trend: "up",
      description: "Earth's energy balance from CERES"
    },
    {
      title: "Vegetation Loss",
      current: dashboardData.vegetationLoss[dashboardData.vegetationLoss.length - 1],
      previous: dashboardData.vegetationLoss[dashboardData.vegetationLoss.length - 2],
      unit: "%",
      icon: Leaf,
      color: "terra-forest",
      trend: "up",
      description: "Global vegetation decline from MODIS"
    },
    {
      title: "Fire Hotspots",
      current: dashboardData.fireHotspots[dashboardData.fireHotspots.length - 1],
      previous: dashboardData.fireHotspots[dashboardData.fireHotspots.length - 2],
      unit: "events",
      icon: Flame,
      color: "terra-fire",
      trend: "up",
      description: "Active fire detections globally"
    }
  ];

  const getPercentageChange = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const criticalAlerts = [
    {
      title: "Amazon Deforestation Alert",
      severity: "high",
      region: "Brazil",
      description: "30% increase in deforestation detected in Q4 2024",
      dataSource: "MODIS",
      icon: AlertTriangle
    },
    {
      title: "Arctic Sea Ice Minimum",
      severity: "critical",
      region: "Arctic Ocean",
      description: "Record low sea ice extent recorded in September 2024",
      dataSource: "ASTER",
      icon: Waves
    },
    {
      title: "Wildfire Season Intensity",
      severity: "high",
      region: "Global",
      description: "Fire activity 40% above 25-year average",
      dataSource: "MODIS",
      icon: Flame
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="terra-text-gradient">Global Climate Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights from Terra satellite constellation - monitoring Earth's vital signs since 1999
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const change = getPercentageChange(metric.current, metric.previous);
            const TrendIcon = parseFloat(change) > 0 ? TrendingUp : TrendingDown;
            
            return (
              <Card 
                key={metric.title} 
                className="terra-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center justify-between">
                    <span className="text-muted-foreground">{metric.title}</span>
                    <Icon className={`h-4 w-4 text-${metric.color}`} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold">{metric.current}</div>
                      <div className="text-xs text-muted-foreground">{metric.unit}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <TrendIcon className={`h-3 w-3 ${parseFloat(change) > 0 ? 'text-destructive' : 'text-terra-forest'}`} />
                      <span className={`text-xs font-medium ${parseFloat(change) > 0 ? 'text-destructive' : 'text-terra-forest'}`}>
                        {change}%
                      </span>
                      <span className="text-xs text-muted-foreground">vs {previousYear}</span>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">{metric.description}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trend Visualization */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* CO2 Trends */}
          <Card className="terra-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-terra-fire" />
                <span>CO₂ Concentration Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-terra-fire">
                  {dashboardData.co2Levels[dashboardData.co2Levels.length - 1]} ppm
                </div>
                <div className="text-sm text-muted-foreground">
                  25-year progression (1999-2025)
                </div>
                
                {/* Simple bar chart visualization */}
                <div className="space-y-2">
                  {dashboardData.co2Levels.map((level, index) => {
                    const year = 1999 + (index * 5);
                    const progress = ((level - 380) / (435 - 380)) * 100;
                    
                    return (
                      <div key={year} className="flex items-center space-x-3">
                        <div className="w-12 text-xs text-muted-foreground">{year}</div>
                        <div className="flex-1">
                          <Progress value={progress} className="h-2" />
                        </div>
                        <div className="w-16 text-xs font-medium">{level} ppm</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fire Activity */}
          <Card className="terra-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-terra-fire" />
                <span>Global Fire Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-terra-fire">
                  {dashboardData.fireHotspots[dashboardData.fireHotspots.length - 1].toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  Active fire detections (current year)
                </div>
                
                {/* Fire trend visualization */}
                <div className="space-y-2">
                  {dashboardData.fireHotspots.map((count, index) => {
                    const year = 1999 + (index * 5);
                    const progress = (count / 5000) * 100;
                    
                    return (
                      <div key={year} className="flex items-center space-x-3">
                        <div className="w-12 text-xs text-muted-foreground">{year}</div>
                        <div className="flex-1">
                          <Progress value={progress} className="h-2" />
                        </div>
                        <div className="w-16 text-xs font-medium">{count.toLocaleString()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Alerts */}
        <Card className="terra-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>Critical Climate Alerts</span>
              <Badge variant="destructive">Live</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalAlerts.map((alert, index) => {
                const Icon = alert.icon;
                return (
                  <div 
                    key={alert.title}
                    className="flex items-start space-x-4 p-4 terra-card bg-secondary/30 rounded-lg animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`flex-shrink-0 p-2 rounded-full ${
                      alert.severity === 'critical' ? 'bg-destructive/20' : 'bg-orange-500/20'
                    }`}>
                      <Icon className={`h-4 w-4 ${
                        alert.severity === 'critical' ? 'text-destructive' : 'text-orange-500'
                      }`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">{alert.title}</h4>
                        <Badge 
                          variant={alert.severity === 'critical' ? 'destructive' : 'secondary'}
                          className="ml-2"
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Region: {alert.region}</span>
                        <span>Data: {alert.dataSource}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Data Sources Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 terra-card p-4 rounded-lg">
            <div className="text-sm text-muted-foreground">
              <strong>Data Sources:</strong> MODIS • CERES • MISR • ASTER • MOPITT
            </div>
            <Badge variant="outline">
              Updated: {new Date().toLocaleDateString()}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;