// SimpleMarketFactory ABI
export const MARKET_FACTORY_ABI = [
  {
    inputs: [{ name: "_usdc", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "market", type: "address" },
      { indexed: false, name: "question", type: "string" },
      { indexed: true, name: "creator", type: "address" },
      { indexed: false, name: "timestamp", type: "uint256" },
    ],
    name: "MarketCreated",
    type: "event",
  },
  {
    inputs: [{ name: "question", type: "string" }],
    name: "createMarket",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllMarkets",
    outputs: [{ name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "index", type: "uint256" }],
    name: "getMarket",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarketCount",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "market", type: "address" }],
    name: "isValidMarket",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "", type: "address" }],
    name: "isMarket",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "", type: "uint256" }],
    name: "markets",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
] as const

// SimplePredictionMarket ABI
export const PREDICTION_MARKET_ABI = [
  {
    inputs: [
      { name: "_usdc", type: "address" },
      { name: "_question", type: "string" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "lp", type: "address" },
      { indexed: false, name: "criteria", type: "string" },
    ],
    name: "CriteriaProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "criteria", type: "string" },
    ],
    name: "CriteriaSelected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "lp", type: "address" },
      { indexed: false, name: "criteria", type: "string" },
      { indexed: false, name: "weight", type: "uint256" },
    ],
    name: "CriteriaVoted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "lp", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "LiquiditySeeded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "question", type: "string" },
      { indexed: false, name: "timestamp", type: "uint256" },
    ],
    name: "MarketCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldPhase", type: "uint8" },
      { indexed: false, name: "newPhase", type: "uint8" },
      { indexed: false, name: "timestamp", type: "uint256" },
    ],
    name: "PhaseChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "trader", type: "address" },
      { indexed: false, name: "buyingYes", type: "bool" },
      { indexed: false, name: "amountIn", type: "uint256" },
      { indexed: false, name: "amountOut", type: "uint256" },
    ],
    name: "TokensTraded",
    type: "event",
  },
  {
    inputs: [{ name: "usdcAmount", type: "uint256" }],
    name: "buyNo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "usdcAmount", type: "uint256" }],
    name: "buyYes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creationTime",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPhase",
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCriteria",
    outputs: [{ name: "", type: "string[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "amountIn", type: "uint256" },
      { name: "reserveIn", type: "uint256" },
      { name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountOut",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ name: "criteria", type: "string" }],
    name: "getCriteriaVotes",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "lp", type: "address" }],
    name: "getLPContribution",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenPrices",
    outputs: [
      { name: "yesPrice", type: "uint256" },
      { name: "noPrice", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "lp", type: "address" }],
    name: "hasLPVoted",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "criteria", type: "string" }],
    name: "proposeCriteria",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "question",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "resolutionCriteria",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "amount", type: "uint256" }],
    name: "seedLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalLPContributions",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdcReserves",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "criteria", type: "string" }],
    name: "voteOnCriteria",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yesReserves",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "noReserves",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yesToken",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "noToken",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
] as const

// ERC20 ABI (for USDC and token interactions)
export const ERC20_ABI = [
  {
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { name: "from", type: "address" },
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const

// Market phases enum
export const MARKET_PHASES = {
  SEEDING: 0,
  VOTING: 1,
  TRADING: 2,
  ENDED: 3,
} as const

export type MarketPhase = typeof MARKET_PHASES[keyof typeof MARKET_PHASES]

// Market phase names
export const PHASE_NAMES = {
  [MARKET_PHASES.SEEDING]: 'Seeding',
  [MARKET_PHASES.VOTING]: 'Voting',
  [MARKET_PHASES.TRADING]: 'Trading',
  [MARKET_PHASES.ENDED]: 'Ended',
} as const 