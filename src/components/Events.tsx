import { Calendar, MapPin, Clock, Users, ExternalLink, Award } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'National Moot Court Competition 2025',
      date: '2025-10-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Chandigarh University, Punjab',
      type: 'Competition',
      description: 'Premier moot court competition bringing together law students from across the country to showcase their advocacy skills.',
      participants: '50+ Teams',
      registration: 'https://example.com/register',
    },
    {
      id: 2,
      title: 'Legal Aid Workshop: Constitutional Rights',
      date: '2025-10-22',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      description: 'Interactive workshop focusing on fundamental rights, their interpretation, and practical applications in legal aid cases.',
      participants: 'Open to All',
      registration: 'https://example.com/register',
    },
    {
      id: 3,
      title: 'Career Guidance Seminar: Judicial Services',
      date: '2025-11-05',
      time: '10:00 AM - 1:00 PM',
      location: 'Delhi Law College, New Delhi',
      type: 'Seminar',
      description: 'Comprehensive guidance on preparing for judicial service examinations with insights from successful candidates and judges.',
      participants: '200+ Attendees',
      registration: 'https://example.com/register',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'International Legal Conference 2025',
      date: '2025-08-15',
      location: 'Mumbai',
      highlights: 'Featured speakers from Supreme Court, discussions on emerging legal trends, and networking opportunities.',
      attendees: '500+',
    },
    {
      id: 2,
      title: 'Legal Writing Competition',
      date: '2025-07-20',
      location: 'Virtual',
      highlights: 'Participants submitted papers on contemporary legal issues. Winners received publication opportunities.',
      attendees: '150+',
    },
    {
      id: 3,
      title: 'Pro Bono Legal Aid Camp',
      date: '2025-06-10',
      location: 'Rural Punjab',
      highlights: 'Free legal consultations provided to underserved communities, focusing on property and family law matters.',
      attendees: '300+ Beneficiaries',
    },
  ];

  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-heading">Events & Opportunities</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Stay engaged with our community through workshops, competitions, and seminars
          </p>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal conference and events"
              className="rounded-xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Calendar className="text-cyan-400 mr-3" size={32} />
            Upcoming Events
          </h3>
          <div className="grid lg:grid-cols-1 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="glass-card glass-card-hover p-8 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-4 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">
                        {event.type}
                      </span>
                      <span className="text-white/60 text-sm">{event.participants}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{event.title}</h4>
                    <p className="text-white/70 mb-6 leading-relaxed">{event.description}</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 text-white/80">
                        <Calendar className="text-cyan-400 flex-shrink-0" size={20} />
                        <span className="text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <Clock className="text-cyan-400 flex-shrink-0" size={20} />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <MapPin className="text-cyan-400 flex-shrink-0" size={20} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-48 flex flex-col space-y-3">
                    <button className="btn-primary w-full flex items-center justify-center space-x-2">
                      <span>Register Now</span>
                      <ExternalLink size={18} />
                    </button>
                    <button className="btn-secondary w-full">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="text-cyan-400 mr-3" size={32} />
            Past Events
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className="glass-card glass-card-hover p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-cyan-400 text-sm">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <Users size={16} />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                <div className="flex items-center space-x-2 text-white/60 text-sm mb-4">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{event.highlights}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 slide-up">
            <h3 className="text-2xl font-bold text-white mb-4">Host an Event with Us</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Are you planning a legal conference, workshop, or competition? Partner with us to
              reach a wider audience and make a greater impact in the legal community.
            </p>
            <a href="#contact" className="btn-primary">
              Propose an Event
            </a>
          </div>

          <div className="glass-card p-8 slide-up">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Never miss an opportunity! Subscribe to our newsletter to receive notifications about
              upcoming events, competitions, and exclusive opportunities.
            </p>
            <button className="btn-primary">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
