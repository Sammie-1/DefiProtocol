import { Coins, Vote, Gift, Lock, TrendingUp, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Lock,
      title: "Liquid Staking",
      description: "Stake your tokens while maintaining liquidity through our innovative liquid staking protocol."
    },
    {
      icon: Vote,
      title: "Governance",
      description: "Participate in protocol governance and vote on proposals that shape the future of DeFi."
    },
    {
      icon: Gift,
      title: "Yield Rewards",
      description: "Earn competitive yields through our automated yield optimization strategies."
    },
    {
      icon: Coins,
      title: "Multi-Asset Support",
      description: "Support for multiple cryptocurrencies and cross-chain compatibility."
    },
    {
      icon: TrendingUp,
      title: "Auto-Compound",
      description: "Automatically compound your rewards to maximize your earning potential."
    },
    {
      icon: Users,
      title: "Community Pool",
      description: "Join community pools for enhanced rewards and reduced gas fees."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of DeFi with our comprehensive suite of features 
            designed for maximum security, efficiency, and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-crypto p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 pulse-glow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Spotlight */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="card-crypto p-8">
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <TrendingUp className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Up to 25% APY</h3>
              <p className="text-white/80">Maximum yield optimization</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Maximize Your Yields</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our advanced algorithms automatically find the best yield opportunities 
              across multiple protocols, ensuring you always get the highest possible returns 
              on your investments.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                Automated rebalancing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                Risk-adjusted strategies
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                Gas optimization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;