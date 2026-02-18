import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.4 });

      // Image reveal
      tl.from(imageWrapRef.current, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        duration: 1.4,
        ease: 'power4.inOut',
      })
      .from(imageRef.current, {
        scale: 1.4,
        duration: 1.8,
        ease: 'power3.out',
      }, '-=1.2')
      // Headline text reveal
      .from(headlineRef.current?.querySelectorAll('.hero-line') || [], {
        y: '110%',
        duration: 1.2,
        stagger: 0.12,
        ease: 'power4.out',
      }, '-=1.2')
      .from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

      // Parallax on scroll
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const hero = heroRef.current;
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        if (rect.bottom > 0) {
          if (imageRef.current) {
            gsap.set(imageRef.current, { y: scrolled * 0.3 });
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-end overflow-hidden bg-dark"
    >
      {/* Right-side Image - jaeco.fr style composition */}
      <div
        ref={imageWrapRef}
        className="absolute right-0 top-0 w-[55%] lg:w-[45%] h-full overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            filter: 'brightness(0.85) contrast(1.05)',
          }}
        />
        {/* Gradient fade to left */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Content - large headline on left */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-16 lg:pb-20">
        <div ref={headlineRef} className="max-w-[1400px]">
          {/* Small tagline above */}
          <div ref={badgeRef} className="mb-6 lg:mb-8">
            <span className="inline-block text-[10px] lg:text-xs font-body text-light/50 uppercase tracking-[0.3em] border border-light/15 px-4 py-2">
              Actress • Producer • Educator
            </span>
          </div>

          {/* Main Headline - jaeco.fr uses huge text anchored to bottom */}
          <div className="overflow-hidden">
            <h1 className="hero-line text-[14vw] sm:text-[12vw] lg:text-[9vw] xl:text-[8.5vw] font-heading font-bold text-light leading-[0.9] uppercase" style={{ letterSpacing: '-0.03em' }}>
              UNE ARTISTE
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line text-[14vw] sm:text-[12vw] lg:text-[9vw] xl:text-[8.5vw] font-heading font-bold text-accent leading-[0.9] uppercase" style={{ letterSpacing: '-0.03em' }}>
              À VOTRE
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line text-[14vw] sm:text-[12vw] lg:text-[9vw] xl:text-[8.5vw] font-heading font-bold text-light leading-[0.9] uppercase" style={{ letterSpacing: '-0.03em' }}>
              IMAGE
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll indicator - bottom right */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20 flex items-center gap-3">
        <span className="text-[10px] font-body text-light/40 uppercase tracking-[0.2em] rotate-90 origin-center">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-light/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
