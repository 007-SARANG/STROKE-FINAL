import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import PredictionForm from "@/components/sections/prediction-form";
import AnalyticsDashboard from "@/components/sections/analytics-dashboard";

export default function PredictionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="prediction">
        <PredictionForm />
      </div>
      <div id="analytics">
        <AnalyticsDashboard />
      </div>
      <Footer />
    </div>
  );
}
