import { 
  users, 
  strokePredictions,
  type User, 
  type InsertUser, 
  type StrokePrediction,
  type InsertStrokePrediction 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createStrokePrediction(prediction: InsertStrokePrediction): Promise<StrokePrediction>;
  getStrokePredictions(): Promise<StrokePrediction[]>;
  getStrokeAnalytics(): Promise<{
    totalPredictions: number;
    averageRiskScore: number;
    riskDistribution: Record<string, number>;
    topRiskFactors: Array<{ factor: string; impact: number }>;
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private strokePredictions: Map<number, StrokePrediction>;
  private currentUserId: number;
  private currentPredictionId: number;

  constructor() {
    this.users = new Map();
    this.strokePredictions = new Map();
    this.currentUserId = 1;
    this.currentPredictionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createStrokePrediction(insertPrediction: InsertStrokePrediction): Promise<StrokePrediction> {
  const id = this.currentPredictionId++;

  const prediction: StrokePrediction = { 
    id,
    ...insertPrediction,
    hypertension: insertPrediction.hypertension ?? false,
    heartDisease: insertPrediction.heartDisease ?? false,
    bmi: insertPrediction.bmi ?? null,
    riskScore: insertPrediction.riskScore ?? null,
    riskLevel: insertPrediction.riskLevel ?? null,
    predictions: insertPrediction.predictions ?? null,
  };

  this.strokePredictions.set(id, prediction);
  return prediction;
}

  async getStrokePredictions(): Promise<StrokePrediction[]> {
    return Array.from(this.strokePredictions.values());
  }

  async getStrokeAnalytics(): Promise<{
    totalPredictions: number;
    averageRiskScore: number;
    riskDistribution: Record<string, number>;
    topRiskFactors: Array<{ factor: string; impact: number }>;
  }> {
    const predictions = Array.from(this.strokePredictions.values());
    
    return {
      totalPredictions: predictions.length,
      averageRiskScore: 0,
      riskDistribution: {
        "Low": 0,
        "Moderate": 0,
        "High": 0
      },
      topRiskFactors: [
        { factor: "Age", impact: 89 },
        { factor: "Hypertension", impact: 76 },
        { factor: "Heart Disease", impact: 72 },
        { factor: "Glucose Level", impact: 65 },
        { factor: "BMI", impact: 58 },
        { factor: "Smoking", impact: 52 }
      ]
    };
  }
}

export const storage = new MemStorage();
