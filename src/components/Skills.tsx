import { focusAreas, techStackLayers } from '../data/portfolio';
import { Reveal, Section } from './Reveal';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Competencies"
      title="Where I add the most leverage."
      description="What I work on day to day, and the tools I reach for, organized by layer."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Focus areas */}
        <Reveal>
          <div className="rounded-3xl border border-default bg-card p-6 sm:p-8">
            <h3 className="font-display text-base font-700 tracking-tight">Focus Areas</h3>
            <ul className="mt-6 space-y-4">
              {focusAreas.map((area) => (
                <li key={area.label} className="border-l-2 border-brand-500/60 pl-4">
                  <p className="text-sm font-600 text-soft">{area.label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">{area.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Tech stack by layer */}
        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
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
