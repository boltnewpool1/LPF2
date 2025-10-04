import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://images.pexels.com/photos/7876721/pexels-photo-7876721.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal consultation contact"
              className="rounded-xl shadow-2xl w-full h-72 object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8 slide-up">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-white/70">info@legalprudent.org</p>
                    <p className="text-white/70">support@legalprudent.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-white/70">+91 XXXXX XXXXX</p>
                    <p className="text-white/60 text-sm">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-white/70">
                      Legal Prudent Fraternity
                      <br />
                      Sector 12, University Road
                      <br />
                      Chandigarh, Punjab 140001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
                >
                  <Facebook className="text-cyan-400" size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
                >
                  <Twitter className="text-cyan-400" size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
                >
                  <Linkedin className="text-cyan-400" size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
                >
                  <Instagram className="text-cyan-400" size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition-colors"
                >
                  <Youtube className="text-cyan-400" size={24} />
                </a>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-white/70">
                <p><strong className="text-white">Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong className="text-white">Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong className="text-white">Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject *</label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="" className="bg-navy-800">Select a subject</option>
                  <option value="general" className="bg-navy-800">General Inquiry</option>
                  <option value="membership" className="bg-navy-800">Membership Question</option>
                  <option value="legal-aid" className="bg-navy-800">Legal Aid Request</option>
                  <option value="collaboration" className="bg-navy-800">Collaboration Proposal</option>
                  <option value="event" className="bg-navy-800">Event Related</option>
                  <option value="feedback" className="bg-navy-800">Feedback/Suggestion</option>
                  <option value="other" className="bg-navy-800">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Write your message here..."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="glass-card p-8 text-center slide-up">
          <h3 className="text-2xl font-bold text-white mb-4">Looking for Legal Aid?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            If you need legal assistance or consultation, please use our dedicated legal aid request form
            for faster processing and proper case assignment.
          </p>
          <a href="#legal-aid" className="btn-primary">
            Request Legal Aid
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
