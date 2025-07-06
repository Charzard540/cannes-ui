import React, { useState } from 'react'
import { useMarketFactory } from '../hooks/useContracts'
import { cn } from '../lib/utils'

interface MarketCreationProps {
  isVibeMode: boolean
  onMarketCreated?: (marketAddress: string) => void
}

export const MarketCreation: React.FC<MarketCreationProps> = ({ 
  isVibeMode, 
  onMarketCreated 
}) => {
  const [question, setQuestion] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { createMarket, isCreating } = useMarketFactory()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return
    
    try {
      const result = await createMarket(question)
      console.log('Market created:', result)
      setQuestion('')
      setIsOpen(false)
      if (onMarketCreated) {
        onMarketCreated(result.hash)
      }
    } catch (error) {
      console.error('Error creating market:', error)
    }
  }
  
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'px-4 py-2 font-bold transition-all duration-300',
          isVibeMode 
            ? 'vibe-button animate-pulse-glow' 
            : 'retro-button'
        )}
      >
        {isVibeMode ? '🚀 CREATE NEW CONSPIRACY MARKET' : 'Create New Market'}
      </button>
    )
  }
  
  return (
    <div className={cn(
      'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50',
      isVibeMode ? 'backdrop-blur-sm' : ''
    )}>
      <div className={cn(
        'w-full max-w-md p-6 mx-4',
        isVibeMode 
          ? 'vibe-market-card' 
          : 'retro-window'
      )}>
        {isVibeMode ? (
          <div className="vibe-section-header mb-4">
            🛸 CREATE CONSPIRACY MARKET
          </div>
        ) : (
          <div className="retro-title-bar mb-4">
            Create New Market
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={cn(
              'block text-sm font-bold mb-2',
              isVibeMode ? 'vibe-text-primary' : 'retro-text'
            )}>
              {isVibeMode ? '🎯 CONSPIRACY QUESTION:' : 'Market Question:'}
            </label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={isVibeMode 
                ? "e.g., Did aliens really crash at Roswell in 1947?" 
                : "Enter your market question..."
              }
              className={cn(
                'w-full p-3 border rounded resize-none h-24',
                isVibeMode 
                  ? 'bg-gray-900 border-green-400 text-green-300 placeholder-green-600 focus:border-green-300 focus:ring-1 focus:ring-green-300' 
                  : 'retro-input'
              )}
              required
            />
          </div>
          
          <div className={cn(
            'text-xs',
            isVibeMode ? 'vibe-text-secondary' : 'retro-text'
          )}>
            {isVibeMode 
              ? '⚡ Market will start in SEEDING phase where LPs can provide initial liquidity' 
              : 'Market will start in seeding phase for initial liquidity provision'
            }
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              disabled={isCreating || !question.trim()}
              className={cn(
                'flex-1 px-4 py-2 font-bold transition-all duration-300',
                isVibeMode 
                  ? 'vibe-button' 
                  : 'retro-button',
                (isCreating || !question.trim()) && 'opacity-50 cursor-not-allowed'
              )}
            >
              {isCreating 
                ? (isVibeMode ? '🔄 CREATING...' : 'Creating...') 
                : (isVibeMode ? '🚀 CREATE MARKET' : 'Create Market')
              }
            </button>
            
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={cn(
                'px-4 py-2 font-bold transition-all duration-300',
                isVibeMode 
                  ? 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black' 
                  : 'retro-button'
              )}
            >
              {isVibeMode ? '❌ CANCEL' : 'Cancel'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MarketCreation 