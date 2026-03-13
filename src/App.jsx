import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Industry from './pages/Industry';
import Technologies from './pages/Technologies';
import Products from './pages/Products';
import Labs from './pages/Labs';
import Consultancy from './pages/Consultancy';
import Innovation from './pages/Innovation';
import Training from './pages/Training';
import Collaboration from './pages/Collaboration';
import Students from './pages/Students';
import MSME from './pages/MSME';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ClientsPartners from './pages/ClientsPartners';
import NewsEvents from './pages/NewsEvents';
import Careers from './pages/Careers';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import { ArrowRight } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        <Header />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/products" element={<Products />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/training" element={<Training />} />
            <Route path="/clients" element={<ClientsPartners />} />
            <Route path="/blogs" element={<NewsEvents />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/students" element={<Students />} />
            <Route path="/msme" element={<MSME />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/+919900506684"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-slow"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-10 h-10"
          />
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-28 right-6 z-50 w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-110 ${
            showScrollTop
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-7 h-7 rotate-[-90deg]" />
        </button>
      </div>
    </Router>
  );
}

export default App;