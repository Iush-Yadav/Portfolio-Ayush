import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Particles from './components/Particles';
import SplashCursor from './components/SplashCursor';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Optimized Splash Cursor Effect */}
      <SplashCursor
        SIM_RESOLUTION={64} // Reduced for better performance
        DYE_RESOLUTION={512} // Reduced for better performance
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        PRESSURE_ITERATIONS={15} // Reduced iterations
        CURL={2} // Reduced curl
        SPLAT_RADIUS={0.15} // Reduced radius
        SPLAT_FORCE={4000} // Reduced force
        SHADING={false} // Disabled for performance
        COLOR_UPDATE_SPEED={5} // Reduced update speed
        TRANSPARENT={true}
      />

      {/* Optimized Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#3b82f6', '#8b5cf6', '#06b6d4', '#ffffff']}
          particleCount={60} // Reduced count
          particleSpread={15}
          speed={0.02} // Reduced speed
          particleBaseSize={40} // Reduced size
          moveParticlesOnHover={false} // Disabled for performance
          particleHoverFactor={0.2}
          alphaParticles={true}
          disableRotation={false}
          sizeRandomness={0.4}
          cameraDistance={25}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;