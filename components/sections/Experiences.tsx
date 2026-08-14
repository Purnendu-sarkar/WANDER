'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { experiences, ExperienceItem } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import { 
  Compass, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  X,
  Layers
} from 'lucide-react';
import Image from 'next/image';

export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedExperience]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const activeExp = experiences[activeIndex];

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative min-h-screen bg-ink py-28 md:py-40 overflow-hidden"
    >
      {/* Dynamic atmospheric gradient background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial from-lime/30 via-lime/5 to-transparent blur-[140px]" />
      </motion.div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <FadeIn>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-lime" />
                <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                  Curated Expeditions & Moods
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream leading-[1.05]">
                TRAVEL FOR <br className="hidden sm:inline" />
                <span className="font-serif-editorial italic font-normal text-lime">The Pure Essence</span> OF BEING
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="max-w-md text-base text-cream/70 leading-relaxed font-light">
              Each experience is hand-crafted around atmospheric discovery, ancient cultural reverence and transformative quietude.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Experience Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive List / Accordion */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {experiences.map((exp, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={exp.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => {
                    setActiveIndex(i);
                    setIsPlayingAudio(false);
                  }}
                  className={`group relative cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-500 border ${
                    isActive
                      ? 'bg-ink-100/90 border-lime/40 shadow-[0_10px_30px_-15px_rgba(217,255,90,0.15)]'
                      : 'bg-ink/40 border-cream/10 hover:border-cream/25 hover:bg-ink-100/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm tracking-widest ${isActive ? 'text-lime' : 'text-cream/40'}`}>
                        [{exp.number}]
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-cream/5 text-cream/70 border border-cream/10 uppercase">
                        {exp.tag}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      className={`text-sm ${isActive ? 'text-lime' : 'text-cream/30 group-hover:text-cream/70'}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-syne text-2xl sm:text-3xl font-bold tracking-tight text-cream flex items-baseline gap-3">
                      <span>{exp.title}</span>
                      <span className="font-serif-editorial text-lg sm:text-xl font-normal italic text-lime/80">
                        — {exp.highlightText}
                      </span>
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-cream/60 line-clamp-2 leading-relaxed">
                      {exp.subtitle}
                    </p>
                  </div>

                  {/* Expanded Mini Info when Active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden pt-6 mt-6 border-t border-cream/10"
                      >
                        <p className="text-sm text-cream/80 leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-6 text-xs text-cream/60">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-lime" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-lime" />
                              {exp.bestSeason}
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedExperience(exp);
                            }}
                            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-lime hover:text-white transition-colors group/btn"
                          >
                            <span>VIEW EXPEDITION GUIDE</span>
                            <Sparkles className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Visual Atmosphere Canvas */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-cream/15 group shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.number}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeExp.image}
                    alt={activeExp.title}
                    className="h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80" />
                </motion.div>
              </AnimatePresence>

              {/* Top Soundscape Audio Bar Simulation */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
                <button
                  onClick={toggleAudio}
                  className="glass-panel px-4 py-2 rounded-full flex items-center gap-3 hover:bg-cream/15 transition-all text-xs font-mono text-cream"
                >
                  {isPlayingAudio ? (
                    <Volume2 className="w-4 h-4 text-lime animate-pulse" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-cream/50" />
                  )}
                  <span>{isPlayingAudio ? 'AMBIENT PLAYING' : 'LISTEN SOUNDSCAPE'}</span>
                  
                  {isPlayingAudio && (
                    <div className="flex items-end gap-0.5 h-3 ml-1">
                      <span className="w-0.5 bg-lime soundwave-bar" />
                      <span className="w-0.5 bg-lime soundwave-bar" />
                      <span className="w-0.5 bg-lime soundwave-bar" />
                      <span className="w-0.5 bg-lime soundwave-bar" />
                    </div>
                  )}
                </button>

                <div className="glass-panel px-3 py-1.5 rounded-full text-[11px] font-mono text-cream/70 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-lime" />
                  <span>{activeExp.difficulty}</span>
                </div>
              </div>

              {/* Bottom Card Spotlight Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-20 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lime animate-ping" />
                  <span className="font-mono text-xs tracking-widest text-lime uppercase">
                    {activeExp.audioAmbientTitle}
                  </span>
                </div>

                <h4 className="font-serif-editorial text-3xl sm:text-4xl text-cream font-normal italic leading-snug">
                  &quot;{activeExp.subtitle}&quot;
                </h4>

                <div className="pt-2 flex items-center justify-between gap-4 border-t border-cream/10">
                  <div className="flex items-center gap-2 flex-wrap">
                    {activeExp.highlights.slice(0, 3).map((h, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded bg-cream/10 text-cream/80">
                        • {h}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedExperience(activeExp)}
                    className="p-3 rounded-full bg-lime text-ink hover:bg-white transition-colors shrink-0 shadow-lg"
                    title="View Experience Details"
                  >
                    <Layers className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Experience Details Modal Dialog */}
      <AnimatePresence>
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
              className="absolute inset-0 bg-ink/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              data-lenis-prevent
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain bg-ink-100 border border-cream/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-cream"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm text-lime">[{selectedExperience.number}]</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-lime/10 text-lime border border-lime/30 uppercase">
                  {selectedExperience.tag}
                </span>
              </div>

              <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-cream">
                {selectedExperience.title}
              </h2>
              <p className="font-serif-editorial text-2xl text-lime italic mt-1">
                {selectedExperience.subtitle}
              </p>

              {/* Image Preview Banner */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden my-6 border border-cream/10">
                <Image
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  className="h-full w-full object-cover"
                  width={500}
                  height={500}
                />
              </div>

              {/* Full Description */}
              <p className="text-base sm:text-lg text-cream/80 leading-relaxed font-light mb-8">
                {selectedExperience.fullDescription}
              </p>

              {/* Highlights & Metadata Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-ink/60 border border-cream/10 mb-8">
                <div>
                  <h4 className="font-mono text-xs tracking-widest text-lime uppercase mb-4">
                    Expedition Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedExperience.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-cream/90">
                        <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-mono text-cream/50 uppercase">Duration & Pace</span>
                    <span className="text-sm font-semibold text-cream">{selectedExperience.duration} — {selectedExperience.difficulty}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-cream/50 uppercase">Best Window</span>
                    <span className="text-sm font-semibold text-cream">{selectedExperience.bestSeason}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-cream/50 uppercase">Ambient Soundscape</span>
                    <span className="text-sm font-semibold text-lime">{selectedExperience.audioAmbientTitle}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-cream/10">
                <button
                  onClick={() => {
                    setSelectedExperience(null);
                    const el = document.getElementById('footer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-lime text-ink font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>REQUEST INVITATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <span className="text-xs font-mono text-cream/40">
                  Limited to 8 Explorers Per Journey
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
