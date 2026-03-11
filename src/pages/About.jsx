import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  Target, Eye, Users, Award, Cog, Wrench, Bot, Monitor, 
  Settings, Shield, Factory, CheckCircle2, Rocket, Zap 
} from 'lucide-react';

const About = () => {
  const expertise = [
    { icon: <Cog />, title: "Industrial Automation", desc: "Complete automation solutions for manufacturing processes." },
    { icon: <Bot />, title: "Robotics", desc: "Industrial robotics integration and precision programming." },
    { icon: <Wrench />, title: "Mechatronics", desc: "Mechanical, electrical, and software system integration." },
    { icon: <Monitor />, title: "PLC & SCADA", desc: "Supervisory control and data acquisition systems." },
    { icon: <Settings />, title: "Instrumentation", desc: "Precision industrial measurement and control systems." },
    { icon: <Factory />, title: "AI in Manufacturing", desc: "Artificial intelligence applications for production lines." },
    { icon: <Shield />, title: "Cyber Security", desc: "Protection of mission-critical industrial control systems." },
    { icon: <Rocket />, title: "Smart Factory", desc: "Intelligent manufacturing systems with digital twins." }
  ];

  const aboutFAQs = [
    {
      question: "What is your experience in Industry 4.0?",
      answer: "We have over 5 years of experience in Industry 4.0 implementations, having completed 100+ projects across aerospace, automotive, and heavy manufacturing sectors."
    },
    {
      question: "Do you provide post-implementation support?",
      answer: "Yes, we offer comprehensive AMC (Annual Maintenance) and 24/7 technical assistance to ensure your smart factory never stops."
    }
  ];

  return (
    <div className="bg-[#fafafa] text-slate-900 overflow-x-hidden">
      {/* --- HERO BANNER --- */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Industrial Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Engineering the <br />
              <span className="text-emerald-400">Next Industrial Age.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              We bridge the gap between legacy machinery and autonomous intelligence, 
              helping global industries transition to Industry 4.0 and 5.0 seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION (ASIMMETRIC) --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531266752426-aad472b7bdf4?auto=format&fit=crop&q=80&w=1000" 
                alt="Innovation" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-6 bg-emerald-500 p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
              <Zap className="w-10 h-10 text-slate-950 mb-4" />
              <p className="font-bold text-slate-950 text-lg italic">"Turning data into industrial power."</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-emerald-500"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">Our Purpose</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">To Lead, Not Just Follow.</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Our vision is to become the definitive global partner for smart transformation, 
                redefining how humans and machines collaborate in the Industry 5.0 era.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["MSME Empowerment", "Smart Automation", "R&D Excellence", "Future-Ready Skills"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE GRID --- */}
      <section className="py-24 bg-slate-950 text-white rounded-[4rem] mx-4 md:mx-8">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Technical Dominance</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Our cross-domain expertise ensures that your digital transformation is grounded in solid engineering.</p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-emerald-500 transition-all duration-500">
              <div className="text-emerald-400 group-hover:text-slate-950 mb-6 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-slate-950">{item.title}</h3>
              <p className="text-slate-400 text-sm font-medium group-hover:text-slate-950/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Our Journey</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            { year: "2018", title: "Inception", body: "Founded with a focus on IoT sensors for small-scale factories." },
            { year: "2020", title: "Automation Pivot", body: "Launched our proprietary SCADA integration platform." },
            { year: "2024", title: "Global Expansion", body: "Implemented our first AI-driven 'Dark Factory' in Bengaluru." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="text-2xl font-black text-emerald-500 pt-1">{item.year}</div>
              <div className="pb-8 border-b border-slate-100 flex-1">
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-600 font-medium">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Award />, title: "Excellence", body: "We don't settle for 'working'. We aim for 'optimized'." },
              { icon: <Users />, title: "Collaboration", body: "We treat your shop-floor challenges as our own engineering puzzles." },
              { icon: <Target />, title: "Innovation", body: "Continuously exploring the edge of robotics and mechatronics." }
            ].map((v, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="About Us - Deep Dive" faqs={aboutFAQs} />

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl bg-emerald-500 rounded-[3rem] p-12 text-center text-slate-950">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Ready to see our labs in action?</h2>
          <button className="bg-slate-950 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all">
            Schedule a Facility Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;