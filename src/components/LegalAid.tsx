import { useState } from 'react';
import { Scale, Heart, Shield, CheckCircle, Send } from 'lucide-react';

const LegalAid = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    description: '',
    urgency: 'normal',
    serviceType: 'free',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your request. Our team will review your case and contact you within 24-48 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="legal-aid" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-heading">Legal Aid & Services</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Access to justice is a right, not a privilege. We're here to help.
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/7329674/pexels-photo-7329674.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal aid and justice scales"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card glass-card-hover p-8 text-center fade-in">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Free Legal Aid</h3>
            <p className="text-white/70 mb-4">
              Pro bono legal assistance for those who cannot afford legal representation
            </p>
            <ul className="text-white/60 text-sm space-y-2 text-left">
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Legal consultations</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Document preparation</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Court representation</span>
              </li>
            </ul>
          </div>

          <div className="glass-card glass-card-hover p-8 text-center fade-in">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Legal Consultation</h3>
            <p className="text-white/70 mb-4">
              Professional legal advice from experienced practitioners at affordable rates
            </p>
            <ul className="text-white/60 text-sm space-y-2 text-left">
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Case analysis & strategy</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Legal documentation review</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Ongoing legal support</span>
              </li>
            </ul>
          </div>

          <div className="glass-card glass-card-hover p-8 text-center fade-in">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Premium Services</h3>
            <p className="text-white/70 mb-4">
              Comprehensive legal services with dedicated attention and expertise
            </p>
            <ul className="text-white/60 text-sm space-y-2 text-left">
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Dedicated legal team</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Priority case handling</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>24/7 legal support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-12 mb-12 slide-up">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Request Legal Assistance
          </h3>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your full name"
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Case Type *</label>
                <select
                  name="caseType"
                  required
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="" className="bg-navy-800">Select case type</option>
                  <option value="civil" className="bg-navy-800">Civil Law</option>
                  <option value="criminal" className="bg-navy-800">Criminal Law</option>
                  <option value="family" className="bg-navy-800">Family Law</option>
                  <option value="property" className="bg-navy-800">Property Law</option>
                  <option value="consumer" className="bg-navy-800">Consumer Law</option>
                  <option value="labor" className="bg-navy-800">Labor Law</option>
                  <option value="other" className="bg-navy-800">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Service Type *</label>
                <select
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="free" className="bg-navy-800">Free Legal Aid</option>
                  <option value="consultation" className="bg-navy-800">Paid Consultation</option>
                  <option value="premium" className="bg-navy-800">Premium Services</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Urgency Level *</label>
                <select
                  name="urgency"
                  required
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="normal" className="bg-navy-800">Normal</option>
                  <option value="urgent" className="bg-navy-800">Urgent</option>
                  <option value="critical" className="bg-navy-800">Critical</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Case Description *</label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Please describe your legal issue in detail..."
              />
            </div>

            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
              <p className="text-white/70 text-sm">
                <strong className="text-white">Note:</strong> All information provided will be kept strictly confidential.
                Our team will review your request and contact you within 24-48 hours to discuss your case and next steps.
              </p>
            </div>

            <div className="text-center">
              <button type="submit" className="btn-primary inline-flex items-center space-x-2">
                <span>Submit Request</span>
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="glass-card p-8 text-center slide-up">
          <h4 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h4>
          <p className="text-white/70 mb-6">
            For urgent legal matters requiring immediate attention, please call our helpline
          </p>
          <div className="text-3xl font-bold text-cyan-400 mb-2">+91 XXXXX XXXXX</div>
          <p className="text-white/60 text-sm">Available Mon-Fri, 9:00 AM - 6:00 PM IST</p>
        </div>
      </div>
    </section>
  );
};

export default LegalAid;
