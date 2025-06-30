import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock, Stethoscope, Play, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";
import GradientCard from "@/components/ui/gradient-card";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('prediction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-32 overflow-hidden neural-network">
      {/* Advanced Neural Network Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-8 rounded-full mix-blend-multiply filter blur-xl animate-float animate-scale-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-400 opacity-6 rounded-full mix-blend-multiply filter blur-xl animate-float animate-spin-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-500 to-emerald-400 opacity-7 rounded-full mix-blend-multiply filter blur-xl animate-float animate-bounce-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Neural connections */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <path d="M100,200 Q300,100 500,200 T900,150" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow"/>
            <path d="M150,400 Q400,300 650,400 T950,350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{animationDelay: '1s'}}/>
            <path d="M80,600 Q350,500 620,600 T920,550" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{animationDelay: '2s'}}/>
            <circle cx="200" cy="200" r="4" fill="#3B82F6" className="animate-pulse"/>
            <circle cx="500" cy="150" r="4" fill="#06B6D4" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
            <circle cx="800" cy="180" r="4" fill="#10B981" className="animate-pulse" style={{animationDelay: '1s'}}/>
            <circle cx="300" cy="400" r="4" fill="#8B5CF6" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
            <circle cx="650" cy="350" r="4" fill="#F59E0B" className="animate-pulse" style={{animationDelay: '2s'}}/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 dark:from-slate-100 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent leading-tight">
            AI-Powered<br />Stroke Prediction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Advanced machine learning algorithms analyze your health profile to provide personalized 
            stroke risk assessment with medical-grade accuracy and actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToForm}
              className="group medical-gradient text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow"
            >
              <Stethoscope className="mr-3" />
              Start Risk Assessment
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-300"
            >
              <Play className="mr-3" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <GradientCard className="group hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter value={97.8} suffix="%" />
              </h3>
              <p className="text-muted-foreground font-medium">Prediction Accuracy</p>
            </div>
          </GradientCard>
          
          <GradientCard className="group hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter value={50} suffix="K+" />
              </h3>
              <p className="text-muted-foreground font-medium">Patients Analyzed</p>
            </div>
          </GradientCard>
          
          <GradientCard className="group hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter value={2} suffix=" Min" prefix="<" />
              </h3>
              <p className="text-muted-foreground font-medium">Assessment Time</p>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}
