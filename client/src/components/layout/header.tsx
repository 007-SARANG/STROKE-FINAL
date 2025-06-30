import { Button } from "@/components/ui/button";
import { Brain, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 medical-gradient rounded-xl flex items-center justify-center shadow-lg animate-glow">
              <Brain className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                StrokeAI
              </h1>
              <p className="text-sm text-muted-foreground">Advanced Risk Prediction</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('prediction')}
              className="text-foreground hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Prediction
            </button>
            <button 
              onClick={() => scrollToSection('analytics')}
              className="text-foreground hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Analytics
            </button>
            <button 
              onClick={() => scrollToSection('insights')}
              className="text-foreground hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Insights
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button className="medical-gradient text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
              Get Report
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="text-xl" />
          </Button>
        </div>
      </div>
    </header>
  );
}
