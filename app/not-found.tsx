'use client';

import { motion } from 'framer-motion';
import SmoothScroll from '../components/SmoothScroll';
import CustomCursor from '../components/ui/CustomCursor';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/sections/Footer';
import MagneticButton from '../components/ui/MagneticButton';
import { 
  Compass, 
  MapPin, 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  Radio, 
  ArrowUpRight,
  Globe
} from 'lucide-react';

const EXPLORE_CARDS = [
  {
    number: '01',
    title: 'Curated Expeditions',
    subtitle: 'Moods & Atmosphere',
    description: 'Explore hand-crafted expeditions built around tranquility, ancient heritage, and wilderness.',
    href: '/#experiences',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Featured Destinations',
    subtitle: 'Patagonia to Kyoto',
    description: 'Browse extraordinary sanctuaries, alpine heights, coastal horizons, and dark sky maps.',
    href: '/#destinations',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Wander Chronicles',
    subtitle: 'Field Logs & Notes',
    description: 'Read immersive travel notes, stories, and monthly field photography entries.',
    href: '/#journal',
    icon: BookOpen,
  },
  {
    number: '04',
    title: 'Cartography & Ethos',
    subtitle: 'Our Philosophy',
    description: 'Discover the reverent travel philosophy behind our silent, eco-conscious expeditions.',
    href: '/#philosophy',
    icon: Globe,
  },
];

export default function NotFound() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="grain-overlay" />
      <Navbar />

      <main className="relative min-h-screen bg-ink pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col justify-between select-none">
        {/* Dynamic atmospheric radial background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial from-lime/15 via-lime/5 to-transparent blur-[160px] opacity-70" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-radial from-cream/5 via-transparent to-transparent blur-[120px]" />
          
          {/* Latitude/Longitude Grid Lines Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#F4F1EA_1px,transparent_1px),linear-gradient(to_bottom,#F4F1EA_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Floating Background Outline "404" */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="wander-outline select-none text-[45vw] md:text-[28vw] font-extrabold leading-none tracking-tighter"
          >
            404
          </motion.span>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10 w-full my-auto">
          
          {/* Main 404 Hero Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline & Telemetry Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Status Pill Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cream/5 border border-lime/30 backdrop-blur-md"
              >
                <Radio className="w-4 h-4 text-lime animate-pulse" />
                <span className="text-xs font-mono tracking-[0.25em] text-lime uppercase font-semibold">
                  STATUS 404 • UNCHARTED TERRITORY
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-cream leading-[1.02]"
              >
                YOU HAVE WANDERED <br />
                <span className="font-serif-editorial italic font-normal text-lime underline decoration-lime/30 underline-offset-8">
                  Off The Map
                </span>.
              </motion.h1>

              {/* Subtitle Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-xl text-base sm:text-lg text-cream/70 font-light leading-relaxed"
              >
                The coordinates you entered led to an unmapped sanctuary. No path or cartography exists for this location, but the rest of the world remains waiting for you.
              </motion.p>

              {/* Telemetry Status Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 w-full max-w-lg p-5 rounded-2xl glass-panel border border-cream/10 bg-ink-100/60 font-mono text-xs text-cream/70 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-cream/40 uppercase">CURRENT LOCATION</span>
                  <span className="text-lime font-semibold">TERRA INCOGNITA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cream/40 uppercase">TELEMETRY BEARING</span>
                  <span className="text-cream">OUT OF BOUNDS [0°00&apos;00&quot;]</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-cream/10">
                  <span className="text-cream/40 uppercase">RECOMMENDED HEADING</span>
                  <span className="text-lime flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    27°59&apos; N 86°55&apos; E (HOME)
                  </span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <MagneticButton>
                  <a
                    href="/"
                    className="group inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-white shadow-[0_10px_30px_-10px_rgba(217,255,90,0.3)]"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>RETURN TO HOMEPAGE</span>
                  </a>
                </MagneticButton>

                <a
                  href="/#destinations"
                  className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-4 text-sm font-mono text-cream hover:bg-cream/15 transition-all border border-cream/15"
                >
                  <Compass className="w-4 h-4 text-lime" />
                  <span>EXPLORE DESTINATIONS</span>
                </a>
              </motion.div>

            </div>

            {/* Right Column: Custom Animated SVG Radar Compass */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center rounded-full border border-cream/10 bg-ink-100/40 p-8 glass-panel shadow-2xl"
              >
                {/* Rotating Outer Degree Dial Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-2 rounded-full border border-dashed border-cream/20 flex items-center justify-center"
                >
                  <span className="absolute top-2 text-[10px] font-mono text-lime font-bold">N</span>
                  <span className="absolute right-2 text-[10px] font-mono text-cream/50">E</span>
                  <span className="absolute bottom-2 text-[10px] font-mono text-cream/50">S</span>
                  <span className="absolute left-2 text-[10px] font-mono text-cream/50">W</span>
                </motion.div>

                {/* Radar Scanning Beam */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 rounded-full pointer-events-none overflow-hidden"
                >
                  <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-br from-lime/40 via-lime/10 to-transparent blur-xs" />
                </motion.div>

                {/* Pulsing Concentric Radar Signal Rings */}
                <motion.div
                  animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-16 rounded-full border border-lime/40 pointer-events-none"
                />
                
                <motion.div
                  animate={{ scale: [0.6, 1.4, 0.6], opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute inset-24 rounded-full border border-cream/20 pointer-events-none"
                />

                {/* Center Animated Compass Rose Needle */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-4 rounded-full bg-lime/10 border border-lime/50 text-lime shadow-[0_0_20px_rgba(217,255,90,0.2)]"
                  >
                    <Compass className="w-12 h-12 animate-pulse" />
                  </motion.div>

                  <span className="mt-4 text-xs font-mono tracking-widest text-lime uppercase font-bold">
                    SIGNAL LOST
                  </span>
                  <span className="text-[10px] font-mono text-cream/40 mt-0.5">
                    SEARCHING CARTOGRAPHY...
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Bottom Secondary Exploration Shortcuts Grid */}
          <div className="mt-20 pt-12 border-t border-cream/10">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono tracking-[0.3em] text-lime uppercase block mb-1">
                  RE-ORIENT YOUR JOURNEY
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-bold text-cream">
                  Continue Exploring WANDER
                </h3>
              </div>
              <span className="text-xs font-mono text-cream/40">
                SELECT A KNOWN COORDINATE BELOW
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPLORE_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.a
                    key={card.number}
                    href={card.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="group relative p-6 rounded-2xl bg-ink-100/80 border border-cream/10 hover:border-lime/40 transition-all duration-300 flex flex-col justify-between h-full shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs tracking-widest text-lime">
                          [{card.number}]
                        </span>
                        <div className="p-2 rounded-full bg-cream/5 text-cream/60 group-hover:text-lime group-hover:bg-lime/10 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-syne text-xl font-bold text-cream group-hover:text-lime transition-colors">
                        {card.title}
                      </h4>
                      <span className="block text-xs font-serif-editorial italic text-lime/80 mt-0.5">
                        {card.subtitle}
                      </span>

                      <p className="mt-3 text-xs text-cream/60 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-cream/10 flex items-center justify-between text-xs font-mono text-cream/60 group-hover:text-lime transition-colors">
                      <span>GO TO SECTION</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
