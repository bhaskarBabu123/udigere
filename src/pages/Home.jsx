import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Globe, GraduationCap, TrendingUp, 
  Factory, Cog, Lightbulb, Smartphone, PlayCircle,
  ShieldCheck, Zap, BarChart, CheckCircle2 
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Home = () => {
  const stats = [
    { label: "Projects Delivered", value: "200+", icon: TrendingUp },
    { label: "Industries Served", value: "15+", icon: Globe },
    { label: "SMEs Transformed", value: "50+", icon: Users },
    { label: "Team Certified", value: "5000+", icon: GraduationCap },
  ];

  const coreServices = [
    {
      icon: Factory,
      title: "Smart Factory",
      image: "https://images.unsplash.com/photo-1565515152650-612b3e2441af?auto=format&fit=crop&q=80&w=800",
      description: "Complete digitization with real-time monitoring and automation control."
    },
    {
      icon: Cog,
      title: "Retrofitting", 
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      description: "Upgrade legacy equipment with IIoT sensors and modern controllers."
    },
    {
      icon: Lightbulb,
      title: "AI Analytics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      description: "Machine learning models for maintenance and production optimization."
    },
    {
      icon: Smartphone,
      title: "Dashboards",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description: "Real-time production monitoring through secure mobile interfaces."
    }
  ];

  const workflowSteps = [
    { number: "01", title: "Audit", desc: "Assessment of current digital maturity." },
    { number: "02", title: "Roadmap", desc: "Custom strategy with ROI milestones." },
    { number: "03", title: "Deployment", desc: "Precision hardware and software integration." },
    { number: "04", title: "Scaling", desc: "Workforce upskilling and line expansion." }
  ];

  const homeFAQs = [
    {
      question: "What is Industry 4.0 and how can it benefit my business?",
      answer: "Industry 4.0 refers to the integration of automation, IoT, AI, and data analytics in manufacturing. It benefits businesses through increased efficiency, reduced costs, predictive maintenance, better quality control, and real-time decision making."
    },
    {
      question: "Do you provide training along with your solutions?",
      answer: "Yes, we provide comprehensive training programs for your team as part of our implementation process. We also offer separate certification courses in various Industry 4.0 technologies."
    },
    {
      question: "Can you help retrofit our existing manufacturing equipment?",
      answer: "Absolutely! We specialize in retrofitting legacy machines with modern IoT sensors, control systems, and automation technologies to make them Industry 4.0 ready without complete replacement."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve manufacturing, aerospace, automotive, pharmaceutical industries, educational institutions, MSMEs, and startups across various sectors looking to implement Industry 4.0 solutions."
    },
    {
      question: "How long does a typical Industry 4.0 implementation take?",
      answer: "Implementation timelines vary based on project scope and complexity. Small-scale implementations can take 2-3 months, while complete smart factory transformations may take 6-12 months including planning, installation, testing, and training."
    }
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-900 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-950 px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
            alt="Industry background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400">Industry 4.0 Leader</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Intelligence that <span className="text-emerald-400 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">moves industry.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Empowering manufacturers with the architectural backbone for modern smart production through AI, IoT, and high-precision automation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-full font-bold text-base hover:bg-emerald-400 transition-all flex items-center">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <button className="flex items-center gap-2 text-white font-bold text-base group">
                <PlayCircle className="w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>Watch Process</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative z-20 -mt-10 px-4">
        <div className="container mx-auto max-w-6xl bg-white p-6 sm:p-10 shadow-xl border border-slate-100 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left border-r last:border-0 border-slate-100 pr-2">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Expertise</h2>
            <div className="w-12 h-1 bg-emerald-500"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, i) => (
              <div key={i} className="bg-white overflow-hidden rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="h-40 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-slate-900 text-white rounded-[2rem] mx-4">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-black text-emerald-500/20 absolute -top-4 -left-2">{step.number}</div>
                <h3 className="text-lg font-bold mb-2 relative z-10">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-emerald-500 p-8 rounded-3xl text-slate-950">
              <p className="text-lg font-bold italic mb-6">"ROI was visible within the first quarter. Their retrofitting solutions saved us millions in capital expenditure."</p>
              <div className="font-bold text-sm uppercase tracking-tighter">— Rajesh K, AutoCorp</div>
            </div>
            <div className="p-4">
              <h2 className="text-3xl font-bold mb-4">Trusted Partner</h2>
              <p className="text-slate-600">We don't just provide software; we provide industrial-grade reliability for 200+ manufacturers across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <div className="py-12">
        <FAQ title="Expert Insights" faqs={homeFAQs} />
      </div>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl bg-slate-950 rounded-[2rem] p-8 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Ready to upgrade?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Get a technical audit from our engineering team today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-full font-bold text-base hover:bg-emerald-400">
              Request Audit
            </Link>
            <Link to="/projects" className="bg-white/10 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-white/20">
              Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;