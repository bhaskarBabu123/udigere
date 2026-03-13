import { Link } from 'react-router-dom';
import {
  ArrowRight, Factory, GraduationCap, ShieldCheck, TestTube, CheckCircle2, Zap
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Products = () => {
 const industrialProducts = [
    {
      title: "Industrial Automation Systems",
      description: "End-to-end PLC-based automation, SCADA/HMI integration, VFD & drives, industrial instrumentation, robotics integration, and control panel design for enhanced manufacturing efficiency, precision, and real-time control.",
      tech: ["PLC Programming", "SCADA Systems", "HMI Development", "VFD & Motion Control", "Robotics Integration"],
      image: "https://www.unicornglobalautomations.com/wp-content/uploads/2025/01/Best-Practices-of-PLC-Wiring.webp"
    },
    {
      title: "PLC, SCADA & IIoT Solutions",
      description: "PLC system design & programming, SCADA deployment for real-time monitoring & data acquisition, IIoT connectivity for smart production analytics, predictive maintenance, and machine monitoring in smart factories.",
      tech: ["PLC Architecture", "SCADA Dashboards", "IIoT Platforms", "Predictive Maintenance", "Industrial Data Analytics"],
      image: "https://www.automationreadypanels.com/wp-content/uploads/2024/04/allen_bradley_plc_Scada-1024x683.jpg"
    },
    {
      title: "Industry 4.0 / 5.0 & Cyber Physical Systems",
      description: "Smart factory implementation, IIoT deployment, digital twins, AI-driven analytics, human-machine collaboration, cobots, and CPS integration for intelligent, sustainable, and resilient manufacturing.",
      tech: ["IIoT & Edge Computing", "Digital Twins", "AI in Manufacturing", "Smart Sensors", "CPS Platforms"],
      image: "https://cdn.shopify.com/s/files/1/0369/9536/7051/files/7a7cb8a6-b9e8-4e50-9118-b587e3b4db43.png?v=1747296546"
    }
  ];

  const skillLabProducts = [
    {
      title: "Industrial Automation & PLC-SCADA Training Lab",
      description: "Modular hands-on stations with PLC programming, SCADA systems, industrial sensors, actuators, control panels, and process automation for practical skill development in core industrial technologies.",
      level: "ITI / Diploma / Engineering",
      image: "https://winintelligence.org/Images/About%20WIN/OCC/OCCplc.jpg?t=202408221514080"
    },
    {
      title: "Robotics & AI Lab Setup",
      description: "Industrial robotic arms, collaborative cobots, pick-and-place cells, machine vision, and AI programming for advanced automation, robotics integration, and intelligent manufacturing training.",
      level: "Advanced / Research Grade",
      image: "https://winintelligence.org/Images/About%20WIN/OCC/OCCplcrobotics.jpg?t=202410140907120"
    },
    {
      title: "IIoT & Smart Manufacturing Innovation Lab",
      description: "Complete setup with IIoT connectivity, smart sensors, real-time data dashboards, cyber-physical systems, CNC simulation, and smart factory platforms for Industry 4.0/5.0 readiness and digital transformation training.",
      level: "University / Professional Certification",
      image: "https://s3.amazonaws.com/a-us.storyblok.com/f/1022730/9cab94522e/iiot-umh-dashboard.png"
    }
  ];

  const testingProducts = [
    {
      title: "NABL Accredited Calibration Services",
      description: "High-precision calibration for electrical instruments, mechanical measurements, pressure gauges, temperature sensors, flow meters, and dimensional tools ensuring accuracy, traceability, and compliance.",
      image: "https://www.rootsmetrology.com/wp-content/uploads/2025/06/manufacturing-industry.png"
    },
    {
      title: "Aerospace & Automotive Environmental Testing",
      description: "State-of-the-art environmental test rigs for vibration, shock, thermal cycling, humidity, corrosion, dust exposure, and MIL/ISO/ASTM-compliant validation for aerospace, defense, and automotive components.",
      image: "https://russells-tech.com/wp-content/uploads/GBV-Three-Quarter-Left.jpg"
    }
  ];

  const productFAQs = [
    {
      question: "Do you provide installation & commissioning services?",
      answer: "Yes — complete turnkey installation, commissioning, operator training, faculty development, and handover included for all automation systems, skill labs, and testing facilities."
    },
    {
      question: "What customization is possible?",
      answer: "Full customization available: control panel designs, HMI graphics, sensor/IIoT configurations, lab layouts, curriculum modules, protocol integrations (Modbus, Profinet, EtherCAT), and ZED/Lean alignment."
    },
    {
      question: "Are your testing facilities NABL accredited?",
      answer: "Calibration services are designed to meet NABL accreditation standards. Environmental test rigs comply with MIL, ISO, ASTM, and automotive/aerospace norms for product certification and compliance."
    },
    {
      question: "What is the typical lead time for skill lab setups?",
      answer: "4–8 weeks for standard training kits (PLC-SCADA, instrumentation); 10–16 weeks for full turnkey Skill Innovation Labs with robotics, IIoT, CNC simulation, and CPS integration."
    },
    {
      question: "Do you support legacy system upgrades?",
      answer: "Yes — seamless integration of legacy PLCs, analog instrumentation, and drives with modern IIoT, SCADA, Industry 4.0/5.0 platforms, and smart manufacturing solutions."
    },
    {
      question: "What warranty & support do you offer?",
      answer: "12–24 months comprehensive hardware warranty + lifetime technical support, remote diagnostics, annual maintenance contracts, and ongoing training for labs and industrial systems."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero - Clean, smaller text, solid overlay, decent purple accent */}
      <section className="relative py-16 md:py-24 px-6 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2070"
            alt="Industrial background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/85"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-slate-900/40 border border-slate-700/40 rounded-full text-slate-300 text-xs font-medium uppercase tracking-wide mb-6">
            Industrial & Training Solutions
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Automation Systems, Skill Labs & Testing Services
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            PLC-SCADA, IIoT, robotics labs, calibration and environmental testing solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-slate-700 text-white px-7 py-3 rounded-lg font-medium text-sm hover:bg-slate-800 transition inline-flex items-center gap-2"
            >
              Request Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="border border-slate-600 text-slate-300 px-7 py-3 rounded-lg font-medium text-sm hover:bg-slate-950/40 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial Products */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Industrial Automation Solutions</h2>
            <div className="w-16 h-0.5 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              Complete systems for manufacturing efficiency and smart factory integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialProducts.map((product, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-80 group"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent/30"></div>
                <div className="relative p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tech.slice(0, 3).map((tech, j) => (
                      <span key={j} className="px-2.5 py-1 bg-slate-900/60 text-slate-200 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Labs */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Skill Development Labs</h2>
            <div className="w-16 h-0.5 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              Turnkey training setups for ITI, diploma, engineering and university programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillLabProducts.map((lab, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-400/50 transition">
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-slate-700" />
                  </div>
                  <span className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded">
                    {lab.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{lab.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{lab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Calibration */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Testing & Calibration</h2>
            <div className="w-16 h-0.5 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              NABL-aligned calibration and environmental testing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testingProducts.map((test, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-72 group"
                style={{
                  backgroundImage: `url(${test.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/65"></div>
                <div className="relative p-6 h-full flex flex-col justify-center items-center text-center">
                  <TestTube className="w-12 h-12 text-slate-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{test.title}</h3>
                  <p className="text-slate-200 text-sm max-w-sm">{test.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Standards & Compliance</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base">
              Designed to meet industrial and educational regulatory requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-slate-400" /> Industrial Standards
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["IP65/IP66", "IEC 61131-3", "NABL Traceable", "MIL/ISO/ASTM", "ZED & Lean"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-slate-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-slate-400" /> Educational Alignment
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["AICTE/NBA", "NEP 2020", "Skill India", "Industry 4.0/5.0", "Hands-on"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-slate-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Summary - simple, no hype */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Typical Project Scope</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-300 mb-2">₹10–80 Lakh</div>
              <p className="text-slate-300 text-sm">Investment range</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-300 mb-2">Thousands</div>
              <p className="text-slate-300 text-sm">Trainees per year</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-300 mb-2">12–24 Months</div>
              <p className="text-slate-300 text-sm">Typical ROI period</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Common Questions" faqs={productFAQs} />
        </div>
      </section>

      {/* Final CTA - small & decent */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Proceed?</h2>
          <p className="text-slate-300 text-base mb-8 max-w-2xl mx-auto">
            Contact us for detailed proposal, pricing or site discussion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-slate-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-slate-800 transition inline-flex items-center gap-2"
            >
              Get in Touch <Zap className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="border border-slate-600 text-slate-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-slate-950/40 transition"
            >
              Company Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;