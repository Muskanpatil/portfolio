import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { SectionHeading } from './SectionHeading';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20 ${className ?? ''}`}
    >
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </Reveal>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}
