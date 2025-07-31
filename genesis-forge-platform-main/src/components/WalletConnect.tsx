import { useState } from "react";
import { Wallet, ChevronDown, Copy, ExternalLink, Unplug } from "lucide-react";

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress] = useState("0x742...a2c8");
  const [balance] = useState("1,234.56");

  const walletOptions = [
    { name: "MetaMask", icon: "🦊", installed: true },
    { name: "WalletConnect", icon: "🔗", installed: true },
    { name: "Coinbase Wallet", icon: "🔵", installed: false },
    { name: "Trust Wallet", icon: "🛡️", installed: false }
  ];

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  if (isConnected) {
    return (
      <div className="card-crypto p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Wallet Connected</h3>
          <div className="w-3 h-3 bg-crypto-green rounded-full"></div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Address:</span>
            <div className="flex items-center gap-2">
              <span className="font-mono">{walletAddress}</span>
              <button className="text-crypto-blue hover:text-crypto-purple transition-colors">
                <Copy size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">DEFI Balance:</span>
            <span className="font-bold">{balance} DEFI</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">USD Value:</span>
            <span className="font-bold text-crypto-green">$2,469.12</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="btn-crypto">Stake Tokens</button>
          <button className="btn-crypto-secondary">View Portfolio</button>
        </div>
        
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 text-crypto-blue hover:text-crypto-purple transition-colors">
            <ExternalLink size={16} />
            View on Etherscan
          </button>
          
          <button 
            onClick={handleDisconnect}
            className="w-full flex items-center justify-center gap-2 text-crypto-red hover:text-red-400 transition-colors"
          >
            <Unplug size={16} />
            Disconnect Wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-crypto p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
          <Wallet className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Connect Your Wallet</h3>
        <p className="text-muted-foreground">
          Connect your wallet to start staking and earning rewards
        </p>
      </div>
      
      <div className="space-y-3">
        {walletOptions.map((wallet, index) => (
          <button
            key={index}
            onClick={handleConnect}
            disabled={!wallet.installed}
            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
              wallet.installed
                ? "border-border hover:border-crypto-purple hover:bg-secondary/20 cursor-pointer"
                : "border-border/50 opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{wallet.icon}</span>
              <span className="font-medium">{wallet.name}</span>
              {!wallet.installed && (
                <span className="text-xs bg-crypto-red/20 text-crypto-red px-2 py-1 rounded">
                  Not Installed
                </span>
              )}
            </div>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </button>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-secondary/20 rounded-xl">
        <p className="text-sm text-muted-foreground text-center">
          New to crypto wallets?{" "}
          <a href="#" className="text-crypto-blue hover:text-crypto-purple transition-colors">
            Learn how to get started
          </a>
        </p>
      </div>
    </div>
  );
};

export default WalletConnect;