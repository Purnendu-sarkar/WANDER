'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';

export default function Experiences() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative bg-ink py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-lime" />
            <span className="text-xs tracking-[0.3em] text-cream/50">
              TRAVEL FOR
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-20 text-[10vw] font-bold leading-[0.9] tracking-tighter text-cream md:mb-32 md:text-[5vw]">
            THE EXPERIENCE.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, i) => (
            <ExperienceRow
              key={exp.number}
              exp={exp}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  exp,
  index,
  scrollYProgress,
}: {
  exp: (typeof experiences)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = 0.2 + index * 0.2;
  const end = start + 0.15;

  const letterSpacing = useTransform(
    scrollYProgress,
    [start, end],
    ['0.5em', '0em']
  );
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start + 0.05, end],
    [0.15, 1, 1]
  );

  return (
    <div className="flex flex-col items-start gap-4 border-t border-cream/10 pt-8 md:flex-row md:items-baseline md:gap-12 md:pt-12">
      <span className="text-sm tracking-[0.3em] text-lime">{exp.number}</span>
      <motion.h3
        style={{ letterSpacing, opacity }}
        className="text-[12vw] font-bold tracking-tight text-cream md:text-[6vw]"
      >
        {exp.title}
      </motion.h3>
      <motion.p
        style={{ opacity }}
        className="max-w-xs text-base text-cream/60 md:ml-auto md:text-right"
      >
        {exp.description}
      </motion.p>
    </div>
  );
}
