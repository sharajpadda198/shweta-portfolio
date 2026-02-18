import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const statistics = [
    { number: '10+', label: 'Years in Entertainment' },
    { number: '50+', label: 'Productions & Projects' },
    { number: '5', label: 'Major Awards' },
    { number: '1000+', label: 'Performances' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.from(stat, {
            opacity: 0,
            y: 60,
            duration: 1,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-48 lg:py-56 px-10 lg:px-20 bg-dark border-t border-b border-light/8"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
          {statistics.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center"
            >
              <div
                className="text-6xl lg:text-8xl xl:text-9xl font-heading font-bold text-accent mb-6 leading-none"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.number}
              </div>
              <div className="text-sm lg:text-base xl:text-lg font-body text-light/65 uppercase tracking-[0.22em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
