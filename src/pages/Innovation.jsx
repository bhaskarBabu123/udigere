import React from 'react';
import { 
  Lightbulb, FileText, Briefcase, Users, Rocket, Award, 
  ArrowRight, CheckCircle2, Zap, Search, Microscope, Shield, Globe 
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Innovation = () => {
  const innovationServices = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation Development",
      description: "End-to-end innovation support from ideation to commercialization including market research and product development.",
      tags: ["Ideation", "Market Research"]
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Idea to Prototype",
      description: "Complete prototyping services including concept design, 3D modeling, rapid prototyping, and validation.",
      tags: ["3D Modeling", "Rapid Prototyping"]
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Patent Services",
      description: "Comprehensive IP services including patent search, application drafting, and portfolio management.",
      tags: ["Patent Filing", "Legal IP"]
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Trademark Registration",
      description: "Complete trademark services including search, registration, and brand protection strategies.",
      tags: ["Branding", "Compliance"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Startup & MSME Support",
      description: "Business development support including business planning, funding assistance, and growth strategies.",
      tags: ["Business Growth", "Funding"]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Incubation Services",
      description: "Complete ecosystem including mentorship, workspace, and access to funding for innovative startups.",
      tags: ["Incubation", "Mentorship"]
    }
  ];

  const innovationFAQs = [
    {
      question: "How long does the patent application process take?",
      answer: "In India, it typically takes 2-4 years from filing to grant. We provide expedited filing services and regular status updates."
    },
    {
      question: "Do you provide funding for innovative projects?",
      answer: "We assist in connecting innovators with funding sources like MSME schemes, angel investors, and venture capital firms."
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- ELITE DARK BANNER --- */}
      <section className="relative h-[60vh] flex items-center bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Innovation Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Zap className="w-4 h-4 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Future-Proof Your Ideas</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
              Innovation & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 italic">IPR Support.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Fostering a culture of creativity through intellectual property protection and a complete ecosystem for technological commercialization.
            </p>
          </div>
        </div>
      </section>

      {/* --- FULL-WIDTH SERVICES SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Core Services</h2>
            <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovationServices.map((service, i) => (
            <div key={i} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-emerald-200 transition-all duration-500">
              <div className="mb-8 text-emerald-600 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{service.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, t) => (
                  <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-emerald-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INNOVATION PIPELINE (DARK SECTION) --- */}
      <section className="py-24 bg-slate-950 text-white rounded-[3rem] md:rounded-[5rem] mx-4 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter uppercase">The Innovation Pipeline</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">From a raw spark of an idea to a globally protected, market-ready product.</p>
          </div>
          
          

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-center relative">
            {[
              { icon: <Search />, step: "01", title: "RESEARCH" },
              { icon: <Microscope />, step: "02", title: "DESIGN" },
              { icon: <Rocket />, step: "03", title: "PROTOTYPE" },
              { icon: <Shield />, step: "04", title: "PROTECT" },
              { icon: <Globe />, step: "05", title: "LAUNCH" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="text-xs font-black text-emerald-500 mb-2">{item.step}</div>
                <h4 className="text-lg font-bold tracking-widest">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INCUBATION STATS SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Incubation <br />& Success.</h2>
            <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
              Our incubation center isn't just a space—it's a launchpad. We provide the mentorship, funding access, and technical resources that take startups from zero to ₹Cr valuations.
            </p>
            <div className="space-y-4">
              {['Modern Co-working Infrastructure', 'Access to Technical Labs', 'Direct Mentorship Programs', 'Investor Network Access'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700">
                  <CheckCircle2 className="text-emerald-500" /> {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "50+", label: "STARTUPS", color: "text-blue-600" },
              { val: "25+", label: "PATENTS", color: "text-emerald-600" },
              { val: "₹5Cr+", label: "FUNDING", color: "text-purple-600" },
              { val: "70%", label: "SUCCESS", color: "text-red-600" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow text-center">
                <div className={`text-3xl md:text-4xl font-black mb-2 ${stat.color}`}>{stat.val}</div>
                <div className="text-[10px] font-black text-slate-400 tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Innovation & IPR FAQs" faqs={innovationFAQs} />

      {/* --- FINAL CTA --- */}
      <div className="py-24 text-center container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-950 p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent"></div>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-8 relative z-10">Protect Your <br />Intellectual Assets.</h2>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-12 py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 relative z-10">
            TALK TO AN IPR EXPERT
          </button>
        </div>
      </div>

    </div>
  );
};

export default Innovation;