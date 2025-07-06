"use client";

import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { walletConfig } from '@/lib/wallet-config';
import { useTheme } from './theme-context';

const queryClient = new QueryClient();

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const { isVibeMode } = useTheme();

  const rainbowTheme = isVibeMode 
    ? darkTheme({
        accentColor: '#00ff41',
        accentColorForeground: '#000000',
        borderRadius: 'medium',
        fontStack: 'system',
        overlayBlur: 'small',
      })
    : lightTheme({
        accentColor: '#008000',
        accentColorForeground: '#ffffff',
        borderRadius: 'none',
        fontStack: 'system',
        overlayBlur: 'none',
      });

  return (
    <WagmiProvider config={walletConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={rainbowTheme} modalSize="compact">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 