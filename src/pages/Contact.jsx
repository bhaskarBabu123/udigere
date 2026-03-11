import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageSquare, Globe, Headphones, ArrowRight 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our industrial experts will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 md:w-8 h-8" />,
      title: "Global Headquarters",
      details: ["Tech Park, Innovation Hub", "Bangalore, KA - 560001", "India"]
    },
    {
      icon: <Phone className="w-6 h-6 md:w-8 h-8" />,
      title: "Direct Lines",
      details: ["+91 9876543210", "+91 8765432109"]
    },
    {
      icon: <Mail className="w-6 h-6 md:w-8 h-8" />,
      title: "Official Correspondence",
      details: ["info@UDUGIRIindustry.com", "support@UDUGIRIindustry.com"]
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 h-8" />,
      title: "Operational Hours",
      details: ["Mon - Fri: 9 AM - 6 PM", "Sat: 9 AM - 2 PM", "Sun: Closed"]
    }
  ];

  const offices = [
    {
      city: "Bangalore",
      tag: "Head Office",
      address: "Tech Park, Innovation Hub, Bangalore - 560001",
      phone: "+91 9876543210",
      email: "bangalore@UDUGIRIindustry.com"
    }
  ];

  const contactFAQs = [
    {
      question: "What is the best way to get in touch for urgent technical support?",
      answer: "For urgent technical support, please call our dedicated support hotline. Our technical team is available 24/7 for critical enterprise issues."
    },
    {
      question: "Do you provide on-site consultations and assessments?",
      answer: "Yes, we provide on-site industrial audits across India. Our engineers visit your facility to assess current systems and provide ROI-driven recommendations."
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- ELITE GREEN BANNER --- */}
      <section className="relative min-h-[40vh] md:h-[60vh] flex items-center bg-slate-950 px-4 py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Contact Us" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Headphones className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Connect with our experts</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              Get In <span className="text-emerald-400">Touch.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 font-medium max-w-xl">
              Ready to modernize your operations? Our team is standing by to provide technical consultations and project quotes.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM & INFO --- */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-200 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tight">Send a Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-sm"
                    placeholder="Full Name"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-sm"
                    placeholder="Phone Number"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-sm"
                  placeholder="Corporate Email"
                />
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-sm"
                >
                  <option value="">Select Department</option>
                  <option value="services">Industry 4.0 Solutions</option>
                  <option value="training">Training Programs</option>
                  <option value="quote">Project Quote</option>
                  <option value="support">Technical Support</option>
                </select>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-sm resize-none"
                  placeholder="Describe your requirements..."
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Contact Details</h2>
              <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-emerald-200 transition-all">
                  <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-3 text-slate-900">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-xs font-bold text-slate-500">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale opacity-50"
                alt="Map Placeholder"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/10 backdrop-blur-[2px]">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-tight">Main HQ</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- OFFICE LOCATIONS --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter">Regional Offices</h2>
            <div className="h-1 w-16 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-2xl transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-black uppercase">{office.city}</h3>
                  <span className="text-[8px] font-black px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md tracking-tighter uppercase">
                    {office.tag}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start text-xs font-bold text-slate-500">
                    <MapPin className="text-emerald-500 shrink-0" size={16} />
                    {office.address}
                  </div>
                  <div className="flex gap-3 items-center text-xs font-bold text-slate-500">
                    <Phone className="text-emerald-500 shrink-0" size={16} />
                    {office.phone}
                  </div>
                  <div className="flex gap-3 items-center text-xs font-bold text-slate-500">
                    <Mail className="text-emerald-500 shrink-0" size={16} />
                    {office.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <FAQ title="Contact Support FAQs" faqs={contactFAQs} />
      </div>

      {/* --- CTA --- */}
      <div className="py-12 md:py-24 container mx-auto px-4 md:px-6">
        <div className="bg-slate-950 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-4">Start Your <br />Transformation.</h2>
            <p className="text-slate-400 font-medium">Book a discovery call with our solutions architects.</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all relative z-10 w-full md:w-auto flex items-center justify-center gap-3">
            Schedule Call <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Contact;