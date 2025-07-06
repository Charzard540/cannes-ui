import React from 'react';
import { useChainId, useSwitchChain } from 'wagmi';
import { cn } from '../lib/utils';
import { getNetworkConfig } from '../wagmi';

interface NetworkSelectorProps {
  isVibeMode: boolean;
}

const TESTNET_CHAINS = [
  { id: 545, name: 'Flow EVM Testnet' },
  { id: 5003, name: 'Mantle Sepolia Testnet' },
];

export default function NetworkSelector({ isVibeMode }: NetworkSelectorProps) {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const currentNetwork = getNetworkConfig(chainId);

  const handleNetworkChange = (newChainId: number) => {
    if (newChainId !== chainId) {
      switchChain({ chainId: newChainId });
    }
  };

  return (
    <div className={cn(
      'flex flex-col space-y-2',
      isVibeMode ? 'vibe-text-secondary' : 'retro-text'
    )}>
      <label className={cn(
        'text-xs font-bold',
        isVibeMode ? 'vibe-text-primary' : 'text-black'
      )}>
        {isVibeMode ? '🌐 NETWORK' : 'Network'}
      </label>
      
      <select
        value={chainId}
        onChange={(e) => handleNetworkChange(Number(e.target.value))}
        className={cn(
          'px-3 py-2 text-sm font-bold transition-all duration-300',
          isVibeMode 
            ? 'bg-gradient-to-r from-purple-900 to-blue-900 border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 focus:border-cyan-300' 
            : 'bg-white border border-gray-400 text-black hover:bg-gray-100 focus:bg-gray-100',
          isVibeMode ? 'rounded-md' : 'rounded-none'
        )}
        style={isVibeMode ? {
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
          textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
        } : {}}
      >
        {TESTNET_CHAINS.map((chain) => (
          <option 
            key={chain.id} 
            value={chain.id}
            className={isVibeMode ? 'bg-purple-900 text-cyan-400' : 'bg-white text-black'}
          >
            {chain.name}
          </option>
        ))}
      </select>
      
      {currentNetwork && (
        <div className={cn(
          'text-xs',
          isVibeMode ? 'vibe-text-secondary' : 'text-gray-600'
        )}>
          Connected to: {currentNetwork.name}
        </div>
      )}
    </div>
  );
} 