import { Brain, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div 
              className="flex items-center space-x-3 mb-6 cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-12 h-12 medical-gradient rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <Brain className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">StrokeAI</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Advanced Risk Prediction</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Empowering healthcare professionals and patients with AI-driven stroke risk assessment 
              for better preventive care and improved outcomes.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-slate-800 border-slate-700 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                <Twitter className="text-white" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-slate-800 border-slate-700 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/sarang-arora', '_blank')}
              >
                <Linkedin className="text-white" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-slate-800 border-slate-700 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                onClick={() => window.open('https://www.github.com/007-SARANG', '_blank')}
              >
                <Github className="text-white" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#prediction-form" onClick={(e) => {e.preventDefault(); document.getElementById('prediction-form')?.scrollIntoView({behavior:'smooth'});}} className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">Features</a></li>
              <li><a href="#analytics" onClick={(e) => {e.preventDefault(); document.getElementById('analytics')?.scrollIntoView({behavior:'smooth'});}} className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">Analytics</a></li>
              <li><a href="#prediction-form" onClick={(e) => {e.preventDefault(); document.getElementById('prediction-form')?.scrollIntoView({behavior:'smooth'});}} className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">AI Prediction</a></li>
              <li><a href="https://www.github.com/007-SARANG" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/sarang-arora" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">Contact Developer</a></li>
              <li><a href="mailto:sarangarora@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-200">Email Support</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); window.open('https://www.termsfeed.com/live/privacy-policy-generator', '_blank');}} className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); window.open('https://www.termsfeed.com/live/terms-and-conditions-generator', '_blank');}} className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <div className="mb-4">
            <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Made with ❤️ by SARANG
            </p>
            <div className="flex justify-center space-x-6 mt-2">
              <a 
                href="https://www.linkedin.com/in/sarang-arora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.github.com/007-SARANG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="text-slate-400">
            &copy; 2025 SARANG. All rights reserved. This tool is for educational purposes 
            and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
