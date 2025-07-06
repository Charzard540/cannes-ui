"use client";

import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/themes.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.themeToggle} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}
      onClick={toggleTheme}
    >
      {theme === 'vibe' ? '🌙 RETRO MODE' : '✨ VIBE MODE'}
    </button>
  );
} 