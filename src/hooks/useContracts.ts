import { useAccount, useReadContract, useWriteContract, useReadContracts } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { getCurrentNetworkContracts } from '../wagmi'
import { MARKET_FACTORY_ABI, PREDICTION_MARKET_ABI, ERC20_ABI, MARKET_PHASES } from '../contracts/abis'
import { useEffect, useState } from 'react'

// Market Factory Hooks
export const useMarketFactory = () => {
  const { chainId } = useAccount()
  const contracts = getCurrentNetworkContracts(chainId || 1)
  const factoryAddress = contracts?.MarketFactory as `0x${string}`
  
  const { writeContract, isPending: isCreating } = useWriteContract()
  
  const { data: marketCount } = useReadContract({
    address: factoryAddress,
    abi: MARKET_FACTORY_ABI,
    functionName: 'getMarketCount',
    query: { enabled: !!factoryAddress }
  })
  
  const { data: allMarkets } = useReadContract({
    address: factoryAddress,
    abi: MARKET_FACTORY_ABI,
    functionName: 'getAllMarkets',
    query: { enabled: !!factoryAddress }
  })
  
  const createMarket = async (question: string) => {
    if (!factoryAddress) throw new Error('No factory address')
    
    return writeContract({
      address: factoryAddress,
      abi: MARKET_FACTORY_ABI,
      functionName: 'createMarket',
      args: [question]
    })
  }
  
  return {
    createMarket,
    isCreating,
    marketCount: Number(marketCount || 0),
    allMarkets: allMarkets || [],
    factoryAddress
  }
}

// Prediction Market Hooks
export const usePredictionMarket = (marketAddress: `0x${string}`) => {
  const { address: userAddress } = useAccount()
  const { writeContract, isPending } = useWriteContract()
  
  // Read market data
  const { data: marketData } = useReadContracts({
    contracts: [
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'question',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'currentPhase',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'resolutionCriteria',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'totalLPContributions',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'creationTime',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'getTokenPrices',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'yesReserves',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'noReserves',
      },
      {
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'usdcReserves',
      },
    ],
    query: { enabled: !!marketAddress }
  })
  
  // Get user-specific data
  const { data: userLPContribution } = useReadContract({
    address: marketAddress,
    abi: PREDICTION_MARKET_ABI,
    functionName: 'getLPContribution',
    args: [userAddress!],
    query: { enabled: !!userAddress }
  })
  
  const { data: hasVoted } = useReadContract({
    address: marketAddress,
    abi: PREDICTION_MARKET_ABI,
    functionName: 'hasLPVoted',
    args: [userAddress!],
    query: { enabled: !!userAddress }
  })
  
  const { data: allCriteria } = useReadContract({
    address: marketAddress,
    abi: PREDICTION_MARKET_ABI,
    functionName: 'getAllCriteria',
    query: { enabled: !!marketAddress }
  })
  
  // Write functions
  const seedLiquidity = async (amount: string) => {
    const amountWei = parseEther(amount)
    return writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'seedLiquidity',
      args: [amountWei]
    })
  }
  
  const proposeCriteria = async (criteria: string) => {
    return writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'proposeCriteria',
      args: [criteria]
    })
  }
  
  const voteOnCriteria = async (criteria: string) => {
    return writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'voteOnCriteria',
      args: [criteria]
    })
  }
  
  const startVoting = async () => {
    return writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'startVoting'
    })
  }
  
  const startTrading = async () => {
    return writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'startTrading'
    })
  }
  
  const buyYes = async (usdcAmount: string) => {
    const amountWei = parseEther(usdcAmount)
    return writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'buyYes',
      args: [amountWei]
    })
  }
  
  const buyNo = async (usdcAmount: string) => {
    const amountWei = parseEther(usdcAmount)
    return writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'buyNo',
      args: [amountWei]
    })
  }
  
  const getAmountOut = async (amountIn: string, reserveIn: string, reserveOut: string) => {
    const amountInWei = parseEther(amountIn)
    const reserveInWei = parseEther(reserveIn)
    const reserveOutWei = parseEther(reserveOut)
    
    const { data } = await writeContract({
      address: marketAddress,
      abi: PREDICTION_MARKET_ABI,
      functionName: 'getAmountOut',
      args: [amountInWei, reserveInWei, reserveOutWei]
    })
    
    return data
  }
  
  // Parse market data
  const market = marketData ? {
    question: marketData[0].result as string,
    currentPhase: marketData[1].result as number,
    resolutionCriteria: marketData[2].result as string,
    totalLPContributions: formatEther(marketData[3].result as bigint),
    creationTime: Number(marketData[4].result as bigint),
    tokenPrices: marketData[5].result as [bigint, bigint],
    yesReserves: formatEther(marketData[6].result as bigint),
    noReserves: formatEther(marketData[7].result as bigint),
    usdcReserves: formatEther(marketData[8].result as bigint),
  } : null
  
  return {
    market,
    userLPContribution: userLPContribution ? formatEther(userLPContribution) : '0',
    hasVoted: hasVoted || false,
    allCriteria: allCriteria || [],
    isPending,
    
    // Actions
    seedLiquidity,
    proposeCriteria,
    voteOnCriteria,
    startVoting,
    startTrading,
    buyYes,
    buyNo,
    getAmountOut,
  }
}

