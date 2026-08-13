'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="absolute inset-0 bg-[#0B0B0B] z-10"
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: 'top' }}
      />
      <motion.img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName ?? ''}`}
        initial={{ scale: 1.15 }}
        animate={isInView ? { scale: 1 } : { scale: 1.15 }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        loading="lazy"
      />
    </div>
  );
}
