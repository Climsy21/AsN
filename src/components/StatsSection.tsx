import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: 7,
      label: 'Years Experience',
      suffix: '+'
    },
    {
      number: 5000,
      label: 'Happy Clients',
      suffix: '+'
    },
    {
      number: 100,
      label: 'Daily Updates',
      suffix: '+'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ targetNumber, suffix }: { targetNumber: number; suffix: string }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCurrentNumber(targetNumber);
          clearInterval(timer);
        } else {
          setCurrentNumber(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, targetNumber]);

    return (
      <span className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
        {currentNumber.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                <AnimatedNumber targetNumber={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-xl md:text-2xl text-white/80 font-medium drop-shadow-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;