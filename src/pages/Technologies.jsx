import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { Cog, Bot, Wrench, BarChart, Monitor, Cpu, Zap, Wifi, Brain, Shield, Factory, Settings } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Industrial Automation",
      description: "Complete automation solutions including control systems, process automation, and manufacturing execution systems for enhanced productivity and quality control."
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Robotics",
      description: "Industrial robotics integration, programming, and deployment for manufacturing, assembly, welding, painting, and material handling applications."
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Mechatronics",
      description: "Integrated mechanical, electrical, and software systems combining sensors, actuators, and intelligent control for advanced automation solutions."
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Instrumentation",
      description: "Precision measurement and control instrumentation including temperature, pressure, flow, level sensors, and analytical instruments for process optimization."
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "PLC & SCADA Systems",
      description: "Programmable Logic Controllers and Supervisory Control And Data Acquisition systems for real-time monitoring and control of industrial processes."
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Sensors & Actuators",
      description: "Smart sensors and precision actuators for data collection, feedback control, and automated responses in manufacturing environments."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Drives & Control Systems",
      description: "Variable frequency drives, servo systems, and motion control solutions for precise positioning and speed control in manufacturing applications."
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "IIoT (Industrial Internet of Things)",
      description: "Connected industrial devices, edge computing, and cloud platforms for real-time data collection, analysis, and remote monitoring capabilities."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & ML in Manufacturing",
      description: "Artificial Intelligence and Machine Learning applications for predictive maintenance, quality control, process optimization, and intelligent decision making."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cyber Security for Industry",
      description: "Industrial cybersecurity solutions including network segmentation, secure communications, access control, and threat detection for manufacturing systems."
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "CNC & Smart Factory Systems",
      description: "Computer Numerical Control systems and smart factory integration for precision manufacturing, automated production, and intelligent workflow management."
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Digital Twin Technology",
      description: "Virtual replicas of physical systems for simulation, testing, optimization, and predictive analysis of manufacturing processes and equipment."
    }
  ];

  const technologyFAQs = [
    {
      question: "Which PLC brands and programming languages do you work with?",
      answer: "We work with major PLC brands including Siemens (TIA Portal), Allen-Bradley (Studio 5000), Schneider Electric (Unity Pro), Mitsubishi (GX Works), and Omron (CX-Programmer). Our team is proficient in Ladder Logic, Structured Text, Function Block Diagrams, and Sequential Function Charts."
    },
    {
      question: "What types of industrial robots do you integrate and program?",
      answer: "We work with various robot types including 6-axis articulated robots, SCARA robots, delta/parallel robots, and collaborative robots (cobots) from manufacturers like ABB, KUKA, Fanuc, Universal Robots, and Yaskawa for applications ranging from welding to pick-and-place operations."
    },
    {
      question: "How do you ensure compatibility between different automation technologies?",
      answer: "We use standard industrial communication protocols like Ethernet/IP, Profinet, Modbus, OPC-UA, and fieldbus systems. Our integration approach follows industry standards and includes extensive testing to ensure seamless communication between different vendor systems."
    },
    {
      question: "What AI and ML applications do you implement in manufacturing?",
      answer: "We implement predictive maintenance using vibration and thermal analysis, computer vision for quality inspection, demand forecasting, process optimization, anomaly detection, and intelligent scheduling systems using various AI/ML frameworks and industrial edge computing platforms."
    },
    {
      question: "How do you address cybersecurity in industrial automation systems?",
      answer: "We implement defense-in-depth strategies including network segmentation, industrial firewalls, VPNs, encrypted communications, access controls, regular security assessments, and compliance with standards like IEC 62443 and NIST frameworks for industrial cybersecurity."
    },
    {
      question: "Can you integrate IoT solutions with existing legacy equipment?",
      answer: "Yes, we specialize in retrofitting legacy equipment with IoT sensors, edge gateways, and communication modules. We use various protocols and converters to connect older machines to modern IoT platforms without disrupting existing operations."
    }
  ];

  return (
    <div>
      <PageBanner
        title="Core Technologies"
        subtitle="Advanced Technology Stack for Industry 4.0 / 5.0"
        description="Comprehensive technology solutions spanning automation, robotics, AI, and intelligent manufacturing systems"
      />

      {/* Technologies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Expertise</h2>
            <p className="text-lg text-gray-600">Cutting-edge technologies for modern manufacturing and automation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-green-300">
                <div className="text-green-600 mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated Technology Solutions</h2>
            <p className="text-lg text-gray-600">How our technologies work together for comprehensive automation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Monitor className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Control Layer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• PLC & SCADA Systems</li>
                <li>• HMI Interfaces</li>
                <li>• Motion Controllers</li>
                <li>• Safety Systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Wifi className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Connectivity Layer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Industrial IoT Sensors</li>
                <li>• Edge Computing</li>
                <li>• Wireless Networks</li>
                <li>• Data Gateways</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Intelligence Layer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI & Machine Learning</li>
                <li>• Predictive Analytics</li>
                <li>• Digital Twins</li>
                <li>• Cloud Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Technology FAQs" faqs={technologyFAQs} />
    </div>
  );
};

export default Technologies;