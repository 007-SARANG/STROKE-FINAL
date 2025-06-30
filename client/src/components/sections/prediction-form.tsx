import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useStrokePrediction } from "@/hooks/use-stroke-prediction";
import { strokeAnalysisSchema, type StrokeAnalysisInput } from "@/shared-types/stroke-types";
import LoadingRing from "@/components/ui/loading-ring";
import ResultsDisplay from "@/components/sections/results-display";
import { Calendar, Users, Heart, Droplet, Weight, Ban, Activity, Apple, UserCheck, Building } from "lucide-react";

export default function PredictionForm() {
  const [prediction, setPrediction] = useState<any>(null);
  const { predictStroke, isLoading } = useStrokePrediction();

  const form = useForm<StrokeAnalysisInput>({
    resolver: zodResolver(strokeAnalysisSchema),
    defaultValues: {
      age: 45,
      gender: "Male",
      hypertension: false,
      heartDisease: false,
      everMarried: "Yes",
      workType: "Private",
      residenceType: "Urban",
      avgGlucoseLevel: 100,
      smokingStatus: "never smoked",
    },
  });

  const onSubmit = async (data: StrokeAnalysisInput) => {
    try {
      const result = await predictStroke(data);
      setPrediction(result);
    } catch (error) {
      console.error('Prediction failed:', error);
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl p-8 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Subtle animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  AI Health Assessment
                </h3>
                <p className="text-muted-foreground text-lg">
                  Powered by advanced machine learning algorithms for precise risk analysis
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4 animate-pulse"></div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Age</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            max="120"
                            placeholder="Enter your age"
                            className="glass-card border-2 focus:border-blue-500 transition-all duration-200"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>Gender</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-card border-2 focus:border-blue-500">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Medical Conditions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <FormLabel className="text-sm font-semibold">Medical Conditions</FormLabel>
                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="hypertension"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 transition-colors duration-200">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="border-2"
                              />
                            </FormControl>
                            <FormLabel className="flex items-center justify-between w-full cursor-pointer">
                              <span>Hypertension</span>
                              <Heart className="w-5 h-5 text-red-500" />
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="heartDisease"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 transition-colors duration-200">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="border-2"
                              />
                            </FormControl>
                            <FormLabel className="flex items-center justify-between w-full cursor-pointer">
                              <span>Heart Disease</span>
                              <Activity className="w-5 h-5 text-red-500" />
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="everMarried"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <UserCheck className="w-4 h-4" />
                          <span>Marital Status</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-card border-2 focus:border-blue-500">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Yes">Married</SelectItem>
                            <SelectItem value="No">Single</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Work and Residence */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="workType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span>Work Type</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-card border-2 focus:border-blue-500">
                              <SelectValue placeholder="Select work type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Private">Private</SelectItem>
                            <SelectItem value="Self-employed">Self-employed</SelectItem>
                            <SelectItem value="Govt_job">Government Job</SelectItem>
                            <SelectItem value="children">Student/Child</SelectItem>
                            <SelectItem value="Never_worked">Never Worked</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="residenceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Residence Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-card border-2 focus:border-blue-500">
                              <SelectValue placeholder="Select residence" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Urban">Urban</SelectItem>
                            <SelectItem value="Rural">Rural</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Health Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="avgGlucoseLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Droplet className="w-4 h-4" />
                          <span>Average Glucose Level (mg/dL)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="50"
                            max="400"
                            step="0.1"
                            placeholder="e.g., 120.5"
                            className="glass-card border-2 focus:border-blue-500 transition-all duration-200"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value))}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bmi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Weight className="w-4 h-4" />
                          <span>BMI (kg/m²)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="10"
                            max="60"
                            step="0.1"
                            placeholder="e.g., 24.5"
                            className="glass-card border-2 focus:border-blue-500 transition-all duration-200"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Smoking Status */}
                <FormField
                  control={form.control}
                  name="smokingStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <Ban className="w-4 h-4" />
                        <span>Smoking Status</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="glass-card border-2 focus:border-blue-500">
                            <SelectValue placeholder="Select smoking status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="never smoked">Never Smoked</SelectItem>
                          <SelectItem value="formerly smoked">Formerly Smoked</SelectItem>
                          <SelectItem value="smokes">Currently Smokes</SelectItem>
                          <SelectItem value="Unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full medical-gradient text-white py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  {isLoading ? (
                    <LoadingRing />
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center justify-center">
                        <Activity className="mr-3" />
                        Analyze Stroke Risk
                        <span className="ml-3 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </Button>
                </form>
              </Form>
            </div>
          </Card>

          {/* Results Panel */}
          <div className="space-y-8">
            {prediction && <ResultsDisplay prediction={prediction} />}
            
            {/* Health Tips */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Heart className="text-red-500 mr-3" />
                Stroke Prevention Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Stay Active</h4>
                    <p className="text-muted-foreground text-sm">Regular exercise reduces stroke risk by up to 27%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Apple className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Healthy Diet</h4>
                    <p className="text-muted-foreground text-sm">Mediterranean diet can reduce stroke risk significantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Ban className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quit Smoking</h4>
                    <p className="text-muted-foreground text-sm">Smoking cessation rapidly reduces stroke risk</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Regular Checkups</h4>
                    <p className="text-muted-foreground text-sm">Monitor blood pressure and glucose levels regularly</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
