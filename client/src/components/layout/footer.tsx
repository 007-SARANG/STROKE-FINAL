import { Brain, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 medical-gradient rounded-xl flex items-center justify-center">
                <Brain className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">StrokeAI</h3>
                <p className="text-slate-400">Advanced Risk Prediction</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Empowering healthcare professionals and patients with AI-driven stroke risk assessment 
              for better preventive care and improved outcomes.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-slate-800 border-slate-700 hover:bg-blue-600 hover:border-blue-600">
                <Twitter className="text-white" />
              </Button>
              <Button variant="outline" size="icon" className="bg-slate-800 border-slate-700 hover:bg-blue-600 hover:border-blue-600">
                <Linkedin className="text-white" />
              </Button>
              <Button variant="outline" size="icon" className="bg-slate-800 border-slate-700 hover:bg-blue-600 hover:border-blue-600">
                <Github className="text-white" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2024 StrokeAI. All rights reserved. This tool is for educational purposes 
            and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
