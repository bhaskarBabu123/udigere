import { Link } from 'react-router-dom';
import {
  ArrowRight, Cog, Factory, Wrench, ShieldCheck, TestTube, GraduationCap,
  Award, MapPin, Clock, CheckCircle2
} from 'lucide-react';
import FAQ from '../components/FAQ';

const About = () => {
  const stats = [
    { label: "Years of Combined Expertise", value: "20+" },
    { label: "Projects & Consultancies", value: "150+" },
    { label: "Industries & MSMEs Served", value: "100+" },
    { label: "Professionals & Students Trained", value: "5000+" }
  ];

  const coreExpertise = [
    {
      title: "Industrial Automation",
      desc: "PLC, SCADA, HMI, VFD, Drives, Instrumentation & Robotics Integration",
      bg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Industry 4.0 / 5.0 Transformation",
      desc: "IIoT, Cyber Physical Systems, Smart Manufacturing & Digital Twins",
      bg: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "MSME Digitization & ZED Consulting",
      desc: "Lean Manufacturing, Zero Defect Zero Effect, Digital Tools & Productivity Improvement",
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Quality Systems & ISO Consulting",
      desc: "ISO 9001, 14001, 45001 Implementation, Auditing & Certification Support",
      bg: "https://images.unsplash.com/photo-1581092162387-4c423ca9c7d5?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Testing & Calibration Services",
      desc: "NABL Accredited Calibration & Environmental Testing (Vibration, Shock, Thermal)",
      bg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Advanced Skill Innovation Labs",
      desc: "Hands-on training in Automation, Robotics, IIoT, CNC, AI for ITI to Engineering",
      bg: "https://images.unsplash.com/photo-1581093458793-5e1f0e8d3f3d?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const aboutFAQs = [
    {
      question: "What makes UDUGIRI Technologies unique?",
      answer: "We combine industrial automation, Industry 4.0/5.0 consulting, NABL-aligned testing, MSME transformation support, and advanced skill innovation labs under one platform."
    },
    {
      question: "Who leads UDUGIRI Technologies?",
      answer: "Dr. Shivanna D M — experienced professional with deep expertise in industrial automation, lean manufacturing, quality systems, MSME development, Industry 4.0 technologies, and advanced skill development."
    },
    {
      question: "What is your focus for MSMEs?",
      answer: "Specialized consulting in Lean Manufacturing, ZED Certification, digitization, ERP integration, IIoT adoption, productivity & quality improvement — aligned with Make in India, Digital India, Atmanirbhar Bharat."
    },
    {
      question: "Do you provide testing and calibration services?",
      answer: "Yes — NABL-accredited calibration for electrical, mechanical, temperature, pressure & flow instruments, plus planned environmental testing facilities for aerospace, automotive & defense (vibration, shock, thermal, humidity, corrosion)."
    },
    {
      question: "What skill development programs do you offer?",
      answer: "Advanced Skill Innovation Labs with hands-on training in PLC, SCADA, VFD, IIoT, Robotics, AI, CNC Simulation, Cyber Physical Systems — for ITI, Diploma, Engineering students, faculty, and industry professionals."
    },
    {
      question: "Where is UDUGIRI Technologies located?",
      answer: "#109/2, 4th Cross, Ashwathnagar, RMV 2nd Stage, Sanjayanagar, Bangalore – 560094, Karnataka, India."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
            alt="Engineering & Technology Excellence"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Bangalore-based Technology & Skill Leader
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Building India's Future-Ready Industry & Workforce
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            UDUGIRI Technologies provides industrial automation, smart manufacturing consulting, MSME transformation, precision testing & calibration, and advanced skill development programs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
                <div className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-5">About UDUGIRI Technologies</h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                An emerging engineering consulting, industrial technology solutions, testing services, and advanced skill development organization headquartered in Bangalore.
              </p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                We bridge the gap between industry requirements and skilled workforce readiness through expertise in Industrial Automation, Industry 4.0/5.0, Cyber Physical Systems, Lean Manufacturing, Quality Management Systems, and Emerging Technologies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Support for manufacturing, MSMEs, aerospace, automotive & academic institutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Multidisciplinary team from industry, academia, R&D & consulting</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition inline-flex items-center gap-2"
              >
                Connect with Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200"
                alt="Engineering team & innovation"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Core Technical Expertise</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Multidisciplinary capabilities powering modern manufacturing and skill development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreExpertise.map((item, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-72 group"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-5">Leadership & Vision</h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Guided by <strong>Dr. Shivanna D M</strong> — seasoned expert with extensive experience in industry, academia, research, consultancy, and entrepreneurship.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Vision: To become a leading national technology partner in industrial automation, smart manufacturing, quality systems, and advanced engineering skill development — contributing to India's manufacturing ecosystem transformation.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Leadership & innovation team"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-base">
              Dedicated to driving industrial growth, MSME competitiveness, quality excellence, and workforce readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Enhancing productivity through automation & digital technologies",
              "Supporting MSMEs in achieving global manufacturing standards",
              "Delivering high-quality engineering consulting & testing services",
              "Creating industry-ready professionals through advanced training",
              "Promoting innovation via strong industry-academia collaboration",
              "Building sustainable & future-ready manufacturing ecosystems"
            ].map((point, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-indigo-400 mb-3" />
                <p className="text-slate-200 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Frequently Asked Questions" faqs={aboutFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Partner with UDUGIRI Technologies?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-base">
            Contact us for automation solutions, skill labs, training programs, testing services, or consulting projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/industrial-solutions"
              className="border-2 border-indigo-600 text-indigo-700 px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-50 transition"
            >
              Explore Our Expertise
            </Link>
          </div>

          <div className="mt-10 text-sm text-slate-500">
            UDUGIRI Technologies • #109/2, 4th Cross, Ashwathnagar, RMV 2nd Stage, Sanjayanagar, Bangalore – 560094
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;