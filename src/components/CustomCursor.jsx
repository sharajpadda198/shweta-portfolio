import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        gsap.to(cursor, {
          scale: 3.5,
          duration: 0.4,
          ease: 'power3.out',
        });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-7 h-7 bg-accent rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-90"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-light rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
