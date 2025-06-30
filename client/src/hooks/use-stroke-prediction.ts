import { useMutation, useQueryClient } from "@tanstack/react-query";
import { predictStroke } from "@/lib/stroke-prediction";
import { useToast } from "@/hooks/use-toast";
import type { StrokeAnalysisInput } from "@shared/schema";

export function useStrokePrediction() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: predictStroke,
    onSuccess: (data) => {
      toast({
        title: "Analysis Complete",
        description: `Risk level: ${data.riskLevel} (${data.riskScore}%)`,
      });
      
      // Invalidate analytics to refresh dashboard
      queryClient.invalidateQueries({ queryKey: ['/api/analytics'] });
    },
    onError: (error) => {
      toast({
        title: "Analysis Failed",
        description: "Please check your input data and try again.",
        variant: "destructive",
      });
      console.error("Stroke prediction error:", error);
    },
  });

  return {
    predictStroke: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
