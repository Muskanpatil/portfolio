import { motion } from 'framer-motion';
import { skillMatrix, techStackLayers } from '../data/portfolio';
import { Reveal, Section } from './Reveal';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Competencies"
      title="Where I add the most leverage."
      description="A snapshot of proficiency across the stack — and the tools I reach for, organized by layer."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Skill matrix */}
        <Reveal>
          <div className="rounded-3xl border border-default bg-card p-6 sm:p-8">
            <h3 className="font-display text-base font-700 tracking-tight">Proficiency</h3>
            <div className="mt-6 space-y-5">
              {skillMatrix.map((skill, i) => (
                <div key={skill.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-600 text-soft">{skill.label}</span>
                    <span className="font-mono text-xs text-muted">{skill.tier}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-soft">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Tech stack by layer */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {techStackLayers.map((layer) => (
              <div
                key={layer.layer}
                className="group rounded-2xl border border-default bg-card p-5 transition-colors hover:border-brand-500/50"
              >
                <h4 className="text-xs font-700 uppercase tracking-wider text-brand-500">
                  {layer.layer}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-soft px-2.5 py-1 font-mono text-[11px] font-500 text-soft transition-colors group-hover:text-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
