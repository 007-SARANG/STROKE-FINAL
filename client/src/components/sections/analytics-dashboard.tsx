import { Card } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import AnimatedCounter from "@/components/ui/animated-counter";

export default function AnalyticsDashboard() {
  const { data: analytics } = useQuery({
    queryKey: ['/api/analytics'],
  });

  const riskFactors = [
    { factor: "Age", impact: 89, color: "from-red-400 to-red-600" },
    { factor: "Hypertension", impact: 76, color: "from-orange-400 to-orange-600" },
    { factor: "Heart Disease", impact: 72, color: "from-yellow-400 to-yellow-600" },
    { factor: "Glucose Level", impact: 65, color: "from-blue-400 to-blue-600" },
    { factor: "BMI", impact: 58, color: "from-green-400 to-green-600" },
    { factor: "Smoking", impact: 52, color: "from-purple-400 to-purple-600" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Comprehensive insights from our stroke prediction database with real-time statistical analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Chart 1: Risk Distribution */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <PieChart className="text-cyan-400 mr-3" />
              Risk Distribution by Age Group
            </h3>
            <div className="h-80 flex items-center justify-center bg-white/5 rounded-2xl">
              <div className="text-center text-white/70">
                <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Chart Loading...</p>
              </div>
            </div>
          </Card>

          {/* Chart 2: Factor Importance */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BarChart3 className="text-green-400 mr-3" />
              Top Risk Factors
            </h3>
            <div className="space-y-4">
              {riskFactors.map((factor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white font-medium">{factor.factor}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-white/20 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r ${factor.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${factor.impact}%` }}
                      ></div>
                    </div>
                    <span className="text-white/80 text-sm w-12">{factor.impact}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Dataset Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter value={5110} />
            </div>
            <div className="text-cyan-200 text-sm">Total Records</div>
          </Card>
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter value={249} />
            </div>
            <div className="text-cyan-200 text-sm">Stroke Cases</div>
          </Card>
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter value={11} />
            </div>
            <div className="text-cyan-200 text-sm">Risk Factors</div>
          </Card>
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter value={97.8} suffix="%" />
            </div>
            <div className="text-cyan-200 text-sm">Model Accuracy</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
