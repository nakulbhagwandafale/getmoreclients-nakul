import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import ContactPage from '@/pages/ContactPage';
import WorkPage from '@/pages/WorkPage';
import PageTransition from './components/PageTransition';
import './index.css';
import StarField from './components/ui/StarField';



// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>

      <StarField />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
