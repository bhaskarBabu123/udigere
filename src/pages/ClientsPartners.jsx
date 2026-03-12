import { Link } from 'react-router-dom';
import { 
  Users, Globe, Factory, GraduationCap, Award, ShieldCheck, 
  CheckCircle2, Zap, Building, Handshake, Target, Lightbulb,ArrowRight, Rocket
} from 'lucide-react';

const ClientsPartners = () => {
  const keySectors = [
    {
      title: "Manufacturing Industries",
      description: "Heavy engineering, precision components, process industries benefiting from automation, IIoT, and smart factory upgrades.",
      icon: Factory,
      bg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "MSMEs & Startups",
      description: "Digitization, Lean implementation, ZED certification, productivity enhancement, and global supply chain readiness programs.",
      icon: Building,
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Aerospace & Automotive",
      description: "Environmental testing, NABL calibration, compliance support, and precision manufacturing solutions.",
      icon: ShieldCheck,
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Educational Institutions",
      description: "Advanced Skill Innovation Labs, faculty development, internships, and industry-aligned curriculum for ITI, polytechnics, engineering colleges.",
      icon: GraduationCap,
      bg: "https://images.unsplash.com/photo-1524178232363-933d15b4d95d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Government & Skill Agencies",
      description: "Alignment with Skill India, Make in India, Digital India, Atmanirbhar Bharat, and MSME development initiatives.",
      icon: Globe,
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const testimonials = [
    {
      quote: "UDUGIRI's ZED certification support and Lean implementation helped us achieve significant quality improvement and cost reduction. Their team was professional and results-oriented.",
      author: "Director, Precision Components MSME",
      location: "Bangalore"
    },
    {
      quote: "The Skill Innovation Lab setup transformed our polytechnic training. Students now work on real industrial PLC-SCADA and robotics systems — placement rates have improved dramatically.",
      author: "Principal, Government Polytechnic College",
      location: "Karnataka"
    },
    {
      quote: "Their IIoT and predictive maintenance consulting reduced our downtime by over 35%. Excellent post-implementation support and ROI visible within months.",
      author: "Operations Head, Automotive Ancillary Unit",
      location: "Pune Cluster"
    },
    {
      quote: "Industry-academia collaboration through UDUGIRI brought real-world projects to our engineering students. Faculty also benefited from their FDP programs.",
      author: "HOD Mechanical Engineering, Private University",
      location: "Bangalore"
    }
  ];

  const partners = [
    "Skill India Mission", "NSDC", "Make in India", "Digital India", 
    "Atmanirbhar Bharat", "MSME Ministry", "AICTE", "ZED Scheme"
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
            alt="Industry Collaboration & Ecosystem"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Trusted By Industry & Institutions
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Our Clients & Partners
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Collaborating with manufacturing industries, MSMEs, aerospace & automotive sectors, educational institutions, and government agencies to drive innovation and skill development.
          </p>
        </div>
      </section>

      {/* Stats Teaser */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">100+</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Clients Served</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">15+</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Industry Verticals</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Thousands</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Trained & Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">Nationwide</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Ecosystem Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sectors Served */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Key Sectors We Serve</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Supporting diverse industries and institutions across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keySectors.map((sector, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-80 group"
                style={{
                  backgroundImage: `url(${sector.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <sector.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{sector.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-3">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Real impact stories from industries, MSMEs, and educational partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
                <div className="text-indigo-600 mb-4">
                  <Award className="w-10 h-10" />
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-medium text-slate-900">
                  — {testimonial.author}
                </div>
                <div className="text-sm text-slate-500">
                  {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner & Affiliation Network */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Partner & Alignment Network</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Collaborating with national missions, skill agencies, and technology leaders
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center hover:border-indigo-300 transition">
                <Handshake className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                <p className="font-medium text-slate-900">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Highlights */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Innovation Ecosystem</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-base">
              Building strong connections between industry, academia, MSMEs, startups, and government
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Users className="w-12 h-12 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Industry-Academia Synergy</h3>
              <p className="text-sm text-slate-300">Joint projects, sponsored research, internships, faculty development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Rocket className="w-12 h-12 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Technology Incubation</h3>
              <p className="text-sm text-slate-300">Prototype validation, IP support, commercialization pathways</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Globe className="w-12 h-12 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">National Impact</h3>
              <p className="text-sm text-slate-300">Supporting Skill India, Make in India, Atmanirbhar Bharat goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Join Our Growing Network
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-base">
            Whether you're an industry partner, MSME, educational institution, or government agency — let's collaborate to drive innovation and skill development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Become a Partner <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-700 px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-50 transition"
            >
              Explore Collaboration
            </Link>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            UDUGIRI Technologies • #109/2, 4th Cross, Ashwathnagar, RMV 2nd Stage, Sanjayanagar, Bangalore – 560094
          </p>
        </div>
      </section>
    </div>
  );
};

export default ClientsPartners;