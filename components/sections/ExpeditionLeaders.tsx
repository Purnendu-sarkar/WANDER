'use client';

import Image from 'next/image';
import { MapPin, Languages, Clock, Compass } from 'lucide-react';
import { leaders } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';

export default function ExpeditionLeaders() {
  return (
    <section id="leaders" className="relative border-t border-cream/10 bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-lime" />
                <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                  The Expedition Team
                </span>
              </div>
            </FadeIn>
            <TextReveal
              as="h2"
              text={'WANDER WITH PEOPLE\nWHO STAY'}
              className="font-syne text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl"
            />
          </div>

          <FadeIn delay={0.15}>
            <p className="max-w-xs text-sm leading-relaxed text-cream/50">
              No rotating freelancers. Every guest is accompanied by the same
              local lead from first request to last airfare.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, i) => (
            <FadeIn key={leader.number} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-100/50 transition-all duration-500 hover:-translate-y-1 hover:border-lime/30">
                {/* Portrait */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={leader.avatar}
                    alt={leader.name}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-100 via-transparent to-transparent opacity-60" />
                  <span className="absolute left-5 top-5 rounded-full border border-cream/15 bg-ink/70 px-3 py-1 font-mono text-[11px] tracking-widest text-lime backdrop-blur-md">
                    {leader.number}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-cream">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono tracking-widest text-lime">
                    {leader.role}
                  </p>

                  <dl className="mt-5 space-y-2.5 text-[11px] uppercase tracking-[0.16em] text-cream/45">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-cream/30" />
                      <span>{leader.home}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="h-3.5 w-3.5 text-cream/30" />
                      <span>{leader.languages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Compass className="h-3.5 w-3.5 text-cream/30" />
                      <span>{leader.expertise}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-cream/30" />
                      <span>{leader.years} on the ground</span>
                    </div>
                  </dl>

                  <blockquote className="mt-6 border-t border-cream/10 pt-4 text-sm italic leading-relaxed text-cream/50 transition-colors duration-500 group-hover:text-cream/75">
                    &ldquo;{leader.quote}&rdquo;
                  </blockquote>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}