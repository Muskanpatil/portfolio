import { Briefcase, GraduationCap } from 'lucide-react';
import { achievements, experience } from '../data/portfolio';
import { Reveal, Section } from './Reveal';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Impact"
      title="Where I’ve worked, and what I’ve shipped."
      description="A compact timeline of where I’ve worked and what I owned."
    >
      {/* Achievements metrics */}
      <Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="rounded-2xl border border-default bg-card p-5 text-center transition-colors hover:border-brand-500/40"
            >
              <div className="gradient-text font-display text-2xl font-800 tracking-tight sm:text-3xl">
                {a.value}
              </div>
              <div className="mt-2 text-xs font-600 leading-snug text-soft">{a.label}</div>
              <div className="mt-1 text-[11px] text-muted">{a.sub}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative mt-14 pl-6 sm:pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500 via-violet-500 to-transparent" />
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <Reveal key={exp.period} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[27px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-bg bg-brand-500 sm:-left-[35px]">
                  {exp.role.toLowerCase().includes('b.tech') ? (
                    <GraduationCap size={9} className="text-white" />
                  ) : (
                    <Briefcase size={9} className="text-white" />
                  )}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs font-600 text-brand-500">{exp.period}</span>
                  <h3 className="font-display text-lg font-700 tracking-tight">{exp.role}</h3>
                  <span className="text-sm text-muted">· {exp.org}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-soft">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
