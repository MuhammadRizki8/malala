// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import DestinationDetail from './pages/DestinationDetail';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // Durasi animasi
  once: true, // Animasi hanya berjalan sekali
});

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations/detail" element={<DestinationDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
