"use client";

import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/components.module.css';

export function WelcomeBox() {
  const { theme, isVibeMode } = useTheme();

  return (
    <div className={`${styles.welcomeBox} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      <strong>
        {isVibeMode ? '🔮 ' : ''}
        Welcome to the Conspiracy Prediction Exchange
        {isVibeMode ? ' 🔮' : ''}
      </strong>
      <br />
      <br />
      Bet on the truth! Trade shares in conspiracy theories and historical mysteries.
      <br />
      Make predictions, earn profits, and help uncover what really happened.
      <br />
      <br />
      <em>
        {isVibeMode ? '⚡ ' : ''}
        New users get 100 free credits to start trading!
        {isVibeMode ? ' ⚡' : ''}
      </em>
    </div>
  );
} 