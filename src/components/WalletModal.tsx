import { Wallet, ChevronDown, X } from "lucide-react";
import { useWallet } from "../hooks/use-wallet";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal = ({ isOpen, onClose }: WalletModalProps) => {
  const {
    isConnecting,
    walletOptions,
    handleConnect
  } = useWallet();

  if (!isOpen) return null;

  const handleWalletConnect = async (walletName: string) => {
    await handleConnect(walletName);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="card-crypto p-6 max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

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
              onClick={() => handleWalletConnect(wallet.name)}
              disabled={!wallet.installed || isConnecting}
              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                wallet.installed && !isConnecting
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
                {isConnecting && (
                  <span className="text-xs bg-crypto-blue/20 text-crypto-blue px-2 py-1 rounded">
                    Connecting...
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
    </div>
  );
};

export default WalletModal;
