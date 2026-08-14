'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { heroImage } from '../../data/destinations';
import MagneticButton from '../ui/MagneticButton';
import Image from 'next/image';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={loaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 2.5, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={heroImage}
          alt="Cinematic mountain landscape"
          className="h-full w-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />
      </motion.div>

      {/* Background giant outline text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.span
          className="wander-outline select-none text-[40vw] font-bold leading-none tracking-tighter md:text-[22vw]"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 2 }}
        >
          WANDER
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 md:px-12 md:pb-16">
        {/* Top metadata */}
        <motion.div
          className="flex items-start justify-between"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="text-xs tracking-[0.3em] text-cream/50">
            EXPLORE
            <br />
            <span className="text-cream/80">01 / 08</span>
          </div>
          <div className="text-right text-xs tracking-[0.3em] text-cream/50">
            MOUNTAINS
            <br />
            <span className="text-cream/80">HIMALAYAS</span>
          </div>
        </motion.div>

        {/* Center heading */}
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-[18vw] font-bold leading-[0.85] tracking-tighter text-cream md:text-[14vw]"
            initial={{ opacity: 0, y: 60 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            GO BEYOND
            <br />
            <span className="text-lime">PLACES.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-sm text-cream/70 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Discover extraordinary places, unforgettable experiences, and
            stories worth taking home.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <MagneticButton>
              <a
                href="#destinations"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-cream"
              >
                Explore Destinations
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </MagneticButton>
            <a
              href="#about"
              className="text-sm text-cream/60 underline-offset-4 transition-colors hover:text-cream hover:underline"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          className="flex items-end justify-between"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <div className="text-xs tracking-[0.2em] text-cream/50">
            27°59&apos; N
            <br />
            86°55&apos; E
          </div>
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
          >
            <span className="text-xs tracking-[0.2em] text-cream/40">
              SCROLL
            </span>
            <div className="h-10 w-px bg-cream/30" />
          </motion.div>
          <div className="text-right text-xs tracking-[0.2em] text-cream/50">
            EST. 2026
            <br />
            <span className="text-cream/80">WANDER</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
