"use client";

import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/footer.module.css';

export function Footer() {
  const { theme, isVibeMode } = useTheme();

  return (
    <div className={`${styles.footer} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      <strong>
        {isVibeMode ? '🛸 ' : ''}
        Conspiracy Prediction Exchange v2.0
        {isVibeMode ? ' 🛸' : ''}
      </strong>
      <br />
      Copyright © 2001 - All Rights Reserved
      <br />
      <em>
        {isVibeMode ? '✨ ' : ''}
        "The truth is out there... and it's profitable"
        {isVibeMode ? ' ✨' : ''}
      </em>
      <br />
      <br />
      <a href="/about">About</a> |{' '}
      <a href="/rules">Rules</a> |{' '}
      <a href="/contact">Contact</a> |{' '}
      <a href="/disclaimer">Disclaimer</a>
      <br />
      <br />
      <span style={{ fontSize: '10px' }}>
        {isVibeMode ? '💻 ' : ''}
        Best viewed with Internet Explorer 6.0 or Netscape 6.0
      </span>
    </div>
  );
} 