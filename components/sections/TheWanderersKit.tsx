'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { packingKit } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';

export default function TheWanderersKit() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const total = packingKit.reduce((n, c) => n + c.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const statusLine =
    done === total
      ? 'Perfectly packed. The bag closes on the first try.'
      : pct > 0
        ? 'Good start. The trail rewards the prepared.'
        : 'Nothing checked yet. Take your time — this is half the journey.';

  return (
    <section id="kit" className="relative border-t border-cream/10 bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-lime" />
              <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                The Field Manual
              </span>
            </div>
          </FadeIn>
          <TextReveal
            as="h2"
            text={'PACK FOR THE PLACE\nYOU ARE GOING TO FEEL.'}
            className="font-syne text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky progress side */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="border-t border-cream/10 pt-8">
                <span className="text-xs font-mono tracking-[0.3em] text-cream/50 uppercase">
                  Preparedness
                </span>
                <div className="mt-4 flex items-end gap-2">
                  <span className="font-display text-8xl font-extrabold leading-none tracking-tight text-cream">
                    {done}
                  </span>
                  <span className="pb-2 font-mono text-sm text-cream/40">
                    / {total}
                  </span>
                </div>
                <div className="mt-6 h-px w-full bg-cream/15">
                  <motion.div
                    className="h-px bg-lime"
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="mt-6 text-sm leading-relaxed text-cream/50">
                  {statusLine}
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-8">
            {packingKit.map((category) => (
              <div
                key={category.id}
                className="border-t border-cream/10 py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-cream">
                    <span className="mr-3 font-mono text-sm tracking-widest text-lime">
                      [{category.number}]
                    </span>
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cream/40">
                    {category.note}
                  </span>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {category.items.map((item) => {
                    const key = `${category.id}-${item.label}`;
                    const isChecked = !!checked[key];
                    return (
                      <li key={key}>
                        <button
                          onClick={() => toggle(key)}
                          className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                            isChecked
                              ? 'border-lime/30 bg-ink-100/70'
                              : 'border-cream/10 bg-ink/40 hover:border-cream/25'
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                              isChecked
                                ? 'border-lime bg-lime text-ink'
                                : 'border-cream/25 text-transparent group-hover:border-lime/60'
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="flex flex-col">
                            <span
                              className={`text-sm font-medium transition-colors duration-300 ${
                                isChecked
                                  ? 'text-cream/40 line-through'
                                  : 'text-cream'
                              }`}
                            >
                              {item.label}
                            </span>
                            <span className="mt-1 text-xs leading-relaxed text-cream/40">
                              {item.detail}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}