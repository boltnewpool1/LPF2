import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900/50 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/image.png" alt="Legal Prudent Fraternity" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-base leading-tight">Legal Prudent</span>
                <span className="text-cyan-400 text-xs font-medium">Fraternity</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Empowering legal minds and building justice together through collaborative learning,
              professional development, and accessible legal aid.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400/20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
              >
                <Facebook className="text-cyan-400" size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400/20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
              >
                <Twitter className="text-cyan-400" size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400/20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
              >
                <Linkedin className="text-cyan-400" size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400/20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
              >
                <Instagram className="text-cyan-400" size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400/20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
              >
                <Youtube className="text-cyan-400" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#legal-aid" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Legal Aid
                </a>
              </li>
              <li>
                <a href="#collaborations" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Collaborations
                </a>
              </li>
              <li>
                <a href="#events" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#join" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Legal Articles
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Judgment Breakdowns
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Exam Preparation
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Current Affairs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Write for Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                <a
                  href="mailto:info@legalprudent.org"
                  className="text-white/70 hover:text-cyan-400 transition-colors text-sm"
                >
                  info@legalprudent.org
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-white/70 text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-white/70 text-sm">
                  Chandigarh, Punjab 140001, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Disclaimer
              </a>
            </div>
            <div className="text-sm text-white/60 md:text-right">
              <p>© {currentYear} Legal Prudent Fraternity. All rights reserved.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
          <p className="text-white/70 text-xs text-center leading-relaxed">
            <strong className="text-white">Disclaimer:</strong> The information provided on this
            website is for general informational purposes only and does not constitute legal advice.
            For specific legal guidance, please consult with a qualified legal professional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
