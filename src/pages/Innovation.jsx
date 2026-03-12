import { Link } from 'react-router-dom';
import {
  ArrowRight, Factory, Brain, Microscope, Bot, Leaf, Users, Rocket,
  Award, Globe, Lightbulb, ShieldCheck, CheckCircle2, Zap, Target
} from 'lucide-react';
import FAQ from '../components/FAQ';

const Innovation = () => {
  const researchFocus = [
    {
      title: "Smart Manufacturing",
      description: "Development of intelligent manufacturing systems using automation, digital technologies, data-driven decision-making, and Industry 4.0/5.0 architectures for improved productivity and efficiency.",
      tags: ["Industry 4.0", "Smart Factory"],
      bg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Industrial Artificial Intelligence",
      description: "Application of AI and machine learning for manufacturing optimization, predictive maintenance, quality control, intelligent process automation, and real-time decision support.",
      tags: ["AI", "Machine Learning"],
      bg: "https://www.infinite-uptime.com/wp-content/uploads/2025/02/AI-Predictive-Maintenance-1200x673.jpg"
    },
    {
      title: "Digital Twin Technologies",
      description: "Creation of virtual replicas of physical systems for simulation, real-time monitoring, performance optimization, predictive analytics, and scenario testing.",
      tags: ["Digital Twin", "Simulation"],
      bg: "https://www.sas.com/en_in/insights/articles/analytics/understanding-digital-twin-technology/_jcr_content/par/styledcontainer/par/image.img.jpg/1759226315233.jpg"
    },
    {
      title: "Robotics & Automation",
      description: "Research into advanced robotics, collaborative cobots, intelligent automation platforms, autonomous systems, and material handling solutions for modern factories.",
      tags: ["Robotics", "Cobots"],
      bg: "https://baysourceglobal.com/wp-content/uploads/2024/07/shutterstock_2333009159-scaled.jpg"
    },
    {
      title: "Sustainable Manufacturing",
      description: "Solutions focused on reducing energy consumption, minimizing waste, lowering environmental impact, enabling circular economy practices, and supporting green manufacturing.",
      tags: ["Sustainability", "Green Tech"],
      bg: "https://media.licdn.com/dms/image/v2/D4D12AQHL047LIBrB5g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692617883212?e=2147483647&v=beta&t=RcBhTG05aM8TqUBbVGjRDucY0mGb-Twv7BW_kIDsEdk"
    }
  ];

  const innovationFAQs = [
    {
      question: "What kind of research collaborations do you offer?",
      answer: "Joint research projects, industry-sponsored initiatives, technology development programs, internships, faculty development programs, applied research aligned with real industrial challenges, and collaborative innovation in smart manufacturing, AI, robotics, digital twins, and sustainable systems."
    },
    {
      question: "How do you support innovation in academic institutions?",
      answer: "Through establishment of Advanced Skill Innovation Labs, hands-on project-based learning, industry-academia collaboration, access to real industrial technologies, prototype development support, and technology incubation programs."
    },
    {
      question: "Do you assist with technology transfer and commercialization?",
      answer: "Yes — support for IP development, prototype validation, technology incubation, industry partnerships, commercialization pathways, and bridging research outcomes to practical industrial applications."
    },
    {
      question: "What is the focus of your applied research?",
      answer: "Addressing real-world industrial challenges in smart manufacturing, industrial AI, digital twins, robotics automation, and sustainable production systems to strengthen India's manufacturing ecosystem."
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
            alt="Research & Innovation Lab"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Research & Innovation
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Advancing Manufacturing Through Research & Collaboration
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Driving applied research, industry-academia synergy, and innovation ecosystems to accelerate adoption of smart manufacturing, AI, digital twins, robotics, and sustainable technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2"
            >
              Start a Collaboration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-indigo-950/40 transition"
            >
              Explore Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Teaser */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">5+</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Research Domains</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Industry-Academia</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Collaborations</div>
            </div>
            <div className="border-r last:border-0 border-slate-100 pr-4 last:pr-0">
              <div className="text-3xl font-semibold text-indigo-700">Future-Ready</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Talent Pipeline</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-indigo-700">Applied</div>
              <div className="text-xs uppercase tracking-wide text-slate-600">Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Research Focus Areas</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Applied research addressing real industrial challenges in emerging manufacturing technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchFocus.map((area, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-80 group"
                style={{
                  backgroundImage: `url(${area.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-3">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, t) => (
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

      {/* Collaboration & Ecosystem */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Industry–Academia Innovation Ecosystem</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-base">
              Connecting industries, MSMEs, academic institutions, research organizations, and startups to accelerate adoption of advanced manufacturing technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Users className="w-12 h-12 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Joint Research Projects</h3>
              <p className="text-sm text-slate-300">Collaborative applied research and industry-sponsored initiatives solving real manufacturing challenges.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Rocket className="w-12 h-12 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Technology Incubation</h3>
              <p className="text-sm text-slate-300">Prototype development, innovation labs, IP creation, and commercialization pathways.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Globe className="w-12 h-12 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Ecosystem Building</h3>
              <p className="text-sm text-slate-300">Strategic partnerships connecting MSMEs, academia, startups, and government for sustainable innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Our Innovation Pipeline</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              From concept to industry-ready, protected technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { step: "01", title: "Research", desc: "Identify challenges & emerging opportunities" },
              { step: "02", title: "Concept", desc: "Develop innovative ideas & feasibility studies" },
              { step: "03", title: "Prototype", desc: "Build & validate working models" },
              { step: "04", title: "Protect", desc: "IP filing & patent support" },
              { step: "05", title: "Implement", desc: "Technology transfer & industry adoption" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition">
                <div className="text-3xl font-bold text-indigo-600 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Research & Innovation FAQs" faqs={innovationFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Drive Innovation Together?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Collaborate on research, establish joint labs, incubate technologies, or partner for applied innovation projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition flex items-center justify-center gap-2 shadow-md"
            >
              Start a Collaboration <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-300 px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-950/40 transition"
            >
              Explore Partnership
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

export default Innovation;