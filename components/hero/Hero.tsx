'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroImage, destinations } from '../../data/destinations';
import MagneticButton from '../ui/MagneticButton';
import Image from 'next/image';
import { Volume2, VolumeX, Sparkles, Compass, MapPin, ArrowUpRight } from 'lucide-react';

const HERO_SCENES = [
  {
    id: 'himalayas',
    number: '01',
    name: 'HIMALAYAS',
    country: 'Nepal / Tibet',
    title: 'GO BEYOND',
    highlight: 'PLACES',
    subtitle: 'Discover extraordinary places, atmospheric sanctuaries and field stories worth taking home',
    coordinates: "27°59' N  86°55' E",
    elevation: '5,364 M',
    temp: '-4°C CLEAR',
    image: heroImage,
  },
  {
    id: 'patagonia',
    number: '02',
    name: 'PATAGONIA',
    country: 'Argentina / Chile',
    title: 'ENDLESS',
    highlight: 'HORIZONS',
    subtitle: 'Where towering granite spires pierce turquoise glacial fjords and wind sings ancient songs',
    coordinates: destinations[0]?.coordinates || "49°18' S  73°02' W",
    elevation: '3,375 M',
    temp: '-1°C WINDY',
    image: destinations[0]?.image || '/6d133e20-a92c-4446-9e08-d84367a3db4c.jpg',
  },
  {
    id: 'kyoto',
    number: '03',
    name: 'KYOTO',
    country: 'Japan',
    title: 'SILENT',
    highlight: 'TRADITIONS',
    subtitle: 'Step through bamboo fog and centuries of reverent stillness beneath autumn leaves and cherry blossoms',
    coordinates: destinations[1]?.coordinates || "35°01' N  135°46' E",
    elevation: '848 M',
    temp: '12°C MISTY',
    image: destinations[1]?.image || '/055e4b9a-a541-4dba-be91-f4561f939e36.jpg',
  },
  {
    id: 'iceland',
    number: '04',
    name: 'ICELAND',
    country: 'Nordic Frontier',
    title: 'UNREAL',
    highlight: 'WILDERNESS',
    subtitle: 'Dance under cosmic auroras where volcanic black sands meet frozen waterfalls and glacial lagoons',
    coordinates: destinations[3]?.coordinates || "64°08' N  21°56' W",
    elevation: '1,446 M',
    temp: '-6°C AURORA',
    image: destinations[3]?.image || '/2a9df3a5-33c7-40d6-93e0-dc784a0680dc.jpg',
  },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 250);
    return () => clearTimeout(t);
  }, []);

  // Auto rotate scene every 8 seconds unless user interacts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev + 1) % HERO_SCENES.length);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  const activeScene = HERO_SCENES[currentSceneIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink select-none">
      {/* Background Animated Image Scene Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScene.id}
          className="absolute inset-0"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={activeScene.image}
            alt={activeScene.name}
            className="h-full w-full object-cover"
            priority
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-ink/20 to-ink/80 opacity-90" />
        </motion.div>
      </AnimatePresence>

      {/* Background Giant Outline Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <motion.span
          className="wander-outline select-none text-[35vw] font-extrabold leading-none tracking-tighter opacity-20 md:text-[22vw]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={loaded ? { opacity: 0.25, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          WANDER
        </motion.span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-28 md:px-12 md:pb-12">
        {/* Top Telemetry & Glass Header Bar */}
        <motion.div
          className="flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Left Glass Telemetry Badge */}
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-3 text-xs font-mono text-cream/80 backdrop-blur-md">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              <span className="text-lime font-semibold">EXPEDITION [{activeScene.number}]</span>
            </span>
            <span className="hidden sm:inline text-cream/30">•</span>
            <span className="hidden sm:inline text-cream/70">{activeScene.name}, {activeScene.country}</span>
          </div>

          {/* Right Controls: Ambient Audio Player & Telemetry */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-xs font-mono text-cream hover:bg-cream/15 transition-all"
            >
              {isPlayingAudio ? (
                <Volume2 className="w-3.5 h-3.5 text-lime animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-cream/50" />
              )}
              <span className="hidden sm:inline">
                {isPlayingAudio ? 'ATMOSPHERE: ACTIVE' : 'LISTEN SOUNDSCAPE'}
              </span>
              {isPlayingAudio && (
                <div className="flex items-end gap-0.5 h-3 ml-1">
                  <span className="w-0.5 bg-lime soundwave-bar" />
                  <span className="w-0.5 bg-lime soundwave-bar" />
                  <span className="w-0.5 bg-lime soundwave-bar" />
                </div>
              )}
            </button>

            <div className="hidden lg:flex items-center gap-3 glass-panel px-4 py-2 rounded-full text-xs font-mono text-cream/60">
              <Compass className="w-3.5 h-3.5 text-lime" />
              <span>{activeScene.coordinates}</span>
              <span>•</span>
              <span className="text-lime">{activeScene.temp}</span>
            </div>
          </div>
        </motion.div>

        {/* Center Main Heading & Narrative */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto my-auto py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScene.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/5 border border-cream/10 text-[11px] font-mono tracking-[0.3em] text-cream/70 uppercase">
                 <VolumeX className="w-3 h-3 text-lime" />  
                <span>UNCHARTED SANCTUARIES 2026</span>
              </div>

              <h1 className="font-syne text-[14vw] sm:text-[10vw] md:text-[8vw] font-extrabold leading-[0.88] tracking-tighter text-cream">
                {activeScene.title} <br className="hidden sm:inline" />
                <span className="font-serif-editorial italic font-normal text-lime underline decoration-lime/30 underline-offset-8">
                  {activeScene.highlight}
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm sm:text-base text-cream/75 leading-relaxed font-light">
                {activeScene.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <MagneticButton>
              <a
                href="#destinations"
                className="group inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-white shadow-[0_10px_30px_-10px_rgba(217,255,90,0.3)]"
              >
                <span>EXPLORE SANCTUARIES</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </MagneticButton>

            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-4 text-sm font-mono text-cream hover:bg-cream/15 transition-all border border-cream/15"
            >
              <MapPin className="w-4 h-4 text-lime" />
              <span>OUR PHILOSOPHY</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Interactive Scene Selector Pills & Coordinates */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-cream/10"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Coordinates & Elevation */}
          <div className="flex items-center gap-6 text-xs font-mono text-cream/50 tracking-widest">
            <div>
              <span className="block text-[10px] text-cream/30 uppercase">COORDINATES</span>
              <span className="text-cream/80">{activeScene.coordinates}</span>
            </div>
            <div className="h-6 w-px bg-cream/10" />
            <div>
              <span className="block text-[10px] text-cream/30 uppercase">ALTITUDE</span>
              <span className="text-lime">{activeScene.elevation}</span>
            </div>
          </div>

          {/* Interactive Scene Pill Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
            {HERO_SCENES.map((scene, idx) => {
              const isActive = idx === currentSceneIndex;
              return (
                <button
                  key={scene.id}
                  onClick={() => setCurrentSceneIndex(idx)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-cream/15 text-cream border border-lime/50 shadow-[0_0_15px_rgba(217,255,90,0.15)]'
                      : 'bg-ink/40 text-cream/40 border border-cream/5 hover:text-cream/80 hover:bg-cream/5'
                  }`}
                >
                  <span className={isActive ? 'text-lime font-bold' : 'text-cream/40'}>
                    [{scene.number}]
                  </span>
                  <span>{scene.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="heroSceneActivePill"
                      className="absolute inset-0 rounded-full border border-lime/60 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="hidden md:flex items-center gap-3 text-xs font-mono text-cream/40 tracking-widest"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="h-8 w-px bg-gradient-to-b from-lime via-cream/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
