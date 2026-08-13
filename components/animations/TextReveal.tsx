'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  play?: boolean;
}

const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * Masked line reveal — each line sits inside an overflow-hidden clip and
 * rises into place. Split on "\n" so callers control the line breaks.
 */
export function TextReveal({
  text,
  className = '',
  delay = 0,
  as = 'h2',
  play
}: TextRevealProps) {
  const Tag = motion[as];
  const lines = text.split('\n');

  const viewportProps =
    play === undefined
      ? { whileInView: 'visible' as const, viewport: { once: true, amount: 0.4 } }
      : { animate: play ? ('visible' as const) : ('hidden' as const) };

  return (
    <Tag className={className} initial="hidden" {...viewportProps}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            className="block"
            variants={{
              hidden: { y: '110%' },
              visible: { y: '0%' }
            }}
            transition={{
              duration: 0.28,
              ease: EASE,
              delay: delay + index * 0.06
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export default TextReveal;
