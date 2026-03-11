import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  Factory, Bot, Shield, BarChart, Cpu, Wifi, Database, Eye, 
  Users, Leaf, Heart, Recycle, Zap, Layers, Activity, Search 
} from 'lucide-react';

const Industry = () => {
  const industry4Features = [
    { icon: <Bot className="w-6 h-6" />, title: "Automation", desc: "Autonomous robotics and production lines." },
    { icon: <Wifi className="w-6 h-6" />, title: "IoT Integration", desc: "Sensors connecting every asset to the cloud." },
    { icon: <Database className="w-6 h-6" />, title: "Big Data", desc: "Processing petabytes of industrial metrics." },
    { icon: <Cpu className="w-6 h-6" />, title: "Cyber Systems", desc: "Digital twins of physical factory assets." }
  ];

  const industry5Features = [
    { icon: <Users className="w-6 h-6" />, title: "Human-Centric", desc: "Cobots designed to assist human workers." },
    { icon: <Leaf className="w-6 h-6" />, title: "Sustainability", desc: "Net-zero manufacturing methodologies." },
    { icon: <Heart className="w-6 h-6" />, title: "Well-being", desc: "Ergonomics and safety-first automation." },
    { icon: <Recycle className="w-6 h-6" />, title: "Circular Economy", desc: "Zero-waste manufacturing life cycles." }
  ];

  const solutions = [
    { 
      icon: <Factory className="w-8 h-8 text-emerald-500" />, 
      title: "Smart Factory Implementation", 
      desc: "Complete transformation of traditional factories into intelligent, connected production facilities.",
      img: "https://images.unsplash.com/photo-1565515152650-612b3e2441af?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <Wifi className="w-8 h-8 text-emerald-500" />, 
      title: "IIoT Deployment", 
      desc: "Industrial Internet of Things for seamless connectivity between machines and cloud ecosystems.",
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <BarChart className="w-8 h-8 text-emerald-500" />, 
      title: "Predictive AI Maintenance", 
      desc: "Forecasting equipment failures before they happen to reduce unplanned downtime by 50%.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const industryFAQs = [
    {
      question: "What is the core difference between 4.0 and 5.0?",
      answer: "4.0 is about tech-driven efficiency (machines talking to machines). 5.0 is about value-driven collaboration (humans working with machines) for a sustainable future."
    },
    {
      question: "Do we need to replace all existing equipment?",
      answer: "No. We specialize in 'Digital Retrofitting'—adding sensors and controllers to legacy machines to bring them into the 4.0 ecosystem."
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- PREMIUM HERO BANNER --- */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Industry Banner" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Evolution of Manufacturing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Industry <span className="text-emerald-500">4.0 / 5.0</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Bridging the gap between hyper-efficient automation and human-centric sustainability.
          </p>
        </div>
      </section>

      {/* --- INDUSTRY 4.0 SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-emerald-500 w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">The 4th Revolution</span>
            </div>
            <h2 className="text-4xl font-black mb-6 text-slate-900">Cognitive Manufacturing</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Industry 4.0 isn't just about robots; it's about a <strong>Connected Ecosystem</strong>. By merging physical production with digital technologies like Big Data and IoT, we create factories that can "think" and "react" in real-time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {industry4Features.map((f, i) => (
                <div key={i} className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-500 transition-all">
                  <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000" alt="Industry 4.0" />
            </div>
            <div className="absolute -top-6 -right-6 bg-slate-900 p-8 rounded-3xl text-white shadow-xl hidden xl:block">
              <p className="text-3xl font-black text-emerald-400">30%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Efficiency Boost</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPARISON DIVIDER --- */}
      
      
      {/* --- INDUSTRY 5.0 SECTION --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000" alt="Industry 5.0" className="rounded-[3rem] shadow-emerald-500/10 shadow-2xl" />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-emerald-400 w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">The 5th Revolution</span>
              </div>
              <h2 className="text-4xl font-black mb-6">Human-Robot Synergy</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Industry 5.0 brings back the human touch. It focuses on the <strong>triad of resilience, sustainability, and worker-centricity</strong>. It’s no longer just about how fast we can produce, but how responsibly we can innovate.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {industry5Features.map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-emerald-400 shrink-0">{f.icon}</div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{f.title}</h3>
                      <p className="text-xs text-slate-400 font-medium">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Industrial Transformation Suite</h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur rounded-2xl">
                  {s.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black mb-4 text-slate-900">{s.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center text-emerald-600 font-bold text-sm cursor-pointer hover:gap-2 transition-all">
                  VIEW TECHNICAL SPECS →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DATA ACQUISITION FLOW --- */}
      <section className="py-24 bg-emerald-500 rounded-[4rem] mx-4 mb-12">
        <div className="container mx-auto px-6 text-slate-950 text-center">
          <h2 className="text-4xl font-black mb-12 tracking-tighter">Our Implementation Framework</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", label: "Sensor Audit" },
              { step: "02", label: "Edge Gateway" },
              { step: "03", label: "AI Modeling" },
              { step: "04", label: "ERP Integration" }
            ].map((st, i) => (
              <div key={i} className="bg-slate-950/5 p-8 rounded-3xl border border-slate-950/10">
                <p className="text-4xl font-black opacity-20 mb-2">{st.step}</p>
                <p className="font-bold text-lg">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Expert Insights" faqs={industryFAQs} />
      
      <div className="py-20 text-center">
        <button className="bg-slate-950 text-white px-10 py-4 rounded-full font-black hover:bg-emerald-600 transition-colors shadow-2xl">
          DOWNLOAD WHITE PAPER (2026)
        </button>
      </div>

    </div>
  );
};

export default Industry;