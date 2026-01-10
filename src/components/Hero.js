import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 px-4 sm:px-8 pb-16" 
      style={{
        background: 'linear-gradient(180deg, #0d5a5a 0%, #0a4040 100%)'
      }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Section - Campaign Content */}
          <div className="z-10 flex flex-col gap-6 lg:gap-8">
            
            {/* Election Banner */}
            <div className="inline-flex rounded-full overflow-hidden w-fit shadow-lg">
              <div className="flex items-center gap-2 px-4 sm:px-6 py-3 text-white text-sm sm:text-base font-medium"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke="currentColor"/>
                  <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>জাতীয় সংসদ নির্বাচন ২০২৬</span>
              </div>
              <div className="px-6 sm:px-8 py-3 text-white font-bold text-sm sm:text-base"
                style={{ background: '#16a89a' }}>
                বগুড়া-২
              </div>
            </div>

            {/* Main Headline */}
            <div className="my-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight flex flex-col gap-2">
                <span className="text-white">শেখ মনজুরুল কে</span>
                <span className="text-green-500" style={{ textShadow: '0 2px 10px rgba(34, 197, 94, 0.3)' }}>
                  দাঁড়িপাল্লা মার্কায়
                </span>
                <span className="text-white">ভোট দিন</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              দুর্নীতিমুক্ত, সমৃদ্ধ ও ন্যায়বিচারের বাংলাদেশ গড়ার প্রত্যয়ে আমরা
              প্রতিশ্রুতিবদ্ধ। আপনার একটি ভোট পরিবর্তন আনতে পারে।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                href="/manifesto" 
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0a4040] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <span>বিস্তারিত জানুন</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
              <Link 
                href="/" 
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 shadow-lg hover:shadow-xl"
                style={{ boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17.5C10 17.5 2.5 13.75 2.5 8.125C2.5 6.63316 3.09263 5.20242 4.14752 4.14752C5.20242 3.09263 6.63316 2.5 8.125 2.5C9.11875 2.5 10.0312 2.8 10.8125 3.3125L10 4.6875C9.4375 4.3125 8.78125 4.0625 8.125 4.0625C7.04375 4.0625 6.00625 4.49375 5.24375 5.24375C4.48125 6.00625 4.0625 7.04375 4.0625 8.125C4.0625 11.3125 7.5 14.25 10 15.9375C12.5 14.25 15.9375 11.3125 15.9375 8.125C15.9375 7.04375 15.5187 6.00625 14.7562 5.24375C13.9937 4.48125 12.9562 4.0625 11.875 4.0625C11.2188 4.0625 10.5625 4.3125 10 4.6875L9.1875 3.3125C9.96875 2.8 10.8813 2.5 11.875 2.5C13.3668 2.5 14.7976 3.09263 15.8525 4.14752C16.9074 5.20242 17.5 6.63316 17.5 8.125C17.5 13.75 10 17.5 10 17.5Z" fill="currentColor"/>
                </svg>
                <span>ডোনেট করুন</span>
              </Link>
            </div>
          </div>

          {/* Right Section - Candidate Image with Slogan */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/candidate/candidate-hero.png"
                alt="শেখ মনজুরুল হক রাহাদ"
                width={600}
                height={700}
                priority
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))' }}
              />
              
              {/* Slogan Overlay */}
              <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 transform -rotate-6 z-20">
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-red-500 leading-tight whitespace-nowrap"
                  style={{
                    textShadow: `-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white, 0 0 20px rgba(239, 68, 68, 0.5)`
                  }}>
                  চলো একসাথে গড়ি বাংলাদেশ
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
