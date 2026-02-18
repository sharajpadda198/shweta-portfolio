import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title scale animation
      gsap.from(titleRef.current, {
        scale: 0.85,
        opacity: 0.2,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          end: 'center center',
          scrub: 1.5,
        },
      });

      // Contact grid fade in
      gsap.from(contactRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-dark py-40 lg:py-56 px-8 lg:px-16"
    >
      <div className="max-w-[1900px] mx-auto">
        {/* Massive Title - Exact jaeco.fr */}
        <div className="mb-40 lg:mb-48 overflow-hidden">
          <h2
            ref={titleRef}
            className="text-[19vw] sm:text-[16vw] lg:text-[13rem] xl:text-[16rem] 2xl:text-[18rem] font-heading font-bold text-light leading-[0.8] text-center uppercase"
            style={{ letterSpacing: '-0.045em' }}
          >
            Let's Create<br />Together
          </h2>
        </div>

        {/* Contact Grid */}
        <div
          ref={contactRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-40 border-t border-light/8 pt-24"
        >
          {/* Email */}
          <div>
            <p className="text-xs font-body text-light/35 mb-5 uppercase tracking-[0.25em]">
              Email
            </p>
            <a
              href="mailto:sp19dec@gmail.com"
              className="text-2xl lg:text-3xl xl:text-4xl font-body text-light hover:text-accent transition-colors duration-400 break-words block"
              style={{ letterSpacing: '-0.01em' }}
            >
              sp19dec@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-xs font-body text-light/35 mb-5 uppercase tracking-[0.25em]">
              Phone
            </p>
            <a
              href="tel:07389000884"
              className="text-2xl lg:text-3xl xl:text-4xl font-body text-light hover:text-accent transition-colors duration-400"
              style={{ letterSpacing: '-0.01em' }}
            >
              07389000884
            </a>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs font-body text-light/35 mb-5 uppercase tracking-[0.25em]">
              Location
            </p>
            <p className="text-2xl lg:text-3xl xl:text-4xl font-body text-light leading-[1.4]" style={{ letterSpacing: '-0.01em' }}>
              Bhilai, CG<br />490020
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 lg:gap-10 justify-center mb-24">
          <a
            href="#"
            className="text-base lg:text-lg font-body text-light/45 hover:text-accent transition-colors duration-400 uppercase tracking-[0.15em]"
          >
            LinkedIn
          </a>
          <span className="text-light/20">•</span>
          <a
            href="#"
            className="text-base lg:text-lg font-body text-light/45 hover:text-accent transition-colors duration-400 uppercase tracking-[0.15em]"
          >
            Instagram
          </a>
          <span className="text-light/20">•</span>
          <a
            href="#"
            className="text-base lg:text-lg font-body text-light/45 hover:text-accent transition-colors duration-400 uppercase tracking-[0.15em]"
          >
            IMDb
          </a>
          <span className="text-light/20">•</span>
          <a
            href="#"
            className="text-base lg:text-lg font-body text-light/45 hover:text-accent transition-colors duration-400 uppercase tracking-[0.15em]"
          >
            Facebook
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light/8 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-xs">
          <p className="text-light/35 font-body tracking-[0.15em] uppercase">
            © SHWETA PADDA 2026 — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-10">
            <a
              href="#"
              className="text-light/35 hover:text-accent transition-colors duration-400 font-body tracking-[0.1em] uppercase"
            >
              / Privacy /
            </a>
            <a
              href="#"
              className="text-light/35 hover:text-accent transition-colors duration-400 font-body tracking-[0.1em] uppercase"
            >
              / Terms /
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
