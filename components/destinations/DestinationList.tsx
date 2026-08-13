'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { destinations } from '../../data/destinations';
import { TextReveal } from '../animations/TextReveal';

const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * A plain editorial index of places — the interaction, not chrome, does the
 * selling: hovering a name summons its image beside the cursor.
 */
export function DestinationList() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 350, damping: 40, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 350, damping: 40, mass: 0.4 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    rawX.set(event.clientX - bounds.left);
    rawY.set(event.clientY - bounds.top);
  };

  return (
    <section
      id="explore"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative border-t border-bone/10 bg-ink py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <TextReveal
            as="h2"
            text={'WHERE WILL YOU\nGO NEXT?'}
            className="font-display text-[10vw] font-extrabold leading-[0.86] tracking-tightest text-bone lg:text-[6.5vw]"
          />

          <p className="max-w-xs text-[13px] leading-relaxed text-bone/45">
            Five routes currently open for 2026. Hover a name to see where it takes
            you.
          </p>
        </div>

        <ul className="mt-16 border-t border-bone/10">
          {destinations.map((destination, index) => (
            <li key={destination.name}>
              <a
                href="#top"
                onMouseEnter={() => setHovered(index)}
                onFocus={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onBlur={() => setHovered(null)}
                className="group flex items-baseline gap-6 border-b border-bone/10 py-6 transition-colors duration-200 ease-expo hover:border-bone/30 lg:gap-10 lg:py-8"
              >
                <span className="w-8 shrink-0 text-[11px] tracking-[0.2em] text-bone/35">
                  {destination.number}
                </span>
                <span className="font-display text-[9vw] font-extrabold leading-none tracking-tightest text-bone/55 transition-[color,transform] duration-200 ease-expo group-hover:translate-x-2 group-hover:text-bone lg:text-[5vw]">
                  {destination.name}
                </span>
                <span className="ml-auto hidden shrink-0 text-[11px] uppercase tracking-[0.2em] text-bone/35 md:block">
                  {destination.country}
                </span>
                <ArrowUpRightIcon
                  className="h-5 w-5 shrink-0 text-bone/30 transition-[color,transform] duration-200 ease-expo group-hover:-translate-y-1 group-hover:text-acid"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cursor-following preview (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <motion.div
          className="absolute h-[26rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{ x, y }}
        >
          <AnimatePresence>
            {hovered !== null && (
              <motion.img
                key={destinations[hovered].name}
                src={destinations[hovered].image}
                alt=""
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 0.96, clipPath: 'inset(16% 0 16% 0)' }}
                animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0 0% 0)' }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default DestinationList;
