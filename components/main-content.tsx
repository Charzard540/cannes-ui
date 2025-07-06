"use client";

import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/components.module.css';

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      {children}
    </div>
  );
} 