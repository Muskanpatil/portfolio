import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// `delay` lets the mobile menu finish its collapse animation first — framer's
// height animation otherwise aborts an in-flight smooth scroll.
function goToSection(href: string, delay = 0) {
  const run = () => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', location.pathname + location.search);
      return;
    }
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    // Imperative scroll — a native anchor jump gets cancelled by the menu-close
    // re-render on mobile. scrollIntoView still honours scroll-padding-top.
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', href);
  };
  if (delay) window.setTimeout(run, delay);
  else run();
}

export function Navbar({ theme, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-default' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            goToSection('#top');
          }}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-600 font-display text-sm font-700 text-white shadow-lg shadow-brand-500/30">
            M
          </span>
          <span className="whitespace-nowrap font-display text-sm font-700 tracking-tight">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                goToSection(link.href);
              }}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'text-brand-500'
                  : 'text-soft hover:text-brand-500'
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-500/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goToSection('#contact');
            }}
            className="hidden whitespace-nowrap rounded-full bg-brand-500 px-4 py-2 text-sm font-600 text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-default bg-card text-soft lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-default glass lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    goToSection(link.href, 300);
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-soft hover:bg-brand-500/10 hover:text-brand-500"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  goToSection('#contact', 300);
                }}
                className="mt-2 rounded-full bg-brand-500 px-3 py-2.5 text-center text-sm font-600 text-white shadow-lg shadow-brand-500/25"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
