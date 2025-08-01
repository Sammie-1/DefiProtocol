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
      <div className="card-crypto p-4 sm:p-6 max-w-sm sm:max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-white transition-colors z-10 p-1"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        <div className="text-center mb-4 sm:mb-6 pr-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Connect Your Wallet</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Connect your wallet to start staking and earning rewards
          </p>
        </div>
        
        <div className="space-y-2 sm:space-y-3">
          {walletOptions.map((wallet, index) => (
            <button
              key={index}
              onClick={() => handleWalletConnect(wallet.name)}
              disabled={!wallet.installed || isConnecting}
              className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                wallet.installed && !isConnecting
                  ? "border-border hover:border-crypto-purple hover:bg-secondary/20 cursor-pointer"
                  : "border-border/50 opacity-50 cursor-not-allowed"
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">{wallet.icon}</span>
                <span className="font-medium text-sm sm:text-base">{wallet.name}</span>
                {!wallet.installed && (
                  <span className="text-xs bg-crypto-red/20 text-crypto-red px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                    Not Installed
                  </span>
                )}
                {isConnecting && (
                  <span className="text-xs bg-crypto-blue/20 text-crypto-blue px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                    Connecting...
                  </span>
                )}
              </div>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
        
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-secondary/20 rounded-xl">
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
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
