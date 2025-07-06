import { createConfig } from '@privy-io/wagmi';
import { http } from 'wagmi';
import { mantleTestnet } from 'wagmi/chains';
import { defineChain } from 'viem';

// Re-export the imported chains
export { mantleTestnet };

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

// Define Flow testnet chain
export const flowTestnet = defineChain({
  id: 545,
  name: 'Flow Testnet',
  network: 'flow-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Flow',
    symbol: 'FLOW',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.evm.nodes.onflow.org'],
    },
    public: {
      http: ['https://testnet.evm.nodes.onflow.org'],
    },
  },
  blockExplorers: {
    default: { name: 'Flow Testnet Diver', url: 'https://evm-testnet.flowscan.io' },
  },
  testnet: true,
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
    name: 'Anvil Testnet',
    contracts: {
      USDC: '0x0000000000000000000000000000000000000000', // To be deployed
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'http://localhost:8545',
  },
  [mantleTestnet.id]: {
    name: 'Mantle Testnet',
    contracts: {
      USDC: '0x0000000000000000000000000000000000000000', // To be deployed on testnet
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://sepolia.mantlescan.xyz',
  },
  [flowTestnet.id]: {
    name: 'Flow Testnet',
    contracts: {
      USDC: '0x0000000000000000000000000000000000000000', // To be deployed on testnet
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://evm-testnet.flowscan.io',
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

export const config = createConfig({
  chains: [anvil, mantleTestnet, flowTestnet],
  transports: {
    [anvil.id]: http('http://127.0.0.1:8545'),
    [mantleTestnet.id]: http(),
    [flowTestnet.id]: http('https://testnet.evm.nodes.onflow.org'),
  },
}); 