import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { schema } from "./shared/schema";

console.log("✅ Exports from schema:", Object.keys(schema));

import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Stroke risk prediction endpoint
  app.post("/api/predict", async (req, res) => {
    try {
      const validatedData = schema.strokeAnalysisSchema.parse(req.body);
      
      // Calculate stroke risk using algorithm based on medical research
      const riskScore = calculateStrokeRisk(validatedData);
      const riskLevel = getRiskLevel(riskScore);
      const riskFactors = analyzeTriggers(validatedData);
      const recommendations = generateRecommendations(validatedData, riskScore);
      
      // Store prediction
      await storage.createStrokePrediction(validatedData);

      res.json({
        riskScore,
        riskLevel,
        riskFactors,
        recommendations,
        confidence: calculateConfidence(validatedData)
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Invalid input data", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          error: "Prediction calculation failed" 
        });
      }
    }
  });

  // Get analytics data
  app.get("/api/analytics", async (req, res) => {
    try {
      const analytics = await storage.getStrokeAnalytics();
      res.json(analytics);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch analytics data" 
      });
    }
  });

  // Get all predictions for dashboard
  app.get("/api/predictions", async (req, res) => {
    try {
      const predictions = await storage.getStrokePredictions();
      res.json(predictions);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch predictions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function calculateStrokeRisk(data: any): number {
  let riskScore = 0;
  
  if (data.age >= 75) riskScore += 45;
  else if (data.age >= 65) riskScore += 35;
  else if (data.age >= 55) riskScore += 25;
  else if (data.age >= 45) riskScore += 15;
  else if (data.age >= 35) riskScore += 5;

  if (data.hypertension) riskScore += 25;
  if (data.heartDisease) riskScore += 30;

  if (data.avgGlucoseLevel >= 200) riskScore += 20;
  else if (data.avgGlucoseLevel >= 140) riskScore += 15;
  else if (data.avgGlucoseLevel >= 100) riskScore += 8;

  if (data.bmi) {
    if (data.bmi >= 35) riskScore += 15;
    else if (data.bmi >= 30) riskScore += 10;
    else if (data.bmi >= 25) riskScore += 5;
  }

  if (data.smokingStatus === 'smokes') riskScore += 20;
  else if (data.smokingStatus === 'formerly smoked') riskScore += 8;

  if (data.gender === 'Male' && data.age >= 45) riskScore += 5;
  if (data.gender === 'Female' && data.age >= 55) riskScore += 5;

  if (data.workType === 'Private' || data.workType === 'Self-employed') riskScore += 3;

  return Math.min(Math.round(riskScore), 100);
}

function getRiskLevel(score: number): string {
  if (score >= 70) return 'High Risk';
  if (score >= 40) return 'Moderate Risk';
  if (score >= 20) return 'Low-Moderate Risk';
  return 'Low Risk';
}

function analyzeTriggers(data: any): Array<{ factor: string; impact: string; score: number }> {
  const factors = [];
  
  if (data.age >= 65) factors.push({ factor: 'Advanced Age', impact: 'High', score: 35 });
  else if (data.age >= 55) factors.push({ factor: 'Age Factor', impact: 'Medium', score: 25 });
  
  if (data.hypertension) factors.push({ factor: 'Hypertension', impact: 'High', score: 25 });
  if (data.heartDisease) factors.push({ factor: 'Heart Disease', impact: 'High', score: 30 });
  
  if (data.avgGlucoseLevel >= 200) factors.push({ factor: 'High Glucose', impact: 'High', score: 20 });
  else if (data.avgGlucoseLevel >= 140) factors.push({ factor: 'Elevated Glucose', impact: 'Medium', score: 15 });
  
  if (data.bmi && data.bmi >= 30) factors.push({ factor: 'Obesity', impact: 'Medium', score: 15 });
  
  if (data.smokingStatus === 'smokes') factors.push({ factor: 'Current Smoking', impact: 'High', score: 20 });
  
  return factors;
}

function generateRecommendations(data: any, riskScore: number): string[] {
  const recommendations = [];
  
  if (data.age >= 55) recommendations.push('Schedule regular cardiovascular checkups every 6 months');
  if (data.hypertension) recommendations.push('Monitor blood pressure daily and maintain medication adherence');
  if (data.heartDisease) recommendations.push('Follow cardiology care plan and heart-healthy diet');
  if (data.avgGlucoseLevel >= 140) recommendations.push('Implement glucose control through diet and medication');
  if (data.smokingStatus === 'smokes') recommendations.push('Immediate smoking cessation with professional support');
  if (data.bmi && data.bmi >= 30) recommendations.push('Achieve healthy weight through structured program');
  
  recommendations.push('Engage in 150 minutes of moderate aerobic activity weekly');
  recommendations.push('Follow Mediterranean diet rich in omega-3 fatty acids');
  recommendations.push('Practice stress management techniques daily');
  
  if (riskScore >= 70) {
    recommendations.unshift('Seek immediate medical consultation for comprehensive evaluation');
  }
  
  return recommendations;
}

function calculateConfidence(data: any): number {
  let confidence = 85;
  
  if (!data.bmi) confidence -= 5;
  if (data.smokingStatus === 'Unknown') confidence -= 3;
  
  if (data.bmi && data.smokingStatus !== 'Unknown') confidence += 5;
  
  return Math.min(confidence, 95);
}
