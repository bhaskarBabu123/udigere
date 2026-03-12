import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { GraduationCap, Briefcase, Users, Rocket, Target, Award } from 'lucide-react';

const Students = () => {
  const studentServices = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Skill Development",
      description: "Comprehensive skill development programs covering technical skills, soft skills, industry knowledge, and professional competencies to enhance employability and career prospects."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Internships",
      description: "Industry internship opportunities with leading companies in automation, manufacturing, and technology sectors providing real-world experience and professional networking."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Final Year Projects",
      description: "Guided final year project support with industry-relevant topics, technical mentorship, resource access, and presentation guidance for academic and professional success."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Industry Projects",
      description: "Participation in real industry projects providing hands-on experience with actual business challenges, professional work environment, and industry standard practices."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Placement Support",
      description: "Comprehensive placement assistance including resume building, interview preparation, skill assessment, company referrals, and career guidance for successful job placement."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Mentoring",
      description: "Entrepreneurship support and startup mentoring including business idea validation, funding guidance, incubation support, and professional networking for aspiring entrepreneurs."
    }
  ];

  const skillAreas = [
    "Industrial Automation & PLC Programming",
    "Robotics & AI Applications",
    "IoT & Industry 4.0 Technologies",
    "Data Analytics & Machine Learning",
    "Project Management & Leadership",
    "Communication & Presentation Skills"
  ];

  const placementStats = [
    { title: "Students Placed", count: "1000+", color: "green" },
    { title: "Partner Companies", count: "50+", color: "green" },
    { title: "Average Package", count: "₹6.5 LPA", color: "purple" },
    { title: "Placement Rate", count: "85%", color: "red" }
  ];

  const studentFAQs = [
    {
      question: "What kind of internship opportunities are available for students?",
      answer: "We offer internships in various domains including industrial automation, robotics, AI/ML, IoT, manufacturing processes, and R&D. Internships range from 2-6 months with leading companies, startups, and research organizations, providing stipends and real project experience."
    },
    {
      question: "How do you support students in their final year projects?",
      answer: "We provide end-to-end support including project topic selection, technical guidance, resource access, industry mentorship, prototype development assistance, documentation support, and presentation coaching to ensure successful project completion and academic excellence."
    },
    {
      question: "What placement support services do you offer?",
      answer: "Our placement services include career counseling, resume optimization, mock interviews, aptitude training, soft skills development, company-specific preparation, and direct referrals to our industry partners. We also organize placement drives and networking events."
    },
    {
      question: "Can students work on live industry projects while studying?",
      answer: "Yes, we facilitate student participation in live industry projects through our industry partnerships. These projects provide practical experience, professional exposure, and potential full-time job opportunities while allowing students to earn and learn simultaneously."
    },
    {
      question: "What startup support do you provide for entrepreneurial students?",
      answer: "We offer comprehensive startup support including idea validation, business model development, funding guidance, incubation facilities, mentorship programs, networking opportunities, and connections to investor networks for students with entrepreneurial aspirations."
    },
    {
      question: "Are there opportunities for international exposure and projects?",
      answer: "Yes, we facilitate international opportunities through global partnerships, exchange programs, international project collaborations, and participation in global competitions. We also help students connect with international companies and research organizations."
    }
  ];

  return (
    <div>
      <PageBanner
        title="Students"
        subtitle="Empowering the Next Generation of Engineers"
        description="Comprehensive support for students to excel in their careers and entrepreneurial ventures"
      />

      {/* Student Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Support Services</h2>
            <p className="text-lg text-gray-600">Comprehensive programs to boost your career and entrepreneurial journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-green-300">
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Development Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skill Development Areas</h2>
            <p className="text-lg text-gray-600">Core competencies for industry readiness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillAreas.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Placement Statistics</h2>
            <p className="text-lg text-gray-600">Our track record in student career success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-bold text-${stat.color}-600`}>{stat.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Pathways</h2>
            <p className="text-lg text-gray-600">Multiple career opportunities after program completion</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <Briefcase className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Industry Careers</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Roles</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Automation Engineer</li>
                      <li>• Robotics Specialist</li>
                      <li>• IoT Developer</li>
                      <li>• AI/ML Engineer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Management Roles</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Project Manager</li>
                      <li>• Technical Consultant</li>
                      <li>• Product Manager</li>
                      <li>• Business Analyst</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <Rocket className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Entrepreneurship</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Startup Domains</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Tech Startups</li>
                      <li>• Industrial Solutions</li>
                      <li>• EdTech Platforms</li>
                      <li>• IoT Products</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Support Services</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Incubation</li>
                      <li>• Funding Guidance</li>
                      <li>• Mentorship</li>
                      <li>• Networking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Student Support FAQs" faqs={studentFAQs} />
    </div>
  );
};

export default Students;