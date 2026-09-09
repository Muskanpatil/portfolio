import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { deepDives } from '../data/portfolio';
import { Reveal, Section } from './Reveal';

export function DeepDives() {
  return (
    <Section
      id="deep-dives"
      eyebrow="Technical Depth"
      title="How I think about the hard parts."
      description="Short explainers for the architectural decisions behind the work — because the interesting part is the reasoning, not the buzzwords."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {deepDives.map((d, i) => (
          <Reveal key={d.id} delay={i * 0.08}>
            <DeepDiveCard dive={d} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function DeepDiveCard({ dive }: { dive: (typeof deepDives)[number] }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(dive.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="flex h-full flex-col rounded-3xl border border-default bg-card p-6 transition-colors hover:border-brand-500/40">
      <h3 className="font-display text-lg font-700 leading-snug tracking-tight">
        {dive.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">{dive.blurb}</p>

      {/* Code block */}
      <div className="relative mt-5 overflow-hidden rounded-xl border border-default bg-[#0b0e16]">
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2 flex items-center gap-1 font-mono text-[11px] text-slate-400">
              <Terminal size={11} /> {dive.language}
            </span>
          </div>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy code"
            className="grid h-7 w-7 place-items-center rounded-md text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-[12.5px] leading-relaxed">
          <code className="font-mono text-slate-200">{dive.code}</code>
        </pre>
      </div>

      <ul className="mt-5 space-y-2">
        {dive.points.map((p) => (
          <li key={p} className="flex gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
