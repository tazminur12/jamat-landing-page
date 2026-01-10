import Link from "next/link";

export default function CallToAction() {
  const stats = [
    { number: "৮০+", label: "বছরের ঐতিহ্য" },
    { number: "৬৪", label: "জেলা শাখা" },
    { number: "লক্ষ+", label: "সদস্য সংখ্যা" }
  ];

  return (
    <section 
      className="py-20 px-4 sm:px-8"
      style={{
        background: 'linear-gradient(135deg, #0d5a5a 0%, #0a4545 100%)',
        backgroundImage: `
          linear-gradient(135deg, #0d5a5a 0%, #0a4545 100%),
          repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.02) 35px, rgba(255,255,255,.02) 70px)
        `
      }}>
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heart Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
          </svg>
        </div>

        {/* Main Heading */}
        <h2 className="mb-6">
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
            আসুন একসাথে গড়ি
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-400">
            কল্যাণমুখী বাংলাদেশ
          </span>
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          ইসলামী মূল্যবোধ ও ন্যায়বিচারের ভিত্তিতে একটি সুন্দর সমাজ গঠনে আজই আমাদের সাথে যুক্ত হোন।
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          
          {/* Become Member Button */}
          <Link 
            href="/membership"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-300 text-gray-900 font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>সদস্য হোন</span>
          </Link>

          {/* Support Button */}
          <Link 
            href="/support"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-green-500 text-white font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
            </svg>
            <span>সহযোগিতা করুন</span>
          </Link>

          {/* Contact Button */}
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-300 text-gray-900 font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto justify-center">
            <span>যোগাযোগ করুন</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-8 border-t border-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
