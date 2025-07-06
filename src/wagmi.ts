import { createConfig } from '@privy-io/wagmi';
import { http } from 'wagmi';
import { mantleSepoliaTestnet } from 'wagmi/chains';
import { defineChain } from 'viem';

// Re-export the imported chains
export { mantleSepoliaTestnet };

// Define Flow testnet chain
export const flowTestnet = defineChain({
  id: 545,
  name: 'Flow EVM Testnet',
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
  [flowTestnet.id]: {
    name: 'Flow EVM Testnet',
    contracts: {
      USDC: '0xd7d43ab7b365f0d0789aE83F4385fA710FfdC98F', // USDF token
      MarketFactory: '0x784F2Ca90BF262679860D4a368D702F8ce66Eb7B',
    },
    blockExplorer: 'https://evm-testnet.flowscan.io',
  },
  [mantleSepoliaTestnet.id]: {
    name: 'Mantle Sepolia Testnet',
    contracts: {
      USDC: '0x0000000000000000000000000000000000000000', // To be deployed on testnet
      MarketFactory: '0x0000000000000000000000000000000000000000', // To be deployed
    },
    blockExplorer: 'https://sepolia.mantlescan.xyz',
  },
};

export const config = createConfig({
  chains: [flowTestnet, mantleSepoliaTestnet],
  transports: {
    [flowTestnet.id]: http('https://testnet.evm.nodes.onflow.org'),
    [mantleSepoliaTestnet.id]: http('https://rpc.sepolia.mantle.xyz'),
  },
});

// Helper function to get network config
export function getNetworkConfig(chainId: number) {
  return networkConfigs[chainId];
}

// Get current network contracts
export const getCurrentNetworkContracts = (chainId: number) => {
  const config = getNetworkConfig(chainId);
  return config?.contracts || null;
}; 