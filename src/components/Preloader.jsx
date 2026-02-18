import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Animate out after reaching 100% - jaeco.fr style
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.to(percentRef.current, {
        scale: 1.15,
        duration: 0.25,
        ease: 'power2.out',
      })
        .to(progressBarRef.current, {
          scaleX: 0,
          transformOrigin: 'right',
          duration: 0.5,
          ease: 'power3.in',
        }, '-=0.1')
        .to(preloaderRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
        }, '-=0.25')
        .set(preloaderRef.current, {
          display: 'none',
        });
    }
  }, [progress, onComplete]);

  useEffect(() => {
    // Animate progress bar
    gsap.to(progressBarRef.current, {
      scaleX: Math.min(progress, 100) / 100,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [progress]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-dark z-[10000] flex flex-col items-center justify-center"
    >
      <div
        ref={percentRef}
        className="text-[20vw] lg:text-[16rem] xl:text-[18rem] font-heading font-bold text-light mb-20 tabular-nums leading-none"
        style={{ letterSpacing: '-0.04em' }}
      >
        {Math.floor(progress)}%
      </div>
      <div className="w-[90vw] sm:w-[32rem] lg:w-[40rem] h-[2px] bg-light/8 rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-accent origin-left rounded-full"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  );
};

export default Preloader;
