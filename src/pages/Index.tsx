import { useState } from "react";
import { X, Menu } from "lucide-react";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Security from "@/components/Security";
import Community from "@/components/Community";
import WalletConnect from "@/components/WalletConnect";
import Footer from "@/components/Footer";

const Index = () => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleConnectWallet = () => {
    setShowWalletConnect(true);
  };

  const handleCloseWallet = () => {
    setShowWalletConnect(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">Ð</span>
              </div>
              <span className="text-xl font-bold">DeFiProtocol</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#tokenomics" className="text-muted-foreground hover:text-foreground transition-colors">Tokenomics</a>
              <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
            </div>
            
            {/* Desktop Connect Wallet Button */}
            <button 
              onClick={handleConnectWallet}
              className="hidden md:flex btn-crypto-secondary items-center"
            >
              Connect Wallet
            </button>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={handleConnectWallet}
                className="btn-crypto-secondary text-xs px-3 py-2 whitespace-nowrap"
              >
                Connect
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col gap-4 pt-4">
                <a 
                  href="#overview" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#features" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#tokenomics" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tokenomics
                </a>
                <a 
                  href="#roadmap" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Roadmap
                </a>
                <a 
                  href="#team" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </a>
                <a 
                  href="#community" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        
        <section id="overview">
          <Overview />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="tokenomics">
          <Tokenomics />
        </section>
        
        <section id="roadmap">
          <Roadmap />
        </section>
        
        <section id="team">
          <Team />
        </section>
        
        <section id="security">
          <Security />
        </section>
        
        <section id="community">
          <Community />
        </section>

      </main>

      {/* Wallet Connect Modal */}
      {showWalletConnect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseWallet}
          ></div>
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-md mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseWallet}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            
            <WalletConnect />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;