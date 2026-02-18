import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const services = [
    {
      number: '01',
      title: 'ACTING & PERFORMANCE',
      subtitle: 'POUR RACONTER DES HISTOIRES',
      description: 'Leading roles in feature films, webseries, and television productions across multiple platforms. From Broadway-style musicals to screen.',
      cta: 'DISCOVER',
    },
    {
      number: '02',
      title: 'CREATIVE PRODUCTION',
      subtitle: 'POUR CREER DU BEAU',
      description: 'Bringing creative visions to life through thoughtful production, from concept to final output across all media.',
      cta: 'DISCOVER',
    },
    {
      number: '03',
      title: 'EDUCATION & TEACHING',
      subtitle: 'POUR TRANSMETTRE',
      description: 'Educating and inspiring young minds with creative methodologies. English, EVS & Social Science at Pinegrove School.',
      cta: 'DISCOVER',
    },
    {
      number: '04',
      title: 'WORKSHOPS & TRAINING',
      subtitle: 'POUR APPRENDRE',
      description: 'Diagnostiquer, eclairer et transmettre. Adapting interventions to your level, your rhythm and your goals.',
      cta: 'DISCOVER',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.from(item, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-32 lg:py-44 px-6 lg:px-12 bg-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-xs lg:text-sm font-body text-light/40 uppercase tracking-[0.3em] mb-6">SERVICES</h2>
          <div className="w-12 h-[2px] bg-accent" />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl font-body text-light/60 leading-[1.6] max-w-3xl mb-16 font-light">
          My services span across performing arts, education, and creative production,
          adapted to each project and each vision.
        </p>

        {/* Service Items - jaeco.fr numbered list style */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="border-t border-light/8 last:border-b group cursor-pointer hover:bg-light/[0.02] transition-all duration-500"
            >
              <div className="py-10 lg:py-14 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                {/* Number */}
                <div className="lg:w-20 shrink-0">
                  <span className="text-sm font-body text-light/25 uppercase tracking-wider">
                    {service.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-light leading-[1] uppercase group-hover:text-accent transition-colors duration-500 mb-2"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg font-body text-light/50 leading-[1.6] mt-4 max-w-xl">
                    {service.description}
                  </p>
                </div>

                {/* Subtitle badge */}
                <div className="lg:w-60 shrink-0 flex items-start pt-1">
                  <span className="text-[10px] font-body text-accent uppercase tracking-[0.2em] font-bold">
                    {service.subtitle}
                  </span>
                </div>

                {/* CTA */}
                <div className="lg:w-32 shrink-0 flex items-start pt-1">
                  <span className="text-[10px] font-body text-light/30 uppercase tracking-[0.2em] group-hover:text-light/60 group-hover:tracking-[0.3em] transition-all duration-500">
                    {service.cta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
