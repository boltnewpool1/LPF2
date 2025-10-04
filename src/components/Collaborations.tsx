import { Building2, Handshake, Users, GraduationCap, ExternalLink } from 'lucide-react';

const Collaborations = () => {
  const partners = [
    {
      name: 'Chandigarh University',
      type: 'Academic Institution',
      description: 'Collaborating on legal research, student internships, and joint seminars to bridge academic learning with practical legal experience.',
      focus: ['Research Programs', 'Student Internships', 'Guest Lectures'],
    },
    {
      name: 'National Law School',
      type: 'Academic Institution',
      description: 'Partnership focused on advanced legal education, moot court competitions, and collaborative legal aid initiatives.',
      focus: ['Moot Courts', 'Legal Aid Clinics', 'Faculty Exchange'],
    },
    {
      name: 'Legal Services Authority',
      type: 'Government Body',
      description: 'Working together to provide free legal aid services and increase access to justice for marginalized communities.',
      focus: ['Pro Bono Services', 'Legal Awareness', 'Community Outreach'],
    },
    {
      name: 'Bar Council of India',
      type: 'Professional Body',
      description: 'Collaboration on continuing legal education, professional development programs, and maintaining ethical standards.',
      focus: ['CLE Programs', 'Ethics Training', 'Professional Development'],
    },
    {
      name: 'Legal Aid Foundation',
      type: 'NGO',
      description: 'Joint initiatives to expand legal aid coverage, conduct legal literacy programs, and support underprivileged litigants.',
      focus: ['Legal Literacy', 'Free Consultations', 'Rights Awareness'],
    },
    {
      name: 'Indian Law Institute',
      type: 'Research Institution',
      description: 'Partnership in legal research, policy advocacy, and publication of scholarly works on contemporary legal issues.',
      focus: ['Legal Research', 'Policy Papers', 'Publications'],
    },
  ];

  return (
    <section id="collaborations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-heading">Our Collaborations</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Building bridges across institutions to strengthen the legal community
          </p>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal partnership and collaboration"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="glass-card p-12 mb-12 slide-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-cyan-400/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-cyan-400" size={36} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">15+</h4>
              <p className="text-white/70">Academic Institutions</p>
            </div>
            <div>
              <div className="bg-cyan-400/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-cyan-400" size={36} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">20+</h4>
              <p className="text-white/70">Legal Organizations</p>
            </div>
            <div>
              <div className="bg-cyan-400/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-cyan-400" size={36} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">10+</h4>
              <p className="text-white/70">NGO Partners</p>
            </div>
            <div>
              <div className="bg-cyan-400/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-cyan-400" size={36} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
              <p className="text-white/70">Collaborative Projects</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-8 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">
                    {partner.type}
                  </span>
                </div>
                <ExternalLink className="text-cyan-400 flex-shrink-0" size={24} />
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">{partner.description}</p>
              <div className="space-y-2">
                <p className="text-white font-semibold text-sm mb-2">Key Focus Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {partner.focus.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 text-white px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-12 mb-12 slide-up">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Why Partner With Us?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Extensive Network</h4>
                  <p className="text-white/70">
                    Access to a diverse community of legal professionals, students, and academics
                    across multiple jurisdictions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Shared Resources</h4>
                  <p className="text-white/70">
                    Collaborative platforms for research, knowledge sharing, and joint initiatives
                    that amplify impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Social Impact</h4>
                  <p className="text-white/70">
                    Opportunity to contribute to meaningful social change through legal aid and
                    community service programs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-xl">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Growth Opportunities</h4>
                  <p className="text-white/70">
                    Platform for institutional growth, visibility, and recognition in the legal
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-12 text-center slide-up">
          <Handshake className="text-cyan-400 mx-auto mb-6" size={48} />
          <h3 className="text-3xl font-bold text-white mb-4">Interested in Collaborating?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We're always looking for like-minded institutions and organizations to partner with.
            Let's work together to make a difference in the legal community.
          </p>
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
