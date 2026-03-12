import { useState } from 'react';
import FAQ from '../components/FAQ'; // assuming you have this component
import {
  Mail, Phone, MapPin, Clock, Send,
  Headphones, ArrowRight
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
    alert('Thank you for your inquiry. Our team will respond shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Headquarters",
      details: [
        "#109/2, 4th Cross, Ashwathnagar",
        "RMV 2nd Stage, Sanjayanagar",
        "Bangalore – 560094, Karnataka, India"
      ]
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+91 XXXXX XXXXX"] // Replace with real number
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@udugiritech.com"] // Add support@ if needed
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9 AM - 6 PM", "Sat: 9 AM - 2 PM", "Sun: Closed"]
    }
  ];

  const offices = [
    {
      city: "Bangalore",
      tag: "Head Office",
      address: "#109/2, 4th Cross, Ashwathnagar, RMV 2nd Stage, Sanjayanagar, Bangalore – 560094",
      phone: "+91 XXXXX XXXXX",
      email: "info@udugiritech.com"
    }
    // Add more offices if you expand later
  ];

  const contactFAQs = [
    {
      question: "What is the best way to get in touch for urgent technical support?",
      answer: "For urgent technical support, please call our dedicated hotline. Our team is available for critical issues."
    },
    {
      question: "Do you provide on-site consultations and assessments?",
      answer: "Yes, we offer on-site industrial audits and consultations across India for automation, digitization, and quality projects."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Banner - simple, professional */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-25"
            alt="UDUGIRI Technologies background"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-5">
            <Headphones className="w-4 h-4" />
            Connect with UDUGIRI Team
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Get In Touch
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Inquire about industrial automation, Industry 4.0/5.0 solutions, skill labs, testing services, MSME consulting, or training programs.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="bg-white p-7 md:p-9 rounded-xl border border-slate-200">
                <h2 className="text-2xl font-semibold mb-6">Send Your Inquiry</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 outline-none text-sm"
                      placeholder="Your Name"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 outline-none text-sm"
                      placeholder="Phone Number"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 outline-none text-sm"
                    placeholder="Email Address"
                  />

                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 outline-none text-sm"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="automation">Industrial Automation Solutions</option>
                    <option value="industry40">Industry 4.0 / 5.0 Consulting</option>
                    <option value="msme">MSME Digitization & ZED</option>
                    <option value="testing">Testing & Calibration Services</option>
                    <option value="skill">Skill Labs & Training Programs</option>
                    <option value="other">General / Other</option>
                  </select>

                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 outline-none text-sm resize-none"
                    placeholder="Describe your requirements or project..."
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-indigo-700 text-white py-3 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2"
                  >
                    Submit Inquiry <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition"
                  >
                    <div className="text-indigo-600 mb-3">{info.icon}</div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">{info.title}</h3>
                    <div className="space-y-1 text-sm text-slate-600">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simple map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 h-64 relative">
                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000"
                  className="w-full h-full object-cover opacity-70 grayscale"
                  alt="Bangalore location"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
                  <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3 text-sm">
                    <MapPin className="text-indigo-600 w-5 h-5" />
                    <div>
                      <p className="font-semibold">UDUGIRI Technologies</p>
                      <p className="text-slate-500 text-xs">Bangalore, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
            <div className="w-12 h-0.5 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{office.city}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded">
                    {office.tag}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex gap-2 items-start">
                    <MapPin className="text-indigo-600 w-4 h-4 mt-0.5 shrink-0" />
                    {office.address}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Phone className="text-indigo-600 w-4 h-4 shrink-0" />
                    {office.phone}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Mail className="text-indigo-600 w-4 h-4 shrink-0" />
                    {office.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FAQ title="Frequently Asked Questions" faqs={contactFAQs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Ready to Collaborate?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Reach out for consultations on automation, skill labs, MSME transformation, testing, or training initiatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-indigo-800 transition flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-indigo-600 text-indigo-300 px-8 py-3 rounded-lg font-medium text-sm hover:bg-indigo-950/40 transition">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;