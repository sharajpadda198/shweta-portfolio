import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Grain from './components/Grain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroText from './components/IntroText';
import About from './components/About';
import HorizontalScroll from './components/HorizontalScroll';
import Stats from './components/Stats';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scrolling after preloader
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <IntroText />
        <About />
        <HorizontalScroll />
        <Stats />
        <Journey />
        <Testimonials />
        <Marquee />
        <Footer />
      </main>
    </>
  );
}

export default App;
