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
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-soft">
            <p>
              I build production-grade multi-tenant SaaS from V1 → V2 scaling — owning backend
              architecture, database design, frontend UX, and DevOps end-to-end. My work lives at
              the intersection of complex domain problems and the systems that make them tractable.
            </p>
            <p>
              At Ideas2Goal I architect hospitality software: property management integrations,
              rate intelligence, and OTA distribution. That means wrangling 6+ PMS vendors,
              enforcing strict tenant isolation, and keeping every change auditable for GDPR and
              PCI-DSS.
            </p>
            <p>
              I care about decisions that age well — clean module boundaries, event-sourced audit
              trails, and integrations that scale linearly instead of quadratically. I write secure,
              compliant code because the domain demands it, and I explain architectural choices to
              people who are smart but unfamiliar with the domain.
            </p>
            <p className="text-sm text-muted">
              Based in {profile.location}. Fluent in {profile.languages.join(', ')}.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
