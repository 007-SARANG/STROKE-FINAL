import { z } from "zod";

// Re-declare the Zod schema used for frontend validation
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

export type StrokeAnalysisInput = z.infer<typeof strokeAnalysisSchema>;
