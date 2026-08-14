"use client";

import { principles, philosophyPullLine } from "../../data/destinations";
import FadeIn from "../animations/FadeIn";
import TextReveal from "../animations/TextReveal";
import Parallax from "../animations/Parallax";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden border-t border-cream/10 bg-ink py-28 md:py-40"
    >
      {/* Background outline word (drifts as you scroll) */}
      <Parallax
        speed={0.18}
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="wander-outline select-none whitespace-nowrap text-[16vw] font-bold leading-none tracking-tighter">
          ATTENTION
        </span>
      </Parallax>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-lime" />
              <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                The Wander Way — Our Promise
              </span>
            </div>
          </FadeIn>

          <TextReveal
            as="h2"
            text={"TRAVEL IS THE ART\nOF PAYING\nATTENTION"}
            className="font-syne text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl"
          />
        </div>

        {/* Principles */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {principles.map((principle, i) => (
            <FadeIn key={principle.number} delay={i * 0.12}>
              <div className="group border-t border-cream/10 pt-8 transition-colors duration-500 hover:border-lime/40">
                <span className="font-mono text-sm tracking-widest text-lime">
                  [{principle.number}]
                </span>
                <h3 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-cream md:text-6xl">
                  {principle.title}
                </h3>
                <p className="mt-3 font-serif-editorial text-xl italic text-lime/80">
                  {principle.tagline}
                </p>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/50 transition-colors duration-500 group-hover:text-cream/75">
                  {principle.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pull line */}
        <FadeIn delay={0.15}>
          <div className="mt-28 border-t border-cream/10 pt-14 text-center">
            <p className="font-serif-editorial text-2xl italic text-cream/80 sm:text-4xl">
              {philosophyPullLine}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
