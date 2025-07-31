import { X, Mail, Check, Users } from "lucide-react";
import { useState } from "react";

interface WhitelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhitelistModal = ({ isOpen, onClose }: WhitelistModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setIsSubmitted(false);
      setEmail("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="card-crypto p-8 max-w-md w-full relative">
        {/* Close button */}
        {!isSubmitting && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        )}

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Join the Whitelist</h3>
              <p className="text-muted-foreground">
                Be among the first to experience our revolutionary DeFi platform. 
                Get early access, exclusive benefits, and priority support.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-crypto-purple focus:border-transparent outline-none transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!email || isSubmitting}
                className={`w-full btn-crypto py-3 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Joining Whitelist...
                  </div>
                ) : (
                  'Join Whitelist'
                )}
              </button>

              <div className="bg-secondary/20 rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-2">Whitelist Benefits:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Early access to platform features</li>
                  <li>• Exclusive governance voting rights</li>
                  <li>• Priority customer support</li>
                  <li>• Special bonuses and rewards</li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                No spam, unsubscribe at any time. We respect your privacy and will only send important updates.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-crypto-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-crypto-green" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-crypto-green">You're In!</h3>
            <p className="text-muted-foreground mb-4">
              Welcome to the DeFiProtocol whitelist! You'll receive an email confirmation shortly.
            </p>
            <div className="bg-crypto-green/10 rounded-xl p-4">
              <p className="text-sm text-crypto-green">
                <strong>{email}</strong> has been successfully added to our whitelist.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhitelistModal;
