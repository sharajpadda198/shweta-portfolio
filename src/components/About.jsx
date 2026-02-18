import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current.querySelectorAll('.animate-item');
      gsap.from(elements, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 lg:py-44 px-6 lg:px-12 bg-dark"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label - jaeco.fr uses small heading labels */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-xs lg:text-sm font-body text-light/40 uppercase tracking-[0.3em] mb-6">
            L'ARTISTE
          </h2>
          <div className="w-12 h-[2px] bg-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20" ref={contentRef}>
          {/* Left - Tagline */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="animate-item text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-accent leading-[1.1] uppercase" style={{ letterSpacing: '-0.02em' }}>
                Créer du beau<br />qui a du sens.
              </p>
              <p className="animate-item mt-3 text-sm font-body text-light/30 uppercase tracking-[0.15em]">
                Shweta Padda
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 space-y-8">
            <p className="animate-item text-xl md:text-2xl lg:text-3xl font-body text-light/90 leading-[1.55] font-light">
              <span className="text-accent font-semibold">Bienvenue !</span> I am a hardworking, dedicated and confident artist. I work towards
              my goal with positivity and sheer coherence. My creative personality has 
              made me showcase my talent in performing arts as an actress.
            </p>
            
            <p className="animate-item text-base md:text-lg lg:text-xl font-body text-light/65 leading-[1.7]">
              From the grand stages of Broadway-style musicals to the intimate
              world of film and television, I've dedicated my career to bringing
              stories to life. My journey spans across Indian cinema, theatre,
              and education, where I continue to inspire and create.
            </p>

            <p className="animate-item text-base md:text-lg lg:text-xl font-body text-light/55 leading-[1.7]">
              Créativité, précision et sens : bringing authenticity and depth to every character,
              every stage, every classroom.
            </p>

            <div className="animate-item pt-6">
              <a
                href="#projects"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-xs font-body text-accent uppercase tracking-[0.2em] font-bold group-hover:tracking-[0.3em] transition-all duration-500">
                  LET'S GO !
                </span>
                <span className="text-sm font-body text-light/50 uppercase tracking-[0.15em] group-hover:text-accent transition-colors duration-300">
                  DISCOVER MORE
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
