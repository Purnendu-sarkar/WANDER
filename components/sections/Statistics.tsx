'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from '../../data/destinations';

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative bg-ink py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="border-t border-cream/10 pt-8">
              <div className="text-[18vw] font-bold leading-none tracking-tighter text-cream md:text-[8vw]">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  start={isInView}
                  delay={i * 0.2}
                />
              </div>
              <div className="mt-4 text-sm tracking-[0.3em] text-cream/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({
  target,
  suffix,
  start,
  delay,
}: {
  target: number;
  suffix: string;
  start: boolean;
  delay: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, target, {
      duration: 2,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, target, delay]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}
