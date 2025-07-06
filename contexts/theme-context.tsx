"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'vibe' | 'retro';

interface ThemeContextType {
  theme: Theme;
  isVibeMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('vibe');

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("conspiracyTheme");
    if (savedTheme === "vibe" || savedTheme === "retro") {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'vibe' ? 'retro' : 'vibe';
    setTheme(newTheme);
    localStorage.setItem("conspiracyTheme", newTheme);
  };

  const value = {
    theme,
    isVibeMode: theme === 'vibe',
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 