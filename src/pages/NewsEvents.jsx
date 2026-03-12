import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, ArrowRight, X, Users, Award, Zap, Lightbulb 
} from 'lucide-react';

const NewsEvents = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const eventsAndNews = [
    {
      type: "event",
      title: "Industry 4.0 & Skill Development Workshop",
      date: "April 15–16, 2026",
      location: "Bangalore (UDUGIRI Training Center)",
      description: "Two-day hands-on workshop on PLC-SCADA, IIoT integration, and smart manufacturing lab setup. Open for faculty, industry professionals, and engineering students.",
      fullContent: "Join us for this exclusive workshop where participants will get practical exposure to real industrial-grade equipment, including PLC programming, SCADA dashboards, IIoT sensor networks, and smart factory simulation. Includes live demos, project-based sessions, and certification. Limited seats — register early.",
      image: "https://images.unsplash.com/photo-1524178232363-933d15b4d95d?auto=format&fit=crop&q=80&w=1200",
      tags: ["Workshop", "Skill Development", "Industry 4.0"]
    },
    {
      type: "news",
      title: "UDUGIRI Launches Advanced Skill Innovation Lab for Engineering Colleges",
      date: "March 10, 2026",
      description: "New turnkey lab setup with robotics, IIoT, CNC simulation, and CPS modules now available for institutions. Aligned with NEP 2020 and Skill India.",
      fullContent: "We are excited to announce the launch of our latest Advanced Skill Innovation Lab package — a complete solution including industrial robotics arms, collaborative cobots, IIoT platforms, CNC simulation software, and cyber-physical systems integration. Designed specifically for engineering colleges and universities to prepare students for Industry 4.0/5.0 roles. First installations already completed in Karnataka.",
      image: "https://images.unsplash.com/photo-1581093458793-5e1f0e8d3f3d?auto=format&fit=crop&q=80&w=1200",
      tags: ["Skill Labs", "Education", "Launch"]
    },
    {
      type: "event",
      title: "ZED Certification Awareness Program for MSMEs",
      date: "April 28, 2026",
      location: "Bangalore (Online + Offline)",
      description: "Free awareness session on Zero Defect Zero Effect certification, benefits, implementation roadmap, and government incentives.",
      fullContent: "This half-day program is designed to help MSMEs understand the ZED scheme, its impact on quality & exports, and the step-by-step certification process. Includes real case studies, gap analysis demo, and subsidy guidance. Open for MSME owners, quality managers, and technical heads.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      tags: ["ZED", "MSME", "Certification"]
    },
    {
      type: "news",
      title: "Successful Lean Implementation at Automotive Ancillary Unit",
      date: "February 20, 2026",
      description: "Client achieved 32% productivity improvement and 22% waste reduction within 8 months through UDUGIRI's Lean consulting program.",
      fullContent: "We are proud to share the success of our recent Lean Manufacturing project with a mid-sized automotive component manufacturer in Bangalore. Through Value Stream Mapping, 5S implementation, Kaizen events, and TPM rollout, the client reduced lead time by 28%, minimized defects, and improved on-time delivery. Full ROI achieved ahead of schedule.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      tags: ["Lean", "Success Story", "Automotive"]
    }
  ];

  const openLightbox = (item) => setSelectedItem(item);
  const closeLightbox = () => setSelectedItem(null);

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-933d15b4d95d?auto=format&fit=crop&q=80&w=2070"
            alt="News & Events at UDUGIRI"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/30 border border-indigo-700/40 rounded-full text-indigo-300 text-xs font-medium uppercase tracking-wide mb-6">
            Latest Updates
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            News & Events
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Stay updated with our latest workshops, certifications, project successes, skill lab launches, and industry collaborations.
          </p>
        </div>
      </section>

      {/* Upcoming Events & Recent News */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Upcoming Events & Recent Updates</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base">
              Workshops, certification programs, success stories, and thought leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsAndNews.map((item, i) => (
              <div
                key={i}
                onClick={() => openLightbox(item)}
                className="relative rounded-xl overflow-hidden border border-slate-200 h-80 group cursor-pointer hover:shadow-lg transition-shadow"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-indigo-600/80 text-white text-xs rounded-full mb-3 w-fit">
                    {item.type === 'event' ? 'Upcoming Event' : 'News'}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-slate-200 text-sm">
                    <Clock className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Popup */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="w-full h-64 md:h-96 object-cover rounded-t-xl"
            />

            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  selectedItem.type === 'event' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {selectedItem.type === 'event' ? 'Event' : 'News'}
                </span>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Clock className="w-4 h-4" />
                  {selectedItem.date}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">{selectedItem.title}</h2>
              
              {selectedItem.location && (
                <div className="flex items-center gap-2 text-slate-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  {selectedItem.location}
                </div>
              )}

              <p className="text-slate-700 leading-relaxed mb-8 whitespace-pre-line">
                {selectedItem.fullContent || selectedItem.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedItem.tags?.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-16 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Stay Updated with UDUGIRI
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest workshops, certifications, project successes, and industry insights.
          </p>

          <Link
            to="/contact"
            className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-indigo-800 transition inline-flex items-center gap-2 shadow-md"
          >
            Subscribe & Stay Informed <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="mt-10 text-sm text-slate-400">
            UDUGIRI Technologies • Bangalore, Karnataka
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;