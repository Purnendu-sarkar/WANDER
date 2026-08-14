'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journalStories, JournalStory } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import { 
  Bookmark, 
  Share2, 
  Clock, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  X, 
  Play, 
  Pause, 
  Check, 
  Send,
  Sparkles,
  BookOpen
} from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = ['All', 'Expeditions', 'Culture', 'Coastal', 'Wilderness'] as const;

export default function TravelJournal() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedStory, setSelectedStory] = useState<JournalStory | null>(null);
  const [bookmarkedTitles, setBookmarkedTitles] = useState<string[]>([]);
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const filteredStories = activeCategory === 'All'
    ? journalStories
    : journalStories.filter((s) => s.category === activeCategory);

  const heroStory = journalStories[0];

  const toggleBookmark = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedTitles.includes(title)) {
      setBookmarkedTitles(bookmarkedTitles.filter((t) => t !== title));
    } else {
      setBookmarkedTitles([...bookmarkedTitles, title]);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setIsSubscribed(true);
      setSubscribedEmail('');
    }
  };

  return (
    <section id="journal" className="relative bg-ink py-28 md:py-40 border-t border-cream/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <FadeIn>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-lime" />
                <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                  Wander Chronicles & Notes
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream leading-[1.05]">
                STORIES FROM <br className="hidden sm:inline" />
                <span className="font-serif-editorial italic font-normal text-lime">The Road Less Traveled</span>.
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-ink-100 border border-cream/10">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 py-2 text-xs font-mono tracking-wider transition-colors rounded-full uppercase ${
                      isActive ? 'text-ink font-semibold' : 'text-cream/70 hover:text-cream'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="journalCategoryTab"
                        className="absolute inset-0 bg-lime rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Featured Hero Story (shown when "All" or matches category) */}
        {activeCategory === 'All' && heroStory && (
          <FadeIn delay={0.1}>
            <div 
              onClick={() => setSelectedStory(heroStory)}
              className="group cursor-pointer relative mb-16 rounded-3xl overflow-hidden border border-cream/15 bg-ink-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-lime/40 transition-all duration-500 shadow-2xl"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden">
                <Image
                  src={heroStory.image}
                  alt={heroStory.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest bg-lime text-ink font-bold uppercase shadow-lg">
                    FEATURED ENTRY
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-ink/70 text-cream backdrop-blur-md border border-cream/10">
                    {heroStory.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-cream/50 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-lime" />
                      {heroStory.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-lime" />
                      {heroStory.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-lime" />
                      {heroStory.readTime}
                    </span>
                  </div>

                  <h3 className="font-syne text-2xl sm:text-4xl font-bold tracking-tight text-cream group-hover:text-lime transition-colors leading-tight">
                    {heroStory.title}
                  </h3>
                  
                  <p className="font-serif-editorial text-xl italic text-lime/90 mt-2">
                    &quot;{heroStory.subtitle}&quot;
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-cream/70 line-clamp-3 leading-relaxed font-light">
                    {heroStory.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-cream/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={heroStory.author.avatar}
                      alt={heroStory.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-lime/40"
                      width={40}
                      height={40}
                    />
                    <div>
                      <span className="block text-xs font-semibold text-cream">{heroStory.author.name}</span>
                      <span className="block text-[11px] font-mono text-cream/50">{heroStory.author.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => toggleBookmark(heroStory.title, e)}
                      className={`p-2.5 rounded-full transition-colors ${
                        bookmarkedTitles.includes(heroStory.title)
                          ? 'bg-lime text-ink'
                          : 'bg-cream/10 text-cream hover:bg-cream/20'
                      }`}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                    <span className="p-2.5 rounded-full bg-lime text-ink group-hover:bg-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Stories Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredStories.map((story, i) => {
              const isBookmarked = bookmarkedTitles.includes(story.title);
              return (
                <motion.div
                  layout
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <article 
                    onClick={() => setSelectedStory(story)}
                    className="group cursor-pointer rounded-2xl bg-ink-100 border border-cream/10 overflow-hidden hover:border-lime/30 transition-all duration-500 flex flex-col justify-between h-full shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-50" />
                      
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-ink/80 text-cream backdrop-blur-md border border-cream/10 uppercase">
                          {story.category}
                        </span>

                        <button
                          onClick={(e) => toggleBookmark(story.title, e)}
                          className={`p-2 rounded-full transition-colors ${
                            isBookmarked
                              ? 'bg-lime text-ink'
                              : 'bg-ink/70 text-cream/70 hover:text-white backdrop-blur-md'
                          }`}
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-3 text-xs font-mono text-cream/40 mb-3">
                          <span className="text-lime">{story.number}</span>
                          <span>•</span>
                          <span>{story.location}</span>
                          <span>•</span>
                          <span>{story.readTime}</span>
                        </div>

                        <h3 className="font-syne text-xl font-bold tracking-tight text-cream group-hover:text-lime transition-colors leading-snug">
                          {story.title}
                        </h3>
                        
                        <p className="font-serif-editorial text-sm italic text-lime/80 mt-1">
                          {story.subtitle}
                        </p>

                        <p className="mt-3 text-xs sm:text-sm text-cream/60 line-clamp-3 leading-relaxed">
                          {story.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-cream/10 flex items-center justify-between text-xs font-mono text-cream/70">
                        <span className="flex items-center gap-2">
                          <Image
                            src={story.author.avatar}
                            alt={story.author.name}
                            className="w-6 h-6 rounded-full object-cover"
                            width={500}
                            height={500}
                          />
                          {story.author.name}
                        </span>

                        <span className="flex items-center gap-1 group-hover:text-lime transition-colors">
                          READ STORY →
                        </span>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dispatch Newsletter Subscription Card */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-ink-100 via-ink-50 to-ink-100 border border-lime/20 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lime/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-lime tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>THE WANDER DISPATCH</span>
            </div>

            <h3 className="font-syne text-3xl sm:text-4xl font-bold text-cream tracking-tight">
              Receive Quiet Stories & <span className="font-serif-editorial italic font-normal text-lime">Private Expedition Invites</span>
            </h3>

            <p className="mt-3 text-sm text-cream/70 leading-relaxed font-light">
              Published once a month. No spam, only hand-crafted notes on hidden destinations, dark sky maps and alpine lore.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-2xl bg-lime/10 border border-lime/30 text-lime flex items-center gap-3 text-sm font-mono"
              >
                <Check className="w-5 h-5 shrink-0" />
                <span>YOU ARE SUBSCRIBED TO THE WANDER DISPATCH. WELCOME ABOARD!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-full bg-ink/80 border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-lime"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-lime text-ink font-semibold hover:bg-white transition-colors text-sm flex items-center justify-center gap-2 shrink-0"
                >
                  <span>JOIN DISPATCH</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Interactive Story Reader Modal Drawer */}
      <AnimatePresence>
        {selectedStory && (
          <StoryReaderModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
            isBookmarked={bookmarkedTitles.includes(selectedStory.title)}
            onToggleBookmark={(e) => toggleBookmark(selectedStory.title, e)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function StoryReaderModal({
  story,
  onClose,
  isBookmarked,
  onToggleBookmark,
}: {
  story: JournalStory;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent) => void;
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto overscroll-contain bg-ink-100 border border-cream/20 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl z-10 text-cream scrollbar-thin"
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between bg-ink-100/90 backdrop-blur-md pb-4 mb-6 border-b border-cream/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-lime/10 text-lime border border-lime/30 uppercase">
              {story.category}
            </span>
            <span className="text-xs font-mono text-cream/50">{story.readTime}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleBookmark}
              className={`p-2.5 rounded-full transition-colors ${
                isBookmarked ? 'bg-lime text-ink' : 'bg-cream/10 text-cream hover:bg-cream/20'
              }`}
              title="Bookmark story"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors relative"
              title="Share story link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-lime" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Story Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-lime mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{story.location}</span>
            <span>•</span>
            <Calendar className="w-3.5 h-3.5" />
            <span>{story.date}</span>
          </div>

          <h1 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-cream leading-tight">
            {story.title}
          </h1>

          <p className="font-serif-editorial text-2xl sm:text-3xl italic text-lime/90 mt-2">
            &quot;{story.subtitle}&quot;
          </p>
        </div>

        {/* Author & Audio Player Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-ink/60 border border-cream/10 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src={story.author.avatar}
              alt={story.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-lime"
              width={48}
              height={48}
            />
            <div>
              <span className="block font-semibold text-sm text-cream">{story.author.name}</span>
              <span className="block text-xs font-mono text-cream/50">{story.author.role}</span>
            </div>
          </div>

          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-lime/10 hover:bg-lime/20 border border-lime/30 text-lime transition-all flex items-center justify-center gap-3 text-xs font-mono"
          >
            {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlayingAudio ? 'PAUSE NARRATION' : `LISTEN AUDIO (${story.audioDuration})`}</span>
          </button>
        </div>

        {/* Main Cover Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-cream/10">
          <Image
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>

        {/* Story Text Content with Dropcap */}
        <div className="space-y-6 text-base sm:text-lg text-cream/85 font-light leading-relaxed mb-12">
          {story.fullContent.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? 'editorial-dropcap' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlight Pull Quote */}
        <div className="my-10 p-8 sm:p-10 rounded-2xl bg-lime/5 border-l-4 border-lime text-cream">
          <p className="font-serif-editorial text-2xl sm:text-3xl italic font-normal text-lime leading-snug">
            &quot;{story.quote}&quot;
          </p>
          <span className="block mt-4 text-xs font-mono tracking-widest text-cream/50 uppercase">
            — FROM THE AUTHOR&apos;s FIELD LOG
          </span>
        </div>

        {/* Gallery Strip if available */}
        {story.galleryImages && story.galleryImages.length > 0 && (
          <div className="mb-12">
            <h4 className="font-mono text-xs tracking-widest text-lime uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>FIELD PHOTOGRAPHY GALLERY</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {story.galleryImages.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-cream/10">
                  <Image src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" width={500} height={500} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Modal Action */}
        <div className="pt-6 border-t border-cream/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full bg-cream/10 hover:bg-cream/20 text-cream text-xs font-mono transition-colors"
          >
            ← BACK TO CHRONICLES
          </button>

          <span className="text-xs font-mono text-cream/40 hidden sm:inline">
            WANDER EDITORIAL DISPATCH VOL. 2026
          </span>
        </div>
      </motion.div>
    </div>
  );
}
