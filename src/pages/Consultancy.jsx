import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  Factory, Target, FileCheck, Award, Shield, BarChart, Users, Settings, 
  ArrowRight, CheckCircle2, Zap, Search, ClipboardList, TrendingUp 
} from 'lucide-react';

const Consultancy = () => {
  const industrialServices = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Smart Manufacturing",
      description: "Comprehensive assessment and implementation of Industry 4.0 technologies including IoT integration and digital transformation strategies.",
      tags: ["IoT", "Industry 4.0", "Automation"]
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Process Optimization",
      description: "Lean manufacturing, workflow analysis, and bottleneck identification to maximize productivity and eliminate waste.",
      tags: ["Lean", "Six Sigma", "ROI Focus"]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Retrofitting Solutions",
      description: "Upgrading legacy equipment with modern sensors and control systems to achieve smart capabilities without full replacement.",
      tags: ["Cost Saving", "Legacy Sync", "Upgrades"]
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Lean Implementation",
      description: "Value stream mapping and continuous improvement methodologies to optimize your shop floor manufacturing processes.",
      tags: ["5S", "Kaizen", "Workflow"]
    }
  ];

  const qualityServices = [
    {
      icon: <Award />,
      title: "ISO 9001:2015",
      description: "Quality Management Systems (QMS) implementation and certification support."
    },
    {
      icon: <Shield />,
      title: "ISO 14001",
      description: "Environmental management systems focused on sustainability and compliance."
    },
    {
      icon: <Users />,
      title: "ISO 45001",
      description: "Occupational Health & Safety management to protect your most valuable assets."
    }
  ];

  const consultancyFAQs = [
    {
      question: "What is the typical timeline for ISO certification?",
      answer: "Depending on organization size, implementation usually takes 6-12 months from the initial gap analysis to the final certification audit."
    },
    {
      question: "Can you help with ZED Certification?",
      answer: "Yes, we provide end-to-end support for Zero Defect Zero Effect (ZED) assessment, implementation planning, and certification assistance."
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- STRATEGIC HERO --- */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165833767-0266b196773f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-emerald-900/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Global Standards. Local Excellence.</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Industrial Consulting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 italic">Redefined.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-10">
              Transforming manufacturing units into world-class facilities through smart optimization, ISO compliance, and sustainable engineering strategies.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all transform hover:-translate-y-1">
              CONSULT AN EXPERT <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIAL SOLUTIONS GRID --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Manufacturing Transformation</h2>
            <p className="text-slate-500 font-medium">Strategic consulting to modernize your production floor and boost bottom-line ROI.</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10 mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industrialServices.map((service, i) => (
            <div key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-emerald-200 transition-all duration-500">
              <div className="mb-8 text-emerald-600 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, t) => (
                  <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ISO & QUALITY MANAGEMENT (VISUAL BLOCK) --- */}
      <section className="py-24 bg-slate-950 text-white rounded-[3rem] md:rounded-[5rem] mx-4 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter">Global Compliance <br />& Quality.</h2>
              <p className="text-slate-400 text-lg mb-12">We simplify the path to international certifications. From ISO to ZED, we handle the documentation so you can handle the growth.</p>
              
              <div className="space-y-6">
                {qualityServices.map((q, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-colors group">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      {q.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{q.title}</h4>
                      <p className="text-sm text-slate-500">{q.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-[100px]"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Quality Management" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONSULTANCY PROCESS (STEP-BY-STEP) --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Our Methodology</h2>
          <p className="text-slate-500 font-medium">A structured 4-stage approach to ensure zero-defect delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Search />, step: "01", title: "Assessment", desc: "Gap analysis and current infrastructure audit." },
            { icon: <ClipboardList />, step: "02", title: "Planning", desc: "Custom roadmap and KPI setting for your facility." },
            { icon: <Settings />, step: "03", title: "Execution", desc: "Hands-on implementation and system integration." },
            { icon: <TrendingUp />, step: "04", title: "Optimization", desc: "Ongoing support and recertification cycles." }
          ].map((item, i) => (
            <div key={i} className="relative group text-center md:text-left">
              <div className="mb-6 inline-flex p-5 bg-emerald-50 text-emerald-600 rounded-[2rem] group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div className="text-4xl font-black text-slate-100 mb-2">{item.step}</div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BENEFITS BENTO --- */}
      <section className="py-24 bg-slate-50 rounded-[3rem] md:rounded-[5rem] mx-4 mb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100">
              <h2 className="text-3xl md:text-4xl font-black mb-8">Measurable Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">15-40% ROI</h5>
                    <p className="text-sm text-slate-500">Typical annual return on process optimization projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Zero Compliance Risk</h5>
                    <p className="text-sm text-slate-500">Full assurance for ISO audits and regulatory checks.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-500 p-10 md:p-16 rounded-[3rem] flex flex-col justify-between">
              <TrendingUp className="text-slate-950/20" size={100} />
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 leading-tight">Scale your <br />production <br />sustainably.</h3>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Consultancy & ISO FAQs" faqs={consultancyFAQs} />

      {/* --- FINAL CTA --- */}
      <div className="py-32 text-center container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Ready for Excellence?</h2>
          <p className="text-slate-500 text-lg mb-10 font-medium">Book a free 30-minute infrastructure assessment with our lead consultant today.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-12 py-5 bg-slate-950 text-white rounded-2xl font-black hover:shadow-2xl transition-all">
              BOOK ASSESSMENT
            </button>
            <button className="w-full md:w-auto px-12 py-5 border-2 border-slate-200 text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all">
              VIEW CASE STUDIES
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Consultancy;