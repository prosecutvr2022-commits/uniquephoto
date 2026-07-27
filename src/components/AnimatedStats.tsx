import React, { useState, useEffect, useRef } from 'react';
import { Users, Camera, Award, Star, HeartHandshake } from 'lucide-react';

export const AnimatedStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: 1500,
      suffix: '+',
      label: 'Happy Clients',
      subtext: 'Couples & Families across TN'
    },
    {
      icon: Camera,
      value: 2500,
      suffix: '+',
      label: 'Events Covered',
      subtext: 'Weddings, Recs & Galas'
    },
    {
      icon: Award,
      value: 10,
      suffix: '+ Years',
      label: 'Master Experience',
      subtext: 'Award-winning photo craft'
    },
    {
      icon: Star,
      value: 5,
      suffix: '-Star',
      label: 'Customer Reviews',
      subtext: 'Verified Google & FB Ratings'
    },
    {
      icon: HeartHandshake,
      value: 100,
      suffix: '%',
      label: 'Satisfaction',
      subtext: 'Guaranteed Timely Delivery'
    }
  ];

  return (
    <section ref={sectionRef} className="relative z-20 py-12 bg-[#0F0F0F] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center hover:border-[#D4AF37]/50 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>

                <div className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    trigger={isVisible}
                  />
                </div>

                <div className="text-sm font-semibold text-[#D4AF37] tracking-wide mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-gray-400 font-light hidden sm:block">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  suffix: string;
  trigger: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, suffix, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, trigger]);

  return (
    <span>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};
