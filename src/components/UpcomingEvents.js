import Link from "next/link";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      date: "15 জানুয়ারি, 2026",
      title: "বগুড়া সদরে জনসভা",
      time: "৩:০০ PM",
      location: "বগুড়া সদর, কেন্দ্রীয় ময়দান",
      description: "বগুড়া সদরে বিশাল জনসভা অনুষ্ঠিত হবে।",
      status: "আসন্ন"
    },
    {
      id: 2,
      date: "18 জানুয়ারি, 2026",
      title: "কচুয়া উপজেলায় জনসংযোগ",
      time: "১০:০০ AM",
      location: "কচুয়া উপজেলা, বিভিন্ন ইউনিয়ন",
      description: "কচুয়া উপজেলার বিভিন্ন ইউনিয়নে জনসংযোগ কার্যক্রম।",
      status: "আসন্ন"
    },
    {
      id: 3,
      date: "20 জানুয়ারি, 2026",
      title: "যুব সমাবেশ",
      time: "৪:০০ PM",
      location: "বগুড়া পৌরসভা হল",
      description: "বগুড়ায় তরুণদের জন্য বিশেষ সমাবেশ।",
      status: "আসন্ন"
    },
    {
      id: 4,
      date: "22 জানুয়ারি, 2026",
      title: "নারী সমাবেশ",
      time: "১১:০০ AM",
      location: "বগুড়া মহিলা কলেজ",
      description: "বগুড়ায় নারীদের জন্য বিশেষ সমাবেশ।",
      status: "আসন্ন"
    }
  ];

  return (
    <section id="events" className="py-20 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-2 text-sm">
            ইভেন্ট ও সমাবেশ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
            আসন্ন প্রচারণা কর্মসূচী সমূহ
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            আমাদের সাথে যোগ দিন এবং পরিবর্তনের অংশ হোন। আপনার এলাকায় আমাদের 
            পরবর্তী কর্মসূচিতে অংশ নিন।
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              
              <div className="p-5 sm:p-6">
                {/* Date & Status */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-xs sm:text-sm">{event.date}</span>
                  </div>
                  <span 
                    className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: '#22c55e' }}>
                    {event.status}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                {/* Time */}
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xs sm:text-sm">{event.time}</span>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 text-gray-600 mb-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
                      stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-xs sm:text-sm">{event.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* CTA Link */}
                <Link 
                  href={`/events/${event.id}`}
                  className="inline-flex items-center gap-2 text-gray-900 font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-300 group">
                  <span>বিস্তারিত দেখুন</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link 
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            style={{ background: '#0d5a5a' }}>
            <span>সকল কর্মসূচী দেখুন</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
