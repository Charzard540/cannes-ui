"use client";

import { useTheme } from '@/contexts/theme-context';
import { recentActivity } from '@/data/markets';
import styles from '@/styles/footer.module.css';

export function RecentActivity() {
  const { theme, isVibeMode } = useTheme();

  return (
    <div className={`${styles.recentActivity} ${theme === 'vibe' ? styles.vibeMode : styles.retroMode}`}>
      {recentActivity.map((activity) => (
        <div key={activity.id} className={styles.activityItem}>
          <div className={styles.activityUser}>
            {isVibeMode ? `${activity.userIcon} ` : ''}
            {activity.user}
          </div>
          <em> ({activity.timeAgo})</em>
          <div className={styles.activityContent}>
            {activity.content}
          </div>
        </div>
      ))}
    </div>
  );
} 