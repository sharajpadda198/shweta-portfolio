import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);
  const menuFooterRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 2.8, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.to(menuRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 0.8,
        ease: 'power4.inOut',
      })
        .from(
          menuLinksRef.current.filter(Boolean),
          { y: 80, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
          '-=0.3'
        )
        .from(
          menuFooterRef.current,
          { y: 30, opacity: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        );
    } else {
      document.body.style.overflow = '';
      gsap.to(menuRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        duration: 0.6,
        ease: 'power3.inOut',
      });
    }
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 700);
  };

  const menuItems = [
    { label: 'ACCUEIL', id: 'hero' },
    { label: 'À PROPOS', id: 'about' },
    { label: 'PROJETS', id: 'projects' },
    { label: 'PARCOURS', id: 'journey' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <>
      {/* Navigation Bar - jaeco.fr style: logo left, hamburger right, mix-blend-difference */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[200] px-6 lg:px-12 py-5 lg:py-7 flex items-center justify-between mix-blend-difference"
      >
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="text-base lg:text-lg font-heading font-bold text-white uppercase"
          style={{ letterSpacing: '0.12em' }}
        >
          SHWETA PADDA
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[300] w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
          aria-label="Menu"
        >
          <span className={`block w-7 h-[2px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-7 h-[2px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </nav>

      {/* Full-Screen Menu Overlay - jaeco.fr style */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[150] bg-dark flex flex-col"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
      >
        <div className="absolute top-5 lg:top-7 right-20 lg:right-24 z-10">
          <span className="text-[10px] font-body text-light/40 uppercase tracking-[0.25em]">CLOSE</span>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-16 pt-28 lg:pt-0">
          <div className="flex-1 flex flex-col gap-1">
            {menuItems.map((item, i) => (
              <a
                key={item.id}
                ref={(el) => (menuLinksRef.current[i] = el)}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className="group flex items-center py-2 lg:py-3 overflow-hidden"
              >
                <span className="text-[11vw] sm:text-[9vw] lg:text-[5.5vw] xl:text-[5vw] font-heading font-bold text-light uppercase leading-[1.1] group-hover:text-accent transition-colors duration-300" style={{ letterSpacing: '-0.02em' }}>
                  {item.label}
                </span>
                <span className="hidden lg:inline-block text-[5.5vw] xl:text-[5vw] font-heading font-bold text-transparent group-hover:text-light/15 transition-colors duration-300 ml-4 leading-[1.1]" style={{ letterSpacing: '-0.02em', WebkitTextStroke: '1px rgba(251,251,251,0)' }}>
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <div ref={menuFooterRef} className="lg:w-72 mt-10 lg:mt-0 pb-8 lg:pb-0">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-body text-light/35 uppercase tracking-[0.25em] mb-3">SOCIAL</p>
                <div className="flex flex-col gap-1.5">
                  {['Instagram', 'YouTube', 'IMDb'].map((s) => (
                    <a key={s} href="#" className="text-sm font-body text-light/60 hover:text-accent transition-colors duration-300 uppercase tracking-wider">{s}</a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-body text-light/35 uppercase tracking-[0.25em] mb-3">CONTACT</p>
                <a href="mailto:contact@shwetapadda.com" className="text-sm font-body text-light/60 hover:text-accent transition-colors duration-300">contact@shwetapadda.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-16 py-5 border-t border-light/8 flex items-center justify-between">
          <p className="text-[10px] font-body text-light/25 uppercase tracking-[0.15em]">© SHWETA PADDA 2025 — All rights reserved</p>
          <div className="flex gap-5">
            <a href="#" className="text-[10px] font-body text-light/25 hover:text-light/50 transition-colors uppercase tracking-wider">/ Privacy /</a>
            <a href="#" className="text-[10px] font-body text-light/25 hover:text-light/50 transition-colors uppercase tracking-wider">/ Terms /</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
