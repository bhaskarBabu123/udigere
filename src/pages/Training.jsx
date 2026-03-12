import { Link } from 'react-router-dom';
import {
  GraduationCap, Clock, Award, Users, BookOpen, Monitor,
  CheckCircle2, PlayCircle, ShieldCheck, Zap, Factory, Bot,
  Cpu, Settings, Brain, Globe, Lightbulb, Briefcase, Target, ArrowRight
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Training = () => {
  const programs = [
    {
      title: "Industrial Automation & PLC-SCADA",
      duration: "3–6 Months",
      mode: "Offline / Hybrid",
      certification: "Industry & Vendor Certified",
      highlights: ["PLC Programming", "SCADA Deployment", "HMI Design", "Industrial Networking", "Process Control"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "IIoT & Smart Manufacturing",
      duration: "4 Months",
      mode: "Hybrid",
      certification: "Professional Certificate",
      highlights: ["IIoT Platforms", "Predictive Maintenance", "Smart Sensors", "Data Analytics", "Cloud Integration"],
      image: "https://s3.amazonaws.com/a-us.storyblok.com/f/1022730/9cab94522e/iiot-umh-dashboard.png"
    },
    {
      title: "Robotics & Artificial Intelligence",
      duration: "5 Months",
      mode: "Offline",
      certification: "Advanced Certification",
      highlights: ["Industrial Robotics", "Cobots", "Machine Vision", "AI in Automation", "Pick & Place Systems"],
      image: "https://kanerika.com/wp-content/uploads/2024/08/ai-in-robotics-1.png"
    },
    {
      title: "CNC Programming & Simulation",
      duration: "3 Months",
      mode: "Hybrid",
      certification: "Skill Certificate",
      highlights: ["G-code/M-code", "CNC Simulation", "Machining Processes", "CAD/CAM Integration"],
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Industry 4.0 / 5.0 Technologies",
      duration: "4–6 Months",
      mode: "Hybrid",
      certification: "Professional Certificate",
      highlights: ["CPS", "Digital Twins", "Human-Machine Collaboration", "Smart Factory"],
      image: "https://www.amlsheffield.co.uk/wp-content/uploads/2024/01/shutterstock_2216343285-1080x675.jpg"
    },
    {
      title: "VFD, Drives & Motion Control",
      duration: "3 Months",
      mode: "Offline",
      certification: "Technical Certificate",
      highlights: ["VFD Configuration", "Servo Systems", "Energy Optimization", "Motion Control"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const trainingFAQs = [
    {
      question: "Who can enroll in these training programs?",
      answer: "ITI students, diploma holders, engineering students, university scholars, faculty members, industry engineers, MSME workforce, and professionals seeking upskilling."
    },
    {
      question: "Are these programs aligned with national skill initiatives?",
      answer: "Yes — fully aligned with Skill India Mission, Make in India, Digital India, Atmanirbhar Bharat, NEP 2020, and NSDC frameworks. Many programs qualify for government recognition and funding."
    },
    {
      question: "Do you provide hands-on training with real industrial equipment?",
      answer: "Yes — extensive practical sessions using industrial-grade PLCs, SCADA, robots, IIoT devices, VFDs, CNC simulators, and automation systems in our Advanced Skill Innovation Labs."
    },
    {
      question: "What kind of certifications are awarded?",
      answer: "Industry-recognized certificates, vendor-aligned certifications (Siemens, Rockwell style), professional skill certificates, and completion certificates aligned with NSDC/Skill India frameworks."
    },
    {
      question: "Is internship/placement support provided?",
      answer: "Yes — structured industry internship programs, live project exposure, resume building, interview preparation, and placement assistance through our industry-academia network."
    },
    {
      question: "Are there options for working professionals?",
      answer: "Yes — flexible formats including weekend batches, evening sessions, hybrid/online modes, and customized corporate training packages."
    }
  ];

  const certificationTypes = [
    { title: "Vendor-Aligned Certification", desc: "Siemens, Rockwell, Schneider, Delta, Mitsubishi style — globally recognized" },
    { title: "Skill India / NSDC Aligned", desc: "National Skill Development Corporation compliant programs" },
    { title: "Professional Certificate", desc: "UDUGIRI Issued – Industry Recognized with project portfolio" },
    { title: "Completion Certificate", desc: "With hands-on project documentation and assessment" }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581093458793-5e1f0e8d3f3d?auto=format&fit=crop&q=80&w=2070"
            alt="Advanced technical training lab"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Future-Ready Skills Training
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Advanced Technical Training & Certification
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Hands-on programs in industrial automation, IIoT, robotics, AI, CNC, Industry 4.0/5.0 — aligned with Skill India and global industry needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2"
            >
              Enquire About Programs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-950/40 transition"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Teaser */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">ITI to University</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">All Levels</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Thousands</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Trained Annually</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">100%</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Hands-on</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">Skill India</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Aligned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Featured Training Programs</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Industry-oriented certification courses with real equipment training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-96 group"
                style={{
                  backgroundImage: `url(${program.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-3">
                    {program.highlights.join(" • ")}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-600/80 text-white text-xs rounded-full">
                      {program.duration}
                    </span>
                    <span className="px-3 py-1 bg-white/30 text-white text-xs rounded-full">
                      {program.mode}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-indigo-300 font-medium text-sm hover:text-white"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Flexible Training Formats</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Designed for students, faculty, working professionals, and corporate teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: "Certification Courses", desc: "Short-term specialized programs with industry-aligned curriculum" },
              { icon: Users, title: "Internship & Project Programs", desc: "Real industrial exposure through structured internships and live projects" },
              { icon: Monitor, title: "Faculty Development (FDP)", desc: "Training for educators in emerging technologies and lab methodologies" },
              { icon: Briefcase, title: "Corporate Training", desc: "Customized upskilling packages for industry teams" },
              { icon: PlayCircle, title: "Workshops & Bootcamps", desc: "Intensive short programs on specific technologies" },
              { icon: BookOpen, title: "Skill Development Courses", desc: "Long-term structured programs with deep hands-on focus" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Types */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Certification & Recognition</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Industry-recognized credentials to boost employability and career growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certificationTypes.map((cert, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
                <Award className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Alignment & Impact */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">National Alignment & Impact</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Supporting India's manufacturing and skill development vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
              <Globe className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Skill India Mission</h3>
              <p className="text-sm text-slate-600">Aligned programs contributing to national workforce readiness</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
              <Zap className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Make in India & Atmanirbhar</h3>
              <p className="text-sm text-slate-600">Training focused on indigenous technology adoption</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
              <Users className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Thousands Trained</h3>
              <p className="text-sm text-slate-600">Building industry-ready talent pipeline annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Training Programs FAQs" faqs={trainingFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Build Industry-Ready Skills?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Join our next batch — gain hands-on experience, industry certification, and real-world exposure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Enquire Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-950/40 transition"
            >
              Download Program Details
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

export default Training;