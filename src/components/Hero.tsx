import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarDays, Check, ChevronDown, FileText, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: '700+', label: 'commits to Propeter V3' },
  { value: '20+', label: 'Fastify services' },
  { value: '3', label: 'PMS adapters built' },
];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Background: one soft glow + a faint dot grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px] dark:bg-brand-500/20" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-12 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20">
        {/* Left: copy */}
        <div>
          <motion.p {...rise(0)} className="flex items-center gap-3 text-sm font-600 text-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            {profile.name} · {profile.role}
          </motion.p>

          <motion.h1
            {...rise(0.05)}
            className="mt-5 font-display text-[2.4rem] font-800 leading-[1.05] tracking-tight [overflow-wrap:anywhere] sm:text-6xl lg:text-[4.1rem]"
          >
            {profile.headline.lead} <span className="gradient-text">{profile.headline.accent}</span>
          </motion.h1>

          <motion.p {...rise(0.12)} className="mt-6 max-w-xl text-base leading-relaxed text-soft sm:text-lg">
            {profile.subheading}
          </motion.p>

          <motion.div {...rise(0.18)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-600 text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03]"
            >
              See my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-default bg-card px-5 py-3 text-sm font-600 text-soft transition-colors hover:text-brand-500"
            >
              <FileText size={16} /> Resume
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

          <motion.dl
            {...rise(0.26)}
            className="mt-10 grid max-w-md grid-cols-3 divide-x divide-[var(--border)] border-t border-default pt-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-700 tracking-tight sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: what the work looks like */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <RateCard animate={!reduce} />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="mx-auto mb-4 hidden w-fit flex-col items-center gap-1 text-muted sm:mb-6 sm:flex"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
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

// Booking-curve style series: on-the-books occupancy (solid) then forecast (dashed).
const actual = [38, 41, 45, 47, 52, 55, 58, 63];
const forecast = [63, 67, 72, 76, 81, 86, 89, 92];

function toPath(values: number[], offset: number, total: number) {
  return values
    .map((v, i) => {
      const x = ((i + offset) / (total - 1)) * 100;
      const y = 100 - v;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y}`;
    })
    .join(' ');
}

function RateCard({ animate }: { animate: boolean }) {
  const total = actual.length + forecast.length - 1;
  const actualPath = toPath(actual, 0, total);
  const forecastPath = toPath(forecast, actual.length - 1, total);
  const bandUpper = forecast.map((v, i) => v + 2 + i * 0.8);
  const bandLower = forecast.map((v, i) => v - 2 - i * 0.8).reverse();
  const bandPath = `${toPath(bandUpper, actual.length - 1, total)} ${bandLower
    .map((v, i) => {
      const x = ((total - i) / (total - 1)) * 100;
      return `L${x.toFixed(2)},${100 - v}`;
    })
    .join(' ')} Z`;

  const drivers = [
    { icon: TrendingUp, label: 'Forecast occupancy', value: '92%' },
    { icon: Users, label: 'Comp-set median', value: '$209' },
    { icon: CalendarDays, label: 'Local event', value: 'Concert, 1.2 km' },
    { icon: ShieldCheck, label: 'Min / max guard', value: '$150 – $260' },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-violet-500/10 to-accent-500/20 blur-2xl" />

      <div className="overflow-hidden rounded-3xl border border-default bg-card shadow-2xl shadow-brand-900/10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-default px-5 py-3.5">
          <div>
            <p className="text-[11px] font-600 uppercase tracking-wider text-muted">Rate recommendation</p>
            <p className="mt-0.5 text-sm font-600">Deluxe King · Fri 14 Nov</p>
          </div>
          <span className="rounded-full bg-soft px-2.5 py-1 font-mono text-[10px] text-muted">illustrative</span>
        </div>

        {/* Rate */}
        <div className="flex items-end justify-between gap-4 px-5 pt-5">
          <div>
            <p className="text-xs text-muted">Recommended</p>
            <p className="font-display text-4xl font-800 tracking-tight">
              $214
              <span className="ml-2 align-middle text-sm font-600 text-muted line-through">$189</span>
            </p>
          </div>
          <span className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-accent-500/12 px-2.5 py-1 text-xs font-700 text-accent-600 dark:text-accent-400">
            <TrendingUp size={13} /> +13.2%
          </span>
        </div>

        {/* Chart */}
        <div className="px-5 pt-4">
          <svg viewBox="0 -4 100 74" preserveAspectRatio="none" className="h-28 w-full" aria-hidden>
            <defs>
              <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-brand-500)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--color-brand-500)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[20, 40, 60].map((y) => (
              <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--border)" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
            ))}
            <path d={bandPath} fill="var(--color-violet-500)" opacity="0.12" />
            <path d={`${actualPath} L${((actual.length - 1) / (total - 1)) * 100},70 L0,70 Z`} fill="url(#hero-area)" />
            <motion.path
              d={actualPath}
              fill="none"
              stroke="var(--color-brand-500)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              initial={animate ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
            <motion.path
              d={forecastPath}
              fill="none"
              stroke="var(--color-violet-500)"
              strokeWidth="2"
              strokeDasharray="4 3"
              vectorEffect="non-scaling-stroke"
              initial={animate ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
            <line
              x1={((actual.length - 1) / (total - 1)) * 100}
              x2={((actual.length - 1) / (total - 1)) * 100}
              y1="-4"
              y2="70"
              stroke="var(--text-muted)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-0.5 w-3 rounded bg-brand-500" /> On the books
            </span>
            <span>today</span>
            <span className="flex items-center gap-1.5">
              <span className="h-0.5 w-3 rounded border-t-2 border-dashed border-violet-500" /> Forecast
            </span>
          </div>
        </div>

        {/* Why this rate */}
        <div className="mt-4 border-t border-default px-5 py-4">
          <p className="text-[11px] font-600 uppercase tracking-wider text-muted">Why this rate</p>
          <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {drivers.map((d, i) => (
              <motion.li
                key={d.label}
                initial={animate ? { opacity: 0, x: -6 } : false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-2.5 rounded-xl bg-soft px-3 py-2"
              >
                <d.icon size={14} className="shrink-0 text-brand-500" />
                <div className="min-w-0">
                  <p className="truncate text-[10px] text-muted">{d.label}</p>
                  <p className="truncate text-xs font-600">{d.value}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-default bg-soft px-5 py-3 text-xs">
          <span className="flex items-center gap-1.5 font-600 text-accent-600 dark:text-accent-400">
            <Check size={14} /> Published to PMS
          </span>
          <span className="font-mono text-[10px] text-muted">audit row #48213 · hmac ✓</span>
        </div>
      </div>
    </div>
  );
}
