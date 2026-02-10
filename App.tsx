import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/sections/Preloader';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Testimonials from './components/sections/Testimonials';
import CTABanner from './components/sections/CTABanner';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background text-text-main font-body selection:bg-primary selection:text-black">
      <CustomCursor />
      
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Services />
            <Process />
            <Projects />
            <TechStack />
            <Testimonials />
            <CTABanner />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;