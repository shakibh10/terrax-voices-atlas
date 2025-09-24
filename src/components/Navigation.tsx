import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Map, BookOpen, Camera, BarChart3, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Globe, label: "Home", href: "#home" },
    { icon: Map, label: "Climate Atlas", href: "#atlas" },
    { icon: BookOpen, label: "Stories", href: "#stories" },
    { icon: Camera, label: "VR Experience", href: "#vr" },
    { icon: BarChart3, label: "Dashboard", href: "#dashboard" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 terra-card border-b border-border/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-accent animate-rotate-slow" />
          <div>
            <h1 className="text-xl font-bold terra-text-gradient">TerraX</h1>
            <p className="text-xs text-muted-foreground">Voices of Earth</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ icon: Icon, label, href }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 terra-card border-b border-border/50 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map(({ icon: Icon, label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="flex items-center space-x-3 w-full text-left p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="text-foreground">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;