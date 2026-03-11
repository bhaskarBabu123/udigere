import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  Cog, Bot, Wrench, Lightbulb, FlaskRound as Flask, Factory, 
  Award, Shield, CheckCircle2, ChevronRight, Zap, Microscope
} from 'lucide-react';

const Labs = () => {
  const labs = [
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Industrial Automation Lab",
      description: "A flagship facility for motion control and process logic. Equipped with high-density PLC racks, multi-vendor SCADA environments, and real-time industrial Ethernet networks.",
      features: ["PLC Programming Stations", "SCADA/HMI Design Studio", "Profinet & EtherCAT Networks", "VFD & Servo Control Units"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Robotics & AI Center",
      description: "Bridging the gap between code and kinema. This lab features 6-axis articulated arms and AI vision systems for autonomous sorting and precision assembly training.",
      features: ["Articulated Industrial Arms", "Collaborative Cobot Cells", "NVIDIA Jetson AI Nodes", "Vision Guided Robotics (VGR)"],
      image: "https://images.unsplash.com/photo-1561144443-f546f0016140?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "Mechatronics Research Suite",
      description: "The intersection of mechanics and electronics. Focuses on electro-pneumatics, hydraulic systems, and embedded system integration for smart machine design.",
      features: ["Electro-Pneumatic Kits", "Hydraulic Power Packs", "Embedded Linux Development", "Precision Actuator Systems"],
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Center of Excellence (CoE)",
      description: "Our premium turnkey research facility. Designed for high-impact industry-academia collaboration, IP generation, and advanced technology transfer.",
      features: ["IP Development Support", "Industry-Certified Curriculum", "Technology Transfer Desk", "Advanced Prototype Testing"],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const labsFAQs = [
    {
      question: "Is the curriculum included with the lab setup?",
      answer: "Yes. Every lab comes with a tailor-made curriculum, lab manuals, and faculty training modules aligned with global industry standards (2026 update)."
    },
    {
      question: "Can we customize the equipment based on budget?",
      answer: "Absolutely. We offer 'Modular Lab Scaling' where you can start with core equipment and add advanced AI/Robotic modules as your department grows."
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans">
      
      {/* --- ARCHITECTURAL HERO --- */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c89e959b84db?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Lab Blueprint"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-emerald-500"></div>
              <span className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs">Turnkey Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              Engineering <br />
              <span className="text-emerald-400 italic">Excellence Hubs.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
              We design, commission, and manage world-class laboratory ecosystems that transform academic institutions into innovation powerhouses.
            </p>
          </div>
        </div>
      </section>

      {/* --- LABS ALTERNATING GRID --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {labs.map((lab, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                    <img src={lab.image} alt={lab.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6 text-emerald-600">
                    <div className="p-3 bg-emerald-50 rounded-2xl">
                      {lab.icon}
                    </div>
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{lab.title}</h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                    {lab.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {lab.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 group">
                        <ChevronRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-emerald-600 hover:text-slate-950 transition-colors">
                    Explore Setup Blueprint <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INNOVATION & IDEA LABS (FULL WIDTH) --- */}
      <section className="py-24 bg-slate-950 rounded-[4rem] mx-4 md:mx-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Prototyping & Fabrication</h2>
            <p className="text-slate-400 font-medium">Where ideas take physical form.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-emerald-500 transition-all duration-500 group">
              <Lightbulb className="w-12 h-12 text-emerald-400 group-hover:text-slate-950 mb-6 transition-colors" />
              <h4 className="text-2xl font-bold text-white group-hover:text-slate-950 mb-4">Innovation Idea Lab</h4>
              <p className="text-slate-400 group-hover:text-slate-950/80 mb-6">Designed for design-thinking workshops, early ideation, and business model prototyping.</p>
              <ul className="space-y-2 text-sm font-bold text-slate-500 group-hover:text-slate-950">
                <li>• Rapid Ideation Tools</li>
                <li>• Collaborative Softwares</li>
                <li>• Smart Boards & VR Stations</li>
              </ul>
            </div>

            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-emerald-500 transition-all duration-500 group">
              <Factory className="w-12 h-12 text-emerald-400 group-hover:text-slate-950 mb-6 transition-colors" />
              <h4 className="text-2xl font-bold text-white group-hover:text-slate-950 mb-4">Maker Space / Fab Lab</h4>
              <p className="text-slate-400 group-hover:text-slate-950/80 mb-6">Industrial-grade fabrication tools for building functional prototypes and mechanical models.</p>
              <ul className="space-y-2 text-sm font-bold text-slate-500 group-hover:text-slate-950">
                <li>• Industrial 3D Printers</li>
                <li>• CNC Laser Cutters</li>
                <li>• High-Precision Hand Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS BENTO --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 bg-emerald-500 p-12 rounded-[3rem] flex flex-col justify-between">
            <h2 className="text-4xl font-black text-slate-950 mb-8 tracking-tighter">Why Our <br />Infrastructure Wins.</h2>
            <Zap className="text-slate-950/20" size={120} />
          </div>
          
          {[
            { icon: <Shield />, title: "Certified", desc: "IEC/Industry-standard equipment safety." },
            { icon: <Bot />, title: "Futuristic", desc: "Industry 4.0 / 5.0 ready nodes." },
            { icon: <CheckCircle2 />, title: "Turnkey", desc: "Installation to Training - zero hassle." },
            { icon: <Cog />, title: "Modular", desc: "Scale up as your department grows." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
              <div className="text-emerald-600 mb-6">{item.icon}</div>
              <h4 className="font-black text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ title="Implementation & Support" faqs={labsFAQs} />

      <div className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-black mb-8">Ready to Build Your Center of Excellence?</h3>
          <button className="bg-slate-950 text-white px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl transition-all">
            Download Lab Catalog 2026
          </button>
        </div>
      </div>

    </div>
  );
};

export default Labs;