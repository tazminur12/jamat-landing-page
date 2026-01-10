import Image from "next/image";
import Link from "next/link";

export default function RecentNews() {
  const newsItems = [
    {
      id: 1,
      image: "/news/1.jpg",
      date: "06 জানুয়ারি, 2026",
      title: "বগুড়া-২ আসনে নির্বাচনী প্রচারণা শুরু",
      description: "শেখ মনজুরুল হক রাহাদ বগুড়া-২ আসনে জোরদার নির্বাচনী প্রচারণা শুরু করেছেন।"
    },
    {
      id: 2,
      image: "/news/2.jpg",
      date: "06 জানুয়ারি, 2026",
      title: "গ্রামে গ্রামে জনসংযোগ কার্যক্রম",
      description: "প্রার্থী গ্রামাঞ্চলে জনগণের দোরগোড়ায় পৌঁছে তাদের সমস্যা শুনছেন।"
    },
    {
      id: 3,
      image: "/news/3.jpg",
      date: "06 জানুয়ারি, 2026",
      title: "যুব সমাজের প্রতি বিশেষ আহ্বান",
      description: "তরুণ প্রজন্মকে দেশ গড়ার কাজে এগিয়ে আসার আহ্বান জানালেন প্রার্থী।"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span 
              className="px-4 py-2 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: '#0d5a5a' }}>
              সর্বশেষ সংবাদ
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ color: '#0d5a5a' }}>
            প্রচারণার সাম্প্রতিক খবর
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div 
              key={news.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              
              {/* News Image */}
              <div className="relative h-48 sm:h-56 w-full bg-gray-200">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                
                {/* Date Overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-gray-700 font-medium text-xs">{news.date}</span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {news.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {news.description}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/news/${news.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all duration-300"
                  style={{ color: '#0d5a5a' }}>
                  <span>বিস্তারিত পড়ুন</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-10">
          <Link 
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            style={{ background: '#0d5a5a' }}>
            <span>সব খবর দেখুন</span>
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
