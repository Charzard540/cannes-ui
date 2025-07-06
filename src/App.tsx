import React, { useState, useEffect } from 'react'
import { cn } from './lib/utils'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

// Mock data for conspiracy theory markets
const mockMarkets = [
  {
    id: 1,
    title: "JFK Assassination",
    description: "Who was really behind the JFK assassination?",
    options: [
      { name: "CIA", percentage: 45, color: "#ff6b6b" },
      { name: "Mafia", percentage: 25, color: "#4ecdc4" },
      { name: "LBJ", percentage: 15, color: "#45b7d1" },
      { name: "Lone Gunman", percentage: 15, color: "#96ceb4" }
    ],
    totalVolume: "$2.3M",
    category: "government",
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "Moon Landing",
    description: "Did we really land on the moon in 1969?",
    options: [
      { name: "Real", percentage: 70, color: "#feca57" },
      { name: "Fake", percentage: 30, color: "#ff9ff3" }
    ],
    totalVolume: "$1.8M",
    category: "space",
    image: "/moon-landing.jpg"
  },
  {
    id: 3,
    title: "Area 51",
    description: "What's really happening at Area 51?",
    options: [
      { name: "Aliens", percentage: 40, color: "#48dbfb" },
      { name: "Military Tech", percentage: 35, color: "#0abde3" },
      { name: "Nothing Special", percentage: 25, color: "#006ba6" }
    ],
    totalVolume: "$1.2M",
    category: "aliens",
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "Pyramids Construction",
    description: "How were the Egyptian pyramids really built?",
    options: [
      { name: "Human Labor", percentage: 55, color: "#ffeaa7" },
      { name: "Aliens", percentage: 30, color: "#fd79a8" },
      { name: "Lost Technology", percentage: 15, color: "#fdcb6e" }
    ],
    totalVolume: "$950K",
    category: "ancient",
    image: "/pyramids.jpeg"
  }
]

