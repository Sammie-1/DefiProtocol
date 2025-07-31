import { Shield, Target, Users, Zap } from "lucide-react";

const Overview = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">DeFiProtocol</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DeFiProtocol is a next-generation decentralized finance ecosystem that 
            empowers users to stake, govern, and earn through innovative blockchain protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">The Problem</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Traditional finance systems are centralized, slow, and exclude billions of people 
              from accessing essential financial services. High fees, limited transparency, 
              and geographical restrictions create barriers to financial inclusion.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Solution</h3>
            <p className="text-lg text-muted-foreground mb-6">
              DeFiProtocol creates an open, transparent, and accessible financial ecosystem 
              where anyone can participate in staking, governance, and yield generation 
              without intermediaries or geographical limitations.
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="card-crypto p-6 text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">DeFi Protocol</h4>
            <p className="text-muted-foreground">Secure staking and yield farming</p>
          </div>

          <div className="card-crypto p-6 text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">DAO Governance</h4>
            <p className="text-muted-foreground">Community-driven decisions</p>
          </div>

          <div className="card-crypto p-6 text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Yield Optimization</h4>
            <p className="text-muted-foreground">Automated strategy execution</p>
          </div>

          <div className="card-crypto p-6 text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
            <p className="text-muted-foreground">High-speed transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;