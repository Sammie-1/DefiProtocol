import { CheckCircle, Circle, Clock } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      title: "Foundation & Launch",
      status: "completed",
      items: [
        "Protocol architecture design",
        "Smart contract development",
        "Security audits",
        "Testnet launch",
        "Community building"
      ]
    },
    {
      quarter: "Q2 2024",
      title: "Mainnet & Core Features",
      status: "completed",
      items: [
        "Mainnet deployment",
        "Basic staking functionality",
        "Governance module",
        "Token launch",
        "Initial liquidity provision"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Advanced Features",
      status: "in-progress",
      items: [
        "Liquid staking implementation",
        "Yield optimization strategies",
        "Cross-chain bridge",
        "Mobile app beta",
        "Partnership integrations"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Ecosystem Expansion",
      status: "upcoming",
      items: [
        "Multi-chain deployment",
        "Advanced governance features",
        "Institutional products",
        "API marketplace",
        "Global marketing campaign"
      ]
    },
    {
      quarter: "Q1 2025",
      title: "Next Generation",
      status: "upcoming",
      items: [
        "AI-powered yield optimization",
        "Decentralized identity integration",
        "Layer 2 native deployment",
        "Advanced analytics dashboard",
        "Community-driven development"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-crypto-green" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-crypto-gold" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-crypto-green";
      case "in-progress":
        return "border-crypto-gold";
      default:
        return "border-muted-foreground";
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey to revolutionize DeFi through innovative technology, 
            strategic partnerships, and community-driven development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`card-crypto p-8 border-l-4 ${getStatusColor(item.status)} relative`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(item.status)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <div className="text-lg text-muted-foreground">{item.quarter}</div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            item.status === "completed"
                              ? "bg-crypto-green/20 text-crypto-green"
                              : item.status === "in-progress"
                              ? "bg-crypto-gold/20 text-crypto-gold"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.status === "completed"
                            ? "Completed"
                            : item.status === "in-progress"
                            ? "In Progress"
                            : "Upcoming"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{subItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-12">Key Milestones Achieved</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-crypto p-6">
              <div className="text-3xl font-bold gradient-text mb-2">$2.5B+</div>
              <div className="text-muted-foreground">Total Value Locked</div>
            </div>
            
            <div className="card-crypto p-6">
              <div className="text-3xl font-bold gradient-text mb-2">150K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            
            <div className="card-crypto p-6">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Protocol Integrations</div>
            </div>
            
            <div className="card-crypto p-6">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;