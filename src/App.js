
import React from 'react';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ProgressBar from './components/common/ProgressBar';
// import CustomCursor from './components/common/CustomCursor';
import AnimatedBackground from './components/layout/AnimatedBackground';
import MobileMenu from './components/layout/MobileMenu';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useActiveSection } from './hooks/useActiveSection';
// import { useMousePosition } from './hooks/useMousePosition';
import './App.css';

const App = () => {
  const scrollProgress = useScrollProgress();
  const { activeSection, isMenuOpen, setIsMenuOpen } = useActiveSection();
  // const mousePosition = useMousePosition();

  return (
    <div className="portfolio-container">
      <AnimatedBackground />
      <ProgressBar progress={scrollProgress} />
      {/* <CustomCursor position={mousePosition} /> */}
      
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <MobileMenu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {scrollProgress > 0.2 && <ScrollToTop />}
    </div>
  );
};

export default App;