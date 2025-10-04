import { useState, useEffect } from 'react';
import { X, Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('newsletterPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('newsletterPopupSeen', 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing! Check your email for confirmation.');
    setEmail('');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in">
      <div className="glass-card max-w-md w-full p-8 slide-up relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-cyan-400" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Stay Informed</h3>
          <p className="text-white/70 text-sm">
            Subscribe to our newsletter for the latest legal insights, event updates, and opportunities
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your email address"
            />
          </div>

          <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
            <span>Subscribe Now</span>
            <Send size={20} />
          </button>

          <p className="text-white/50 text-xs text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 text-white/60 hover:text-white transition-colors text-sm w-full"
        >
          No thanks, maybe later
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
