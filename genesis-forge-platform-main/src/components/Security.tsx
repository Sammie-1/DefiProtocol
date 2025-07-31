import { Shield, FileText, Bug, ExternalLink, CheckCircle } from "lucide-react";

const Security = () => {
  const audits = [
    {
      company: "CertiK",
      status: "Completed",
      score: "96/100",
      date: "March 2024",
      type: "Smart Contract Audit"
    },
    {
      company: "Trail of Bits",
      status: "Completed", 
      score: "95/100",
      date: "February 2024",
      type: "Security Review"
    },
    {
      company: "Quantstamp",
      status: "In Progress",
      score: "TBD",
      date: "April 2024",
      type: "Economic Security"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Multi-Signature Wallets",
      description: "All treasury and admin functions require multiple signatures from team members."
    },
    {
      icon: FileText,
      title: "Open Source Code",
      description: "All smart contracts are open source and available for community review."
    },
    {
      icon: Bug,
      title: "Bug Bounty Program", 
      description: "Up to $500K rewards for critical vulnerability discoveries."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Security & <span className="gradient-text">Audits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Security is our top priority. Our protocols undergo rigorous testing and 
            multiple independent audits to ensure the highest level of protection for user funds.
          </p>
        </div>

        {/* Audit Results */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Audit Results</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {audits.map((audit, index) => (
              <div key={index} className="card-crypto p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">{audit.company}</h4>
                  <div className={`w-3 h-3 rounded-full ${
                    audit.status === "Completed" ? "bg-crypto-green" : "bg-crypto-gold"
                  }`}></div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className={`font-medium ${
                      audit.status === "Completed" ? "text-crypto-green" : "text-crypto-gold"
                    }`}>
                      {audit.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Score:</span>
                    <span className="font-medium">{audit.score}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{audit.date}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium text-sm">{audit.type}</span>
                  </div>
                </div>
                
                <button className="w-full btn-crypto-secondary flex items-center justify-center gap-2">
                  View Report <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Security Features</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="card-crypto p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bug Bounty */}
        <div className="card-crypto p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Bug Bounty Program</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Help us maintain the highest security standards. Report vulnerabilities 
                and earn rewards up to $500,000 for critical findings.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-crypto-green" />
                  <span>Critical: Up to $500,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-crypto-green" />
                  <span>High: Up to $100,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-crypto-green" />
                  <span>Medium: Up to $25,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-crypto-green" />
                  <span>Low: Up to $5,000</span>
                </div>
              </div>
              
              <button className="btn-crypto">Report Vulnerability</button>
            </div>
            
            <div className="card-crypto p-6 bg-gradient-primary">
              <div className="text-center text-white">
                <Bug className="w-16 h-16 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">$500K</div>
                <div className="text-white/80">Maximum Reward</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Transparency & Trust</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-crypto p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Open Source</h4>
              <p className="text-sm text-muted-foreground">All code publicly available</p>
            </div>
            
            <div className="card-crypto p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Documentation</h4>
              <p className="text-sm text-muted-foreground">Comprehensive technical docs</p>
            </div>
            
            <div className="card-crypto p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Verified</h4>
              <p className="text-sm text-muted-foreground">Etherscan verified contracts</p>
            </div>
            
            <div className="card-crypto p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">GitHub</h4>
              <p className="text-sm text-muted-foreground">Public repository access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;