import { Link } from 'react-router-dom';
import {
  ArrowRight, Factory, GraduationCap, Cog, Monitor, Bot, ShieldCheck,
  Database, CheckCircle2, Zap, Clock, MapPin, Award, Wifi, BarChart,
  TestTube, Lightbulb, Target, Brain
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Labs = () => {
  const labProducts = [
    {
      title: "Industrial Automation & PLC-SCADA Lab",
      description: "Hands-on stations with real PLC systems, SCADA platforms, industrial sensors, actuators, control panels, VFDs, and process automation modules replicating factory environments.",
      level: "ITI / Diploma / Engineering",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Robotics & Artificial Intelligence Lab",
      description: "Industrial robotic arms, collaborative cobots, pick-and-place cells, machine vision systems, AI programming, and intelligent automation training for advanced roles.",
      level: "Advanced / Research Grade",
      image: "https://xavo.com/hs-fs/hubfs/figure1_lab_automation_robotics.png?width=908&height=518&name=figure1_lab_automation_robotics.png"
    },
    {
      title: "IIoT & Smart Manufacturing Innovation Lab",
      description: "Smart sensors, IIoT connectivity, real-time dashboards, edge computing, cloud platforms, digital twins, and smart factory simulation for Industry 4.0/5.0 readiness.",
      level: "University / Professional Certification",
      image: "https://s3.amazonaws.com/a-us.storyblok.com/f/1022730/9cab94522e/iiot-umh-dashboard.png"
    },
    {
      title: "CNC Simulation & Advanced Machining Lab",
      description: "CNC programming, G-code/M-code, machining simulation, process planning, and digital manufacturing training aligned with modern precision engineering.",
      level: "Engineering / University",
      image: "https://tech-labs.com/sites/default/files/product_images/APT-Advanced-Manufacturing-MTEC-SIM-2.jpg"
    }
  ];

  const labFAQs = [
    {
      question: "Is the curriculum included with the lab setup?",
      answer: "Yes — complete curriculum, lab manuals, project-based learning modules, training guides, and faculty development programs aligned with NEP 2020, Skill India, and Industry 4.0/5.0 requirements."
    },
    {
      question: "Can labs be customized based on budget?",
      answer: "Yes — modular approach: start with core automation/PLC-SCADA and scale to robotics, IIoT, CNC, AI, or CPS modules as budget and needs grow."
    },
    {
      question: "What post-installation support is provided?",
      answer: "Full installation & commissioning, faculty/student training workshops, ongoing technical support, remote diagnostics, and annual maintenance contracts."
    },
    {
      question: "Which institutions are these labs suitable for?",
      answer: "ITI institutions, polytechnic colleges, engineering colleges, universities, skill development centers, and industry training programs."
    },
    {
      question: "Do the labs align with national initiatives?",
      answer: "Fully aligned with Skill India Mission, Make in India, Digital India, Atmanirbhar Bharat, NEP 2020, and MSME technology development programs."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581093458793-5e1f0e8d3f3d?auto=format&fit=crop&q=80&w=2070"
            alt="Advanced skill training lab"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Hands-On Future-Ready Training
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Advanced Skill Innovation Labs
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Turnkey laboratory setups bridging academic learning with real industrial technologies — PLC-SCADA, IIoT, robotics, CNC, AI, and Industry 4.0/5.0 systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2"
            >
              Request Lab Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-950/40 transition"
            >
              Customize Your Lab
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">ITI to University</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">All Levels Covered</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Thousands</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Students Trained/Year</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">100%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Industry Alignment</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">NEP 2020</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Labs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Core Skill Innovation Labs</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Hands-on environments equipped with real industrial-grade technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labProducts.map((lab, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-80 group"
                style={{
                  backgroundImage: `url(${lab.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{lab.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-3">{lab.description}</p>
                  <span className="inline-block px-3 py-1 bg-indigo-600/80 text-white text-xs font-medium rounded-full">
                    {lab.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Covered */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Technologies Covered</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Real-world industrial systems for practical, employable skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Industrial Instrumentation & Sensors",
              "PLC Programming & Ladder Logic",
              "SCADA Systems & Process Monitoring",
              "VFD & Motion Control",
              "Industrial Internet of Things (IIoT)",
              "CNC Programming & Simulation",
              "Industrial Robotics & Cobots",
              "AI in Manufacturing & Machine Vision",
              "Cyber Physical Systems (CPS)",
              "Smart Manufacturing & Industry 4.0/5.0"
            ].map((tech, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
                <h3 className="text-lg font-semibold mb-2">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Alignment */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Programs & National Alignment</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Certification, internships, FDPs, and corporate training aligned with national missions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <h3 className="text-xl font-semibold mb-3">Certification & Skill Courses</h3>
              <p className="text-sm text-slate-600">Structured hands-on programs in emerging technologies with industry-recognized certification.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <h3 className="text-xl font-semibold mb-3">Internships & FDPs</h3>
              <p className="text-sm text-slate-600">Industry exposure internships and faculty development programs for updated teaching capabilities.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
              <h3 className="text-xl font-semibold mb-3">National Initiatives</h3>
              <p className="text-sm text-slate-600">Aligned with Skill India, Make in India, Digital India, Atmanirbhar Bharat, NEP 2020 for funding & relevance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Skill Innovation Labs FAQs" faqs={labFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Build Your Advanced Skill Innovation Center
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Free consultation, customized proposal, lab design, equipment plan, and implementation roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Request Proposal <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-indigo-600 text-indigo-300 px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-950/40 transition"
            >
              About UDUGIRI
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

export default Labs;