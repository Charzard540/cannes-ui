"use client";

import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/components.module.css';

export function StatsBar() {
  const { theme, isVibeMode } = useTheme();

  return (
    <div className={`${styles.statsBar} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      <strong>
        {isVibeMode ? '📊 ' : ''}
        LIVE STATS:
        {isVibeMode ? ' 📊' : ''}
      </strong>
      {' '}
      Total Volume: $2,847,293 |{' '}
      Active Markets: 47 |{' '}
      Registered Users: 15,847 |{' '}
      Theories Resolved: 1,203
      {isVibeMode ? ' 🔥' : ''}
    </div>
  );
} 