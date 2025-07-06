import React, { useState, useEffect } from 'react'
import { cn } from './lib/utils'
import './App.css'
import { usePrivy } from '@privy-io/react-auth'
import { useAccount, useChainId } from 'wagmi'
import { useMarketFactory } from './hooks/useContracts'
import { getNetworkConfig } from './wagmi'
import MarketCreation from './components/MarketCreation'
import MarketPhases from './components/MarketPhases'
import NetworkSelector from './components/NetworkSelector'

function App() {
  const [currentTheme, setCurrentTheme] = useState<'vibe' | 'retro'>('vibe')
  const [mounted, setMounted] = useState(false)
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null)
  const { login, logout, ready, authenticated } = usePrivy()
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const { allMarkets, marketCount } = useMarketFactory()
  const networkConfig = getNetworkConfig(chainId)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'vibe' ? 'retro' : 'vibe')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className={cn(
      'min-h-screen transition-all duration-1000',
      currentTheme === 'vibe' 
        ? 'vibe-mode' 
        : 'retro-mode'
    )}>
      {/* Header */}
      <header className={cn(
        currentTheme === 'vibe' 
          ? 'vibe-header py-4 px-6' 
          : 'retro-title-bar'
      )}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className={cn(
              'text-2xl font-bold',
              currentTheme === 'vibe' 
                ? 'vibe-title' 
                : 'text-white text-sm'
            )}>
              {currentTheme === 'vibe' ? '🛸 CONSPIRACY PREDICTION EXCHANGE 🛸' : 'Conspiracy Prediction Exchange v1.0'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-xs">
              <div className={cn(
                currentTheme === 'vibe' ? 'vibe-text-secondary' : 'retro-text'
              )}>
                Markets: {marketCount}
              </div>
            </div>
            
            <NetworkSelector isVibeMode={currentTheme === 'vibe'} />
            
            <div className={cn(
              'wallet-wrapper',
              currentTheme === 'vibe' ? 'wallet-vibe' : 'wallet-retro'
            )}>
              {ready && (
                <button
                  onClick={authenticated ? logout : login}
                  className={cn(
                    'px-4 py-2 font-bold transition-all duration-300',
                    currentTheme === 'vibe' 
                      ? 'vibe-button' 
                      : 'retro-button'
                  )}
                >
                  {authenticated ? 'Logout' : 'Login'}
                </button>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className={cn(
                currentTheme === 'vibe' 
                  ? 'vibe-button px-4 py-2' 
                  : 'retro-button'
              )}
            >
              {currentTheme === 'vibe' ? '🌙 VIBE MODE' : 'Vibe Mode'}
            </button>
          </div>
        </div>
        {currentTheme === 'vibe' && (
          <div className="vibe-text-secondary text-center text-sm mt-2 animate-neon-flicker">
            🌟 Betting on the truth behind History's Greatest Mysteries 🌟
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={cn(
        'max-w-6xl mx-auto p-6 relative z-10',
        currentTheme === 'vibe' ? '' : 'retro-text'
      )}>
        {/* Welcome Section */}
        <div className={cn(
          'mb-8 p-6',
          currentTheme === 'vibe' 
            ? 'vibe-welcome-box' 
            : 'retro-window'
        )}>
          {currentTheme === 'retro' && (
            <div className="retro-title-bar mb-2">
              Welcome - Conspiracy Truth Market
            </div>
          )}
          <h2 className={cn(
            currentTheme === 'vibe' 
              ? 'text-xl font-bold mb-4 vibe-text-primary text-center' 
              : 'text-lg font-bold mb-4 text-black retro-text'
          )}>
            {currentTheme === 'vibe' 
              ? '🌟 *** WELCOME TO THE CONSPIRACY PREDICTION EXCHANGE *** 🌟' 
              : 'Welcome to the Truth Market'}
          </h2>
          <p className={cn(
            'text-center leading-relaxed mb-4',
            currentTheme === 'vibe' 
              ? 'text-sm vibe-text-secondary' 
              : 'text-sm text-black retro-text'
          )}>
            {currentTheme === 'vibe' 
              ? '🎯 Put your money where your theories are! Trade shares in historical conspiracy theories and profit from the truth. Each market represents a different theory about past events. Buy "YES" if you believe the conspiracy theory is true, or "NO" if you think the official story is correct.' 
              : 'Place your bets on what you believe is the truth. Trade shares in historical conspiracy theories.'}
          </p>
          {currentTheme === 'vibe' && (
            <div className="text-xs vibe-text-primary text-center animate-pulse-glow">
              ✨ *** UPDATED DAILY *** ✨
            </div>
          )}
          
          {/* Market Creation */}
          <div className="text-center mt-4">
            <MarketCreation 
              isVibeMode={currentTheme === 'vibe'}
              onMarketCreated={(marketAddress) => {
                console.log('New market created:', marketAddress)
              }}
            />
          </div>
        </div>

        {/* Market Selection or Market Detail */}
        {selectedMarket ? (
          <div className="mb-8">
            <div className="mb-4">
              <button
                onClick={() => setSelectedMarket(null)}
                className={cn(
                  'px-4 py-2 font-bold transition-all duration-300',
                  currentTheme === 'vibe' 
                    ? 'vibe-button' 
                    : 'retro-button'
                )}
              >
                {currentTheme === 'vibe' ? '⬅️ BACK TO MARKETS' : '← Back to Markets'}
              </button>
            </div>
            <MarketPhases 
              marketAddress={selectedMarket as `0x${string}`}
              isVibeMode={currentTheme === 'vibe'}
            />
          </div>
        ) : (
          <div className="mb-8">
            <div className={cn(
              'mb-4',
              currentTheme === 'vibe' 
                ? 'vibe-section-header' 
                : 'retro-title-bar'
            )}>
              {currentTheme === 'vibe' ? '🛸 ACTIVE CONSPIRACY MARKETS' : '🛸 Active Markets'}
            </div>
            
            {allMarkets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allMarkets.map((marketAddress, index) => (
                  <div 
                    key={marketAddress}
                    onClick={() => setSelectedMarket(marketAddress)}
                    className={cn(
                      'p-4 cursor-pointer transition-all duration-300',
                      currentTheme === 'vibe' 
                        ? 'vibe-market-card hover:scale-105' 
                        : 'retro-window hover:bg-gray-200'
                    )}
                  >
                    {currentTheme === 'retro' && (
                      <div className="retro-title-bar mb-2">
                        MARKET #{index + 1}
                      </div>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-24 h-16 bg-gray-800 rounded overflow-hidden">
                        <div className={cn(
                          'w-full h-full flex items-center justify-center text-2xl',
                          currentTheme === 'vibe' 
                            ? 'text-green-400' 
                            : 'text-gray-400'
                        )}>
                          🛸
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={cn(
                          'font-bold text-sm mb-1',
                          currentTheme === 'vibe' 
                            ? 'vibe-text-primary' 
                            : 'text-black retro-text'
                        )}>
                          Market #{index + 1}
                        </h3>
                        <p className={cn(
                          'text-xs mb-2',
                          currentTheme === 'vibe' 
                            ? 'vibe-text-secondary' 
                            : 'text-black retro-text'
                        )}>
                          Address: {marketAddress.substring(0, 10)}...
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className={cn(
                            'text-xs',
                            currentTheme === 'vibe' 
                              ? 'vibe-text-secondary' 
                              : 'text-black retro-text'
                          )}>
                            Click to interact
                          </div>
                          <button 
                            className={cn(
                              'text-xs px-3 py-1',
                              currentTheme === 'vibe' 
                                ? 'vibe-button' 
                                : 'retro-button'
                            )}
                          >
                            {currentTheme === 'vibe' ? '🌟 ENTER MARKET' : 'Enter Market'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={cn(
                'text-center py-12',
                currentTheme === 'vibe' 
                  ? 'vibe-market-card' 
                  : 'retro-window'
              )}>
                <div className={cn(
                  'text-4xl mb-4',
                  currentTheme === 'vibe' 
                    ? 'vibe-text-primary' 
                    : 'text-black retro-text'
                )}>
                  🛸
                </div>
                <h3 className={cn(
                  'font-bold mb-2',
                  currentTheme === 'vibe' 
                    ? 'vibe-text-primary' 
                    : 'text-black retro-text'
                )}>
                  {currentTheme === 'vibe' ? 'NO MARKETS DETECTED' : 'No Markets Available'}
                </h3>
                <p className={cn(
                  'text-sm',
                  currentTheme === 'vibe' 
                    ? 'vibe-text-secondary' 
                    : 'text-black retro-text'
                )}>
                  {currentTheme === 'vibe' 
                    ? 'Be the first to create a conspiracy prediction market!' 
                    : 'Create the first market to start trading.'
                  }
                </p>
              </div>
            )}
          </div>
        )}

        {/* Live Stats Section */}
        <div className={cn(
          'mt-8 p-4 mb-8',
          currentTheme === 'vibe' 
            ? 'vibe-stats-section' 
            : 'retro-window'
        )}>
          <div className={cn(
            'mb-4',
            currentTheme === 'vibe' 
              ? 'vibe-section-header' 
              : 'retro-title-bar'
          )}>
            {currentTheme === 'vibe' ? '📊 *** LIVE STATS *** 📊' : 'Live Statistics'}
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className={cn(
              currentTheme === 'vibe' 
                ? 'vibe-stat-box' 
                : 'retro-input'
            )}>
              <div className={cn(
                'text-xs',
                currentTheme === 'vibe' 
                  ? 'vibe-text-secondary' 
                  : 'text-black retro-text'
              )}>
                Network
              </div>
              <div className={cn(
                'font-bold text-xs',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                {networkConfig?.name || 'Unknown'}
              </div>
            </div>
            <div className={cn(
              currentTheme === 'vibe' 
                ? 'vibe-stat-box' 
                : 'retro-input'
            )}>
              <div className={cn(
                'text-xs',
                currentTheme === 'vibe' 
                  ? 'vibe-text-secondary' 
                  : 'text-black retro-text'
              )}>
                Total Markets
              </div>
              <div className={cn(
                'font-bold',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                {marketCount}
              </div>
            </div>
            <div className={cn(
              currentTheme === 'vibe' 
                ? 'vibe-stat-box' 
                : 'retro-input'
            )}>
              <div className={cn(
                'text-xs',
                currentTheme === 'vibe' 
                  ? 'vibe-text-secondary' 
                  : 'text-black retro-text'
              )}>
                Connection
              </div>
              <div className={cn(
                'font-bold text-xs',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                {isConnected ? 'Connected' : 'Disconnected'}
              </div>
            </div>
            <div className={cn(
              currentTheme === 'vibe' 
                ? 'vibe-stat-box' 
                : 'retro-input'
            )}>
              <div className={cn(
                'text-xs',
                currentTheme === 'vibe' 
                  ? 'vibe-text-secondary' 
                  : 'text-black retro-text'
              )}>
                Chain ID
              </div>
              <div className={cn(
                'font-bold',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                {chainId || 'Unknown'}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={cn(
        'mt-12 py-6 px-6',
        currentTheme === 'vibe' 
          ? 'vibe-footer' 
          : 'retro-status-bar'
      )}>
        <div className="max-w-6xl mx-auto text-center">
          <div className={cn(
            'text-xs mb-2',
            currentTheme === 'vibe' 
              ? 'vibe-text-secondary' 
              : 'text-black retro-text'
          )}>
            {currentTheme === 'vibe' ? '🌟 Conspiracy Prediction Exchange v3.0 🌟' : 'Conspiracy Prediction Exchange v1.0'}
          </div>
          <div className={cn(
            'text-xs mb-2',
            currentTheme === 'vibe' 
              ? 'vibe-text-secondary' 
              : 'text-black retro-text'
          )}>
            {currentTheme === 'vibe' ? 'Copyright © 2024 - All Rights Reserved' : 'Copyright © 1996 - All Rights Reserved'}
          </div>
          <div className={cn(
            'text-xs',
            currentTheme === 'vibe' 
              ? 'vibe-text-primary animate-color-shift' 
              : 'text-black retro-text'
          )}>
            {currentTheme === 'vibe' ? '✨ "The TRUTH is out there... and it\'s profitable!" ✨' : '"The Truth is out there... and it\'s profitable!"'}
          </div>
          <div className={cn(
            'text-xs mt-1',
            currentTheme === 'vibe' 
              ? 'vibe-text-secondary' 
              : 'text-black retro-text'
          )}>
            {currentTheme === 'vibe' ? 'About | Rules | Contact | Disclaimer' : 'About | Rules | Contact | Disclaimer'}
          </div>
          <div className={cn(
            'text-xs mt-1',
            currentTheme === 'vibe' 
              ? 'vibe-text-secondary' 
              : 'text-black retro-text'
          )}>
            {currentTheme === 'vibe' ? '🚀 Best viewed with Internet Explorer 4.0 or Netscape 6.0 🚀' : 'Best viewed with Internet Explorer 3.0 or Netscape 4.0'}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 