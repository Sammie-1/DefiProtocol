import { PieChart, Coins, Users, Lock, TrendingUp } from "lucide-react";

const Tokenomics = () => {
  const allocations = [
    { category: "Community & Ecosystem", percentage: 40, color: "crypto-purple" },
    { category: "Team & Advisors", percentage: 20, color: "crypto-blue" },
    { category: "Treasury", percentage: 15, color: "crypto-green" },
    { category: "Public Sale", percentage: 15, color: "crypto-gold" },
    { category: "Liquidity", percentage: 10, color: "crypto-red" }
  ];

  const utilities = [
    {
      icon: Users,
      title: "Governance",
      description: "Vote on protocol upgrades and parameter changes"
    },
    {
      icon: Lock,
      title: "Staking",
      description: "Stake tokens to secure the network and earn rewards"
    },
    {
      icon: TrendingUp,
      title: "Fee Discounts",
      description: "Reduced trading fees for token holders"
    },
    {
      icon: Coins,
      title: "Ecosystem Access",
      description: "Access to premium features and early releases"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our tokenomics are designed to ensure long-term sustainability, 
            fair distribution, and strong incentives for community participation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Token Supply Info */}
          <div className="card-crypto p-8">
            <h3 className="text-3xl font-bold mb-8 text-center">Token Supply</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">Total Supply:</span>
                <span className="text-2xl font-bold gradient-text">1,000,000,000 DEFI</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">Circulating Supply:</span>
                <span className="text-xl font-semibold">250,000,000 DEFI</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">Market Cap:</span>
                <span className="text-xl font-semibold">$125,000,000</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-secondary/20 rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                Token contract will be deployed on Ethereum mainnet with 
                cross-chain bridges to major L2 solutions.
              </p>
            </div>
          </div>

          {/* Token Allocation */}
          <div className="card-crypto p-8">
            <h3 className="text-3xl font-bold mb-8 text-center">Token Allocation</h3>
            
            <div className="space-y-4">
              {allocations.map((allocation, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full bg-${allocation.color}`}></div>
                    <span className="text-muted-foreground">{allocation.category}</span>
                  </div>
                  <span className="font-semibold">{allocation.percentage}%</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center">
                <PieChart className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Token Utilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Token Utility</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {utilities.map((utility, index) => (
              <div key={index} className="card-crypto p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <utility.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{utility.title}</h4>
                <p className="text-muted-foreground text-sm">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vesting Schedule */}
        <div className="card-crypto p-8">
          <h3 className="text-3xl font-bold text-center mb-8">Vesting Schedule</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-2">0%</div>
              <div className="text-muted-foreground mb-4">At TGE</div>
              <div className="text-sm text-muted-foreground">
                No tokens unlocked at Token Generation Event to prevent dumping
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-2">25%</div>
              <div className="text-muted-foreground mb-4">Month 6</div>
              <div className="text-sm text-muted-foreground">
                First unlock after 6 months cliff period
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-2">24 Months</div>
              <div className="text-muted-foreground mb-4">Linear Vesting</div>
              <div className="text-sm text-muted-foreground">
                Remaining tokens vest linearly over 24 months
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;