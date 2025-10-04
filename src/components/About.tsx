import { Target, Eye, Heart, Handshake, Users as Users2, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-heading">About Legal Prudent Fraternity</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Founded on the principles of justice, education, and community service
          </p>
        </div>

        <div className="glass-card p-12 mb-12 slide-up">
          <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-6">
            <div className="text-white/80 text-lg space-y-4 leading-relaxed">
            <p>
              Legal Prudent Fraternity was established with a vision to create a collaborative
              platform where legal minds converge, learn, and grow together. What started as a
              small group of passionate law students has now evolved into a thriving community of
              legal professionals, educators, and students from across the globe.
            </p>
            <p>
              Our journey began with the recognition that legal education and practice should not
              exist in isolation. By fostering connections between academia and real-world
              application, we've created a space where theoretical knowledge meets practical
              wisdom, and where every member contributes to the collective growth of the legal
              community.
            </p>
            <p>
              Today, we stand as a testament to the power of collaboration, having successfully
              bridged the gap between legal education and community service, while maintaining our
              core commitment to making justice accessible to all.
            </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Legal books and education"
                className="rounded-xl shadow-xl w-full h-auto object-cover sticky top-24"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card glass-card-hover p-8 slide-up">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To foster a dynamic community of legal professionals and students dedicated to
              advancing legal knowledge, providing accessible legal aid, and promoting justice
              through collaborative learning and practical application.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 slide-up">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be the leading global platform that empowers legal minds, bridges academic and
              practical legal education, and ensures that justice is not a privilege but a right
              accessible to every individual regardless of their circumstances.
            </p>
          </div>
        </div>

        <div className="glass-card p-12 mb-12 slide-up">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Values</h3>
          <div className="mb-10">
            <img
              src="https://images.pexels.com/photos/8111984/pexels-photo-8111984.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Supreme Court of India - Justice and Legal Values"
              className="rounded-xl shadow-xl w-full h-72 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-400/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-cyan-400" size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Justice & Integrity</h4>
              <p className="text-white/70">
                Upholding the highest ethical standards and ensuring fairness in all our endeavors
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-400/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-cyan-400" size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Excellence in Learning</h4>
              <p className="text-white/70">
                Promoting continuous education and knowledge sharing among legal professionals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-400/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="text-cyan-400" size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Community Service</h4>
              <p className="text-white/70">
                Dedicating our expertise to serve those who need legal assistance the most
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-12 slide-up">
          <div className="flex items-center justify-center mb-8">
            <Handshake className="text-cyan-400" size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Our Collaborative Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-white/80">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Academic Partnerships</h4>
              <p className="leading-relaxed">
                We collaborate with leading law schools and universities to create opportunities
                for students to gain practical experience while contributing to community legal
                services.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Professional Networks</h4>
              <p className="leading-relaxed">
                Our connections with practicing attorneys, judges, and legal scholars provide
                mentorship and real-world insights to emerging legal professionals.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Legal Aid Organizations</h4>
              <p className="leading-relaxed">
                We partner with NGOs and legal aid societies to extend our reach and impact,
                ensuring comprehensive support for those in need.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Research Institutions</h4>
              <p className="leading-relaxed">
                Collaborating with research centers to contribute to legal scholarship and policy
                development that shapes the future of justice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
