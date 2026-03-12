import { Link } from 'react-router-dom';
import { 
  Briefcase, Users, Award, Zap, Clock, MapPin, 
  ArrowRight, CheckCircle2, Building, GraduationCap 
} from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Industrial Automation Engineer",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3–7 years",
      highlights: [
        "PLC/SCADA programming & integration",
        "HMI development & VFD configuration",
        "Industrial robotics & motion control",
        "Site commissioning & troubleshooting"
      ]
    },
    {
      title: "Industry 4.0 / IIoT Consultant",
      location: "Bangalore (with travel)",
      type: "Full-time",
      experience: "4–8 years",
      highlights: [
        "IIoT platform deployment & CPS integration",
        "Smart factory roadmap creation",
        "Digital twin & predictive maintenance projects",
        "Client consulting & training delivery"
      ]
    },
    {
      title: "Skill Development Trainer / Faculty",
      location: "Bangalore",
      type: "Full-time / Part-time",
      experience: "2–6 years",
      highlights: [
        "Training delivery in PLC, SCADA, Robotics, IIoT",
        "Curriculum & lab module development",
        "Faculty development programs (FDP)",
        "Student mentoring & project guidance"
      ]
    },
    {
      title: "Quality & ZED Consultant",
      location: "Bangalore",
      type: "Full-time",
      experience: "3–6 years",
      highlights: [
        "ISO 9001 / 14001 / 45001 implementation",
        "ZED certification support for MSMEs",
        "Lean manufacturing & process audits",
        "Documentation & pre-certification audits"
      ]
    }
  ];

  const whyJoin = [
    {
      icon: Zap,
      title: "Impactful Work",
      desc: "Work on real Industry 4.0 / 5.0 projects, skill labs, and national initiatives that shape India's manufacturing future."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      desc: "Strong industry-academia ecosystem — work with experts, MSMEs, institutions, and government partners."
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      desc: "Regular training, certifications (Siemens, Rockwell, etc.), exposure to emerging tech, and career progression."
    },
    {
      icon: MapPin,
      title: "Bangalore Location",
      desc: "Work from our modern office in Sanjayanagar with excellent connectivity and ecosystem access."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
            alt="Careers at UDUGIRI"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Join Our Team
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Careers at UDUGIRI Technologies
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Be part of India's manufacturing transformation — work on automation, smart factories, skill labs, and Industry 4.0/5.0 innovation.
          </p>

          <Link
            to="/contact"
            className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition inline-flex items-center gap-2"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stats Teaser */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Industry 4.0</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Cutting-edge Projects</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Skill Labs</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Future Talent Building</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">MSME Impact</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Nationwide Reach</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">Growth</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Career Path</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join UDUGIRI */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Why Join UDUGIRI Technologies</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Work on meaningful projects that shape the future of Indian manufacturing and skill development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoin.map((reason, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Current Open Positions</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Join us in Bangalore and contribute to India's industrial transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {job.experience}
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  {job.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-indigo-600 font-medium text-sm hover:text-indigo-800 flex items-center gap-1"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Don't see a role that matches? We're always looking for passionate talent.
            </p>
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition inline-flex items-center gap-2"
            >
              Send Your Resume <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Build the Future with UDUGIRI
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Join a team that's transforming Indian manufacturing through automation, smart factories, skill development, and innovation.
          </p>

          <Link
            to="/contact"
            className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition inline-flex items-center gap-2 shadow-md"
          >
            Apply or Refer Talent <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="mt-10 text-sm text-slate-400">
            UDUGIRI Technologies • Bangalore, Karnataka
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;