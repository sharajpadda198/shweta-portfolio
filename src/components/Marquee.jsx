import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector('.marquee-content');
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    const totalWidth = marqueeContent.offsetWidth;

    const animation = gsap.to(marquee.children, {
      x: -totalWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    });

    // Fade in on scroll
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
      if (clone && clone.parentNode) clone.parentNode.removeChild(clone);
    };
  }, []);

  const items = [
    'Mrs. India 2014-15',
    'Critic\'s Choice Best Actress',
    'Mrs. Asia Talent Award',
    'Benevolent Award',
    'District Kabaddi Player',
    'Projets Ambitieux',
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-dark border-y border-light/8 overflow-hidden">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="marquee-content flex items-center">
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              <span
                className="text-[8vw] lg:text-6xl xl:text-7xl font-heading font-bold text-light/15 uppercase mx-6 lg:mx-10"
                style={{ letterSpacing: '-0.02em' }}
              >
                {item}
              </span>
              <span className="text-accent text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
