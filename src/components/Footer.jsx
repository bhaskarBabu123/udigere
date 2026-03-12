import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Linkedin, Twitter, Facebook, 
  Instagram, Youtube, ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">UDUGIRI Technologies</h3>
                <p className="text-sm text-indigo-400 font-medium">Industry 4.0 / 5.0 Solutions</p>
              </div>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering Industries & Institutions through Automation, Innovation and Advanced Skill Development.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/industry" className="text-slate-400 hover:text-indigo-400 transition-colors">Industry 4.0 / 5.0</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-indigo-400 transition-colors">Products & Solutions</Link></li>
              <li><Link to="/training" className="text-slate-400 hover:text-indigo-400 transition-colors">Training Programs</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-slate-400 hover:text-indigo-400 transition-colors">Industrial Automation</Link></li>
              <li><Link to="/msme" className="text-slate-400 hover:text-indigo-400 transition-colors">MSME Consulting & ZED</Link></li>
              <li><Link to="/labs" className="text-slate-400 hover:text-indigo-400 transition-colors">Skill Innovation Labs</Link></li>
              <li><Link to="/consultancy" className="text-slate-400 hover:text-indigo-400 transition-colors">Consultancy Services</Link></li>
              <li><Link to="/innovation" className="text-slate-400 hover:text-indigo-400 transition-colors">Research & Innovation</Link></li>
              <li><Link to="/testing-calibration" className="text-slate-400 hover:text-indigo-400 transition-colors">Testing & Calibration</Link></li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  #109/2, 4th Cross,<br />
                  Ashwathnagar, RMV 2nd Stage,<br />
                  Sanjayanagar, Bangalore – 560094<br />
                  Karnataka, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                <a href="mailto:info@udugiritech.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  info@udugiritech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} UDUGIRI Technologies. All rights reserved.
          </p>
          {/* <div className="mt-2 flex justify-center gap-6">
            <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;