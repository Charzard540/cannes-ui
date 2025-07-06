"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTheme } from '@/contexts/theme-context';
import styles from '@/styles/wallet.module.css';

export function WalletConnectButton() {
  const { theme, isVibeMode } = useTheme();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div className={styles.walletContainer}>
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className={`${styles.walletButton} ${
                      theme === 'vibe' ? styles.vibeMode : styles.retroMode
                    }`}
                  >
                    {isVibeMode ? '🔗 ' : ''}
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className={`${styles.walletButton} ${styles.errorButton} ${
                      theme === 'vibe' ? styles.vibeMode : styles.retroMode
                    }`}
                  >
                    {isVibeMode ? '⚠️ ' : ''}
                    Wrong Network
                  </button>
                );
              }

              return (
                <div className={styles.walletInfo}>
                  <button
                    onClick={openChainModal}
                    className={`${styles.chainButton} ${
                      theme === 'vibe' ? styles.vibeMode : styles.retroMode
                    }`}
                  >
                    {chain.hasIcon && (
                      <div className={styles.chainIcon}>
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    className={`${styles.accountButton} ${
                      theme === 'vibe' ? styles.vibeMode : styles.retroMode
                    }`}
                  >
                    {isVibeMode ? '👤 ' : ''}
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
} 