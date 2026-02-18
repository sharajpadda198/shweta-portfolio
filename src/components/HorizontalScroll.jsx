import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);

  const projects = [
    {
      title: 'MUGHAL-E-AZAM',
      subtitle: '& UMRAOJAAN',
      category: 'Theatre',
      tags: ['Broadway', 'Musical', 'Lead Role'],
      stats: [
        { value: '+500', label: 'Shows performed' },
        { value: '+50K', label: 'Audience members' },
      ],
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071',
    },
    {
      title: 'DUR SE',
      subtitle: 'NAMASTE',
      category: 'Webseries',
      tags: ['UNICEF', 'Digital', 'Social Impact'],
      stats: [
        { value: '1X', label: 'UNICEF Featured' },
        { value: '+100K', label: 'Views' },
      ],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059',
    },
    {
      title: 'MITHAYI',
      subtitle: '',
      category: 'Television',
      tags: ['ZeeTV', 'Drama', 'Lead Role'],
      stats: [
        { value: '+1M', label: 'Viewers' },
        { value: '+200', label: 'Episodes' },
      ],
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070',
    },
    {
      title: 'MOSSO',
      subtitle: '',
      category: 'Film',
      tags: ['Cinema', 'Feature', 'Acting'],
      stats: [
        { value: '1X', label: 'Award Nominated' },
        { value: '+10K', label: 'Theatre viewers' },
      ],
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

    gsap.from(headerRef.current, {
      opacity: 0, y: 40, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth + 800}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(scrollContainer, { x: -scrollWidth, ease: 'none' });

    return () => { tl.kill(); };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="overflow-hidden bg-dark">
      {/* Section Header */}
      <div ref={headerRef} className="px-6 lg:px-12 pt-32 lg:pt-40 pb-12">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between">
          <div>
            <h2 className="text-xs lg:text-sm font-body text-light/40 uppercase tracking-[0.3em] mb-6">PROJETS</h2>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-[10px] font-body text-light/30 uppercase tracking-[0.2em]">Scroll horizontally</span>
            <span className="text-light/20">&rarr;</span>
          </div>
        </div>
      </div>

      {/* Status Bar - jaeco.fr style */}
      <div className="px-6 lg:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto flex items-center gap-6 border-t border-light/8 pt-6">
          <span className="text-[10px] font-body text-light/25 uppercase tracking-[0.2em]">Statut</span>
          <span className="text-[10px] font-body text-accent uppercase tracking-[0.2em]">SHWETA WORK</span>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="h-[75vh] flex items-center">
        <div ref={scrollContainerRef} className="flex gap-8 lg:gap-10 px-6 lg:px-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[70vw] lg:min-w-[580px] xl:min-w-[640px] h-[62vh] bg-[#1c1c1a] group cursor-pointer relative overflow-hidden flex flex-col"
            >
              {/* Tags row */}
              <div className="px-6 pt-5 pb-4 flex flex-wrap gap-2 border-b border-light/6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 text-[10px] font-body text-light/60 uppercase tracking-[0.15em] border border-light/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Main content area */}
              <div className="flex-1 flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-44 lg:h-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-dark/30" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-body text-light/50 uppercase tracking-[0.2em]">[{project.category}]</span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-light leading-[0.95] uppercase group-hover:text-accent transition-colors duration-500" style={{ letterSpacing: '-0.02em' }}>
                      {project.title}
                      {project.subtitle && <><br />{project.subtitle}</>}
                    </h3>
                  </div>

                  {/* Stats */}
                  <div className="mt-auto pt-6 space-y-3 border-t border-light/8">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex items-baseline justify-between">
                        <span className="text-2xl lg:text-3xl font-heading font-bold text-accent" style={{ letterSpacing: '-0.02em' }}>
                          {stat.value}
                        </span>
                        <span className="text-[10px] font-body text-light/40 uppercase tracking-[0.15em]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-5">
                    <span className="text-[11px] font-body text-light/50 uppercase tracking-[0.2em] group-hover:text-accent group-hover:tracking-[0.3em] transition-all duration-500">
                      VOIR LE PROJET
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="min-w-[15vw]" />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
