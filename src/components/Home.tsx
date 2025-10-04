import { Scale, Users, BookOpen, Heart, ArrowRight, Shield, Award, Globe } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Empowering Legal Minds,
              <br />
              <span className="text-gradient">Building Justice Together</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              A collaborative legal community connecting law students, educators, and professionals
              for learning, writing, and providing accessible legal aid to those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#join" className="btn-primary">
                Join Our Community
              </a>
              <a href="#legal-aid" className="btn-secondary">
                Request Legal Aid
              </a>
            </div>
          </div>
          <div className="slide-up">
            <img
              src="https://images.pexels.com/photos/8111919/pexels-photo-8111919.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Justice scales and law books"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card glass-card-hover p-8 text-center fade-in">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Legal Excellence</h3>
            <p className="text-white/70">
              Advancing legal knowledge through research, writing, and collaborative learning
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 text-center fade-in">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Community Service</h3>
            <p className="text-white/70">
              Providing free and accessible legal aid to underserved communities
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 text-center fade-in">
            <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Global Network</h3>
            <p className="text-white/70">
              Connecting legal professionals and students from institutions worldwide
            </p>
          </div>
        </div>

        <div className="glass-card p-12 mb-20 slide-up">
          <h2 className="section-heading text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Justice and legal mission"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Legal Prudent Fraternity is dedicated to fostering a vibrant community of legal
                professionals, students, and educators committed to excellence in legal practice
                and education.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                We bridge the gap between academic learning and practical application while
                ensuring justice is accessible to all through our comprehensive legal aid programs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Shield size={20} />
                  <span className="font-semibold">Justice for All</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Award size={20} />
                  <span className="font-semibold">Academic Excellence</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Globe size={20} />
                  <span className="font-semibold">Global Impact</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-6">
                <h4 className="text-xl font-bold text-white mb-2">500+ Members</h4>
                <p className="text-white/70">Active legal professionals and students</p>
              </div>
              <div className="glass-card p-6">
                <h4 className="text-xl font-bold text-white mb-2">1000+ Cases</h4>
                <p className="text-white/70">Successfully resolved legal aid requests</p>
              </div>
              <div className="glass-card p-6">
                <h4 className="text-xl font-bold text-white mb-2">50+ Institutions</h4>
                <p className="text-white/70">Collaborative partnerships worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-12 text-center slide-up">
          <BookOpen className="text-cyan-400 mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">Latest from Our Blog</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Stay updated with legal articles, judgment breakdowns, current affairs, and exam
            preparation resources
          </p>
          <a href="#blog" className="btn-primary inline-flex items-center space-x-2">
            <span>Explore Blog</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
