# Conspiracy Prediction Exchange - Deployment Guide

This guide will help you deploy and configure your conspiracy prediction market smart contracts and frontend application.

## Prerequisites

- Node.js 18+ and pnpm
- [Foundry](https://getfoundry.sh/) for smart contract development
- [Anvil](https://book.getfoundry.sh/reference/anvil/) for local blockchain testing

## 1. Smart Contract Deployment

### Local Development with Anvil

1. **Start local blockchain:**
```bash
anvil --host 0.0.0.0 --port 8545
```

2. **Deploy USDC Mock Token:**
```solidity
// contracts/MockUSDC.sol
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "USDC") {
        _mint(msg.sender, 1000000 * 10**6); // 1M USDC
    }
    
    function decimals() public pure override returns (uint8) {
        return 6;
    }
    
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
```

3. **Deploy contracts using Foundry:**
```bash
# Deploy MockUSDC
forge create --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 src/MockUSDC.sol:MockUSDC

# Deploy SimpleMarketFactory (replace USDC_ADDRESS with deployed USDC address)
forge create --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 src/SimpleMarketFactory.sol:SimpleMarketFactory --constructor-args 0x[USDC_ADDRESS]
```

4. **Update contract addresses in `src/wagmi.ts`:**
```typescript
export const networkConfigs = {
  [anvil.id]: {
    name: 'Anvil Local',
    contracts: {
      USDC: '0x[YOUR_USDC_ADDRESS]',
      MarketFactory: '0x[YOUR_FACTORY_ADDRESS]',
    },
    blockExplorer: 'http://localhost:8545',
  },
  // ... other networks
}
```

### Testnet Deployment (Sepolia)

1. **Set up environment variables:**
```bash
export SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/YOUR_INFURA_KEY"
export PRIVATE_KEY="your_private_key"
```

2. **Deploy to Sepolia:**
```bash
# Deploy MockUSDC
forge create --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY src/MockUSDC.sol:MockUSDC

# Deploy SimpleMarketFactory
forge create --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY src/SimpleMarketFactory.sol:SimpleMarketFactory --constructor-args 0x[USDC_ADDRESS]
```

3. **Verify contracts on Etherscan:**
```bash
forge verify-contract --chain sepolia --etherscan-api-key YOUR_API_KEY 0x[CONTRACT_ADDRESS] src/SimpleMarketFactory.sol:SimpleMarketFactory
```

## 2. Frontend Configuration

### RainbowKit Project ID

1. **Get a project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)**

2. **Update `src/wagmi.ts`:**
```typescript
const config = getDefaultConfig({
  appName: 'Conspiracy Prediction Exchange',
  projectId: 'YOUR_ACTUAL_PROJECT_ID', // Replace with your project ID
  chains: [anvil, sepolia, mainnet],
  ssr: false,
})
```

### Environment Variables

Create a `.env.local` file:
```bash
VITE_WALLETCONNECT_PROJECT_ID=your_project_id
VITE_INFURA_API_KEY=your_infura_key
VITE_ETHERSCAN_API_KEY=your_etherscan_key
```

## 3. Running the Application

### Development Mode

1. **Install dependencies:**
```bash
pnpm install
```

2. **Start development server:**
```bash
pnpm dev
```

3. **Access the application:**
- Open http://localhost:5173
- Connect your wallet (MetaMask recommended)
- Switch to Anvil network (Chain ID: 31337)

### Production Build

```bash
pnpm build
pnpm preview
```

## 4. Using the Prediction Market

### Market Creation Flow

1. **Connect Wallet:** Use the Connect button in the header
2. **Create Market:** Click "CREATE NEW CONSPIRACY MARKET"
3. **Enter Question:** e.g., "Did aliens crash at Roswell in 1947?"
4. **Confirm Transaction:** Pay gas to deploy the market contract

### Market Phases

#### Phase 1: Seeding (2 hours)
- **Purpose:** LPs provide initial liquidity
- **Actions:** 
  - Approve USDC spending
  - Seed liquidity (minimum amount recommended)
- **Tokens:** YES/NO tokens minted at $0.50 each

#### Phase 2: Voting (1 hour)
- **Purpose:** LPs vote on resolution criteria
- **Actions:**
  - Propose resolution criteria
  - Vote on proposed criteria (weight = LP contribution)
- **Outcome:** Criteria with most votes wins

#### Phase 3: Trading (Indefinite)
- **Purpose:** Users trade YES/NO tokens
- **Actions:**
  - Buy YES tokens if you believe conspiracy is true
  - Buy NO tokens if you believe official story
- **Pricing:** AMM with constant product formula (0.3% fee)

### Market Resolution

Markets resolve based on the winning criteria from the voting phase. Resolution logic needs to be implemented separately (oracle system, manual resolution, etc.).

## 5. Smart Contract Interactions

### Key Functions

**Factory Contract:**
```javascript
// Create new market
await factoryContract.createMarket("Your conspiracy question?")

// Get all markets
const markets = await factoryContract.getAllMarkets()
```

**Market Contract:**
```javascript
// Seed liquidity (Phase 1)
await marketContract.seedLiquidity(parseEther("100")) // 100 USDC

// Propose criteria (Phase 2)
await marketContract.proposeCriteria("Market resolves YES if...")

// Vote on criteria (Phase 2)
await marketContract.voteOnCriteria("Selected criteria text")

// Buy YES tokens (Phase 3)
await marketContract.buyYes(parseEther("50")) // 50 USDC

// Buy NO tokens (Phase 3)
await marketContract.buyNo(parseEther("50")) // 50 USDC
```

## 6. Testing

### Local Testing Workflow

1. **Start Anvil:**
```bash
anvil --host 0.0.0.0
```

2. **Deploy contracts and update config**

3. **Fund test account with USDC:**
```bash
# Get USDC from deployed MockUSDC contract
cast send 0x[USDC_ADDRESS] "mint(address,uint256)" 0x[YOUR_ADDRESS] 1000000000 --rpc-url http://127.0.0.1:8545 --private-key 0x[PRIVATE_KEY]
```

4. **Test market lifecycle:**
   - Create market
   - Seed liquidity
   - Propose and vote on criteria
   - Trade tokens

## 7. Production Considerations

### Security
- Audit smart contracts before mainnet deployment
- Use multisig for contract ownership
- Implement proper access controls

### Scalability
- Consider L2 deployment (Arbitrum, Optimism)
- Implement subgraphs for data indexing
- Add IPFS for metadata storage

### Legal
- Ensure compliance with prediction market regulations
- Add proper disclaimers and terms of service
- Consider geographic restrictions

## 8. Troubleshooting

### Common Issues

**RPC Connection Errors:**
- Verify Anvil is running on correct port
- Check network configuration in wallet

**Transaction Failures:**
- Ensure sufficient ETH for gas
- Check USDC allowances
- Verify contract addresses

**Hook Errors:**
- Refresh page after network changes
- Clear browser cache
- Check console for detailed errors

### Network Switching

Add Anvil network to MetaMask:
- **Network Name:** Anvil Local
- **RPC URL:** http://127.0.0.1:8545
- **Chain ID:** 31337
- **Currency Symbol:** ETH

## 9. Next Steps

1. **Enhanced UI:** Add market detail pages, charts, user portfolios
2. **Oracle Integration:** Automated market resolution
3. **Governance:** DAO for platform parameters
4. **Mobile App:** React Native or PWA
5. **Analytics:** Trading volume, user stats, market performance

For support and questions, check the repository issues or documentation. 