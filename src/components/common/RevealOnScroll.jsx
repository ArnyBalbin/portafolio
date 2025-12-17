import { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const transitionClasses = `transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return (
    <div ref={ref} className={transitionClasses} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default RevealOnScroll;