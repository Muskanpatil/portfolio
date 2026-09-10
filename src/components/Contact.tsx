import { ArrowRight, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-default bg-card p-6 sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 aurora opacity-50" />
          <div className="relative">
            <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand-500">
              Let’s talk
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-800 leading-tight tracking-tight sm:text-4xl">
              Let’s build something great together.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-soft">
              I’m open to full-stack, backend, and architecture roles — especially on teams shipping
              complex, multi-tenant SaaS. If you’re hiring or want to talk systems, reach out.
            </p>

            <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-xs font-600 text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03] sm:w-auto sm:text-sm"
              >
                <Mail size={16} className="shrink-0" />
                <span className="[overflow-wrap:anywhere]">{profile.email}</span>
                <ArrowRight
                  size={16}
                  className="hidden shrink-0 transition-transform group-hover:translate-x-0.5 sm:block"
                />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-default bg-bg px-5 py-3 text-sm font-600 text-soft transition-colors hover:text-brand-500"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-default bg-bg px-5 py-3 text-sm font-600 text-soft transition-colors hover:text-brand-500"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-default">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-600 font-display text-xs font-700 text-white">
            M
          </span>
          <span className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <p className="text-xs text-muted">
          {profile.role} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
