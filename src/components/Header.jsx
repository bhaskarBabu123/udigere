import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Cpu, Activity, LayoutGrid, LucideMenu } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Industry 4.0', href: '/industry' },
    {
      name: 'Services',
      dropdown: [
        { name: 'Industrial Solutions', href: '/products' },
        { name: 'MSME Consulting', href: '/msme' },
        { name: 'Skill Innovation Labs', href: '/labs' },
        { name: 'Consultancy', href: '/consultancy' },
        { name: 'Research & Innovation', href: '/innovation' },
        { name: 'Training Programs', href: '/training' }
      ]
    },
    {
      name: 'Company',
      dropdown: [
        { name: 'Clients & Partners', href: '/clients' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact', primary: true },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Logo w={60}/>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-700 transition-colors">
                    {item.name} 
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    to={item.href} 
                    className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                      item.primary 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 ml-4' 
                        : 'text-slate-700 hover:text-indigo-700 hover:bg-indigo-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu - Light theme */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-7 left-0 w-64 bg-white border border-slate-200 rounded-xl mt-2 p-2 shadow-xl animate-in fade-in slide-in-from-top-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="flex items-center px-4 py-3 text-sm text-slate-700 hover:text-white hover:bg-indigo-700 rounded-lg transition-all"
                      >
                        <Activity className="w-4 h-4 mr-3 text-indigo-400 opacity-70" />
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2 text-slate-700 hover:text-indigo-700"
          >
            <LucideMenu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer - Light theme + Scrollable */}
      <div className={`fixed inset-0 z-[60] transition-visibility ${isDrawerOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsDrawerOpen(false)}
        />
        
        {/* Drawer Content - Light theme, scrollable */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-500 transform ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto`}
        >
          <div className="p-6 flex flex-col min-h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <Logo w={60}/>
              <button 
                onClick={() => setIsDrawerOpen(false)} 
                className="p-3 text-slate-600 hover:text-indigo-700 rounded-full hover:bg-indigo-50 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Navigation */}
            <nav className="flex-1 space-y-2 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.dropdown ? (
                    <>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
                        {item.name}
                      </p>
                      <div className="space-y-1 pl-3">
                        {item.dropdown.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.href}
                            className="flex items-center px-3 py-3 text-base font-medium text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-all"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            <Activity className="w-4 h-4 mr-3 text-indigo-500" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link 
                      to={item.href} 
                      className={`block px-3 py-3 text-base font-medium rounded-lg transition-all ${
                        item.primary 
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                          : 'text-slate-800 hover:text-indigo-700 hover:bg-indigo-50'
                      }`}
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 text-center">
                Empowering Industries & Institutions through Automation, Innovation & Skills
              </p>
              <p className="text-xs text-slate-400 text-center mt-2">
                © {new Date().getFullYear()} UDUGIRI Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;