import { Link } from 'react-router-dom';
import {
  Factory, BarChart, Settings, Award, ShieldCheck, Target,
  CheckCircle2, Zap, Clock, MapPin, Users, TrendingUp, Lightbulb,
  Cpu, Network, Database, Leaf, Globe, ArrowRight
} from 'lucide-react';
import FAQ from '../components/FAQ';

const MSME = () => {
  const msmeServices = [
    {
      title: "MSME Digitization & Smart Production",
      description: "Smart production monitoring, manufacturing data analytics, Industrial IoT (IIoT) integration, ERP & digital documentation systems, predictive maintenance using sensors and analytics, cloud-based platforms, and real-time visibility for operational efficiency.",
      tags: ["IIoT", "Predictive Maintenance", "Digital Documentation"],
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Lean Manufacturing Implementation",
      description: "Diagnostic study of existing processes, Value Stream Mapping (VSM), identification of waste, implementation of 5S workplace organization, Kaizen continuous improvement, Total Productive Maintenance (TPM), Kanban systems, Just-in-Time (JIT) manufacturing, and performance monitoring dashboards.",
      tags: ["Lean", "5S", "Kaizen", "TPM"],
      bg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "ZED Certification Consulting",
      description: "ZED awareness workshops, readiness assessment, detailed gap analysis, implementation of ZED parameters, documentation development, process improvement, pre-certification audits, and full certification facilitation under the Zero Defect Zero Effect scheme to promote quality and sustainability.",
      tags: ["ZED", "Certification", "Quality Excellence"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Energy & Sustainability Optimization",
      description: "Energy audits, implementation of energy-efficient drive systems (VFDs), monitoring systems, waste reduction strategies, environmental compliance support, and adoption of sustainable manufacturing practices to lower consumption and impact.",
      tags: ["Energy Efficiency", "Sustainability", "Green Manufacturing"],
      bg: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const msmeFAQs = [
    {
      question: "What is the typical cost of digital transformation for an MSME?",
      answer: "Costs vary based on size, scope, and current readiness — typically ₹5 Lakh to ₹50 Lakh. We offer phased implementation to manage budgets and assist in accessing government subsidies under Digital India, MSME technology upgradation, ZED, and other schemes."
    },
    {
      question: "Can legacy machines be upgraded without full replacement?",
      answer: "Yes — we specialize in retrofitting legacy equipment with modern IIoT sensors, edge gateways, SCADA integration, digital platforms, and predictive maintenance systems to achieve smart factory capabilities at a fraction of replacement cost."
    },
    {
      question: "How long does ZED certification take?",
      answer: "Typically 6–12 months from initial gap analysis to final certification. We provide end-to-end support including workshops, documentation, audits, and compliance facilitation to accelerate the process."
    },
    {
      question: "What national schemes do you help MSMEs access?",
      answer: "We support ZED Certification Scheme, Lean Manufacturing subsidies, Make in India, Digital India, Atmanirbhar Bharat, MSME technology development programs, and other government initiatives — including documentation, eligibility guidance, and compliance facilitation."
    },
    {
      question: "What measurable benefits can MSMEs expect?",
      answer: "20–50% productivity increase, 15–30% cost reduction, improved product quality & reduced defects, enhanced global supply chain access, energy savings, environmental sustainability, and increased competitiveness in domestic & international markets."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
            alt="MSME Digital Transformation & Growth"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Empowering MSMEs
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Digitization, Lean & ZED Transformation for MSMEs
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Customized support for digital manufacturing adoption, Lean implementation, ZED certification, energy optimization, and global competitiveness — aligned with national initiatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2"
            >
              Free Gap Analysis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-950/40 transition"
            >
              Request ZED Support
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Teaser */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">20–50%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Productivity Increase</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">15–30%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Cost Reduction</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Global Access</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">via ZED/ISO</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">6–12 mo</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Typical Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core MSME Transformation Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Core MSME Transformation Services</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Tailored solutions to help MSMEs adopt digital tools, quality standards, and sustainable practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {msmeServices.map((service, i) => (
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

      {/* ZED Certification Process */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">ZED Certification Process</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Step-by-step support to achieve Zero Defect Zero Effect certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Awareness & Readiness", desc: "ZED workshops, initial assessment, current state evaluation" },
              { step: "02", title: "Gap Analysis", desc: "Detailed gap identification, compliance strategy planning" },
              { step: "03", title: "Implementation", desc: "ZED parameter execution, documentation, process improvement" },
              { step: "04", title: "Audit & Certification", desc: "Pre-certification audits, final facilitation & certification" }
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

      {/* Lean Manufacturing Framework */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Lean Manufacturing Framework</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Proven phases to eliminate waste and drive continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnostic Study", desc: "Process audit, productivity gap identification" },
              { step: "02", title: "Strategy Development", desc: "Value Stream Mapping, waste identification, roadmap" },
              { step: "03", title: "Tool Implementation", desc: "5S, Kaizen, TPM, Kanban, JIT execution" },
              { step: "04", title: "Monitoring & Improvement", desc: "Performance dashboards, continuous Kaizen culture" }
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
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Key Benefits & Impact</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Measurable outcomes from digitization, Lean, ZED & quality transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Productivity & Efficiency", desc: "20–50% increase through digital monitoring, process optimization & predictive maintenance", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
              { title: "Cost & Waste Reduction", desc: "15–30% savings via energy-efficient systems, Lean waste elimination & sustainable practices", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" },
              { title: "Global Competitiveness", desc: "ZED/ISO certification, quality improvement & access to international supply chains", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" }
            ].map((benefit, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden border border-slate-200 h-64 group">
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-slate-200 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Initiatives Support */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Support for National Initiatives</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Helping MSMEs access government schemes and funding programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
              <Globe className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Make in India</h3>
              <p className="text-sm text-slate-600">Promoting indigenous technology adoption & manufacturing excellence</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
              <Zap className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Digital India</h3>
              <p className="text-sm text-slate-600">Digitization, ERP, IIoT & cloud adoption for modern operations</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
              <Users className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Atmanirbhar Bharat</h3>
              <p className="text-sm text-slate-600">Self-reliance through quality, certification & global competitiveness</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FAQ title="MSME Transformation FAQs" faqs={msmeFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Transform Your MSME?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Free consultation, gap analysis, customized roadmap, subsidy guidance, and detailed proposal for digitization, Lean, ZED or quality transformation projects.
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
              Request Detailed Proposal
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

export default MSME;