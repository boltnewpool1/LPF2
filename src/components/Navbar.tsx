import { useState } from 'react';
import { Menu, X, Search, Scale } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Legal Aid', href: '#legal-aid' },
    { name: 'Collaborations', href: '#collaborations' },
    { name: 'Events', href: '#events' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src="/image.png" alt="Legal Prudent Fraternity" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">Legal Prudent</span>
              <span className="text-cyan-400 text-sm font-medium">Fraternity</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              <Search size={20} />
            </button>
            <a href="#join" className="btn-primary text-sm">
              Become a Member
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="pb-4 fade-in">
            <input
              type="text"
              placeholder="Search articles, judgments, and more..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        )}

        {isOpen && (
          <div className="lg:hidden pb-4 fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a href="#join" className="btn-primary text-sm text-center mt-4">
                Become a Member
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
