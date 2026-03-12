import { Link } from 'react-router-dom';
import {
  ArrowRight, Factory, BarChart, Settings, Award, ShieldCheck, Target,
  CheckCircle2, Zap, Clock, MapPin, Users, TrendingUp, Lightbulb
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Consultancy = () => {
  const coreServices = [
    {
      title: "MSME Digitization & Transformation",
      description: "End-to-end support for digital manufacturing adoption — smart production monitoring, IIoT integration, ERP & digital documentation, predictive maintenance, cloud platforms, and Industry 4.0 readiness to enhance productivity and global competitiveness.",
      tags: ["IIoT", "Digital India", "Smart Factory"],
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Lean Manufacturing Consulting",
      description: "Structured implementation of Value Stream Mapping, 5S workplace organization, Kaizen continuous improvement, Total Productive Maintenance (TPM), Kanban systems, Just-in-Time (JIT), and waste reduction strategies for operational excellence.",
      tags: ["5S", "Kaizen", "TPM"],
      bg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "ZED Certification Support",
      description: "Complete assistance including awareness workshops, readiness assessment, gap analysis, ZED parameter implementation, documentation development, pre-certification audits, and certification facilitation under Zero Defect Zero Effect scheme.",
      tags: ["ZED", "MSME", "Quality Excellence"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "ISO & Quality Management Systems",
      description: "Gap analysis, documentation, internal auditor training, implementation support, and certification facilitation for ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Occupational Health & Safety), and other standards.",
      tags: ["ISO 9001", "ISO 14001", "ISO 45001"],
      bg: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const consultancyFAQs = [
    {
      question: "What is the typical timeline for ZED / ISO certification?",
      answer: "6–12 months from gap analysis to certification, depending on current readiness, organization size, and implementation scope. We provide phased support with regular milestones."
    },
    {
      question: "Do you support legacy system integration with Industry 4.0?",
      answer: "Yes — we specialize in retrofitting legacy equipment with modern IIoT sensors, SCADA integration, edge computing, and digital platforms without full replacement."
    },
    {
      question: "What national schemes do you help MSMEs access?",
      answer: "Full support for ZED Certification, Lean Manufacturing subsidies, Make in India, Digital India, Atmanirbhar Bharat, and MSME technology upgradation programs including documentation & compliance facilitation."
    },
    {
      question: "What post-consultancy support is provided?",
      answer: "12–24 months handholding, remote monitoring, annual audits, continuous improvement workshops, and AMC options to sustain gains."
    },
    {
      question: "How do you measure success in consulting projects?",
      answer: "Through KPIs like productivity increase (20–50%), downtime reduction, cost savings, quality improvement, energy efficiency, and certification achievement."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner - Smaller & restrained */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165833767-0266b196773f?auto=format&fit=crop&q=80&w=2070"
            alt="Industrial consulting & transformation"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            MSME & Industrial Consulting
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Lean, Digital & Quality Transformation
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Supporting MSMEs and industries with Lean Manufacturing, ZED certification, digitization, ISO compliance, and Industry 4.0/5.0 strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-950/40 transition"
            >
              Request Gap Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">20–50%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Productivity Gain</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">6–12 mo</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Certification Timeline</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">100+</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">MSMEs Supported</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">National Schemes</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Aligned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Consulting Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Core Consulting Services</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Strategic transformation programs tailored for MSMEs and manufacturing industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-80 group"
                style={{
                  backgroundImage: `url(${service.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, t) => (
                      <span key={t} className="px-2 py-1 bg-indigo-600/70 text-white text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Methodology */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Consulting Methodology</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Structured, phased approach delivering measurable productivity & compliance outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnostic Study", desc: "Gap analysis, readiness assessment, current state audit" },
              { step: "02", title: "Strategy & Roadmap", desc: "Custom transformation plan with KPIs & milestones" },
              { step: "03", title: "Implementation", desc: "Hands-on execution, training, system integration" },
              { step: "04", title: "Certification & Sustain", desc: "Audits, certification support, continuous improvement" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Measurable Impact & Benefits</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Proven outcomes from Lean, digitization, ZED & ISO consulting projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">20–50% Productivity Gain</h3>
              <p className="text-sm text-slate-600">Through lean tools, digital monitoring, and process optimization</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <Award className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Global Market Access</h3>
              <p className="text-sm text-slate-600">ZED, ISO certification, and Industry 4.0 readiness for exports</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Sustainability & Compliance</h3>
              <p className="text-sm text-slate-600">Reduced waste, energy efficiency, and regulatory alignment</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Consulting & Certification FAQs" faqs={consultancyFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready for Your Transformation Journey?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Free consultation, gap analysis, customized roadmap, and proposal for Lean, ZED, digitization or ISO projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-950/40 transition"
            >
              Request Gap Analysis
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

export default Consultancy;