// USDC Token Hooks
export const useUSDC = () => {
  const { address: userAddress, chainId } = useAccount()
  const contracts = getCurrentNetworkContracts(chainId || 1)
  const usdcAddress = contracts?.USDC as `0x${string}`
  
  const { writeContract, isPending } = useWriteContract()
  
  const { data: balance } = useReadContract({
    address: usdcAddress,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [userAddress!],
    query: { enabled: !!userAddress && !!usdcAddress }
  })
  
  const { data: decimals } = useReadContract({
    address: usdcAddress,
    abi: ERC20_ABI,
    functionName: 'decimals',
    query: { enabled: !!usdcAddress }
  })
  
  const approve = async (spender: `0x${string}`, amount: string) => {
    const amountWei = parseEther(amount)
    return writeContract({
      address: usdcAddress,
      abi: ERC20_ABI,
      functionName: 'approve',
      args: [spender, amountWei]
    })
  }
  
  const getAllowance = async (owner: `0x${string}`, spender: `0x${string}`) => {
    const { data } = await writeContract({
      address: usdcAddress,
      abi: ERC20_ABI,
      functionName: 'allowance',
      args: [owner, spender]
    })
    return data
  }
  
  return {
    balance: balance ? formatEther(balance) : '0',
    decimals: decimals || 6,
    approve,
    getAllowance,
    isApproving: isPending,
    usdcAddress
  }
}

// Market list hook
export const useAllMarkets = () => {
  const { allMarkets } = useMarketFactory()
  const [marketsWithData, setMarketsWithData] = useState<any[]>([])
  
  useEffect(() => {
    if (!allMarkets?.length) return
    
    const fetchMarketData = async () => {
      const markets = await Promise.all(
        allMarkets.map(async (address) => {
          const marketData = await fetch(`/api/market/${address}`)
          return marketData.json()
        })
      )
      setMarketsWithData(markets)
    }
    
    fetchMarketData()
  }, [allMarkets])
  
  return { markets: marketsWithData }
}

// Utility function to get phase name
export const getPhaseDisplay = (phase: number) => {
  switch (phase) {
    case MARKET_PHASES.SEEDING:
      return { name: 'Seeding', color: 'blue', description: 'LPs can seed liquidity' }
    case MARKET_PHASES.VOTING:
      return { name: 'Voting', color: 'yellow', description: 'LPs vote on resolution criteria' }
    case MARKET_PHASES.TRADING:
      return { name: 'Trading', color: 'green', description: 'Users can trade YES/NO tokens' }
    case MARKET_PHASES.ENDED:
      return { name: 'Ended', color: 'red', description: 'Market resolved' }
    default:
      return { name: 'Unknown', color: 'gray', description: 'Unknown phase' }
  }
} 