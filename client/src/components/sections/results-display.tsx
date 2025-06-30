import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2, CheckCircle, Lightbulb } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";

interface ResultsDisplayProps {
  prediction: {
    riskScore: number;
    riskLevel: string;
    riskFactors: Array<{ factor: string; impact: string; score: number }>;
    recommendations: string[];
    confidence: number;
  };
}

export default function ResultsDisplay({ prediction }: ResultsDisplayProps) {
  const getRiskColor = (score: number) => {
    if (score >= 70) return "text-red-500";
    if (score >= 40) return "text-yellow-500";
    if (score >= 20) return "text-blue-500";
    return "text-green-500";
  };

  const getRiskDescription = (score: number) => {
    if (score >= 70) return "Immediate medical consultation recommended";
    if (score >= 40) return "Consider lifestyle modifications and regular monitoring";
    if (score >= 20) return "Maintain healthy lifestyle and regular checkups";
    return "Continue current healthy practices";
  };

  const getCircleColor = (score: number) => {
    if (score >= 70) return "#EF4444";
    if (score >= 40) return "#F59E0B";
    if (score >= 20) return "#2563EB";
    return "#10B981";
  };

  return (
    <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl p-8 animate-slide-up relative overflow-hidden group">
      {/* Subtle gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-lg blur-sm"></div>
      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            AI Risk Assessment Results
          </h3>
          <p className="text-muted-foreground text-lg">
            Advanced neural network analysis with medical-grade precision
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-4 animate-pulse"></div>
        </div>

        {/* Risk Score Display */}
        <div className="text-center mb-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            {/* Circular Progress Ring */}
            <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
              <circle 
                cx="100" 
                cy="100" 
                r="90" 
                stroke="#E5E7EB" 
                strokeWidth="10" 
                fill="none"
              />
              <circle 
                cx="100" 
                cy="100" 
                r="90" 
                stroke={getCircleColor(prediction.riskScore)} 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round" 
                strokeDasharray="565.48" 
                strokeDashoffset={565.48 - (prediction.riskScore / 100) * 565.48}
                className="transition-all duration-2000 ease-out"
              />
            </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">
                <AnimatedCounter value={prediction.riskScore} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground font-medium">Risk Level</div>
            </div>
          </div>
        </div>
        <div className={`text-2xl font-bold mb-4 ${getRiskColor(prediction.riskScore)}`}>
          {prediction.riskLevel}
        </div>
        <div className="text-muted-foreground max-w-md mx-auto">
          {getRiskDescription(prediction.riskScore)}
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          Confidence: {prediction.confidence}%
        </div>
      </div>

      {/* Risk Factors Breakdown */}
      <div className="space-y-4 mb-8">
        <h4 className="text-xl font-bold text-foreground mb-4">Risk Factors Analysis</h4>
        <div className="space-y-3">
          {prediction.riskFactors.map((factor, index) => {
            const impactColor = factor.impact === 'High' ? 'text-red-600' : 
                               factor.impact === 'Medium' ? 'text-yellow-600' : 'text-blue-600';
            const bgColor = factor.impact === 'High' ? 'bg-red-500' : 
                           factor.impact === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500';
            
            return (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${bgColor}`}></div>
                  <span className="font-medium text-foreground">{factor.factor}</span>
                </div>
                <div className="text-right">
                  <div className={`${impactColor} font-semibold text-sm`}>{factor.impact}</div>
                  <div className="text-muted-foreground text-xs">+{factor.score} points</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 mb-8">
        <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
          <Lightbulb className="text-amber-500 mr-3" />
          Recommendations
        </h4>
        <div className="space-y-2">
          {prediction.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" />
              <span className="text-foreground">{recommendation}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg transition-all duration-200">
          <Download className="mr-2 w-4 h-4" />
          Download Report
        </Button>
        <Button variant="outline" className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
          <Share2 className="mr-2 w-4 h-4" />
          Share Results
        </Button>
        </div>
      </div>
    </Card>
  );
}
