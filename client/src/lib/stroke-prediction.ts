import { apiRequest } from "./queryClient";
import type { StrokeAnalysisInput } from "@shared/schema";

export interface StrokePredictionResult {
  riskScore: number;
  riskLevel: string;
  riskFactors: Array<{
    factor: string;
    impact: string;
    score: number;
  }>;
  recommendations: string[];
  confidence: number;
}

export async function predictStroke(data: StrokeAnalysisInput): Promise<StrokePredictionResult> {
  const response = await apiRequest("POST", "/api/predict-stroke", data);
  return response.json();
}

export async function getAnalytics() {
  const response = await apiRequest("GET", "/api/analytics");
  return response.json();
}
