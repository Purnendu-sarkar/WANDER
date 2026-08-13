'use client';

import { useState, useRef, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';

export default function DestinationList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="explore"
      className="relative bg-ink py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-lime" />
            <span className="text-xs tracking-[0.3em] text-cream/50">
              EXPLORE THE WORLD
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-16 text-[10vw] font-bold leading-[0.9] tracking-tighter text-cream md:mb-24 md:text-[5vw]">
            WHERE WILL YOU
            <br />
            GO NEXT?
          </h2>
        </FadeIn>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_500px]"
        >
          {/* List */}
          <div className="flex flex-col">
            {destinations.map((dest, i) => (
              <button
                key={dest.number}
                onMouseEnter={() => setActiveIndex(i)}
                className="group flex items-baseline gap-6 border-t border-cream/10 py-6 text-left transition-colors last:border-b md:py-8"
              >
                <span className="text-sm text-cream/40 transition-colors group-hover:text-lime">
                  {dest.number}
                </span>
                <span className="flex-1 text-[8vw] font-bold tracking-tight text-cream/40 transition-all duration-300 group-hover:text-cream md:text-[3.5vw]">
                  {dest.name}
                </span>
                <span className="hidden text-sm text-cream/30 transition-colors group-hover:text-lime md:block">
                  {dest.country}
                </span>
                <span className="text-cream/20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-lime">
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Hover preview - desktop */}
          <div className="relative hidden h-[500px] w-full overflow-hidden rounded-lg lg:block">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
                style={{
                  transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
                }}
              >
                <img
                  src={destinations[activeIndex].image}
                  alt={destinations[activeIndex].name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                  <div className="text-xs tracking-[0.2em] text-lime">
                    {destinations[activeIndex].coordinates}
                  </div>
                  <div className="mt-1 text-2xl font-bold text-cream">
                    {destinations[activeIndex].name}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
