"use client";

import { useTheme } from '@/contexts/theme-context';
import { Market } from '@/data/markets';
import { MarketCard } from './market-card';
import styles from '@/styles/components.module.css';

interface CategorySectionProps {
  title: string;
  markets: Market[];
}

export function CategorySection({ title, markets }: CategorySectionProps) {
  const { theme, isVibeMode } = useTheme();

  const getCategoryIcon = (categoryTitle: string) => {
    if (!isVibeMode) return '';
    
    switch (categoryTitle) {
      case 'Space & UFOs':
        return '🛸 ';
      case 'Government & Politics':
        return '🏛️ ';
      case 'Historical Events':
        return '📜 ';
      default:
        return '🔍 ';
    }
  };

  return (
    <div className={styles.categorySection}>
      <div className={`${styles.categoryHeader} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
        {getCategoryIcon(title)}{title}
      </div>
      <div className={`${styles.cardsContainer} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
        {markets.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </div>
    </div>
  );
} 