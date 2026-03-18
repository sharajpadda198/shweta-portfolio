import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SideNav from './SideNav';

const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Initial entry animation for the Navbar
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 2.8, ease: 'power3.out' }
    );
  }, []);

  // 2. Lock body scroll when the SideNav is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function to ensure scrolling is restored if component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Helper function for smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3. Proper component return statement
  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[200] px-6 lg:px-12 py-5 lg:py-7 flex items-center justify-between mix-blend-difference"
      >
        <a
          href="#hero"
          onClick={(e) => { 
            e.preventDefault(); 
            scrollToSection('hero'); 
          }}
          className="text-base lg:text-lg font-heading font-bold text-white uppercase"
          style={{ letterSpacing: '0.12em' }}
        >
          SHWETA PADDA
        </a>

        {/* Hamburger Icon for SideNav */}
        <button
          onClick={() => setMenuOpen(true)}
          className="relative z-[300] w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
          aria-label="Menu"
        >
          <span className="block w-7 h-[2px] bg-white transition-transform group-hover:scale-110" />
          <span className="block w-7 h-[2px] bg-white transition-transform group-hover:scale-110" />
          <span className="block w-7 h-[2px] bg-white transition-transform group-hover:scale-110" />
        </button>
      </nav>

      {/* Render your imported SideNav component */}
      <SideNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;