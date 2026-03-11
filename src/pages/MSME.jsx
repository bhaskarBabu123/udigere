import React from 'react';
import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  Factory, Cog, Zap, BarChart, Target, Shield, 
  CheckCircle2, TrendingUp, Cpu, Network, ArrowRight 
} from 'lucide-react';

const MSME = () => {
  const msmeServices = [
    {
      icon: <Factory className="w-6 h-6 md:w-8 h-8" />,
      title: "Digitization Support",
      description: "Complete digital transformation assistance including process digitization, digital documentation, and ERP implementation for improved efficiency."
    },
    {
      icon: <Network className="w-6 h-6 md:w-8 h-8" />,
      title: "Legacy Machine Retrofitting",
      description: "Upgrading existing machinery with modern sensors and connectivity to achieve Industry 4.0 capabilities without high replacement costs."
    },
    {
      icon: <Cpu className="w-6 h-6 md:w-8 h-8" />,
      title: "Smart Factory Upgrade",
      description: "Step-by-step transformation of traditional facilities into smart factories with IoT integration and real-time monitoring."
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 h-8" />,
      title: "Energy Optimization",
      description: "Energy audit and monitoring systems implementation to reduce consumption, costs, and environmental impact."
    },
    {
      icon: <Target className="w-6 h-6 md:w-8 h-8" />,
      title: "Lean Implementation",
      description: "Lean manufacturing principles including waste elimination, process optimization, and 5S methodology."
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 h-8" />,
      title: "ZED Implementation",
      description: "Zero Defect Zero Effect certification support including quality systems and environmental compliance initiatives."
    }
  ];

  const benefits = [
    { title: "Efficiency", desc: "+30% Operational Growth", img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=400" },
    { title: "Cost Reduction", desc: "20-25% Savings", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400" },
    { title: "Quality", desc: "Reduced Defects", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400" },
  ];

  const implementationSteps = [
    { step: "01", title: "Assessment", description: "Comprehensive evaluation of current systems." },
    { step: "02", title: "Design", description: "Customized solution development." },
    { step: "03", title: "Phased Execution", description: "Gradual implementation to minimize downtime." },
    { step: "04", title: "Support", description: "Ongoing training and maintenance." }
  ];

  const msmeFAQs = [
    {
      question: "What is the typical cost of digital transformation for an MSME?",
      answer: "Costs vary based on size, typically ₹5L to ₹50L. We offer phased approaches and government subsidy assistance to make it affordable."
    },
    {
      question: "Can we implement Industry 4.0 without stopping production?",
      answer: "Yes, we schedule installations during maintenance windows to ensure zero production disruption."
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- ELITE GREEN BANNER --- */}
      <section className="relative min-h-[50vh] md:h-[70vh] flex items-center bg-slate-950 px-4 py-12 md:py-5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565891741441-6ad9652bb790?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="MSME Support" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Growth for MSMEs</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-tighter">
              Empowering <span className="text-emerald-400">Enterprises.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 font-medium max-w-xl">
              Customized digitization and Industry 4.0 modernization support designed specifically for Small & Medium Enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Transformation Services</h2>
          <div className="h-1 w-16 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {msmeServices.map((service, i) => (
            <div key={i} className="p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all">
              <div className="text-emerald-600 mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BENEFITS WITH IMAGES --- */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Key Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="group relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg">
                <img src={benefit.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={benefit.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-black text-white uppercase">{benefit.title}</h3>
                  <p className="text-emerald-400 font-bold text-sm uppercase">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STEPS (DARK) --- */}
      <section className="py-16 md:py-24 bg-slate-950 rounded-[2rem] md:rounded-[4rem] mx-4 my-12 text-white px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter">Implementation Roadmap</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((item, i) => (
              <div key={i} className="relative group border-l-2 border-emerald-500/30 pl-6 py-4">
                <div className="text-3xl font-black text-emerald-500 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{item.step}</div>
                <h4 className="text-lg font-bold uppercase mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUCCESS STORY --- */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-12 shadow-sm flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800" 
              className="rounded-2xl shadow-2xl w-full h-64 md:h-96 object-cover" 
              alt="Factory Success" 
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 uppercase leading-tight">Automotive <br />Success Story</h3>
            <p className="text-slate-600 mb-6 font-medium">Reduced downtime by 40% for a mid-scale manufacturer through low-cost sensor retrofitting.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <div className="text-xl md:text-2xl font-black text-emerald-600">35%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Efficiency</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <div className="text-xl md:text-2xl font-black text-emerald-600">ROI</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">20 Months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <FAQ title="MSME Support FAQs" faqs={msmeFAQs} />
      </div>

      <div className="py-12 md:py-24 text-center px-4">
        <button className="w-full md:w-auto bg-emerald-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 mx-auto">
          Contact Us <ArrowRight size={20} />
        </button>
      </div>

    </div>
  );
};

export default MSME;