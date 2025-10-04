import { useState } from 'react';
import { Users, Crown, Star, CheckCircle, Send } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    profession: '',
    membershipTier: 'student',
    experience: '',
    interests: '',
    expectations: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Membership application submitted:', formData);
    alert('Thank you for your application! Our team will review your submission and get back to you within 3-5 business days.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const membershipTiers = [
    {
      name: 'Student Member',
      icon: Users,
      price: 'Free',
      duration: 'Annual',
      benefits: [
        'Access to legal resources and articles',
        'Participation in webinars and workshops',
        'Networking with law students',
        'Certificate of membership',
        'Blog writing opportunities',
        'Event participation discounts',
      ],
      highlighted: false,
    },
    {
      name: 'Professional Member',
      icon: Star,
      price: '₹2,999',
      duration: 'Annual',
      benefits: [
        'All Student Member benefits',
        'Priority legal consultation support',
        'Mentorship opportunities',
        'Access to exclusive legal research',
        'Speaking opportunities at events',
        'Professional networking events',
        'CPE/CLE credit programs',
      ],
      highlighted: true,
    },
    {
      name: 'Institutional Member',
      icon: Crown,
      price: 'Custom',
      duration: 'Annual',
      benefits: [
        'All Professional Member benefits',
        'Institutional branding opportunities',
        'Collaborative research projects',
        'Sponsored events and programs',
        'Faculty development programs',
        'Student internship placement',
        'Custom partnership initiatives',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="join" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-heading">Join Our Community</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Become part of a thriving legal community committed to excellence and service
          </p>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal community gavel and books"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* MEMBERSHIP TIERS - TO UNHIDE: Remove the 'hidden' class below */}
        <div className="hidden grid lg:grid-cols-3 gap-8 mb-16">
          {membershipTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`glass-card p-8 fade-in ${
                  tier.highlighted ? 'ring-2 ring-cyan-400 glass-card-hover scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.highlighted && (
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-white/60 ml-2">/ {tier.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-white/80">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={tier.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}
                >
                  Choose Plan
                </button>
              </div>
            );
          })}
        </div>

        <div className="glass-card p-12 mb-12 slide-up">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Membership Application
          </h3>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
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
                <label className="block text-white font-semibold mb-2">Institution/Organization</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your institution name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Profession *</label>
                <select
                  name="profession"
                  required
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="" className="bg-navy-800">Select your profession</option>
                  <option value="student" className="bg-navy-800">Law Student</option>
                  <option value="advocate" className="bg-navy-800">Advocate/Lawyer</option>
                  <option value="professor" className="bg-navy-800">Professor/Educator</option>
                  <option value="judge" className="bg-navy-800">Judge</option>
                  <option value="researcher" className="bg-navy-800">Legal Researcher</option>
                  <option value="other" className="bg-navy-800">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Membership Tier *</label>
                <select
                  name="membershipTier"
                  required
                  value={formData.membershipTier}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="student" className="bg-navy-800">Student Member</option>
                  <option value="professional" className="bg-navy-800">Professional Member</option>
                  <option value="institutional" className="bg-navy-800">Institutional Member</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Years of Experience (if applicable)
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="e.g., 5 years in civil litigation"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Areas of Interest *</label>
              <textarea
                name="interests"
                required
                value={formData.interests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="e.g., Constitutional Law, Corporate Law, Legal Aid..."
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                What do you hope to gain from this membership? *
              </label>
              <textarea
                name="expectations"
                required
                value={formData.expectations}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Share your goals and expectations..."
              />
            </div>

            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
              <p className="text-white/70 text-sm">
                <strong className="text-white">Note:</strong> Upon submitting your application, you will
                receive a confirmation email with payment details (for paid tiers) and next steps. All
                applications are reviewed within 3-5 business days.
              </p>
            </div>

            <div className="text-center">
              <button type="submit" className="btn-primary inline-flex items-center space-x-2">
                <span>Submit Application</span>
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 slide-up">
            <h4 className="text-2xl font-bold text-white mb-4">Questions About Membership?</h4>
            <p className="text-white/70 mb-6">
              Our team is here to help you choose the right membership tier and answer any questions
              you may have.
            </p>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </div>

          <div className="glass-card p-8 slide-up">
            <h4 className="text-2xl font-bold text-white mb-4">Group Applications</h4>
            <p className="text-white/70 mb-6">
              Are you representing an institution or looking to enroll multiple members? We offer
              special group rates and packages.
            </p>
            <a href="#contact" className="btn-secondary">
              Inquire About Group Rates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