function App() {
  const [currentTheme, setCurrentTheme] = useState<'vibe' | 'retro'>('vibe')
  const [mounted, setMounted] = useState(false)
  const { isConnected } = useAccount()

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
          ? 'border-b-2 border-green-400 bg-gradient-to-r from-black via-gray-900 to-black p-4 vibe-border' 
          : 'retro-title-bar'
      )}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={cn(
              'w-8 h-8',
              currentTheme === 'vibe' 
                ? 'bg-green-400 rounded-full animate-pulse-glow' 
                : 'bg-gray-400 border border-gray-600'
            )} />
            <h1 className={cn(
              'text-2xl font-bold',
              currentTheme === 'vibe' 
                ? 'text-green-400 vibe-text animate-glitch' 
                : 'text-white text-sm'
            )}>
              {currentTheme === 'vibe' ? '>>> CONSPIRACY PREDICTION EXCHANGE <<<' : 'Conspiracy Prediction Exchange v1.0'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={cn(
              'rainbow-kit-wrapper',
              currentTheme === 'vibe' ? 'rainbow-kit-vibe' : 'rainbow-kit-retro'
            )}>
              <ConnectButton />
            </div>
            <button
              onClick={toggleTheme}
              className={cn(
                currentTheme === 'vibe' 
                  ? 'vibe-button px-4 py-2 text-green-400' 
                  : 'retro-button'
              )}
            >
              {currentTheme === 'vibe' ? '[ RETRO MODE ]' : 'Vibe Mode'}
            </button>
          </div>
        </div>
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
            ? 'vibe-card' 
            : 'retro-window'
        )}>
          {currentTheme === 'retro' && (
            <div className="retro-title-bar mb-2">
              Welcome - Conspiracy Truth Market
            </div>
          )}
          <h2 className={cn(
            currentTheme === 'vibe' 
              ? 'text-3xl font-bold mb-4 text-green-400 vibe-text' 
              : 'text-lg font-bold mb-4 text-black retro-text'
          )}>
            {currentTheme === 'vibe' 
              ? '>>> WELCOME TO THE TRUTH MATRIX <<<' 
              : 'Welcome to the Truth Market'}
          </h2>
          <p className={cn(
            currentTheme === 'vibe' 
              ? 'text-lg text-green-300 vibe-text' 
              : 'text-sm text-black retro-text'
          )}>
            {currentTheme === 'vibe' 
              ? 'WHERE CONSPIRACY THEORIES MEET MARKET FORCES. JACK INTO THE SYSTEM AND PLACE YOUR BETS ON REALITY ITSELF...' 
              : 'Place your bets on what you believe is the truth. Trade shares in historical conspiracy theories.'}
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockMarkets.map((market) => (
            <div 
              key={market.id}
              className={cn(
                'p-6 cursor-pointer transition-all duration-300',
                currentTheme === 'vibe' 
                  ? 'vibe-card hover:scale-105' 
                  : 'retro-window hover:bg-gray-200'
              )}
            >
              {currentTheme === 'retro' && (
                <div className="retro-title-bar mb-2">
                  {market.category.toUpperCase()} - {market.title}
                </div>
              )}
              <div className="flex items-center justify-between mb-4">
                <h3 className={cn(
                  currentTheme === 'vibe' 
                    ? 'text-xl font-bold text-green-400 vibe-text' 
                    : 'text-sm font-bold text-black retro-text'
                )}>
                  {currentTheme === 'vibe' ? `>>> ${market.title.toUpperCase()} <<<` : market.title}
                </h3>
                {currentTheme === 'vibe' && (
                  <span className="text-sm px-2 py-1 border border-green-400 text-green-400 vibe-text">
                    {market.category.toUpperCase()}
                  </span>
                )}
              </div>
              
              <p className={cn(
                'mb-4',
                currentTheme === 'vibe' 
                  ? 'text-green-300 vibe-text' 
                  : 'text-xs text-black retro-text'
              )}>
                {market.description}
              </p>
              
              <div className={cn(
                'space-y-2 mb-4',
                currentTheme === 'retro' ? 'retro-group' : ''
              )}>
                {currentTheme === 'retro' && (
                  <div className="text-xs font-bold mb-2">Betting Options:</div>
                )}
                {market.options.map((option, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={cn(
                      'text-sm',
                      currentTheme === 'vibe' 
                        ? 'text-green-300 vibe-text' 
                        : 'text-black retro-text text-xs'
                    )}>
                      {option.name}
                    </span>
                    <span className={cn(
                      'text-sm font-bold',
                      currentTheme === 'vibe' 
                        ? 'text-green-400 vibe-text' 
                        : 'text-black retro-text text-xs'
                    )}>
                      {option.percentage}%
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className={cn(
                  'text-sm',
                  currentTheme === 'vibe' 
                    ? 'text-green-300 vibe-text' 
                    : 'text-black retro-text text-xs'
                )}>
                  Volume: {market.totalVolume}
                </span>
                <button 
                  className={cn(
                    currentTheme === 'vibe' 
                      ? isConnected 
                        ? 'vibe-button px-4 py-2 text-green-400' 
                        : 'vibe-button px-4 py-2 text-green-400 opacity-50 cursor-not-allowed'
                      : isConnected 
                        ? 'retro-button' 
                        : 'retro-button opacity-50 cursor-not-allowed'
                  )}
                  disabled={!isConnected}
                >
                  {currentTheme === 'vibe' 
                    ? (isConnected ? '[ TRADE ]' : '[ CONNECT TO TRADE ]')
                    : (isConnected ? 'Trade' : 'Connect to Trade')
                  }
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={cn(
          'mt-8 p-6',
          currentTheme === 'vibe' 
            ? 'vibe-card' 
            : 'retro-window'
        )}>
          {currentTheme === 'retro' && (
            <div className="retro-title-bar mb-2">
              Market Statistics
            </div>
          )}
          <h3 className={cn(
            currentTheme === 'vibe' 
              ? 'text-xl font-bold mb-4 text-green-400 vibe-text' 
              : 'text-sm font-bold mb-4 text-black retro-text'
          )}>
            {currentTheme === 'vibe' ? '>>> MARKET STATISTICS <<<' : 'Current Market Data'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={cn(
              'text-center',
              currentTheme === 'retro' ? 'retro-group' : ''
            )}>
              <div className={cn(
                currentTheme === 'vibe' 
                  ? 'text-2xl font-bold text-green-400 vibe-text animate-pulse-glow' 
                  : 'text-lg font-bold text-black retro-text'
              )}>
                $6.25M
              </div>
              <div className={cn(
                currentTheme === 'vibe' 
                  ? 'text-sm text-green-300 vibe-text' 
                  : 'text-xs text-black retro-text'
              )}>
                Total Volume
              </div>
            </div>
            <div className={cn(
              'text-center',
              currentTheme === 'retro' ? 'retro-group' : ''
            )}>
              <div className={cn(
                currentTheme === 'vibe' 
                  ? 'text-2xl font-bold text-green-400 vibe-text animate-pulse-glow' 
                  : 'text-lg font-bold text-black retro-text'
              )}>
                1,337
              </div>
              <div className={cn(
                currentTheme === 'vibe' 
                  ? 'text-sm text-green-300 vibe-text' 
                  : 'text-xs text-black retro-text'
              )}>
                Active Traders
              </div>
            </div>
            <div className={cn(
              'text-center',
              currentTheme === 'retro' ? 'retro-group' : ''
            )}>
              <div className={cn(
                currentTheme === 'vibe' 
                  ? 'text-2xl font-bold text-green-400 vibe-text animate-pulse-glow' 
                  : 'text-lg font-bold text-black retro-text'
              )}>
                42
              </div>
              <div className={cn(
                currentTheme === 'vibe' 
                  ? 'text-sm text-green-300 vibe-text' 
                  : 'text-xs text-black retro-text'
              )}>
                Active Markets
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={cn(
        'mt-12 p-6',
        currentTheme === 'vibe' 
          ? 'border-t-2 border-green-400 bg-gradient-to-r from-black via-gray-900 to-black vibe-border' 
          : 'retro-status-bar'
      )}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={cn(
            currentTheme === 'vibe' 
              ? 'text-sm text-green-300 vibe-text' 
              : 'text-xs text-black retro-text'
          )}>
            {currentTheme === 'vibe' 
              ? '© 2024 CONSPIRACY PREDICTION EXCHANGE - TRADE AT YOUR OWN RISK - THE TRUTH IS OUT THERE'
              : '© 1996 Conspiracy Prediction Exchange v1.0 - All Rights Reserved'
            }
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App 