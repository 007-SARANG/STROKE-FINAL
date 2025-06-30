import { pgTable, text, serial, integer, boolean, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
export const strokePredictions = pgTable("stroke_predictions", {
  id: serial("id").primaryKey(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  hypertension: boolean("hypertension").notNull().default(false),
  heartDisease: boolean("heart_disease").notNull().default(false),
  everMarried: text("ever_married").notNull(),
  workType: text("work_type").notNull(),
  residenceType: text("residence_type").notNull(),
  avgGlucoseLevel: real("avg_glucose_level").notNull(),
  bmi: real("bmi"),
  smokingStatus: text("smoking_status").notNull(),
  riskScore: real("risk_score"),
  riskLevel: text("risk_level"),
  predictions: text("predictions"),
});

export const insertStrokePredictionSchema = createInsertSchema(strokePredictions).omit({
  id: true,
  riskScore: true,
  riskLevel: true,
  predictions: true,
});

export const strokeAnalysisSchema = z.object({
  age: z.number().min(1).max(120),
  gender: z.enum(["Male", "Female", "Other"]),
  hypertension: z.boolean(),
  heartDisease: z.boolean(),
  everMarried: z.enum(["Yes", "No"]),
  workType: z.enum(["Private", "Self-employed", "Govt_job", "children", "Never_worked"]),
  residenceType: z.enum(["Urban", "Rural"]),
  avgGlucoseLevel: z.number().min(50).max(400),
  bmi: z.number().min(10).max(60).optional(),
  smokingStatus: z.enum(["never smoked", "formerly smoked", "smokes", "Unknown"]),
});

export type InsertStrokePrediction = z.infer<typeof insertStrokePredictionSchema>;
export type StrokePrediction = typeof strokePredictions.$inferSelect;
export type StrokeAnalysisInput = z.infer<typeof strokeAnalysisSchema>;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export const schema = {
  users,
  strokePredictions,
};
