import { useState } from "react";

export interface WalletOption {
  name: string;
  icon: string;
  installed: boolean;
}

export const useWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress] = useState("0x742...a2c8");
  const [balance] = useState("1,234.56");
  const [isConnecting, setIsConnecting] = useState(false);

  const walletOptions: WalletOption[] = [
    { name: "MetaMask", icon: "🦊", installed: true },
    { name: "WalletConnect", icon: "🔗", installed: true },
    { name: "Coinbase Wallet", icon: "🔵", installed: false },
    { name: "Trust Wallet", icon: "🛡️", installed: false }
  ];

  const handleConnect = async (walletName?: string) => {
    setIsConnecting(true);
    
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsConnected(true);
    setIsConnecting(false);
    
    console.log(`Connected to ${walletName || 'wallet'}`);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    console.log('Wallet disconnected');
  };

  return {
    isConnected,
    isConnecting,
    walletAddress,
    balance,
    walletOptions,
    handleConnect,
    handleDisconnect
  };
};
