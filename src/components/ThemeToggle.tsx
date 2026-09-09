import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  theme: 'light' | 'dark';
  toggle: () => void;
};

export function ThemeToggle({ theme, toggle }: Props) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-default bg-card text-soft transition-colors hover:text-brand-500"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun size={17} /> : <Moon size={17} />}
      </motion.span>
    </button>
  );
}
