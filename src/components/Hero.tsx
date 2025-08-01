import { Wallet, ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { useWallet } from "../hooks/use-wallet";
import WalletModal from "./WalletModal";
import WhitelistModal from "./WhitelistModal";

const Hero = () => {
  const { isConnected, walletAddress, handleDisconnect } = useWallet();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isWhitelistModalOpen, setIsWhitelistModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-50">
          <div className="floating-animation absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="floating-animation absolute top-40 right-32 w-48 h-48 bg-sky-400/20 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
          <div className="floating-animation absolute bottom-32 left-1/3 w-40 h-40 bg-blue-600/20 rounded-full blur-xl" style={{animationDelay: '4s'}}></div>
          <div className="floating-animation absolute top-60 right-1/4 w-36 h-36 bg-indigo-400/20 rounded-full blur-xl" style={{animationDelay: '1s'}}></div>
          <div className="floating-animation absolute bottom-40 right-20 w-44 h-44 bg-cyan-400/20 rounded-full blur-xl" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-4 hero-glow">
            <span className="text-2xl font-bold text-white">Ð</span>
          </div>
          <h2 className="text-xl font-semibold text-muted-foreground">DeFiProtocol</h2>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Future of{" "}
          <span className="gradient-text">Decentralized Finance</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Revolutionizing DeFi with secure, transparent, and community-driven protocols. 
          Stake, govern, and earn with the next generation of decentralized finance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {!isConnected ? (
            <button 
              onClick={() => setIsWalletModalOpen(true)}
              className="btn-crypto inline-flex items-center gap-2 min-w-[160px] sm:min-w-[180px]"
            >
              <Wallet size={20} />
              <span className="hidden sm:inline">Connect Wallet</span>
              <span className="sm:hidden">Connect</span>
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <button className="btn-crypto inline-flex items-center gap-2">
                <Check size={20} />
                <span className="hidden sm:inline">Connected: {walletAddress}</span>
                <span className="sm:hidden">Connected</span>
              </button>
              <button 
                onClick={handleDisconnect}
                className="btn-crypto-secondary text-sm"
              >
                Disconnect
              </button>
            </div>
          )}
          <button 
            onClick={() => setIsWhitelistModalOpen(true)}
            className="btn-crypto-secondary"
          >
            <span className="hidden sm:inline">Join Whitelist</span>
            <span className="sm:hidden">Whitelist</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">$2.5B+</div>
            <div className="text-muted-foreground">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">150K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>

      {/* Wallet Modal */}
      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
      />

      {/* Whitelist Modal */}
      <WhitelistModal 
        isOpen={isWhitelistModalOpen} 
        onClose={() => setIsWhitelistModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
