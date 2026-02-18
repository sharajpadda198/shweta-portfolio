import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const testimonialsRef = useRef([]);

  const testimonials = [
    {
      quote: "Shweta brings an incredible energy and dedication to every role. Her performance in our production was absolutely captivating.",
      author: "Director, Broadway Musical",
      role: "Theatre Director",
    },
    {
      quote: "A true professional with exceptional talent. Her commitment to the craft is evident in every scene.",
      author: "Producer, ZeeTV",
      role: "Television Producer",
    },
    {
      quote: "Working with Shweta was an absolute pleasure. She brings authenticity and depth to every character.",
      author: "Film Director",
      role: "Feature Film",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      testimonialsRef.current.forEach((testimonial, index) => {
        if (testimonial) {
          gsap.from(testimonial, {
            opacity: 0,
            y: 80,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonial,
              start: 'top 80%',
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
      className="py-56 lg:py-64 px-10 lg:px-20 bg-dark"
    >
      <div className="max-w-[1800px] mx-auto">
        <h2
          className="text-[14vw] lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem] font-heading font-bold text-light leading-[0.8] mb-40 uppercase"
          style={{ letterSpacing: '-0.04em' }}
        >
          What They<br />Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialsRef.current[index] = el)}
              className="border-l-[3px] border-accent pl-10 lg:pl-12"
            >
              <p className="text-2xl lg:text-3xl xl:text-4xl font-body text-light/95 leading-[1.55] mb-10 italic font-light">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-xl lg:text-2xl font-body text-light font-semibold mb-2">
                  {testimonial.author}
                </p>
                <p className="text-sm lg:text-base font-body text-light/55 uppercase tracking-[0.2em]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
