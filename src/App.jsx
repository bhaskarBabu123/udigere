import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
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
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/students" element={<Students />} />
            <Route path="/msme" element={<MSME />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;