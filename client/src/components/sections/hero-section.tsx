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
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Minimal floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-[0.02] rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-400 opacity-[0.015] rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-green-500 to-emerald-400 opacity-[0.02] rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
        
        {/* Very subtle neural connections */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M100,200 Q300,100 500,200 T900,150" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow"/>
            <path d="M150,400 Q400,300 650,400 T950,350" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow" style={{animationDelay: '2s'}}/>
            <circle cx="200" cy="200" r="2" fill="#3B82F6" opacity="0.3" className="animate-pulse"/>
            <circle cx="500" cy="150" r="2" fill="#06B6D4" opacity="0.2" className="animate-pulse" style={{animationDelay: '1s'}}/>
            <circle cx="800" cy="180" r="2" fill="#10B981" opacity="0.3" className="animate-pulse" style={{animationDelay: '2s'}}/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-3xl px-8 py-12 shadow-xl border border-white/30 dark:border-slate-700/30">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 dark:from-slate-100 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent leading-tight">
              AI-Powered<br />Stroke Prediction
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
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
              onClick={() => {
                const demo = document.createElement('div');
                demo.innerHTML = `<div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:10px;box-shadow:0 20px 50px rgba(0,0,0,0.3);z-index:9999;text-align:center;"><h3 style="margin:0 0 10px 0;color:#1e40af;">Demo Video</h3><p style="margin:0 0 15px 0;color:#64748b;">Interactive demo coming soon!</p><button onclick="this.parentElement.parentElement.remove()" style="padding:8px 16px;background:#1e40af;color:white;border:none;border-radius:6px;cursor:pointer;">Close</button></div>`;
                document.body.appendChild(demo);
                setTimeout(() => demo.remove(), 3000);
              }}
            >
              <Play className="mr-3" />
              Watch Demo
            </Button>
            </div>
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
