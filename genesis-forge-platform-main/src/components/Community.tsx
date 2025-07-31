import { Twitter, MessageCircle, Send, Users, ExternalLink, Star } from "lucide-react";

const Community = () => {
  const socialStats = [
    {
      platform: "Twitter",
      icon: Twitter,
      followers: "125K",
      handle: "@DeFiProtocol",
      color: "crypto-blue"
    },
    {
      platform: "Discord", 
      icon: MessageCircle,
      followers: "85K",
      handle: "discord.gg/defiprotocol",
      color: "crypto-purple"
    },
    {
      platform: "Telegram",
      icon: Send,
      followers: "95K", 
      handle: "t.me/defiprotocol",
      color: "crypto-green"
    }
  ];

  const testimonials = [
    {
      name: "Vitalik Buterin",
      role: "Ethereum Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "DeFiProtocol represents the next evolution of decentralized finance with innovative staking mechanisms."
    },
    {
      name: "Hayden Adams",
      role: "Uniswap Founder", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "The liquid staking approach here is groundbreaking and will change how we think about yield generation."
    },
    {
      name: "Stani Kulechov",
      role: "Aave Founder",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      quote: "Impressed by the technical innovation and security-first approach of the DeFiProtocol team."
    }
  ];

  const partners = [
    "Chainlink", "Uniswap", "Aave", "Compound", "MakerDAO", "Synthetix"
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of DeFi enthusiasts, developers, and investors. 
            Stay updated on the latest developments and participate in governance decisions.
          </p>
        </div>

        {/* Social Media Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialStats.map((social, index) => (
            <div key={index} className="card-crypto p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 bg-${social.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <social.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{social.platform}</h3>
              <div className="text-3xl font-bold gradient-text mb-2">{social.followers}</div>
              <div className="text-muted-foreground mb-6">Followers</div>
              <button className="btn-crypto-secondary w-full flex items-center justify-center gap-2">
                Follow <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="card-crypto p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Community Growth</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">305K+</div>
              <div className="text-muted-foreground">Total Community Members</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">12K+</div>
              <div className="text-muted-foreground">Daily Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2.5K+</div>
              <div className="text-muted-foreground">Governance Participants</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Countries Represented</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Leaders Are Saying</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-crypto p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-crypto-purple">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-crypto-gold text-crypto-gold" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Trusted Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="card-crypto p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{partner.charAt(0)}</span>
                </div>
                <div className="text-sm font-medium">{partner}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="card-crypto p-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-crypto-purple" />
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, governance proposals, 
            and exclusive insights from the DeFiProtocol team.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <button className="btn-crypto px-8">Subscribe</button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;