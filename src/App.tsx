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
        </div>

        {/* Markets by Category */}
        {/* Government & Politics */}
        <div className="mb-8">
          <div className={cn(
            'mb-4',
            currentTheme === 'vibe' 
              ? 'vibe-section-header' 
              : 'retro-title-bar'
          )}>
            {currentTheme === 'vibe' ? '🏛️ GOVERNMENT & POLITICS' : '🏛️ Government & Politics'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockMarkets.filter(market => market.category === 'government').map((market) => (
              <div 
                key={market.id}
                className={cn(
                  'p-4 cursor-pointer transition-all duration-300',
                  currentTheme === 'vibe' 
                    ? 'vibe-market-card government' 
                    : 'retro-window hover:bg-gray-200'
                )}
              >
                {currentTheme === 'retro' && (
                  <div className="retro-title-bar mb-2">
                    {market.category.toUpperCase()} - {market.title}
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-24 h-16 bg-gray-800 rounded overflow-hidden">
                    <img 
                      src={market.image}
                      alt={market.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      'font-bold text-sm mb-1',
                      currentTheme === 'vibe' 
                        ? 'vibe-text-government' 
                        : 'text-black retro-text'
                    )}>
                      {market.title}
                    </h3>
                    <p className={cn(
                      'text-xs mb-2',
                      currentTheme === 'vibe' 
                        ? 'vibe-text-secondary' 
                        : 'text-black retro-text'
                    )}>
                      {market.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex space-x-4">
                        <span className={cn(
                          currentTheme === 'vibe' 
                            ? 'vibe-text-government' 
                            : 'text-black retro-text'
                        )}>
                          ✅ YES: {market.options[0].percentage}%
                        </span>
                        <span className={cn(
                          currentTheme === 'vibe' 
                            ? 'vibe-text-government' 
                            : 'text-black retro-text'
                        )}>
                          ❌ NO: {100 - market.options[0].percentage}%
                        </span>
                      </div>
                      <div className={cn(
                        currentTheme === 'vibe' 
                          ? 'vibe-text-secondary' 
                          : 'text-black retro-text'
                      )}>
                        💰 Volume: {market.totalVolume}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className={cn(
                        'text-xs',
                        currentTheme === 'vibe' 
                          ? 'vibe-text-secondary' 
                          : 'text-black retro-text'
                      )}>
                        💬 Posts: 847
                      </div>
                      <button 
                        className={cn(
                          'text-xs px-3 py-1',
                          currentTheme === 'vibe' 
                            ? 'vibe-button government' 
                            : 'retro-button'
                        )}
                        disabled={!isConnected}
                      >
                        {currentTheme === 'vibe' ? '🌟 TRADE NOW' : 'Trade Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space & UFOs */}
        <div className="mb-8">
          <div className={cn(
            'mb-4',
            currentTheme === 'vibe' 
              ? 'vibe-section-header' 
              : 'retro-title-bar'
          )}>
            {currentTheme === 'vibe' ? '🛸 SPACE & UFOS' : '🛸 Space & UFOs'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockMarkets.filter(market => market.category === 'space').map((market) => (
              <div 
                key={market.id}
                className={cn(
                  'p-4 cursor-pointer transition-all duration-300',
                  currentTheme === 'vibe' 
                    ? 'vibe-market-card space' 
                    : 'retro-window hover:bg-gray-200'
                )}
              >
                {currentTheme === 'retro' && (
                  <div className="retro-title-bar mb-2">
                    {market.category.toUpperCase()} - {market.title}
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-24 h-16 bg-gray-800 rounded overflow-hidden">
                    <img 
                      src={market.image}
                      alt={market.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      'font-bold text-sm mb-1',
                      currentTheme === 'vibe' 
                        ? 'vibe-text-space' 
                        : 'text-black retro-text'
                    )}>
                      {market.title}
                    </h3>
                    <p className={cn(
                      'text-xs mb-2',
                      currentTheme === 'vibe' 
                        ? 'vibe-text-secondary' 
                        : 'text-black retro-text'
                    )}>
                      {market.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex space-x-4">
                        <span className={cn(
                          currentTheme === 'vibe' 
                            ? 'vibe-text-space' 
                            : 'text-black retro-text'
                        )}>
                          ✅ YES: {market.options[0].percentage}%
                        </span>
                        <span className={cn(
                          currentTheme === 'vibe' 
                            ? 'vibe-text-space' 
                            : 'text-black retro-text'
                        )}>
                          ❌ NO: {100 - market.options[0].percentage}%
                        </span>
                      </div>
                      <div className={cn(
                        currentTheme === 'vibe' 
                          ? 'vibe-text-secondary' 
                          : 'text-black retro-text'
                      )}>
                        💰 Volume: {market.totalVolume}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className={cn(
                        'text-xs',
                        currentTheme === 'vibe' 
                          ? 'vibe-text-secondary' 
                          : 'text-black retro-text'
                      )}>
                        💬 Posts: 1203
                      </div>
                      <button 
                        className={cn(
                          'text-xs px-3 py-1',
                          currentTheme === 'vibe' 
                            ? 'vibe-button space' 
                            : 'retro-button'
                        )}
                        disabled={!isConnected}
                      >
                        {currentTheme === 'vibe' ? '🌟 TRADE NOW' : 'Trade Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Events */}
        <div className="mb-8">
          <div className={cn(
            'mb-4',
            currentTheme === 'vibe' 
              ? 'vibe-section-header' 
              : 'retro-title-bar'
          )}>
            {currentTheme === 'vibe' ? '📜 HISTORICAL EVENTS' : '📜 Historical Events'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockMarkets.filter(market => market.category === 'ancient').map((market) => (
              <div 
                key={market.id}
                className={cn(
                  'p-4 cursor-pointer transition-all duration-300',
                  currentTheme === 'vibe' 
                    ? 'vibe-market-card ancient' 
                    : 'retro-window hover:bg-gray-200'
                )}
              >
                {currentTheme === 'retro' && (
                  <div className="retro-title-bar mb-2">
                    {market.category.toUpperCase()} - {market.title}
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-24 h-16 bg-gray-800 rounded overflow-hidden">
                    <img 
                      src={market.image}
                      alt={market.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      'font-bold text-sm mb-1',
                      currentTheme === 'vibe' 
                        ? 'vibe-text-ancient' 
                        : 'text-black retro-text'
                    )}>
                      {market.title}
                    </h3>
                    <p className={cn(
                      'text-xs mb-2',
                      currentTheme === 'vibe' 
                        ? 'vibe-text-secondary' 
                        : 'text-black retro-text'
                    )}>
                      {market.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex space-x-4">
                        <span className={cn(
                          currentTheme === 'vibe' 
                            ? 'vibe-text-ancient' 
                            : 'text-black retro-text'
                        )}>
                          ✅ YES: {market.options[0].percentage}%
                        </span>
                        <span className={cn(
                          currentTheme === 'vibe' 
                            ? 'vibe-text-ancient' 
                            : 'text-black retro-text'
                        )}>
                          ❌ NO: {100 - market.options[0].percentage}%
                        </span>
                      </div>
                      <div className={cn(
                        currentTheme === 'vibe' 
                          ? 'vibe-text-secondary' 
                          : 'text-black retro-text'
                      )}>
                        💰 Volume: {market.totalVolume}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className={cn(
                        'text-xs',
                        currentTheme === 'vibe' 
                          ? 'vibe-text-secondary' 
                          : 'text-black retro-text'
                      )}>
                        💬 Posts: 478
                      </div>
                      <button 
                        className={cn(
                          'text-xs px-3 py-1',
                          currentTheme === 'vibe' 
                            ? 'vibe-button ancient' 
                            : 'retro-button'
                        )}
                        disabled={!isConnected}
                      >
                        {currentTheme === 'vibe' ? '🌟 TRADE NOW' : 'Trade Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
                Users Online
              </div>
              <div className={cn(
                'font-bold',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                1,337
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
                Active Markets
              </div>
              <div className={cn(
                'font-bold',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                42
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
                24h Volume
              </div>
              <div className={cn(
                'font-bold',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                $84,120
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
                Total Trades
              </div>
              <div className={cn(
                'font-bold',
                currentTheme === 'vibe' 
                  ? 'vibe-text-primary' 
                  : 'text-black retro-text'
              )}>
                156,789
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