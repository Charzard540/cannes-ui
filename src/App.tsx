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
        ? 'bg-black text-green-400' 
        : 'bg-gray-100 text-black'
    )}>
      {/* Header */}
      <header className={cn(
        'border-b-2 p-4',
        currentTheme === 'vibe' 
          ? 'border-green-400 bg-black' 
          : 'border-black bg-white'
      )}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={cn(
              'w-8 h-8 rounded-full',
              currentTheme === 'vibe' 
                ? 'bg-green-400' 
                : 'bg-blue-600'
            )} />
            <h1 className={cn(
              'text-2xl font-bold',
              currentTheme === 'vibe' 
                ? 'text-green-400' 
                : 'text-blue-600'
            )}>
              CONSPIRACY PREDICTION EXCHANGE
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
                'px-4 py-2 border-2 transition-all duration-300',
                currentTheme === 'vibe' 
                  ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              )}
            >
              {currentTheme === 'vibe' ? 'RETRO MODE' : 'VIBE MODE'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Welcome Section */}
        <div className={cn(
          'mb-8 p-6 border-2',
          currentTheme === 'vibe' 
            ? 'border-green-400 bg-black' 
            : 'border-black bg-white'
        )}>
          <h2 className={cn(
            'text-3xl font-bold mb-4',
            currentTheme === 'vibe' 
              ? 'text-green-400' 
              : 'text-blue-600'
          )}>
            Welcome to the Truth Market
          </h2>
          <p className={cn(
            'text-lg',
            currentTheme === 'vibe' 
              ? 'text-green-300' 
              : 'text-gray-700'
          )}>
            Where conspiracy theories meet market forces. Place your bets on what you believe is the truth.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockMarkets.map((market) => (
            <div 
              key={market.id}
              className={cn(
                'border-2 p-6 cursor-pointer transition-all duration-300 hover:scale-105',
                currentTheme === 'vibe' 
                  ? 'border-green-400 bg-black hover:bg-green-400 hover:text-black' 
                  : 'border-black bg-white hover:bg-gray-50'
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={cn(
                  'text-xl font-bold',
                  currentTheme === 'vibe' 
                    ? 'text-green-400' 
                    : 'text-blue-600'
                )}>
                  {market.title}
                </h3>
                <span className={cn(
                  'text-sm px-2 py-1 border',
                  currentTheme === 'vibe' 
                    ? 'border-green-400 text-green-400' 
                    : 'border-black text-black'
                )}>
                  {market.category.toUpperCase()}
                </span>
              </div>
              
              <p className={cn(
                'mb-4',
                currentTheme === 'vibe' 
                  ? 'text-green-300' 
                  : 'text-gray-700'
              )}>
                {market.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {market.options.map((option, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={cn(
                      'text-sm',
                      currentTheme === 'vibe' 
                        ? 'text-green-300' 
                        : 'text-gray-700'
                    )}>
                      {option.name}
                    </span>
                    <span className={cn(
                      'text-sm font-bold',
                      currentTheme === 'vibe' 
                        ? 'text-green-400' 
                        : 'text-black'
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
                    ? 'text-green-300' 
                    : 'text-gray-700'
                )}>
                  Volume: {market.totalVolume}
                </span>
                <button 
                  className={cn(
                    'px-4 py-2 border text-sm font-bold transition-all duration-300',
                    currentTheme === 'vibe' 
                      ? isConnected 
                        ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black' 
                        : 'border-green-400 text-green-400 opacity-50 cursor-not-allowed'
                      : isConnected 
                        ? 'border-black text-black hover:bg-black hover:text-white' 
                        : 'border-black text-black opacity-50 cursor-not-allowed'
                  )}
                  disabled={!isConnected}
                >
                  {isConnected ? 'TRADE' : 'CONNECT TO TRADE'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={cn(
          'mt-8 p-6 border-2',
          currentTheme === 'vibe' 
            ? 'border-green-400 bg-black' 
            : 'border-black bg-white'
        )}>
          <h3 className={cn(
            'text-xl font-bold mb-4',
            currentTheme === 'vibe' 
              ? 'text-green-400' 
              : 'text-blue-600'
          )}>
            Market Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className={cn(
                'text-2xl font-bold',
                currentTheme === 'vibe' 
                  ? 'text-green-400' 
                  : 'text-blue-600'
              )}>
                $6.25M
              </div>
              <div className={cn(
                'text-sm',
                currentTheme === 'vibe' 
                  ? 'text-green-300' 
                  : 'text-gray-700'
              )}>
                Total Volume
              </div>
            </div>
            <div className="text-center">
              <div className={cn(
                'text-2xl font-bold',
                currentTheme === 'vibe' 
                  ? 'text-green-400' 
                  : 'text-blue-600'
              )}>
                1,337
              </div>
              <div className={cn(
                'text-sm',
                currentTheme === 'vibe' 
                  ? 'text-green-300' 
                  : 'text-gray-700'
              )}>
                Active Traders
              </div>
            </div>
            <div className="text-center">
              <div className={cn(
                'text-2xl font-bold',
                currentTheme === 'vibe' 
                  ? 'text-green-400' 
                  : 'text-blue-600'
              )}>
                42
              </div>
              <div className={cn(
                'text-sm',
                currentTheme === 'vibe' 
                  ? 'text-green-300' 
                  : 'text-gray-700'
              )}>
                Active Markets
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={cn(
        'border-t-2 mt-12 p-6',
        currentTheme === 'vibe' 
          ? 'border-green-400 bg-black' 
          : 'border-black bg-white'
      )}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={cn(
            'text-sm',
            currentTheme === 'vibe' 
              ? 'text-green-300' 
              : 'text-gray-700'
          )}>
            © 2024 Conspiracy Prediction Exchange. Trade at your own risk. Past performance does not guarantee future results.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App 