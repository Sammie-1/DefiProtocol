import { Twitter, MessageCircle, Send, Github, FileText, Shield, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Protocol: [
      { name: "Whitepaper", href: "#", icon: FileText },
      { name: "Documentation", href: "#", icon: FileText },
      { name: "GitHub", href: "#", icon: Github },
      { name: "Audits", href: "#", icon: Shield }
    ],
    Community: [
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "Discord", href: "#", icon: MessageCircle },
      { name: "Telegram", href: "#", icon: Send },
      { name: "Newsletter", href: "#", icon: Mail }
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Bug Bounty", href: "#" },
      { name: "Brand Kit", href: "#" }
    ],
    Legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" }
    ]
  };

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">Ð</span>
              </div>
              <span className="text-xl font-bold">DeFiProtocol</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Revolutionizing DeFi with secure, transparent, and community-driven protocols.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-crypto-purple hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-crypto-purple hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-crypto-purple hover:text-white transition-colors">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-crypto-purple hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      {link.icon && <link.icon size={16} />}
                      {link.name}
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contract Info */}
        <div className="card-crypto p-6 mb-8">
          <h4 className="font-semibold mb-4">Smart Contract Information</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contract Address:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono">0x1234...5678</span>
                <button className="text-crypto-blue hover:text-crypto-purple transition-colors">
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Network:</span>
              <span>Ethereum Mainnet</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Supply:</span>
              <span>1,000,000,000 DEFI</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Decimals:</span>
              <span>18</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="card-crypto p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm">
                Get the latest updates on protocol developments and community events.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <button className="btn-crypto px-6">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 DeFiProtocol. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Last updated: March 2024</span>
            <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
            <span>All systems operational</span>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 p-4 bg-crypto-red/10 border border-crypto-red/20 rounded-xl">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Risk Disclaimer:</strong> DeFi protocols involve financial risk. 
            Past performance does not guarantee future results. Always do your own research 
            and never invest more than you can afford to lose. This is not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;