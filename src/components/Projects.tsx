import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Layers } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import { Reveal, Section } from './Reveal';

const accentMap = {
  brand: 'from-brand-500 to-brand-700',
  violet: 'from-violet-500 to-violet-600',
  accent: 'from-accent-500 to-accent-600',
} as const;

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Systems I designed, built, and shipped."
      description="Three projects from the hospitality SaaS platform — each showing how I approach a hard problem end-to-end, from architecture to impact."
    >
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const accent = accentMap[project.accent];

  return (
    <article className="group overflow-hidden rounded-3xl border border-default bg-card transition-colors hover:border-brand-500/40">
      <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-start">
        {/* Left: index + role */}
        <div className="flex shrink-0 items-center gap-4 lg:w-56 lg:flex-col lg:items-start">
          <div
            className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accent} font-display text-lg font-700 text-white shadow-lg`}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
          <div>
            <p className="text-xs font-600 uppercase tracking-wider text-muted">
              {project.timeline}
            </p>
            <p className="mt-1 text-sm font-600 text-soft">{project.role}</p>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-700 tracking-tight sm:text-2xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-500">{project.tagline}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1 rounded-full border border-default px-3 py-1.5 text-xs font-600 text-soft transition-colors hover:text-brand-500"
            >
              {open ? 'Less' : 'Details'}
              <ChevronDown
                size={14}
                className={`transition-transform ${open ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Challenge chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.challenge.map((c) => (
              <span
                key={c}
                className="rounded-md bg-soft px-2.5 py-1 text-xs text-muted"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Stack badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-default px-2.5 py-1 font-mono text-[11px] font-500 text-soft"
              >
                {tech}
              </span>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid gap-6 pt-2 sm:grid-cols-2">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-700 uppercase tracking-wider text-muted">
                      <Layers size={14} /> What I Built
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {project.built.map((b) => (
                        <li key={b.title} className="text-sm">
                          <span className="font-600 text-soft">{b.title}:</span>{' '}
                          <span className="text-muted">{b.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-700 uppercase tracking-wider text-muted">
                      <CheckCircle2 size={14} /> Impact
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {project.impact.map((imp) => (
                        <li key={imp} className="flex gap-2 text-sm text-soft">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-500" />
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Impact highlights (always visible) */}
          {!open && (
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {project.impact.map((imp) => (
                <span key={imp} className="flex items-center gap-1.5 text-xs text-muted">
                  <span className="h-1 w-1 rounded-full bg-accent-500" />
                  {imp}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
