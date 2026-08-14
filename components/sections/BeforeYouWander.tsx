'use client';

import { Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { faqs } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';
import MagneticButton from '../ui/MagneticButton';

export default function BeforeYouWander() {
  return (
    <section id="faq" className="relative border-t border-cream/10 bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-lime" />
              <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                Before You Wander
              </span>
            </div>
          </FadeIn>
          <TextReveal
            as="h2"
            text={'QUESTIONS, ANSWERED\nHONESTLY.'}
            className="font-syne text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="border-t border-cream/10">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger className="gap-4 py-6 text-left hover:no-underline [&>svg]:text-cream/40 [&[data-state=open]>svg]:text-lime">
                    <span className="shrink-0 font-mono text-xs tracking-widest text-lime">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                    <span className="font-display text-lg font-semibold tracking-tight text-cream md:text-xl">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-10 text-sm leading-relaxed text-cream/60 md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Concierge card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <FadeIn delay={0.15}>
                <div className="relative overflow-hidden rounded-3xl bg-lime p-8 text-ink md:p-10">
                  <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ink/10 blur-2xl" />
                  <Sparkles className="h-8 w-8" />
                  <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                    Still curious?
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">
                    Every journey begins with a quiet question. Ask ours before
                    you book — a real human replies within a day, never a bot.
                  </p>
                  <div className="mt-8">
                    <MagneticButton>
                      <a
                        href="#journal"
                        className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-lime transition-colors hover:bg-cream hover:text-ink"
                      >
                        Write To Us
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </MagneticButton>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}