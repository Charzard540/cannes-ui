import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './wagmi';
import { mantleSepoliaTestnet, flowTestnet } from './wagmi';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrivyProvider
      appId="cmcr8ydiy0059ky0nkcft8x0e"
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#00ffff',
          walletList: ['metamask', 'coinbase_wallet', 'rainbow'],
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        supportedChains: [flowTestnet, mantleSepoliaTestnet],
        loginMethods: ['wallet', 'email', 'sms', 'google', 'twitter', 'discord']
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <App />
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  </React.StrictMode>,
) 