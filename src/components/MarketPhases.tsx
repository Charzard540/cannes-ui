import React, { useState } from 'react'
import { usePredictionMarket, useUSDC, getPhaseDisplay } from '../hooks/useContracts'
import { cn } from '../lib/utils'
import { MARKET_PHASES } from '../contracts/abis'

interface MarketPhasesProps {
  marketAddress: `0x${string}`
  isVibeMode: boolean
}

export const MarketPhases: React.FC<MarketPhasesProps> = ({ 
  marketAddress, 
  isVibeMode 
}) => {
  const { market, userLPContribution, hasVoted, allCriteria, ...actions } = usePredictionMarket(marketAddress)
  const { balance: usdcBalance, approve } = useUSDC()
  
  const [seedAmount, setSeedAmount] = useState('')
  const [proposalCriteria, setProposalCriteria] = useState('')
  const [selectedCriteria, setSelectedCriteria] = useState('')
  const [tradeAmount, setTradeAmount] = useState('')
  const [isBuyingYes, setIsBuyingYes] = useState(true)
  
  if (!market) {
    return (
      <div className={cn(
        'p-4 text-center',
        isVibeMode ? 'vibe-text-secondary' : 'retro-text'
      )}>
        {isVibeMode ? '🔍 LOADING MARKET DATA...' : 'Loading market data...'}
      </div>
    )
  }
  
  const phaseDisplay = getPhaseDisplay(market.currentPhase)
  const isLP = parseFloat(userLPContribution) > 0
  
  const handleSeedLiquidity = async () => {
    if (!seedAmount || parseFloat(seedAmount) <= 0) return
    
    try {
      // First approve USDC spending
      await approve(marketAddress, seedAmount)
      // Then seed liquidity
      await actions.seedLiquidity(seedAmount)
      setSeedAmount('')
    } catch (error) {
      console.error('Error seeding liquidity:', error)
    }
  }
  
  const handleProposeCriteria = async () => {
    if (!proposalCriteria.trim()) return
    
    try {
      await actions.proposeCriteria(proposalCriteria)
      setProposalCriteria('')
    } catch (error) {
      console.error('Error proposing criteria:', error)
    }
  }
  
  const handleVoteCriteria = async () => {
    if (!selectedCriteria) return
    
    try {
      await actions.voteOnCriteria(selectedCriteria)
      setSelectedCriteria('')
    } catch (error) {
      console.error('Error voting on criteria:', error)
    }
  }
  
  const handleTrade = async () => {
    if (!tradeAmount || parseFloat(tradeAmount) <= 0) return
    
    try {
      // First approve USDC spending
      await approve(marketAddress, tradeAmount)
      // Then trade
      if (isBuyingYes) {
        await actions.buyYes(tradeAmount)
      } else {
        await actions.buyNo(tradeAmount)
      }
      setTradeAmount('')
    } catch (error) {
      console.error('Error trading:', error)
    }
  }
  
  return (
    <div className={cn(
      'space-y-6',
      isVibeMode ? 'vibe-market-card' : 'retro-window'
    )}>
      {/* Market Header */}
      <div>
        <div className={cn(
          'flex items-center justify-between mb-4',
          isVibeMode ? 'vibe-section-header' : 'retro-title-bar'
        )}>
          <span>{isVibeMode ? '🛸 MARKET DETAILS' : 'Market Details'}</span>
          <span className={cn(
            'px-2 py-1 text-xs rounded',
            isVibeMode 
              ? `bg-${phaseDisplay.color}-500 text-white` 
              : `bg-${phaseDisplay.color}-200 text-black`
          )}>
            {phaseDisplay.name}
          </span>
        </div>
        
        <h2 className={cn(
          'text-lg font-bold mb-2',
          isVibeMode ? 'vibe-text-primary' : 'retro-text'
        )}>
          {market.question}
        </h2>
        
        <div className={cn(
          'text-sm mb-4',
          isVibeMode ? 'vibe-text-secondary' : 'retro-text'
        )}>
          {phaseDisplay.description}
        </div>
        
        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className={cn(
            'text-center p-2',
            isVibeMode ? 'vibe-stat-box' : 'retro-input'
          )}>
            <div className={cn(
              'text-xs',
              isVibeMode ? 'vibe-text-secondary' : 'retro-text'
            )}>
              Total Liquidity
            </div>
            <div className={cn(
              'font-bold',
              isVibeMode ? 'vibe-text-primary' : 'retro-text'
            )}>
              ${market.totalLPContributions}
            </div>
          </div>
          
          <div className={cn(
            'text-center p-2',
            isVibeMode ? 'vibe-stat-box' : 'retro-input'
          )}>
            <div className={cn(
              'text-xs',
              isVibeMode ? 'vibe-text-secondary' : 'retro-text'
            )}>
              Your LP
            </div>
            <div className={cn(
              'font-bold',
              isVibeMode ? 'vibe-text-primary' : 'retro-text'
            )}>
              ${userLPContribution}
            </div>
          </div>
          
          <div className={cn(
            'text-center p-2',
            isVibeMode ? 'vibe-stat-box' : 'retro-input'
          )}>
            <div className={cn(
              'text-xs',
              isVibeMode ? 'vibe-text-secondary' : 'retro-text'
            )}>
              YES Reserves
            </div>
            <div className={cn(
              'font-bold',
              isVibeMode ? 'vibe-text-space' : 'retro-text'
            )}>
              {market.yesReserves}
            </div>
          </div>
          
          <div className={cn(
            'text-center p-2',
            isVibeMode ? 'vibe-stat-box' : 'retro-input'
          )}>
            <div className={cn(
              'text-xs',
              isVibeMode ? 'vibe-text-secondary' : 'retro-text'
            )}>
              NO Reserves
            </div>
            <div className={cn(
              'font-bold',
              isVibeMode ? 'vibe-text-government' : 'retro-text'
            )}>
              {market.noReserves}
            </div>
          </div>
        </div>
      </div>
      
      {/* Phase-specific UI */}
      {market.currentPhase === MARKET_PHASES.SEEDING && (
        <div className={cn(
          'p-4 space-y-4',
          isVibeMode ? 'border-2 border-blue-400' : 'retro-group'
        )}>
          <h3 className={cn(
            'font-bold',
            isVibeMode ? 'vibe-text-primary' : 'retro-text'
          )}>
            {isVibeMode ? '💰 SEED LIQUIDITY' : 'Seed Liquidity'}
          </h3>
          
          <div className="space-y-3">
            <div>
              <label className={cn(
                'block text-sm font-bold mb-2',
                isVibeMode ? 'vibe-text-secondary' : 'retro-text'
              )}>
                USDC Amount (Your balance: ${usdcBalance})
              </label>
              <input
                type="number"
                value={seedAmount}
                onChange={(e) => setSeedAmount(e.target.value)}
                placeholder="Enter amount"
                className={cn(
                  'w-full p-2 border rounded',
                  isVibeMode 
                    ? 'bg-gray-900 border-green-400 text-green-300 placeholder-green-600' 
                    : 'retro-input'
                )}
              />
            </div>
            
            <button
              onClick={handleSeedLiquidity}
              disabled={!seedAmount || parseFloat(seedAmount) <= 0 || actions.isPending}
              className={cn(
                'w-full px-4 py-2 font-bold transition-all duration-300',
                isVibeMode ? 'vibe-button' : 'retro-button',
                (!seedAmount || parseFloat(seedAmount) <= 0 || actions.isPending) && 'opacity-50 cursor-not-allowed'
              )}
            >
              {actions.isPending 
                ? (isVibeMode ? '🔄 SEEDING...' : 'Seeding...') 
                : (isVibeMode ? '💰 SEED LIQUIDITY' : 'Seed Liquidity')
              }
            </button>
          </div>
        </div>
      )}
      
      {market.currentPhase === MARKET_PHASES.VOTING && (
        <div className={cn(
          'p-4 space-y-4',
          isVibeMode ? 'border-2 border-yellow-400' : 'retro-group'
        )}>
          <h3 className={cn(
            'font-bold',
            isVibeMode ? 'vibe-text-primary' : 'retro-text'
          )}>
            {isVibeMode ? '🗳️ RESOLUTION CRITERIA' : 'Resolution Criteria'}
          </h3>
          
          {isLP && (
            <div className="space-y-4">
              {/* Propose Criteria */}
              <div>
                <label className={cn(
                  'block text-sm font-bold mb-2',
                  isVibeMode ? 'vibe-text-secondary' : 'retro-text'
                )}>
                  Propose Resolution Criteria:
                </label>
                <textarea
                  value={proposalCriteria}
                  onChange={(e) => setProposalCriteria(e.target.value)}
                  placeholder="e.g., Market resolves YES if official government documents are released by 2025"
                  className={cn(
                    'w-full p-2 border rounded resize-none h-20',
                    isVibeMode 
                      ? 'bg-gray-900 border-green-400 text-green-300 placeholder-green-600' 
                      : 'retro-input'
                  )}
                />
                <button
                  onClick={handleProposeCriteria}
                  disabled={!proposalCriteria.trim() || actions.isPending}
                  className={cn(
                    'mt-2 px-4 py-2 font-bold transition-all duration-300',
                    isVibeMode ? 'vibe-button' : 'retro-button',
                    (!proposalCriteria.trim() || actions.isPending) && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {isVibeMode ? '📝 PROPOSE' : 'Propose'}
                </button>
              </div>
              
              {/* Vote on Criteria */}
              {allCriteria.length > 0 && !hasVoted && (
                <div>
                  <label className={cn(
                    'block text-sm font-bold mb-2',
                    isVibeMode ? 'vibe-text-secondary' : 'retro-text'
                  )}>
                    Vote on Criteria:
                  </label>
                  <select
                    value={selectedCriteria}
                    onChange={(e) => setSelectedCriteria(e.target.value)}
                    className={cn(
                      'w-full p-2 border rounded',
                      isVibeMode 
                        ? 'bg-gray-900 border-green-400 text-green-300' 
                        : 'retro-input'
                    )}
                  >
                    <option value="">Select criteria to vote on</option>
                    {allCriteria.map((criteria, index) => (
                      <option key={index} value={criteria}>
                        {criteria}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleVoteCriteria}
                    disabled={!selectedCriteria || actions.isPending}
                    className={cn(
                      'mt-2 px-4 py-2 font-bold transition-all duration-300',
                      isVibeMode ? 'vibe-button' : 'retro-button',
                      (!selectedCriteria || actions.isPending) && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {isVibeMode ? '🗳️ VOTE' : 'Vote'}
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Show all criteria */}
          <div>
            <h4 className={cn(
              'font-bold mb-2',
              isVibeMode ? 'vibe-text-secondary' : 'retro-text'
            )}>
              Proposed Criteria:
            </h4>
            {allCriteria.length > 0 ? (
              <div className="space-y-2">
                {allCriteria.map((criteria, index) => (
                  <div key={index} className={cn(
                    'p-2 border rounded',
                    isVibeMode ? 'border-green-400' : 'retro-input'
                  )}>
                    <div className={cn(
                      'text-sm',
                      isVibeMode ? 'vibe-text-secondary' : 'retro-text'
                    )}>
                      {criteria}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={cn(
                'text-sm italic',
                isVibeMode ? 'vibe-text-secondary' : 'retro-text'
              )}>
                No criteria proposed yet
              </div>
            )}
          </div>
        </div>
      )}
      
      {market.currentPhase === MARKET_PHASES.TRADING && (
        <div className={cn(
          'p-4 space-y-4',
          isVibeMode ? 'border-2 border-green-400' : 'retro-group'
        )}>
          <h3 className={cn(
            'font-bold',
            isVibeMode ? 'vibe-text-primary' : 'retro-text'
          )}>
            {isVibeMode ? '💹 TRADE TOKENS' : 'Trade Tokens'}
          </h3>
          
          <div className="space-y-3">
            <div className="flex space-x-2">
              <button
                onClick={() => setIsBuyingYes(true)}
                className={cn(
                  'flex-1 px-4 py-2 font-bold transition-all duration-300',
                  isBuyingYes
                    ? (isVibeMode ? 'vibe-button space' : 'retro-button bg-green-200')
                    : (isVibeMode ? 'border-2 border-green-400 text-green-400' : 'retro-button')
                )}
              >
                {isVibeMode ? '✅ BUY YES' : 'Buy YES'}
              </button>
              <button
                onClick={() => setIsBuyingYes(false)}
                className={cn(
                  'flex-1 px-4 py-2 font-bold transition-all duration-300',
                  !isBuyingYes
                    ? (isVibeMode ? 'vibe-button government' : 'retro-button bg-red-200')
                    : (isVibeMode ? 'border-2 border-red-400 text-red-400' : 'retro-button')
                )}
              >
                {isVibeMode ? '❌ BUY NO' : 'Buy NO'}
              </button>
            </div>
            
            <div>
              <label className={cn(
                'block text-sm font-bold mb-2',
                isVibeMode ? 'vibe-text-secondary' : 'retro-text'
              )}>
                USDC Amount (Your balance: ${usdcBalance})
              </label>
              <input
                type="number"
                value={tradeAmount}
                onChange={(e) => setTradeAmount(e.target.value)}
                placeholder="Enter amount"
                className={cn(
                  'w-full p-2 border rounded',
                  isVibeMode 
                    ? 'bg-gray-900 border-green-400 text-green-300 placeholder-green-600' 
                    : 'retro-input'
                )}
              />
            </div>
            
            <button
              onClick={handleTrade}
              disabled={!tradeAmount || parseFloat(tradeAmount) <= 0 || actions.isPending}
              className={cn(
                'w-full px-4 py-2 font-bold transition-all duration-300',
                isVibeMode 
                  ? (isBuyingYes ? 'vibe-button space' : 'vibe-button government')
                  : 'retro-button',
                (!tradeAmount || parseFloat(tradeAmount) <= 0 || actions.isPending) && 'opacity-50 cursor-not-allowed'
              )}
            >
              {actions.isPending 
                ? (isVibeMode ? '🔄 TRADING...' : 'Trading...') 
                : (isVibeMode 
                    ? (isBuyingYes ? '✅ BUY YES TOKENS' : '❌ BUY NO TOKENS')
                    : (isBuyingYes ? 'Buy YES Tokens' : 'Buy NO Tokens')
                  )
              }
            </button>
          </div>
        </div>
      )}
      
      {market.resolutionCriteria && (
        <div className={cn(
          'p-4 mt-4',
          isVibeMode ? 'border-2 border-purple-400' : 'retro-group'
        )}>
          <h4 className={cn(
            'font-bold mb-2',
            isVibeMode ? 'vibe-text-primary' : 'retro-text'
          )}>
            {isVibeMode ? '📋 RESOLUTION CRITERIA' : 'Resolution Criteria'}
          </h4>
          <div className={cn(
            'text-sm',
            isVibeMode ? 'vibe-text-secondary' : 'retro-text'
          )}>
            {market.resolutionCriteria}
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketPhases 