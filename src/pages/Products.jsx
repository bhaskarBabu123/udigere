import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  Factory, GraduationCap, Cog, Monitor, Bot, Shield, 
  Database, Cpu, CheckCircle2, Boxes, Wrench, Microscope, Server
} from 'lucide-react';

const Products = () => {
  const industrialProducts = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Automation Panels",
      description: "Custom-engineered power and control centers. We design high-density PLC panels, VFD drive suites, and Intelligent MCCs (Motor Control Centers) built to IP65 standards.",
      tech: ["Siemens S7", "Allen Bradley", "Schneider Electric"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "PLC & SCADA Systems",
      description: "Enterprise-level supervisory control. We develop high-fidelity HMI graphics and distributed SCADA architectures for real-time data acquisition and centralized factory control.",
      tech: ["WinCC", "Ignition", "Wonderware"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Monitoring Systems",
      description: "Real-time OEE (Overall Equipment Effectiveness) tracking. Includes customized dashboards for energy auditing, cycle time analysis, and production bottleneck identification.",
      tech: ["Node-RED", "Grafana", "MQTT"]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "IIoT Industrial Solutions",
      description: "Wireless sensor networks and edge computing gateways that bridge the gap between legacy shop-floor machines and cloud-based ERP systems.",
      tech: ["LoRaWAN", "Zigbee", "Edge Analytics"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Based Industrial Systems",
      description: "Machine learning for predictive maintenance and vision-based quality inspection. Reduce downtime by predicting bearing or motor failures before they occur.",
      tech: ["TensorFlow", "Computer Vision", "Python"]
    }
  ];

  const educationalProducts = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Automation Training Kits",
      description: "Modular PLC/HMI training stations designed for engineering students. Includes integrated sensors, pneumatic actuators, and simulation software.",
      level: "University Grade"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Robotics Lab Setup",
      description: "Turnkey lab solutions featuring 6-Axis industrial arms, collaborative robots (Cobots), and pick-and-place simulation cells.",
      level: "Advanced Research"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Mechatronics Lab",
      description: "Multi-disciplinary setups combining hydraulics, pneumatics, and electronics. Features industry-standard components for hands-on learning.",
      level: "Skill Development"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Innovation Skill Lab",
      description: "Designed for the 'New Collar' workforce. Focuses on Industry 4.0 concepts like digital twins, AR/VR in maintenance, and 3D prototyping.",
      level: "Professional Cert."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "AI & ML Lab Setup",
      description: "Computing clusters equipped with GPUs and pre-installed industrial datasets for training the next generation of AI engineers.",
      level: "High-End Computing"
    }
  ];

  const productFAQs = [
    {
      question: "Do you provide installation and commissioning?",
      answer: "Yes. Our engineering team handles everything from site survey and panel mounting to software logic testing and final handover."
    },
    {
      question: "Can these kits be used for research publications?",
      answer: "Absolutely. Our educational labs are equipped with open-protocol sensors (MQTT/OPC-UA), making them ideal for data collection and academic research."
    },
    {
      question: "What is the typical lead time?",
      answer: "Standard training kits take 4-6 weeks, while large-scale industrial panel projects and lab setups typically take 8-12 weeks."
    }
  ];

  return (
    <div className="bg-[#fafafa] text-slate-900">
      
      {/* --- HERO BANNER --- */}
      <section className="relative py-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Hardware Background"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-emerald-500 font-black tracking-widest text-xs uppercase">Precision Engineering</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 tracking-tighter">
            Hardware & <br /><span className="text-emerald-500 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Software Ecosystems.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            From industrial-grade control panels to advanced university research labs, we deliver the infrastructure that powers Industry 4.0.
          </p>
        </div>
      </section>

      {/* --- INDUSTRIAL PRODUCTS --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-emerald-500"></div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Shop Floor Ready</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900">Industrial Solutions</h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">Reliable, scalable, and built for 24/7 mission-critical operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrialProducts.map((p, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-tighter rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EDUCATIONAL PRODUCTS (DARK THEME) --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <GraduationCap className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Academic Excellence Kits</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Training the engineers of 2026 with hardware that matches modern industrial reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalProducts.map((p, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-emerald-400">{p.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-emerald-500/30 text-emerald-500 rounded-full">
                    {p.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUALITY PROMISE --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-emerald-500 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute right-0 top-0 opacity-10 rotate-12 translate-x-10 -translate-y-10">
            <Server size={400} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-950 mb-8 tracking-tighter">Why Our Systems Dominate</h2>
              <div className="space-y-6">
                {[
                  { t: "Industrial Compliance", d: "All hardware complies with IEC/ISO standards for safety." },
                  { t: "Plug-and-Play Integration", d: "Seamlessly connects to existing ERP and MES systems." },
                  { t: "Future-Proof Logic", d: "Easily upgradable software kernels for AI expansion." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="shrink-0 text-slate-950" />
                    <div>
                      <p className="font-black text-slate-950 text-lg uppercase leading-none">{item.t}</p>
                      <p className="text-slate-800 text-sm font-medium mt-1">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 rounded-[2rem] p-8 shadow-2xl">
              <p className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-4">Engineering Support</p>
              <h4 className="text-2xl font-bold text-white mb-6">Need a custom lab blueprint?</h4>
              <p className="text-slate-400 mb-8 font-medium">Our senior engineers provide consultation for setting up state-of-the-art Center of Excellence (CoE) units.</p>
              <button className="w-full py-4 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-emerald-400 transition-colors">
                REQUEST ARCHITECTURE PLAN
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Technical Support & Logistics" faqs={productFAQs} />

      <div className="py-20 text-center">
        <p className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">Trusted by 200+ Industries</p>
        <div className="flex justify-center gap-8 grayscale opacity-50">
          <Boxes size={40} />
          <Wrench size={40} />
          <Factory size={40} />
          <Server size={40} />
        </div>
      </div>
    </div>
  );
};

export default Products;