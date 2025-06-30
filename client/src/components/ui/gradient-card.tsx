import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientCard({ children, className, ...props }: GradientCardProps) {
  return (
    <Card 
      className={cn("glass-card", className)} 
      {...props}
    >
      <div className="p-8">
        {children}
      </div>
    </Card>
  );
}
