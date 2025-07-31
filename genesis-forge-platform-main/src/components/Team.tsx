import { Github, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Goldman Sachs quantitative analyst with 10+ years in traditional finance and 5+ years in DeFi.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-Founder",
      bio: "Ex-Google senior engineer specializing in distributed systems and blockchain infrastructure.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Security",
      bio: "Ethereum core contributor and security researcher with multiple protocol audits under his belt.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      bio: "Former Coinbase product manager with expertise in user experience and product strategy.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. James Wilson",
      role: "Economic Advisor",
      credential: "Former Federal Reserve Economist"
    },
    {
      name: "Lisa Zhang",
      role: "Technical Advisor",
      credential: "Ethereum Foundation Researcher"
    },
    {
      name: "David Park",
      role: "Business Advisor",
      credential: "Ex-Binance VP of Strategy"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experienced professionals building the future of decentralized finance. 
            Our team combines deep traditional finance expertise with cutting-edge blockchain knowledge.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Core Team</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-crypto p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-primary opacity-20"></div>
                </div>
                
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <div className="text-crypto-purple font-medium mb-4">{member.role}</div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-center gap-4">
                  <a href={member.social.twitter} className="text-muted-foreground hover:text-crypto-blue transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-muted-foreground hover:text-crypto-blue transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.github} className="text-muted-foreground hover:text-crypto-blue transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Advisory Board</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="card-crypto p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{advisor.name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{advisor.name}</h4>
                <div className="text-crypto-purple font-medium mb-2">{advisor.role}</div>
                <p className="text-sm text-muted-foreground">{advisor.credential}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credibility Section */}
        <div className="card-crypto p-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Proven Track Record</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-2">$50B+</div>
              <div className="text-muted-foreground">Combined Experience in Managing Assets</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold gradient-text mb-2">15+</div>
              <div className="text-muted-foreground">Years Average Industry Experience</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Successful Projects Delivered</div>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team has previously built and scaled multiple successful fintech and blockchain 
            projects, with a combined track record of managing over $50B in assets and 
            delivering innovative solutions used by millions of users worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;