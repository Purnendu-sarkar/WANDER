'use client';

import { journalStories } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';

export default function TravelJournal() {
  return (
    <section id="journal" className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-lime" />
            <span className="text-xs tracking-[0.3em] text-cream/50">
              TRAVEL JOURNAL
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-16 text-[10vw] font-bold leading-[0.9] tracking-tighter text-cream md:mb-24 md:text-[5vw]">
            STORIES FROM
            <br />
            THE ROAD.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {journalStories.map((story, i) => (
            <FadeIn key={story.number} delay={i * 0.1}>
              <article className="group cursor-pointer">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm">Read story</span>
                    <span>→</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-cream/40">
                  <span className="text-lime">{story.number}</span>
                  <span>{story.location}</span>
                  <span>·</span>
                  <span>{story.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-cream transition-colors group-hover:text-lime md:text-2xl">
                  {story.title}
                </h3>
                <p className="mt-2 text-sm text-cream/50">{story.excerpt}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
