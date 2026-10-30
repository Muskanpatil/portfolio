import { profile, aboutSkillGroups } from '../data/portfolio';
import { Reveal } from './Reveal';
import { Section } from './Reveal';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer who owns the full stack — and the domain."
      description={profile.hook}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-soft">
            <p>
              I have worked on Propeter from V1 (Express microservices) to V3, a Turborepo monorepo
              of Fastify services. I work across the stack: service design, Postgres schemas and
              query tuning, Python ML pipelines and the React admin app.
            </p>
            <p>
              At Ideas2Goal most of my work is revenue management: the pricing engine that
              recommends nightly rates, the models that forecast demand and ADR, the PMS adapters
              that feed them, and "Peter", an AI copilot revenue managers can question in plain
              English.
            </p>
            <p>
              Money is involved, so I care about proof: every rate traceable to its inputs, models
              promoted only when they beat a baseline, tenant isolation enforced by the database,
              and audit logs that show tampering.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutSkillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-default bg-card p-5 transition-colors hover:border-brand-500/50"
              >
                <h3 className="font-display text-sm font-700 tracking-tight text-brand-500">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-soft px-2.5 py-1 text-xs font-medium text-soft"
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
