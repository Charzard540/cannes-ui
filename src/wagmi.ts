import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, mantle } from 'wagmi/chains';
import { defineChain } from 'viem';

// Define local anvil chain
export const anvil = defineChain({
  id: 31337,
  name: 'Anvil',
  network: 'anvil',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
    public: {
      http: ['http://127.0.0.1:8545'],
    },
  },
  blockExplorers: {
    default: { name: 'Local', url: 'http://localhost:8545' },
  },
  testnet: true,
});

// Define Flow mainnet chain
export const flowMainnet = defineChain({
  id: 747,
  name: 'Flow Mainnet',
  network: 'flow-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Flow',
    symbol: 'FLOW',
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet.evm.nodes.onflow.org'],
    },
    public: {
      http: ['https://mainnet.evm.nodes.onflow.org'],
    },
  },
  blockExplorers: {
    default: { name: 'Flow Diver', url: 'https://evm.flowscan.io' },
  },
  testnet: false,
});

// Network configurations with contract addresses
export const networkConfigs: Record<number, {
  name: string;
  contracts: {
    USDC: string;
    MarketFactory: string;
  };
  blockExplorer: string;
}> = {
  [anvil.id]: {
    name: 'Anvil Local',
    contracts: {
      USDC: '0x0000000000000000000000000000000000000000', // To be deployed
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'http://localhost:8545',
  },
  [base.id]: {
    name: 'Base',
    contracts: {
      USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC on Base
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://basescan.org',
  },
  [mantle.id]: {
    name: 'Mantle',
    contracts: {
      USDC: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9', // USDC on Mantle
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://mantlescan.xyz',
  },
  [flowMainnet.id]: {
    name: 'Flow Mainnet',
    contracts: {
      USDC: '0xF1815bd50389c46847f0Bda824eC8da914045D14', // USDC on Flow mainnet
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://evm.flowscan.io',
  },
};

// Get network config by chain ID
export const getNetworkConfig = (chainId: number) => {
  return networkConfigs[chainId] || null;
};

// Get current network contracts
export const getCurrentNetworkContracts = (chainId: number) => {
  const config = getNetworkConfig(chainId);
  return config?.contracts || null;
};

export const config = getDefaultConfig({
  appName: 'Conspiracy Prediction Exchange',
  projectId: 'YOUR_PROJECT_ID',
  chains: [anvil, base, mantle, flowMainnet],
  ssr: false,
}); 