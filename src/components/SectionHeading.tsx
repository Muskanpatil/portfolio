type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div
          className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="inline-block h-px w-6 bg-brand-500/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-700 leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-soft sm:text-lg">{description}</p>}
    </div>
  );
}
