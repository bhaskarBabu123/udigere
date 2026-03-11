import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { Users, Building, Handshake, Target, BookOpen, Award } from 'lucide-react';

const Collaboration = () => {
  const collaborationAreas = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Product Development",
      description: "Collaborative development of educational products, curriculum design, research projects, and academic tools aligned with industry requirements and emerging technologies."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Industrial Product Development",
      description: "Joint development of industrial solutions, automation systems, and technology products through academia-industry partnerships for real-world applications."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Consultancy Partnerships",
      description: "Strategic partnerships with educational institutions to provide consultancy services, technical expertise, and industrial knowledge for research and development projects."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Industry Tie-Ups",
      description: "Long-term partnerships with manufacturing industries for technology development, process optimization, and innovation initiatives through academic collaboration."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Internship & Training Programs",
      description: "Comprehensive internship programs and industrial training initiatives connecting students with real industry projects and practical learning experiences."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Research Collaboration",
      description: "Joint research initiatives, publication opportunities, patent development, and technology transfer programs fostering innovation and knowledge sharing."
    }
  ];

  const benefits = [
    {
      title: "For Academic Institutions",
      items: [
        "Access to latest industry technologies and equipment",
        "Real-world project opportunities for students",
        "Industry-aligned curriculum development",
        "Faculty development and training programs",
        "Research funding and collaboration opportunities",
        "Enhanced placement opportunities for students"
      ]
    },
    {
      title: "For Industry Partners",
      items: [
        "Access to skilled talent pool and fresh ideas",
        "Research and development support",
        "Cost-effective innovation solutions",
        "Technology validation and testing",
        "Long-term talent pipeline development",
        "Corporate social responsibility initiatives"
      ]
    }
  ];

  const collaborationFAQs = [
    {
      question: "How do you establish partnerships with academic institutions?",
      answer: "We establish partnerships through formal MOUs covering areas like curriculum development, research collaboration, facility sharing, faculty exchange, student internships, and joint project development. We work closely with academic leadership to align objectives and create mutually beneficial programs."
    },
    {
      question: "What kind of support do you provide for faculty development?",
      answer: "We offer comprehensive faculty development programs including industry training, technology workshops, research guidance, publication support, conference participation, and sabbatical opportunities with industry partners to enhance their practical knowledge and research capabilities."
    },
    {
      question: "Can students get real industry experience through your collaboration programs?",
      answer: "Yes, our collaboration programs provide students with authentic industry experience through internships, live projects, industry visits, mentorship programs, and direct interaction with industry professionals. Students work on real problems and gain practical skills aligned with industry needs."
    },
    {
      question: "How do you ensure academic projects have commercial viability?",
      answer: "We conduct thorough market analysis, feasibility studies, and technology assessment for academic projects. Our industry connections help validate commercial potential, and we provide support for patent filing, prototype development, and technology transfer to ensure projects have real-world applications."
    },
    {
      question: "What intellectual property arrangements exist in collaborative projects?",
      answer: "IP arrangements are clearly defined in partnership agreements, typically involving shared ownership based on contribution levels. We assist in patent filing, IP protection, and commercialization strategies while ensuring fair benefit distribution among all stakeholders involved in the collaboration."
    },
    {
      question: "Do you provide funding support for collaborative research projects?",
      answer: "While we don't provide direct funding, we help connect partners with appropriate funding sources including government grants, industry sponsorships, and research funding agencies. We also assist in proposal preparation and project management for funded research initiatives."
    }
  ];

  return (
    <div>
      <PageBanner
        title="Academia – Industry Collaboration"
        subtitle="Bridging Education and Industry"
        description="Strategic partnerships fostering innovation, research, and practical learning experiences"
      />

      {/* Collaboration Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collaboration Areas</h2>
            <p className="text-lg text-gray-600">Comprehensive partnership opportunities for mutual growth and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborationAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                <div className="text-blue-600 mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-lg text-gray-600">Mutual benefits for academic institutions and industry partners</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? <BookOpen className="w-8 h-8 text-blue-600" /> : <Building className="w-8 h-8 text-blue-600" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collaboration Process</h2>
            <p className="text-lg text-gray-600">Structured approach for successful partnership development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Discussion</h3>
              <p className="text-gray-600">Understanding mutual objectives and collaboration opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Agreement</h3>
              <p className="text-gray-600">Formal MOU defining scope, responsibilities, and deliverables</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Executing collaborative projects and programs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
              <p className="text-gray-600">Regular review and enhancement of partnership outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Success Stories</h2>
            <p className="text-lg text-gray-600">Highlighting successful collaboration outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-4">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">Research Publications</h3>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600">25+</span>
                <p className="text-gray-600 mt-1">Joint research papers published in international journals</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-4">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">Student Placements</h3>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-green-600">500+</span>
                <p className="text-gray-600 mt-1">Students placed through collaboration programs</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-4">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">Industry Projects</h3>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-purple-600">100+</span>
                <p className="text-gray-600 mt-1">Successful industry-academia collaborative projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Academia-Industry Collaboration FAQs" faqs={collaborationFAQs} />
    </div>
  );
};

export default Collaboration;