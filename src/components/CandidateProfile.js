import Image from "next/image";
import Link from "next/link";

export default function CandidateProfile() {
  const commitments = [
    "বগুড়া-২ (সদর ও কচুয়া) আসনে জামায়াতে ইসলামীর মনোনীত প্রার্থী",
    "ইসলামী ছাত্রশিবিরের প্রাক্তন নেতা ও তরুণ প্রজন্মের প্রতিনিধি",
    "দুর্নীতিমুক্ত ও ন্যায়বিচার ভিত্তিক বাংলাদেশ গড়ার প্রত্যয়ে নিবেদিত",
    "শিক্ষা, স্বাস্থ্য ও জনকল্যাণমূলক কার্যক্রমে সক্রিয় অংশগ্রহণ",
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Candidate Visual Card */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: '3px solid #dc2626',
                background: 'linear-gradient(180deg, #0d5a5a 0%, #0a4040 100%)'
              }}>
              
              {/* Candidate Image */}
              <div className="relative">
                <Image
                  src="/candidate/about-candidate.jpg"
                  alt="শেখ মনজুরুল হক রাহাদ"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Bottom Info Panels */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white">
                {/* Panel 1 - Election */}
                <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border-2 border-red-100">
                  <svg className="w-8 h-8 mb-2 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
                  </svg>
                  <p className="text-sm sm:text-base font-bold text-red-600 text-center leading-tight">১৩তম</p>
                  <p className="text-xs sm:text-sm font-semibold text-red-600 text-center leading-tight">জাতীয় নির্বাচন</p>
                </div>

                {/* Panel 2 - Constituency */}
                <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border-2 border-red-100">
                  <svg className="w-8 h-8 mb-2 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm sm:text-base font-bold text-red-600 text-center leading-tight">বগুড়া</p>
                  <p className="text-xs sm:text-sm font-semibold text-red-600 text-center leading-tight">সদর ও কচুয়া</p>
                </div>

                {/* Panel 3 - Symbol */}
                <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border-2 border-red-100">
                  <svg className="w-8 h-8 mb-2 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L4 7L12 11L20 7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 7V12L12 16L20 12V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm sm:text-base font-bold text-red-600 text-center leading-tight">দাঁড়িপাল্লা</p>
                  <p className="text-xs sm:text-sm font-semibold text-red-600 text-center leading-tight">নির্বাচনী প্রতীক</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Information */}
          <div className="flex flex-col gap-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-600 font-medium">প্রার্থী পরিচিতি</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2"
                style={{ color: '#0d5a5a' }}>
                শেখ মনজুরুল হক রাহাদ
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black"
                style={{ color: '#0d5a5a' }}>
                বগুড়া-২ আসনের প্রার্থী
              </h3>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              শেখ মনজুরুল হক রাহাদ জামায়াতে ইসলামী বাংলাদেশের মনোনীত প্রার্থী হিসেবে 
              বগুড়া-২ (সদর ও কচুয়া) আসনে ১৩তম জাতীয় সংসদ নির্বাচনে প্রতিদ্বন্দ্বিতা করছেন। 
              তিনি দলের তরুণ প্রজন্মের নেতৃত্বের অংশ এবং একটি দুর্নীতিমুক্ত, সমৃদ্ধ ও 
              ন্যায়বিচারের বাংলাদেশ গড়ার স্বপ্ন নিয়ে কাজ করছেন।
            </p>

            {/* Key Features List */}
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed flex-1">
                    {commitment}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link 
                href="/manifesto"
                className="inline-block px-8 py-4 rounded-lg font-bold text-lg text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                style={{ background: '#0d5a5a' }}>
                আমাদের প্রতিশ্রুতি
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
