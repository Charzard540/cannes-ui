import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

export const walletConfig = getDefaultConfig({
  appName: 'Conspiracy Prediction Exchange',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'your-project-id',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

// Contract addresses for different chains
export const CONTRACT_ADDRESSES = {
  [mainnet.id]: {
    predictionMarket: '0x...',
    token: '0x...',
  },
  [polygon.id]: {
    predictionMarket: '0x...',
    token: '0x...',
  },
  [base.id]: {
    predictionMarket: '0x...',
    token: '0x...',
  },
} as const;

// ABI for the prediction market contract
export const PREDICTION_MARKET_ABI = [
  {
    inputs: [
      { name: 'marketId', type: 'uint256' },
      { name: 'prediction', type: 'bool' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'placeBet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ name: 'marketId', type: 'uint256' }],
    name: 'getMarketInfo',
    outputs: [
      { name: 'yesShares', type: 'uint256' },
      { name: 'noShares', type: 'uint256' },
      { name: 'totalVolume', type: 'uint256' },
      { name: 'resolved', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'endTime', type: 'uint256' },
    ],
    name: 'createMarket',
    outputs: [{ name: 'marketId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const; 