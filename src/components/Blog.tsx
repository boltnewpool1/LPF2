import { useState } from 'react';
import { BookOpen, Search, Tag, Calendar, User, ArrowRight, FileText, Gavel, Newspaper, GraduationCap } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen },
    { id: 'articles', name: 'Legal Articles', icon: FileText },
    { id: 'judgments', name: 'Judgment Breakdowns', icon: Gavel },
    { id: 'affairs', name: 'Current Affairs', icon: Newspaper },
    { id: 'exam', name: 'Exam Preparation', icon: GraduationCap },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Article 21: Right to Life and Personal Liberty',
      excerpt: 'A comprehensive analysis of one of the most fundamental rights enshrined in the Indian Constitution and its evolving interpretations.',
      category: 'articles',
      author: 'Dr. Priya Sharma',
      date: '2025-09-28',
      tags: ['Constitutional Law', 'Fundamental Rights', 'Article 21'],
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Supreme Court Judgment: Privacy in the Digital Age',
      excerpt: 'Breaking down the landmark verdict on data protection and privacy rights, exploring its implications for citizens and corporations.',
      category: 'judgments',
      author: 'Adv. Rahul Mehta',
      date: '2025-09-25',
      tags: ['Privacy Law', 'Supreme Court', 'Digital Rights'],
      readTime: '12 min read',
    },
    {
      id: 3,
      title: 'Recent Amendments to the Criminal Procedure Code',
      excerpt: 'An overview of the latest changes in CrPC and how they impact investigation procedures and accused rights.',
      category: 'affairs',
      author: 'Prof. Anjali Desai',
      date: '2025-09-22',
      tags: ['Criminal Law', 'CrPC', 'Legal Updates'],
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Contract Law Essentials for Judiciary Exams',
      excerpt: 'Master the key concepts of contract law with this comprehensive guide designed specifically for judicial service examinations.',
      category: 'exam',
      author: 'Adv. Vikram Singh',
      date: '2025-09-20',
      tags: ['Contract Law', 'Exam Prep', 'Judiciary'],
      readTime: '15 min read',
    },
    {
      id: 5,
      title: 'Environmental Jurisprudence: Evolving Legal Frameworks',
      excerpt: 'Exploring the development of environmental law in India and recent judicial interventions for ecological protection.',
      category: 'articles',
      author: 'Dr. Meera Krishnan',
      date: '2025-09-18',
      tags: ['Environmental Law', 'Public Interest', 'Green Tribunal'],
      readTime: '10 min read',
    },
    {
      id: 6,
      title: 'Decoding the Section 377 Verdict',
      excerpt: 'A detailed breakdown of the historic Supreme Court judgment decriminalizing consensual same-sex relationships.',
      category: 'judgments',
      author: 'Adv. Sanjay Kumar',
      date: '2025-09-15',
      tags: ['Constitutional Law', 'LGBTQ+ Rights', 'Landmark Judgments'],
      readTime: '14 min read',
    },
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-heading">Legal Prudent Blog</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Expert insights, judgment analyses, and comprehensive legal resources
          </p>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal documents and research"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="glass-card p-6 mb-12 slide-up">
          <div className="flex items-center space-x-4">
            <Search className="text-white/50" size={24} />
            <input
              type="text"
              placeholder="Search articles, judgments, topics..."
              className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none text-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12 slide-up">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-white shadow-lg shadow-cyan-400/50'
                    : 'glass-card text-white hover:bg-white/15'
                }`}
              >
                <Icon size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="glass-card glass-card-hover p-6 flex flex-col fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-2 text-cyan-400 text-sm mb-4">
                <Tag size={16} />
                <span className="capitalize">{post.category.replace('-', ' ')}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-white/70 mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-white/60 border-t border-white/10 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 text-cyan-400 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>Read More</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card p-12 text-center slide-up">
          <h3 className="text-3xl font-bold text-white mb-4">Write for Us</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Share your legal expertise with our community. We welcome contributions from law
            students, practitioners, and academics.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Submit Your Article</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
