'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 30 });

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setHidden(false);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [data-cursor="hover"], input, textarea')
      );
    };

    const leave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      document.removeEventListener('mouseleave', leave);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
      style={{ x: springX, y: springY }}
      animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 2.2 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`h-8 w-8 rounded-full border transition-colors ${
          hovering ? 'border-lime bg-lime/20' : 'border-cream/60 bg-cream/5'
        }`}
      />
    </motion.div>
  );
}
