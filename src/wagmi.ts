import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Conspiracy Prediction Exchange',
  projectId: 'conspiracy-prediction-exchange',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
}); 