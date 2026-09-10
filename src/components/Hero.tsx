import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 aurora animate-aurora opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 35%, #000 40%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 35%, #000 40%, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-12 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-16">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-default bg-card/60 px-3.5 py-1.5 text-xs font-medium text-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Available for full-stack & architecture roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2rem] font-800 leading-[1.08] tracking-tight [overflow-wrap:anywhere] sm:text-5xl sm:leading-[1.05] lg:text-6xl"
          >
            {profile.tagline.split('•').map((part, i, arr) => (
              <span key={i} className="block">
                {i === arr.length - 1 ? <span className="gradient-text">{part.trim()}</span> : part.trim()}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-soft sm:text-lg"
          >
            {profile.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-600 text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03]"
            >
              Explore My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-default bg-card px-5 py-3 text-sm font-600 text-soft transition-colors hover:text-brand-500"
            >
              <Mail size={16} /> Contact
            </a>
            <div className="flex items-center gap-1.5">
              <SocialIcon href={profile.github} label="GitHub">
                <GithubIcon size={18} />
              </SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn">
                <LinkedinIcon size={18} />
              </SocialIcon>
            </div>
          </motion.div>
        </div>

        {/* Right: connected-nodes visual */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[240px] sm:max-w-sm"
        >
          <NodeNetwork />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="mx-auto mb-4 flex w-fit flex-col items-center gap-1 text-muted sm:mb-6"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer noopener"
      className="grid h-10 w-10 place-items-center rounded-full border border-default bg-card text-soft transition-colors hover:border-brand-500 hover:text-brand-500"
    >
      {children}
    </a>
  );
}

function NodeNetwork() {
  // A small constellation representing "systems" — nodes + edges.
  const nodes = [
    { x: 50, y: 50, r: 7, label: 'core' },
    { x: 18, y: 22, r: 4 },
    { x: 82, y: 20, r: 4 },
    { x: 14, y: 70, r: 4 },
    { x: 86, y: 74, r: 4 },
    { x: 50, y: 12, r: 3 },
    { x: 50, y: 88, r: 3 },
    { x: 30, y: 45, r: 3 },
    { x: 72, y: 50, r: 3 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 7],
    [0, 8],
    [1, 5],
    [2, 5],
    [3, 6],
    [4, 6],
    [7, 1],
    [8, 2],
  ];

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 rounded-3xl bg-card/40 backdrop-blur-sm shimmer-border" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full p-4">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-500)" />
            <stop offset="100%" stopColor="var(--color-violet-500)" />
          </linearGradient>
          <radialGradient id="node-core">
            <stop offset="0%" stopColor="var(--color-brand-400)" />
            <stop offset="100%" stopColor="var(--color-brand-600)" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#edge)"
            strokeWidth={0.5}
            strokeOpacity={0.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.06 }}
          />
        ))}

        {nodes.map((n, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.07, ease: 'backOut' }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={i === 0 ? 'url(#node-core)' : 'var(--color-brand-500)'}
              opacity={i === 0 ? 1 : 0.75}
            />
            {i === 0 && (
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="none"
                stroke="var(--color-brand-400)"
                strokeWidth={0.6}
                animate={{ r: [n.r, n.r + 6], opacity: [0.6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
