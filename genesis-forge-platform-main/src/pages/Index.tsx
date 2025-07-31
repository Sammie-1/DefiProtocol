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
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#tokenomics" className="text-muted-foreground hover:text-foreground transition-colors">Tokenomics</a>
              <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
            </div>
            
            <button className="btn-crypto-secondary">
              Connect Wallet
            </button>
          </div>
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

        {/* Wallet Connect Sidebar */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
          <WalletConnect />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;