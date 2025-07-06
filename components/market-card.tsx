"use client";

import { useTheme } from '@/contexts/theme-context';
import { Market } from '@/data/markets';
import styles from '@/styles/market-card.module.css';

interface MarketCardProps {
  market: Market;
}

export function MarketCard({ market }: MarketCardProps) {
  const { theme, isVibeMode } = useTheme();

  return (
    <div className={`${styles.marketCard} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      {market.trending && (
        <div className={styles.trendingBadge}>
          {isVibeMode ? '🔥 ' : ''}HOT
        </div>
      )}

      <div className={styles.cardHeader}>
        {market.title}
      </div>

      <div className={styles.cardDescription}>
        {market.description}
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceYes}>
          {isVibeMode ? '✅ ' : ''}YES: ${market.yesPrice.toFixed(2)}
        </div>
        <div className={styles.priceNo}>
          {isVibeMode ? '❌ ' : ''}NO: ${market.noPrice.toFixed(2)}
        </div>
      </div>

      <div className={styles.cardStats}>
        <span>
          {isVibeMode ? '💰 ' : ''}Volume: ${market.volume.toLocaleString()}
        </span>
        <span>
          {isVibeMode ? '💬 ' : ''}Posts: {market.posts}
        </span>
      </div>

      <a
        href={`/market/${market.id}`}
        className={styles.tradeButton}
      >
        {isVibeMode ? '🎯 TRADE NOW' : 'TRADE NOW'}
      </a>
    </div>
  );
} 