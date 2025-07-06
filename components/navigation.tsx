"use client";

import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/navigation.module.css';

export function Navigation() {
  const { theme } = useTheme();

  return (
    <nav className={`${styles.navBar} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      <a href="/markets">Markets</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/create">Create Market</a>
      <a href="/add-resolution">Add Resolution</a>
      <a href="/about">About</a>
    </nav>
  );
} 