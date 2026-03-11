import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Cpu, Activity, LayoutGrid } from 'lucide-react';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header transparency
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
    { name: 'About', href: '/about' },
    { name: 'Industry 4.0', href: '/industry' },
    {
      name: 'Services',
      dropdown: [
        { name: 'Products & Solutions', href: '/products' },
        { name: 'Labs & Infrastructure', href: '/labs' },
        { name: 'Consultancy', href: '/consultancy' },
        { name: 'Innovation & IPR', href: '/innovation' },
      ]
    },
    { name: 'Training', href: '/training' },
    { name: 'MSME', href: '/msme' },
    { name: 'Contact', href: '/contact', primary: true },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]">
              <Cpu className="text-slate-950 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight leading-none">UDUGIRI</h1>
              <p className="text-[10px] text-emerald-400 font-bold tracking-[0.2em] uppercase">Industries</p>
            </div>
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
                  <button className="flex items-center px-4 py-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                    {item.name} <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    to={item.href} 
                    className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                      item.primary 
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 ml-4' 
                      : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-slate-900 border border-white/10 rounded-2xl mt-2 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="flex items-center px-4 py-3 text-sm text-slate-400 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-all"
                      >
                        <Activity className="w-4 h-4 mr-3 opacity-50" />
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
            className="lg:hidden p-2 text-white hover:text-emerald-400"
          >
            <LayoutGrid className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* --- MOBILE DRAWER (SIDEBAR) --- */}
      <div className={`fixed inset-0 z-[60] transition-visibility ${isDrawerOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsDrawerOpen(false)}
        />
        
        {/* Drawer Content */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-slate-900 shadow-2xl transition-transform duration-500 transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <span className="text-xs font-black text-emerald-500 tracking-[0.3em] uppercase">Navigation</span>
              <button onClick={() => setIsDrawerOpen(false)} className="p-2 text-white bg-white/5 rounded-full hover:bg-emerald-500 hover:text-slate-950 transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 space-y-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4">{item.name}</p>
                      <div className="space-y-2 pl-4">
                        {item.dropdown.map((sub) => (
                          <Link key={sub.name} to={sub.href} className="block text-xl font-bold text-white hover:text-emerald-400">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.href} 
                      className={`block text-2xl font-bold px-4 ${item.primary ? 'text-emerald-500' : 'text-white hover:text-emerald-400'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/5">
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Empowering the 4th Industrial Revolution with autonomous intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;