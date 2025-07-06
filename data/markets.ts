export interface Market {
  id: number;
  title: string;
  description: string;
  yesPrice: number;
  noPrice: number;
  volume: number;
  posts: number;
  trending: boolean;
}

export interface MarketCategories {
  [key: string]: Market[];
}

export const marketData: MarketCategories = {
  "Space & UFOs": [
    {
      id: 2,
      title: "The Moon Landing: Real or Fake?",
      description: "Did NASA really land on the moon in 1969?",
      yesPrice: 0.89,
      noPrice: 0.11,
      volume: 8930,
      posts: 1203,
      trending: false,
    },
    {
      id: 3,
      title: "Area 51: Alien Technology Reverse Engineering",
      description: "Is the US government reverse engineering alien technology at Area 51?",
      yesPrice: 0.23,
      noPrice: 0.77,
      volume: 12100,
      posts: 592,
      trending: true,
    },
  ],
  "Government & Politics": [
    {
      id: 1,
      title: "JFK Assassination: Lone Gunman vs Multiple Shooters",
      description: "Was Lee Harvey Oswald acting alone, or was there a larger conspiracy?",
      yesPrice: 0.34,
      noPrice: 0.66,
      volume: 15420,
      posts: 847,
      trending: true,
    },
    {
      id: 4,
      title: "9/11: Inside Job or Foreign Attack",
      description: "Was 9/11 carried out solely by foreign terrorists or was there government involvement?",
      yesPrice: 0.18,
      noPrice: 0.82,
      volume: 22340,
      posts: 2156,
      trending: false,
    },
  ],
  "Historical Events": [
    {
      id: 7,
      title: "Pearl Harbor: Advance Warning Ignored",
      description: "Did FDR have advance knowledge of the Pearl Harbor attack?",
      yesPrice: 0.29,
      noPrice: 0.71,
      volume: 11200,
      posts: 678,
      trending: false,
    },
    {
      id: 8,
      title: "Titanic: Insurance Fraud Conspiracy",
      description: "Was the Titanic disaster an elaborate insurance fraud scheme?",
      yesPrice: 0.15,
      noPrice: 0.85,
      volume: 5600,
      posts: 289,
      trending: false,
    },
  ],
};

export const recentActivity = [
  {
    id: 1,
    user: "TruthSeeker99",
    timeAgo: "2 min ago",
    content: "New evidence in JFK case - Zapruder film analysis reveals inconsistencies...",
    userIcon: "🕵️",
  },
  {
    id: 2,
    user: "SkepticalSarah",
    timeAgo: "15 min ago",
    content: "Moon landing hoax debunked AGAIN - here's the science...",
    userIcon: "🔬",
  },
  {
    id: 3,
    user: "AlienHunter",
    timeAgo: "1 hour ago",
    content: "Area 51 worker comes forward with new testimony about UFO tech...",
    userIcon: "👽",
  },
]; 