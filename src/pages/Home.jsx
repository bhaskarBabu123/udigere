import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Award, Target, Clock } from 'lucide-react';
import FAQ from '../components/FAQ';

const Home = () => {
  const heroTagline = "Empowering Industries & Institutions through Automation, Innovation and Advanced Skill Development";

  const stats = [
    { label: "Projects Delivered", value: "200+" },
    { label: "Industries Served", value: "15+" },
    { label: "MSMEs Supported", value: "50+" },
    { label: "Professionals Trained", value: "5000+" },
  ];

  const homeFAQs = [
    {
      question: "What services does UDUGIRI Technologies provide?",
      answer: "Industrial Automation, Industry 4.0/5.0 consulting, MSME digitization & ZED support, NABL calibration & environmental testing, advanced skill labs, and applied research programs."
    },
    {
      question: "Who benefits from your skill development programs?",
      answer: "ITI, Polytechnic, Engineering students, university scholars, faculty, industry engineers and MSME workforce through hands-on certification, internships, FDPs and corporate training."
    },
    {
      question: "Do you support MSME transformation?",
      answer: "Yes — Lean Manufacturing, ZED certification, digital tools, IIoT integration and productivity programs aligned with national initiatives."
    },
    {
      question: "What testing & calibration services are available?",
      answer: "NABL-accredited calibration for instruments and planned environmental testing (vibration, shock, thermal, humidity, corrosion) for aerospace & automotive sectors."
    },
    {
      question: "Where is UDUGIRI Technologies located?",
      answer: "#109/2, 4th Cross, Ashwathnagar, RMV 2nd Stage, Sanjayanagar, Bangalore – 560094, Karnataka, India."
    },
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* =========================================
          1. HERO SECTION - Strong visual opening
      ========================================= */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-950 text-white px-6 py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
            alt="Modern smart factory automation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-950/75"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-8">
            UDUGIRI Technologies
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            {heroTagline}
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Delivering industrial automation solutions, smart manufacturing consulting, MSME transformation, precision testing & calibration, and advanced skill innovation labs.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-9 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Request Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-indigo-600 text-indigo-300 px-9 py-4 rounded-lg font-medium text-base hover:bg-indigo-950/40 transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          2. Quick Stats Section
      ========================================= */}
      <section className="py-12 px-6 -mt-10">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="border-r last:border-0 border-slate-100 pr-6 last:pr-0">
                <div className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wide text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. Core Focus Areas (with background images)
      ========================================= */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Core Focus Areas</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Integrated engineering and technology solutions for modern manufacturing and education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Automation",
                desc: "PLC, SCADA, HMI, VFD, robotics integration and control panel design.",
                bg: "https://images.unsplash.com/photo-1581092160560-7d4a0d8a6d5e?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Industry 4.0 / 5.0",
                desc: "IIoT, Cyber Physical Systems, smart factory consulting & implementation.",
                bg: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6da?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "MSME Consulting",
                desc: "Lean Manufacturing, ZED certification, digitization & productivity improvement.",
                bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Testing & Calibration",
                desc: "NABL accredited calibration and environmental testing for aerospace & automotive.",
                bg: "https://images.unsplash.com/photo-1581092162387-4c4e6a0d0e6e?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Skill Innovation Labs",
                desc: "Advanced hands-on labs for PLC, IIoT, robotics & Industry 4.0 technologies.",
                bg: "https://images.unsplash.com/photo-1581093458795-9d1c0e8d9e6f?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Research & Innovation",
                desc: "Industry-academia collaboration in smart manufacturing & emerging technologies.",
                bg: "https://images.unsplash.com/photo-1581092160560-7d4a0d8a6d5e?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-slate-200 h-80 group"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          4. Why Choose UDUGIRI (simple cards)
      ========================================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Why Choose UDUGIRI Technologies</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Bridging real industry needs with future-ready talent and technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Integrated Expertise", desc: "One platform combining automation, consulting, testing & skill development" },
              { title: "Industry-Driven", desc: "Practical, ROI-focused solutions based on real manufacturing challenges" },
              { title: "Strong Leadership", desc: "Led by Dr. Shivanna D M — expert in automation, research & skill development" },
              { title: "MSME Focus", desc: "Specialized support for digitization, ZED & global competitiveness" },
              { title: "Future Technology", desc: "Active focus on AI, CPS, IIoT & sustainable smart manufacturing" },
              { title: "Nationwide Impact", desc: "Serving manufacturing, aerospace, automotive & education sectors" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-7 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. Our Commitment & Vision
      ========================================= */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Commitment & Vision</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become a national leader in industrial technology solutions, Industry 4.0/5.0 transformation, and advanced skill development — empowering industries and institutions with innovation-driven capabilities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                Enable MSMEs to adopt digital & smart manufacturing, deliver world-class consulting & automation, establish advanced skill labs, support quality & compliance systems, and build a future-ready workforce.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium text-lg"
          >
            Read Full Company Profile <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* =========================================
          6. FAQ Section
      ========================================= */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Frequently Asked Questions" faqs={homeFAQs} />
        </div>
      </section>

      {/* =========================================
          7. Final CTA + Contact Info
      ========================================= */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Whether it's automation upgrade, MSME digitization, skill lab setup, testing services or consulting — we're here to support your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
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
              Explore Our Services
            </Link>
          </div>

          <div className="flex flex-col items-center text-slate-600 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <span>#109/2, 4th Cross, Ashwathnagar, RMV 2nd Stage, Sanjayanagar, Bangalore – 560094</span>
            </div>
            <p>Karnataka, India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;