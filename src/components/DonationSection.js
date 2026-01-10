import Image from "next/image";

export default function DonationSection() {
  return (
    <section 
      className="py-20 px-4 sm:px-8"
      style={{ background: 'linear-gradient(135deg, #0d5a5a 0%, #0a4545 100%)' }}>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 mb-6">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
            </svg>
            <span className="text-white font-semibold text-sm">সহায়তা করুন</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            আমাদের আন্দোলনে অর্থনৈতিক সহায়তা দিন
          </h2>
          
          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto">
            আপনার প্রতিটি অবদান পরিবর্তনের পথে এক ধাপ এগিয়ে যেতে সাহায্য করে।
          </p>
        </div>

        {/* Donation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          
          {/* Mobile Banking Card */}
          <div className="bg-green-50 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                মোবাইল ব্যাংকিং
              </h3>
            </div>

            <div className="space-y-4">
              {/* bKash */}
              <div className="bg-white rounded-lg p-4 border-2 border-pink-100">
                <div className="inline-block px-3 py-1 rounded-md bg-pink-500 text-white text-sm font-bold mb-2">
                  bKash
                </div>
                <p className="text-gray-900 font-mono text-lg font-semibold">
                  ০১৭XX-XXXXXX
                </p>
                <p className="text-gray-600 text-sm mt-1">পার্সোনাল নম্বর</p>
              </div>

              {/* Rocket */}
              <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                <div className="inline-block px-3 py-1 rounded-md bg-purple-600 text-white text-sm font-bold mb-2">
                  Rocket
                </div>
                <p className="text-gray-900 font-mono text-lg font-semibold">
                  ০১৮XX-XXXXXX
                </p>
                <p className="text-gray-600 text-sm mt-1">পার্সোনাল নম্বর</p>
              </div>

              {/* Nagad */}
              <div className="bg-white rounded-lg p-4 border-2 border-orange-100">
                <div className="inline-block px-3 py-1 rounded-md bg-orange-500 text-white text-sm font-bold mb-2">
                  Nagad
                </div>
                <p className="text-gray-900 font-mono text-lg font-semibold">
                  ০১৯XX-XXXXXX
                </p>
                <p className="text-gray-600 text-sm mt-1">পার্সোনাল নম্বর</p>
              </div>
            </div>
          </div>

          {/* Bank Transfer Card */}
          <div className="bg-green-50 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21M3 10H21M5 6L12 3L19 6M6 10V21M10 10V21M14 10V21M18 10V21" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                ব্যাংক ট্রান্সফার
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 text-sm mb-1">ব্যাংকের নাম</p>
                <p className="text-gray-900 font-semibold text-base">
                  ইসলামী ব্যাংক বাংলাদেশ লিমিটেড
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 text-sm mb-1">হিসাব নাম</p>
                <p className="text-gray-900 font-semibold text-base">
                  জাতীয় নাগরিক পার্টি নির্বাচন তহবিল
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 text-sm mb-1">হিসাব নম্বর</p>
                <p className="text-gray-900 font-mono font-semibold text-lg">
                  ২০৫০১-২১০০০XXXXX
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 text-sm mb-1">শাখা</p>
                <p className="text-gray-900 font-semibold text-base">
                  মতিঝিল শাখা, ঢাকা
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 text-sm mb-1">রাউটিং</p>
                <p className="text-gray-900 font-mono font-semibold text-lg">
                  ১২৫২৬১৫২৮
                </p>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="bg-green-50 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                QR কোড স্ক্যান
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center">
              {/* QR Code Placeholder */}
              <div className="w-48 h-48 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-gray-200">
                <svg className="w-32 h-32 text-gray-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="3" height="3"/>
                  <rect x="18" y="14" width="3" height="3"/>
                  <rect x="14" y="18" width="3" height="3"/>
                  <rect x="18" y="18" width="3" height="3"/>
                </svg>
              </div>
              
              <p className="text-gray-900 font-bold text-lg mb-3">QR কোড</p>
              
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">
                  bKash অ্যাপ দিয়ে স্ক্যান করুন
                </p>
                <p className="text-gray-600 text-sm">
                  যেকোনো QR সাপোর্টেড অ্যাপ ব্যবহার করুন
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <p className="text-white/90 text-sm sm:text-base leading-relaxed text-center">
            <span className="font-bold">বিশেষ দ্রষ্টব্য:</span> আপনার অনুদান সম্পূর্ণ স্বেচ্ছায় দেওয়া। 
            এই তহবিল শুধুমাত্র নির্বাচনী প্রচারণা কাজে ব্যবহৃত হবে। সকল লেনদেনের স্বচ্ছ হিসাব রাখা হয়।
          </p>
        </div>
      </div>
    </section>
  );
}
