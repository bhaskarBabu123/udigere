import React, { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, Zap, BarChart3, Microscope, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const words = ["Empower.", "Innovate.", "Transform."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentWord = words[index];
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(currentWord.substring(0, i + 1));
      i++;
      if (i === currentWord.length) {
        clearInterval(timer);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative h-screen min-h-[800px] md:min-h-[700px] flex items-center bg-[#020617] text-white overflow-hidden">
      {/* --- Background --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
          alt="Automation background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            
            {/* Badge positioned with margin to prevent overlap */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">
                UDUGIRI Technologies
              </span>
            </div>

            {/* Locked Height Heading to prevent paragraph jumping */}
            <div className="min-h-[160px] md:min-h-[220px] lg:min-h-[200px] w-full">
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-none mb-4">
                <span className="text-white block">Industries</span>
                <span className="text-indigo-500 block h-[1.1em]">
                  {displayText}<span className="text-white animate-pulse">|</span>
                </span>
              </h1>
            </div>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10 border-l-4 border-indigo-600 pl-6 py-1">
             Delivering industrial automation solutions, smart manufacturing consulting, MSME transformation, precision testing & calibration, and advanced skill innovation labs.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/20"
              >
                Request Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold text-center backdrop-blur-md transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT VISUALS (Fixed height cards to stay within 100vh) */}
          <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4 h-fit max-h-[550px]">
            <div className="space-y-4 pt-16">
              <ServiceCard icon={<Zap className="text-yellow-400" />} title="Industrial" desc="Automation" />
              <ServiceCard icon={<BarChart3 className="text-blue-400" />} title="MSME" desc="Transformation" />
            </div>
            <div className="space-y-4">
              <ServiceCard icon={<Microscope className="text-indigo-400" />} title="Precision" desc="Testing" />
              <ServiceCard icon={<ShieldCheck className="text-emerald-400" />} title="Smart" desc="Manufacturing" />
              <div className="p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 backdrop-blur-sm">
                <Cpu className="text-indigo-400 mb-2" size={24} />
                <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Skill Labs</div>
                <div className="text-white text-sm font-semibold">Innovation Center</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-start gap-4 hover:border-indigo-500/40 transition-all duration-300 group">
    <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{title}</div>
      <div className="text-white font-bold leading-tight">{desc}</div>
    </div>
  </div>
);

export default HeroSection;