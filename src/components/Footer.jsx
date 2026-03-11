import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">N4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">UDUGIRI Industry</h3>
                <p className="text-sm text-gray-400">4.0 / 5.0 Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Smart Manufacturing & Intelligent Automation through Industry 4.0 and 5.0 transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/industry" className="text-gray-300 hover:text-blue-400 transition-colors">Industry 4.0 / 5.0</Link></li>
              <li><Link to="/technologies" className="text-gray-300 hover:text-blue-400 transition-colors">Technologies</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Products & Solutions</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-blue-400 transition-colors">Training</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/consultancy" className="text-gray-300 hover:text-blue-400 transition-colors">Consultancy</Link></li>
              <li><Link to="/innovation" className="text-gray-300 hover:text-blue-400 transition-colors">Innovation & IPR</Link></li>
              <li><Link to="/labs" className="text-gray-300 hover:text-blue-400 transition-colors">Labs & Infrastructure</Link></li>
              <li><Link to="/collaboration" className="text-gray-300 hover:text-blue-400 transition-colors">Academia Collaboration</Link></li>
              <li><Link to="/msme" className="text-gray-300 hover:text-blue-400 transition-colors">MSME Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Tech Park, Innovation Hub<br />
                  Bangalore, Karnataka - 560001
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-gray-300">+91 9876543210</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-gray-300">info@UDUGIRIindustry.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 UDUGIRI Industry 4.0 / 5.0 Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;