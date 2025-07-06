"use client";

import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/header.module.css';

export function Header() {
  const { theme, isVibeMode } = useTheme();

  return (
    <div className={`${styles.header} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      <h1>
        {isVibeMode ? '🛸 ' : ''}
        CONSPIRACY PREDICTION EXCHANGE
        {isVibeMode ? ' 🛸' : ''}
      </h1>
      <div className={styles.tagline}>
        {isVibeMode ? '👁️ ' : ''}
        Where truth meets the market
        {isVibeMode ? ' 👁️' : ''}
      </div>
    </div>
  );
} 