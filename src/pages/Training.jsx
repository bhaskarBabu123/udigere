import React from 'react';
import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  GraduationCap, Clock, Award, Users, BookOpen, Monitor, 
  CheckCircle2, PlayCircle, ShieldCheck, Zap 
} from 'lucide-react';

const Training = () => {
  const courses = [
    {
      title: "Aerospace Engineering",
      duration: "6 Months",
      mode: "Hybrid",
      certification: "Industry Certified",
      internship: "3 Months",
      description: "Comprehensive aerospace engineering program covering aircraft design, propulsion systems, avionics, and manufacturing processes with hands-on project experience."
    },
    {
      title: "Mechanical Engineering",
      duration: "4 Months",
      mode: "Online/Offline",
      certification: "Professional Certificate",
      internship: "2 Months",
      description: "Advanced mechanical engineering concepts including CAD/CAM, manufacturing processes, materials science, and industrial automation applications."
    },
    {
      title: "Electrical & Electronics Engineering",
      duration: "5 Months",
      mode: "Hybrid",
      certification: "Industry Certified",
      internship: "3 Months",
      description: "Comprehensive program covering power systems, control engineering, electronics design, and industrial electrical applications with practical training."
    },
    {
      title: "Industrial Automation Certification",
      duration: "3 Months",
      mode: "Offline",
      certification: "Vendor Certified",
      internship: "1 Month",
      description: "Hands-on training in PLC programming, SCADA systems, HMI development, industrial networks, and automation system design and implementation."
    },
    {
      title: "Industry 4.0 / 5.0 Training",
      duration: "4 Months",
      mode: "Hybrid",
      certification: "Professional Certificate",
      internship: "2 Months",
      description: "Advanced training in IoT, AI/ML applications, cyber-physical systems, smart manufacturing, and digital transformation strategies."
    },
    {
      title: "AI & ML Training",
      duration: "6 Months",
      mode: "Online",
      certification: "Industry Certified",
      internship: "4 Months",
      description: "Comprehensive artificial intelligence and machine learning program with focus on industrial applications, predictive analytics, and automation."
    },
    {
      title: "Cyber Security Training",
      duration: "3 Months",
      mode: "Online/Offline",
      certification: "Professional Certificate",
      internship: "2 Months",
      description: "Industrial cybersecurity training covering network security, SCADA security, risk assessment, and compliance with industry standards."
    },
    {
      title: "Robotics & Automation",
      duration: "5 Months",
      mode: "Offline",
      certification: "Vendor Certified",
      internship: "3 Months",
      description: "Complete robotics training including robot programming, system integration, safety protocols, and industrial robotics applications."
    }
  ];

  const trainingFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with extensive practical experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Project-Based Learning",
      description: "Hands-on projects using real industry scenarios and equipment"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certifications",
      description: "Globally recognized certifications from leading technology vendors"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Modern Facilities",
      description: "State-of-the-art labs and equipment for practical training"
    }
  ];

  const trainingFAQs = [
    {
      question: "What are the prerequisites for enrolling in your training programs?",
      answer: "Prerequisites vary by course. For engineering programs, a basic engineering degree is preferred. For automation and Industry 4.0 courses, basic knowledge of electrical/electronics is helpful. We also offer foundation courses for beginners. Detailed prerequisites are provided for each course."
    },
    {
      question: "Are the certifications recognized by industry and internationally?",
      answer: "Yes, our certifications are industry-recognized and internationally accepted. We partner with leading technology vendors like Siemens, Rockwell Automation, and others. Our programs are aligned with international standards and many lead to globally recognized professional certifications."
    },
    {
      question: "What kind of placement assistance do you provide?",
      answer: "We provide comprehensive placement support including resume building, interview preparation, industry connections, job referrals, and placement drives. Our industry partnerships ensure good placement opportunities with leading companies in automation, manufacturing, and technology sectors."
    },
    {
      question: "Can working professionals enroll in your training programs?",
      answer: "Absolutely! We offer flexible scheduling including weekend batches, evening classes, and online options specifically designed for working professionals. Our hybrid learning approach allows professionals to balance work and learning effectively."
    },
    {
      question: "Do you provide hands-on training with real industrial equipment?",
      answer: "Yes, all our programs include extensive hands-on training with industrial-grade equipment, real PLCs, SCADA systems, robots, and automation components. Our labs are equipped with the same technologies used in actual industrial environments."
    },
    {
      question: "What is the typical class size and student-to-instructor ratio?",
      answer: "We maintain small batch sizes of 15-20 students per batch to ensure personalized attention. Our student-to-instructor ratio is typically 10:1 for practical sessions, ensuring each student receives adequate guidance and support during hands-on training."
    }
  ];

  const partners = ["Siemens", "Rockwell", "Schneider", "ABB", "Fanuc", "KUKA", "Microsoft", "AWS"];

  return (
    <div className="bg-white text-slate-900">
      
      {/* --- ELITE DARK BANNER (FULL WIDTH) --- */}
      <section className="relative h-[50vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Training Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Master Modern Industry</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              Training & <span className="text-emerald-400">Certification.</span>
            </h1>
            <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl">
              Industry-aligned professional development programs designed for technical excellence and global career advancement.
            </p>
          </div>
        </div>
      </section>

      {/* --- PARTNER SLIDER SECTION --- */}
      <div className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
            {partners.map((p, i) => (
              <span key={i} className="text-xl font-black text-slate-400 tracking-tighter uppercase">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">Why Choose Our Programs</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingFeatures.map((feature, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all text-center">
              <div className="text-emerald-600 flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- COURSES GRID (FULL DATA PRESERVED) --- */}
      <section className="py-20 bg-slate-950 rounded-[3rem] md:rounded-[5rem] mx-4 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Our Training Courses</h2>
            <p className="text-slate-400 font-medium mt-2">Comprehensive programs covering cutting-edge technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="group bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/10 hover:border-emerald-500/50 transition-all flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <GraduationCap size={28} />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">{course.certification}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{course.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-6 border-t border-white/5 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Clock size={14} className="text-emerald-500" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Monitor size={14} className="text-emerald-500" /> {course.mode}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Award size={14} className="text-emerald-500" /> Cert: {course.certification.split(' ')[0]}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Users size={14} className="text-emerald-500" /> {course.internship} Intern
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Project Based", "Hands-on", "Industry Aligned"].map((tag, t) => (
                    <span key={t} className="text-[9px] font-black bg-white/5 text-slate-400 px-3 py-1 rounded uppercase tracking-widest">{tag}</span>
                  ))}
                </div>

                <button className="w-full bg-emerald-500 text-slate-950 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                  Enroll Now <PlayCircle size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEARNING APPROACH SECTION --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">Our Learning Approach</h2>
          <p className="text-slate-500 font-medium">Multi-faceted approach for comprehensive skill development</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { icon: <BookOpen className="text-blue-600" />, title: "Theoretical Foundation", list: ["Comprehensive curriculum", "Industry best practices", "Latest technology trends", "Case study analysis"] },
            { icon: <Monitor className="text-green-600" />, title: "Practical Training", list: ["Hands-on lab sessions", "Real equipment training", "Project implementation", "Problem-solving exercises"] },
            { icon: <Users className="text-purple-600" />, title: "Industry Exposure", list: ["Industrial visits", "Guest expert sessions", "Live project work", "Internship opportunities"] }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
              <div className="flex justify-center mb-6">{React.cloneElement(item.icon, { size: 48 })}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">{item.title}</h3>
              <ul className="text-slate-600 text-sm space-y-3 font-medium">
                {item.list.map((li, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <div className="bg-slate-50 py-12">
        <div className="container mx-auto px-6">
          <FAQ title="Training & Certification FAQs" faqs={trainingFAQs} />
        </div>
      </div>

    </div>
  );
};

export default Training;