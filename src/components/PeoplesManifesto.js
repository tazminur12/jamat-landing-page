import Link from "next/link";

export default function PeoplesManifesto() {
  const participationItems = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "আপনার মতামত দিন",
      description: "দেশ গঠনে আপনার মূল্যবান মতামত শেয়ার করুন"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 8 4.5 8 9C8 10.5913 8.63214 12.1174 9.75736 13.2426C10.8826 14.3679 12.4087 15 14 15C15.5913 15 17.1174 14.3679 18.2426 13.2426C19.3679 12.1174 20 10.5913 20 9C20 4.5 16 1 12 1Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 1V15M8 20C8 20 9 19 12 19C15 19 16 20 16 20M12 15V19" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "জনগণের কণ্ঠস্বর",
      description: "আপনার দাবি সরাসরি নেতৃত্বের কাছে পৌঁছাবে"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "নীতি নির্ধারণে অংশ নিন",
      description: "জাতীয় নীতি প্রণয়নে সক্রিয় ভূমিকা রাখুন"
    }
  ];

  return (
    <section 
      id="manifesto"
      className="relative py-20 px-4 sm:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d5a5a 0%, #0a4545 100%)',
        backgroundImage: `
          linear-gradient(135deg, #0d5a5a 0%, #0a4545 100%),
          repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.02) 35px, rgba(255,255,255,.02) 70px)
        `
      }}>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Section - Main Content */}
          <div className="space-y-8">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-yellow-400">
              <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">
                জনগণের অংশগ্রহণ
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              জনতার ইস্তেহার
            </h2>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              আমরা ন্যায়বিচার ও জবাবদিহিতার ভিত্তিতে একটি মানবিক রাষ্ট্র গঠনে অঙ্গীকারবদ্ধ। সমাজে ধনী-গরিব নির্বিশেষে সবার অধিকার ও মর্যাদা নিশ্চিত করা হবে এবং দুর্নীতির বিরুদ্ধে কঠোর অবস্থান নেওয়া হবে। নৈতিকতা ও আধুনিক জ্ঞানের সমন্বয়ে একটি শক্তিশালী শিক্ষাব্যবস্থা গড়ে তোলা হবে। সুদমুক্ত অর্থনীতি, যাকাতভিত্তিক সামাজিক নিরাপত্তা ও কর্মসংস্থানের মাধ্যমে আত্মনির্ভরশীল জাতি গঠন আমাদের লক্ষ্য। শান্তি, ইনসাফ ও ইসলামী মূল্যবোধের আলোকে একটি নিরাপদ ও কল্যাণকর সমাজ প্রতিষ্ঠাই আমাদের অঙ্গীকার।
            </p>

            {/* Participation Cards */}
            <div className="space-y-4">
              {participationItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-400/20 flex items-center justify-center text-green-400">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link 
                href="https://janatarishtehar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-yellow-400 text-gray-900 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                <span>আপনার মতামত দিন</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21M21 3V9M21 3L10 14" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Section - Statistics Card */}
          <div className="lg:flex lg:justify-end">
            <div 
              className="rounded-3xl p-8 sm:p-10 space-y-8 max-w-lg"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
              
              {/* Icon */}
              <div className="inline-block">
                <div className="w-14 h-14 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                জনগণের কণ্ঠস্বর
              </h3>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                    ১০,০০০+
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">
                    মতামত সংগৃহীত
                  </div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                    ৬৪
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">
                    জেলায় সক্রিয়
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative py-6 border-l-4 border-yellow-400 pl-6">
                <p className="text-white text-lg sm:text-xl leading-relaxed italic">
                  "আপনার একটি পরামর্শ দেশ গঠনে অপরিসীম ভূমিকা রাখতে পারে।"
                </p>
              </blockquote>

              {/* Attribution */}
              <p className="text-white/60 text-sm">
                * জামায়াতে ইসলামী বাংলাদেশ
              </p>

              {/* Website Link */}
              <Link 
                href="https://janatarishtehar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300 group">
                <span className="text-lg font-medium">janatarishtehar.org</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
