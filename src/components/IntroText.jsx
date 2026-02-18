import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroText = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.4,
        ease: 'power4.out',
      }, '-=0.4')
      .from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.6');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-44 px-6 lg:px-12 bg-dark relative overflow-hidden"
    >
      {/* Decorative image area - jaeco.fr has a visual element here */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[80%] opacity-[0.03]">
        <div className="w-full h-full bg-accent" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div ref={labelRef} className="mb-8">
          <span className="text-[10px] lg:text-xs font-body text-accent uppercase tracking-[0.3em] font-bold">
            SPOTLIGHT
          </span>
        </div>

        <h2
          ref={titleRef}
          className="text-[8vw] sm:text-[7vw] lg:text-[4.5vw] xl:text-[4vw] font-heading font-bold text-light leading-[1.05] uppercase mb-6"
          style={{ letterSpacing: '-0.02em' }}
        >
          ATTIRER L'ATTENTION<br />EST DIFFICILE.
        </h2>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl font-body text-light/55 leading-[1.5] font-light max-w-2xl"
        >
          La conserver l'est encore plus.
        </p>
      </div>
    </section>
  );
};

export default IntroText;
