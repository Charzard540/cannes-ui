import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, hardhat, localhost } from 'wagmi/chains';
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

// Network configurations with contract addresses
export const networkConfigs = {
  [anvil.id]: {
    name: 'Anvil Local',
    contracts: {
      USDC: '0x0000000000000000000000000000000000000000', // To be deployed
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'http://localhost:8545',
  },
  [sepolia.id]: {
    name: 'Sepolia Testnet',
    contracts: {
      USDC: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8', // Mock USDC on Sepolia
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://sepolia.etherscan.io',
  },
  [mainnet.id]: {
    name: 'Ethereum Mainnet',
    contracts: {
      USDC: '0xA0b86a33E6FE17a02CdE14C23F4A3a45B3E83E85', // Real USDC on mainnet
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://etherscan.io',
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
  chains: [anvil, sepolia, mainnet],
  ssr: false,
}); 