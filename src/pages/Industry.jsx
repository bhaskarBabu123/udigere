import { Link } from 'react-router-dom';
import {
  ArrowRight, Factory, Cog, Wifi, Brain, Target, Lightbulb,
  TestTube, GraduationCap, ShieldCheck, Clock, CheckCircle2, Zap
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Industry40 = () => {
  const keyTechnologies = [
    {
      title: "Industrial Internet of Things (IIoT)",
      desc: "Machine connectivity, real-time data acquisition, predictive maintenance, smart production analytics.",
      bg: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200" // IIoT sensors + dashboard
    },
    {
      title: "Cyber Physical Systems (CPS)",
      desc: "Integration of physical machinery with digital intelligence for intelligent, resilient manufacturing.",
      bg: "https://images-provider.frontiersin.org/api/ipx/w=1200&f=png/https://www.frontiersin.org/files/Articles/1155735/fmtec-03-1155735-HTML/image_m/fmtec-03-1155735-g001.jpg" // Digital twin / CPS visualization
    },
    {
      title: "AI-Driven Manufacturing Analytics",
      desc: "Predictive maintenance, process optimization, quality inspection, AI-powered decision support.",
      bg: "https://www.infinite-uptime.com/wp-content/uploads/2025/02/AI-Predictive-Maintenance-1200x673.jpg" // AI predictive maintenance
    }
  ];

  const industryFAQs = [
    {
      question: "What is Industry 5.0 and how does it differ from 4.0?",
      answer: "Industry 5.0 emphasizes human-machine collaboration, sustainability, and resilience alongside automation. We support cobots, AI-assisted decisions, and green manufacturing transitions."
    },
    {
      question: "What does your Industry 4.0 readiness assessment include?",
      answer: "Factory audit, maturity scoring, gap analysis, digital transformation roadmap, IIoT/CPS feasibility, and ROI projections."
    },
    {
      question: "Do you implement digital twins?",
      answer: "Yes — virtual models of production systems for simulation, real-time monitoring, optimization, and predictive scenarios."
    },
    {
      question: "What support do you provide post-implementation?",
      answer: "12–24 months warranty, remote diagnostics, AMC, operator training, and continuous improvement support."
    },
    {
      question: "Which sectors benefit most from your solutions?",
      answer: "Manufacturing, MSMEs, aerospace, automotive, heavy engineering — with focus on productivity, resilience, and sustainability."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://cdn.prod.website-files.com/5f46c318c843828732a6f8e2/67acbef538d4826c0601395a_manufacturing-dashboards.webp"
            alt="Smart factory dashboards and real-time analytics"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Industry 4.0 / 5.0 Solutions
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Smart Manufacturing & Digital Transformation
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Implementing IIoT, Cyber Physical Systems, AI analytics, digital twins, and human-centric Industry 5.0 frameworks for intelligent, sustainable, and resilient production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2"
            >
              Request Readiness Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-950/40 transition"
            >
              Get Custom Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">30-50%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Downtime Reduction</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">20-40%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Productivity Gain</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">15-25%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Energy Savings</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">12-24 mo</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Typical ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Core Technologies & Capabilities</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Enabling intelligent, connected, and human-centric manufacturing environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyTechnologies.map((tech, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-80 group"
                style={{
                  backgroundImage: `url(${tech.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-white mb-3">{tech.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry 5.0 Focus */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Industry 5.0 – Human-Centric & Sustainable Manufacturing</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-10 text-base">
            Beyond automation: We enable human-machine collaboration, cobots, AI-assisted decisions, hyper-personalized production, and green/resilient systems aligned with global sustainability goals.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <h3 className="text-xl font-semibold mb-3">Human-Machine Collaboration</h3>
              <p className="text-sm text-slate-600">Cobots, intelligent operator assistance, augmented interfaces</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <h3 className="text-xl font-semibold mb-3">Sustainable Production</h3>
              <p className="text-sm text-slate-600">Energy-efficient systems, waste reduction, circular manufacturing</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <h3 className="text-xl font-semibold mb-3">Resilient & Adaptive Factories</h3>
              <p className="text-sm text-slate-600">Real-time adaptability, predictive resilience, supply chain intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Implementation Approach</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Structured, phased transformation with clear milestones and measurable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: "01", title: "Readiness Assessment", desc: "Maturity audit, gap analysis, roadmap creation" },
              { phase: "02", title: "Infrastructure Setup", desc: "IIoT sensors, edge computing, network deployment" },
              { phase: "03", title: "Intelligence Integration", desc: "AI models, digital twins, analytics dashboards" },
              { phase: "04", title: "Go-Live & Optimization", desc: "Handover, training, continuous improvement support" }
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
                <div className="text-3xl font-bold text-indigo-600 mb-3">{step.phase}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Frequently Asked Questions" faqs={industryFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Begin Your Smart Manufacturing Journey
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Free readiness assessment, detailed roadmap, and proposal for your digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Request Free Assessment <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-950/40 transition"
            >
              Discuss Your Project
            </Link>
          </div>

          <p className="mt-10 text-sm text-slate-400">
            UDUGIRI Technologies • Bangalore, Karnataka
          </p>
        </div>
      </section>
    </div>
  );
};

export default Industry40;